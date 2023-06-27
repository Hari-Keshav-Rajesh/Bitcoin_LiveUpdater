async function update(){
    const parse = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await parse.json();

    code[0].innerHTML='';
    code[1].innerHTML='';
    code[2].innerHTML='';
    desc[0].innerHTML='';
    desc[1].innerHTML='';
    desc[2].innerHTML='';
    rate[0].innerHTML='';
    rate[1].innerHTML='';
    rate[2].innerHTML='';
    time.innerHTML='';
    

    code[0].innerText= data.bpi.USD.code;
    code[1].innerText=data.bpi.GBP.code;
    code[2].innerText=data.bpi.EUR.code;
    desc[0].innerText=data.bpi.USD.description;
    desc[1].innerText=data.bpi.GBP.description;
    desc[2].innerText=data.bpi.EUR.description;
    rate[0].innerText=data.bpi.USD.rate;
    rate[1].innerText=data.bpi.GBP.rate;
    rate[2].innerText=data.bpi.EUR.rate;
    time.innerText=`The values were last updated on ${data.time.updateduk}`;
}

const code = document.querySelectorAll('.code');
const desc = document.querySelectorAll('.desc');
const rate = document.querySelectorAll('.rate');

update();

const button = document.querySelector(".button");
button.addEventListener('click',update);

const time = document.querySelector('.time');












/* The derived array

{"time":{"updated":"Jun 27, 2023 05:22:00 UTC","updatedISO":"2023-06-27T05:22:00+00:00","updateduk":"Jun 27, 2023 at 06:22 BST"},
"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
"chartName":"Bitcoin",
"bpi":
    {"USD":{"code":"USD","symbol":"&#36;","rate":"30,332.0232","description":"United States Dollar","rate_float":30332.0232},
    "GBP":{"code":"GBP","symbol":"&pound;","rate":"25,345.1959","description":"British Pound Sterling","rate_float":25345.1959},
    "EUR":{"code":"EUR","symbol":"&euro;","rate":"29,547.8190","description":"Euro","rate_float":29547.819}}}
    
*/