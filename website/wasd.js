/**
 * Created by Appie on 17-1-2017.
 */
/* WASD MOVEMENT */
x = 0;
y = 0;
speed = 5;
angle = 0;
mod = 0;
var hasGP = false;
var repGP;

var input = {
    left: false,
    right: false,
    up: false,
    down: false
};

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
car = new Image();
car.src = "http://i.imgur.com/uwApbV7.png";

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);

var moveInterval = setInterval(function () {
    draw();
}, 30);

function draw() {
    context = canvas.getContext("2d");
    context.clearRect(0, 0, 800, 800);

    context.fillStyle = "rgb(200, 100, 220)";
    context.fillRect(50, 50, 100, 100);

    x += (speed * mod) * Math.cos(Math.PI / 180 * angle);
    y += (speed * mod) * Math.sin(Math.PI / 180 * angle);

    context.save();
    context.translate(x, y);
    context.rotate(Math.PI / 180 * angle);
    context.drawImage(car, -(car.width / 2), -(car.height / 2));
    context.restore();
}

function keyup_handler(event) {
    if (event.keyCode == 87 || event.keyCode == 83) {
        mod = 0;
    }
}

function keypress_handler(event) {
    console.log(event.keyCode);
    if (event.keyCode == 87) {
        voor();
        mod = 1;

    }
    if (event.keyCode == 83) {
        achter();
        mod = -1;
    }
    if (event.keyCode == 65) {
        links();
        angle -= 5;
    }
    if (event.keyCode == 68) {
        rechts();
        angle += 5;
    }
}

function voor() {
    console.log("full speed servoPosition");
    var myData = 'column_name=' + 'servoPosition' +'&'+ 'value='+ 180;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });
    var myData2 = 'column_name=' + 'servoPosition2' +'&'+ 'value='+ 0;
    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData2, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });
}

function achter() {

    var myData = 'column_name=' + 'servoPosition' +'&'+ 'value='+ 0;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });


    var myData2 = 'column_name=' + 'servoPosition2' +'&'+ 'value='+ 180;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData2, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });

}

function links() {

    var myData = 'column_name=' + 'servoPosition' +'&'+ 'value='+ 95;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });


    var myData2 = 'column_name=' + 'servoPosition2' +'&'+ 'value='+ 180;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData2, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });

}

function rechts() {

    var myData = 'column_name=' + 'servoPosition' +'&'+ 'value='+ 180;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });


    var myData2 = 'column_name=' + 'servoPosition2' +'&'+ 'value='+ 95;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData2, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });

}

function stop() {

    var myData = 'column_name=' + 'servoPosition' +'&'+ 'value='+ 95;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });


    var myData2 = 'column_name=' + 'servoPosition2' +'&'+ 'value='+ 95;

    jQuery.ajax({
        type: "POST", // HTTP method POST or GET
        url: "response.php", //Where to make Ajax calls
        dataType:"text", // Data type, HTML, json etc.
        data:myData2, //post variables
        success:function(){
            //alert("I am an alert box!");
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError); //throw any errors
        }
    });

}

function canGame() {
    return "getGamepads" in navigator;
}

if(canGame()) {

    var prompt = "To begin using your gamepad, connect it and press any button!";
    $("#gamepadPrompt").text(prompt);

    $(window).on("gamepadconnected", function() {
        hasGP = true;
        $("#gamepadPrompt").html("Gamepad connected!");
        repGP = window.setInterval(checkGamepad,100);
    });

    $(window).on("gamepaddisconnected", function() {
        $("#gamepadPrompt").text(prompt);
        window.clearInterval(repGP);
    });

    //setup an interval for Chrome
    var checkGP = window.setInterval(function() {
        if(navigator.getGamepads()[0]) {
            if(!hasGP) $(window).trigger("gamepadconnected");
            window.clearInterval(checkGP);
        }
    }, 500);

    function checkGamepad() {
        var gp = navigator.getGamepads()[0];
        var axeLF = gp.axes[0];

        if (gp.buttons[7].value > 0) {
            mod = 1;
            voor();
            console.log("vooruit");

        } else if (gp.buttons[6].value>0){
            mod = -1;
            achter();
            console.log("achteruit");
        } else if(axeLF < -0.5) {
            input.left = true;
            input.right = false;
            angle -= 5;
            links();
            console.log("links");
        } else if(axeLF > 0.5) {
            input.left = false;
            input.right = true;
            angle += 5;
            rechts();
            console.log("stop");
        } else {
            input.left = false;
            input.right = false;
            mod =0;

            stop();
        }

    }
}
