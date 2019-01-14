var desTitle="";
var itemsInside=0;
var itemsInLine=1;
var catId="";
var itemId="";
var dir="";



function createItem() {

    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");


    catId= parseInt(queries[0].split("=")[1],10);
    itemId= parseInt(queries[1].split("=")[1],10);



    if(catId=="1"){
        dir="categories/xiaomi_mijia_365";
    }
    if(catId=="2"){
        dir="categories/xiaomi_mijia_365";
    }
    if(catId=="3"){
        dir="categories/xiaomi_mijia_365";
    }
    if(catId=="4"){
        dir="categories/xiaomi_mijia_365";
    }





    createItemsContent();

}



function createItemsContent() {


    var titles = [];
    titles.push(itemTitle_1);
    titles.push(itemTitle_2);
    titles.push(itemTitle_3);
    titles.push(itemTitle_4);
    titles.push(itemTitle_5);

    var prices=[];
    prices.push(price_1);
    prices.push(price_2);
    prices.push(price_3);
    prices.push(price_4);
    prices.push(price_5);



    // var xx=0;
    // var yy=0;
    // var rowCount=1;
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
        var index=itemId;





            divRow.innerHTML ="                <div class=\"col-6\">\n" +
                "                    <div id= \"ctlg_item-1\" class=\"row\">\n" +
                "                    <img class=\"item_img\" src=\"images/"+dir+"/"+index+".jpg\">\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"col-6\">\n" +
                "                    <div class=\"row\">\n" +
                "                        <p class=\"item_ttl\">"+titles[index]+"</p>\n" +
                "                    </div>\n" +
                "                    <div class=\"row\">\n" +
                "                        <p class=\"item_price\">"+prices[index]+" NIS</p>\n" +
                "                    </div>\n" +
                "                    <div class=\"row\">\n" +
                "                        <div class=\"col-5\">\n" +
                "                            <div class=\"row\">\n" +
                "                                <div id=\"decr\" class=\"col-4\"><div class=\"row\"><div id=\"decrRow\"><p>-</p></div> </div></div>\n" +
                "                                <div id=\"count\" class=\"col-4\"><div class=\"row\"><div id=\"countRow\"><input type=\"text\" size=\"40\" value='11'></div> </div></div>\n" +
                "                                <div id=\"add\" class=\"col-4\"><div class=\"row\"><div id=\"addRow\"><p>+</p></div> </div></div>\n" +

                "                            </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"col-6 offset-1\">\n" +
                "                            <div class=\"row\"><img class=\"btn_cart\" src=\"images/support/icon_cart_add.png\" alt=\"Add to cart\"></div>\n" +
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


}











// ---------------------------------------------------------------------- Prices -----------------------------------------------------------------------

var price_1="100";
var price_2="200";
var price_3="300";
var price_4="400";
var price_5="500";





// ---------------------------------------------------------------------- itemTitles -----------------------------------------------------------------------


var itemTitle_1="Spacers";

var itemTitle_2="Spacers flex";

var itemTitle_3="Rear wire protection";


var itemTitle_4="Caps";
var itemTitle_5="Hook";
