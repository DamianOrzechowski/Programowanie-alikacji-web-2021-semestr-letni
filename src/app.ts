import { Games } from './game.enum'
import { Game } from "./game.model";
import { TicTacToe } from './ticTacToe/Tictactoe'

import './style/styles.scss';



var resoult:number;
let  a:number=0;
let b:number=1;
let c:number |string;

resoult=b;
for (let index:number = 1; index < 100; index++) {
  
  console.log(resoult)
  resoult=a+b;
  a=b;
  b=resoult;
  
}
function addnumber(first:number,second:number):number{
  return first+second
}

console.log(addnumber(2,3))
var btn = document.createElement("BUTTON");
        btn.className='kot'   // Create a <button> element
        btn.innerHTML = "Change style";                   // Insert text
        document.body.appendChild(btn);
        var input = document.createElement("INPUT");
        document.body.appendChild(input)
        
        

        function podczasklikania(){
          
  
        }
btn.addEventListener('click',podczasklikania)


class Wypiszliczby{
  constructor(){
    console.log('cos')

  }
  doadj():void{
    console.log('dodaj a do b ')
    console.log(addnumber(5,6))

  }
}
const myaApp=new Wypiszliczby();
myaApp.doadj();

class App {

    constructor() {
        this.init();  
       
        
              
    }

    init(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        const closeButton=<HTMLElement>(document.createElement('a'))
        const list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a
        gameContainer.id='gameContainer'
        menuContainer.id='menuContainer';
        closeButton.id='closeButton'
        closeButton.innerHTML='zamknij'
        closeButton.style.display='none'

        for(var enumMember in Games){
          if(typeof Games[enumMember]==='string'){

            const newGame=new gameObject(Games[enumMember])
            const listGame=document.createElement('li')
            listGame.innerHTML=newGame.getName();
            closeButton.addEventListener('click',()=>{
              newGame.showMenu(newGame.getName())
              })

            listGame.addEventListener('click',()=>{
              newGame.getGame()
            })
            list.appendChild(listGame)
          }
        }
        
        menuContainer.appendChild(list);
        document.body.appendChild(closeButton)
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
                       // Append <button> to <body>
        
    }
  }
  class gameObject {

    gameEnum;

    constructor(Game) {
      this.gameEnum=Game;
    }

    getName(){
      return(this.gameEnum)
    }

    getGame(){
      this.hideMenu()
      switch(this.gameEnum){
        case 'TicTacToe':
          const selectedGame=new TicTacToe()
          selectedGame.getGameElement()
          selectedGame.startGame()
          break;

        case 'BattleShips':
          console.log('selected Battleships')
          break;

        default:
          console.log('game doesnt exist')
          break;
      }
    }
    hideMenu(){
      document.getElementById('closeButton').style.display='block'
      document.getElementById('menuContainer').style.display='none';
    }

    showMenu(gameContainer:string){
      document.getElementById('closeButton').style.display='none'
      document.getElementById('menuContainer').style.display='block';
      document.body.removeChild(document.getElementById('tictactoe'))
    }

  }
  const myApp=new App();

  