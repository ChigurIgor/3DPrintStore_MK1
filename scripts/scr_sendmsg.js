function sendMsg() {
    var name = document.getElementById("nameMsg").value;
    var email = document.getElementById("emailMsg").value;
    var phone = document.getElementById("phoneMsg").value;
    var txt = document.getElementById("txtMsg").value;
    var address = document.getElementById("emailAdrs").value;

    if(name=="" || email==""|| phone==""|| address==""){
        alert("Some order registration field is empty");
        return;
    }



    var divRowProgress;

    // var year=Date.now().getFullYear();
    // var month=Date.now().getMonth();
    // var date=Date.now().getDate();
    // Use of Date.now() function
    // var d = Date(Date.now());
    //
    // // Converting the number of millisecond in date string
    // a = d.toString();
    // console.log(a);


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var todayDate = dd + '/' + mm + '/' + yyyy;
    console.log(todayDate);

    var hh = today.getHours();
    var mins = today.getMinutes(); //January is 0!
    var secs = today.getSeconds(); //January is 0!
    if (hh < 10) {
        hh = '0' + hh;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }

    var todayTime = hh + '/' + mins + '/' + secs;
    console.log(todayTime);




    var cartData=getCartData();
    arrKeys=getKeys(cartData);
    itemsCount=arrKeys.length;
    if(itemsCount>0){
    var arr=[];


    for(i=0;i<itemsCount;i+=1) {
        var item = cartData[arrKeys[i]];
        var obj = new Object();


        id = item[0];
        count = item[1];
        cat = item[3];
        descr = item[4];
        nameItem = item[5];
        link = item[6];
        price = item[7];
        obj.id = id;
        obj.count = count;
        obj.nameItem = nameItem;
        obj.price = price;

        var jsonString= JSON.stringify(obj);
        // console.log(jsonString);
        // console.log(obj);
        // console.log(obj);

        arr.push(jsonString);

    }
    var obj=JSON.stringify(arr);
console.log(JSON.stringify(arr));
        // var arrObj = JSON.parse(obj);
        // console.log(arrObj);
        // console.log(JSON.parse(arrObj[0]).id);


        divRowProgress = document.createElement('div');
        divRowProgress.className="row";
        divRowProgress.id="divRowProgress";
        divRowProgress.innerHTML ="<p>Sending...</p>";
        container.appendChild(divRowProgress);

    var http = new XMLHttpRequest();
    var url = 'https://printstore.herokuapp.com/orderadd';
    var params = 'email='+email+'&name='+name+'&phone='+phone+'&msgtxt='+txt+'&address='+address+'&cart='+obj+'&date='+todayDate+'&time='+todayTime;
    http.open('POST', url, true);

//Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            // alert("Your order has been sent");
            clearCart();
        }
    };
    http.send(params);

    }
    else {
        alert("Your cart is empty");
    }
}




function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}

function clearCart(){

    var cartData=getCartData();
    arrKeys=getKeys(cartData);
    itemsCount=arrKeys.length;
    if(itemsCount>0) {
        var arr = [];
    }

        localStorage.removeItem('cart');
// alert("removed")
        divRowProgress.remove();
        window.location.href = "cart.html";



}