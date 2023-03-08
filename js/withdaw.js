document.getElementById('btn-Withdraw').addEventListener('click',function(){
    const withdowInpurField = document.getElementById('input-Withdraw');
    const WithdrawField = withdowInpurField.value;
    withdowInpurField.value='';
    //console.log(WithdrawField);

    const previusWithdowTotal = document.getElementById('total-w-value');
    const previusTotal = previusWithdowTotal.innerText;
    const currentWithdowTotal = parseFloat(WithdrawField) + parseFloat(previusTotal);
    previusWithdowTotal.innerText =currentWithdowTotal;

    const previousBlance = document.getElementById('blance-value');
    const previousBlanceAmount = previousBlance.innerText;
    //console.log(previousBlanceAmount);

    const currentBlance  =  parseFloat(previousBlanceAmount)-parseFloat(WithdrawField)
    previousBlance.innerText = currentBlance;

    //console.log(previusTotal);
})