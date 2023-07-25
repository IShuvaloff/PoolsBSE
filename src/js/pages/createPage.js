import createPageUnknown from './createPageUnknown';
import createPageMain from './createPageMain';
import { updateDocumentTitle } from '../utils';
import createPagePools from './createPagePools';
import createPageFontains from './createPageFontains';
import createPageDewatering from './createPageDewatering';
import createPageWatering from './createPageWatering';
import createPageLandscaping from './createPageLandscaping';
import createPageArtificial from './createPageArtificial';

export default function createPage(name) {
  updateDocumentTitle(name);

  switch (name) {
    case 'main':
      createPageMain();
      break;
    case 'artificial':
      createPageArtificial();
      break;
    case 'pools':
      createPagePools();
      break;
    case 'fontains':
      createPageFontains();
      break;
    case 'dewatering':
      createPageDewatering();
      break;
    case 'watering':
      createPageWatering();
      break;
    case 'landscaping':
      createPageLandscaping();
      break;
    default:
      createPageUnknown();
  }
}
