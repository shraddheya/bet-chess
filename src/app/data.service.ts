import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // server = "http://localhost";
  server = "";
  // server = "localhost:3000";
  user = null;
  notifications = [];
  socket: any;
  playersList = {
    "asdfg0": { "prid": 0,  st: null },
    "asdfg1": { "prid": 1,  st: 'sender' },
    "asddf2": { "prid": 2,  st: 'receiver' },
    "asdfg3": { "prid": 3,  st: 'game' },
    "asdfg4": { "prid": 4,  st: null },
    "asdfg5": { "prid": 5,  st: 'sender' },
    "asdfg6": { "prid": 6,  st: 'receiver' },
    "asdfg7": { "prid": 7,  st: 'game' },
    "asdfg8": { "prid": 8,  st: null },
    "asdfg9": { "prid": 9,  st: 'sender' },
    "asd10": { "prid": 10,  st: 'receiver' },
    "asd11": { "prid": 11,  st: 'game' },
    "asd12": { "prid": 12,  st: null },
    "asd13": { "prid": 13,  st: 'sender' },
    "asd14": { "prid": 14,  st: 'receiver' },
    "asd15": { "prid": 15,  st: 'game' },
    "asd16": { "prid": 16,  st: null },
    "asd17": { "prid": 17,  st: 'sender' },
    "asd18": { "prid": 18,  st: 'receiver' },
    "asd19": { "prid": 19,  st: 'game' },
  };
  playersListLength = Object.keys(this.playersList).length;
  battlesList = {
    0 :{ player1: "qwertyuj0", player2: "jgrff0", game: "game0" },
    1 :{ player1: "qwertyuj1", player2: "jgrff1", game: "game1" },
    2 :{ player1: "qwertyuj2", player2: "jgrff2", game: "game2" },
    3 :{ player1: "qwertyuj3", player2: "jgrff3", game: "game3" },
    4 :{ player1: "qwertyuj4", player2: "jgrff4", game: "game4" },
    5 :{ player1: "qwertyuj5", player2: "jgrff5", game: "game5" },
    6 :{ player1: "qwertyuj6", player2: "jgrff6", game: "game6" },
    7 :{ player1: "qwertyuj7", player2: "jgrff7", game: "game7" },
    8 :{ player1: "qwertyuj8", player2: "jgrff8", game: "game8" },
    9 :{ player1: "qwertyuj9", player2: "jgrff9", game: "game9" },
    10 :{ player1: "qwertyuj10", player2: "jgrff10", game: "game10" },
    11 :{ player1: "qwertyuj11", player2: "jgrff11", game: "game11" },
    12 :{ player1: "qwertyuj12", player2: "jgrff12", game: "game12" },
    13 :{ player1: "qwertyuj13", player2: "jgrff13", game: "game13" },
    14 :{ player1: "qwertyuj14", player2: "jgrff14", game: "game14" },
    15 :{ player1: "qwertyuj15", player2: "jgrff15", game: "game15" },
    16 :{ player1: "qwertyuj16", player2: "jgrff16", game: "game16" },
    17 :{ player1: "qwertyuj17", player2: "jgrff17", game: "game17" },
    18 :{ player1: "qwertyuj18", player2: "jgrff18", game: "game18" },
    19 :{ player1: "qwertyuj19", player2: "jgrff19", game: "game19" }
  };
  battlesListLength = Object.keys(this.battlesList).length;


  constructor(private http: HttpClient) { 
    this.socket = io('');

  }


  getLogin() { return this.http.get(this.server + '/api/login'); }
  postLogin(usr: any) { return this.http.post(this.server + '/api/login', usr); }
  postSignup(usr: any) { return this.http.post(this.server + '/api/signup', usr); }
  postLogout(usr: any) { return this.http.post(this.server + '/api/logout', usr); }

  CHALLENGE = {
    SEND: (usr: any) => {},
    REMIND: (usr: any) => {},
    REVOKE: (usr: any) => {},
    ACCEPT: (usr: any) => {},
    REJECT: (usr: any) => {},
  }

  GOTO(game: string) {}
}
