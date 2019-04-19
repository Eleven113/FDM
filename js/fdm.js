let formulaire = document.getElementById("formulaire");
let button = document.getElementById("button");
let container = document.getElementById("container");

button.addEventListener("click", function () {
    // Lors du clic le formulaire disparait, et la feuille de stats apparait
    formulaire.style.display = "none";
    container.style.display = "flex";

    let logoTeamHome = document.getElementById("home_logo_team");
    let nameTeamHome = document.getElementById("home_name_team");
    let logoTeamAway = document.getElementById("away_logo_team");
    let nameTeamAway = document.getElementById("away_name_team");

    let lieu = document.querySelector('input[name=lieu]:checked').value;
    let teamAdv = document.getElementById("adv").value;

    if (lieu === "home") {
        // Attribution du nom de l'équipe dans la div
        nameTeamHome.textContent = "Stade Lavallois"; // A changer dans la fonction scoreButton si modifié
        nameTeamAway.textContent = teamAdv;
        // Création Image Logo Domicile
        let logoHome = document.createElement("img");
        logoHome.alt = "Logo Stade Lavallois"
        logoHome.src = "image/logo_sl.jpg"
        logoHome.className = "logo_team";
        logoTeamHome.append(logoHome);
        // Création Image Logo Extérieur
        let logoAway = document.createElement("img");
        logoAway.alt = "Logo Adversaire"
        logoAway.src = "image/logo_adv.png"
        logoAway.className = "logo_team";
        logoTeamAway.append(logoAway);
        document.getElementById("left_header").id = "scorer";
        document.getElementById("right_header").id = "chrono";
    } else {
        // Attribution du nom de l'équipe dans la div
        nameTeamHome.textContent = teamAdv;
        nameTeamAway.textContent = "Stade Lavallois";
        // Création Image Logo Domicile
        let logoHome = document.createElement("img");
        logoHome.alt = "Logo Adversaire"
        logoHome.src = "image/logo_adv.png"
        logoHome.className = "logo_team";
        logoTeamHome.append(logoHome);
        // Création Image Logo Extérieur
        let logoAway = document.createElement("img");
        logoAway.alt = "Logo Stade Lavallois"
        logoAway.src = "image/logo_sl.jpg"
        logoAway.className = "logo_team";
        logoTeamAway.append(logoAway);
        document.getElementById("left_header").id = "chrono";
        document.getElementById("right_header").id = "scorer";
    };
});


// Fonctionnement des boutons plus et moins

function configureMinButton(htmlElement) {
  let name = htmlElement.id;
  let type = name.split('_');
  htmlElement.addEventListener("click", function(){
    console.log(type);
    let data = document.getElementById(type.slice(0,-2).join('_') + "_data").textContent;
    let num = parseInt(data);
    console.log("click moins", type.slice(0,-2).join('_'));
    if (type[1] === 'ok' || type[1] === 'nok') {
      let num_total = parseInt(document.getElementById(type[0] + "_data").textContent);
      let num_ok = parseInt(document.getElementById(type[0] + "_ok_data").textContent);
      let num_nok = parseInt(document.getElementById(type[0] + "_nok_data").textContent);
      console.log(num_total);
      if (type[1] === 'ok') {
        if (num_ok > 0) {
            if (num_ok != 1) {
                document.getElementById(type[0] + "_data").textContent = (num_total - 1);
                document.getElementById(type[0] + "_ok_data").textContent = (num_ok - 1);
                console.log(((num_ok - 1) / (num_total - 1)) * 100);
                let numpercent_ok = parseFloat((((num_ok - 1) / (num_total - 1)) * 100).toFixed(2));
                let numpercent_nok = 100 - numpercent_ok;
                document.getElementById(type[0] + "_ok_datapercent").textContent = numpercent_ok + " %";
                document.getElementById(type[0] + "_nok_datapercent").textContent = numpercent_nok + " %";
            } else {
                document.getElementById(type[0] + "_data").textContent = (num_total - 1);
                document.getElementById(type[0] + "_ok_data").textContent = 0;
                document.getElementById(type[0] + "_ok_datapercent").textContent = 0 + " %";
                if (document.getElementById(type[0] + "_nok_data").textContent > 0) {
                    document.getElementById(type[0] + "_nok_datapercent").textContent = "100 %";
                }
            }
        }
      } else {
        if (num_nok > 0) {
            if (num_nok != 1) {
                document.getElementById(type[0] + "_data").textContent = (num_total - 1);
                document.getElementById(type[0] + "_nok_data").textContent = (num_nok - 1);
                console.log((num_nok - 1) / (num_total - 1));
                let numpercent_nok = parseFloat((((num_nok - 1) / (num_total - 1)) * 100).toFixed(2));
                let numpercent_ok = 100 - numpercent_nok;
                document.getElementById(type[0] + "_ok_datapercent").textContent = numpercent_ok + " %";
                document.getElementById(type[0] + "_nok_datapercent").textContent = numpercent_nok + " %";
            } else {
                document.getElementById(type[0] + "_data").textContent = (num_total - 1);
                document.getElementById(type[0] + "_nok_data").textContent = 0;
                document.getElementById(type[0] + "_nok_datapercent").textContent = 0 + " %";
                if (document.getElementById(type[0] + "_ok_data").textContent > 0) {
                    document.getElementById(type[0] + "_ok_datapercent").textContent = "100 %";
                }
            }
        }
      }
    }
    else if (num) {
      document.getElementById(type.slice(0,-2).join('_') + "_data").textContent = num - 1;
    }
  });
}

