let pics = document.querySelectorAll(".small_img");
let main_img = document.getElementById("main_img");
let product_name_section =document.querySelector(".product_heading h1");
let product_price_section =document.querySelector(".product_cost h1");
let small_name =document.querySelector(".pro_name");

let img_1=document.getElementById("img1");
let img_2=document.getElementById("img2");
let img_3=document.getElementById("img3");
let img_4=document.getElementById("img4");
let para=document.getElementById("para_in_products");
let input_container = document.querySelector("input");


let menu_bar =document.querySelector(".bars svg");
let navelements =document.querySelector(".nav_elements");

menu_bar.addEventListener("click", (e) => {
    menutoggle();
});

function menutoggle() {
    navelements.classList.toggle("hidden");
    //This method toggles the presence of the specified class. If the class is present, it's removed; if it's not present, it's added.
}


for (let i of pics) {
    i.addEventListener("click", (e) => {
        img_handler(e.target);
        console.log(e.target);
        
    });
}

function img_handler(target) {
    main_img.innerHTML = "";
    let newImage = document.createElement("img");
    newImage.src = target.src;
    main_img.appendChild(newImage);
    
}

let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", (e) => {
        console.log(e.currentTarget);
        let clickedCard = e.currentTarget;
// Serialize and save the innerDiv HTML to local storage
        localStorage.setItem("image", clickedCard.innerHTML);

    });
});

// Retrieve and display the saved image on page load
function onloadpage(){
let img_localStorage = localStorage.getItem("image");

if (img_localStorage) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(img_localStorage, "text/html");
    // console.log(doc.body.innerHTML);

    let imgElement = doc.querySelector("img");
    img_handler(imgElement);
    

    let name_product = doc.querySelector(".product_name");
    // console.log(name_product)
    sub_images(name_product);
    product_name_section.innerText=name_product.innerHTML;
    small_name.innerText=name_product.innerHTML;
    

    let price_product = doc.querySelector(".id").innerHTML;

        product_price_section.innerText = price_product;
  

    
    
    }
}

    onloadpage()



function sub_images(element) {
    if (element.classList.contains("trouser")) {
        img_1.innerHTML = main_img.innerHTML;
        img_2.innerHTML = `<img src=./img/category-1.jpg>`;
        img_3.innerHTML = `<img src=./img/product-11.jpg>`;
        para.innerText="Step into confidence with our curated ensemble of jeans, socks, and shoes. From the foundation of comfortable socks to the pinnacle of stylish shoes, we've got you covered every step of the way."
        
    }  else if (element.classList.contains("watch")) {
        img_1.innerHTML = main_img.innerHTML;
        img_2.innerHTML = `<img src=./img/backclock.png>`;
        img_3.innerHTML = `<img src=./img/sideclock.png>`;
        img_4.innerHTML = `<img src=./img/exclusive.png>`;
        para.innerText="Experience the power of every second with our exceptional product. Just as a clock orchestrates the symphony of time, our brand orchestrates unmatched quality and performance"

    }
}
window.addEventListener('popstate', function(event) {
    if (disableButton.disabled) {
      history.pushState(null, null, location.href);
    }
})