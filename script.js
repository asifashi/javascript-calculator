let oldvalue="";
let operators="";
let newvalue

function btnclick(value)
{   
   document.getElementById("screen").value=document.getElementById("screen").value+value
}
function btnclear()
{
    document.getElementById("screen").value=""
}
function calculate() {


    newvalue=document.getElementById("screen").value;
    let result;

    switch(operators)
    {
        case "+":
            
           result=parseFloat(oldvalue)+parseFloat(newvalue)
            break;
        case "-":
        
            result=parseFloat(oldvalue)-parseFloat(newvalue)
            break;
        case "*":
            
            result=parseFloat(oldvalue)*parseFloat(newvalue)
            break;
     case "/":
            
            result=parseFloat(oldvalue)/parseFloat(newvalue)
            break;
        default:
            result="Error";
    
} 

   
    document.getElementById("screen").value=result;
    oldvalue="";
    operators="";
    oldvalue=document.getElementById("screen").value
    
    
    
}   

function setoperators(value)
{    

    
    if(value!==null)
    {
    oldvalue=document.getElementById("screen").value
    operators=value;
    document.getElementById("screen").value=""
    newvalue=document.getElementById("screen").value

    }
    else if(value==null)
    {
     document.getElementById("screen").value=""
    }
    
           }

     
    


    
    
    