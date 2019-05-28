 function reload() {
        $("#map").hide().empty();
        $("#more").hide();
        $("#reset").hide();
        $("#places>li").remove();
        document.getElementById("search").value = "";
        window.scrollTo(0, 0);
    }