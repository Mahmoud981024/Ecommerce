var data= JSON.parse(localStorage.getItem("cart"));
let productDom = document.querySelector('.products');
let removebtn = document.querySelector('.products');
let totalDom = document.querySelector('.totalprice');
function drawProductUi2(){
    let ProductsUi=data.map((item) => {
        return `
        <div class="product_item">
            <img class="product_item-image"
            src="${item.image}"
            alt="imaage"
            />
            <div class="product_item-desc">
            <h2>${item.title}</h2>
            </div>
                <div class="product_item-actions">
                <input class="add-to-cart" id="remo" onclick="DeleteFromCart(${item.id})" type="button" value="Remove">
                <h1>Price : $ ${item.price}</h>
            </div>
        </div>
        `;
    });
    productDom.innerHTML = ProductsUi;
}
drawProductUi2();
CalculateTotaltPrice();
/////////////////////////////////////////////
function DeleteFromCart(id){
    var choosenItem = data.find(i => i.id ==id);
    if(localStorage.getItem("user")){
        var indexToRemove = data.indexOf(choosenItem);
        data.splice(indexToRemove, 1);
        CalculateTotaltPrice();
        drawProductUi2();
        alert(" item "+indexToRemove+" deleted successfully" );
    }else{
        window.location="login.html";
        alert("you should login first");
    }
}

function CalculateTotaltPrice(){
    var totalPrice=0;
    if(data.length>0){
        totalDom.style.display="block";
    }
    else{
        totalDom.style.display="none"
    }
    for(it of data){
        totalPrice+=it.price;
    }  
    alert('aaaaaa'+totalPrice);
    totalDom.textContent='Total Price :  $ '+Math.floor(totalPrice);
};

