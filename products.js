

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cardstDom = document.querySelector('.cards')
let notification = document.querySelector(".badge");
let result;
let cartProductDom = document.querySelector('.cartProducts')
var cartroductsArr=[];
function getProduct()
{
    var xhr=new XMLHttpRequest();
    xhr.open("get","https://fakestoreapi.com/products", true);

    xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status==200)
        {
            result=JSON.parse(xhr.responseText)
            drawProductUi(result);
        }
    };
    xhr.send();
}
getProduct();
function drawProductUi(products){
    let ProductsUi = products.map((item) => {
        return `
        <div class="card">
            
            <img class="im" src="${item.image}" alt="Denim Jeans" >
                <h1 > ${item.title}</h1>
                <p class="price">price : ${item.price}</p>
                <p><button onclick="checlUserLogin('${item.id}')">Add to Cart</button></p>
        </div>
        `;
    })
    cardstDom.innerHTML = ProductsUi;
}
drawProductUi();
function checlUserLogin(id){
    var choosenItem=result.find(i => i.id==id);
    if(localStorage.getItem("user")){
        debugger;
        cartroductsArr.push(choosenItem);
        localStorage.setItem("cart",JSON.stringify(cartroductsArr));
        //window.location="cardprosuct.html";
        alert("add to cart "+cartroductsArr.length );
        notification.style.display="block";
        notification.innerHTML=cartroductsArr.length;
    }else{
        window.location="login.html";
        alert("you should login first");
    }

}







