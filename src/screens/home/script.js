
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
    question: 'How long do Coronavirus survive on sufaces?',
    options: [ 'Less than a minute', 'Few hours to several days','Upto an year', 'Can not survive at all'],
    answer: 'Few hours to several days',
    answerIndex: 1,
  },
  {
    question: 'How long is incubation period for COVID-19 ?',
    options: [ '2-3 days', '6-7 days','1-14 days', '8-9 days'],
    answer: '1-14 days',
    answerIndex: 2,
  },
  {
    question: 'Which among the following  are not symptons of COVID-19 ?',
    options: ['Fever',  'Wet Cough','Dry Cough', 'Breathlessness'],
    answer: 'Wet Cough',
    answerIndex: 1,
  },
  {
    question: 'Which country has most COVID-19 positive cases ?',
    options: [ 'CHINA', 'ITALY', 'USA','SPAIN'],
    answer: 'USA',
    answerIndex: 2,
  },
  {
    question: 'I can catch COVID-19 from my Pet',
    options: ['Myth', 'Fact'],
    answer: 'Myth',
    answerIndex: 0,
  },
  {
    question: 'Fact Check: COVID-19 is ',
    options: [ 'Less infectious than SARS', 'More infectious than SARS'],
    answer: 'More infectious than SARS',
    answerIndex: 1,
  },
  {
    question: 'Fact Check: COVID-19 has ',
    options: ['Less fatalilty rate than SARS', 'More fatalilty rate than SARS'],
    answer: 'Less fatalilty rate than SARS',
    answerIndex: 1,
  },
  {
    question: 'Summer season can kill Coronavirus',
    options: ['Myth', 'Fact'],
    answer: 'Myth',
    answerIndex: 0,
  },
  {
    question: 'Fact Check: Cornovirus can be transmitted through Mosquito bite',
    options: [ 'Fact','Myth'],
    answer: 'Myth',
    answerIndex: 1,
    description: ''
  },
  {
    question: 'Do vaccines against pneumonia protect you against the new coronavirus?',
    options: ['Myth', 'Fact'],
    answer: 'Myth',
    answerIndex: 0,
    description: 'Not yet. To date, there is no vaccine and no specific antiviral medicine to prevent or treat COVID-2019.'
  },
  {
    question: 'Coronavirus is airborne',
    options: ['Fact','Myth'],
    answer: 'Myth',
    answerIndex: 1,
    description: 'The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. There droplets are too heavy to hang in the air. They quickly fall on floors or surfaces.'

  },
];
