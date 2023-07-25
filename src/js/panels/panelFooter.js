import { el } from 'redom';
import panelFooterTop from './panelFooterTop';
import elementCopyright from '../elements/elementCopyright';
import elementContainer from '../elements/elementContainer';

export default function panelFooter() {
  const containerFooter = elementContainer(
    [panelFooterTop(), elementCopyright('footer')],
    'footer'
  );
  return el('footer.footer', [containerFooter]);
}
