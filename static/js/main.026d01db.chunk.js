(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},15:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(8),r=t.n(l),c=(t(15),t(7),t(1)),s=t(2),m=t(4),o=t(3),d=t(5),u=[{id:1,name:"Ahyoung In",desc1:"web developer",desc2:"Vancouver, BC",flag:"./img/canada-flag.jpg",resume:"./img/resume.pdf",email:"ahyoung.in@hotmail.com",desc3:"I have a passion on web development, design, or creating learning anything new. I have worked and studied in various fields which enhance my characteristics and availability to apply my creativity in web development. Reliability, honesty are my best policy."}],p=[{id:1,href:"https://github.com/Ain88",className:"fab fa-github-alt"},{id:2,href:"https://ca.linkedin.com/in/ahyoung-in-315073159",className:"fab fa-linkedin"}],f=[{id:1,imgUrl:"img/project-film-festival.png",aHref:"https://ain88.github.io/film-festival/",name:"Boston Film Festival",desc:"Html, Css, Web design",desc2:"Built film festival website using bootstrap/html/css."},{id:2,imgUrl:"img/project-luxury.png",aHref:"https://dev-luxury-chalets-2019.pantheonsite.io/home/",name:"Luxury Charlets",desc:"Wordpress, Web development",desc2:"Real estate website using wordpress, modified and applied a theme and plugin accordigly."},{id:3,imgUrl:"img/project-ice-cream.png",aHref:"https://icecream-museum.herokuapp.com/",name:"Icecream Museum",desc:"Bootstrap, Web page design",desc2:"Single page html bootstrap theme displaying information of ice cream museum."},{id:4,imgUrl:"img/project-react-portfolio.png",aHref:"https://ain88.github.io/portfolio/",name:"Portfolio",desc:"React, Bootstrap",desc2:"Portfolio webpage using react,bootstrap, made it re-usable."},{id:5,imgUrl:"img/project-expressfood.png",aHref:"./img/mysql-diagram.png",name:"Express Food Order",desc:"Mysql",desc2:"Food order system database with class diagram, mysql"},{id:6,imgUrl:"img/project-move-groove.png",aHref:"https://move-groove-rails.herokuapp.com/",name:"Move & Groove",desc:"Ruby on Rails",desc2:"Activity tracker built with Ruby on rails"}],h=[{id:1,icon:"fab fa-html5 fabfab",name:"Html5"},{id:2,icon:"fab fa-css3-alt fabfab",name:"Css5"},{id:3,icon:"fab fa-wordpress fabfab",name:"Wordpress"},{id:4,icon:"fab fa-js fabfab",name:"Javascript"},{id:5,icon:"fab fa-bootstrap fabfab",name:"Bootstrap"},{id:6,icon:"fab fa-react fabfab",name:"React"},{id:7,icon:"fas fa-database fabfab",name:"Mysql"},{id:8,icon:"fab fa-wix fabfab",name:"Wix"}],b=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={person:u},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.person;return i.a.createElement("div",null,i.a.createElement("div",{className:"container"},e.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"zoom col-sm-6 align-left"},i.a.createElement("h4",{className:"head-link"},i.a.createElement("a",{href:"https://ain88.github.io/portfolio/",className:"custom-a"},e.name)),i.a.createElement("h4",null)),i.a.createElement("div",{className:"zoom col-sm-6 align-right"},i.a.createElement("h4",{className:"head-link"},i.a.createElement("a",{href:e.resume,className:"custom-a"},"Resume")),i.a.createElement("h4",null))))}))))}}]),a}(i.a.Component),g=t(9),v=t.n(g),E=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={person:u,social:p,project:f,skill:h},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.person,t=e.social,n=e.project,l=e.skill;return i.a.createElement("div",null,i.a.createElement("div",{className:"container padding-xtratop"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6"},a.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("h2",{className:"name"},"Hi there, I am ",e.name,"."),i.a.createElement("h2",{className:"desc1"},"I am a ",e.desc1,"."),i.a.createElement("h2",{className:"desc2"},"residing in ",e.desc2,"\xa0 ",i.a.createElement("img",{src:e.flag,alt:"flag",height:45})),i.a.createElement("div",{className:"add-space"}),i.a.createElement("h6",null,e.desc3))})),i.a.createElement("nav",{className:"navbar navbar-expand navbar-custom"},i.a.createElement("ul",{className:"navbar-nav"},t.map((function(e){return i.a.createElement("li",{className:"nav-item",key:e.id},i.a.createElement("a",{className:"nav-link icon-custom",href:e.href},i.a.createElement("i",{className:e.className})))}))))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",{className:"main-img"})))),i.a.createElement("hr",null),i.a.createElement("div",{className:"container padding-xtratop"},i.a.createElement("h2",null,"Recent Projects"),i.a.createElement("div",{className:"row padding-lesstop"},n.map((function(e){return i.a.createElement("div",{className:"col-sm-4",key:e.id,style:{paddingLeft:0}},i.a.createElement("a",{href:e.aHref},i.a.createElement("img",{className:"portfolio-img",src:e.imgUrl,alt:""})),i.a.createElement("h6",{className:"padding-littletop"},e.name),i.a.createElement("p",null,e.desc),i.a.createElement("p",null,e.desc2))})))),i.a.createElement("hr",null),i.a.createElement("div",{className:"container padding-xtratop"},i.a.createElement("h2",null,"Skills & Experience"),i.a.createElement("div",{className:"row padding-lessleft"},l.map((function(e){return i.a.createElement("div",{className:"col little-img",key:e.id},i.a.createElement("i",{className:e.icon}),i.a.createElement("br",null))})))),i.a.createElement("hr",null),i.a.createElement("div",{className:"container padding-xtratop"},i.a.createElement("h2",null,"Get in Touch"),a.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("div",{className:"row padding-lesstop"},i.a.createElement("h6",null,"Hi there, are you looking to hire ",e.desc1," or have a project in mind? Please email me and lets talk.")),i.a.createElement(v.a,{email:e.email,obfuscate:!0},"Email me!"))}))))}}]),a}(i.a.Component),y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={person:u},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.person;return i.a.createElement("div",null,e.map((function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("div",{className:"container padding-xtratop text-center capital-letter"},i.a.createElement("h6",null,"\xa9",e.name,", ALL RIGHTS RESERVED")))})))}}]),a}(i.a.Component),N=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,null),i.a.createElement(E,null),i.a.createElement(y,null))}}]),a}(i.a.Component);t(19);r.a.render(i.a.createElement(N,null),document.getElementById("section"))},7:function(e,a,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.026d01db.chunk.js.map