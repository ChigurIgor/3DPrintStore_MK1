GLOBAL_ID="";

function showPicture(id,cat) {

let link=id+"_lg";
    dir="categories/"+cat;
    GLOBAL_ID=link;

    var div = document.createElement('div');
// alert(cat);

    mySrc="images/"+dir+"/"+link+".jpg";
    // // div.innerHTML =                 "    <img class=\"bigImg\" src=\""+mySrc+"\" alt=\"" + mySrc + "\" >\n" ;
    // if( navigator.userAgent.match(/Android/i)
    //     || navigator.userAgent.match(/webOS/i)
    //     || navigator.userAgent.match(/iPhone/i)
    //     || navigator.userAgent.match(/iPad/i)
    //     || navigator.userAgent.match(/iPod/i)
    //     || navigator.userAgent.match(/BlackBerry/i)
    //     || navigator.userAgent.match(/Windows Phone/i)){
    //
    //     div.innerHTML =
    //
    //         "    <div  id=\"picture\" class=\"col-12\" >\n" +
    //
    //
    //         "<div id=\"bigImgSR\" class='row'>\n" +
    //         "    <div id=\"bigImg\" class=\"col-10\" align=\"center\">\n" +
    //         "    <img  src=\""+mySrc+"\" alt=\"" + mySrc + "\" >\n" +
    //         // "    <p>" + xx + "</p>\n" +
    //         "    </div>\n" +
    //         "    </div>\n" +
    //
    //         "<div id=\"bigImgXSR\" class='row'>\n" +
    //
    //         "    <div id=\"arrowLeftImg\" onclick=\"prevPicture()\"  onmouseover=\"myHoverX(id)\"  onmouseout=\"myUnHoverX(id)\" class=\"col-4 \" align=\"center\" >\n" +
    //         "    <img src=\"../Images/Support/icon_arrow_left_gray.png\" alt=\"X" + "\" >\n" +
    //         // "    <p>" + yy + "</p>\n" +
    //         "    </div>\n" +
    //
    //         "    <div id=\"bigImgX\" onclick=\"hidePicture()\"  onmouseover=\"myHoverX(id)\"  onmouseout=\"myUnHoverX(id)\" class=\"col-4 \" align=\"center\" >\n" +
    //         "    <img src=\"../Images/Support/icon_close.png\" alt=\"X" + "\" >\n" +
    //         // "    <p>" + yy + "</p>\n" +
    //         "    </div>\n" +
    //
    //         "    <div id=\"arrowRightImg\" onclick=\"nextPicture()\"  onmouseover=\"myHoverX(id)\"  onmouseout=\"myUnHoverX(id)\" class=\"col-4 \" align=\"center\" >\n" +
    //         "    <img src=\"../Images/Support/icon_arrow_right_gray.png\" alt=\"X" + "\" >\n" +
    //         // "    <p>" + yy + "</p>\n" +
    //         "    </div>\n" +
    //
    //
    //         "    </div>\n"
    //
    //
    //
    //     ;
    //
    // }
    // else{
        div.innerHTML =

            "    <div  id=\"arrowLeft\" class=\"col-1\" >\n" +
            // "    <img id=\"arrowLeftImg\"src=\"./images/support/icon_arrow_left_gray.png\" alt=\"item_\"  onclick=\"prevPicture()\"  onmouseover=\"myHoverArrow(id)\"  onmouseout=\"myUnHoverArrow(id)\" class=\"col-md-10 offset=md-1\" align=\"center\">\n" +
            "    </div>\n" +

            "    <div id=\"bigImg\" class=\"col-9\" align=\"center\">\n" +
            "    <img  src=\""+mySrc+"\" alt=\"" + mySrc + "\" >\n" +
            // "    <p>" + xx + "</p>\n" +
            "    </div>\n" +


            "    <div  id=\"arrowRight\" class=\"col-1\"  align=\"center\">\n" +
            // "    <img id=\"arrowRightImg\"src=\"./images/support/icon_arrow_right_gray.png\" alt=\"item_\"  onclick=\"nextPicture()\"  onmouseover=\"myHoverArrow(id)\"  onmouseout=\"myUnHoverArrow(id)\" class=\"col-md-10 offset=md-1\" align=\"center\">\n" +
            // "    <p>" + yy + "</p>\n" +
            "    </div>\n" +

            "    <div  class=\"col-1\" align=\"center\">\n" +
            "    <div id=\"bigImgX\" onclick=\"hidePicture()\"  onmouseover=\"myHoverX(id)\"  onmouseout=\"myUnHoverX(id)\" class=\"col-md-10 offset=md-1\" align=\"center\" >\n" +
            "    <img src=\"./images/support/icon_close.png\" alt=\"item_\" >\n" +
            // "    <p>" + yy + "</p>\n" +
            "    </div>\n" +
            "    </div>"

        ;
    // }




    // div.position="absolute";
    div.zIndex=10;
    // div.align="center";
    div.className="row";
    // div.id="bigImgRow";
    // div.minHeight="100em";
    div.backgroundColor="rgb(255,0,0)";
    // div.background="rgba(0,0,0,0.2)";
    // hcont.style.background="rgba(0,0,0,0.7)";
    // sd_menu.style.zIndex=1;

    // document.body.prepend(div);
   let container= document.body.getElementsByClassName("container-fluid")[0];
   container.position="relative";
        container.prepend(div);
    // row_2.insertBefore(div, row_2.firstChild);

    // document.body.style.overflowY="hidden";
    //
    // var end = parseInt(GLOBAL_ID.split("-")[1],10);
    // // alert(parseInt(GLOBAL_ID.split("item-")[1],10));
    // base = GLOBAL_ID.split("-")[0]+"-";
    // nextP=end-1;
    //
    // if(end==1){
    //     hideLeftArrow();
    // }
    // if(end==filesInside){
    //     hideRightArrow();
    // }



}

