$(document).ready(() => {
    $('#menu-btn').click(changeNav);

    function changeNav() {
        $('#menu-btn').toggleClass("turn");
    }
})