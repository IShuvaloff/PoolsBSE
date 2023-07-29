import closeIcon from '../../assets/icons/close-btn.svg';
import Button from '../components/Button/button';

export default function elementCloseBtn(className) {
  return new Button({
    id: `${className}-close-btn`,
    classNames: ['btn', 'btn__close', `${className}__btn`],
    svg: closeIcon,
  });
}
