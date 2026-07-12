const dropList = document.querySelectorAll("select");

dropList.forEach(select => {
    for (const currency_code in countryList) {
        const option = document.createElement("option");
        option.value = currency_code;
        option.innerText = currency_code;

        if (select.id === "from" && currency_code === "USD") {
            option.selected = true;
        }
        if (select.id === "to" && currency_code === "INR") {
            option.selected = true;
        }

        select.appendChild(option);
    }
});

const from=document.getElementById("from");
const to=document.getElementById("to");
const fromFlag=document.getElementById("fromFlag");
const toFlag=document.getElementById("toFlag");
const result=document.getElementById("result");
const btn=document.getElementById("btn");

function updateFlag(element,img){
img.src=`https://flagsapi.com/${countryList[element.value]}/flat/64.png`;
}

from.addEventListener("change",()=>{
updateFlag(from,fromFlag);
});

to.addEventListener("change",()=>{
updateFlag(to,toFlag);
});

btn.addEventListener("click",async()=>{

let amount=document.getElementById("amount").value;

let url=`https://open.er-api.com/v6/latest/${from.value}`;

let response=await fetch(url);
let data=await response.json();

let rate=data.rates[to.value];

let total=(amount*rate).toFixed(2);

result.innerHTML=`${amount} ${from.value} = ${total} ${to.value}`;

});
