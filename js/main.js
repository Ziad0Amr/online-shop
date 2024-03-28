let choosesearch=document.getElementById("choosesearch")
let searchinput=document.getElementById("searchinput")
let content=document.querySelector(".content")
let namee=document.querySelector('.namee');
let arroww=document.querySelector(".arrow");
let itemsCart=document.querySelector(".itemscart");
let num=document.getElementById("num");
let numofitem=document.querySelector('.numofitem')
let logout=document.querySelector('.logout')
let linkscart=document.querySelector('.linkscart')
let flagg=false;


let Check=JSON.parse(localStorage.getItem("check"))
let datausermain=JSON.parse(localStorage.getItem("datausers"));



(function(){
    if(Check){
        let linkss=document.querySelector(".linkss");
        linkss.style.display="none";
        let id=localStorage.getItem("userid")
        namee.innerHTML=`Welcome: ${datausermain[id].firstname}`;
    }
    else{
        logout.style.display='none';
        linkscart.style.display='none';
    }
})() // get name to head and hidden links



let product=[
    {
        id:1,
        title:"T-shirt addidas",
        price:80,
        category:"fashion",
        urlimg:"./images/product1.jpg"
    },
    {
        id:2,
        title:"earpods",
        price:150,
        category:"Phone accessories",
        urlimg:"./images/product2.jpg"
    },
    {
        id:3,
        title:"Jacket",
        price:120,
        category:"fashion",
        urlimg:"./images/product3.jpg"
    },
    {
        id:4,
        title:"Adidas bottle",
        price:50,
        category:"Sport",
        urlimg:"./images/product4.jpg"
    },
    {
        id:5,
        title:"Glasses",
        price:80,
        category:"Men accessories",
        urlimg:"./images/product5.jpg"
    },
    {
        id:6,
        title:"Cap",
        price:20,
        category:"Men accessories",
        urlimg:"./images/product6.jpg"
    },
    {
        id:7,
        title:"Bag adidas",
        price:110,
        category:"Bags",
        urlimg:"./images/product7.jpg"
    },
    {
        id:8,
        title:"Shoes adidas",
        price:80,
        category:"Sport",
        urlimg:"./images/product8.jpg"
    },
    {
        id:9,
        title:"Bag",
        price:100,
        category:"fashion",
        urlimg:"./images/product9.png"
    },
]   // all my product data


localStorage.setItem('products',JSON.stringify(product))

function showdata(){
    let items='';
    for(let i=0;i<product.length;i++){
        items+=`
                <div class="card card1 col-lg-4 col-md-6 col-sm-12 mt-1 mb-1">
                    <img src="${product[i].urlimg}" class="card-img-top" alt="${product[i].title}">
                    <div class="card-body">
                        <h5 class="card-title">Product:${product[i].title}</h5>
                        <p class="card-price">Price: ${product[i].price} $</p>
                        <p class="card-category">Category: ${product[i].category}</p>
                        <div class="heartandbtn">
                            <a href="#" class="btn btn-primary" id="${product[i].title}" onclick="addcart(${i})">Add to cart</a>
                            <i class="fas fa-heart heart" id="${"love"+i}" onclick="favourite(${i})"></i>
                        </div>
                    </div>
                </div>
            `
    }
    content.innerHTML=items;
}
showdata() // to display all my product data


function search(value){
    let items='';
    for(let i=0;i<product.length;i++){
        if(choosesearch.value=='0'){
            if(product[i].title.toLowerCase().includes(value.toLowerCase())){
                items+=`
                    <div class="card card1 col-lg-4 col-md-6 col-sm-12 mt-1 mb-1">
                        <img src="${product[i].urlimg}" class="card-img-top" alt="${product[i].title}">
                        <div class="card-body">
                            <h5 class="card-title">Product:${product[i].title}</h5>
                            <p class="card-price">Price: ${product[i].price} $</p>
                            <p class="card-category">Category: ${product[i].category}</p>
                            <div class="heartandbtn">
                                <a href="#" class="btn btn-primary" id="${product[i].title}" onclick="addcart(${i})">Add to cart</a>
                                <i class="fas fa-heart heart" id="${"love"+i}" onclick="favourite(${i})"></i>
                            </div>
                        </div>
                    </div>
                `
            }
        }
        else if(choosesearch.value=='1'){
            if(product[i].category.includes(value.toLowerCase())){
                items+=`
                    <div class="card card1 col-lg-4 col-md-6 col-sm-12 mt-1 mb-1">
                        <img src="${product[i].urlimg}" class="card-img-top" alt="${product[i].title}">
                        <div class="card-body">
                            <h5 class="card-title">Product:${product[i].title}</h5>
                            <p class="card-price">Price: ${product[i].price} $</p>
                            <p class="card-category">Category: ${product[i].category}</p>
                            <div class="heartandbtn">
                                <a href="#" class="btn btn-primary" id="${product[i].title}" onclick="addcart(${i})">Add to cart</a>
                                <i class="fas fa-heart heart" id="${"love"+i}" onclick="favourite(${i})"></i>
                            </div>
                        </div>
                    </div>
                `
            }
        }
    }
    content.innerHTML=items;
}   //serch by (category or title)



let itemscart;
if(localStorage.datacart != null){
    itemscart=JSON.parse(localStorage.getItem("datacart"));
}
else{
    itemscart=[];
}

