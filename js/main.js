
   // show the information currency
   function showCurrency() {
        var x = document.getElementById("currency-1").value;
        document.getElementById("currencyinfo").innerHTML = "You selected: " + x;
    
    }
    
    function enableBTN() {
        document.getElementById("convertBTN").disabled = false;
    }

    function convert() {
        var amountEnter = 0;

        var amountEnter = document.getElementById("amount").value;
        var x = document.getElementById("currency-1").value;
        var y = document.getElementById("CAD");
        var z = document.getElementById("NONCAD");

        // CAD -> USD
        if(x == "1 CAD = 0.79 USD , 1 USD = 1.27 CAD" && y.checked)
        {

            document.getElementById("converetedInfo").innerHTML = "Convereted:  From " + (amountEnter) + " CAD to " + (amountEnter*0.79) + " USD" ;

        }
        // USD -> CAD
        else if(x == "1 CAD = 0.79 USD , 1 USD = 1.27 CAD" && z.checked)
        {
            document.getElementById("converetedInfo").innerHTML = "Convereted:  From " + (amountEnter) + " USD to " + (amountEnter*1.27) + " CAD";
        }

        ///////////////// UK /////////////////
        
        // CAD -> POUND
        else if(x == "1 CAD = 0.6 Pounds, 1 Pound = 1.65 CAD" && y.checked)
        {
            document.getElementById("converetedInfo").innerHTML = "Convereted:  From " + (amountEnter) + " CAD to " + (amountEnter*0.6) + " British Pounds" ;
        }
        // POUNDS -> CAD
        else if(x == "1 CAD = 0.6 Pounds, 1 Pound = 1.65 CAD" && z.checked)
        {
            document.getElementById("converetedInfo").innerHTML = "Convereted:  From " + (amountEnter) + " Pounds to " + (amountEnter*1.65) + " CAD" ;
        }

         ///////////////// France /////////////////

           // CAD -> EUROS
        else if(x == "1 CAD = 0.67 Euro, 1 Euro = 1.5 CAD" && y.checked)
        {
            document.getElementById("converetedInfo").innerHTML = "Convereted:  From " + (amountEnter) + " CAD to " + (amountEnter*0.67) + " Euros" ;
        }
        // EUROS -> CAD
        else if(x == "1 CAD = 0.67 Euro, 1 Euro = 1.5 CAD" && z.checked)
        {
            document.getElementById("converetedInfo").innerHTML = "Converted: From " + (amountEnter) + " Euros to " + (amountEnter*1.5) + " CAD" ;
        }
    }

