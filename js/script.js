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
    humanCharacteristics.colorieTable[0].style.display = 'none';
    humanCharacteristics.buttonСalculation.disabled = true ;
    humanCharacteristics.buttonClear.disabled = true ;
    humanCharacteristics.inputAge.value = '' ;
    humanCharacteristics.inputHeight.value = '' ;
    humanCharacteristics.inputWeight.value = '' ;
    humanCharacteristics.buttonMale.checked = true;
    humanCharacteristics.basePhisicalActive.checked = true;
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
const formulaCalculation = () =>{
    return (10 * document.getElementById('weight').value  + 6.25 * document.getElementById('height').value + 
    5 * document.getElementById('age').value);
} 
const openTable = () => {
    if(humanCharacteristics.colorieTable){
        humanCharacteristics.colorieTable[0].style.display = 'block';
    }
}
const resultAll = () =>{
    document.getElementById('calories-norm').innerHTML = Math.round(resul) // ОБРАЩАЮСЬ К SPAN ТЕКСТУ
    document.getElementById('calories-minimal').innerHTML = Math.round(resul - 0.15 * resul)
    document.getElementById('calories-maximal').innerHTML = Math.round(resul + 0.15 * resul)
}
let resul = 0
const calorieCalculion = () =>{ // Расчет формулы на основании пола нагрузок и данных пользователя
    if(humanCharacteristics.buttonMale.checked === true){
        if(humanCharacteristics.basePhisicalActive.checked === true){
            resul = formulaCalculation() * loadFactor.min + 5
        } else if (radioChecked.activeLow.checked === true){
            resul = formulaCalculation() * loadFactor.low + 5
        } else if (radioChecked.activeMid.checked === true){
            resul = formulaCalculation() * loadFactor.mid + 5
        } else if (radioChecked.activeHigh.checked === true){
            resul = formulaCalculation() * loadFactor.higt + 5
        } else if (radioChecked.activeVeryHigh.checked === true){
            resul = formulaCalculation() * loadFactor.higtLoad + 5
        }
    }else if(humanCharacteristics.buttonFemale.checked === true){
        if(humanCharacteristics.basePhisicalActive.checked === true){
            resul = formulaCalculation() * loadFactor.min - 161
        } else if (radioChecked.activeLow.checked === true){
            resul = formulaCalculation() * loadFactor.low - 161
        } else if (radioChecked.activeMid.checked === true){
            resul = formulaCalculation() * loadFactor.mid - 161
        } else if (radioChecked.activeHigh.checked === true){
            resul = formulaCalculation() * loadFactor.higt - 161
        } else if (radioChecked.activeVeryHigh.checked === true){
            resul = formulaCalculation() * loadFactor.higtLoad - 161
        }
    }
    return resultAll () ;
};

humanCharacteristics.buttonСalculation.onclick = function() {
    openTable();
    calorieCalculion();
    event.preventDefault();
};

// Создаю объект в котором находятся радиокнопки с атрибутом checked
const radioChecked = {
    activeLow : document.getElementById('activity-low'),
    activeMid : document.getElementById('activity-medium'),
    activeHigh : document.getElementById('activity-high'),
    activeVeryHigh : document.getElementById('activity-maximal')
};


