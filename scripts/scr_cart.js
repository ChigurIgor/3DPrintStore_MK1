var itemsCount=0;
var arrKeys=[];
var arr;

var id="" ;
var cat="" ;
var descr="" ;
var name="" ;
var link="" ;
var price="" ;



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
    dir="categories/"+cat;

    i=0;


    var divRow = document.createElement('div');
    divRow.className="row";
    divRow.id="title";

    var j=0;
    var index=link;





    divRow.innerHTML ="<p>"+itemsCount+" items in cart</p>";
    container.appendChild(divRow);


    i=0;

    for(i=0;i<itemsCount;i+=1){
        var item=arr[arrKeys[i]];
        // console.log(item);
        // console.log(item[0]);
        // console.log(item[1]);
         id=item[0];
         count=item[1];

        var divRowItem = document.createElement('div');
        divRowItem.className="row";

    divRowItem.id="cart_item-"+id;
        divRowItem.innerHTML ="<p>"+itemsCount+" items in cart</p>";

    divRowItem.innerHTML=" " +
        " <div class=\"col-3\"><div id=\"item_img_cont-\"+id class=\"row\"><img src=\"images/categories/0/0.jpg\"></div> </div>\n" +
        "            <div class=\"col-5\">\n" +
        "                <div id=\"item_name_cont-\"+id class=\"row\"><p>Some name</p></div>\n" +
        "                <div id=\"item_desc_cont-\"+id class=\"row\"><p>Some description</p></div>\n" +
        "            </div>\n" +
        "            <div class=\"col-4\">\n" +
        "                <div id=\"item_count_cont-\"+id class=\"row\">\n" +
        "                    <div class=\"col-2\"><div class=\"row\"><p class=\"price\">700</p></div> </div>\n" +
        "                    <div class=\"col-6\">\n" +
        "                        <div class=\"row\">\n" +
        "                            <div  id=\"decr-\"+id class=\"col-3 offset-1\"><div id=\"decrRow-\"+id class=\"row\"><p >-</p></div> </div>\n" +
        "                            <div id=\"count-\"+id class=\"col-4\"><div id=\"countRow-\"+id class=\"row\"><input id=\"countInpt-\"+id value=\""+count+"\" ></div> </div>\n" +
        "                            <div id=\"add-\"+id class=\"col-3\"><div id=\"addRow-\"+idclass=\"row\"><p  >+</p></div> </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <div class=\"col-2\"><div class=\"row\"><p class=\"price_full\">1400</p></div> </div>\n" +
        "                    <div class=\"col-2\"><div class=\"row\"><p class=\"del\">Delete</p></div> </div>\n" +
        "                </div>\n" +
        "            </div>"
    ;


        container.appendChild(divRowItem);

    }


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






