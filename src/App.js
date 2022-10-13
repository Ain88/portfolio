import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';

export default function App(){
  const [person, setPerson] = useState([]);
  const [social, setSocial] = useState([]);
  const [project, setProject] = useState([]);
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    setPerson(data.person);
    setSocial(data.social);
    setProject(data.project);
    setSkill(data.skill);
  },[]);

  return <div>
    <Header person={person} />
    <Main person={person} social={social} project={project} skill={skill} />
    <Footer person={person} />
  </div>
}
