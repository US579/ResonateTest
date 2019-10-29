// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
  // Logic goes here
  var code = 'x'.replace(/[xy]/g, function (c) {
    var render = "" + storeId.toString().length + transactionId.toString().length + storeId + transactionId;
    var docketID= 0
    if (render.length = 9) {
      docketID= render
    }
    return (c == 'x' ? docketID: 0000000);
  });
  return code;
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
  // Logic goes here
  var sLen = shortCode.substring(0, 1);
  var tLen = shortCode.substring(1, 2);
  var ll = sLen + tLen
  return {
    storeId: parseInt(shortCode.substring(ll.length, parseInt(sLen) + ll.length)), // store id goes here,
    shopDate: new Date(), // the date the customer shopped,
    transactionId: parseInt(shortCode.substring(parseInt(sLen) + ll.length, ll.length + parseInt(sLen) + parseInt(tLen))) // transaction id goes here
  };
}

function clean(){
  document.getElementById("test-results").innerHTML="";
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {
  var storeIds = [175, 42, 0, 9];
  var transactionIds = [9675, 23, 123, 7];
  storeIds.forEach(function(storeId) {
    transactionIds.forEach(function(transactionId) {
      var shortCode = generateShortCode(storeId, transactionId);
      var decodeResult = decodeShortCode(shortCode);
      $("#test-results").append(
        "<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>"
      );
      AddTestResult("Length <= 9", shortCode.length <= 9);
      AddTestResult("Is String", typeof shortCode === "string");
      AddTestResult("Is Today", IsToday(decodeResult.shopDate));
      AddTestResult("StoreId", storeId === decodeResult.storeId);
      AddTestResult("TransId", transactionId === decodeResult.transactionId);
    });
  });
}

function IsToday(inputDate) {
  // Get today's date
  var todaysDate = new Date();
  // call setHours to take the time out of the comparison
  return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0);
}

function AddTestResult(testName, testResult) {
  var div = $("#test-results").append(
    "<div class='" +
      (testResult ? "pass" : "fail") +
      "'><span class='tname'>- " +
      testName +
      "</span><span class='tresult'>" +
      testResult +
      "</span></div>"
  );
}
