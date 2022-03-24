var quantity1 = 0;
document.getElementById("button1").addEventListener("click",function(){
    document.getElementById("button1").style.backgroundColor = "chocolate";
    quantity1 = document.getElementById("guitar").value;
    //document.getElementById("spanforguitar").innerHTML="Product : " + productname + "<br>" + "Quantity : " + quantity1 + "<br>" + "Price : " + "&#36;" + total + "<br>";
});

var quantity2 = 0;
document.getElementById("button2").addEventListener("click",function(){
    quantity2 = document.getElementById("trumpet").value;
    document.getElementById("button2").style.backgroundColor = "chocolate";
    //document.getElementById("spanfortrumpet").innerHTML="Product : " + productname + "<br>" + "Quantity : " + quantity1 + "<br>" + "Price : " + "&#36;" + total + "<br>";
});

var quantity3 = 0;
document.getElementById("button3").addEventListener("click",function(){
    quantity3 = document.getElementById("piccalo").value;
    document.getElementById("button3").style.backgroundColor = "chocolate";
    //document.getElementById("spanforpiccalo").innerHTML="Product : " + productname + "<br>" + "Quantity : " + quantity1 + "<br>" + "Price : " + "&#36;" + total + "<br>";
});

var quantity4 = 0;
document.getElementById("button4").addEventListener("click",function(){
    quantity4 = document.getElementById("violin").value;
    document.getElementById("button4").style.backgroundColor = "chocolate";
    //document.getElementById("spanforviolin").innerHTML="Product : " + productname + "<br>" + "Quantity : " + quantity1 + "<br>" + "Price : " + "&#36;" + total + "<br>";
});

var quantity5 = 0;
document.getElementById("button5").addEventListener("click",function(){
    quantity5 = document.getElementById("piano").value;
    document.getElementById("button5").style.backgroundColor = "chocolate";
    //document.getElementById("spanforpiano").innerHTML="Product : " + productname + "<br>" + "Quantity : " + quantity1 + "<br>" + "Price : " + "&#36;" + total + "<br>";
});

var quantity6 = 0;
document.getElementById("button6").addEventListener("click",function(){
    quantity6 = document.getElementById("bongo").value;
    document.getElementById("button6").style.backgroundColor = "chocolate";
    //document.getElementById("spanforbongo").innerHTML="Product : " + productname + "<br>" + "Quantity : " + quantity1 + "<br>" + "Price : " + "&#36;" + total + "<br>";
});

function validateform(){
    var mail = document.getElementById("txtmail").value;
    var name = document.getElementById("txtname").value;
    if((mail=="") && (name=="")){
        alert("Please enter your E-mail and name");
        return false;
    }
    if (mail==""){
        alert("Please enter your E-mail");
        return false;
    }
    if(name==""){
        alert("Please enter your name");
        return false;
    }
    var total = (229*quantity1) + (110*quantity2) + (76*quantity3) + (149*quantity4) + (4018*quantity5) + (62 * quantity6);
    document.getElementById("divforinvoice").style.borderStyle = "dashed";
    document.getElementById("divforinvoice").style.backgroundColor = "chocolate";
    document.getElementById("invoice").innerHTML = "INVOICE";
    document.getElementById("spanfordetails").innerHTML = "Name : "+name+"<br>"+"Email : "+mail+"<br>-----------------------------------------------<br>";
    if(quantity1!=0){
        document.getElementById("spanforguitar").innerHTML="Product : Electric Guitar" + "<br>" + "Quantity : " + quantity1 + "<br>" + "Price : &#36;229" + "<br><br>";
    }
    if(quantity2!=0){
        document.getElementById("spanfortrumpet").innerHTML="Product : Trumpet" + "<br>" + "Quantity : " + quantity2 + "<br>" + "Price : &#36;110" + "<br><br>";
    }
    if(quantity3!=0){
        document.getElementById("spanforpiccalo").innerHTML="Product : Piccalo" + "<br>" + "Quantity : " + quantity3 + "<br>" + "Price : &#36;76" + "<br><br>";
    }
    if(quantity4!=0){
        document.getElementById("spanforviolin").innerHTML="Product : Violin" + "<br>" + "Quantity : " + quantity4 + "<br>" + "Price : &#36;149" + "<br><br>";
    }
    if(quantity5!=0){
        document.getElementById("spanforpiano").innerHTML="Product : Grand Piano" + "<br>" + "Quantity : " + quantity5 + "<br>" + "Price : &#36;4018" + "<br><br>";
    }
    if(quantity6!=0){
        document.getElementById("spanforbongo").innerHTML="Product : African Bongo" + "<br>" + "Quantity : " + quantity6 + "<br>" + "Price : &#36;62" + "<br><br>";
    }
    document.getElementById("spanfortotal").innerHTML = "TOTAL BILL : " + "&#36;" + total;
};


