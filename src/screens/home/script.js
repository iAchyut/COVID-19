
export function getQue(indexes) {
    var items = ['Where did COVID-19 Outbreak started ?', 'How long is incubation period for COVID-19 ?', 'Which among the following  are not symptons of COVID-19.', 'Which country has most casualty due to COVID-19?', 'Which country has most COVID-19 positive cases ?', 
    'Counties/Area or Territories affected by COVID-19', 'COVID-19 is ', 'COVID-19 is ', 'Cold Weather can kill Coronavirus','Cornovirus can be transmitted through Mosquito bite','Do vaccines against pneumonia protect you against the new coronavirus?'];
    var option1 = ['Japan','1-14 days','Fever','China','USA','>199','More infectious than SARS','more fatality rate than SARS','No','Not proven yet','No']
    var option2 = ['China','2-3 days','Dry Cough','Italy','China','170-180','Less infectious than SARS','less fatality rate than SARS','Yes', 'Yes','Yes']
    var option3 = ['Korea','6-7 days','Diabetes','Spain','Italy','100-150','Both are equally infectious','equally fatal','Maybe','Maybe','Maybe']
    var option4 = ['Taiwan','8-9 days','Breathlessness','USA','Spain','<100','Not infectious at all','not fatal at all','Sometimes','Sometimes','Sometimes']
    // var rand = items[Math.floor(Math.random() * items.length)];
    
   var selectedItems = items[indexes];
    var opt1 = option1[indexes];
    var opt2 = option2[indexes];
    var opt3 = option3[indexes];
    var opt4 = option4[indexes];
    return { selectedItems, opt1, opt2, opt3, opt4, ans:opt1 };
  }
