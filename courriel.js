
            let Olivier_Melancon = ["Début de la conversation"];
            let Sabrina_Araujo = ["Début de la conversation"];
            let listDestinataires = [Olivier_Melancon, Sabrina_Araujo];
            let nomDestinataires = ["Olivier_Melancon", "Sabrina_Araujo"]
            let adressesContact = ["MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDXPxCId4OAGDFmTqDZIJXAZnfpxovsGt0Foqki3xymwxVvFqZWbG/8tJHB1sXUKZUHykOtgA6CNqehGIPjRbf1EVdFhKREB5T2zWKpXFi7aJ3aF1c946gxiQYJofWOkWx/XpSEp6uwBNsznpFsreU0p6fsgTxLHeAaZ7VQpySIpQIDAQAB", "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFv6uBYIT28WxeT6g5xhfiPYtcVB5Q+vBrVtsT3ZvUXWP+2QFOd6Cz5KOkuxO9vBm80yazu+VqHdSjkaITFOekbdaud4ejmkvcmAGcE/dZ8CceKXCkcqa+kr+Ov7m9DYfmUdXpoPO6o2Tr+Py0iLiXnxM/YJeUVcCk6jOobbvNAVAgMBAAE="]
            if (window.localStorage.length > 0) {
            nomDestinataires = window.localStorage.getItem("contact");
        nomDestinataires = JSON.parse(nomDestinataires);
          listDestinataires=[];
        for (let i = 0; i<nomDestinataires.length;i++){
            let x = nomDestinataires[i]
            x = window.localStorage.getItem(x);
            x = JSON.parse(x);
            listDestinataires.push(x);}
                /*  ------ne fonctionne pas pour le moment------
        adressesContact = window.localStorage.getItem("adresse");
        adressesContact = JSON.parse(adressesContact);*/

            }

function destinataire () {
    let x = "<select class='button-green' id='nom'>  ";
    for (let i = 0; i<nomDestinataires.length;i++){

        x += "<option value = "+ i + ">";
        x+= nomDestinataires[i]
        x += "</option>"
    }
    x += "</select>"
    return document.getElementById("choix").innerHTML=x;
}
function envoyerMessage() {
let n = document.getElementById('nom').value
    let messageAEnvoyer = document.getElementById('message').value
    listDestinataires[n][0] += "<br><br>"
listDestinataires[n][0] += messageAEnvoyer;
}
function confirmer(){
    let userName =document.getElementById("newAdresse").value;
    let publicKey = document.getElementById("newKey").value;
    let userString = userName;
    userName = ["Début de la conversation"];
  nomDestinataires.push(userString);
    listDestinataires.push(userName);
    adressesContact.push(publicKey);
}
function afficher() {
   let contactInfo = document.getElementById("#contact").value;
   document.getElementById("conversation").innerHTML=listDestinataires[contactInfo];
}
function effacer() {
    let erase = document.getElementById("#erasure").value;
    listDestinataires.splice(erase,1);
    nomDestinataires.splice(erase,1);
    adressesContact.splice(erase, 1);
}
//Fonction provenant de la correction d'un TP du cours INF4533
function indexer(arr) {
    var refs = {};
    for(var i=0; i<arr.length; i++)
        if (arr[i] && arr[i].length > 0)
            refs[arr[i]] = [];
    var marker = (function() {
        var counter = 0;
        return function(texte) {
            var id = "inDeX_" + (counter++);
            refs[texte].push(id);
            return '<span id="' + id + '" style="background-color:yellow;">' + texte + '</span>';
        };
    })();

    var visiterLesElements = function(elem) {
        if (elem.tagName === "SCRIPT") return;
        if (elem.tagName === "STYLE") return;
        if (elem.nodeType === 3) { //TEXT_NODE
            htmlText = elem.nodeValue;
            for(var key in refs)
                htmlText = htmlText.replace(new RegExp(key, "g"), marker);
            var span = document.createElement("span");
            span.innerHTML = htmlText;
            elem.parentNode.replaceChild(span, elem);
        } else {
            for(var i=0; i< elem.childNodes.length; i++)
                visiterLesElements(elem.childNodes[i]);
        }
    };

    /* calculer l'objet "refs" */
    visiterLesElements(document.body);

    /* mettre la table d'indexes dans un élément <div> */
    var listeDeLiensHTML = function(idArray) {
        var res = "";
        for(var i=0; i< idArray.length; i++)
            res += '&nbsp;<a href="#' + idArray[i] + '">' + (i+1) + '</a>';
        return res;
    };

    var divHTML = "";
    for(var key in refs){
        if (refs[key].length > 0)
            divHTML += "<div>"+key+":"+listeDeLiensHTML(refs[key])+"</div>";
    }
    var div = document.createElement("div");
    div.innerHTML=divHTML;
    return div;
}
function enregistrer() {
    window.localStorage.clear();
    window.localStorage.setItem("contact",JSON.stringify(nomDestinataires));
    for (let num = 0; num<nomDestinataires.length;num++){
        window.localStorage.setItem(nomDestinataires[num],JSON.stringify(listDestinataires[num]))
    }
    window.localStorage.setItem("adresse",JSON.stringify(adressesContact));
    }
    function tableauDeContact () {
            let adr = "<table border='1.5' bgcolor='#d3d3d3' id='contactTable'><tr><td>#</td><td>Destinataire</td><td>Adresse</td></tr>"
            for (let b = 0; b<nomDestinataires.length; b++){
                adr += "<tr><td>"+b+"</td><td>"+nomDestinataires[b]+"</td><td>"+adressesContact[b]+"</td></tr>"
            }
            adr += "</table>"
            document.getElementById("adresses").innerHTML=adr;}
