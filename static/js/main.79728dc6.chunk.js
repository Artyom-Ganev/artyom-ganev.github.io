(this["webpackJsonpartyom-ganev.github.io"]=this["webpackJsonpartyom-ganev.github.io"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"data":[{"key":"0","value":"E-mail","link":"mailto:a.a.ganev@gmail.com","title":"a.a.ganev@gmail.com"},{"key":"1","value":"Facebook","link":"https://www.facebook.com/artyom.ganev","title":"artyom.ganev"},{"key":"2","value":"VK","link":"https://vk.com/a.a.ganev","title":"a.a.ganev"},{"key":"3","value":"GitHub","link":"https://github.com/Artyom-Ganev/","title":"Artyom-Ganev"},{"key":"4","value":"Hexlet","link":"https://ru.hexlet.io/u/artyom_ganev?ref=5328","title":"artyom_ganev"},{"key":"5","value":"LinkedIn","link":"https://www.linkedin.com/in/artem-ganev-185b38192","title":"artem-ganev-185b38192"}]}')},33:function(e){e.exports=JSON.parse('{"data":[{"key":"0","title":"Tensor ltd.","dates":["2017-02",""],"post":"Web developer, team lead.","description":"","tools":"TypeScript, Less, Git, JavaScript, CSS, HTML","site":"https://tensor.ru"},{"key":"1","dates":["2015-01","2017-02"],"title":"Scientific and Production Association \'Krista\'","post":"Java developer.","description":"","tools":"Java 7/8, JBoss Server, JBPM, Drools, Maven, Mercurial","site":"https://www.krista.ru"},{"key":"2","dates":["2011-06","2014-12"],"post":"Software implementation specialist","description":"","tools":"SQL, Delphi, Oracle, Yaffil, Firebird, Redmine"},{"key":"3","dates":["2010-02","2011-05"],"title":"Business Service ltd.","post":"Accountant economist and sysadmin","description":"","tools":"Joomla"},{"key":"4","dates":["2009-05","2009-08"],"title":"Cetera Labs","post":"Tester","description":"","tools":"Cetera CMS, Cetera ecommerce, Selenium, SVN, Jira","site":"https://cetera.ru/"}]}')},34:function(e,t,a){e.exports=a.p+"static/media/artyom.bbb441b2.jpg"},35:function(e,t,a){e.exports=a(70)},40:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),i=a.n(o),c=a(9),s=a(8),l=(a(40),a(41),function(){return r.a.createElement("div",{className:"flexBox nav-menu__root",id:"menu"},r.a.createElement(c.b,{className:"nav-menu__item",to:"/"},"Main"),r.a.createElement(c.b,{className:"nav-menu__item",to:"/blog"},"Blog"),r.a.createElement(c.b,{className:"nav-menu__item",to:"/careers"},"Careers"),r.a.createElement(c.b,{className:"nav-menu__item",to:"/contacts"},"Contacts"))}),m=a(6),u=a(5),v=a(13),d=a(12),p=a(14),f=a(18),g=a.n(f),h=function(){function e(){Object(m.a)(this,e),this.cache=void 0,this.cache=new Map}return Object(u.a)(e,null,[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),Object(u.a)(e,[{key:"set",value:function(e,t){var a=(new Date).getTime();this.cache.set(e,{value:t,date:a})}},{key:"get",value:function(e){var t=this.cache.get(e);return t?t.value:void 0}}]),e}();h.instance=void 0;var y="https://shielded-brushlands-46595.herokuapp.com/blog/",k={headers:{"x-requested-with":"xhr"}},b=h.getInstance(),w=function(){function e(){Object(m.a)(this,e)}return Object(u.a)(e,null,[{key:"getList",value:function(){var e=b.get("blog");return e?Promise.resolve(e):new Promise((function(e){g.a.get(y,k).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},a=t.data;b.set("blog",a),e(a)})).catch((function(){return e([])}))}))}},{key:"getById",value:function(e){return new Promise((function(t){g.a.get("".concat(y,"/").concat(e),k).then((function(e){t(e.data||null)})).catch((function(){return t()}))}))}}]),e}(),E="_blank",_="noopener noreferrer",N=function(){function e(){Object(m.a)(this,e)}return Object(u.a)(e,null,[{key:"parseDateFromString",value:function(e){if(!e)return null;var t=e.split("-"),a=t[0],n=t[1],r=t[2]||"1";return a&&n?new Date(parseInt(a,10),parseInt(n,10)-1,parseInt(r,10)):null}},{key:"format",value:function(t){var a=e.parseDateFromString(t);return a?new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"long",year:"numeric"}).format(a):""}}]),e}(),S=(a(64),a(65),function(){return window.innerWidth<=800}),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={narrow:S()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e="flexBox flexColumn page-container__root".concat(this.state.narrow?"--narrow":"");return r.a.createElement("div",{className:e},this.props.title&&r.a.createElement("h2",null,this.props.title),r.a.createElement("div",null,this.props.content))}},{key:"onResize",value:function(){var e=S();this.state.narrow!==e&&this.setState({narrow:e})}}]),t}(r.a.Component),j=function(e,t){return(N.parseDateFromString("".concat(e.year,"-").concat(e.month,"-").concat(e.day))||new Date)<(N.parseDateFromString("".concat(t.year,"-").concat(t.month,"-").concat(t.day))||new Date)?1:-1},B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.getList().then((function(t){e.setState({items:t})}))}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"flexBox flexColumn"},this.getItems());return r.a.createElement(x,{title:"Blog",content:e})}},{key:"getItems",value:function(){return this.state.items.sort(j).map((function(e){return r.a.createElement("div",{key:e.id,className:"page-blog__itemContainer"},r.a.createElement("div",{className:"page-blog__title"},N.format("".concat(e.year,"-").concat(e.month,"-").concat(e.day))),r.a.createElement("div",{className:"page-blog__item"},e.title),r.a.createElement("a",{href:e.link,target:E,rel:_},e.linkCaption))}))}}]),t}(r.a.Component),C=a(33),O=(a(66),{month:"long",year:"numeric"}),D=C.data.map((function(e){return r.a.createElement("div",{key:e.key,className:"page-careers__item"},(t=e.site,a=e.title,t?r.a.createElement("a",{href:t,target:E,rel:_},r.a.createElement("h3",{className:"page-careers__title"},a)):r.a.createElement("h3",{className:"page-careers__title"},a)),r.a.createElement("div",{className:"page-careers__dates"},function(e){var t=N.parseDateFromString(e[0]),a=N.parseDateFromString(e[1]);if(t){var n=t.toLocaleDateString("en-US",O);return a?"".concat(n," - ").concat(a.toLocaleDateString("en-US",O)):"Since ".concat(n)}return""}(e.dates)),r.a.createElement("div",{className:""},e.post),r.a.createElement("div",{className:""},e.description),r.a.createElement("div",{className:"flexBox flexColumn"},r.a.createElement("div",{className:""},e.tools)));var t,a})),I=r.a.createElement("div",{className:"flexBox flexColumn"},D),L=function(){return r.a.createElement(x,{title:"Careers",content:I})},A=a(19),J=(a(67),A.data.map((function(e){return r.a.createElement("div",{key:e.key},e.value,":\xa0")}))),M=A.data.map((function(e){return r.a.createElement("div",{key:e.key},r.a.createElement("a",{href:e.link,target:E,rel:_},e.title))})),F=r.a.createElement("div",{className:"flexBox alignItemsBaseline justifyContentBetween page-contacts__root"},r.a.createElement("div",null,J),r.a.createElement("div",{className:"page-contacts__item"},M)),T=function(){return r.a.createElement(x,{title:"Contacts and Social",content:F})},R=a(34),G=a.n(R),W=(a(68),"https://github.com/Artyom-Ganev/artyom-ganev-server"),H="https://github.com/Artyom-Ganev/artyom-ganev-src",P="https://en.wikipedia.org/wiki/Rybinsk",z="page-main__contentBlock",U=r.a.createElement("div",{className:"page-main__root"},r.a.createElement("img",{className:"page-main__image",src:G.a,alt:"Artyom",title:"artyom.jpg"}),r.a.createElement("h2",{className:z},"Hi! My name is Artyom."),r.a.createElement("div",{className:z},"I'm a programmer, based in\xa0",r.a.createElement("a",{href:P,target:E,rel:_},"Rybinsk"),",\xa0Russia. There are some facts about me on this site."),r.a.createElement("div",{className:z},"You can contact me if you have some ideas for it's improvement or have found bugs, typos etc. I'm still working on it."),r.a.createElement("div",{className:z},"Frontend of this site is based on React, TypeScript and Sass, the sources of this part are located on GitHub\xa0",r.a.createElement("a",{href:H,target:E,rel:_},"here"),"."),r.a.createElement("div",{className:z},"Backend uses Spring Boot, Maven, Heroku and PostgreSQL and is located\xa0",r.a.createElement("a",{href:W,target:E,rel:_},"here"),".")),Q=function(){return r.a.createElement(x,{content:U})},K=(a(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function V(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement((function(){return r.a.createElement(c.a,null,r.a.createElement(l,null),r.a.createElement("div",{className:"components-app__background"}),r.a.createElement("div",{className:"flexBox flexColumn components-app__content"},r.a.createElement(s.a,{exact:!0,path:"/",component:Q}),r.a.createElement(s.a,{path:"/blog",component:B}),r.a.createElement(s.a,{path:"/careers",component:L}),r.a.createElement(s.a,{path:"/contacts",component:T})),r.a.createElement("div",{className:"components-app__rights"},"\xa9 2019 All rights reserved"))}),null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");K?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):V(e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.79728dc6.chunk.js.map