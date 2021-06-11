/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar game_enum_1 = __webpack_require__(/*! ./game.enum */ \"./src/game.enum.ts\");\r\nvar Tictactoe_1 = __webpack_require__(/*! ./ticTacToe/Tictactoe */ \"./src/ticTacToe/Tictactoe.ts\");\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.init();\r\n    }\r\n    App.prototype.init = function () {\r\n        var menuContainer = (document.createElement('div')); // kontener menu dostępnych gier\r\n        var gameContainer = (document.createElement('div')); // kontener główny ekranu z grą\r\n        var closeButton = (document.createElement('a'));\r\n        var list = document.createElement('ul'); // lista pozycji w menu dostępnych gier\r\n        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum\r\n        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą\r\n        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.\r\n        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a\r\n        gameContainer.id = 'gameContainer';\r\n        menuContainer.id = 'menuContainer';\r\n        closeButton.id = 'closeButton';\r\n        closeButton.innerHTML = 'zamknij';\r\n        closeButton.style.display = 'none';\r\n        var _loop_1 = function () {\r\n            if (typeof game_enum_1.Games[enumMember] === 'string') {\r\n                var newGame_1 = new gameObject(game_enum_1.Games[enumMember]);\r\n                var listGame = document.createElement('li');\r\n                listGame.innerHTML = newGame_1.getName();\r\n                closeButton.addEventListener('click', function () {\r\n                    newGame_1.showMenu(newGame_1.getName());\r\n                });\r\n                listGame.addEventListener('click', function () {\r\n                    newGame_1.getGame();\r\n                });\r\n                list.appendChild(listGame);\r\n            }\r\n        };\r\n        for (var enumMember in game_enum_1.Games) {\r\n            _loop_1();\r\n        }\r\n        menuContainer.appendChild(list);\r\n        document.body.appendChild(closeButton);\r\n        document.body.appendChild(menuContainer);\r\n        document.body.appendChild(gameContainer);\r\n    };\r\n    return App;\r\n}());\r\nvar gameObject = /** @class */ (function () {\r\n    function gameObject(Game) {\r\n        this.gameEnum = Game;\r\n    }\r\n    gameObject.prototype.getName = function () {\r\n        return (this.gameEnum);\r\n    };\r\n    gameObject.prototype.getGame = function () {\r\n        this.hideMenu();\r\n        switch (this.gameEnum) {\r\n            case 'TicTacToe':\r\n                var selectedGame = new Tictactoe_1.TicTacToe();\r\n                selectedGame.getGameElement();\r\n                selectedGame.startGame();\r\n                break;\r\n            case 'BattleShips':\r\n                console.log('selected Battleships');\r\n                break;\r\n            default:\r\n                console.log('game doesnt exist');\r\n                break;\r\n        }\r\n    };\r\n    gameObject.prototype.hideMenu = function () {\r\n        document.getElementById('closeButton').style.display = 'block';\r\n        document.getElementById('menuContainer').style.display = 'none';\r\n    };\r\n    gameObject.prototype.showMenu = function (gameContainer) {\r\n        document.getElementById('closeButton').style.display = 'none';\r\n        document.getElementById('menuContainer').style.display = 'block';\r\n        document.body.removeChild(document.getElementById('tictactoe'));\r\n    };\r\n    return gameObject;\r\n}());\r\nvar myApp = new App();\r\n\n\n//# sourceURL=webpack://programowaniewebowe/./src/app.ts?");

/***/ }),

/***/ "./src/game.enum.ts":
/*!**************************!*\
  !*** ./src/game.enum.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n    Games[Games[\"BattleShips\"] = 2] = \"BattleShips\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack://programowaniewebowe/./src/game.enum.ts?");

/***/ }),

