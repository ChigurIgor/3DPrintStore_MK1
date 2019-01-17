var itemsCount=0;
var arrKeys=[];
var arr;

var id="" ;
var cat="" ;
var descr="" ;
var name="" ;
var link="" ;
var price="" ;
var divRowTitle;
var divRowOrder;
var divRowpriceOrder;
var priceOrder=0;


$(document).ready(function(){

    startCart();


});

function startCart() {
     arr=getCartData();
    arrKeys=getKeys(arr);
    itemsCount=arrKeys.length;
    // console.log(arr[arrKeys[0]]);
    createItemsContent();
}


function getKeys(arr) {

    var keys = [];
    for(var k in arr) keys.push(k);
    console.log(keys);
    return keys;
}


function createItemsContent() {

    i=0;


     divRowTitle = document.createElement('div');
    divRowTitle.className="row";
    divRowTitle.id="title";

    var j=0;
    var index=link;





    divRowTitle.innerHTML ="<p>"+itemsCount+" items in cart</p>";
    container.appendChild(divRowTitle);

    divRowpriceOrder = document.createElement('div');
    divRowpriceOrder.className="row";
    divRowpriceOrder.id="priceOrder";
    divRowpriceOrder.innerHTML ="<p>Order full price: <span id='priceOrderCount'>"+priceOrder+"</span> NIS</p>";


    i=0;

    for(i=0;i<itemsCount;i+=1){
        var item=arr[arrKeys[i]];
        // console.log(item);
        // console.log(item[0]);
        // console.log(item[1]);
        id=item[0];
         count=item[1];
         count=item[1];
         cat=item[3];
         descr=item[4];
         name=item[5];
         link=item[6];
         price=item[7];
        dir="categories/"+cat;
        let priceFull=parseInt(price)*parseInt(count);
        priceOrder=priceOrder+priceFull;
        var divRowItem = document.createElement('div');
        divRowItem.className="row";

    divRowItem.id="cart_item-"+id;
        divRowItem.innerHTML ="<p>"+itemsCount+" items in cart</p>";

    divRowItem.innerHTML=" " +
        " <div class=\"col-3\"><div id=\"item_img_cont-"+id+"\" class=\"row\" onclick=\"openItem(id)\"><img src=\"images/"+dir+"/"+link+".jpg\"  ></div> </div>\n" +
        "            <div class=\"col-5\">\n" +
        "                <div id=\"item_name_cont-"+id+"\" class=\"row\"><p>"+name+"</p></div>\n" +
        "                <div id=\"item_desc_cont-"+id+"\" class=\"row\"><p>"+descr+"</p></div>\n" +
        "            </div>\n" +
        "            <div class=\"col-4\">\n" +
        "                <div id=\"item_count_cont-"+id+"\" class=\"row\">\n" +
        "                    <div class=\"col-2\"><div class=\"row\"><p id=\"price-"+id+"\">"+price+" NIS</p></div> </div>\n" +
        "                    <div class=\"col-6\">\n" +
        "                        <div class=\"row\">\n" +
        "                            <div  id=\"decr-"+id+"\" class=\"col-3 offset-1\"><div id=\"decrRow-"+id+"\" class=\"row\" onclick='decreaseCount(id)'><p >-</p></div> </div>\n" +
        "                            <div id=\"count-"+id+"\" class=\"col-4\"><div id=\"countRow-"+id+"\" class=\"row\"><input id=\"countInpt-"+id+"\" value=\""+count+"\"  onchange='inputCangedCount(id)' ></div> </div>\n" +
        "                            <div id=\"add-"+id+"\" class=\"col-3\"><div id=\"addRow-"+id+"\" class=\"row\" onclick='increaseCount(id)'><p  >+</p></div> </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-2\"><div class=\"row\"><p id=\"price_full-"+id+"\">"+priceFull+" NIS</p></div> </div>\n" +
        "                    <div class=\"col-2\"><div class=\"row\"><img src='images/support/icon_trash_red.png' alt='Delete' id=\"del-"+id+"\" onclick='deleteItemCart(id)'></div> </div>\n" +
        "                </div>\n" +
        "            </div>"
    ;


        container.appendChild(divRowItem);

    }
    container.appendChild(divRowpriceOrder);

    createOrderForm();
    divRowpriceOrder.innerHTML ="<p>Order full price: <span id='priceOrderCount'>"+priceOrder+"</span> NIS</p>";


}





