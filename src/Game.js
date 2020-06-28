import React,{Component} from 'react'
import Score from './Score'

class Game extends Component{
  	constructor(props){
    	super(props)
      	const randomNumbers = this.getRandomNumbers()
      	this.state = {
            value1: randomNumbers[0],
            value2: randomNumbers[1],
            value3: randomNumbers[2],
            proposedAnswer: randomNumbers[3],
            numQuestions: 0,
            numCorrect: 0
        }
    }
  
  	checkCorrect(decision){
      if((this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer) === decision)
          this.resetNumbers(true)
      else
          this.resetNumbers(false)
  	}

    resetNumbers(outcome){
      if(outcome)
          this.setState((prevState)=> ({numCorrect: prevState.numCorrect + 1}))
      var numbers = this.getRandomNumbers()
      //chose to combine these to reduce number of calls
      this.setState((prevState)=>({
          value1: numbers[0],
          value2: numbers[1],
          value3: numbers[2],
          proposedAnswer: numbers[3],
          numQuestions: prevState.numQuestions + 1
      }))
    }

    getRandomNumbers(){
      const value1 = Math.floor(Math.random() * 100)
      const value2 = Math.floor(Math.random() * 100)
      const value3 = Math.floor(Math.random() * 100)
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3
      return [value1,value2,value3,proposedAnswer]
    }
  
	render(){
        return (
          <div className="game">
            <h2>Mental Math</h2>
            <div className="equation">
              <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
            </div>
            <button onClick={()=>{this.checkCorrect(true)}}>True</button>
            <button onClick={()=>{this.checkCorrect(false)}}>False</button>
			<Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
          </div>  
      ) 
    }
}

export default Game