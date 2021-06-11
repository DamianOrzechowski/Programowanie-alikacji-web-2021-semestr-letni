class  Cell {
    cellValue: number;
    htmlElement: HTMLElement;

    constructor(cell:HTMLElement) {
        this.htmlElement = cell;
        this.cellValue=0;
    }

    setCellValue(value:number){
        //1=krzyzyk, -1=kolko, 0=pole nieustawione
        this.cellValue=value;
        this.htmlElement.innerHTML=value.toString();
    }
}
export default Cell;