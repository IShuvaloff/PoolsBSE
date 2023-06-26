const HtmlWebpackPlugin = require('html-webpack-plugin'); // ! для взятия src/index.html в качестве шаблона создания результирующего
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // ! для извлечения стилей css из общего js-бандла в отдельный файл .css
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); // ! для оптимизации изображений
const FaviconsWebpackPlugin = require('favicons-webpack-plugin'); // ! установка иконки favicon
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin'); // ! для извлечения данных из созданного спрайта
const path = require('path'); // ! глобальный системный путь к корневой папке (может различаться между разными ОС)

// ! источник входных файлов .js и других
const entry = [
  path.join(__dirname, 'src', 'index.js'),
  // path.join(__dirname, 'src', 'main.sass'), // ! можно здесь, но лучше импортировать все нужные файлы внутрь главного entry-файла index.js
];

// ! результирующие файлы
const output = {
  path: path.join(__dirname, 'dist'), // ! результирующий файл в папку dist/main.js
  filename: 'index.[contenthash].js',
  publicPath: '/PoolsBSE/',
  clean: true, // ! очистить папку перед сборкой
  assetModuleFilename: path.join('assets', '[name].[contenthash][ext]'), // ! общее место сохранения файлов (если для типа файла не назначен generator)
};

// ! подключаемые плагины
const plugins = [
  // ? создание HTML-файла
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src', 'index.html'), // ! исходный файл
    filename: 'index.html', // ! результирующий файл
  }),

  // ? минимизация CSS
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css', // ! минификация и создание отдельного файла .css (указано результирующее имя)
  }),

  // ? формирование favicon
  new FaviconsWebpackPlugin({
    logo: './src/assets/img/favicon.png',
    mode: 'webapp',
    devMode: 'webapp',
    prefix: 'assets/',
    cache: true,
    inject: (/*HtmlWebpackPlugin*/) => {
      return true;
      // return (
      //   path.basename(HtmlWebpackPlugin.options.filename) === 'src/index.html'
      // ); // ! если нужно задать разные иконки для разных html-страниц, которые следует разместить в отдельной папке pages
    },
  }),

  // ? работа с SVG-спрайтом
  new SpriteLoaderPlugin(),
];

// ! обработка файлов проекта
const modules = (env) => ({
  rules: [
    {
      // ? обработка растровых изображений
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: path.join('img', '[name].[contenthash][ext]'),
      },
    },
    {
      // ? обработка векторных изображений
      test: /\.svg$/i,
      use: [
        {
          loader: 'svg-sprite-loader', // ! создание SVG-спрайта
          options: {
            publicPath: 'icons/',
            spriteFilename: (svgPath) =>
              `sprite.[contenthash]${svgPath.substr(-4)}`,
          },
        },
        'svgo-loader',
      ],
      // type: 'asset/resource',
      // generator: {
      //   filename: path.join('icons', '[name].[contenthash][ext]'), // ! изменить папку и имя файла для .svg-картинок
      // },
    },
    {
      // ? обработка файлов стилей sass/scss
      test: /\.s[ac]ss$/i, // ! только файлы .sass, причем в конце имени
      use: [
        // 'style-loader', // #4... (Creates `style` nodes from JS strings)
        env.prod ? MiniCssExtractPlugin.loader : 'style-loader', // ! #4... (создает минифицированный блок стилей в отдельном файле .css для development)
        'css-loader', // ! #3... (Translates CSS into CommonJS)
        'postcss-loader', // ! #2... (добавляет пост-обработку для разных браузеров)
        'sass-loader', // ! #1 в очереди (Compiles Sass to CSS)
      ],
    },
    {
      // ? обработка файлов стилей css
      test: /\.css$/i,
      use: [
        // 'style-loader', // #4... (Creates `style` nodes from JS strings)
        env.prod ? MiniCssExtractPlugin.loader : 'style-loader', // ! #4... (создает минифицированный блок стилей в отдельном файле .css для development)
        'css-loader', // ! #3... (Translates CSS into CommonJS)
        'postcss-loader', // ! #2... (добавляет пост-обработку для разных браузеров)
      ],
    },
    {
      // ? обработка шрифтов
      test: /\.(woff|woff2)$/i,
      type: 'asset/resource',
      generator: {
        filename: path.join('fonts', '[name].[contenthash][ext]'),
      },
    },
    {
      // ? обработка js-файлов
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },
  ],
});

// ! оптимизация файлов
const optimization = {
  minimizer: [
    // ? оптимизация изображений через image-minimizer-plugin
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo', { name: 'preset-default' }],
          ],
        },
      },
    }),
  ],
};

// ! сервер Webpack
const devServer = {
  watchFiles: path.join(__dirname, 'src'), // ! наблюдатель за изменениями для авто-релодинга
  port: 9000,
  hot: true,
  historyApiFallback: true,
};

// * экспорт объекта с настройками
module.exports = (env) => ({
  entry,
  output,
  plugins,
  module: modules(env),
  optimization,
  devServer,
});
