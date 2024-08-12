let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
});

let listItems = " ";
for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li> ";
}
ulEl.innerHTML = listItems;
