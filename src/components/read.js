import React from 'react';

import '../App.css';
import Movies from './movies';
import axios from 'axios';

class Read extends React.Component {
  
    state = {
        myMovies:[
                    
        ]
  }
  
  componentDidMount() {
      axios.get('http://localhost:4000/api/movies')
      .then((response)  =>{
        this.setState({myMovies: response.data.movies})
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  
    render() {

  return(
        <div className="App">
          <h2>Hello from Read Component</h2>
          console.log(this.props.movies);
          <Movies myMovies={this.state.myMovies}></Movies>
    </div>
  );
}
}

export default Read;