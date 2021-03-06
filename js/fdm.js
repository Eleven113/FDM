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
        //        if (screen.width < 1025 && screen.width < screen.height){
        //            // positionnement div Scorer
        //            document.getElementById("scorer").style.position = "absolute";
        //            document.getElementById("scorer").style.top = "2%";
        //            document.getElementById("scorer").style.left = "10px";
        //            // positionnement div team
        //            document.getElementById("team").style.position = "absolute";
        //            document.getElementById("team").style.left = "25%";
        //            // positionnement div chrono
        //            document.getElementById("chrono").style.position = "absolute";
        //            document.getElementById("chrono").style.left = "75%";
        //            document.getElementById("chrono").style.top = "2%";
        //        }
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
        if (screen.width < 415) {
            document.getElementById("chrono").style.right = "19%";
        }

    };
    let chrono = document.getElementById("chrono");

    let divPeriode = document.createElement("div");
    divPeriode.id = "periode";
    divPeriode.innerHTML = '<span id="num-periode">Période 1 / ' + timer.nb_periode + '</span>';
    chrono.append(divPeriode);

    let divTimer = document.createElement("div");
    divTimer.id = "timer";
    divTimer.innerHTML = '<span id="timer-mins">00</span>:<span id="timer-secs">00</span>';
    chrono.append(divTimer);

    let divTimerBtn = document.createElement("div");
    divTimerBtn.id = "timer_btn";
    divTimerBtn.innerHTML = '<i class="fas fa-play" id="play_btn"></i><i class="fas fa-pause" id="pause_btn"></i><i class="fas fa-step-forward" id="step_fwd_btn"></i>';
    chrono.append(divTimerBtn);

    let divSwitchBtn = document.createElement("div");
    divSwitchBtn.id = "onoffswitch";
    divSwitchBtn.innerHTML = '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked><label class="onoffswitch-label" for="myonoffswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label>';
    chrono.append(divSwitchBtn);

    let play_btn = document.getElementById("play_btn");
    let pause_btn = document.getElementById("pause_btn");
    let step_fwd_btn = document.getElementById("step_fwd_btn");

    play_btn.addEventListener("click", function () {
        timer.start();
        document.getElementById("play_btn").style.color = "#F37022";
        document.getElementById("pause_btn").style.color = "black";
    });

    pause_btn.addEventListener("click", function () {
        timer.pause();
        document.getElementById("play_btn").style.color = "black";
        document.getElementById("pause_btn").style.color = "#F37022";
    });

    step_fwd_btn.addEventListener("click", function () {
        timer.next();
    });

    //Switch mode période et mode cumul
    divSwitchBtn.addEventListener("click", function(event){
      updateDataDisplay();
    });
});

let data = {
    shoot: {
        current: {
            total: 0,
            ok: 0,
            nok: 0
        },
        cumul: {
            total: 0,
            ok: 0,
            nok: 0
        }
    },
    pass: {
        current: {
            total: 0,
            ok: 0,
            nok: 0
        },
        cumul: {
            total: 0,
            ok: 0,
            nok: 0
        }
    },
    duel: {
        current: {
            total: 0,
            ok: 0,
            nok: 0
        },
        cumul: {
            total: 0,
            ok: 0,
            nok: 0
        }
    },
    throw: {
        current: {
            total: 0
        },
        cumul: {
            total: 0
        }
    },
    foulsObtained: {
        current: {
            total: 0
        },
        cumul: {
            total: 0
        }
    },
    foulsCommited: {
        current: {
            total: 0
        },
        cumul: {
            total: 0
        }
    },
    freekicksOffensive: {
        current: {
            total: 0
        },
        cumul: {
            total: 0
        }
    },
    freekicksDefensive: {
        current: {
            total: 0
        },
        cumul: {
            total: 0
        }
    }
};

// Fonctionnement des boutons plus et moins

function configureButton(htmlElement) {
    let name = htmlElement.id;
    let type = name.split('_');
    htmlElement.addEventListener("click", function () {
        if (type.length === 3) {
            updateData(type[0], type[2]);
        } else {
            updateData(type[0], type[3], type[1]);
        }
    });
}

function updateData(category, operation, type) {
    if (operation === "min") { // bouton moins
        if (data[category].current.total === 0) return;
        else if (type && data[category].current[type] === 0) return;
        else if (type) {
            data[category].current[type] -= 1;
            data[category].cumul[type] -= 1;
            data[category].current.total -= 1;
            data[category].cumul.total -= 1;
        } else {
            data[category].current.total -= 1;
            data[category].cumul.total -= 1;
        }
    } else { // bouton plus
        data[category].current.total += 1;
        data[category].cumul.total += 1;
        if (type) {
            data[category].current[type] += 1;
            data[category].cumul[type] += 1;
        }
    }
    updateDataDisplay();
}

function updateDataDisplay() {
  let mode = (document.getElementById("myonoffswitch").checked ? "cumul" : "current");
  for (let category of Object.keys(data)) {
    if (Object.keys(data[category][mode]).length > 1) {
      document.getElementById(category + '_ok_data').textContent = data[category][mode].ok;
      document.getElementById(category + '_nok_data').textContent = data[category][mode].nok;
      if (data[category][mode].total != 0) {
        let ok = Math.round(data[category][mode].ok / data[category][mode].total * 100);
        document.getElementById(category + '_ok_datapercent').textContent = ok
        document.getElementById(category + '_nok_datapercent').textContent = 100-ok;
      }
      else {
        document.getElementById(category + '_ok_datapercent').textContent = "0";
        document.getElementById(category + '_nok_datapercent').textContent = "0";
      }
    }
    if (document.getElementById(category + '_data')) {
      document.getElementById(category + '_data').textContent = data[category][mode].total;
    }
  }
}


