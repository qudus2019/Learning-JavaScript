let form = document.forms.form;
let inputs = form.querySelectorAll('.form__input--control');
let outputs = document.querySelectorAll('.container__output span');
let table = {};
let dataTable = JSON.parse(localStorage.getItem('dataTable'));

console.log('parsed data table', dataTable);

if(dataTable){
    console.log('Hurray!!! Data table exists in local storage');
    let dataValues = Object.values(dataTable);
    console.log(dataValues);

    for (let i = 0; i < outputs.length; i++){
        console.log(i + 1, outputs[i]);
        for (let j = 1; j < dataValues.length; j++){
            console.log(i + 1, dataValues[i]);
            outputs[i].textContent = dataValues[i]
        
        }
    }

}else{
    console.log('Sorry, Data table not existing in local storage');
}
    console.log('data table does not exist in local storage');
 


 let buttons = document.querySelectorAll('button');

 buttons[1].addEventListener('click',e => {
    outputs.forEach(each => {
        each.textContent = '';
    })
    inputs.forEach(each => {
        each.value = '';
    })

    localStorage.removeItem('dataTable');
 })

 buttons[0].addEventListener('click', e => {
    inputs.forEach((input , index) => {
             let text = input.value;
             if(!text == ''){
                 let name = 'input ' + index ;
                 table[`${name}`] = text;
                localStorage.setItem('dataTable', JSON.stringify(table));
    
                    outputs[index].textContent = input.value;
             }
        })
     })
 