const rbtn = document.getElementsByClassName("danger")
 const clear = document.getElementsByClassName("clear")

for(var i = 0; i< rbtn.length; i++) {
    var button = rbtn[i]
    button.addEventListener("click",function(event){
       var buttonclicked = event.target
       buttonclicked.parentElement.parentElement.remove()
       total

    })
}


function total() {

}



































































const WOW = document.getElementById("minC")
const WOB = document.getElementById("minB")
const featured =[
    {
        "name":"addias",
        "type":"Flower Shirt",
        "image":"./image1/f1.jpg",
        "price":"$78",
    },
    {
        "name":"addias",
        "type":"Flower Shirt",
        "image":"./image1/f2.jpg",
        "price":"$78",
    },
    {
        "name":"addias",
        "type":"Flower Shirt",
        "image":"./image1/f3.jpg",
        "price":"$78",
    },
   
    
]


const products = ()=>{
    const productm =featured.map(featured =>{
        return(
            `
            <div class="new33">
            <img src = "${featured.image}"class="img3">
            <p>${featured.name}</p>
             <div class="red2">
            <h5>${featured.type}</h5>
              <button class="red1" style="padding: 5px; border-radius:10px; :hover:background-color:green;">Add to cart</button>
             </div>
             <p>${featured.price}</p>
            <input type="number" style="height: 20px; width: 50px; margin-right: 30px; display:none;" class="numbas"> 
          
            </div>
            ` 
        )
    });
    WOW.innerHTML=productm
}

document.addEventListener("DOMContentLoaded",products)

const king =[
    {
        "name":"addias",
        "type":"Flower Shirt",
        "image":"./image1/f4.jpg",
        "bnt":"ADD TO CART",
       "price":"$78"
    },
    {
        "name":"addias",
        "type":"Flower Shirt",
        "image":"./image1/f5 (1).jpg",
        "bnt":"ADD TO CART",
       "price":"$78"
    },
    {
        "name":"addias",
        "type":"Flower Shirt",
        "image":"./image1/f6.jpg",
        "bnt":"ADD TO CART",
       "price":"$78",
    },
]


const product = ()=>{
    const productm =king.map(king =>{
        return(
            `
            <div class="new33">
            <img src = "${king.image}"class="img3">
            <p>${king.name}</p>
             <div class="red2">
            <h5>${king.type}</h5>
              <button class="red1" style="padding: 5px; border-radius:10px; :hover:background-color:green;">Add to cart</button>
             </div>
             <p>${king.price}</p>
          
            </div>
            ` 
        
        )
    });
    WOB.innerHTML=productm
}

document.addEventListener("DOMContentLoaded",product)