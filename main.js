let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
});

for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
}
