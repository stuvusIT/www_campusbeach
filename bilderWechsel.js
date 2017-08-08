
    var bildbasistitel  = 'wechselBild';
    var anzahlBilder    = 3;
    var aktuellesBild   = 1;
    var zoomEinstellung = 120;
    var zoomfaktor      = zoomEinstellung;
    var desktopBreakpoint = 800;
    var desktopAnsicht = true;
    
    document.getElementById('wechselBild2').style.opacity = 0;
    document.getElementById('wechselBild3').style.opacity = 0;
       
    var zoomfaktor = 100;
    Timer = setInterval('inzoomHeaderBilder()', 100);

    function inzoomHeaderBilder()
        {
        
           pruefeAnsicht()
           zoomfaktor += 0.25;
           if(desktopAnsicht == true)
           {
                //Weite zu 100% füllen
               document.getElementById('wechselBild' + aktuellesBild).style.backgroundSize = zoomfaktor + '% auto';
               document.getElementById('wechselBild' + gibNaechsteBildNr()).style.backgroundSize = (zoomfaktor-15) + '% auto';
           }
           else
           {                          
                //Höhe zu 100% füllen
               document.getElementById('wechselBild' + aktuellesBild).style.backgroundSize = 'auto ' + zoomfaktor + '%';
               document.getElementById('wechselBild' + gibNaechsteBildNr()).style.backgroundSize = 'auto ' + (zoomfaktor-15) + '%';
           }
           if(zoomfaktor > zoomEinstellung-5)
           {
             
               document.getElementById('wechselBild' + aktuellesBild).style.opacity = (120 - zoomfaktor)/5;
               document.getElementById('wechselBild' + gibNaechsteBildNr()).style.opacity = 1 - (120-zoomfaktor)/5;
            
               if(zoomfaktor >= zoomEinstellung)
               {
                   if(desktopAnsicht == true)
                       {
                        //Weite zu 100% füllen
                       document.getElementById('wechselBild' + aktuellesBild).style.backgroundSize  = 100 + '% auto';
                       }
                       else
                       {
                        //Höhe zu 100% füllen
                       document.getElementById('wechselBild' + aktuellesBild).style.backgroundSize  = 'auto ' + 100 + '%';
                       }
                       aktuellesBild = gibNaechsteBildNr();
                       zoomfaktor = 105;
               }
           }
        }
    function outzoomHeaderBilder()
        {

           zoomfaktor -= 0.25;
           if(desktopAnsicht == true)
           {
               document.getElementById('wechselBild' + aktuellesBild).style.backgroundSize = zoomfaktor + '% auto';
               document.getElementById('wechselBild' + gibNaechsteBildNr()).style.backgroundSize = (zoomfaktor+20) + '% auto';
            }
            else
            {
               document.getElementById('wechselBild' + aktuellesBild).style.backgroundSize = 'auto ' + zoomfaktor + '%';
               document.getElementById('wechselBild' + gibNaechsteBildNr()).style.backgroundSize = 'auto ' + (zoomfaktor+20) + '%';
            }
           if(zoomfaktor < zoomEinstellung-5)
           {
               document.getElementById('wechselBild' + aktuellesBild).style.opacity = (zoomfaktor-100)/5;
               document.getElementById('wechselBild' + gibNaechsteBildNr()).style.opacity = 1 - (zoomfaktor-100)/5;
               if(zoomfaktor == 100)
               {
                   document.getElementById('wechselBild' + aktuellesBild).style.backgroundSize  = zoomEinstellung + '% auto';
                   aktuellesBild = gibNaechsteBildNr();
                   zoomfaktor = zoomEinstellung;
               }
           }
        }
    function gibNaechsteBildNr()
    {
        var neuesBild = aktuellesBild + 1;
        if (neuesBild > anzahlBilder)
        {
            return 1;
        }
        else
        {
            return neuesBild;
        }
    }
    
    function pruefeAnsicht()
    {
        if(window.innerWidth <= desktopBreakpoint)
        {
            desktopAnsicht = false;        
        }   
        else
        {
            desktopAnsicht = true;
        }
    }
