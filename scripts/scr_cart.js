$(document).ready(function(){
    showCartData();
});


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
        cartData[itemId] = [itemId,count];
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