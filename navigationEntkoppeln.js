aktualisiereNavSicht(); 
TimerNav = setInterval('aktualisiereNavSicht()', 100);      
var desktopBreakpoint = 800;
var desktopAnsicht = true;

function aktualisiereNavSicht()
{
    
    pruefeAnsicht()
    if(desktopAnsicht == true)
    {    
        if(pruefeObSichtbar() == false)
        {
            //Navigation ausdocken                                                                                             
    
            document.getElementById('navigationScrollMarke').style.top =                '0px';
            document.getElementById('navigationScrollMarke').style.position =           'fixed';
            document.getElementById('navigationScrollMarke').style.backgroundImage =    'url("Fonts/Bilder/Backgrounds/Transparente/100zu95.png")';
    
        }   
        else
        {                                                                                                                                  
            //Navigation (wieder)andocken                                    
            document.getElementById('navigationScrollMarke').style.top =                '500px';
            document.getElementById('navigationScrollMarke').style.position =           'absolute';
            document.getElementById('navigationScrollMarke').style.backgroundImage =    'url("Fonts/Bilder/Backgrounds/Transparente/0.png")';
       
        }
    }
    else
    {
            //Navigation angedockt lassen
            document.getElementById('navigationScrollMarke').style.top =                '300px';
            document.getElementById('navigationScrollMarke').style.position =           'absolute';
            document.getElementById('navigationScrollMarke').style.backgroundImage =    'url("Fonts/Bilder/Backgrounds/Transparente/0.png")';

    } 
}                                                             

function pruefeObSichtbar()
{
    if(window.pageYOffset < 450)
    {
        return true;
    }
    else
    {
        return false;
    }
}
