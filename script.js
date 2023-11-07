let nameInput = document.getElementById('fname');
let emailInput = document.getElementById('email');
let numberInput = document.getElementById('number');
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
        li.appendChild(document.createTextNode(`${fname.value},${email.value},${number.value}`));

        //Edit button
        let editBtn = document.createElement('button');
        editBtn.className='editbtn';
        editBtn.id='edit';
        editBtn.textContent='Edit';
        
        //Delete Button
        let deleteBtn = document.createElement('button');
        deleteBtn.className='deletebtn';
        deleteBtn.id='delete';
        deleteBtn.textContent='Remove'


        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        customers.appendChild(li);
        fname.value=""
        email.value=""
        number.value=""

        
      }

      customers.addEventListener('click', deleteItem);
      customers.addEventListener('click',editItem);

      function deleteItem(e){
        if(e.target.classList.contains('deletebtn')){
          let item = e.target.parentElement;
          customers.removeChild(item);

          let arr = e.target.parentElement.innerText.split(',');
          localStorage.removeItem(arr[1]);


        }
      }
      function editItem(e){
        if(e.target.classList.contains('editbtn')){
          let item = e.target.parentElement;
          customers.removeChild(item);

          let arr = e.target.parentElement.firstChild.textContent.split(',');
          localStorage.removeItem(arr[1]);

          nameInput.value=arr[0];
          emailInput.value=arr[1];
          numberInput.value=arr[2];
        }
      }