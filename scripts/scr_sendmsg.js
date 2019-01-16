function sendmsg() {
    var name = document.getElementById("nameMsg").value;
    var email = document.getElementById("emailMsg").value;
    var phone = document.getElementById("phoneMsg").value;
    var txt = document.getElementById("txtMsg").value;
    var address = document.getElementById("emailAdrs").value;

    // var year=Date.now().getFullYear();
    // var month=Date.now().getMonth();
    // var date=Date.now().getDate();

    var cartData=getCartData();
    arrKeys=getKeys(cartData);
    itemsCount=arrKeys.length;
    if(itemsCount>0){
    var arr=[];


    for(i=0;i<itemsCount;i+=1) {
        var item = cartData[arrKeys[i]];
        var obj = new Object();

        // console.log(item);
        // console.log(item[0]);
        // console.log(item[1]);
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

        var jsonString= JSON.stringify(obj);

        arr.push(jsonString);
    }
console.log(arr);
    var http = new XMLHttpRequest();
    var url = 'https://printstore.herokuapp.com/orderadd';
    var params = 'email='+email+'&name='+name+'&phone='+phone+'&msgtxt='+txt+'&address='+address+'&cart='+arr+'&date='+Date.now()+'&time='+Date.now();
    http.open('POST', url, true);

//Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
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