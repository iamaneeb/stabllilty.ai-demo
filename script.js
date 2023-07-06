let signValue = document.querySelector('.sign-button');

function SIGNIN(){
    if ( document.querySelector('.sign-button').innerHTML == 'SIGN IN'){
        document.querySelector('.sign-button').innerHTML = 'SIGN OUT';
    }else{
        document.querySelector('.sign-button').innerHTML = 'SIGN IN';
    }
    

}