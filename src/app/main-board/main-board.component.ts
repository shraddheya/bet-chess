import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as Chess from 'chess.js';
import { ActivatedRoute } from '@angular/router';

const autoplayWait: any = 1 * 1000; // milliseconds
const pieces = {
  B: 'bishop',
  K: 'king',
  N: 'knight',
  P: 'pawn',
  Q: 'queen',
  R: 'rook',
};
const win = (window as any);
let comp: MainBoardComponent;
@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {

  g = null;
  board: any;
  ChessBoard: any;
  game: any;
  moveList: any = [];
  sidemove:any = [];
  captured: any = {};
  fenPosition: any = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  orientation: any = 'white';
  disallowMove = 'b';

  constructor( public ds: DataService, private activatedRoute: ActivatedRoute ) { 
    comp = this;
    this.g = activatedRoute.snapshot.queryParams.gameId;
  }

  ngOnInit(): void {
    this.initGame();
  }

  initGame() {
    this.game = new Chess();
    this.board = new ChessBoard('gameBoard', {
      // onDragStart: this.validateMove,
      draggable: true,
      // position: this.fenPosition,
      // orientation: this.orientation,
      dropOffBoard: 'snapback',
      pieceTheme: 'assets/chessboard/img/{piece}.png',
      localStorage: true,
      // onDrop: comp.handleMove,
    });
    this.board.resize();
    // (window as any).resize(this.board.resize);
    // (window as any).resize = this.board.resize();
    $(window).resize(this.board.resize);
    this.resetBoard();
    this.autoplay();
    win.game = this.game;
    win.board = this.board;
  }
  resetBoard() {
    this.game.reset();
    this.board.start();
    this.captured = {
      w: [],
      b: []
    };
  }
  autoplay() {
    const possibleMoves = this.game.moves();
    if (this['g'] || possibleMoves.length === 0) { return; }
    const randomIdx = Math.floor(Math.random() * possibleMoves.length);
    const newM = this.handleMove(possibleMoves[randomIdx]);
    this.board.move(`${newM.from}-${newM.to}`);
    const noPieces = (this.game.ascii().match(/[rnbqkp]/gi) || []).length - 1;
    if (noPieces < 20) {
      this.resetBoard();
      this.moveList.splice(0, this.moveList.length);
    }
    setTimeout(() => {
      this.autoplay();
    }, autoplayWait);
  }
  
  handleMove(from: any, to = null) {
    const move = comp.game.move(to === null ? from : { from, to });
    if (move === null) { return 'snapback'; }
    if (move.captured) { comp.captured[move.color].push(pieces[move.captured.toUpperCase()]); }
    const inMovelist = move.from+" , "+move.to;
    const gameID = comp.g;
    if (!gameID) { return move; }
    // comp.ds.socket.emit('move', {move, gameID, moves: JSON.stringify(comp.game.moves()), fen: comp.game.fen(), history: JSON.stringify(comp.game.history())})
    return move;
  }
}
