(this["webpackJsonpartyom-ganev-site"]=this["webpackJsonpartyom-ganev-site"]||[]).push([[0],{18:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return c}));var r="https://artyom-ganev-node.herokuapp.com/api",a="_blank",i="noopener noreferrer",c=[{id:"main",name:"Main",url:""},{id:"about",name:"About",url:"about"},{id:"blog",name:"Blog",url:"blog"},{id:"career",name:"Career",url:"career"},{id:"contacts",name:"Contacts",url:"contacts"}]},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return j}));var r=n(0),a=n.n(r),i=n(53),c=n.n(i),o=function(){return a.a.createElement("div",{className:"flexBox flexGrow-1 flexShrink-1 justifyContentCenter"},a.a.createElement("div",{className:c.a.container}))},u=n(27),s=n(18),l=n(33),f=n.n(l),d=function(){return a.a.createElement("nav",{className:"flexBox ".concat(f.a.container),id:"menu"},s.c.map((function(t){var e=t.id,n=t.name,r=t.url;return a.a.createElement(u.b,{exact:!r,className:f.a.item,activeClassName:f.a.active,to:"/".concat(r),key:e},n)})))},h=n(7),_=n(40),v=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,101))})),p=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,102))})),m=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,103))})),b=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,104))})),g=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,105))})),k=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,106))})),O=function(){return a.a.createElement(_.a,null,a.a.createElement(o,null))},j=function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(O,null)},a.a.createElement(h.d,null,a.a.createElement(h.a,{from:"/main",to:"/"}),a.a.createElement(h.b,{exact:!0,path:"/",component:v}),a.a.createElement(h.b,{exact:!0,path:"/about",component:p}),a.a.createElement(h.b,{exact:!0,path:"/blog",component:m}),a.a.createElement(h.b,{exact:!0,path:"/career",component:b}),a.a.createElement(h.b,{exact:!0,path:"/contacts",component:g}),a.a.createElement(h.b,{component:k})))}},32:function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"b",(function(){return b}));var r=n(55),a=n(9),i=n(0),c=n.n(i),o=n(7),u=n(23),s=n(39),l=n.n(s),f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:l.a.background}),c.a.createElement("div",{className:"flexBox flexColumn ".concat(l.a.container)},c.a.createElement(u.c,null)))},d=function(){return c.a.createElement("header",{className:"flexBox"},c.a.createElement(u.b,null))},h=n(54),_=n.n(h),v=function(){return c.a.createElement("footer",{className:_.a.container},c.a.createElement("span",null,"\xa9 2019 All rights reserved"))},p=function(){return window.innerWidth<=800},m=function(){var t=Object(i.useState)(p()),e=Object(r.a)(t,2),n=e[0],a=e[1];return Object(i.useEffect)((function(){var t=function(){return a(p())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}})),n},b=c.a.createContext(p()),g=Object(a.a)(),k=function(){return c.a.createElement(o.c,{history:g},c.a.createElement("div",{className:"flexBox flexColumn"},c.a.createElement(d,null),c.a.createElement(b.Provider,{value:m()},c.a.createElement(f,null)),c.a.createElement(v,null)))}},33:function(t,e,n){t.exports={container:"Menu_container__2LEBm",item:"Menu_item__2Bzvu",active:"Menu_active__1jdPM"}},34:function(t,e,n){t.exports={container:"Container_container__TNVcx",wide:"Container_wide__3aM1A",narrow:"Container_narrow__T0gNU"}},39:function(t,e,n){t.exports={background:"Content_background__Tyx3y",container:"Content_container__CGP1h"}},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(0),a=n.n(r),i=n(28),c=n(32),o=n(23),u=n(41),s=n(34),l=n.n(s),f=function(t){var e=t.children,n=t.title,s=Object(i.d)(u.c),f=Object(r.useContext)(c.b),d="flexBox flexColumn ".concat(l.a.container," ").concat(f?l.a.narrow:l.a.wide);return s?a.a.createElement("div",{className:d},a.a.createElement(o.a,null)):a.a.createElement("div",{className:d},n&&a.a.createElement("h2",null,n),e)}},41:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var r=function(t){return t.app.loading},a=function(t){return t.blog.items},i=function(t){return t.career.items}},53:function(t,e,n){t.exports={container:"LoadingIndicator_container__16UZJ"}},54:function(t,e,n){t.exports={container:"Footer_container__2RXZy"}},57:function(t,e,n){t.exports=n(87)},6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"h",(function(){return o})),n.d(e,"j",(function(){return u})),n.d(e,"i",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"k",(function(){return h})),n.d(e,"m",(function(){return _})),n.d(e,"l",(function(){return v}));var r="APP_LOADING",a="BLOG_LOAD_LIST",i="".concat(a,"_SUCCESS"),c="".concat(a,"_ERROR"),o=function(){return{type:a}},u=function(t){return{type:i,items:t}},s=function(t){return{type:c,error:t}},l="CAREER_LOAD_LIST",f="".concat(l,"_SUCCESS"),d="".concat(l,"_ERROR"),h=function(){return{type:l}},_=function(t){return{type:f,items:t}},v=function(t){return{type:d,error:t}}},86:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(29),c=n.n(i),o=n(28),u=n(32),s=n(16),l=n(56),f=n(17),d=n(6),h={loading:!1},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d.a:var n=e.loading;return Object(f.a)({},t,{loading:n});case d.b:case d.e:return Object(f.a)({},t,{loading:!0});case d.d:case d.c:case d.g:case d.f:return Object(f.a)({},t,{loading:!1});default:return t}},v={items:[],detail:{},error:""},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d.d:var n=e,r=n.items;return Object(f.a)({},t,{items:r});case d.c:var a=e.error;return Object(f.a)({},t,{error:a});default:return t}},m={items:[],detail:{},error:""},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d.g:var n=e,r=n.items;return Object(f.a)({},t,{items:r});case d.f:var a=e.error;return Object(f.a)({},t,{error:a});default:return t}},g=Object(s.c)({app:_,blog:p,career:b}),k=n(5),O=n.n(k),j=n(15),y=n(13),w=n(14),E=n(19),x=n(20),D=function(){function t(e,n){Object(y.a)(this,t),this._id="",this._title="",this._id=e,this._title=n}return Object(w.a)(t,[{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title}}]),t}(),C=n(21),N=n.n(C),M=function(){function t(){Object(y.a)(this,t),this._id="",this._title=""}return Object(w.a)(t,[{key:"id",value:function(t){return this._id=t,this}},{key:"title",value:function(t){return this._title=t,this}}]),t}(),L=function(t){Object(x.a)(n,t);var e=Object(E.a)(n);function n(){var t;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a)))._link="",t._linkCaption="",t._date=N()(),t}return Object(w.a)(n,[{key:"date",value:function(t){return this._date=N.a.utc(t,"YYYY-MM-DD"),this}},{key:"link",value:function(t){return this._link=t,this}},{key:"linkCaption",value:function(t){return this._linkCaption=t,this}},{key:"build",value:function(){return new S(this._id,this._title,this._date,this._link,this._linkCaption)}}]),n}(M),S=function(t){Object(x.a)(n,t);var e=Object(E.a)(n);function n(t,r,a,i,c){var o;return Object(y.a)(this,n),(o=e.call(this,t,r))._date=void 0,o._link=void 0,o._linkCaption=void 0,o._date=a,o._link=i,o._linkCaption=c,o}return Object(w.a)(n,[{key:"formatDate",value:function(){return this.date.format("Do MMMM YYYY")}},{key:"date",get:function(){return this._date}},{key:"link",get:function(){return this._link}},{key:"linkCaption",get:function(){return this._linkCaption}}],[{key:"create",value:function(){return new L}}]),n}(D),Y=function(t){Object(x.a)(n,t);var e=Object(E.a)(n);function n(){var t;Object(y.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a)))._description="",t._post="",t._site="",t._tools="",t._startDate=N()(),t._endDate=N()(),t}return Object(w.a)(n,[{key:"post",value:function(t){return this._post=t,this}},{key:"description",value:function(t){return this._description=t,this}},{key:"site",value:function(t){return this._site=t,this}},{key:"tools",value:function(t){return this._tools=t,this}},{key:"startDate",value:function(t){return this._startDate=N.a.utc(t),this}},{key:"endDate",value:function(t){return this._endDate=N.a.utc(t),this}},{key:"build",value:function(){return new B(this._id,this._title,this._description,this._post,this._site,this._tools,this._startDate,this._endDate)}}]),n}(M),B=function(t){Object(x.a)(n,t);var e=Object(E.a)(n);function n(t,r,a,i,c,o,u,s){var l;return Object(y.a)(this,n),(l=e.call(this,t,r))._description=void 0,l._post=void 0,l._site=void 0,l._tools=void 0,l._startDate=void 0,l._endDate=void 0,l._description=a,l._post=i,l._site=c,l._tools=o,l._startDate=u,l._endDate=s,l}return Object(w.a)(n,[{key:"formatDates",value:function(){if(this._startDate.isValid()){var t=this._startDate.format("MMMM YYYY");return this._endDate.isValid()?"".concat(t," - ").concat(this._endDate.format("MMMM YYYY")):"Since ".concat(t)}return""}},{key:"post",get:function(){return this._post}},{key:"description",get:function(){return this._description}},{key:"site",get:function(){return this._site}},{key:"tools",get:function(){return this._tools}},{key:"startDate",get:function(){return this._startDate}},{key:"endDate",get:function(){return this._endDate}}],[{key:"create",value:function(){return new Y}}]),n}(D),R=function(t){var e=t._id,n=t.date,r=t.link,a=t.linkCaption,i=t.title;return S.create().date(n).link(r).linkCaption(a).title(i).id(e).build()},A=function(t){return t.map(R)},T=n(24),z=n(25),I=n.n(z),U=n(18),W=function(){var t=Object(T.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",I.a.get("".concat(U.a,"/blog")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=O.a.mark(X),V=O.a.mark(G);function X(){var t,e,n,r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(j.b)(W);case 3:return t=a.sent,e=t.data,n=A(e),a.next=8,Object(j.c)(Object(d.j)(n));case 8:a.next=16;break;case 10:return a.prev=10,a.t0=a.catch(0),r=a.t0.message,console.log("blogLoadListError: ".concat(r)),a.next=16,Object(j.c)(Object(d.i)(r));case 16:case"end":return a.stop()}}),P,null,[[0,10]])}function G(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.d)(d.b,X);case 2:case"end":return t.stop()}}),V)}var J=G,F=function(t){var e=t._id,n=t.title,r=t.description,a=t.post,i=t.site,c=t.tools,o=t.startDate,u=t.endDate;return B.create().description(r).post(a).site(i).tools(c).startDate(o).endDate(u).title(n).id(e).build()},Z=function(t){return t.map(F)},Q=function(){var t=Object(T.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",I.a.get("".concat(U.a,"/career")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),$=O.a.mark(H),q=O.a.mark(K);function H(){var t,e,n,r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(j.b)(Q);case 3:return t=a.sent,e=t.data,n=Z(e),a.next=8,Object(j.c)(Object(d.m)(n));case 8:a.next=16;break;case 10:return a.prev=10,a.t0=a.catch(0),r=a.t0.message,console.log("careerLoadListError: ".concat(r)),a.next=16,Object(j.c)(Object(d.l)(r));case 16:case"end":return a.stop()}}),$,null,[[0,10]])}function K(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.d)(d.e,H);case 2:case"end":return t.stop()}}),q)}var tt=K,et=O.a.mark(nt);function nt(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)([J(),tt()]);case 2:case"end":return t.stop()}}),et)}var rt=Object(l.a)(),at=Object(s.e)(g,Object(s.d)(Object(s.a)(rt),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t}));rt.run(nt);var it=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}n(86);c.a.render(a.a.createElement(o.a,{store:at},a.a.createElement(u.a,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");it?(!function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):ct(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ct(t)}))}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.898c0abe.chunk.js.map