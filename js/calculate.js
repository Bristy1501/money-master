document.getElementById('calculate-btn').addEventListener('click', function(){
    const income=getValueById('income')
    console.log(income)
    const food=getValueById('food')
    console.log(food)
    const rent=getValueById('rent')
    console.log(rent)
    const clothes=getValueById('clothes')
    console.log(clothes)
    const expense=food+rent+clothes
    console.log(expense)
    
    const balance=income-expense
    console.log(balance)

   
    const setExpense =setValueById('expense',expense)
    const setBalance =setValueById('balance',balance)
   

})
document.getElementById('save-btn').addEventListener('click', function(){
    const save=getValueById('save')
    console.log(save)
    const newBalance=getInnerTextById('balance')
    console.log(newBalance)
  
    const saving=newBalance*(save/100)
    console.log(saving)
    
    const remaining=newBalance-saving
    console.log(remaining)

   
    const setSaving =setValueById('saving',saving)
    const setRemaining =setValueById('remaining',remaining)
   

})

