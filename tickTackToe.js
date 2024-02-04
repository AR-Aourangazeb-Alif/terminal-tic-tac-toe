const cell = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let playerX;
let playerO;

function theBox() {
    const box = `|    ${cell[0]}    |    ${cell[1]}    |    ${cell[2]}    |\n
|    ${cell[3]}    |    ${cell[4]}    |    ${cell[5]}    |\n
|    ${cell[6]}    |    ${cell[7]}    |    ${cell[8]}    |`;

    return box;
}

function checkResult() {
    if ((cell[0] === `X` && cell[1] === `X` && cell[2] === `X`) || (cell[3] === `X` && cell[4] === `X` && cell[5] === `X`) || (cell[6] === `X` && cell[7] === `X` && cell[8] === `X`) || (cell[0] === `X` && cell[4] === `X` && cell[8] === `X`) || (cell[2] === `X` && cell[4] === `X` && cell[6] === `X` || (cell[0] === `X` && cell[3] === `X` && cell[6] === `X`) || (cell[1] === `X` && cell[4] === `X` && cell[7] === `X`) || (cell[2] === `X` && cell[5] === `X` && cell[8] === `X`))) {
        return `Player-X is the winner!!`;
    } else if (!cell.includes(1) && !cell.includes(2) && !cell.includes(3) && !cell.includes(4) && !cell.includes(5) && !cell.includes(6) && !cell.includes(7) && !cell.includes(8) && !cell.includes(9)) {
        return `Draw : )`;
    } else if ((cell[0] === `O` && cell[1] === `O` && cell[2] === `O`) || (cell[3] === `O` && cell[4] === `O` && cell[5] === `O`) || (cell[6] === `O` && cell[7] === `O` && cell[8] === `O`) || (cell[0] === `O` && cell[4] === `O` && cell[8] === `O`) || (cell[2] === `O` && cell[4] === `O` && cell[6] === `O`) || (cell[0] === `O` && cell[3] === `O` && cell[6] === `O`) || (cell[1] === `O` && cell[4] === `O` && cell[7] === `O`) || (cell[2] === `O` && cell[5] === `O` && cell[8] === `O`)) {
        return `Player-O is the winner!!`;
    }
}


while (true) {

    // player-1 
    while (true) {
        playerX = prompt(theBox() + `\n\nPlayer-X`);

        if (cell.includes(Number(playerX)) || playerX.toLowerCase() === `exit`) {
            break;
        } else {
            alert(`!!ILLEGAL INPUT!! \n...Try again...`);
        }
    }

    if (playerX.toLowerCase() === `exit`) {
        alert(`EXIT...`);
        break;
    }

    cell[Number(playerX) - 1] = `X`;

    if (checkResult()) {
        alert(theBox() + `\n\n` + checkResult());
        const exitOrNot = prompt(`Write anything to continue  ||  Write "EXIT" to quit`);
        if (exitOrNot.toLowerCase() === `exit`) {
            break;
        } else {
            for (let i = 1; i <= cell.length; i++) {
                cell[i - 1] = i;
            }
        }
    }





    // player-2 
    while (true) {
        playerO = prompt(theBox() + `\n\nPlayer-O`);

        if (cell.includes(Number(playerO)) || playerO.toLowerCase() === `exit`) {
            break;
        } else {
            alert(`!!ILLEGAL INPUT!! \n...Try again...`);
        }
    }

    if (playerO.toLowerCase() === `exit`) {
        alert(`EXIT...`);
        break;
    }

    cell[Number(playerO) - 1] = `O`


    if (checkResult()) {
        alert(theBox() + `\n\n` + checkResult());
        const exitOrNot = prompt(`Write anything to continue  ||  Write "EXIT" to quit`);
        if (exitOrNot.toLowerCase() === `exit`) {
            break;
        } else {
            for (let i = 1; i <= cell.length; i++) {
                cell[i - 1] = i;
            }
        }
    }

}