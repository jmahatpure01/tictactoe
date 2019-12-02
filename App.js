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

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
    }
  }

  input(btn){
    console.log(btn)
    switch(btn) {
      case 1 : this.setState({text1: 'X'});break;
      case 2 : this.setState({text2: 'X'});break;
      case 3 : this.setState({text3: 'X'});break;
      case 4 : this.setState({text4: 'X'});break;
      case 5 : this.setState({text5: 'X'});break;
      case 6 : this.setState({text6: 'X'});break;
      case 7 : this.setState({text7: 'X'});break;
      case 8 : this.setState({text8: 'X'});break;
      case 9 : this.setState({text9: 'X'});break;
    }
    this.checkB();
    this.AInput(btn)
  }

  checkB() {

  }

  AInput(){
    let board = this.state;
    if(board.text1 == board.text2) {
      if(board.text1 != board.text3) {
        this.setState({text3: 'O'})
      } else {
        //user win
      }
    } else if(board.text1 == board.text4) {
      if(board.text1 != board.text7) {
        this.setState({text7: 'O'})
      } else {
        //user win
      }
    } else if(board.text1 == board.text5) {
      if(board.text1 != board.text9) {
        this.setState({text9: 'O'})
      } else {
        //user win
      }
    } else if(board.text1 == board.text3) {
      if(board.text1 != board.text2) {
        this.setState({text2: 'O'})
      } else {
        //user win
      }
    } else if(board.text1 == board.text7) {
      if(board.text1 != board.text4) {
        this.setState({text4: 'O'})
      } else {
        //user win
      }
    } else if(board.text1 == board.text9) {
      if(board.text1 != board.text5) {
        this.setState({text5: 'O'})
      } else {
        //user win
      }
    } else if(board.text2 == board.text3) {
      if(board.text2 != board.text1) {
        this.setState({text1: 'O'})
      } else {
        //user win
      }
    } else if(board.text2 == board.text5) {
      if(board.text2 != board.text8) {
        this.setState({text8: 'O'})
      } else {
        //user win
      }
    } else if(board.text2 == board.text8) {
      if(board.text2 != board.text5) {
        this.setState({text5: 'O'})
      } else {
        //user win
      }
    } else if(board.text3 == board.text5) {
      if(board.text3 != board.text7) {
        this.setState({text7: 'O'})
      } else {
        //user win
      }
    } else if(board.text3 == board.text6) {
      if(board.text3 != board.text9) {
        this.setState({text9: 'O'})
      } else {
        //user win
      }
    } else if(board.text3 == board.text7) {
      if(board.text3 != board.text5) {
        this.setState({text5: 'O'})
      } else {
        //user win
      }
    } else if(board.text4 == board.text5) {
      if(board.text4 != board.text6) {
        this.setState({text6: 'O'})
      } else {
        //user win
      }
    } else if(board.text4 == board.text7) {
      if(board.text4 != board.text1) {
        this.setState({text1: 'O'})
      } else {
        //user win
      }
    } else if(board.text5 == board.text6) {
      if(board.text5 != board.text4) {
        this.setState({text4: 'O'})
      } else {
        //user win
      }
    } else if(board.text5 == board.text8) {
      if(board.text5 != board.text2) {
        this.setState({text2: 'O'})
      } else {
        //user win
      }
    } else if(board.text5 == board.text3) {
      if(board.text5 != board.text7) {
        this.setState({text7: 'O'})
      } else {
        //user win
      }
    } else if(board.text5 == board.text7) {
      if(board.text5 != board.text3) {
        this.setState({text3: 'O'})
      } else {
        //user win
      }
    } else if(board.text5 == board.text9) {
      if(board.text5 != board.text1) {
        this.setState({text1: 'O'})
      } else {
        //user win
      }
    } else if(board.text6 == board.text9) {
      if(board.text6 != board.text3) {
        this.setState({text3: 'O'})
      } else {
        //user win
      }
    } else if(board.text6 == board.text4) {
      if(board.text6 != board.text5) {
        this.setState({text5: 'O'})
      } else {
        //user win
      }
    } else if(board.text7 == board.text8) {
      if(board.text7 != board.text9) {
        this.setState({text9: 'O'})
      } else {
        //user win
      }
    } else if(board.text7 == board.text9) {
      if(board.text7 != board.text8) {
        this.setState({text8: 'O'})
      } else {
        //user win
      }
    } else if(board.text8 == board.text9) {
      if(board.text8 != board.text7) {
        this.setState({text7: 'O'})
      } else {
        //user win
      }
    }
  }

  reset() {
    this.setState({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: "",
      text9: "",
    })
  }

  render(){
    return (
      <View style={styles.body}>
        <Text style={styles.heading}>TicTacToe</Text>
        <View style={styles.outerContainer}>
          <View style={styles.row}>
            <Text style={styles.inputBox} onPress={()=>this.input(1)}>{this.state.text1}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(2)}>{this.state.text2}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(3)}>{this.state.text3}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.inputBox} onPress={()=>this.input(4)}>{this.state.text4}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(5)}>{this.state.text5}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(6)}>{this.state.text6}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.inputBox} onPress={()=>this.input(7)}>{this.state.text7}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(8)}>{this.state.text8}</Text>
            <Text style={styles.inputBox} onPress={()=>this.input(9)}>{this.state.text9}</Text>
          </View>
        </View>
        <View style={styles.controls}>
          <Text>Game</Text>
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
