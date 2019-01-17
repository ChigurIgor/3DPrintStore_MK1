var desTitle="";
var itemsInside=0;
var itemsInLine=1;
var catId="";
var itemId="";
var dir="";
var count=1;

var id="" ;
var cat="" ;
var descr="" ;
var name="" ;
var link="" ;
var price="" ;
var divRowProgress;
const delay = ms => new Promise(res => setTimeout(res, ms));




$(document).ready(function(){
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");


    // itemId= parseInt(queries[1].split("=")[1],10);
    itemId= queries[1].split("=")[1];

    // console.log(itemId);

    divRowProgress = document.createElement('div');
    divRowProgress.className="row";
    divRowProgress.id="divRowProgress";
    divRowProgress.innerHTML ="<p>Download...</p>";
    container.appendChild(divRowProgress);


    getItemData(itemId);
});

function getItemData(itemId) {

    const url='https://printstore.herokuapp.com/itemgetbyid';


    request = $.ajax({
        url: url,
        type: "post",
        data:{ "id" : itemId}
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        // console.log("Hooray, it worked!");
        // console.log("resp: "+response);
        // console.log("textStatus: "+textStatus);
        console.log(response);
        var duce = jQuery.parseJSON(response);
        if(duce.length>0){
             id = duce[0]._id;
             cat = duce[0].cat;
             descr = duce[0].descr;
             name = duce[0].name;
             link = duce[0].link;
             price = duce[0].price;
            // console.log(duce);
            console.log(id);
            console.log(cat);
            console.log(descr);
            console.log(name);
            console.log(link);
            console.log(price);
            divRowProgress.remove();


            createItemsContent(id,cat,descr,name,link,price);
        }
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });
}



function createItem(id,cat,descr,name,link,price) {

    // var queryString = decodeURIComponent(window.location.search);
    // queryString = queryString.substring(1);
    // var queries = queryString.split("&");
    //
    //
    // catId= parseInt(queries[0].split("=")[1],10);
    // itemId= parseInt(queries[1].split("=")[1],10);
    //
    //
    //
    // if(catId=="0"){
    // }
    // if(catId=="1"){
    //     dir="categories/0";
    // }
    // if(catId=="2"){
    //     dir="categories/0";
    // }
    // if(catId=="3"){
    //     dir="categories/0";
    // }





    createItemsContent(id,cat,descr,name,link,price);

}



function createItemsContent(id,cat,descr,name,link,price) {
    dir="categories/"+cat;

    i=0;

    var clsType="col-6";
    switch (itemsInLine) {
        case 1:
            clsType="col-12";
            break;
        case 2:
            clsType="col-6";
            break;
        case 3:
            clsType="col-4";
            break;
        case 4:
            clsType="col-3";
            break;
        case 5:
            clsType="col-2";
            break;
        case 6:
            clsType="col-2";
            break;

    }






        var divRow = document.createElement('div');
        divRow.className="row";

var j=0;
        var index=link;





            divRow.innerHTML ="                <div class=\"col-6\">\n" +
                "                    <div id= \"ctlg_item-1\" class=\"row\">\n" +
                "                    <img class=\"item_img\" src=\"images/"+dir+"/"+index+".jpg\">\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"col-6\">\n" +
                "                    <div class=\"row\">\n" +
                "                        <p class=\"item_ttl\">"+name+"</p>\n" +
                "                    </div>\n" +
                "                    <div class=\"row\">\n" +
                "                        <p class=\"item_price\" >"+price+" NIS</p>\n" +
                "                    </div>\n" +
                "<div class=\"row\">\n" +
                "                        <p class=\"item_dscr\" >"+descr+"</p>\n" +
                "                    </div>\n" +
                "                    <div class=\"row\">\n" +
                "                        <div class=\"col-5\">\n" +
                "                            <div class=\"row\">\n" +
                "                                <div id=\"decr\" class=\"col-4\"><div class=\"row\"><div id=\"decrRow\" onclick='decreaseCount()'><p>-</p></div> </div></div>\n" +
                "                                <div id=\"count\" class=\"col-4\"><div class=\"row\"><div id=\"countRow\"><input id=\"countInpt\" type=\"text\" size=\"40\" value='1'></div> </div></div>\n" +
                "                                <div id=\"add\" class=\"col-4\"><div class=\"row\"><div id=\"addRow\" onclick='increaseCount()'><p>+</p></div> </div></div>\n" +

                "                            </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"col-6 offset-1\">\n" +
                "                            <div class=\"row\"><img class=\"btn_cart\" src=\"images/support/icon_cart_add.png\" alt=\"Add to cart\" onclick='addToCart()'></div>\n" +
                "                        </div>\n" +
                "                        <!--<p \">Add to cart</p>-->\n" +
                "                    </div>\n" +
                "\n" +
                "                </div>";

  // div.innerHTML =
  //               "                                    <div class=\"row\" id=\"ctlg_item-"+index+"\"  onclick=\"openNews(id)\">\n" +
  //               "                                        <div class=\"col-12\"> " +
  //               "<div class='row'> <img class=\"item_img\" src=\"images/"+dir+"/"+index+".jpg\" alt=\"sdf\"></div>\n" +
  //               "<div class='row'> <p class=\"item_ttl\">"+titles[index]+"</p></div>" +
  //               "<div class='row'> <p class=\"item_price\">"+prices[index]+"</p></div>" +
  // "                            </div>";



            // divRow.appendChild(div);








        container.appendChild(divRow);








}


function increaseCount() {
var count=parseInt(document.getElementById("countInpt").value);
    document.getElementById("countInpt").value=count+1;

}

function decreaseCount() {
    var count=parseInt(document.getElementById("countInpt").value);
    if(count-1>0){
    document.getElementById("countInpt").value=count-1;
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
async function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));
    $('#notice').fadeIn();
    await delay(2000);
    $('#notice').fadeOut();

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



















