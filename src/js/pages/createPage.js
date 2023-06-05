import createPageUnknown from './createPageUnknown';
import createPageMain from './createPageMain';
import { updateDocumentTitle } from '../utils';

export default function createPage(name) {
  console.log(name);
  updateDocumentTitle(name);

  switch (name) {
    case 'main':
      createPageMain();
      break;
    default:
      createPageUnknown();
  }
}
