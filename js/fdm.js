let divElt = document.createElement("div");
let formulaire = document.getElementById("formulaire");
let button = document.getElementById("button");
let container = document.getElementById("container");

button.addEventListener("click", function(){
    // Lors du clic le formulaire disparait, et la feuille de stats apparait
    formulaire.style.display = "none";
    container.style.display = "flex";

    let logoTeamHome = document.getElementById("logo_team_home");
    let nameTeamHome = document.getElementById("name_team_home");
    let logoTeamAway = document.getElementById("logo_team_away");
    let nameTeamAway = document.getElementById("name_team_away");

    let lieu = document.querySelector('input[name=lieu]:checked').value;
    let teamAdv = document.getElementById("adv").value;

    if (lieu === "home") {
        // Attribution du nom de l'équipe dans la div
        nameTeamHome.textContent = "Stade Lavallois";
        nameTeamAway.textContent = teamAdv;

//        // Création Image Logo Domicile
        let logoHome = document.createElement("img");
        logoHome.alt="Logo Stade Lavallois"
        logoHome.src="../image/logo_sl.jpg"
        logoHome.className="logo_team";
        logoTeamHome.append(logoHome);
        // Création Image Logo Extérieur
        let logoAway = document.createElement("img");
        logoAway.alt="Logo Adversaire"
        logoAway.src="../image/logo_adv.png"
        logoAway.className="logo_team";
        logoTeamAway.append(logoAway);

    }
    else {
        // Attribution du nom de l'équipe dans la div
        nameTeamHome.textContent = teamAdv;
        nameTeamAway.textContent = "Stade Lavallois";

        // Création Image Logo Domicile
        let logoHome = document.createElement("img");
        logoHome.alt="Logo Adversaire"
        logoHome.src="../image/logo_adv.png"
        logoHome.className="logo_team";
        logoTeamHome.append(logoHome);
        // Création Image Logo Extérieur
        let logoAway = document.createElement("img");
        logoAway.alt="Logo Stade Lavallois"
        logoAway.src="../image/logo_sl.jpg"
        logoAway.className="logo_team";
        logoTeamAway.append(logoAway);
    };

});

// Fonctionnement des boutons plus et moins

function configureMinButton(htmlElement) {
  let name = htmlElement.id;
  let type = name.substring(0, name.length-8);
  console.log(type);
  htmlElement.addEventListener("click", function(){
    let data = document.getElementById("data_" + type).textContent;
    let num = parseInt(data);
    console.log("click moins", type);
    if (num) {
      document.getElementById("data_" + type).textContent = num - 1;
    }
  });
}

function configurePlusButton(htmlElement) {
  let name = htmlElement.id;
  let type = name.substring(0, name.length-8);
  console.log(type);
  htmlElement.addEventListener("click", function(){
    let data = document.getElementById("data_" + type).textContent;
    let num = parseInt(data);
    console.log("click plus", type);
    document.getElementById("data_" + type).textContent = num + 1;
  });
}

for (let htmlElement of document.getElementsByClassName('far fa-minus-square data_btn')) {
  configureMinButton(htmlElement);
}
for (let htmlElement of document.getElementsByClassName('far fa-plus-square data_btn')) {
  configurePlusButton(htmlElement);
}


// Fonctionnement Tirs
let shoot_on_target_btn_min = document.getElementById("shoot_on_target_btn_min");
let shoot_on_target_btn_pls = document.getElementById("shoot_on_target_btn_pls");
let miss_shoot_btn_min = document.getElementById("miss_shoot_btn_min");
let miss_shoot_btn_pls = document.getElementById("miss_shoot_btn_pls");
let num_shoot = parseInt(document.getElementById("data_shoot").textContent);
let num_shoot_on_target = parseInt(document.getElementById("data_shoot_on_target").textContent);
let num_miss_shoot = parseInt(document.getElementById("data_shoot_miss").textContent);
// Partie Tirs cadrés
shoot_on_target_btn_min.addEventListener("click",function(){
        let num_shoot = parseInt(document.getElementById("data_shoot").textContent);
        let num_shoot_on_target = parseInt(document.getElementById("data_shoot_on_target").textContent);
        let num_miss_shoot = parseInt(document.getElementById("data_shoot_miss").textContent);
        console.log("click plus S_o_T");
        console.log(num_shoot);
        if (num_shoot_on_target > 0){
            if (num_shoot_on_target != 1){
                document.getElementById("data_shoot").textContent = (num_shoot-1) ;
                document.getElementById("data_shoot_on_target").textContent = (num_shoot_on_target - 1);

                console.log(((num_shoot_on_target-1) / (num_shoot-1)) * 100);
                let numpercent_shoot = parseFloat((((num_shoot_on_target-1) / (num_shoot-1)) * 100).toFixed(2));
                let numpercent_shoot_miss = 100 - numpercent_shoot ;
                document.getElementById("datapercent_shoot_on_target").textContent = numpercent_shoot + " %";
                document.getElementById("datapercent_shoot_miss").textContent = numpercent_shoot_miss + " %";
            }
            else {
                document.getElementById("data_shoot").textContent = (num_shoot-1) ;
                document.getElementById("data_shoot_on_target").textContent = 0 ;
                document.getElementById("datapercent_shoot_on_target").textContent = 0 + " %";
                if (document.getElementById("data_shoot_miss").textContent > 0){
                        document.getElementById("datapercent_shoot_miss").textContent = "100 %";
                }
            }
        }
});

