const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#fname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#number");
// const msg = document.querySelector(".msg");
const userList = document.querySelector("#customers");
myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  let myoj = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
  };
  
  axios
    .post(
      "https://crudcrud.com/api/1e984d0ffa4944ed8c3374036bb241a2/appointmentdata",
      myoj
    )
    .then((res) => showonscreen(res.data))
    .catch((err) => console.log(err));
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
}
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/1e984d0ffa4944ed8c3374036bb241a2/appointmentdata"
    )
    .then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        showonscreen(res.data[i]);
      }
    })
    .catch((err) => console.log(err));
});
function showonscreen(obj) {
  let name = obj.name;
  let email = obj.email;
  let phone = obj.phone;
  let userid = obj._id;
  const childHTML = `<li id=${userid}>${name} ${email} ${phone} 
      <button class="deletebtn" onclick=deletefn('${userid}')>Delete</button>
      <button class="editbtn" onclick=editfn('${userid}')>Edit</button></li>`;
  userList.innerHTML = userList.innerHTML + childHTML;
}
function deletefn(userid) {
  console.log(userid);
  axios
    .delete(
      `https://crudcrud.com/api/1e984d0ffa4944ed8c3374036bb241a2/appointmentdata/${userid}`
    )
    .then((response) => {
      removeuserfromscreen(userid);
    })
    .catch((err) => console.log(err));
}
function removeuserfromscreen(userid) {
  const childnodedelt = document.getElementById(userid);
  if (childnodedelt) {
    userList.removeChild(childnodedelt);
  }
}
function editfn(userid) {
  // axios
  //   .get(
  //     `https://crudcrud.com/api/1e984d0ffa4944ed8c3374036bb241a2/appointmentdata/${userid}`
  //   )
  //   .then((res) => {
  //     nameInput.value = res.data.name;
  //     emailInput.value = res.data.email;
  //     phoneInput.value = res.data.phone;
  //   })
  //   .catch((err) => console.log(err));
  // axios
  //   .delete(
  //     `https://crudcrud.com/api/1e984d0ffa4944ed8c3374036bb241a2/appointmentdata/${userid}`
  //   )
  //   .then((response) => {
  //     removeuserfromscreen(userid);
  //   })
  //   .catch((err) => console.log(err));
  // removeuserfromscreen(userid);
}
