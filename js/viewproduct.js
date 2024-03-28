let view=document.querySelector('.view')
let Product=JSON.parse(localStorage.getItem('products'));
let itemsCartt=JSON.parse(localStorage.getItem("datacart"));
let button=document.querySelector('.button')
let total=document.querySelector('.total')

function viewfav(){
    let pro='';
    for(let i=0;i<itemsCartt.length;i++){
        for(let x=0;x<Product.length;x++){
            if(itemsCartt[i].title==Product[x].title){
                pro+=`
                <div class="itemview">
                    <div class="image">
                        <img src="${Product[x].urlimg}" alt="${Product[x].title}">
                    </div>
                    <div class="bodyview">
                        <h5 class="card-title">Product:${Product[x].title}</h5>
                        <p class="card-price">Category: ${Product[x].category}</p>
                        <p class="card-category">price: ${Product[x].price} $</p>
                        <div class="heartandbtn">
                            <div class="add-min">
                                <span id="num">${itemsCartt[i].num}</span>
                                <i class="fas fa-plus math text-success" onclick="add(${i})"></i>
                                <i class="fas fa-minus math text-danger" onclick="sub(${i})"></i>
                            </div>
                            <div class="remove">
                                <button class="button text-white bg-danger" id="btn${i}" onclick="remove(${i})">remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
            }
        }
    }
    view.innerHTML=pro;
}
viewfav()

function add(id){
    itemsCartt[id].num++;
    viewfav();
    gettotal();
    localStorage.setItem('datacart',JSON.stringify(itemsCartt));
} // when i press + increse the num 1 

function sub(id){
    if(itemsCartt[id].num > 1){
        itemsCartt[id].num--;
        localStorage.setItem('datacart',JSON.stringify(itemsCartt));
    }
    else{
        itemsCartt.splice(id,1);
        localStorage.datacart=JSON.stringify(itemsCartt);
        localStorage.numofitems--;
    }
    viewfav();
    gettotal()
} 

function gettotal(){
    let T=0;
    for(let i=0;i<itemsCartt.length;i++){
        for(let x=0;x<Product.length;x++){
            if(itemsCartt[i].title==Product[x].title){
                T+=Product[x].price*itemsCartt[i].num;
            }
        }
    }
    total.innerHTML=`total price: ${T}$`
}gettotal()

function remove(id){
    itemsCartt.splice(id,1);
    localStorage.datacart=JSON.stringify(itemsCartt);
    localStorage.numofitems--;
    gettotal()
    viewfav()
}

// fav part 

// Swiper to favoruit part
var swiper = new Swiper(".fav-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    // loop: true,
    centerSlide:true,
    fade:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets:true
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        920:{
            slidesPerView: 3,
        }
    }
});

let favdata=JSON.parse(localStorage.getItem("favourite"))
let cards=document.querySelector(".cards");

function drawfav(){
    let item='';
    if(favdata != null){
        for(let i=0;i<favdata.length;i++){
            item+=`
                <div class="card swiper-slide">
                    <div class="image-card">
                        <img src="${favdata[i].urlimg}" alt="" class="img-card">
                    </div>
                    <div class="fav-body">
                        <div class="fav-body-content">
                            <p>Title: ${favdata[i].title}</p>
                            <p>Category: ${favdata[i].category}</p>
                        </div>
                        <i class="fas fa-heart heart" onclick="favouriteRemove(${i})"></i>
                    </div>
                </div>
            `
        }
    }
    cards.innerHTML=item;
}drawfav()

function favouriteRemove(id){
    favdata.splice(id,1)
    localStorage.setItem("favourite",JSON.stringify(favdata));
    drawfav()
}



