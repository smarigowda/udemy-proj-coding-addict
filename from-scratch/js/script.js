$(document).ready(() => {
    $('#links').toggle(100);
    $('#menu-btn').click(changeNav);

    function changeNav() {
        $('#links').toggle(100);
        $('#menu-btn').toggleClass("turn");
    }
})