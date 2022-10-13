import React from 'react';

export default function Footer(props) {
    return (<div>
      {props.person?.map(person => (
        <div key={person.id}>
          <div className="container padding-xtratop text-center capital-letter">
          <h6>©{person.username}, ALL RIGHTS RESERVED</h6>
          </div>
        </div>
      ))}
    </div>
    )
  }
