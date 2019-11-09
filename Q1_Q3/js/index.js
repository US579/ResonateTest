// TODO: Modify this function
function string10to64(num) {
  var order = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  var base = order.length;
  var str = "", r;
  while (num) {
    r = num % base
    num -= r;
    num /= base;
    str = order.charAt(r) + str;
  }
  return str;
}


function string64to10(str) {
  var order = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  var base = order.length;
  var num = 0, r;
  while (str.length) {
    r = order.indexOf(str.charAt(0));
    str = str.substr(1);
    num *= base;
    num += r;
  }
  return num;
}
console.log(string64to10("rPRYugH"));
function timetrans(date) {
  var Y = date.getFullYear().toString().substring(2,4);
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  // var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  // var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  // var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return Y + M + D ;
}


function repeat(str, num) {
  if (num <= 0) {
    return "";
  } else {
    var newstr = "";
    for (var i = 0; i < num; i++) {
      newstr += str;
    }
    return newstr;
  }
}


// console.log(date)
// console.log(myDate.getDay().toString())
// console.log(string10to64(date))

function generateShortCode(storeId, transactionId) {
  // Logic goes here
  var sId = (storeId.toString().length < 3 ? repeat("0",3-storeId.toString().length) + storeId.toString() : storeId.toString());
  var tId = (transactionId.toString().length < 4 ? repeat("0", 4 - transactionId.toString().length) + transactionId.toString() : transactionId.toString())
  var myDate = new Date();
  var date = timetrans(myDate)
  // console.log(sId)
  // console.log(tId)
  // console.log(date)
  id = date + sId + tId
  // console.log(id)
  ans = string10to64(id)
  console.log(ans)
  return ans
}

// var a = generateShortCode(175,123)
// decodeShortCode(a);


function repeatRecover(string){
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "0") {
      continue
    }
    var index = i;
    break
  }
  return parseInt(string.substring(index))
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
  // Logic goes here
  shortCode = string64to10(shortCode).toString()
  // console.log(shortCode)
  var date = shortCode.substring(0, 6);
  var sid = shortCode.substring(6, 9);
  var tid = shortCode.substring(9, 13);
  // console.log(date.substring(0, 6));
  // console.log(date.substring(6,9))
  var nDate = new Date();
  // nDate.setFullYear('2018',parseInt(),12)
  nDate.setFullYear('20' + date.substring(0, 2), repeatRecover(date.substring(2, 4))-1, repeatRecover(date.substring(4, 6)))
  // console.log(nDate)
  return {
    storeId: repeatRecover(sid), // store id goes here,
    shopDate: nDate, // the date the customer shopped,
    transactionId: repeatRecover(tid) // transaction id goes here
  };
}

function clean(){
  document.getElementById("test-results").innerHTML="";
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

  var storeIds = [175, 42, 0, 9]
  var transactionIds = [9675, 23, 123, 7]

  storeIds.forEach(function (storeId) {
    transactionIds.forEach(function (transactionId) {
      var shortCode = generateShortCode(storeId, transactionId);
      var decodeResult = decodeShortCode(shortCode);
      $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
      AddTestResult("Length <= 9", shortCode.length <= 9);
      AddTestResult("Is String", (typeof shortCode === 'string'));
      AddTestResult("Is Today", IsToday(decodeResult.shopDate));
      AddTestResult("StoreId", storeId === decodeResult.storeId);
      // console.log(decodeResult);
      AddTestResult("TransId", transactionId === decodeResult.transactionId);
      // console.log(decodeResult.transactionId);
    })
  })
}

function IsToday(inputDate) {
  // Get today's date
  var todaysDate = new Date();
  // call setHours to take the time out of the comparison
  return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
  var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}