function increaseCount(id) {
    var     itemId= id.split("-")[1];
     var count=parseInt(document.getElementById("countInpt-"+itemId).value);
     var price=parseInt(document.getElementById("price-"+itemId).innerText.split(" ")[0]);
     // var price=document.getElementById("price-"+itemId).innerText;
     var newCount=count+1;
     var newPrice=newCount*price;

    document.getElementById("countInpt-"+itemId).value=newCount;
    document.getElementById("price_full-"+itemId).innerText=newPrice+" NIS";

    updateItemCountCart(itemId,newCount);

    // updatePriceOrder();
}

function decreaseCount(id) {
    var     itemId= id.split("-")[1];

    var count=parseInt(document.getElementById("countInpt-"+itemId).value);
    var price=parseInt(document.getElementById("price-"+itemId).innerText.split(" ")[0]);
    if(count-1>0){
    var newCount=count-1;
    var newPrice=newCount*price;


        document.getElementById("countInpt-"+itemId).value=newCount;
        document.getElementById("price_full-"+itemId).innerText=newPrice+" NIS";

        updateItemCountCart(itemId,newCount);

    }
}


function inputCangedCount(id) {
    var     itemId= id.split("-")[1];
    var input=document.getElementById("countInpt-"+itemId);
    var count=parseInt(document.getElementById("countInpt-"+itemId).value);
    var price=parseInt(document.getElementById("price-"+itemId).innerText.split(" ")[0]);
    var newPrice=count*price;
    if(count-1>0){
        document.getElementById("price_full-"+itemId).innerText=newPrice+" NIS";



        updateItemCountCart(itemId,count);

    }

    if(count-1<=0){
        var newCount=1;
        var newPrice=newCount*price;
        input.value=newCount;
        document.getElementById("price_full-"+itemId).innerText=newPrice+" NIS";

        updateItemCountCart(itemId,newCount);

    }
    // var rep = /[-.;":'a-zA-Zа-яА-Я]/;
    // if (rep.test(value)) {
    //     value = value.replace(rep, '');
    //     input.value = value;
    // }


}








function updatePriceOrder(){
    arr=getCartData();
    arrKeys=getKeys(arr);
    var i=0;
    priceOrder=0;
    for(i=0;i<arrKeys.length;i+=1){
        var     itemId= arrKeys[i];
       priceItem= parseInt(document.getElementById("price_full-"+itemId).innerText.split("-")[0]);
        // console.log(priceItem);
        // console.log(document.getElementById("price_full-"+itemId).innerText);
        priceOrder=priceOrder+priceItem;
    }

    divRowpriceOrder.innerHTML ="<p>Order full price: <span id='priceOrderCount'>"+priceOrder+"</span> NIS</p>";
}












function addToCart() {
    count=parseInt(document.getElementById("countInpt").value);
    if(count>0) {
        // alert("catid= "+catId);
        // alert("itemId= "+itemId);
        // alert("count= "+count);
        addToCart2();
    }

}


function showCartData() {
    var cartData = localStorage.getItem('cart');
    // var cartData=getCartData();
    alert(cartData);
}

// Получаем данные из LocalStorage
function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    arr=getCartData();
    arrKeys=getKeys(arr);
    itemsCount=arrKeys.length;
    divRowTitle.innerHTML ="<p>"+itemsCount+" items in cart</p>";
    updatePriceOrder();

    return false;
}

