
async function getHouses() {
    let url = 'talot.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

    async function renderHouses() {
    let houses = await getHouses();
    console.log(houses);

    let housediv = document.getElementById("talot");

    while(housediv.hasChildNodes()) {
        housediv.removeChild(housediv.firstChild);
      }


    var koko = 1000;
    var hinta = 100000000;
    var checkBox1 = document.getElementById("alle1");
    var checkBox2 = document.getElementById("alle2");
   
    if (checkBox1.checked == true) {
        koko = 200;
    }
    else {
        koko = 1000;
    }

    if (checkBox2.checked == true) {
        hinta = 1000000;
    }
    else {
        hinta = 100000000;
    }

    houses.forEach(house => {


        if (!(house.price>hinta) && !(house.size>koko)) {
        housecontainer = document.createElement('div');
        housecontainer.className = 'houseContainer';

        let image = document.createElement('img');
        image.src = house.image;
        image.className = 'houseImage';

        let header = document.createElement('p');
        header.className = 'header';
        header.innerHTML = house.address;

        let size = document.createElement('p');
        size.className = 'size';
        size.innerHTML = house.size + " m2";

        let text = document.createElement('p');
        text.className = 'text';
        text.innerHTML = house.text;

        let price = document.createElement('p');
        let numberstr = new Intl.NumberFormat('fi-FI').format(house.price);
        price.className = 'price';
        price.innerHTML = numberstr + " €";

        housecontainer.appendChild(image);
        housecontainer.appendChild(header);
        housecontainer.appendChild(size);
        housecontainer.appendChild(text);
        housecontainer.appendChild(price);

        housediv.appendChild(housecontainer); 
        }
    });    
}

renderHouses();