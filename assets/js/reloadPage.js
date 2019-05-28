 function reload() {
        $("#map").hide().empty();
        $("#places>li").remove();
        document.getElementById("search").value = "";
        window.scrollTo(0, 0);
    }