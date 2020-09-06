import { Component, OnInit } from '@angular/core';
import { cellEnum } from '../cell/cellenum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
private currentplayer:cellEnum;
public board:cellEnum[][];
private isGameover: boolean;
public statusmessage;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }
get gameover():boolean{
  return this.isGameover;
}
newGame(){
  this.board=[];
  for(let row=0; row<3; row++){
    this.board[row]=[];
    for(let col=0; col<3; col++){
      this.board[row][col]=cellEnum.EMPTY;
    }
  }
  this.currentplayer=cellEnum.X;
  this.isGameover=false;
  this.statusmessage= "player $(this.currentplayer)'s turn";

}
move(row: number, col:number):void{
  if(!this.isGameover && this.board[col][row]===cellEnum.EMPTY){
this.board[row][col] = this.currentplayer;
if(this.isDraw()){
  this.statusmessage = "IT\S a Draw";
  this.isGameover = true;
}else if(this.isWin()){
  this.statusmessage= "player $(this.currentplayer) won!";
  this.isGameover = true;
}    else{
  this.currentplayer = this.currentplayer ===cellEnum.X?cellEnum.O:cellEnum.X
}

  }
}
isDraw():boolean{
  for(const columns of this.board){
    for(const col of columns){
      if(col === cellEnum.EMPTY){
        return false;
      }
    }
  }
  return !this.isWin();
}
isWin():boolean{
  for(const columns of this.board){
    if(columns[0]===columns[1] && 
      columns[2] && 
      columns[0]!==cellEnum.EMPTY){
    return true;
  }
}
for(let col=0; col<this.board[0].length; col++){
  if(this.board[0][col]===this.board[1][col] && 
    this.board[0][col]===this.board[2][col] && 
    this.board[0][col]!==cellEnum.EMPTY){
    {
      return true;
  }
}
if(
  this.board[0][0] === this.board[1][1] && 
   this.board[0][0] === this.board[2][2] && 
    this.board[0][0] !== cellEnum.EMPTY
){
  return true;
}
if(
  this.board[0][2] === this.board[1][1] && 
  this.board[0][2] === this.board[2][2] && 
  this.board[0][2] !== cellEnum.EMPTY
){
  return true;
}
return false;
}
}
}