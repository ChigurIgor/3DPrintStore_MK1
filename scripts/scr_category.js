var desTitle="";
var desCont="";
var itemsInside=0;
var itemsInLine=4;
var dir="";
        dir="categories/xiaomi_mijia_365";


function createCategory() {

    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    for (var i = 0; i < queries.length; i++)
    {
        var end = parseInt(queries[i].split("=")[1],10);

        // document.write(end + "<br>");
    }

    if(end=="1"){
        desTitle=itemTitle_1;
        itemsInside=2;
    }
    if(end=="2"){
        desTitle=itemTitle_2;
        itemsInside=3;

    }
    if(end=="3"){
        desTitle=itemTitle_3;
        itemsInside=4;

    }
    if(end=="4"){
        desTitle=itemTitle_4;
        itemsInside=5;

    }




    // var div = document.createElement('div');
    //
    // if( navigator.userAgent.match(/Android/i)
    //     || navigator.userAgent.match(/webOS/i)
    //     || navigator.userAgent.match(/iPhone/i)
    //     || navigator.userAgent.match(/iPad/i)
    //     || navigator.userAgent.match(/iPod/i)
    //     || navigator.userAgent.match(/BlackBerry/i)
    //     || navigator.userAgent.match(/Windows Phone/i)){
    //
    //     div.innerHTML ="                <div class=\"row\">\n" +
    //         "                    <div class=\"col-12\">\n" +
    //         "                        <div   class=\"row\"<p id=\"news_ttl\">"+desTitle+"</p>\n" +
    //         "                    </div>\n" +
    //         "                        <div  id=\"new_img-1\" class=\"row\" onclick=\"showPictureNews(id)\"><img class=\"news_img\" src=\"../Images/News/"+end+".jpg\"></div>\n" +
    //         "\n" +
    //
    //         "                        <div   class=\"row\"<p id=\"news_content\">"+desCont+"</p>\n" +
    //         "                    </div>\n" +
    //
    //         "\n" +
    //         "                    </div>\n" +
    //         "                </div>\n"
    //
    //     ;
    //
    // }
    //
    // else{
    //     div.innerHTML ="                <div class=\"row\">\n" +
    //         "                    <div class=\"col-4\">\n" +
    //         "                        <div  id=\"new_img-1\" class=\"row\" onclick=\"showPictureNews(id)\"><img class=\"news_img\" src=\"../Images/News/"+end+".jpg\"></div>\n" +
    //         "\n" +
    //         "                    </div>\n" +
    //         "\n" +
    //         "                    <div class=\"col-8\">\n" +
    //         "                        <p class=\"news_ttl\">"+desTitle+"</p>\n" +
    //         "                        <p class=\"news_content\">"+desCont+"</p>\n" +
    //         "\n" +
    //         "\n" +
    //         "                    </div>\n" +
    //         "                </div>\n"
    //
    //
    //     ;
    // }
    //
    //
    //
    //
    // container.appendChild(div);
    createItems();

}



