let details = document.getElementById('add-details')
      details.addEventListener('submit',myFunction);

      function myFunction(e){
        e.preventDefault();
        localStorage.setItem(fname.value,email.value);
        
      }