document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('email-input');
    const email = emailField.value;
    
    //console.log(email);
    const passFile = document.getElementById('pass-input');
    const pass = passFile.value;
    
    //console.log(pass);
    if(email ==='sontan@bap.com' && pass ==='12345'){
        window.location.href ='bank.html';

    }
    else{
        alert('toke ami dukte dibo na!!')
    }
})