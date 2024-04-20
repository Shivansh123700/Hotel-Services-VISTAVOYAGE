// script.js

function showCustomerDetails() {
    var select = document.getElementById("customerSelect");
    var customerID = select.options[select.selectedIndex].value;
    var customerName = select.options[select.selectedIndex].text;

    if (customerID !== "") {
        document.getElementById("customerDetails").style.display = "block";
        document.getElementById("customerID").textContent = customerID;
    } else {
        document.getElementById("customerDetails").style.display = "none";
    }
}

// Fetch customer details from the server and populate the dropdown list
window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/customers", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var customers = JSON.parse(xhr.responseText);
            var select = document.getElementById("customerSelect");
            customers.forEach(function(customer) {
                var option = document.createElement("option");
                option.value = customer.customer_id;
                option.text = customer.customer_name;
                select.appendChild(option);
            });
        }
    };
    xhr.send();
};
