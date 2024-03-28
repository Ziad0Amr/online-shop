let firstname=document.getElementById('firstname');
let lastname=document.getElementById('lastname');
let emailregister=document.getElementById('email');
let passwordregister=document.getElementById('password');


let datauser;
if(localStorage.datausers != null){
    datauser=JSON.parse(localStorage.getItem("datausers"));
}
else{
    datauser=[];
}

function addinfo(){
    event.preventDefault();
    let dataarr={
        firstname:firstname.value,
        lastname:lastname.value,
        emailregister:emailregister.value,
        passwordregister:passwordregister.value
    };
    datauser.push(dataarr)
    localStorage.setItem("datausers",JSON.stringify(datauser));
    setTimeout (() => {
        window.location="login.html"
    } , 1500 )
}