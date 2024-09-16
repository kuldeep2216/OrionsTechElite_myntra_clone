
        function check() {
        
    
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
          
    
            let user_record = new Array();
            user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
            if (user_record.some((v) => {
                return v.email == email && v.password == password
            })) {
               
                let current_user = user_record.filter((v) => {
                    return v.email == email && v.password == password
                })[0]
                localStorage.setItem("name", current_user.name);
                 localStorage.setItem("number", current_user.number);
                localStorage.setItem("email", current_user.email);
                alert("You Are Login Successfully And Go To Website" );
                 alert(window.location.href="style.html");
                
            } else {
                alert('Pleace Fill Correct Information');
            }
    
        }
   