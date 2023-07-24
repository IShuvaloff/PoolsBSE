import createPageUnknown from './createPageUnknown';
import createPageMain from './createPageMain';
import { updateDocumentTitle } from '../utils';
import createPagePools from './createPagePools';

export default function createPage(name) {
  console.log(name);
  updateDocumentTitle(name);

  switch (name) {
    case 'main':
      createPageMain();
      break;
    case 'pools':
      createPagePools();
      break;
    default:
      createPageUnknown();
  }
}