for (let htmlElement of document.getElementsByClassName('far fa-minus-square data_btn')) {
    configureButton(htmlElement);
}
for (let htmlElement of document.getElementsByClassName('far fa-plus-square data_btn')) {
    configureButton(htmlElement);
}

// Fonctionnement Score
function scoreButton(htmlElement) {
    let name = htmlElement.id;
    let type = name.split("_");
    htmlElement.addEventListener("click", function () {
        console.log(type);
        let score = parseInt(document.getElementById(type[0] + "_score").textContent);
        if (document.getElementById(type[0] + "_name_team").textContent === "Stade Lavallois" && type[3] === "pls") {
            modal.style.display = "block";
        }
        if (type[3] === "pls") {
            document.getElementById(type[0] + "_score").textContent = (score + 1);
        } else {
            if (score > 0) {
                document.getElementById(type[0] + "_score").textContent = (score - 1);
            }
        }
    });
}

for (let htmlElement of document.getElementsByClassName("score_btn")) {
    scoreButton(htmlElement);
}

// Modal pour saisir le nom du buteur
let modal = document.getElementById('myModal');
let modal_span = document.getElementsByClassName("close")[0];
modal.style.display = "none";
modal_span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById('goal_input').addEventListener("click", function () {
    modal.style.display = "none";
    let t = timer.time;
    let t_cumul, t_add;
    let goal_name = document.getElementById('goal_name').value;
    if (goal_name != null) {
        // calcul du temps
        let goal_time;
        if (t > timer.tps_periode * 60) {
            t_cumul = timer.periode * timer.tps_periode;
            t_add = 1 + Math.floor((t - timer.tps_periode * 60) / 60);
            goal_time = t_cumul.toString() + ' +' + t_add.toString();
        } else {
            t_cumul = 1 + Math.floor(t / 60) + (timer.periode - 1) * timer.tps_periode;
            goal_time = t_cumul.toString();
        }
        // ajout du nom sur la page
        let scorer = document.getElementById("scorer");
        let spanScorerList = document.createElement("div");
        spanScorerList.className = "scorer_list";
        spanScorerList.innerHTML = '<div class="score_ico_name"><i class="fas fa-futbol"></i><span class="scorer_name_time">' + ' ' + goal_name + ' ' + goal_time + "'" + '</span></div>'
        let spanScorerClose = document.createElement("span");
        spanScorerClose.className = "scorer_close";
        spanScorerClose.innerHTML = '<i class="fas fa-times"></i>';
        spanScorerList.append(spanScorerClose);
        scorer.append(spanScorerList);
        //    let header = document.getElementById("head_team");
        //    header.prepend(scorer);

        spanScorerClose.addEventListener("click", function () {
            let confirmSuppr = confirm("Voulez vous retirer le but ?");
            if (confirmSuppr) {
                spanScorerClose.parentElement.remove();
                if (document.getElementById("home_name_team").textContent === "Stade Lavallois") {
                    let nb_but = document.getElementById("home_score").textContent;
                    document.getElementById("home_score").textContent = nb_but - 1;
                } else {
                    let nb_but = document.getElementById("away_score").textContent;
                    document.getElementById("away_score").textContent = nb_but - 1;
                }
            }
        });
    } else {
        return;
    }
});

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
                let mins = Math.floor(this.time / 60);
                if (mins.toString().length === 1) {
                    mins = "0" + mins.toString()
                }
                let secs = this.time % 60;
                if (secs.toString().length === 1) {
                    secs = "0" + secs.toString()
                }
                document.getElementById("timer-mins").textContent = mins;
                document.getElementById("timer-secs").textContent = secs;
            }, 1000);
        }
    };
    this.pause = function () {
        clearInterval(this.timer);
        this.timer = null;
    }
    this.next = function () {
        if (this.time === 0) return;
        window.confirm("Etes-vous sûr de vouloir passer à la période suivante ?");
        this.periode = this.periode + 1;
        this.pause();
        this.time = 0;
        document.getElementById('num-periode').textContent = "Période " + this.periode + " / " + this.nb_periode;
        document.getElementById("timer-mins").textContent = "00";
        document.getElementById("timer-secs").textContent = "00";
        clearCurrentData();
        updateDataDisplay();
    }
}

function clearCurrentData() {
    for (let category of Object.keys(data)) {
        for (let item of Object.keys(data[category].current))
            data[category].current[item] = 0;
    }
}

let timer = new Timer();


//Cacher Div Duel
let divDuelGlob = document.getElementById("duel").parentNode;
divDuelGlob.style.display = "none";

//Effacer buteur
let scorerClose = document.getElementsByClassName("scorer_close");


//Fermeture disclaimer
let disclaimer = document.getElementById("disclaimer");
let disclaimerClose = document.getElementById("disclaimer_close");

// disclaimerClose.addEventListener("click",function(){
//     disclaimer.style.display = "none";
// });
