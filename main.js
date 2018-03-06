var kamut = [];

function lisaaKaveri(){
    var nimi = document.getElementById('nimi_kentta').value;
    kamut.push(nimi);
    console.log(kamut);

    listaaKaverit();
}



function poistaKaveri(){
    document.getElementById("kamut");
    kamut.pop()
    console.log(kamut);
    listaaKaverit();
}



function listaaKaverit(){

    document.getElementById('frendit').innerHTML = '';

    for (var i=0; i < kamut.length; i++){
        document.getElementById('frendit').innerHTML += '<li>' + kamut[i] + '</li>';
    }
}

function jarjestaKaveri(){
    kamut.sort();
    console.log(frendit);
    listaaKaverit();
}
