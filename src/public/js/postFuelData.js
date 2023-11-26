
function updateButtons() {
    var gallonsValue = document.getElementById("gallons").value;
    var deliveryAddressValue = document.getElementById("delivery_address").value;
    var deliveryDateValue = document.getElementById("delivery_date").value;

    var getQuoteBtn = document.getElementById("get_quote");
    var submitQuoteBtn = document.getElementById("submit_quote");

    // Enable buttons only if there are values in all required fields
    getQuoteBtn.disabled = !gallonsValue || !deliveryAddressValue || !deliveryDateValue;
    submitQuoteBtn.disabled = !gallonsValue || !deliveryAddressValue || !deliveryDateValue;
}

let originUserInput = {};
let userInput = {};


function updateUserInput() {
    $("#gallons").on("change",function(){
        userInput.gallons = $(this).val();    
    });
    $("#delivery_address").on("change",function(){
        userInput.delivery_address = $(this).val();
    })
    $("#delivery_date").on("change",function(){
        userInput.delivery_date = $(this).val();
    })
    $("#suggested_price").on("change",function(){
        userInput.suggested_price = $(this).val();
    })
    $("#total_due").on("change",function(){
        userInput.total_due = $(this).val();
    })
}
function callUpdateUserInput() {
    $.ajax({
        url: "/addNewInput",
        type: "post",
        data: userInput,
        success: function(data){
            // Update HTML with the received data
            $("#suggested_price").val(data.suggested_price);
            $("#total_due").val(data.total_due);

            // Update userInput with the received data
            userInput = Object.assign(userInput, data);

            //update origin UserInfo
            originUserInput = Object.assign(originUserInput, userInput);
            console.log("userInput: ",originUserInput)
            
        },
        error: function(error){
            // display error
            console.log(error);
            
        }

    }) 
}

function submitFormData() {
    $.ajax({
        url: "/submitFormData", // Change the URL to the correct endpoint on your server
        type: "post",
        data: {
            gallons: userInput.gallons,
            delivery_address: userInput.delivery_address,
            delivery_date: userInput.delivery_date,
            suggested_price: $("#suggested_price").val(),
            total_due: $("#total_due").val(),
        },
        success: function (response) {
            // Handle the success response from the server if needed
            console.log("Form submitted successfully:", response);
        },
        error: function (error) {
            // Display error
            console.log("Error submitting form:", error);
        },
    });
}
function showAlert(message) {
    Swal.fire({
        text: message,
        icon: 'error',
    });
}


$(function() {
    originInput = {
        gallons: $("#gallons").val(),
        delivery_address: $("#delivery_address").val(),
        delivery_date: $("#delivery_date").val(),  
        suggested_price: $("#suggested_price").val(),
        total_due: $("#total_due").val()
    }
    console.log(originInput);
    updateUserInput()
    $("#get_quote").on("click",function(){
        if($.isEmptyObject(userInput)){
            showAlert("Please, enter all the fields")
            return false;
        }

        if(!$.isEmptyObject(userInput)) {
            callUpdateUserInput();
        }
        
    });

    $("#submit_quote").on("click", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        if ($.isEmptyObject(userInput)) {
            showAlert("Please, enter all the fields")
            return false;
        }

        if (!$.isEmptyObject(userInput)) {
            submitFormData();
        }
    });
    

    // Attach the updateButtons function to input change events
    document.getElementById('gallons').addEventListener('input', updateButtons);
    document.getElementById('delivery_address').addEventListener('input', updateButtons);
    document.getElementById('delivery_date').addEventListener('input', updateButtons);

    $("#clear_quote").on("click",function(){
        $("#gallons").val(function() {
            return originInput.gallons;
        });
        $("#delivery_address").val(function(){
            return originInput.delivery_address;
        });
        $("#delivery_date").val(function() {
            return originInput.delivery_date;
        });
        $("#suggested_price").val(function(){
            return originInput.suggested_price;
        });
        $("#total_due").val(function(){
            return originInput.total_due;
        });
    });
})