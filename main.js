let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderList();
});

function renderList() {
  let listItems = " ";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li> ";
  }
  ulEl.innerHTML = listItems;
}
