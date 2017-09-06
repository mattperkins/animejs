import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Anime from 'react-anime'

class App extends Component {
  constructor() {
    super();
  this.state = {
    name: 'Freddy'
  }
  }

  render() {    
    return (
      <div>
      <Anime easing="easeOutElastic"
         duration={1000}
         direction="alternate"
         loop={true}
         delay={(el, index) => index * 1000}
         translateX='5rem'
         translateY='250'
         easing='linear'
         scale={[.75, .9]}>
            <div className="box"/>
      </Anime>
      <Anime easing="easeOutElastic"
         duration={100}
         direction="alternate"
         loop={true}
         delay={(el, index) => index * 4000}
         translateX='3rem'
         scale={[.75, .9]}>
            <div className="box2"/>
      </Anime>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));