shoot_on_target_btn_pls.addEventListener("click",function(){
        let num_shoot = parseInt(document.getElementById("data_shoot").textContent);
        let num_shoot_on_target = parseInt(document.getElementById("data_shoot_on_target").textContent);
        let num_miss_shoot = parseInt(document.getElementById("data_shoot_miss").textContent);
        console.log("click plus S_o_T");
        console.log(num_shoot);
        document.getElementById("data_shoot").textContent = (num_shoot+1) ;
        document.getElementById("data_shoot_on_target").textContent = (num_shoot_on_target + 1);

        let numpercent_shoot = parseFloat((((num_shoot_on_target+1) / (num_shoot+1)) * 100).toFixed(2));
        let numpercent_shoot_miss = 100 - numpercent_shoot ;
        document.getElementById("datapercent_shoot_on_target").textContent = numpercent_shoot + " %";
        document.getElementById("datapercent_shoot_miss").textContent = numpercent_shoot_miss + " %";
});
// Partie Tirs non cadrés
shoot_miss_btn_min.addEventListener("click",function(){
        let num_shoot = parseInt(document.getElementById("data_shoot").textContent);
        let num_shoot_on_target = parseInt(document.getElementById("data_shoot_on_target").textContent);
        let num_miss_shoot = parseInt(document.getElementById("data_shoot_miss").textContent);
        console.log("click moins Miss_Shot");
        console.log(num_shoot);

        if(num_miss_shoot >0){
            if (num_miss_shoot != 1){
                document.getElementById("data_shoot").textContent = (num_shoot-1) ;
                document.getElementById("data_shoot_miss").textContent = (num_miss_shoot - 1);

                console.log((num_miss_shoot-1) / (num_shoot-1));
                let numpercent_miss_shoot = parseFloat((((num_miss_shoot-1) / (num_shoot-1)) * 100).toFixed(2));
                let numpercent_shoot = 100 - numpercent_miss_shoot;
                document.getElementById("datapercent_shoot_on_target").textContent = numpercent_shoot + " %";
                document.getElementById("datapercent_shoot_miss").textContent = numpercent_miss_shoot + " %";
            }
            else {
                document.getElementById("data_shoot").textContent = (num_shoot-1) ;
                document.getElementById("data_shoot_miss").textContent = 0 ;
                document.getElementById("datapercent_shoot_miss").textContent = 0 + " %";
                if (document.getElementById("data_shoot_on_target").textContent > 0){
                        document.getElementById("datapercent_shoot_on_target").textContent = "100 %";
                }
            }
        }
});

shoot_miss_btn_pls.addEventListener("click",function(){
        let num_shoot = parseInt(document.getElementById("data_shoot").textContent);
        let num_shoot_on_target = parseInt(document.getElementById("data_shoot_on_target").textContent);
        let num_miss_shoot = parseInt(document.getElementById("data_shoot_miss").textContent);
        console.log("click plus Miss_Shot");
        console.log(num_shoot);
        document.getElementById("data_shoot").textContent = (num_shoot+1) ;
        document.getElementById("data_shoot_miss").textContent = (num_miss_shoot + 1);

        let numpercent_miss_shoot = parseFloat((((num_miss_shoot+1) / (num_shoot+1)) * 100).toFixed(2));
        let numpercent_shoot = 100 - numpercent_miss_shoot;
        document.getElementById("datapercent_shoot_on_target").textContent = numpercent_shoot + " %";
        document.getElementById("datapercent_shoot_miss").textContent = numpercent_miss_shoot + " %";
});
