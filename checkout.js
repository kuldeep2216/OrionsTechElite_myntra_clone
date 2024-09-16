
function checkout() {
    let name = document.getElementById('name').value;
let phone = document.getElementById('phone').value;
let address = document.getElementById('address').value;
if (name.length == 0) {
    alert('name is required');
} else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    alert('write full name');
} else if (phone.length == 0) {
    alert(' phone number is required');
} else if (phone.length !== 10) {
    alert("number should be 10 digit");
} else if (!phone.match(/^[0-9]{10}$/)) {
    alert("phone number is required");
}
else if (address.length == 0) {
    alert("Please address is requid");
}  else if (name.length == 0 && phone.length == 0 && address.length == 0) {
    alert('Please fill requied');
} else{
   alert("Your Order Is Succesfully Ordered");
   alert("You Can Order Other Product");
     alert(window.location.href="style.html");
}
}
