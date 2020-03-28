
// change the question in following format
/**
 * [
 *    {
 *      Question: "This is Question", Opt1: 'option1', Opt2: 'OPtion2', Opt3: 'Option3',
 *      Opt4:'OPTION4', Ans: 'OPTION4',
 *    }
 * ]
 */
export function getQue(indexes) {
    var items = ['Where did COVID-19 Outbreak started ?', 'How long is incubation period for COVID-19 ?', 'Which among the following  are not symptons of COVID-19.', 'Which country has most casualty due to COVID-19?', 'Which country has most COVID-19 positive cases ?', 
    'Counties/Area or Territories affected by COVID-19', 'Fact Check: COVID-19 is ', 'Fact Check: COVID-19 has ', 'Fact Check: Cold Weather can kill Coronavirus','Fact Check: Cornovirus can be transmitted through Mosquito bite','Fact Check: Do vaccines against pneumonia protect you against the new coronavirus?'];
    var option1 = ['Japan','1-14 days','Fever','China','USA','>199','More infectious than SARS','more fatalilty rate than SARS','No','No','No']
    var option2 = ['China','2-3 days','Dry Cough','Italy','China','170-180','Less infectious than SARS','less fatalilty rate than SARS','Yes', 'Yes','Yes']
    var option3 = ['Korea','6-7 days','Diabetes','Spain','Italy','100-150','','','','','']
    var option4 = ['Taiwan','8-9 days','Breathlessness','USA','Spain','<100','','','','','']
    var answers = ['China','1-14 days','Diabetes','Italy','USA','>199','More infectious than SARS','less fatalilty rate than SARS','No','No','No']
    // var rand = items[Math.floor(Math.random() * items.length)];
    
   var selectedItems = items[indexes];
    var opt1 = option1[indexes];
    var opt2 = option2[indexes];
    var opt3 = option3[indexes];
    var opt4 = option4[indexes];
    var ans= answers[indexes];
    return { selectedItems, opt1, opt2, opt3, opt4, ans };
  }
