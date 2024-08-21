let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn")

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

deleteBtn.addEventListener("dblclick", function(){
  myLeads = []
  localStorage.clear()
  render(myLeads)
})


  inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    render(myLeads);
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render();

    console.log(localStorage.getItem("myLeads"));
  });

function render(leads) {
  let listItems = " ";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
       <a target='_blank' href='${leads[i]} ' >  
       ${leads[i]}
       </a> 
    </li> 
    `;
  }
  ulEl.innerHTML = listItems;
}
