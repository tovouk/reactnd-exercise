import React, {Component} from 'react'

class MovieItem extends Component {
  
  render(){
    console.log(this.props)
    var returnContent;
    if(this.props.people){
     	returnContent = (<div><p>Liked by:</p><ul>
                         {this.props.people.map(person => <li key={person.name}>{person.name}</li>)}
                         </ul></div>)
    }else{
    	returnContent = <p>None of the current users liked this movie</p>
    }
    
   return (<div><h2>{this.props.movie}</h2>{returnContent}</div>)
  }
  
}

export default MovieItem