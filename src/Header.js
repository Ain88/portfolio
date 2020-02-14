import React from 'react';
import {person} from './data.js';

class Header extends React.Component {
  constructor(props){
       super(props);
       this.state = {
           person : person,
       };
   }
  render() {
    const {person} = this.state;
    return ( <div>
      <div className="container">
        {
        person.map(person => (
          <div key={person.id}>
          <div className="row">
          <div className="zoom col-sm-6 align-left">
            <h4 className="head-link"><a href="https://ain88.github.io/" className="custom-a">{person.name}</a></h4><h4>
            </h4></div>
          <div className="zoom col-sm-6 align-right">
            <h4 className="head-link"><a href={person.resume} className="custom-a">Resume</a></h4><h4>
            </h4></div>
            </div>
            </div>
        ))
        }
      </div>
    </div>
    );
  }
}

export default Header;
