
let luc = document.getElementsByClassName("luc");
let x = ["", "", "", "", "", "", "", "", ""];
let kon = false;

function play(id) {
    if (luc[id].innerHTML === "") {
        luc[id].innerHTML = "O";
        x[id] = "O";
    }
    else {
        alert("Эта ячейка занята!");
        return;
    }

    console.log(x);
    if (checkwin()) return;
    hodrobot();
    if (checkwin()) return;
}

function checkwin() {
    if ((x[0]==="O" && x[1]==="O" && x[2]==="O") || (x[3]==="O" && x[4]==="O" && x[5]==="O") || (x[6]==="O" && x[7]==="O" && x[8]==="O") || (x[0]==="O" && x[3]==="O" && x[6]==="O") || (x[1]==="O" && x[4]==="O" && x[7]==="O") || (x[2]==="O" && x[5]==="O" && x[8]==="O") || (x[0]==="O" && x[4]==="O" && x[8]==="O") || (x[2]==="O" && x[4]==="O" && x[6]==="O")) {
        alert("Вы выиграли!");
        return true;
    }
    else {
        if ((x[0]==="X" && x[1]==="X" && x[2]==="X") || (x[3]==="X" && x[4]==="X" && x[5]==="X") || (x[6]==="X" && x[7]==="X" && x[8]==="X") || (x[0]==="X" && x[3]==="X" && x[6]==="X") || (x[1]==="X" && x[4]==="X" && x[7]==="X") || (x[2]==="X" && x[5]==="X" && x[8]==="X") || (x[0]==="X" && x[4]==="X" && x[8]==="X") || (x[2]==="X" && x[4]==="X" && x[6]==="X")) {
            alert("Вы проиграли!");
            return true;
        }
        else {
            if (kon) {
                alert("Ничья!");
                return true;
            }
        }
    }
}

function hodrobot() {
    while(true) {
    let id = Math.floor(Math.random()*8);
        if (luc[id].innerHTML === "") {
            luc[id].innerHTML = "X";
            x[id] = "X";
            break;
        }
        if (x.indexOf("") === -1) {
            kon = true;
            break;
        }
    }
}

function cleargame() {
    x = ["", "", "", "", "", "", "", "", ""];
    kon = false;
    for (let i=0; i<9; i++) {
        luc[i].innerHTML = "";
    }
}