import panelDialog from './panelDialog';

export default function panelDialogCallOrder() {
  return panelDialog({
    title:
      'Запишитесь на замер с сайта и получите скидку до 50% на проектирование',
    titleSpecialPatterns: [{ from: 40, to: 52 }],
    inputs: [
      { id: 'service', placeholder: 'Вид услуги' },
      { id: 'request', placeholder: 'Записаться на замер' },
      { id: 'address', placeholder: 'Адрес' },
      { id: 'phone', placeholder: '+7 (123) 456-78-90' },
    ],
    btnText: 'Записаться на замер',
    className: 'order-request',
  });
}
