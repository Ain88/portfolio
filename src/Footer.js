import React from 'react';
import {person} from './data.js';

class Footer extends React.Component {
  constructor(props){
       super(props);
       this.state = {
           person : person,
       };
   }
  render() {
    const {person} = this.state;
    return ( <div>
      {
      person.map(person => (
        <div key={person.id}>
          <div className="container padding-xtratop text-center capital-letter">
          <h6>©{person.name}, ALL RIGHTS RESERVED</h6>
          </div>
        </div>
      ))
      }
    </div>
    );
  }
}

export default Footer;
