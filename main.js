let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderList();
  inputEl.value = "";
});

function renderList() {
  let listItems = " ";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
       <a target='_blank' href='${myLeads[i]} ' >" + myLeads[i] + "</a> 
    </li> 
    `;
  }
  ulEl.innerHTML = listItems;
}
