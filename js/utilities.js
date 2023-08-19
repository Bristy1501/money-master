function getValueById(valueId){
    const element= document.getElementById(valueId)
    const elementValue=element.value
    const elementParse= parseFloat(elementValue)
    return elementParse
}

function getInnerTextById(valueId){
    const element= document.getElementById(valueId)
    const elementValue=element.innerText
    const elementParse= parseFloat(elementValue)
    return elementParse
}

function setValueById(textId,elementValue){
    const setValue =document.getElementById(textId)
    setValue.innerText=elementValue
    return elementValue
}