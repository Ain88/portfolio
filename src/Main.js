import React from 'react';
import Mailto from 'react-protected-mailto';

export default function Main(props) {
     return(
       <div>
       <div className="container padding-xtratop">
         <div className="row">
           <div className="col-sm-6">
           {
           props.person?.map(person => (
             <div key={person.id}>
                 <h2 className="name">Hi there, I am {person.name}.</h2>
                 <h2 className="desc1">I am a {person.desc1}.</h2>
                 <h2 className="desc2">residing in {person.desc2}&nbsp; <img src={person.flag} alt="flag" height={30} />
                 </h2>
                 <div className="add-space"></div>
                 <h6>{person.desc3}</h6>
             </div>
           ))
           }
             <nav className="navbar navbar-expand navbar-custom">
               <ul className="navbar-nav">
                 {
                 props.social?.map(social => (
                      <li className="nav-item" key={social.id}><a className="nav-link icon-custom" href={social.href}><i className={social.className} /></a></li>
                 ))
                 }
               </ul>
             </nav>
           </div>
           <div className="col-sm-6">

             <div className="main-img" />
           </div>
         </div>
       </div>
       <hr />

       <div className="container padding-xtratop">
         <h2>Recent Projects</h2>
         <div className="row padding-lesstop">
           {
           props.project?.map(project => (
             <div className="col-sm-4" key={project.id} style={{paddingLeft: 0}}>
               <a href={project.aHref}><img className="portfolio-img" src={project.imgUrl} alt=""  /></a>
               <h6 className="padding-littletop">{project.name}</h6>
               <p>{project.desc}</p>
               <p>{project.desc2}</p>
             </div>
           ))
           }
        </div>
     </div>
     <hr />

     <div className="container padding-xtratop">
       <h2>Skills &amp; Experience</h2>
       <div className="row padding-lessleft">

           {
           props.skill?.map(skill => (
             <div className="col little-img" key={skill.id}>
               <i className= {skill.icon} /><br />
            </div>
           ))
           }
       </div>
     </div>
     <hr />

     <div id="getInTouch" className="container padding-xtratop">
       <h2>Get in Touch</h2>
         {
         props.person?.map(person => (
           <div key={person.id}>
           <div className="row padding-lesstop">
             <h6>Hi there, are you looking to hire {person.desc1} or have a project in mind? Please email me and lets talk.</h6>
           </div>
           <Mailto email={person.email} obfuscate={true}>
           Email me!
           </Mailto>
           </div>
         ))
         }
        </div>

       </div> );
       }