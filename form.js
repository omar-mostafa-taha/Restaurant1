let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();


function validation(e) {
    e.preventDefault();
    // store the value that user enter in variables
    var user = document.getElementById('user').value;
    var user2 = document.getElementById('user2').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;




    //  to accert a name of 3 letters at least
    if (user.length < 3) {
        alert("first Name must be more than 2 letters");
        return false;
    }
    if (user2.length < 3) {
        alert("last Name must be more than 2 letters");
        return false;
    }
    if (mobile.length != 11) {
        alert("please enter a valid number");
        return false;
    }



    if (pass.search(/[ ]/) != -1) {
        alert("must not include a space");
        return false;
    }
    // limit the lenght of the  pass
    if (pass.length != 8) {
        alert("please write a passward of 8 no long no less");
        return false;
    }
    // must enclud numbers
    if (pass.search(/[0-9]/) == -1) {

        alert("must incluce at least a number");
        return false;
    }
    //not to accept without upper characters
    var first = pass.substr(0, 1);
    if (!(first.match(/[A-Z]/))) {
        alert("first letter should be upper case");
        return false;
    }
    // not to accept without lower characters
    if (pass.search(/[a-z]/) == -1) {
        alert("must include at least 1 lowwer character");
        return false;
    }
    // not accept without special characters
    if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/) == -1) {

        alert("must include 1 special character");
        return false;
    }

    if (conpass != pass) {
        alert("**passward is not matching");
        return false;

    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        alert("Please Enter valid Email");
        return false;
    }
    else {
        alert("thank you");
        window.location.href = './index.html';
        return true;
    }



}