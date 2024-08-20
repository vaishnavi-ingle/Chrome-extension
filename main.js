let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn")

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  renderList()
}




  inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    renderList();
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderList();

    console.log(localStorage.getItem("myLeads"));
  });

function renderList() {
  let listItems = " ";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
       <a target='_blank' href='${myLeads[i]} ' >  
       ${myLeads[i]}
       </a> 
    </li> 
    `;
  }
  ulEl.innerHTML = listItems;
}
