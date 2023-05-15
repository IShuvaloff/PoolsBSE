import './main.sass';
import './js/routing';
import { showNotification } from './js/notifications';

// ! демонстрация уведомлений
showNotification('Информация', 'info');
showNotification('Ошибка', 'error');
showNotification('Предостережение', 'warning');
showNotification('Успех', 'success');
