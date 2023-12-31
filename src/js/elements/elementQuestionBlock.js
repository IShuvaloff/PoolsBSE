import { el } from 'redom';
import Button from '../components/Button/button';

export default function elementQuestionBlock() {
  const title = el('.question__title');
  title.innerHTML =
    'Задайте вопрос нашим специалистам и получите <span class="question__title--special">профессиональную консультацию!</span>';

  const inputQuestionText = el(`input.question__input#question-text`);
  inputQuestionText.placeholder = 'Задайте вопрос';
  inputQuestionText.type = 'text';

  const inputQuestionPhone = el(`input.question__input#question-phone`);
  inputQuestionPhone.placeholder = '+7 (911) 642-32-99';
  inputQuestionPhone.type = 'tel';

  const btn = new Button({
    classNames: ['btn', 'question__btn'],
    caption: 'Получить консультацию',
  });

  return el('.question', [title, inputQuestionText, inputQuestionPhone, btn]);
}
