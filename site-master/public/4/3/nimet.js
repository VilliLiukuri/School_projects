async function getNames() {
    let url = 'nimet.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
let highlight1 = 0;
let highlight2 = -1;


async function renderNames(e) {




    e = e || window.event;
    
    if(e.keyCode == '38') {
        // up arrow
        if(highlight1 < 0){
            highlight1 += 1;
        }
        else {
            let tausta2 = document.getElementById("nimi" + highlight1).style.removeProperty("background-color");
            highlight1 -= 1;
        }
        let tausta = document.getElementById("nimi" + highlight2).style.backgroundColor = "lightblue";
        highlight2 -= 1;

    }

    

    else if (e.keyCode == '40') {
        // down arrow
        if(highlight2 < 0){
            highlight2 += 1;
        }
        else {
            let tausta = document.getElementById("nimi" + highlight2).style.removeProperty("background-color");
            highlight2 += 1;
        }
        let tausta2 = document.getElementById("nimi" + highlight1).style.backgroundColor = "lightblue";
        highlight1 += 1;

    }

    else if (e.keyCode == '13') {
        document.getElementById("haku").value = document.getElementById("nimi" + highlight1).innerHTML;
        
        let poista = document.getElementById("nimet");
        while(poista.hasChildNodes()) {
            poista.removeChild(poista.firstChild);
        }

    }
    
    else if (e.keyCode == '27') {
        document.getElementById("haku").value = "";
        
        let poista = document.getElementById("nimet");
        while(poista.hasChildNodes()) {
            poista.removeChild(poista.firstChild);
        }

    }

    else {
        let names = await getNames();
        console.log(names);

        let search = document.getElementById("haku").value;
        console.log(search);
        if (search == "") {
            search = "*";
        }

        let namediv = document.getElementById("nimet");

        while(namediv.hasChildNodes()) {
            namediv.removeChild(namediv.firstChild);
        }

        for (var i in names) {
            if(names[i].toLowerCase().startsWith(search.toLowerCase())){
            
            let nimi = document.createElement('p');
           
            nimi.id = "nimi" + [i];
            nimi.className = 'name';
            nimi.innerHTML = names[i];

            namediv.appendChild(nimi); 

            }


        }; 
    }
}   
