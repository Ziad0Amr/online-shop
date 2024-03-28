let emailLogin=document.getElementById('emailLogin');
let passwordLogin=document.getElementById('passwordLogin');


let datauserlogin=JSON.parse(localStorage.getItem("datausers"));

function checkemail(){
    event.preventDefault();
    let check='false'
    for(let i=0;i<datauserlogin.length;i++){
        if(emailLogin.value==datauserlogin[i].emailregister&&passwordLogin.value==datauserlogin[i].passwordregister){
            check='true';
            localStorage.setItem("userid",i);
            localStorage.setItem("check",check);
        }
    }
    if(check==='true'){
        setTimeout (() => {
            window.location="index.html"
        } , 1000 )
    }
    else{
        window.alert("invalid email or password");
    }
}