/***/ "./src/ticTacToe/Board.ts":
/*!********************************!*\
  !*** ./src/ticTacToe/Board.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/ticTacToe/Cell.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board(size) {\r\n        var _this = this;\r\n        this.size = size;\r\n        this.cells = new Array(size);\r\n        var table = document.getElementById(\"tictactoe\");\r\n        var i = 0;\r\n        for (var r = 0; r < size; r++) {\r\n            var row = table.insertRow(r);\r\n            var _loop_1 = function (c) {\r\n                var cell = row.insertCell(c);\r\n                cell.className = 'cell';\r\n                var newCell = new Cell_1[\"default\"](cell);\r\n                this_1.cells[i] = newCell;\r\n                cell.addEventListener(\"click\", function () { return _this.makeMove(newCell); }, false);\r\n                i++;\r\n            };\r\n            var this_1 = this;\r\n            for (var c = 0; c < size; c++) {\r\n                _loop_1(c);\r\n            }\r\n        }\r\n    }\r\n    Board.prototype.changeSymbol = function () {\r\n        switch (this.currentSymbol) {\r\n            case 1:\r\n                this.currentSymbol = -1;\r\n                break;\r\n            case -1:\r\n                this.currentSymbol = 1;\r\n                break;\r\n            default:\r\n                this.currentSymbol = 1;\r\n                break;\r\n        }\r\n    };\r\n    Board.prototype.makeMove = function (cell) {\r\n        this.changeSymbol();\r\n        cell.setCellValue(this.currentSymbol);\r\n        if (this.checkRows()) {\r\n            console.log('GAME WON BY', this.currentSymbol);\r\n        }\r\n        else if (this.checkColumns()) {\r\n            console.log('GAME WON BY', this.currentSymbol);\r\n        }\r\n        else if (this.checkDiagonalOne()) {\r\n            console.log('GAME WON BY', this.currentSymbol);\r\n        }\r\n        else if (this.checkDiagonalTwo()) {\r\n            console.log('GAME WON BY', this.currentSymbol);\r\n        }\r\n        var table = document.getElementById(\"tictactoe\");\r\n    };\r\n    ;\r\n    Board.prototype.chceckForWin = function () {\r\n        //przeszukać rzędy->kolumny->przekatne\r\n        this.checkRows();\r\n    };\r\n    Board.prototype.checkRows = function () {\r\n        var firstElement;\r\n        var rowNumber;\r\n        var tempTable;\r\n        for (var r = 0; r < this.size; r++) {\r\n            rowNumber = r % this.size;\r\n            tempTable = this.cells.slice(rowNumber, rowNumber + this.size);\r\n            firstElement = this.cells[r * this.size].cellValue;\r\n            var valueEquals = function (currentValue) { return currentValue.cellValue === firstElement && currentValue.cellValue !== 0; };\r\n            return (tempTable.every(valueEquals));\r\n        }\r\n    };\r\n    Board.prototype.checkColumns = function () {\r\n        var firstElement;\r\n        var colNumber;\r\n        var tempTable = [];\r\n        for (var c = 0; c < this.size; c++) {\r\n            colNumber = c;\r\n            for (var col = 0; col < this.size; col++) {\r\n                tempTable.push(this.cells[c]);\r\n                c += this.size;\r\n            }\r\n            firstElement = this.cells[colNumber].cellValue;\r\n            var valueEquals = function (currentValue) { return currentValue.cellValue === firstElement && currentValue.cellValue !== 0; };\r\n            return (tempTable.every(valueEquals));\r\n        }\r\n    };\r\n    Board.prototype.checkDiagonalOne = function () {\r\n        var firstElement;\r\n        var colNumber = 0;\r\n        var tempTable = [];\r\n        var valueEquals = function (currentValue) { return currentValue.cellValue === firstElement && currentValue.cellValue !== 0; };\r\n        firstElement = this.cells[colNumber].cellValue;\r\n        for (var c = 0; c < this.size; c++) {\r\n            tempTable.push(this.cells[colNumber]);\r\n            colNumber += this.size + 1;\r\n        }\r\n        return (tempTable.every(valueEquals));\r\n    };\r\n    Board.prototype.checkDiagonalTwo = function () {\r\n        var firstElement;\r\n        var colNumber = this.size - 1;\r\n        var tempTable = [];\r\n        var valueEquals = function (currentValue) { return currentValue.cellValue === firstElement && currentValue.cellValue !== 0; };\r\n        firstElement = this.cells[colNumber].cellValue;\r\n        console.log(firstElement);\r\n        for (var c = 0; c < this.size; c++) {\r\n            tempTable.push(this.cells[colNumber]);\r\n            colNumber += this.size - 1;\r\n        }\r\n        return (tempTable.every(valueEquals));\r\n    };\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack://programowaniewebowe/./src/ticTacToe/Board.ts?");

/***/ }),

/***/ "./src/ticTacToe/Cell.ts":
/*!*******************************!*\
  !*** ./src/ticTacToe/Cell.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(cell) {\r\n        this.htmlElement = cell;\r\n        this.cellValue = 0;\r\n    }\r\n    Cell.prototype.setCellValue = function (value) {\r\n        //1=krzyzyk, -1=kolko, 0=pole nieustawione\r\n        this.cellValue = value;\r\n        this.htmlElement.innerHTML = value.toString();\r\n    };\r\n    return Cell;\r\n}());\r\nexports.default = Cell;\r\n\n\n//# sourceURL=webpack://programowaniewebowe/./src/ticTacToe/Cell.ts?");

/***/ }),

/***/ "./src/ticTacToe/Tictactoe.ts":
/*!************************************!*\
  !*** ./src/ticTacToe/Tictactoe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.TicTacToe = void 0;\r\nvar Board_1 = __webpack_require__(/*! ../ticTacToe/Board */ \"./src/ticTacToe/Board.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Kółko i krzyżyk\";\r\n        console.log('tictactoe');\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        console.log('gethtmlelement');\r\n        var div = document.createElement('div');\r\n        div.id = 'tictactoe';\r\n        document.body.appendChild(div);\r\n        return div;\r\n    };\r\n    TicTacToe.prototype.startGame = function () {\r\n        var board = new Board_1[\"default\"](3);\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack://programowaniewebowe/./src/ticTacToe/Tictactoe.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;