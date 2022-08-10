let allnumbers = [];

for (let i = 1; i <= 100; i++) {
    allnumbers.push(i);
}
console.log(allnumbers);                                

let player1 = [];

let player2 = [];

function start() {

    for (let i = 0; i < 8; i++) {
        let random = allnumbers[Math.floor(Math.random() * allnumbers.length)];
        if (random == player1[0] || random == player1[1] || random == player1[2] || random == player1[3] ||
            random == player1[4] || random == player1[5] || random == player1[6] || random == player1[7]) {
            let random = allnumbers[Math.floor(Math.random() * allnumbers.length)];
            player1.push(random);
        }
        else {
            player1.push(random);
        }


        for (var b = player1.length; b > 8; b--) {
            player1.pop();
        }
    }

    for (let i = 0; i < 8; i++) {
        let random = allnumbers[Math.floor(Math.random() * allnumbers.length)];
        if (random == player2[0] || random == player2[1] || random == player2[2] || random == player2[3] ||
            random == player2[4] || random == player2[5] || random == player2[6] || random == player2[7]) {
            let random = allnumbers[Math.floor(Math.random() * allnumbers.length)];
            player2.push(random);

        }
        else {
            player2.push(random);
        }

        for (var a = player2.length; a > 8; a--) {
            player2.pop();
        }

    }

    console.log(player1);
    console.log(player2);

}

function select() {
    let randomAll = allnumbers[Math.floor(Math.random() * allnumbers.length)];
    console.log(randomAll);

    let winner = "";
    let hit = "";

    if (
        player2[0] == randomAll && player1[0] == randomAll
        || player2[0] == randomAll && player1[1] == randomAll
        || player2[0] == randomAll && player1[2] == randomAll
        || player2[0] == randomAll && player1[3] == randomAll
        || player2[0] == randomAll && player1[4] == randomAll
        || player2[0] == randomAll && player1[5] == randomAll
        || player2[0] == randomAll && player1[6] == randomAll
        || player2[0] == randomAll && player1[7] == randomAll
        || player2[1] == randomAll && player1[0] == randomAll
        || player2[1] == randomAll && player1[1] == randomAll
        || player2[1] == randomAll && player1[2] == randomAll
        || player2[1] == randomAll && player1[3] == randomAll
        || player2[1] == randomAll && player1[4] == randomAll
        || player2[1] == randomAll && player1[5] == randomAll
        || player2[1] == randomAll && player1[6] == randomAll
        || player2[1] == randomAll && player1[7] == randomAll
        || player2[2] == randomAll && player1[0] == randomAll
        || player2[2] == randomAll && player1[1] == randomAll
        || player2[2] == randomAll && player1[2] == randomAll
        || player2[2] == randomAll && player1[3] == randomAll
        || player2[2] == randomAll && player1[4] == randomAll
        || player2[2] == randomAll && player1[5] == randomAll
        || player2[2] == randomAll && player1[6] == randomAll
        || player2[2] == randomAll && player1[7] == randomAll
        || player2[3] == randomAll && player1[0] == randomAll
        || player2[3] == randomAll && player1[1] == randomAll
        || player2[3] == randomAll && player1[2] == randomAll
        || player2[3] == randomAll && player1[3] == randomAll
        || player2[3] == randomAll && player1[4] == randomAll
        || player2[3] == randomAll && player1[5] == randomAll
        || player2[3] == randomAll && player1[6] == randomAll
        || player2[3] == randomAll && player1[7] == randomAll
        || player2[4] == randomAll && player1[0] == randomAll
        || player2[4] == randomAll && player1[1] == randomAll
        || player2[4] == randomAll && player1[2] == randomAll
        || player2[4] == randomAll && player1[3] == randomAll
        || player2[4] == randomAll && player1[4] == randomAll
        || player2[4] == randomAll && player1[5] == randomAll
        || player2[4] == randomAll && player1[6] == randomAll
        || player2[4] == randomAll && player1[7] == randomAll
        || player2[5] == randomAll && player1[0] == randomAll
        || player2[5] == randomAll && player1[1] == randomAll
        || player2[5] == randomAll && player1[2] == randomAll
        || player2[5] == randomAll && player1[3] == randomAll
        || player2[5] == randomAll && player1[4] == randomAll
        || player2[5] == randomAll && player1[5] == randomAll
        || player2[5] == randomAll && player1[6] == randomAll
        || player2[5] == randomAll && player1[7] == randomAll
        || player2[6] == randomAll && player1[0] == randomAll
        || player2[6] == randomAll && player1[1] == randomAll
        || player2[6] == randomAll && player1[2] == randomAll
        || player2[6] == randomAll && player1[3] == randomAll
        || player2[6] == randomAll && player1[4] == randomAll
        || player2[6] == randomAll && player1[5] == randomAll
        || player2[6] == randomAll && player1[6] == randomAll
        || player2[6] == randomAll && player1[7] == randomAll
        || player2[7] == randomAll && player1[0] == randomAll
        || player2[7] == randomAll && player1[1] == randomAll
        || player2[7] == randomAll && player1[2] == randomAll
        || player2[7] == randomAll && player1[3] == randomAll
        || player2[7] == randomAll && player1[4] == randomAll
        || player2[7] == randomAll && player1[5] == randomAll
        || player2[7] == randomAll && player1[6] == randomAll
        || player2[7] == randomAll && player1[7] == randomAll


    ) {
        player2.splice(player2.indexOf(randomAll), 1);
        player1.splice(player1.indexOf(randomAll), 1);

        allnumbers.splice(allnumbers.indexOf(randomAll), 1);
        hit = "double hit";
        console.log(allnumbers);
    }

    else if (player1[0] == randomAll || player1[1] == randomAll || player1[2] == randomAll || player1[3] == randomAll || player1[4] == randomAll ||
        player1[5] == randomAll || player1[6] == randomAll || player1[7] == randomAll) {
        allnumbers.splice(allnumbers.indexOf(randomAll), 1);
        player1.splice(player1.indexOf(randomAll), 1);
        hit = "player1 hit";
        console.log(allnumbers);

    }
    else if (player2[0] == randomAll || player2[1] == randomAll || player2[2] == randomAll || player2[3] == randomAll || player2[4] == randomAll ||
        player2[5] == randomAll || player2[6] == randomAll || player2[7] == randomAll) {
        allnumbers.splice(allnumbers.indexOf(randomAll), 1);
        player2.splice(player2.indexOf(randomAll), 1);
        hit = "player2 hit";
        console.log(allnumbers);
    }

    else {
        allnumbers.splice(allnumbers.indexOf(randomAll), 1);
        hit = "no hit";
    } document.getElementById("hit").innerHTML = hit;               
    console.log(player1);
    console.log(player2);
    console.log(allnumbers);


    if (player1.length == 0 && player2.length != 0) {
        winner = "player1 won";

    }
    else if (player2.length == 0 && player1.length != 0) {
        winner = "player2 won";
    }
    else if (player1.length == 0 && player2.length == 0) {
        winner = "both won";
    }
    document.getElementById("winner").innerHTML = winner;

    document.getElementById("demo").innerHTML = randomAll;



    let element1 = "";
    let element2 = "";

    for (let index = 0; index < player1.length; index++) {
        element1 += "<th>" + player1[index] + "</th>";


    }
    document.getElementById("player1").innerHTML = element1;




    for (let index = 0; index < player2.length; index++) {
        element2 += "<th>" + player2[index] + "</th>";


    }
    document.getElementById("player2").innerHTML = element2;


}