function configurePlusButton(htmlElement) {
  let name = htmlElement.id;
  let type = name.split("_");
  htmlElement.addEventListener("click", function(){
    console.log(type);
    let data = document.getElementById(type.slice(0,-2).join('_') + "_data").textContent;
    let num = parseInt(data);
    console.log("click plus", type.slice(0,-2).join('_'));
    if (type[1] === 'ok' || type[1] === 'nok') {
      let num_total = parseInt(document.getElementById(type[0] + "_data").textContent);
      let num_ok = parseInt(document.getElementById(type[0] + "_ok_data").textContent);
      let num_nok = parseInt(document.getElementById(type[0] + "_nok_data").textContent);
      console.log(num_total);
      document.getElementById(type[0] + "_data").textContent = (num_total + 1);
      if (type[1] === 'ok') {
        document.getElementById(type[0] + "_ok_data").textContent = (num_ok + 1);
        let numpercent_ok = parseFloat((((num_ok + 1) / (num_total + 1)) * 100).toFixed(2));
        let numpercent_nok = 100 - numpercent_ok;
        console.log(type[0] + "_ok_datapercent");
        document.getElementById(type[0] + "_ok_datapercent").textContent = numpercent_ok + " %";
        document.getElementById(type[0] + "_nok_datapercent").textContent = numpercent_nok + " %";
      }
      else {
        document.getElementById(type[0] + "_nok_data").textContent = (num_nok + 1);
        let numpercent_nok = parseFloat((((num_nok + 1) / (num_total + 1)) * 100).toFixed(2));
        let numpercent_ok = 100 - numpercent_nok;
        document.getElementById(type[0] + "_ok_datapercent").textContent = numpercent_ok + " %";
        document.getElementById(type[0] + "_nok_datapercent").textContent = numpercent_nok + " %";
      }
    }
    else {
      document.getElementById(type.slice(0,-2).join('_') + "_data").textContent = num + 1;
    }
  });
}

for (let htmlElement of document.getElementsByClassName('far fa-minus-square data_btn')) {
  configureMinButton(htmlElement);
}
for (let htmlElement of document.getElementsByClassName('far fa-plus-square data_btn')) {
  configurePlusButton(htmlElement);
}

// Fonctionnement Score
function scoreButton(htmlElement){
    let name = htmlElement.id;
    let type = name.split("_");
    htmlElement.addEventListener("click", function(){
        console.log(type);
        let score = parseInt(document.getElementById(type[0] + "_score").textContent);
        if ( document.getElementById(type[0] + "_name_team").textContent === "Stade Lavallois" && type[3] === "pls"){
            let goal_name = prompt("Qui a marqué ?");
            if (goal_name != null){
                // ajout du nom sur la page 
            }
            else {
                return;
            }
        }
        if (type[3] === "pls") {

            document.getElementById(type[0] + "_score").textContent = (score + 1);           
        }
        else {
            if (score > 0){
                document.getElementById(type[0] + "_score").textContent = (score - 1);
            }
        }
    });
}

for (let htmlElement of document.getElementsByClassName("score_btn")) {
  scoreButton(htmlElement);
}

