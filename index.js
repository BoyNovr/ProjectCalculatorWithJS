const displayHistory=document.querySelector(".display-history");
const display=document.querySelector(".display-input");
const tempResult=document.querySelector(".temp-result");
//querySelectorAll jika elemen nya lebih dari satu
const numbers=document.querySelectorAll(".number");
const operations=document.querySelectorAll(".operation");
const equal=document.querySelector(".equal");
const clearAll=document.querySelector(".all-clear");
const clearLast=document.querySelector(".last-entity-clear");

let disHistory="";
let disInput="";
let result=null;
let lastOperation="";
let haveDot=false;

numbers.forEach((number)=>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerText==="." && !haveDot){
            haveDot=true
        }else if(e.target.innerText==="." && haveDot){
            return;
        }
        disInput+=e.target.innerText
        display.innerText=disInput
        
    })
})
operations.forEach((operation)=>{
    operation.addEventListener('click',(e)=>{
        if(!disInput) return;
        haveDot=false;
        const operationName=e.target.innerText;
        lastOperation=operationName;
        if(disHistory&&disInput&&lastOperation){
            mathOperation()
        }else{
            result=parseFloat(disInput);
        }
        clearVar(operationName);
        
    })
})
function clearVar(name=""){
    disHistory+=disInput+" "+name+" ";
    displayHistory.innerText=disHistory;
    display.innerText="";
    disInput=""
    tempResult.innerText=result;
}

function mathOperation(){
    if(lastOperation==='X'){
        result=parseFloat(result)*parseFloat(disInput)
    }else if(lastOperation==='+'){
        result=parseFloat(result)+parseFloat(disInput)
    }else if(lastOperation==='-'){
        result=parseFloat(result)-parseFloat(disInput)
    }else if(lastOperation==='/'){
        result=parseFloat(result)/parseFloat(disInput)
    }else if(lastOperation==='%'){
        result=parseFloat(result)%parseFloat(disInput)
    }
}

