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

    // Récupération données périodes
    timer.nb_periode = document.getElementById('nb_periode').options[document.getElementById('nb_periode').selectedIndex].value;
    timer.tps_periode = document.getElementById('tps_periode').value;

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
        // Affectation cadres Buteurs et Temps
        document.getElementById("left_header").id = "chrono";
        document.getElementById("right_header").id = "scorer";
    };
    let chrono = document.getElementById("chrono");

    let div_periode = document.createElement("div");
    div_periode.id = "periode";
    div_periode.innerHTML = '<span id="num-periode">1ère période</span>';
    chrono.append(div_periode);

    let div_timer = document.createElement("div");
    div_timer.id = "timer";
    div_timer.innerHTML = '<span id="timer-mins">00</span>:<span id="timer-secs">00</span>';
    chrono.append(div_timer);

    let div_timer_btn = document.createElement("div");
    div_timer_btn.id = "timer_btn";
    div_timer_btn.innerHTML = '<i class="fas fa-play" id="play_btn"></i><i class="fas fa-pause" id="pause_btn"></i><i class="fas fa-step-forward" id="step_fwd_btn"></i>';
    chrono.append(div_timer_btn);

    let play_btn = document.getElementById("play_btn");
    let pause_btn = document.getElementById("pause_btn");
    let step_fwd_btn = document.getElementById("step_fwd_btn");

    play_btn.addEventListener("click",function(){
        timer.start();
    });

    pause_btn.addEventListener("click",function(){
        timer.pause();
    });

    step_fwd_btn.addEventListener("click",function(){
        timer.next();
    });
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
            let t = timer.time;
            let t_cumul, t_add;
            let goal_name = prompt("Qui a marqué ?");
            if (goal_name != null){
              // calcul du temps
              let goal_time;
              if (t > timer.tps_periode * 60) {
                t_cumul = timer.periode * timer.tps_periode;
                t_add = 1 + Math.floor((t - timer.tps_periode * 60)/60);
                goal_time = t_cumul.toString() + ' +' + t_add.toString();
              }
              else {
                t_cumul = 1 + Math.floor(t/60) + (timer.periode - 1) * timer.tps_periode;
                goal_time = t_cumul.toString();
              }
              // ajout du nom sur la page
              document.getElementById('scorer').innerHTML += "<p>" + goal_name + " " + goal_time + "</p>";
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

// Timer

function Timer() {
  this.htmlElement = document.getElementById('chrono');
  this.time = 0;
  this.periode = 1;
  this.nb_periode = 1;
  this.tps_periode = 0;
  this.timer = null;
  this.start = function () {
    if (this.timer !== null) return;
    else {
      this.timer = setInterval(() => {
        this.time = this.time + 1;
        let mins = Math.floor(this.time/60);
        if (mins.toString().length === 1) { mins = "0" + mins.toString() }
        let secs = this.time%60;
        if (secs.toString().length === 1) { secs = "0" + secs.toString() }
        document.getElementById("timer-mins").textContent = mins;
        document.getElementById("timer-secs").textContent = secs;
      }, 1000);
    }
  };
  this.pause = function() {
    clearInterval(this.timer);
    this.timer = null;
  }
  this.next = function() {
    if (this.time === 0) return;
    window.confirm("Etes-vous sûr de vouloir passer à la période suivante ?");
    this.periode= this.periode + 1;
    this.pause();
    this.time = 0;
    document.getElementById('num-periode').textContent = this.periode + 'ème période';
    document.getElementById("timer-mins").textContent = "00";
    document.getElementById("timer-secs").textContent = "00";
  }
}

let timer = new Timer();


//Cacher Div Duel
let divDuelGlob = document.getElementById("duel").parentNode;
divDuelGlob.style.display = "none";

