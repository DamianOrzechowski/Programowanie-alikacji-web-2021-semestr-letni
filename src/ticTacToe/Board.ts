import Cell from './Cell';

class Board {
    size:number
    cells:Cell[];
    currentSymbol:number;
    
    changeSymbol():void{
        switch(this.currentSymbol){
            case 1:
                this.currentSymbol=-1
                break;
            case -1:
                this.currentSymbol=1;
                break;
            default:
                this.currentSymbol=1;
                break;
        }
    }

    makeMove(cell: Cell): void {
        this.changeSymbol()
        cell.setCellValue(this.currentSymbol);
        if(this.checkRows()){
            console.log('GAME WON BY', this.currentSymbol);
        }
        else if(this.checkColumns()){
            console.log('GAME WON BY', this.currentSymbol);
        }
        else if(this.checkDiagonalOne()){
            console.log('GAME WON BY', this.currentSymbol);
        }
        else if(this.checkDiagonalTwo()){
            console.log('GAME WON BY', this.currentSymbol);
        }
        let table = <HTMLTableElement>document.getElementById("tictactoe");

    };

    chceckForWin():void{
        //przeszukać rzędy->kolumny->przekatne
        this.checkRows();
    }
    checkRows():boolean {//przeszukuje rzędy i sprawdza czy w którymś znajdyuje sie (size) takich samych wartosci
        let firstElement;
        let rowNumber
        let tempTable:Cell[];
        
        for(let r=0; r<this.size; r++){
            rowNumber=r%this.size;
            tempTable=this.cells.slice(rowNumber,rowNumber+this.size);
            firstElement=this.cells[r*this.size].cellValue;
            const valueEquals=(currentValue)=>currentValue.cellValue===firstElement && currentValue.cellValue!==0;
            return(tempTable.every(valueEquals));
        }
    }
    checkColumns():boolean{
        let firstElement;
        let colNumber
        let tempTable:Cell[]=[];
        
        for(let c=0; c<this.size; c++){
            colNumber=c
            for(let col=0; col<this.size; col++){
                tempTable.push(this.cells[c]);
                c+=this.size;
            }
            firstElement=this.cells[colNumber].cellValue;
            const valueEquals=(currentValue)=>currentValue.cellValue===firstElement && currentValue.cellValue!==0;
            return(tempTable.every(valueEquals));
        }
    }
    checkDiagonalOne():boolean{
        let firstElement;
        let colNumber=0;
        let tempTable:Cell[]=[];
        
        const valueEquals=(currentValue)=>currentValue.cellValue===firstElement && currentValue.cellValue!==0;
        firstElement=this.cells[colNumber].cellValue;
        for(let c=0; c<this.size; c++){
            tempTable.push(this.cells[colNumber]);
            colNumber+=this.size+1;
        }
        return(tempTable.every(valueEquals));
    }
    checkDiagonalTwo():boolean{
        let firstElement;
        let colNumber=this.size-1;
        let tempTable:Cell[]=[];
        
        const valueEquals=(currentValue)=>currentValue.cellValue===firstElement && currentValue.cellValue!==0;
        firstElement=this.cells[colNumber].cellValue;
        console.log(firstElement);
        for(let c=0; c<this.size; c++){
            tempTable.push(this.cells[colNumber]);
            colNumber+=this.size-1;
        }
        return(tempTable.every(valueEquals));
    }
    constructor(size: number) {
        this.size=size;
        this.cells = new Array(size)
        let table = <HTMLTableElement>document.getElementById("tictactoe");
        let i=0;
        for(let r=0; r<size; r++)
        {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c);
                cell.className = 'cell';
                const newCell = new Cell(cell);
                this.cells[i] = newCell;
                cell.addEventListener("click", () => this.makeMove(newCell), false); i++;
            }
        }
    }
}

export default Board;