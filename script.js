async function getapi(){
    const parse = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    data = await parse.json();
    console.log(data);
}








/* The required array

{"time":{"updated":"Jun 27, 2023 05:22:00 UTC","updatedISO":"2023-06-27T05:22:00+00:00","updateduk":"Jun 27, 2023 at 06:22 BST"},
"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
"chartName":"Bitcoin",
"bpi":
    {"USD":{"code":"USD","symbol":"&#36;","rate":"30,332.0232","description":"United States Dollar","rate_float":30332.0232},
    "GBP":{"code":"GBP","symbol":"&pound;","rate":"25,345.1959","description":"British Pound Sterling","rate_float":25345.1959},
    "EUR":{"code":"EUR","symbol":"&euro;","rate":"29,547.8190","description":"Euro","rate_float":29547.819}}}
    
*/