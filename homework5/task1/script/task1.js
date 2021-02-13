"use strict";


const chessfield = {
    chessboardEl: document.getElementById('chessboard'),
    row_arr: [0, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    column_arr: ['x', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'x'],

    isEven(n) {
        if (n % 2 === 0)
            return true;

        return false;
    },

    addNumberedRow(rowNum) {
        let currentFieldColorBlack = true;
        if (!this.isEven(rowNum)) {
            currentFieldColorBlack = false;
        }

        const tr = document.createElement('tr');
        this.chessboardEl.appendChild(tr);

        for (let col = 0; col < this.column_arr.length; col++) {
            const td = document.createElement('td');
            tr.appendChild(td);

            //внешние цифровые надписи
            if (col === 0 || col === 9)
                td.innerHTML = this.row_arr[rowNum];
            //иначе игровое поле
            else if (currentFieldColorBlack) {
                td.style.backgroundColor = '#732e11';
                currentFieldColorBlack = false;
            } else {
                td.style.backgroundColor = '#FaFaEA';
                currentFieldColorBlack = true;
            }
        }

    },

    addAlaphabetRow() {
        const tr = document.createElement('tr');
        this.chessboardEl.appendChild(tr);

        for (let col = 0; col < this.column_arr.length; col++) {

            const td = document.createElement('td');

            if (col > 0 && col < 9)
                td.innerHTML = this.column_arr[col];

            tr.appendChild(td);
        }


    },

    renderField() {
        for (let row = 0; row < this.row_arr.length; row++) {
            if (this.row_arr[row] === 0)
                this.addAlaphabetRow();
            else
                this.addNumberedRow(row);
        }
    },

};


chessfield.renderField();