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
equal.addEventListener("click",()=>{
if(!disHistory||!disInput)return;
haveDot=false;
mathOperation();
clearVar();
display.innerText=result
tempResult.innerText="";
disInput=result;
disHistory="";
})

clearAll.addEventListener("click",()=>{
    disHistory="";
    displayHistory.innerText="";
    disInput="";
    display.innerText="";
    haveDot=false;
    result="";
    tempResult="";
    lastOperation="";
})

clearLast.addEventListener("click",()=>{
    display.innerText="";
    disInput=""
})

window.addEventListener("keydown", (e)=>{
    if(e.key==="0" ||
       e.key==="1" ||
       e.key==="2" ||
       e.key==="3" ||
       e.key==="4" ||
       e.key==="5" ||
       e.key==="6" ||
       e.key==="7" ||
       e.key==="8" ||
       e.key==="9" ){
        clickButton(e.key)
       }else if(e.key==="+"||
                e.key==="-"||
                e.key==="/"||
                e.key==="&"){
                    clickOperation(e.key)
                }else if(e.key==="*"){
                    clickOperation("X")
                }else if(e.key==="Enter"||e.key==="="){
                    clickEqual()
                }else if(e.key==="Backspace"){
                    clickClear()
                }
})
function clickButton(key){
    numbers.forEach((button)=>{
        if(button.innerText===key){
            button.click()
        }
    })
}
function clickOperation(key){
    operations.forEach((operation)=>{
        if(operation.innerText===key){
            operation.click()
        }
    })
}
function clickEqual(){
    equal.click()
}
function clickClear(){
    clearAll.click()
}


