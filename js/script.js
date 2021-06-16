"use strict"
// I do the opening of the buttons 
const humanCharacteristics = {
    inputAge: document.getElementById('age'),
    inputHeight: document.getElementById('height'),
    inputWeight: document.getElementById('weight'),
    buttonСalculation: document.getElementById('submit'),
    buttonClear: document.getElementById('clearAllParameters'),
    buttonMale:document.getElementById('gender-male'),
    buttonFemale:document.getElementById('gender-female'),
    basePhisicalActive: document.getElementById('activity-minimal'),
    colorieTable: document.getElementsByClassName('counter__result--hidden')
}
const handleChange = () =>{
    if(humanCharacteristics.inputAge.value && 
        humanCharacteristics.inputHeight.value && 
        humanCharacteristics.inputWeight.value > 0){
           humanCharacteristics.buttonСalculation.disabled = false       
        }else if(humanCharacteristics.inputAge.value ||
             humanCharacteristics.inputWeight.value ||
             humanCharacteristics.inputHeight.value > 0){
                humanCharacteristics.buttonClear.disabled = false
            }
};
humanCharacteristics.inputAge.oninput = function() {handleChange()};
humanCharacteristics.inputHeight.oninput = function() {handleChange()};
humanCharacteristics.inputWeight.oninput = function() {handleChange()};
// I make a reset button for the parameters
const resetParameters = () =>{
    humanCharacteristics.buttonСalculation.disabled = true ;
    humanCharacteristics.buttonClear.disabled = true ;
    humanCharacteristics.inputAge.value = '' ;
    humanCharacteristics.inputHeight.value = '' ;
    humanCharacteristics.inputWeight.value = '' ;
    humanCharacteristics.buttonMale.checked = true;
    humanCharacteristics.basePhisicalActive.checked = true;
    for(let i = 0; i < humanCharacteristics.colorieTable.length; i++){
        humanCharacteristics.colorieTable[i].style.visibility = 'hidden';
    };
    
};
humanCharacteristics.buttonClear.onclick = function() {resetParameters()};
// i do calorie table
// Создаю объект нагрузок 
const loadFactor = {
    min: 1.2 ,
    low: 1.375 ,
    mid: 1.55 ,
    higt: 1.725 ,
    higtLoad: 1.9
};
const numerWeight = humanCharacteristics.inputWeight.value;
const numerheight = humanCharacteristics.inputHeight.value;
const numberAge = humanCharacteristics.inputAge.value;
const formulaCalculation = () =>{
    return (10 * numerWeight  + 6.25 * numerheight + 5 * numberAge + 5);
} 
const openTable = () => {
    if(humanCharacteristics.colorieTable){
        for(let i = 0; i < humanCharacteristics.colorieTable.length; i++){
            humanCharacteristics.colorieTable[i].style.visibility = 'visible';
        }
    }
}
let resul = 0
const calorieCalculion = () =>{
    if(humanCharacteristics.buttonMale.checked === true){
        if(humanCharacteristics.basePhisicalActive.checked === true){
            resul = formulaCalculation() * loadFactor.min
        } else if (radioChecked.activeLow.checked === true){
            resul = formulaCalculation() * loadFactor.low
        } else if (radioChecked.activeMid.checked === true){
            resul = formulaCalculation() * loadFactor.mid
        } else if (radioChecked.activeHigh.checked === true){
            resul = formulaCalculation() * loadFactor.higt
        } else if (radioChecked.activeVeryHigh.checked === true){
            resul = formulaCalculation() * loadFactor.higtLoad
        }
    }
    return document.getElementById('calories-minimal').innerHTML = resul // ОБРАЩАЮСЬ К SPAN ТЕКСТУ
};

humanCharacteristics.buttonСalculation.onclick = function() {
    openTable();
    calorieCalculion();
};

// Создаю объект в котором находятся радиокнопки с атрибутом checked
const radioChecked = {
    activeLow : document.getElementById('activity-low'),
    activeMid : document.getElementById('activity-medium'),
    activeHigh : document.getElementById('activity-high'),
    activeVeryHigh : document.getElementById('activity-maximal')
};
const baseResult = {
    minCalorie: document.getElementById('calories-minimal').innerHTML,
    normCalorie : document.getElementById('calories-norm').innerHTML,
    highCalorie : document.getElementById('calories-maximal').innerHTML
};

