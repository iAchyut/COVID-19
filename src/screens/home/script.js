
// change the question in following format
/**
 * [
 *    {
 *      question: "This is the question",
 *      options: [options1, options2, option3, option4],
 *      answerIndex: 2
 *    }
 * ]
 */
// export function getQue(indexes) {
//   const items = ['Which country has most casualty due to COVID-19', 'Which country has most COVID-19 positive cases ?',
//     'Counties/Area or Territories affected by COVID-19', 'Fact Check: COVID-19 is ', 'Fact Check: COVID-19 has ', 'Fact Check: Cold Weather can kill Coronavirus', 'Fact Check: Cornovirus can be transmitted through Mosquito bite', 'Fact Check: Do vaccines against pneumonia protect you against the new coronavirus?'];
//   const option1 = ['Fever', 'China', 'USA', '>199', 'More infectious than, 'more fatalilty rate than SARS', 'No', 'N, 'No'];
//   const option2 = ['Dry Cough', 'Italy', 'China', '170-180', 'Less infectious than SARS', 'less fatalilty rate than SARS', 'Yes', 'Yes', 'Yes'];
//   const option3 = ['Diabetes', 'Spain', 'Italy', '100-150', '', '', '', '', ''];
//   const option4 = ['Breathlessness', 'USA', 'Spain', '<100', '', '', '', '', ''];
//   const answers = ['Diabetes', 'Italy', 'USA', '>199', 'More infectious than SARS', 'less fatalilty rate than SARS', 'No', 'No', 'No'];
//   // var rand = items[Math.floor(Math.random() * items.length)];

//   const selectedItems = items[indexes];
//   const opt1 = option1[indexes];
//   const opt2 = option2[indexes];
//   const opt3 = option3[indexes];
//   const opt4 = option4[indexes];
//   const ans = answers[indexes];
//   return {
//     selectedItems, opt1, opt2, opt3, opt4, ans,
//   };
// }

export const questions = [
  {
    question: 'Where did COVID-19 Outbreak started ?',
    options: ['Japan', 'China', 'Korea', 'Taiwan'],
    answer: 'China',
    answerIndex: 1,
  },
  {
    question: 'How long is incubation period for COVID-19 ?',
    options: ['1-14 days', '2-3 days', '6-7 days', '8-9 days'],
    answer: '1-14 days',
    answerIndex: 0,
  },
  {
    question: 'Which among the following  are not symptons of COVID-19 ?',
    options: ['Fever', 'Dry Cough', 'Diabetes', 'Breathlessness'],
    answer: 'Diabetes',
    answerIndex: 2,
  },
];
