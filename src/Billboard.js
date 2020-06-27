import React, {Component} from 'react'
import MovieItem from './MovieItem'

class Billboard extends Component{
  
  //probably not the best way
  getUsers(movieID){
  	 var tempArray = this.props.users.filter(user=> {
       for(let profile of this.props.profiles){
          //not being type safe 
          if(profile.favoriteMovieID == movieID && profile.userID == user.id)
            return user;
       }
     })
     if(tempArray.length > 0)
     	return tempArray;
     else
     	return undefined;
  }
  
  render(){
    
    return (
      this.props.movies.map(movie => <MovieItem key={movie.name} movie={movie.name} people={this.getUsers(movie.id)}/>)
    )
  }
  
}

export default Billboard