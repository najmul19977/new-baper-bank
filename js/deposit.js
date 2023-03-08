document.getElementById('btn-Deposit').addEventListener('click',function(){
    const inputDep = document.getElementById('input-Deposit');
    const newdeposit = inputDep.value;
    inputDep.value='';
    
    //console.log(deposit);
    const depoCurrentAmount = document.getElementById('depo-value');
    const previousdepoTotal = depoCurrentAmount.innerText;
    const currentDepoTotal = parseFloat (previousdepoTotal)  + parseFloat(newdeposit) ;
    

    //console.log(depoTotal);
    depoCurrentAmount.innerText = currentDepoTotal;

    const previousBlance = document.getElementById('blance-value');
    const previousBlanceAmount = previousBlance.innerText;
    console.log(previousBlanceAmount);
    const currentTotalBlance = parseFloat(previousBlanceAmount)+ parseFloat(newdeposit);
    previousBlance.innerText=currentTotalBlance;


    
})