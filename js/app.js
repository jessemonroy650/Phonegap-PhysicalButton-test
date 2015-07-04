//
//    Date: 2015-07-03
//
function onButtonClick() {
    //alert("button clicked.");
    //var perAfterResumeValue = persistentStorage.getItem("theValue");
    //document.getElementById('permInfo').innerHTML = perAfterResumeValue;
}

var onBackButton = function() {
    document.getElementById('content').innerHTML = 'onBackButton';
    //var theValue = document.getElementById('theValue').value;
    //document.getElementById('content').innerHTML = theValue;

    // Put Data to localstorage
    //persistentStorage.setItem("theValue", theValue);
    //sessionStorage.setItem("theValue", theValue);
};

var onMenuButton = function() {
    document.getElementById('info').innerHTML = 'onMenuButton';
    // Get Data to localstorage
    //var perAfterResumeValue = persistentStorage.getItem("theValue");
    //var sesAfterResumeValue = sessionStorage.getItem("theValue");
    //document.getElementById('info').innerHTML = perAfterResumeValue;
};

var onSearchButton = function() {
    document.getElementById('permInfo').innerHTML = 'onSearchButton';
    // Get Data to localstorage
    //var perAfterResumeValue = persistentStorage.getItem("theValue");
    //var sesAfterResumeValue = sessionStorage.getItem("theValue");
    //document.getElementById('info').innerHTML = perAfterResumeValue;
};
