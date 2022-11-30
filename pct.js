const form = document.querySelector("form");
const nom = document.getElementById("nom");
const marque = document.getElementById("marque");
const prix = document.getElementById("prix");
const date = document.getElementById("date");
const type = document.getElementById("type");
const Promo = document.getElementsByName("M");
const mis1 = document.querySelector(".mis1");
// const M = document.getElementsByName("M");
const btn = document.getElementById("btn");

function valide() {
  const nomValue = nom.value.trim();
  const marqueValue = marque.value.trim();
  const prixValue = prix.value.trim();
  const dateValue = date.value.trim();
  const typeValue = type.value.trim();

  if (nomValue === "") {
    setErrorFor(nom, "nom cannot be blank");
  } else if ((nom.value.lenght <= 3) | (nom.value.lenght > 30)) {
    setErrorFor(nom, "nom is invalide");
  } else {
    setSuccessFor(nom, "good");
  }
  if (marqueValue === "") {
    console.log(marqueValue);
    setErrorFor(marque, "marque cannot be blank");
  } else if ((marque.value.lenght <= 3) | (marque.value.lenght > 30)) {
    setErrorFor(marque, "marque is invalide");
  } else {
    setSuccessFor(marque, "good");
  }
  if (prixValue === "") {
    setErrorFor(prix, "prix cannot be blank");
  } else {
    setSuccessFor(prix);
  }
  if (dateValue === "") {
    setErrorFor(date, "date cannot be blank");
  } else {
    setSuccessFor(date);
  }
  if (typeValue === "") {
    setErrorFor(type, "type cannot be blank");
  } else {
    setSuccessFor(type);
  }
  // var gen = !Promo[0].checked && !Promo[1].checked;

  // if (Promo[0].checked) {
  //   mis1.innerHTML = "";
  //   mis1.style.color = "green";
  //   promo = document.getElementById("o").value;
  // } else if (Promo[1].checked) {
  //   mis1.innerHTML = "";
  //   mis1.style.color = "green";
  //   promo = document.getElementById("n").value;
  // } else {
  //   mis1.innerHTML = "Choose one";
  //   mis1.style.color = "red";
  // }
  for (let i = 0; i < Promo.length; i++) {
    console.log(Promo[i].value);
    if (Promo[i].checked) {
      console.log("rak warekty 3liha");
      setSuccessFor(Promo[i]);
      break;
    }else{
      setErrorFor(Promo[i], "chose one");
    }
  }
}
function boom() {
  valide();
  if (formvalidate() == true) {
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
    console.log("dkhel inq3lk");
  } else {
    console.log(";dkhltch");
  }
}
function setErrorFor(theinput,message) {
  theinput.closest(".form").querySelector("small").textContent = message;
  console.log(theinput.closest(".form"));
  theinput.closest(".form").className = "form error";
}
function setSuccessFor(theinput) {
  theinput.closest(".form").querySelector("small").textContent = "";
  console.log(theinput.closest(".form"));
  theinput.closest(".form").className = "form success";
}
function formvalidate() {
  let check = true;
  const formcontrol = document.querySelectorAll(".form");
  for (let i = 0; i < formcontrol.length; i++) {
    console.log(formcontrol[i]);
    if (formcontrol[i].classList.contains("error")) {
      check = false;
    }
  }
  return check;
}
//add;

function readFormData() {
  var formData = {};
  formData["nom"] = document.getElementById("nom").value;
  formData["marque"] = document.getElementById("marque").value;
  formData["prix"] = document.getElementById("prix").value;
  formData["date"] = document.getElementById("date").value;
  formData["type"] = document.getElementById("type").value;
  for (let i = 0; i < Promo.length; i++) {
    if (Promo[i].checked) {
      formData["promo"] = Promo[i].value;
    }
  }
  return formData;
}
function insertNewRecord(data) {
  var table = document.getElementById("table").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.lenght);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.nom;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.prix;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.marque;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.date;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.type;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.promo;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="OnDelete(this)">Delete</a>`;
}
function resetForm() {
  document.getElementById("nom").value = "";
  document.getElementById("marque").value = "";
  document.getElementById("prix").value = "";
  document.getElementById("date").value = "";
  document.getElementById("type").value = "";
  Promo[0].checked = Promo[0].unchecked;
  Promo[1].checked = Promo[1].unchecked;
  const div = document.querySelectorAll(".form");
  for (let i = 0; i < div.length; i++) {
    console.log("ghambghat tdkhol");
    if (div[i].classList.contains("success")) {
      div[i].classList.remove("success");
      console.log("raha kaina");
    }
  }
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("nom").value = selectedRow.cells[0].innerHTML;
  document.getElementById("marque").value = selectedRow.cells[1].innerHTML;
  document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
  document.getElementById("date").value = selectedRow.cells[3].innerHTML;
  document.getElementById("type").value = selectedRow.cells[4].innerHTML;
  if (Promo[0].checked) {
    document.getElementById("o").value = selectedRow.cells[5].innerHTML;
  } else {
    document.getElementById("n").value = selectedRow.cells[5].innerHTML;
  }
  if ((selectedRow.cells[5].innerHTML = "Oui")) {
    document.getElementById("o").checked = true;
  } else {
    document.getElementById("n").checked = true;
  }
  document.getElementById("btn").value = "modifie";
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.nom;
  selectedRow.cells[1].innerHTML = formData.marque;
  selectedRow.cells[2].innerHTML = formData.prix;
  selectedRow.cells[3].innerHTML = formData.date;
  selectedRow.cells[4].innerHTML = formData.type;
  selectedRow.cells[5].innerHTML = formData.promo;
  if ((selectedRow.cells[5].innerHTML = document.getElementById("o").value)) {
    Promo[0].unchecked = Promo[0].checked;
  } else {
    Promo[1].unchecked = Promo[1].checked;
  }
}
//delete;
function OnDelete(td) {
  if (confirm(`Are you sure to delete this record?`)) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    resetForm();
  }
}
