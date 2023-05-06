function question_1(){
   
}


function question_2(){
   
}



function question_3(){
    for(var i=1; i<=10; i++){
        document.write(i + "<br/>") 
    }
}

function question_4(){
    var tableNumber = parseInt(prompt("Enter Number"));
    var range = parseInt(prompt("Enter Range"));
    for(var i=1; i<=range; i++){
        document.write(tableNumber + " x " + i + "  = " + tableNumber*i  + "<br/>")
    }
}


function question_5(){
   var fruitsArray = ["apple","banana","mango","orange","strawbery"];
   for(var i=0; i<fruitsArray.length; i++){
    document.write(fruitsArray[i] + "<br/>" )
   }
   for(var i=0; i<fruitsArray.length; i++){
    document.write("Element at index " + i +  " is " + fruitsArray[i] + "<br/>")
    
   }
}

function question_6(){
    document.write("Counting: ")
    for(var i=0; i<=15; i++){
        document.write(i + " ,")
    }
    document.write("<br/>")
    document.write("Reverse Counting: ")
    for(var i=10; i>=1; i--){
        document.write(i + ",")
    }
    document.write("<br/>")
    document.write("Even: ")
    for(var i=0; i<=20; i++){
        if(i%2===0){
            document.write(i + ",")
        }
    }
    document.write("<br/>")
    document.write("Odd: ")
    for(var i=0; i<=20; i++){
        if(i%2!==0){
            document.write(i+",")
        }
    }
    document.write("<br/>")
    document.write("Series: ")
    for(var i=0; i<=20; i++){
        if(i%2==0){
            document.write(i + "k" + ",")
        }
    }

}


    function question_7(){
        var userInput = prompt("Enter bakery items")
        var bakeryItems = ["cake","apple pie", "cookie" ,"chips","patties"];
        flag = true;
        for(var i=0; i<bakeryItems.length; i++){
            if(bakeryItems[i]===userInput){
                flag=true;
                alert(bakeryItems[i] + " is available at index " + i + " in our bakery" )
            }else{
                flag=false
                alert("We are Sorry. " + userInput + " is not available in our bakery")
            }
        }
    }

    function question_8(){
        var lgNUmber = [24,53,78,91,12];
        var a = -1 ;
        for(var i=0; i<lgNUmber.length; i++){
            if(lgNUmber[i] >a){
                a=lgNUmber[i]
            }
        }
        alert("The greatest Number is: " + a)
    }

    function question_9(){
        var lgNUmber = [24,53,78,91,12];
        var a = 100 ;
        for(var i=0; i<lgNUmber.length; i++){
            if(lgNUmber[i] <a){
                a=lgNUmber[i]
            }
        }
        alert("The smallest Number is: " + a)
    }

    function question_10(){
        for(var i=1; i<=100; i++){
            if(i%5===0){
                document.write(i + "<br/>")
            }
        }
    }