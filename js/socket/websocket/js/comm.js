$(document).ready( function() {
    var testUri = "ws://127.0.0.1:2219/monitor"
    var webSocket = new WebSocket(testUri);
    console.dir(webSocket);
    webSocket.onopen = function() {
        console.log("onopen...");
    }
    webSocket.onclose = function() {
        console.log("onclose...");
    }
    webSocket.onmessage = function(e) {
        console.log("received msg: ", e.data);

        var monitData = JSON.parse(e.data);
        console.log("dest: ", monitData.dest);
        console.log("serialNo: ", monitData.serialNo);
        console.log("userImsi: ", monitData.userImsi);
        console.log("status: ", monitData.status);
        console.log("usedTime: ", monitData.usedTime);
        console.log("lastReceivedTime: ", monitData.lastReceivedTime);
        console.log("watchDogOn: ", monitData.watchDogOn);

        $("#serialNo").html(monitData.serialNo);
        $("#userImsi").html(monitData.userImsi);
        $("#status").html(monitData.status);
        $("#usedTime").html(monitData.usedTime);
        $("#lastReceivedTime").html(monitData.lastReceivedTime);
        $("#watchDogOn").html((monitData.watchDogOn === false)? "false": "true");
    }
    webSocket.onerror = function(e) {
        console.log("error: ", e);
    }

    $('#refresh').click(function(e) {
        e.preventDefault();

        var monitReq = new Object();
        monitReq.dest = "all";
        webSocket.send(JSON.stringify(monitReq));
    });

    console.log("HI");

});
