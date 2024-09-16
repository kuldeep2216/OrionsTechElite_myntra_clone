
function store() {
      let name = document.getElementById('name').value;
      let phone = document.getElementById('phone').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let lowerCaseLetters = /[a-z]/g;
      let upperCaseLetters = /[A-Z]/g;
      let numbers = /[0-9]/g;
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
      else if (email.length == 0) {
          alert("Please fill in email");
      } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
          alert("email indvaild");
      } else if (password.length == 0) {
          alert('Please fill in password');
      } else if (name.length == 0 && phone.length == 0 && email.length == 0 && password.length == 0) {
          alert('all fill is requied');
      } else if (password.length > 8) {
          alert('password is Max of 8 digit');
      } else if (!password.match(numbers)) {
          alert('please add digit');
      } else if (!password.match(upperCaseLetters)) {
          alert('please add 1 uppercase letter in password ');
      } else if (!password.match(lowerCaseLetters)) {
          alert('please add 1 lovercase letter in password');
      } else {

          let user_record = new Array();
          user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
          if (user_record.some((value) => {
              return value.email == email
          })) {
              alert('duplicate data');
          }
          else {
              user_record.push({
                  "name":name,
                   "number":phone,
                  "email": email,
                  "password": password
              })
              localStorage.setItem("users", JSON.stringify(user_record));
              alert("Your Account Is Create Successfully");
              alert("And Go To Website")
              alert(window.location.href="style.html");
                   

          }
      }
  }
  
