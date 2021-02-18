let nameListFull = [];
let totalTeams = 0;
let teamCounter = 1;
console.log(nameListFull + " " + totalTeams + " " + teamCounter);

function addNames() {
  let nameList = [];
  nameList = document.querySelector("#nameInput").value.split(", ");
  const nameInput = document.querySelector("#nameInput").value;
  const ul = document.querySelector("ul");

  if (nameInput !== "" && nameInput !== " ") {
    document.querySelector("#nameInput").value = "";
    for (let i = 0; i < nameList.length; i++) {
      let nameCard = document.createElement("li");
      nameCard.innerText = nameList[i];

      ul.appendChild(nameCard);
      nameListFull.push(nameList[i]);
    }
  } else {
    alert("You did not enter a name!");
  }
}

function generateTeams() {
  let numOfTeams = document.querySelector("#teamsInput").value;
  let teamsRow = document.querySelector("#teamgeneration .row");

  if (parseInt(numOfTeams) > 0) {
    for (let i = 0; i < numOfTeams; i++) {
      let newCol = document.createElement("div");
      let newH3 = document.createElement("h3");
      let newUl = document.createElement("ul");

      newCol.classList.add("col-4");
      newCol.classList.add("px-1");
      newCol.classList.add("py-1");
      newCol.classList.add("team-container");
      newUl.classList.add("mb-0");
      newH3.classList.add("py-2");
      newH3.classList.add("px-4");

      newH3.innerText = "Team " + teamCounter;

      newCol.appendChild(newH3);
      newCol.appendChild(newUl);
      teamsRow.appendChild(newCol);

      teamCounter++;
    }
    totalTeams += parseInt(numOfTeams);
    document.querySelector("#teamsInput").value = "";
  } else {
    alert("You did not enter a number!");
  }
}

function deleteItem() {
  let currentDiv = event.target;
  const ul = document.querySelector("ul");

  ul.appendChild(currentDiv.parentNode);
  nameListFull.push(currentDiv.parentNode.innerText);
  currentDiv.remove();
}

function assignToTeam() {
  if (nameListFull.length > 0) {
    let randomName = Math.floor(Math.random() * parseInt(nameListFull.length));
    let randomTeam = Math.floor(Math.random() * totalTeams);
    const nameLiList = document.querySelectorAll("#nameList li");
    const teamList = document.querySelectorAll(".team-container ul");

    let newButton = document.createElement("button");
    newButton.classList.add("btn");
    newButton.classList.add("btn-danger");
    newButton.innerText = "unassign";
    newButton.addEventListener("click", deleteItem);

    teamList[randomTeam].appendChild(nameLiList[randomName]);
    nameLiList[randomName].appendChild(newButton);
    nameListFull.pop(nameListFull[randomName]);
  } else {
    alert("List of names is empty!");
  }
}

function reset() {
  let allLi = document.querySelectorAll("li");
  let allTeams = document.querySelectorAll(".team-container");

  for (let i = 0; i < allLi.length; i++) {
    allLi[i].remove();
  }

  for (let i = 0; i < allTeams.length; i++) {
    allTeams[i].remove();
  }
  nameListFull = [];
  totalTeams = 0;
  teamCounter = 1;

  alert("Page has been reset");
}
