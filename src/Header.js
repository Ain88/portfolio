import React from 'react';

export default function Header(props) {
    return ( <>
        {props.person?.map(person => (
           <div key={person.id} className="container">
              <div className="row">
                <div className="zoom col-sm-6 align-left">
                <h4 className="head-link"><a href="https://ain88.github.io/portfolio" className="custom-a">{person.username}</a></h4><h4>
                </h4>
                </div>
                <div className="zoom col-sm-6 align-right">
                  <h4 className="head-link"><a href={person.resume} className="custom-a">Resume</a></h4><h4>
                  </h4>
                </div>
              </div>
          </div>
        ))}
      </>
    )
  }
