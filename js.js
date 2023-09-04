// attach coin elements span tags to populate with price
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var dog = document.getElementById("dogecoin")


// https://www.coingecko.com/en/api/documentation
// set desired fields
var settings = {
    "async": true,
    "scrossDomain": true,
    // use url to access coin value in USD
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    // use a GET method request
    "method": "GET",
    "headers": {}
}

// https://www.coingecko.com/en/api/documentation
// asynchronous function request using jquery with settings used as a object parameter which contains various options for a HTTP method request
// .done uses a callback function
// we use the response of the callback function
// response represents data returned from server
// response of ajax request for currency data
$.ajax(settings).done(function (response){
    // console.log(response);
    // set innerHTML of span tag elements of the response . coin type . currency to access value of each coin
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    dog.innerHTML = response.dogecoin.usd;
})