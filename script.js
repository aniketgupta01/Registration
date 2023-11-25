let nameInput = document.getElementById('fname');
let emailInput = document.getElementById('email');
let numberInput = document.getElementById('number');
let details = document.getElementById('add-details')
details.addEventListener('submit',myFunction);
let customers = document.getElementById('customers');      

      function myFunction(e){
        e.preventDefault();
        let myObj = {
          name:nameInput.value,
          email:emailInput.value,
          number:numberInput.value
        }
        axios.post('https://crudcrud.com/api/bda3a984e7124188b6a66581fb47e0ff/appointmentData',myObj)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        });
        
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value},${emailInput.value},${numberInput.value}`));
      

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
        nameInput.value=""
        emailInput.value=""
        numberInput.value=""
      

        
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