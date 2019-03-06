//объекты с фигурами
var figures = {
    0: {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H'
    },
    1: {
        0: 1, // Номера рядов
        1: '\u2656',
        2: '\u2658',
        3: '\u265D',
        4: '\u2655',
        5: '\u2654',
        6: '\u265D',
        7: '\u2658',
        8: '\u2656',
        9: 1 // Номера рядов
    }, 
    2: {
        0: 2, // Номера рядов
        1: '\u2659',
        2: '\u2659',
        3: '\u2659',
        4: '\u2659',
        5: '\u2659',
        6: '\u2659',
        7: '\u2659',
        8: '\u2659',
        9: 2 // Номера рядов
    }, 
    3: {
        0: 3,        
        9: 3, 
    }, 
    4: {
        0: 4,       
        9: 4, 
    }, // Пустые клетки
    5: {
        0: 5,       
        9: 5, 
    }, // Пустые клетки
    6: {
        0: 6,       
        9: 6, 
    }, // Пустые клетки
    7: {
        0: 7,
        1: '\u2659',
        2: '\u2659',
        3: '\u2659',
        4: '\u2659',
        5: '\u2659',
        6: '\u2659',
        7: '\u2659',
        8: '\u2659',
        9: 7, 
    }, // Фигуры
    8: {
        0: 8, // Номера рядов
        1: '\u2656',
        2: '\u2658',
        3: '\u265D',
        4: '\u2655',
        5: '\u2654',
        6: '\u265D',
        7: '\u2658',
        8: '\u2656',
        9: 8 // Номера рядов}, // Фигуры
    },
    9: {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H'
    }
}

function drawChess () {
    let mainBlock = document.querySelector('.main-block');

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            let block = document.createElement('div'); //создаем один блок
            block.classList.add('block');    //присваиваем класс
            if (i == 0 || i == 9 || j == 0 || j == 9) {
                block.classList.add('legend');
            } else if ((i % 2 != 0) && (j % 2 == 0)) {
                block.classList.add('black');
            } else if ((i % 2 == 0) && (j % 2 != 0)) {
                block.classList.add('black');
            } else if ((i % 2 != 0) && (j % 2 != 0)) {
                block.classList.add('white');
            } else if ((i % 2 == 0) && (j % 2 == 0)) {
                block.classList.add('white');
            }
            mainBlock.appendChild(block); //добавляем его в основной блок доску

            let label = figures[i][j]
            if (label != undefined) {
                block.innerText = label;
            }
        }  
     } 
    
    
}


drawChess();