(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{12:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(5),i=t.n(c),r=(t(12),t(4),t(1));function l(e){var a=s.a.useState(!1),t=Object(r.a)(a,2),n=t[0],c=t[1];return s.a.useEffect((function(){var e=document.body,a=document.querySelector(".toggle-inner");!0===n?(e.classList.add("dark-mode"),a.classList.add("toggle-active")):(e.classList.remove("dark-mode"),a.classList.remove("toggle-active"))}),[n]),s.a.createElement("header",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},e.person.map((function(e){return s.a.createElement("div",{key:e.id,className:"zoom col-sm-11"},s.a.createElement("h4",{className:"head-link"},s.a.createElement("a",{href:"https://ain88.github.io/portfolio",className:"custom-a"},e.username),s.a.createElement("a",{href:e.resume,className:"custom-a float-right"},"Resume")))})),s.a.createElement("div",{className:"col-sm-1"},s.a.createElement("div",{id:"toggle",onClick:function(){return c(!1===n)}},s.a.createElement("div",{className:"toggle-inner"}))))))}var o=t(6),m=t.n(o);function d(e){var a,t,n,c,i;return s.a.createElement("div",null,s.a.createElement("div",{className:"container padding-xtratop"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6"},null===(a=e.person)||void 0===a?void 0:a.map((function(e){return s.a.createElement("div",{key:e.id},s.a.createElement("h2",{className:"name"},"Hi there, I am ",e.name,"."),s.a.createElement("h2",{className:"desc1"},"I am a ",e.desc1,"."),s.a.createElement("h2",{className:"desc2"},"residing in ",e.desc2,"\xa0 ",s.a.createElement("img",{src:e.flag,alt:"flag",height:30})),s.a.createElement("div",{className:"add-space"}),s.a.createElement("h6",null,e.desc3))})),s.a.createElement("nav",{className:"navbar navbar-expand navbar-custom"},s.a.createElement("ul",{className:"navbar-nav"},null===(t=e.social)||void 0===t?void 0:t.map((function(e){return s.a.createElement("li",{className:"nav-item",key:e.id},s.a.createElement("a",{className:"nav-link icon-custom",href:e.href},s.a.createElement("i",{className:e.className})))}))))),s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("div",{className:"main-img"})))),s.a.createElement("hr",null),s.a.createElement("div",{className:"container padding-xtratop"},s.a.createElement("h2",null,"Recent Projects"),s.a.createElement("div",{className:"row padding-lesstop"},null===(n=e.project)||void 0===n?void 0:n.map((function(e){return s.a.createElement("div",{className:"col-sm-4",key:e.id,style:{paddingLeft:0}},s.a.createElement("a",{href:e.aHref},s.a.createElement("img",{className:"portfolio-img",src:e.imgUrl,alt:""})),s.a.createElement("h6",{className:"padding-littletop"},e.name),s.a.createElement("p",null,e.desc),s.a.createElement("p",null,e.desc2))})))),s.a.createElement("hr",null),s.a.createElement("div",{className:"container padding-xtratop"},s.a.createElement("h2",null,"Skills & Experience"),s.a.createElement("div",{className:"row padding-lessleft"},null===(c=e.skill)||void 0===c?void 0:c.map((function(e){return s.a.createElement("div",{className:"col little-img",key:e.id},s.a.createElement("i",{className:e.icon}),s.a.createElement("br",null))})))),s.a.createElement("hr",null),s.a.createElement("div",{id:"getInTouch",className:"container padding-xtratop"},s.a.createElement("h2",null,"Get in Touch"),null===(i=e.person)||void 0===i?void 0:i.map((function(e){return s.a.createElement("div",{key:e.id},s.a.createElement("div",{className:"row padding-lesstop"},s.a.createElement("h6",null,"Hi there, are you looking to hire ",e.desc1," or have a project in mind? Please email me and lets talk.")),s.a.createElement(m.a,{email:e.email,obfuscate:!0},"Email me!"))}))))}function p(e){var a;return s.a.createElement("div",null,null===(a=e.person)||void 0===a?void 0:a.map((function(e){return s.a.createElement("div",{key:e.id},s.a.createElement("div",{className:"container padding-xtratop text-center capital-letter"},s.a.createElement("h6",null,"\xa9",e.username,", ALL RIGHTS RESERVED")))})))}var u=t(2);t(16);i.a.render(s.a.createElement((function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)([]),o=Object(r.a)(i,2),m=o[0],f=o[1],g=Object(n.useState)([]),v=Object(r.a)(g,2),b=v[0],h=v[1],E=Object(n.useState)([]),y=Object(r.a)(E,2),N=y[0],k=y[1];return Object(n.useEffect)((function(){c(u.person),f(u.social),h(u.project),k(u.skill)}),[]),s.a.createElement("main",null,s.a.createElement(l,{person:t}),s.a.createElement(d,{person:t,social:m,project:b,skill:N}),s.a.createElement(p,{person:t}))}),null),document.getElementById("section"))},2:function(e){e.exports=JSON.parse('{"person":[{"id":1,"username":"Ahyoung In","desc1":"web developer","desc2":"Vancouver, BC","flag":"./img/canada-flag.jpg","resume":"./img/resume.pdf","email":"ahyoung.in@gmail.com","desc3":"I have a passion on web development, design, or creating learning anything new. I have worked and studied in various fields which enhance my characteristics and availability to apply my creativity in web development. Reliability, honesty are my best policy."}],"social":[{"id":1,"href":"https://github.com/Ain88","className":"fab fa-github-alt"},{"id":2,"href":"https://ca.linkedin.com/in/ahyoung-in","className":"fab fa-linkedin"}],"project":[{"id":1,"imgUrl":"img/project-sddocs.png","aHref":"https://docs.sdcloudpos.com","name":"User Manual Web Application","desc":"Asp.net Core, C#, Microsoft SQL, Javascript, Html, Css","desc2":"Built user manual web application and admin page using asp.net core."},{"id":2,"imgUrl":"img/project-ampm-ppc.png","aHref":"https://www.ampmservice.com/ppc-pos","name":"Company Landing Page","desc":"Asp.net Core, C#, Microsoft SQL, Javascript, Html, Css","desc2":"Created company landing page."},{"id":3,"imgUrl":"img/project-vectorca.png","aHref":"https://vector3.ca","name":"Metaverse Website","desc":"Bootstrap, Javascript, Html, Css, Php","desc2":"Website for virtual space (Metaverse)"},{"id":4,"imgUrl":"img/project-cannabis-coupon.png","aHref":"https://www.cannabiscoupons.ca","name":"Cannabis Coupons Website","desc":"Html, Css, Javascript, Mysql","desc2":"Website for Cannabis Coupons."},{"id":5,"imgUrl":"img/project-luxury.png","aHref":"https://dev-luxury-chalets-2019.pantheonsite.io/home/","name":"Luxury Charlets Real Estate","desc":"Wordpress","desc2":"Real estate website using wordpress, modified and applied a theme and plugin accordigly."},{"id":6,"imgUrl":"img/project-ice-cream.png","aHref":"https://icecream-museum.herokuapp.com/","name":"Icecream Museum","desc":"Bootstrap, Html, Css","desc2":"Single page html bootstrap theme displaying information of ice cream museum."},{"id":7,"imgUrl":"img/project-react-portfolio.png","aHref":"https://ain88.github.io/portfolio/","name":"React Portfolio","desc":"React, Bootstrap, Scss, Json","desc2":"Portfolio webpage using react,bootstrap, made it re-usable."},{"id":8,"imgUrl":"img/project-expressfood.png","aHref":"./img/mysql-diagram.png","name":"Express Food Order Diagram","desc":"Mysql","desc2":"Food order system database with class diagram, mysql"},{"id":9,"imgUrl":"img/project-move-groove.png","aHref":"https://move-groove-rails.herokuapp.com/","name":"Move & Groove Activity Tracker","desc":"Ruby on Rails","desc2":"Activity tracker built with Ruby on rails"}],"skill":[{"id":1,"icon":"fab fa-html5 fabfab","name":"Html5"},{"id":2,"icon":"fab fa-css3-alt fabfab","name":"Css5"},{"id":3,"icon":"fab fa-wordpress fabfab","name":"Wordpress"},{"id":4,"icon":"fab fa-js fabfab","name":"Javascript"},{"id":5,"icon":"fab fa-bootstrap fabfab","name":"Bootstrap"},{"id":6,"icon":"fab fa-react fabfab","name":"React"},{"id":7,"icon":"fas fa-database fabfab","name":"Mysql"},{"id":8,"icon":"fab fa-wix fabfab","name":"Wix"}]}')},4:function(e,a,t){},7:function(e,a,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.f84d4e76.chunk.js.map