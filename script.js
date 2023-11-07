let details = document.getElementById('add-details')
      details.addEventListener('submit',myFunction);
let customers = document.getElementById('customers');      

      function myFunction(e){
        e.preventDefault();
        let myObj = {
          name:fname.value,
          email:email.value,
          number:number.value
        }
        let myObj_serial = JSON.stringify(myObj);
        localStorage.setItem(email.value,myObj_serial)

        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`Name : ${fname.value} Email : ${email.value} Number : ${number.value}`));

        let deleteBtn = document.createElement('button');
        deleteBtn.className='deletebtn';
        deleteBtn.id='delete';
        deleteBtn.textContent='Remove'

        li.appendChild(deleteBtn);
        customers.appendChild(li);

        
      }

      customers.addEventListener('click', deleteItem);

      function deleteItem(e){
        if(e.target.classList.contains('deletebtn')){
          let item = e.target.parentElement;
          customers.removeChild(item);

          localStorage.removeItem(email.value)

        }
      }