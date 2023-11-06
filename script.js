let details = document.getElementById('add-details')
      details.addEventListener('submit',myFunction);

      function myFunction(e){
        e.preventDefault();
        let myObj = {
          name:fname.value,
          email:email.value
        }
        let myObj_serial = JSON.stringify(myObj);
        localStorage.setItem(fname.value,email.value)
        localStorage.setItem('myObj',myObj_serial)

        
      }