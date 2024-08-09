// for loop to render divs for game
for (let i = 0; i <= 100; i++) {
    let board = document.createElement('div');

    board.className ="box";
    board.id = "b" + i;

    if (i===91) {
        let p1 = document.createElement('p');
        p1.id = "player1";
        board.appendChild(p1);

        let p2 = document.createElement('p');
        p2.id = "player2";
        board.appendChild(p2);
    }
    document.getElementById('board').appendChild(board);
}

