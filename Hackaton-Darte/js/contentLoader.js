/** * Created by Szymon Maruda on 06.07.2017. */

$(function(){
    var id = $("#blog").find("h3").html();

    var html = ".html";

    var z = "text/" + id + html;

    $("#blog div").load(z);

})