$(document).ready(function () {
    let cartPrice = [];
    let cartCount = 0;
    let totalPriceItems = 0;

    $(".content-item").click(function () {
        alert("Handler for .click() called.");
    });

    $(function () {
        $(document).tooltip();
    });

    $('.item-price').click(function () {
        let itemPrice = ($(this).attr("data-value") * 1);
        priceAdd(itemPrice);
        incrementCartItems();
        cartDisplay();
    });

    function incrementCartItems() {
        cartCount++;
    }

    function cartDisplay() {
        document.getElementById("cart-count").innerHTML = cartCount;
        document.getElementById("total-price").innerHTML = totalPriceItems;
    }

    function priceAdd(itemPrice) {
        cartPrice.push(itemPrice);
        cartSum();
        priceClear();
    }

    function priceClear() {
        cartPrice = [];
    }

    function cartSum() {
        cartPrice.forEach(totalPrice);
    }

    function totalPrice(item) {
        totalPriceItems += item;
    }
});