// Добавляем товар в корзину
function addToCart2(){
    var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
    //     // parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
    //     itemId = itemId, // ID товара
    //     catId = catId,
    //     count = count; // стоимость товара
    if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[itemId][1]= parseInt(cartData[itemId][1])+ count;
        // cartData[itemId][2] += 1;
    } else { // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemId,count,id,cat,descr,name,link,price ];
    }
    // // if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    // //     // this.disabled = false; // разблокируем кнопку после обновления LS
    // // }
    // var cartData={};
    //      cartData[itemId] = [ count];
    // var cartData=count;
    setCartData(cartData);
    return false;
}
function clearCart(){
    localStorage.removeItem('cart');
// alert("removed")
}

function updateItemCountCart(itemId,newCount){
    var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
    //     // parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
    //     itemId = itemId, // ID товара
    //     catId = catId,
    //     count = count; // стоимость товара
    if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[itemId][1]= newCount;
        // cartData[itemId][2] += 1;
    }
    // // if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    // //     // this.disabled = false; // разблокируем кнопку после обновления LS
    // // }
    // var cartData={};
    //      cartData[itemId] = [ count];
    // var cartData=count;
    setCartData(cartData);
    return false;
}


function deleteItemCart(id){
    var     itemId= id.split("-")[1];
    var item= document.getElementById("cart_item-"+itemId);
    // item.parentNode.removeChild(item);
    item.remove();

    var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
    //     // parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
    //     itemId = itemId, // ID товара
    //     catId = catId,
    //     count = count; // стоимость товара
    if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
        // cartData.splice(itemId);
        // console.log(itemId);
        // cartData[itemId]= null;


        // cartData[itemId][2] += 1;

        delete cartData[itemId];


    }
    // // if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    // //     // this.disabled = false; // разблокируем кнопку после обновления LS
    // // }
    // var cartData={};
    //      cartData[itemId] = [ count];
    // var cartData=count;
    setCartData(cartData);
}

function     createOrderForm(){
    divRowOrder = document.createElement('div');
    divRowOrder.className="row";
    divRowOrder.id="orderForm";

    divRowOrder.innerHTML="<div id=\"right_col\" class=\"col-5\">\n" +
        "    <div id=\"ms-3\" class=\"row\"> <input type=\"text\" id=\"phoneMsg\"name=\"Telephone\" placeholder=\"Telephone\"></div>\n" +
        "    <div id=\"ms-1\" class=\"row\"> <input type=\"text\" id=\"nameMsg\" name=\"FirstName\" placeholder=\"Name\"></div>\n" +
        "    <div id=\"ms-2\" class=\"row\"> <input type=\"text\" id=\"emailMsg\" name=\"Email\" placeholder=\"Email\"></div>\n" +
        "    <div id=\"ms-5\" class=\"row\"> <input type=\"text\" id=\"emailAdrs\" name=\"Address\" placeholder=\"Address\"></div>\n" +
        "    <div id=\"ms-4\" class=\"row\"> <textarea          id=\"txtMsg\"name=\"Message\" placeholder=\"Comment to the order\"></textarea></div>\n" +
        "<div id=\"btn_send\" class=\"row\" onclick=\"sendMsg()\">\n" +
        "    <div class=\"col-12\">\n" +
        "    <p>Send</p>\n" +
        "    <!--<form id=\"contact_form\" method=\"post\" action=\"../PHP/send_email.php\">-->\n" +
        "\n" +
        "    <!--<input type=\"submit\" class=\"form_control submit\" value=\"Send message\">-->\n" +
        "    <!--</form>-->\n" +
        "\n" +
        "    </div>\n" +
        "    </div>\n" +
        "\n" +
        "    </div>\n";
    container.appendChild(divRowOrder);

}


function openItem(id) {
    var catId="";
    // var itemId = parseInt(id.split("-")[1],10);
    var itemId = id.split("-")[1];
    var queryString = "?cat=" + catId+"&item="+itemId;
    window.location.href = "item.html" + queryString;

}