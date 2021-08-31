document.getElementById('login-form').addEventListener('click', function (){
    // get user data
    const emailbox = document.getElementById('user-mail');
    const userEmail = emailbox.value;
    
    // get user pass
    const passwordBox = document.getElementById('user-pass');
    const userPass = passwordBox.value;
    
    // cheek user name and pass

    if( userEmail == 'tanvierul@gmail.com'  && userPass == '123'){
       window.location.href = "banking.html"
    }

})