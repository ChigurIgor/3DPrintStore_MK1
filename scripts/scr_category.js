var desTitle="";
var catId="";
var itemId="";
var itemsInside=5;
var itemsInLine=4;
var dir="";
var divRowProgress;

function createCategory() {



    // if(end=="0"){
    //     desTitle=itemTitle_1;
    //     itemsInside=2;
    // }
    // if(end=="1"){
    //     desTitle=itemTitle_2;
    //     itemsInside=3;
    //
    // }
    // if(end=="2"){
    //     desTitle=itemTitle_3;
    //     itemsInside=4;
    //
    // }
    // if(end=="3"){
    //     desTitle=itemTitle_4;
    //     itemsInside=5;
    //
    // }





    // createItems();

}



function createItems(duce) {


    if(duce.length>0){

        // createItem(id,cat,descr,name,link,price);
    }



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

    itemsInside=duce.length;
    if(itemsInside>itemsInLine){
        document.body.style.overflow = 'visible';

    }

    for(i=0; i<duce.length;i += itemsInLine) {
        // alert("i= "+i);


        var divRow = document.createElement('div');
        divRow.className="row";


        // console.log(duce);
        // console.log(id);
        // console.log(cat);
        // console.log(descr);
        // console.log(name);
        // console.log(link);
        // console.log(price);

var j=0;
        var index=0;
        for(j=0;j<itemsInLine; j+=1){
            // alert("j= "+j);
            index=i+j;   if(index<itemsInside){

            var id = duce[index]._id;
            var cat = duce[index].cat;
            var descr = duce[index].descr;
            var name = duce[index].name;
            var link = duce[index].link;
            var price = duce[index].price;
            // alert("index= "+index);
            var div = document.createElement('div');
            div.className=clsType+" ctlg_item_col";
            // div.id="item-"+id;


            div.innerHTML =
                "                                    <div class=\"row\" id=\"ctlg_item-"+id+"\"  onclick=\"openItem(id)\" onmouseover='mHover(id)' onmouseout='mUnHover(id)'>\n" +
                "                                        <div class=\"col-12\"> " +
                "<div class='row' id='item_imgRow'> <img class=\"item_img\" src=\"images/"+dir+"/"+link+".jpg\" alt=\"sdf\"></div>\n" +
                "<div class='row'> <p class=\"item_ttl\">"+name+"</p></div>" +
                "<div id=\"item_price_row-"+id+"\" class='row'> <p class=\"item_price\">"+price+" ₪</p></div>" +
  "                            </div>";



            divRow.appendChild(div);
            }
        }






        container.appendChild(divRow);



    }




}


function mHover(id) {
    var itemId = id.split("-")[1];
    // alert(id)
    let div=document.getElementById(id);
    let divImg=div.getElementsByClassName("item_img")[0];
    let divTtl=div.getElementsByClassName("item_ttl")[0];
    let divPrice=div.getElementsByClassName("item_price")[0];
        divImg.style.transform="scale(1.2)";
    divTtl.style.textShadow="gray 1px 1px";
    // divTtl.style.fontWeight="bold";
    divPrice.style.textShadow="gray 1px 1px";
        // divImg.style.transform = "rotate(7deg)"

}

function mUnHover(id) {
    var itemId = id.split("-")[1];
    // alert(id)
    let div=document.getElementById(id);
    let divImg=div.getElementsByClassName("item_img")[0];
    let divTtl=div.getElementsByClassName("item_ttl")[0];
    let divPrice=div.getElementsByClassName("item_price")[0];
    divImg.style.transform="scale(1)";
    divTtl.style.textShadow="";
    divPrice.style.textShadow=""
}


function openItem(id) {

    // var itemId = parseInt(id.split("-")[1],10);
    var itemId = id.split("-")[1];
    var queryString = "?cat=" + catId+"&item="+itemId;
    window.location.href = "item.html" + queryString;

}









$(document).ready(function(){
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    for (var i = 0; i < queries.length; i++)
    {
        var end = parseInt(queries[i].split("=")[1],10);
        catId=end;
        // document.write(end + "<br>");
        dir="categories/"+catId;

    }
    divRowProgress = document.createElement('div');
    divRowProgress.className="row";
    divRowProgress.id="divRowProgress";
    divRowProgress.innerHTML ="<p>Download...</p>";
    document.body.style.overflow = 'hidden';

    container.appendChild(divRowProgress);




    getItemData(catId);
});

function getItemData(catId) {

    const url='https://printstore.herokuapp.com/itemgetbycat';


    request = $.ajax({
        url: url,
        type: "post",
        data:{ "cat" : catId}
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        // console.log("Hooray, it worked!");
        // console.log("resp: "+response);
        // console.log("textStatus: "+textStatus);
        console.log(response);
        var duce = jQuery.parseJSON(response);
        divRowProgress.innerHTML ="<p>There are no products in this category yet, but they will be soon.</p>";
        if(duce.length>0){
            divRowProgress.remove();

            var id = duce[0]._id;
            var cat = duce[0].cat;
            var descr = duce[0].descr;
            var name = duce[0].name;
            var link = duce[0].link;
            var price = duce[0].price;
            // console.log(duce);
            console.log(id);
            console.log(cat);
            console.log(descr);
            console.log(name);
            console.log(link);
            console.log(price);
            createItems(duce);

            // createItem(id,cat,descr,name,link,price);
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