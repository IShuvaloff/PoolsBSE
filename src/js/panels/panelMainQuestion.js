import { el } from 'redom';
import elementQuestionBlock from '../elements/elementQuestionBlock';

export default function panelMainQuestion() {
  const darken = el('.question-bg-darken');

  const question = elementQuestionBlock();

  const container = el('.question-wrapper', [darken, question]);

  return container;
}
