import React from 'react';

export default function Header(props) {
  const [ darkMode, setDarkMode ] = React.useState(false)

  React.useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    
    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])
  
  return (
    <header>
      <div className="container">
        <div className="row">
          {props.person.map(person => (
              <div key={person.id} className="zoom col-md-11 col-sm-12 col-xs-10">
                <h4 className="head-link">
                  <a href="https://ain88.github.io/portfolio" className="custom-a">{person.username}</a>
                  <a href={person.resume} className="custom-a float-right">Resume</a>
                </h4>
              </div>
          ))}
          <div className="col-md-1 col-sm-0 display-m-0">
            <div 
              id="toggle"
              onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
            >
            <div className="toggle-inner"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