function createItems() {


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



    for(i=0; i<itemsInside;i += itemsInLine) {
        // alert("i= "+i);


        var divRow = document.createElement('div');
        divRow.className="row";
        // divRow.innerHTML = "<div class=\"row\">\n" +
        //     "                            </div>";
var j=0;
        var index=0;
        for(j=0;j<itemsInLine; j+=1){
            // alert("j= "+j);
            index=i+j;
            // alert("index= "+index);
            var div = document.createElement('div');
            div.className=clsType;
            div.id="item-"+index;

            if(index<itemsInside){
            div.innerHTML =
                "                                    <div class=\"row\" id=\"ctlg_item-"+index+"\"  onclick=\"openNews(id)\">\n" +
                "                                        <div class=\"col-12\"> " +
                "<div class='row'> <img class=\"item_img\" src=\"images/"+dir+"/"+index+".jpg\" alt=\"sdf\"></div>\n" +
                "<div class='row'> <p class=\"item_ttl\">"+titles[index]+"</p></div>" +
                "<div class='row'> <p class=\"item_price\">"+prices[index]+"</p></div>" +
  "                            </div>";



            divRow.appendChild(div);
            }
        }


        // // xx=i+1;
        // // yy=xx+1;


        // var desTitle1="";
        // var desTitle2="";
        // var desPrice1="";
        // var desPrice2="";
        // var desTitle2="";
        //
        //
        // desPrice1=xx*100;
        // desPrice2=yy*100;
        // switch (xx) {
        //     case 1:
        //         desTitle1=NTTL_1;
        //          break;
        //     case 2:
        //         desTitle1=NTTL_2;
        //         break;
        //     case 3:
        //         desTitle1=NTTL_3;
        //         break;
        //     case 4:
        //         desTitle1=NTTL_4;
        //         break;
        //     default:
        // }
        // switch (yy) {
        //     case 1:
        //         desTitle2=NTTL_1;
        //         break;
        //     case 2:
        //         desTitle2=NTTL_2;
        //         break;
        //     case 3:
        //         desTitle2=NTTL_3;
        //         break;
        //     case 4:
        //         desTitle2=NTTL_4;
        //         break;
        //     default:
        // }






        //
        // div.innerHTML = "                        <div class=\"row\">\n" +
        //     "                            <div id=\"item-"+xx+"\" class=\"col-6\">\n" +
        //     "                                    <div class=\"row\" id=\"ctlg_item-"+xx+"\"  onclick=\"openNews(id)\">\n" +
        //     "                                        <div class=\"col-12\"> " +
        //     "<div class='row'> <img class=\"item_img\" src=\"images/"+dir+"/"+xx+".jpg\" alt=\"sdf\"></div>\n" +
        //     "<div class='row'> <p class=\"item_ttl\">"+desTitle1+"</p></div>" +
        //     "<div class='row'> <p class=\"item_price\">"+desPrice1+"</p></div>" +
        //
        //     "</div>\n" +
        //     "\n" +
        //     "                                </div>\n" +
        //     "                            </div>\n" +
        //     "                            <div id=\"item-"+yy+"\" class=\"col-6\">\n" +
        //     "                                    <div class=\"row\" id=\"ctlg_item-"+yy+"\"  onclick=\"openNews(id)\">\n" +
        //     "                                        <div class=\"col-12\"> " +
        //     "<div class='row'> <img class=\"item_img\" src=\"images/"+dir+"/"+yy+".jpg\" alt=\"sdf\"></div>\n" +
        //     "<div class='row'> <p class=\"item_ttl\">"+desTitle2+"</p></div>" +
        //     "<div class='row'> <p class=\"item_price\">"+desPrice2+"</p></div>" +
        //
        //     "</div>\n" +
        //     "                                </div>\n" +
        //     "                            </div>";
        //
        //
        // if(yy>itemsInside) {
        //     div.innerHTML = "                     <div class=\"row\">\n" +
        //         "                            <div id=\"item-"+xx+"\" class=\"col-6\">\n" +
        //         "                                    <div class=\"row\" id=\"ctlg_item-"+xx+"\"  onclick=\"openNews(id)\">\n" +
        //         "                                        <div class=\"col-12\"> " +
        //         "<div class='row'> <img class=\"item_img\" src=\"images/"+dir+"/"+xx+".jpg\" alt=\"sdf\"></div>\n" +
        //         "<div class='row'> <p class=\"item_ttl\">"+desTitle1+"</p></div>" +
        //         "<div class='row'> <p class=\"item_price\">"+desPrice1+"</p></div>" +
        //
        //         "</div>\n" +
        //         "\n" +
        //         "                                </div>\n" +
        //         "                            </div>";
        // }
        // document.body.appendChild(div)
        // if (rowCount % 2 == 0) {
        //     div.innerHTML = "                        <div class=\"row\">\n" +
        //         "                            <div id=\"item8-"+xx+"\" class=\"col-8\">\n" +
        //         "                                <div class=\"container\">\n" +
        //         "                                    <div class=\"row\" id=\"item-"+xx+"\"  onclick=\"openNews(id)\">\n" +
        //         "                                        <div class=\"col-6\"> <img class=\"news_img\" src=\"../Images/News/"+xx+".jpg\"></div>\n" +
        //         "                                            <div class=\"col-6\"><p class=\"news_ttl\">"+desTitle1+"</p></div>\n" +
        //         "                                    </div>\n" +
        //         "\n" +
        //         "                                </div>\n" +
        //         "                            </div>\n" +
        //         "                            <div id=\"item4-"+xx+"\" class=\"col-4\">\n" +
        //         "                                <div class=\"container\">\n" +
        //         "                                    <div class=\"row\" id=\"item-"+yy+"\"  onclick=\"openNews(id)\">\n" +
        //         "                                        <div class=\"col-6\"> <img class=\"news_img\" src=\"../Images/News/"+yy+".jpg\"></div>\n" +
        //         "                                        <div class=\"col-6\"><p class=\"news_ttl\">"+desTitle2+"</p></div>\n" +
        //         "                                    </div>\n" +
        //         "\n" +
        //         "                                </div>\n" +
        //         "                            </div>\n" +
        //         "                        </div>";
        //
        //
        //     if(yy>newsInside) {
        //         div.innerHTML = "                        <div class=\"row\">\n" +
        //             "                            <div id=\"item8-"+xx+"\" class=\"col-8 offset-2\">\n" +
        //             "                                <div class=\"container\">\n" +
        //             "                                    <div class=\"row\" id=\"item-"+xx+"\"  onclick=\"openNews(id)\">\n" +
        //             "                                        <div class=\"col-6\"> <img class=\"news_img\" src=\"../Images/News/"+xx+".jpg\"></div>\n" +
        //             "                                            <div class=\"col-6\"><p class=\"news_ttl\">"+desTitle1+"</p></div>\n" +
        //             "                                    </div>\n" +
        //             "                            </div>\n" +
        //             "                        </div>";
        //     }
        //     // document.body.appendChild(div)
        //     table.appendChild(div);
        // }





        container.appendChild(divRow);
        //
        // rowCount+=1;


    }




}














// ---------------------------------------------------------------------- Prices -----------------------------------------------------------------------

var price_1="100";
var price_2="200";
var price_3="300";
var price_4="400";
var price_5="500";





// ---------------------------------------------------------------------- itemTitles -----------------------------------------------------------------------


var itemTitle_1="Spacers flex";

var itemTitle_2="Spacers";

var itemTitle_3="Rear wire protection";


var itemTitle_4="Caps";
var itemTitle_5="Hook";
