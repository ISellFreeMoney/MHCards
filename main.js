function drawcards() {
    var listcards = [
        //Objet:
        "Un mirroir",
        "Une arme de corps a corps",
        "Une arme a distance",
        "Une arme de siege",
        "Une fenêtre",
        "De la nourriture",
        "Du feu",
        "Une couronne",
        "Une porte - 'Je suis la porte', Heisenberg", //Je suis la porte
        "Une transcendence",
        "Un bateau",
        "Un grimoire",
        "Un trésor",
        "Un anneau",

        //Personnages
        "Un étranger","Un étranger lointain - peut-être changé","Un mendiant",
        "Un enfant","Un wyverien","Des parents",
        "Un marchand","Un monstre","Le P'tit chef",
        "Un felyne/melynx","Un dragon ancien","Un frère",
        "Une biologiste","Un prince","Une quêtatrice",
        "Un chef de village","Un braconier","Une vieille personne",
        "Un cuisinier","Un paysan","Une alchimiste",
        "Un oiseau","Un forgeron","Une chasseuse vétéran",
        
        //Evenements
        "Une fête","Une prophétie","Une poursuite",
        "Un coup de foudre","Un voyage","Un décès",
        "Une confrontation","Une séparation","Une chasse",
        "Une rencontre","Le temps s'écoule","Une révélation",
        "Une fabrication","Un piège","Une fuite",
        "quelque chose se casse","Quelqu'un est blessé",
        
        //Aspect
        "Ancien","Force de la nature","Semble maudit",
        "Emprunt de fléau élémentaire","Splendide","Minuscule",
        "Perdu","Heureux","Secret",
        "Perdu de vue","Volé","Emprunt d'affliction",
        "Laid","Déguisé","Emplis de sagesse",
        "Lointain","Ceci sait voler","Chanceux",
        "Endormi","Caché","Effrayé",
        
        //Lieu
        "Un pont","Un auberge","En mer",
        "Un pays","Une rivière","Une ruine",
        "Une route","Une île","Une chaumière",
        "une nuit","Un palais","Une tour",
        "Une montagne","Une forêt","Une prison",
        "Une ville","Une grotte","Un village",
        "Un bastion"
        
        
    
    ];
    var listend = [
        //Dénouements
        "Et depuis ce jour, les wyveriens ne se sont plus mélés des affaires des hommes",
        "Et en ce lieu, ils se réunirent tous les jours",
        "Ils la surveillerent jusqu'à ce qu'elle soit suffisament agée",
        "Alors l'énigme fut finalement résolue",
        "Alors il lui pardonna et ils se marièrent",
        "Sa peine disparut pour laisser place à la joie",
        "Et à dater de ce jour, il écouta les conseils de sa mère",
        "Alors il prit conscience de la loyauté de son frère",
        "Avec l'aurore naissante se révélait à eux un monde serein",
        "Alors le village fut reconstruit et la vie fut à nouveau prospère",
        "Elle le porta toujours pour ne pas l'oublier",
        "Alors elle devoila sa véritable identité et ils se marièrent",
        "Mais peu importe le temps qu'ils y passèrent ils ne purent jamais le retrouver",
        "Alors les malandrins furent jetés aux oubliettes",
        "Alors ils échappèrent à cette monstruosité et rentrèrent chez eux",
        "Alors le P'tit chef reconu la valeur de ce jeune homme et conscentis à l'adouber chevalier de la guilde",
        "Alors le chef du village s'attendrit et donna son consentement à leur mariage",
        "Alors le P'tit chef leur donna la récompense promise",
        "Et il fut réuni de nouveau avec sa famille",
        "Et ils devinrent aveugles jusqu'à la fin de leurs jours en raison de leur malveillance et de leur mensonge","cartesfin18",
        "Il reconnut ses erreurs de jugement et se repentit",
        "Ce qui démontre bien que le chiffre 5 est maudit en quête",
        "Le véritable amour brisa l'enchantement",
        "Alors il lui avoua être le chasseur légendaire et ils vécurent heureux",
        "Et le chef se réjouit d'un présent si inhabituel",
        "Et par la suite ils accédèrent au trône",
        "Et le pays se réjouit de la fin du règne du tyran",
        "Alors chevalier lui fit grâce",
        "Alors l'affliction fut soignée et ils retrouvèrent la raison",
        "Ce qui prouve que chacun doit être attentif à ses compagnons",
        "La mort tragique du soupirant leur permit enfin de se marier",
        "Alors ils jurèrent de ne plus jamais se battre",
        "Ils le mangèrent au festin et ce fut savoureux",
        "Et elle fut de nouveau réunie avec sa famille",
        "Alors tout fut reconstruit à l'image de la gloire passée",
        "Cette histoire est à l'origine du nom du village",
        "L'affliction fut s'estompa comme il avait été annoncé",
        "Et à ce jour personne ne sait ou elle est enfoui",
        "Leurs enfants en héritèrent à leurs mort",
        "40= Et d'après les rumeurs, ils dansent toujours",
        "Son dévouement brisa la malédiction",
        "Ce qui prouve qu'un coeur pur triomphe toujours",
        "Il remercièrent le chasseur qui les avait tous sauvés",
        "Il récupéra son arme et poursuivit son chemin",
        "Alors l'héritier légitime fut de nouveau désigné chef",
        "Le chef du village accorda ce qu'il avait promis et tous furent heureux",
        "Et aussi longtemps qu'elle vécut on ne put lui ôter",
        "Mais il avait disparu aussi mystérieusement qu'il était apparu",
        "Mais elle revint les voirs de temps en temps",
        "Alors ils le rendirent à son propriétaire originel",
        "Alors ils vécurent heureux et eurent beaucoup d'enfants",
        "Et les parents retrouvèrent leur enfant perdu depuis si longtemps",
        "Alors les flammes s'étendirent et détruisirent les lieux",
        "Elle ne le laissa jamais plus s'éloigner",
        "Et la prophétie de la légende s'accomplit",
        "Alors ils reconstruirent les lieux comme ils étaient par le passé",
        "Ce qui montre combien la peur est mauvaise conseillère",
        "A coeur vaillant rien d'impossible",
        "Comme quoi tout flatteur vit aux dépens de celui qui l'écoute",
        "Mais la source est aujourd'hui tarie",
        "En cet endroit, on édifia un monument",
        "Ce qui montre que bien mal acquis ne profite jamais",
        "Depuis ce jour il n'y eut plus de guerre dans le royaume",
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