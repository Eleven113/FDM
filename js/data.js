let dataItems = [
    {
        name:  "Tirs" ,
        name_css: "shoot",
        model: 0

    },
    {
        name: "Tirs cadrés" ,
        name_css: "shoot_ok",
        model: 2,
    },
    {
        name: "Tirs non cadrés" ,
        name_css: "shoot_nok",
        model: 2,
    },
    {
        name:  "Passes" ,
        name_css: "pass",
        model: 0

    },
    {
        name: "Passes réussies" ,
        name_css: "pass_ok",
        model: 2,
    },
    {
        name: "Passes ratées" ,
        name_css: "pass_nok",
        model: 2,
    },
    {
        name:  "Duels" ,
        name_css: "duel",
        model: 0
    },
    {
        name: "Ballons gagnés" ,
        name_css: "duel_ok",
        model: 2,
    },
    {
        name: "Ballons perdus" ,
        name_css: "duel_nok",
        model: 2,
    },
    {
        name: "Touches" ,
        name_css: "throw",
        model: 1
    },
    {
        name: "Fautes obtenues",
        name_css: "foulsObtained",
        model: 1
    },
    {
        name: "Fautes commises",
        name_css: "foulsCommited",
        model: 1
    },
    {
        name: "Coups de pied arrêtés offensifs",
        name_css: "freekicksOffensive",
        model: 1
    },
    {
        name: "Coups de pied arrêtés défensifs",
        name_css: "freekicksDefensive",
        model: 1
    }
]

let divData = document.getElementById("data");
divData.innerHTML = "";

function createDataItems(dataItem){
    console.log("et encore en ligne");
    console.log(dataItem.model);
    let divData = document.getElementById("data");
    let divItems = document.createElement("div");
    divItems.className = "flex_glob";
    switch (dataItem.model){
        case 0:
            divItems.innerHTML = '<div class="button"></div><div id="' + dataItem.name_css + '" class="data_case"><div id="' + dataItem.name_css + '_title" class="title_flex"><span class="data_txt">' + dataItem.name + '</span></div><div class="data_flex"><span id="'+ dataItem.name_css +'_data">0</span></div></div><div class="button"></div>';
            divData.append(divItems);
            break;

        case 1:
            divItems.innerHTML = '<div class="button"><i class="far fa-minus-square data_btn" id="' + dataItem.name_css + '_btn_min"></i></div><div id="' + dataItem.name_css + '" class="data_case"><div id="' + dataItem.name_css + '+_title" class="title_flex"><span class="data_txt">' + dataItem.name + '</span></div><div class="data_flex"><span id="' + dataItem.name_css + '_data">0</span></div></div><div class="button"><i class="far fa-plus-square data_btn" id="' + dataItem.name_css + '_btn_pls"></i></div>'
            divData.append(divItems);
            break;

        case 2:
            divItems.innerHTML = '<div class="button"><i class="far fa-minus-square data_btn" id="' + dataItem.name_css + '_btn_min"></i></div><div id="' + dataItem.name_css + '" class="data_case"><div id="' + dataItem.name_css + '_title" class="title_flex"><span class="data_txt">' + dataItem.name + '</span></div><div class="data_flex"><span id="' + dataItem.name_css + '_data">0</span>&nbsp;-&nbsp;<span id="' + dataItem.name_css + '_datapercent">0</span>%</div></div><div class="button"><i class="far fa-plus-square data_btn" id="' + dataItem.name_css + '_btn_pls"></i></div>'
            divData.append(divItems);
            break;
    }
}


for (let i = 0; i < dataItems.length ; i++){
    createDataItems(dataItems[i]);
}

//for (let dataItem of dataItems ) {
//    createDataItems(dataItem);
//}
