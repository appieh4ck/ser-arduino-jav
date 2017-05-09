/**
 * Created by Appie on 10-1-2017.
 */
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


$(function() {

    var $document   = $(document),
        selector    = '[data-rangeslider]',
        $input      = $(selector);

    $document.on('change', selector, function(e) {
        var value = e.target.value,
            output = e.target.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;


        var myData = 'column_name=' + 'servoPosition' + '&' + 'value='+ value;

        jQuery.ajax({
            type: "POST", // HTTP method POST or GET
            url: "response.php", //Where to make Ajax calls
            dataType:"text", // Data type, HTML, json etc.
            data:myData, //post variables
            success:function(){
            },
            error:function (xhr, ajaxOptions, thrownError){
                alert(thrownError); //throw any errors
            }
        });



    });

    $input.rangeslider({

        // Deactivate the feature detection
        polyfill: false,

        // Callback function
        onInit: function() {},

        // Callback function
        onSlide: function(position, value) {},

        // Callback function
        onSlideEnd: function(position) {}
    });

    // Example functionality to demonstrate programmatic value changes
    $document.on('click', '#js-example-change-value button', function(e) {
        var $inputRange = $('input[type="range"]', e.target.parentNode),
            value = $('input[type="number"]', e.target.parentNode)[0].value;

        $inputRange.val(value).change();
    });


});

$(function() {

    var $document   = $(document),
        selector    = '[data-rangeslider2]',
        $input      = $(selector);

    $document.on('change', selector, function(e) {
        var value = e.target.value,
            output = e.target.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;


        var myData = 'column_name=' + 'servoPosition2' + '&' + 'value='+ value;

        jQuery.ajax({
            type: "POST", // HTTP method POST or GET
            url: "response.php", //Where to make Ajax calls
            dataType:"text", // Data type, HTML, json etc.
            data:myData, //post variables
            success:function(){
            },
            error:function (xhr, ajaxOptions, thrownError){
                alert(thrownError); //throw any errors
            }
        });



    });

    $input.rangeslider({

        // Deactivate the feature detection
        polyfill: false,

        // Callback function
        onInit: function() {},

        // Callback function
        onSlide: function(position, value) {},

        // Callback function
        onSlideEnd: function(position) {}
    });

    // Example functionality to demonstrate programmatic value changes
    $document.on('click', '#js-example-change-value button', function(e) {
        var $inputRange = $('input[type="range"]', e.target.parentNode),
            value = $('input[type="number"]', e.target.parentNode)[0].value;

        $inputRange.val(value).change();
    });


});