function hidePicture() {
    GLOBAL_ID=0;

    //
    //
    // // div.innerHTML =                 "    <img class=\"bigImg\" src=\""+mySrc+"\" alt=\"" + mySrc + "\" >\n" ;
    //
    //
    // var parent = document.getElementById("hcont");
    // var child = document.getElementById("bigImgRow");
    // parent.removeChild(child);
    // hcont.style.background="rgba(0,0,0,0.0)";
    // sd_menu.style.zIndex=6;
    //
    // document.body.style.overflowY="visible";


}

function myHoverX(id) {
    // document.getElementById(id).style.transform = "scale(1.1)";
    // document.getElementById("bigImgX").getElementsByTagName("img")[0].src = "../Images/Support/icon_close_r.png";
}
function myUnHoverX(id) {
    // document.getElementById(id).style.transform = "scale(1)";
    // document.getElementById(id).style.zIndex = 0;
    // document.getElementById("bigImgX").getElementsByTagName("img")[0].src = "../Images/Support/icon_close.png";
}

function myHoverArrow(id) {
    // mSrc="";
    // document.getElementById(id).style.transform = "scale(1.1)";
    // if(id=="arrowLeftImg"){mSrc = "../Images/Support/icon_arrow_left_r.png";}
    // if(id=="arrowRightImg"){mSrc = "../Images/Support/icon_arrow_right_r.png";}
    // document.getElementById(id).src = mSrc;
}
function myUnHoverArrow(id) {
    // mSrc="";
    // document.getElementById(id).style.transform = "scale(1)";
    // if(id=="arrowLeftImg"){mSrc = "../Images/Support/icon_arrow_left_gray.png";}
    // if(id=="arrowRightImg"){mSrc = "../Images/Support/icon_arrow_right_gray.png";}
    // document.getElementById(id).src = mSrc;
}

function prevPicture() {
    // // var textInside = document.getElementById("title_2").getElementsByTagName('p')[0].innerHTML;
    // // if(textInside=="Interior"){ filesInside=35;dir="Interior";}
    // // if(textInside=="Facade"){ filesInside=5;dir="Facade";}
    // // if(textInside=="Clothes"){ filesInside=4;dir="Clothes";}
    // // if(textInside=="Portraits"){ filesInside=9;dir="Portraits";}
    //
    // var end = parseInt(GLOBAL_ID.split("-")[1],10);
    // base = GLOBAL_ID.split("-")[0]+"-";
    // nextP=end-1;
    // if(nextP>0){
    //     newId=base+nextP;
    //     document.getElementById("bigImg").getElementsByTagName("img")[0].src = "../Images/Painters_work/" + dir + "/" + nextP + ".jpg";
    //     GLOBAL_ID=newId;
    // }
    // if(nextP==1){
    //     hideLeftArrow();
    // }
    // if(nextP==filesInside-1){
    //     showRightArrow();
    // }
}



function nextPicture() {
    // // var textInside = document.getElementById("title_2").getElementsByTagName('p')[0].innerHTML;
    // // if(textInside=="Interior coloring"){ filesInside=35;dir="Interior";}
    // // if(textInside=="Facade coloring"){ filesInside=5;dir="Facade";}
    // // if(textInside=="Clothes coloring"){ filesInside=4;dir="Clothes";}
    // // if(textInside=="Portraits"){ filesInside=9;dir="Portraits";}
    //
    // var end = parseInt(GLOBAL_ID.split("-")[1],10);
    // base = GLOBAL_ID.split("-")[0]+"-";
    // nextP=end+1;
    // if(nextP<=filesInside){
    //     newId=base+nextP;
    //     document.getElementById("bigImg").getElementsByTagName("img")[0].src = "../Images/Painters_work/" + dir + "/" + nextP + ".jpg";
    //     GLOBAL_ID=newId;
    // }
    // if(nextP==filesInside){
    //     hideRightArrow();
    // }
    // if(nextP==2){
    //     showLeftArrow();
    // }

}

function hideLeftArrow() {
    // document.getElementById("arrowLeftImg").style.visibility="hidden";

}

function hideRightArrow() {
    // document.getElementById("arrowRightImg").style.visibility="hidden";

}

function showLeftArrow() {
    // document.getElementById("arrowLeftImg").style.visibility="visible";

}

function showRightArrow() {
    // document.getElementById("arrowRightImg").style.visibility="visible";

}