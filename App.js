import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

class Move {
  row;
  col;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      board: [["", "", ""], ["", "", ""], ["", "", ""]],
      player: 'X',
      ai: 'O',
      msg: "Good Luck Player"
    }
  }

  isMovesLeft() {
    for (let i = 0; i<3; i++) { 
      for (let j = 0; j<3; j++) {
        if (this.state.board[i][j]=="") {
          return true; 
        }
      }
    }
    return false;
  }

  evaluate(board=null) {
    if(board == null) {
      board = this.state.board;
    }
    
    for(let row=0; row < 3; row++) {
      if(board[row][0] == board[row][1] && board[row][1] == board[row][2]) {
        if(board[row][0] == this.state.ai) {
          return +10;
        } else if(board[row][0] == this.state.player) {
          return -10;
        }
      }
    }

    for(let col=0; col < 3; col++) {
      if(board[0][col] == board[1][col] && board[1][col] == board[2][col]) {
        if(board[0][col] == this.state.ai) {
          return +10;
        } else if(board[0][col] == this.state.player) {
          return -10;
        }
      }
    }

    if(board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
      if(board[0][0] == this.state.ai) {
        return +10;
      } else if(board[0][0] == this.state.player) {
        return -10;
      }
    }

    if(board[2][0] == board[1][1] && board[1][1] == board[0][2]) {
      if(board[0][2] == this.state.ai) {
        return +10;
      } else if(board[0][2] == this.state.player) {
        return -10;
      }
    }

    return 0;
  }

  minimax(board=null, depth, isMax) {
    if(board == null){
      board = this.state.board;
    }
    
    let score = this.evaluate(board);

    if(score == -10 || score == 10) {
      return score;
    }

    if(this.isMovesLeft() == false) {
      return 0;
    }

    if(isMax) {
      let best = -1000;

      for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
          if(board[row][col] == "") {
            board[row][col] = this.state.ai;

            best = Math.max(best, this.minimax(board, depth+1, !isMax));

            board[row][col] = "";
          }
        }
      }
      return best;
    } else {
      let best = 1000;

      for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
          if(board[row][col] == "") {
            board[row][col] = this.state.player;

            best = Math.max(best, this.minimax(board, depth+1, !isMax));

            board[row][col] = "";
          }
        }
      }
      return best;
    }
  }

  findTheBestMove() {
    let bestVal = -1000;
    let bestMove = new Move();
    bestMove.row = -1;
    bestMove.col = -1;
    let board = this.state.board;

    for(let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++) {
        if(board[row][col] == "") {
          board[row][col] = this.state.ai;

          let moveVal = this.minimax(board, 0, false);

          board[row][col] = "";

          if(moveVal > bestVal) {
            bestMove.row = row;
            bestMove.col = col;
            bestVal = moveVal;
          }
        }
      }
    }

    return bestMove;
  }

  input(btn){
    console.log(btn)
    let board = this.state.board;
    switch(btn) {
      case 1 : board[0][0] = this.state.player;
      this.setState({board: board});break;
      case 2 : board[0][1] = this.state.player;
      this.setState({board: board});break;
      case 3 : board[0][2] = this.state.player;
      this.setState({board: board});break;
      case 4 : board[1][0] = this.state.player;
      this.setState({board: board});break;
      case 5 : board[1][1] = this.state.player;
      this.setState({board: board});break;
      case 6 : board[1][2] = this.state.player;
      this.setState({board: board});break;
      case 7 : board[2][0] = this.state.player;
      this.setState({board: board});break;
      case 8 : board[2][1] = this.state.player;
      this.setState({board: board});break;
      case 9 : board[2][2] = this.state.player;
      this.setState({board: board});break;
    }
    let move = this.findTheBestMove();
    board[move.row][move.col] = this.state.ai;
    this.setState({board: board});
    let result = this.evaluate();
    if(result == 10) {
      this.setState({msg: "AI Won"})
    } else if(result == -10) {
      this.setState({msg: "Great! Player Won"})
    } else if(result == 0 && this.isMovesLeft() == false) {
      this.setState({msg: "A RARE Tie"})
    }
  }

  reset() {
    this.setState({
      board: [["", "", ""], ["", "", ""], ["", "", ""]],
      player: 'X',
      ai: 'O',
      msg: "Good Luck Player!"
    })
  }

  render(){
    return (
      <View style={styles.body}>
        <Text style={styles.heading}>TicTacToe</Text>
        <Text>{this.state.msg}</Text>
        <View style={styles.outerContainer}>
          <View style={styles.row}>
            <Text style={styles.inputBox} onPress={()=>this.input(1)}>{this.state.board[0][0]}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(2)}>{this.state.board[0][1]}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(3)}>{this.state.board[0][2]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.inputBox} onPress={()=>this.input(4)}>{this.state.board[1][0]}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(5)}>{this.state.board[1][1]}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(6)}>{this.state.board[1][2]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.inputBox} onPress={()=>this.input(7)}>{this.state.board[2][0]}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(8)}>{this.state.board[2][1]}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(9)}>{this.state.board[2][2]}</Text>
          </View>
        </View>
        <View style={styles.controls}>
          <Text>Game</Text>
          <Text>Player: {this.state.player}</Text>
          <Text>AI: {this.state.ai}</Text>
          <Button title="Reset" onPress={()=>this.reset()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: 'column',
    alignContent:'center',
    justifyContent: 'center'
  },
  outerContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'center',
    height: 400
  },
  heading: {
    fontSize: 20,
    marginBottom: 20
  },
  row: {
    flex: 2,
    flexDirection: 'row',
  },
  inputBox: {
    // width: '30%',
    // height: '46%',
    flex: 2,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 100,
    marginBottom: 0,
    justifyContent: 'center',
    textAlign: 'center'
  },
  controls:{
    flex: 1
  },
});

export default App;