function arrow(){
    if(itemsCart.style.display == 'none' && itemscart.length != 0){
        arroww.classList.add('fa-caret-up')
            itemsCart.style.display='block'
    }
    else{
        arroww.classList.remove('fa-caret-up')
        itemsCart.style.display='none';
    }
}  // to change direction of arrow


function showcartblock(){
    if(itemscart.length!=0){
        for(let i=0;i<itemscart.length;i++){
            let btnadd=document.getElementById(`${itemscart[i].title}`);
            btnadd.style.background='red';
            btnadd.innerHTML='Remove from cart';
        }
    }
    else{
        arrow()
    }
} ;
showcartblock(); // if i refresh bage check if there is data in items-cart and make there button red and remove


function showcart(){
    let iitem='';
    for(let i=0;i<itemscart.length;i++){
        iitem +=`
        <div class="itemcart">
            <span id="itemtype">${itemscart[i].title}</span>
            <div class="mathmatics"> 
                <span id="num">${itemscart[i].num}</span>
                <i class="fas fa-plus math text-success" onclick="add(${i})"></i>
                <i class="fas fa-minus math text-danger " onclick="sub(${i})"></i>
            </div>
        </div>
    `
    }
    iitem+=`
        <a class="viewproduct" href="/viewproduct.html">View All Product</a>
    `
    itemsCart.innerHTML=iitem;
}
showcart(); // to show data in cart if there is data


function addcart(id){
    Notlogin()
    if(flagg==false){
        let btnadd=document.getElementById(`${product[id].title}`);
        let checkk=false;
        let x={
            title:product[id].title,
            num:1
        };
        for(let i=0;i<itemscart.length;i++){
            if(itemscart.length==0){
                checkk=false;
            }
            else if(product[id].title == itemscart[i].title){
                checkk=true;
                itemscart.splice(i,1);
                localStorage.datacart=JSON.stringify(itemscart);
                btnadd.style.background='#0d6efd';
                btnadd.innerHTML='Add to cart';
                showcart()
                showcartblock();
                shownumofitemsub();
            }
        }
        if(checkk == false){
            itemscart.push(x)
            localStorage.setItem('datacart',JSON.stringify(itemscart));
            btnadd.style.background='red';
            btnadd.innerHTML='Remove from cart';
            showcart();
            shownumofitemadd()
        }
        showcart();
    }
} //add items in cart when i press btn and delete it if its there


function add(id){
    itemscart[id].num++;
    showcart();
    localStorage.setItem('datacart',JSON.stringify(itemscart));
} // when i press + increse the num 1 

function sub(id){
    let btnadd=document.getElementById(`${itemscart[id].title}`);
    if(itemscart[id].num > 1){
        itemscart[id].num--;
        localStorage.setItem('datacart',JSON.stringify(itemscart));
    }
    else{
        itemscart.splice(id,1);
        btnadd.style.background='#0d6efd';
        btnadd.innerHTML='Add to cart';
        localStorage.datacart=JSON.stringify(itemscart);
        shownumofitemsub();
    }
    showcart();
    showcartblock();
} //when i press - decrese the num 1 and if reach to 1 and press it again delete the item

let n;

if(localStorage.numofitem != 0){
    n=JSON.parse(localStorage.getItem('numofitems'));
}
else{
    n=0;
}

(function(){
    numofitem.innerHTML=n;
})()// to display num of items if i refresh the window

function shownumofitemadd(){
    n++;
    numofitem.innerHTML=n;
    localStorage.setItem('numofitems',JSON.stringify(n));
} //to increse num of items if i press in btn add 


function shownumofitemsub(){
    if(n>0){
        n--;
        numofitem.innerHTML=n;
        localStorage.setItem('numofitems',JSON.stringify(n));
    }
}   //to decrese num of items if i press in btn add 


let fav;
if(localStorage.favourite != null){
    fav=JSON.parse(localStorage.getItem("favourite"));
}
else{
    fav=[];
}

(function(){
        for(let i=0;i<fav.length;i++){
            for(let x=0;x<product.length;x++){
                if(fav[i].title==product[x].title){
                    console.log("Dsadas")
                    let heart=document.getElementById("love"+x)
                    heart.classList.add('text-danger')
                }
            }
    }
})()


function favourite(id){
    Notlogin()
    if(flagg==false){
        let flag=false;
        let fave={
            id:product[id].id,
            title:product[id].title,
            category:product[id].category,
            urlimg:product[id].urlimg
        }
        if(fav.length==0){
            fav.push(fave);
        }
        else{
            for(let i=0;i<fav.length;i++){
                if(fav[i].title==product[id].title){
                    flag=true;
                    fav.splice(i,1)
                    localStorage.setItem("favourite",JSON.stringify(fav));
                    break;
                }
            }
            if(flag==false){
                fav.push(fave);
            }
        }
        localStorage.setItem("favourite",JSON.stringify(fav));
        let heart=document.getElementById("love"+id)
        heart.classList.toggle('text-danger')
    }
}

function Logout(){
    event.preventDefault();
    localStorage.removeItem("favourite")
    localStorage.removeItem("datacart")
    localStorage.removeItem("numofitems")
    localStorage.removeItem("userid")
    Check=false;
    localStorage.setItem("check",JSON.stringify(Check))
    window.location="index.html"
}

function Notlogin(){
    if(Check!=true){
        flagg=true;
        setTimeout(()=>{
            window.location='login.html'
        },1000)
        
    }
}