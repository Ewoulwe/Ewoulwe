//console.log(window.innerWidth)
//------------------------------------------------------------------------------------------------------------------
// Navbar animasyou
var before_y = window.scrollY;
window.addEventListener("scroll", function(){

    if(before_y > window.scrollY)
    {
        //console.log("acık");
        document.getElementById("navbar").style.animation = "kapalı 1s";
        document.getElementById("navbar").style.top = "0px";

        document.getElementById("ikinci_navbar").style.animation = "kapalı2 1s";
        document.getElementById("ikinci_navbar").style.top = "80px";

        document.getElementById("search_area").style.top = "-100";
        document.getElementById("search_area").style.animation = "search_area_close 1s";
        kontrol1 = 0;

    }
    else if(before_y < window.scrollY)
    {
        //console.log("kapalı");
        document.getElementById("navbar").style.animation = "acık 1s";
        document.getElementById("navbar").style.top = "-100px";

        document.getElementById("ikinci_navbar").style.animation = "acık 1s";
        document.getElementById("ikinci_navbar").style.top = "-200px";

        document.getElementById("search_area").style.top = "-100";
        document.getElementById("search_area").style.animation = "search_area_close 1s";
        kontrol1 = 0;

    }
    before_y = window.scrollY;

})
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//search_area açma

var kontrol1 = 0;
function kontrol()
{
    if(kontrol1 == 0)
    {
        search_area_open();
        kontrol1 = 1;
    }
    else if(kontrol1 == 1)
    {
        search_area_close();
        kontrol1 = 0;
    }
}
function search_area_open()
{
    if(kontrol1 == 0)
    {
        document.getElementById("search_area").style.animation = "search_area_open 1s";
        document.getElementById("search_area").style.top = "80px";
    }
    
}
function search_area_close()
{
    if(kontrol1 == 1)
    {
        document.getElementById("search_area").style.animation = "search_area_close 1s";
        document.getElementById("search_area").style.top = "-100px";
    }
    
}
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
