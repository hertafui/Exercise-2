function kalkulator(pilihan){
    var a1=parseInt(document.getElementById('ang1').value);
    var a2=parseInt(document.getElementById('ang2').value);
    var hasil;
   
    
    switch(pilihan)
        {
        case '1':
            hasil=a1+a2;
            break;
        case '2':
            hasil=a1-a2;
            break;
        case '3':
            hasil=a1*a2;
            break;
        case '4': 
            hasil=a1/a2;
            break;
        case '5':
            hasil=a2*100/a1;
            break;
        default:
            break;
                
        }
    document.getElementById('result').value=hasil;
    
        
    
    }