function sendmsg() {
    var name = document.getElementById("nameMsg").value;
    var email = document.getElementById("emailMsg").value;
    var phone = document.getElementById("phoneMsg").value;
    var txt = document.getElementById("txtMsg").value;
    // alert(name);
    // alert(email);
    // alert(phone);
    // alert(txt);

    var http = new XMLHttpRequest();
    var url = 'https://printstore.herokuapp.com/orderadd';
    var params = 'email='+email+'&name='+name+'&phone='+phone+'&msgtxt='+txt;
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