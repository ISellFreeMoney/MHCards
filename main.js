function drawcards() {
    var listcards = [
        "cartes1","cartes2","cartes3","cartes4","cartes5","cartes6","cartes7","cartes8","cartes9","cartes10",
        "cartes11","cartes12","cartes13","cartes14","cartes15","cartes16","cartes17","cartes18","cartes19","cartes20",
        "cartes21","cartes22","cartes23","cartes24","cartes25","cartes26","cartes27","cartes28","cartes29","cartes30",
        "cartes31","cartes32","cartes33","cartes34","cartes35","cartes36","cartes37","cartes38","cartes39","cartes40",
        "cartes41","cartes42","cartes43","cartes44","cartes45","cartes46","cartes47","cartes48","cartes49","cartes50",
    
    ];
    var listend = [
        "cartesfin1","cartesfin2","cartesfin3","cartesfin4","cartesfin5","cartesfin6","cartesfin7","cartesfin8","cartesfin9","cartesfin10",
        "cartesfin11","cartesfin12","cartesfin13","cartesfin14","cartesfin15","cartesfin16","cartesfin17","cartesfin18","cartesfin19","cartesfin20",
    
    ];
    var listrebondissement=[
        "cartesreb1","cartesreb2","cartesreb3","cartesreb4","cartesreb5","cartesreb6","cartesreb7","cartesreb8","cartesreb9","cartesreb10",
    ]
    let joueur = document.getElementById("playercount").value;
    let master = document.querySelector(".master").checked;
    let end = ""
    var list = [];
    const resetButton = document.createElement('button');
    resetButton.textContent = "Recharger la page"


    console.log(joueur, master)

    if(master){
        for (let index = 0; index < joueur; index++) {
            const random = Math.floor(Math.random() * listrebondissement.length);
            list.push(listrebondissement.splice(random, 1)[0])
        }
    } else {
        const randomEnd = Math.floor(Math.random() * listend.length);

        for (let index = 0; index < joueur * 2; index++) {
            const random = Math.floor(Math.random() * listcards.length);
            list.push(listcards.splice(random, 1)[0])
        }
        end = listend.splice(randomEnd, 1)[0];
    }

    showcard(list, end);
    document.getElementById("draw").disabled = true;
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        window.location.reload();
    })
}



function showcard(list, end) {
    const cards = document.createElement("div");
    cards.classList.add("list");
    const endcard = document.createTextNode(end)
    for (const card in list) {
        console.log(list[card]);
        const carditem = document.createElement("p")
        const cardaff = document.createTextNode(list[card])
        carditem.classList.add("item")
        carditem.appendChild(cardaff);
        cards.appendChild(carditem)
    }
    const endcaritem = document.createElement("p")
    endcaritem.classList.add("item")
    endcaritem.appendChild(endcard);
    cards.appendChild(endcaritem)
    document.body.appendChild(cards);
}