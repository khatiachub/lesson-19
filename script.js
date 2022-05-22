let forms=document.getElementById('form');

forms.addEventListener('submit',function(event){
    event.preventDefault();
    let form=event.target;
    let errors={};


    let name=document.getElementById('name').value;
    if(name.length<3||name==''){
        errors.username='Username must not be empty and must be more then 3 characters'
    }

 //email   
 let email=document.getElementById('mail').value;

    if(email==''){
        errors.email='your email must not be empty'
    }
//password  
    let password1=document.getElementById('password').value
    let passwordRepeat=document.getElementById('password2').value
    if(password1!=passwordRepeat||password1==''){
        errors.passw='Password can not be empty';
        errors.passw2='Passwords do not match';
    }
    
    let checkBox=document.getElementById('checkbox').checked;
    if(!checkBox){
        errors.check='you must agree our terms and conditions'
    }
//radio
    let gender=false;
    form.querySelectorAll('[name = "gender"]').forEach(element => {
        if (element.checked) {
            gender  = true;
        }
    });
    if(!gender){
        errors.gender='Please select your age'
    }
    form.querySelectorAll('.errortext').forEach(item=>{
        item.innerHTML='';
    });
    
    for(let item in errors){
        let spanText=document.getElementById('error_'+item);
        if(spanText){
            spanText.textContent=errors[item];
            spanText.style.color='red'
        }
    }
    if (Object.keys(errors).length == 0) {
        form.submit();
    }
});




//eye-icon
let password=document.getElementById('password')
let password2=document.getElementById('password2')
let icon=document.getElementById('iconeye');
let icon2=document.getElementById('eyeicon');


showPassword = () =>{
    if(password.type=='password'){
        password.setAttribute('type', 'text');
        icon.classList.add('fa-eye-slash')
    }else{
        icon.classList.remove('fa-eye-slash');
        password.setAttribute('type', 'password');
    }
}
showPassword2=()=>{
    if(password2.type=='password'){
        password2.setAttribute('type','text');
        icon2.classList.add('fa-eye-slash');
    }else{
        password2.setAttribute('type','password');
        icon2.classList.remove('fa-eye-slash');

    }
}

icon.addEventListener('click',showPassword);
icon2.addEventListener('click',showPassword2);


function validation(){
    let mail=document.getElementById('mail').value;

    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailSpan=document.getElementById('error_email')
if(mail.match(emailStructure)){
    emailSpan.innerHTML = 'Your Email is valid';
    emailSpan.style.color = 'green';

}else{
    emailSpan.innerHTML= 'Your Email is invalid';
    emailSpan.style.color = 'red';
}

}