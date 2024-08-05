let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
});

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}
