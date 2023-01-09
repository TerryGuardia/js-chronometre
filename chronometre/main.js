//je recuperer les span dans un tableau et les séparent ensuite

let tim = document.querySelectorAll('span');
let mils = tim[3];
let scd = tim[2];
let min = tim[1];
let hrs = tim[0];
//variable pour stocké l'id de l'interval
let starter;
//compteur pour le temps
let a = 0;
let b = 0;
let c = 0;
let d = 0;


//rajoute permet de metre à jour l'heure par 100ms
function update_chrono() {
    a += 100;

    if (a >= 1000) {
        a = 0;
        b++;
    }
    if (b >= 60) {
        b = 0;
        c++;
    }
    if (c >= 60) {
        c = 0;
        d++;
    }
    if (d >= 24) {
        d = 0;
    }
}
//affiche les valeurs des compteurs dans l'html
function fill() {
    update_chrono();
    mils = tim[3].innerText = a + " ms";
    scd = tim[2].innerText = b + " s";
    min = tim[1].innerText = c + " min";
    hrs = tim[0].innerText = d + " h";
}
//permet de lancer la fonction fill chaque 100ms
function start() {
    if (!starter) {
        starter = setInterval(fill, 100);
    }
}
//arrete le chrono et efface l'id de l'interval
function stop() {
    clearInterval(starter);
    starter = null;
}
//remetr a zero le chrono en effacant les compteur et l'id de l'interval
function reset() {
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    mils = tim[3].innerText = a + " ms";
    scd = tim[2].innerText = b + " s";
    min = tim[1].innerText = c + " min";
    hrs = tim[0].innerText = d + " h";
    clearInterval(starter);
    starter = null;
}