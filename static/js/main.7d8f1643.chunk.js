(this.webpackJsonpreactcrud=this.webpackJsonpreactcrud||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/emoji.973092b0.jpg"},32:function(e,a,t){e.exports=t(62)},38:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(29),l=t.n(c),o=(t(37),t(38),t(3)),s=t(1),m=t(4),i=t.n(m),u=t(9),p=t(11),d=t(10),E=t.n(d);var b=function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("http://localhost:3010/users");case 2:a=e.sent,console.log(a.data),c(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.delete("http://localhost:3010/users/".concat(a));case 2:l();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"10vh"}},r.a.createElement("table",{className:"table table-hover table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Sr No."),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"User Name"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{className:"text-center"},"Action"))),r.a.createElement("tbody",null,t.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{scope:"row"},a+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/user/".concat(e.id),className:"btn btn-primary mr-2"},"View"),r.a.createElement(o.b,{to:"/edituser/".concat(e.id),className:"btn btn-outline-warning mr-2"},"Edit"),r.a.createElement(o.b,{to:"#",className:"btn btn-outline-danger",onClick:function(){return s(e.id)}},"Delete")))}))))))};var f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card card-header"},r.a.createElement("h1",null,"About CRUD Application ")),r.a.createElement("div",{className:"card card-body"},r.a.createElement("p",null,"CRUD stands for Create, Read, Update, and Delete. But put more simply, in regards to its use in RESTful APIs, CRUD is the standardized use of HTTP Action Verbs. ... Keep in mind there are several different HTTP Action Verbs available, and it's easy to want to incorporate these new verbs and make your API new and different.")))};var v=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(o.b,{className:"navbar-brand",to:"#"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/about"},"About")))),r.a.createElement(o.b,{to:"/adduser",className:"align-right btn btn-outline-light"},"Add User"))},h=t(13),N=t(14);var g=function(){var e=Object(s.f)(),a=Object(n.useState)({name:"",username:"",email:"",phone:"",city:"",website:""}),t=Object(p.a)(a,2),c=t[0],l=t[1],o=c.name,m=c.username,d=c.email,b=c.phone,f=c.city,v=c.website,g=function(e){l(Object(N.a)(Object(N.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))},y=function(){var a=Object(u.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,E.a.post("http://localhost:3010/users",c);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",style:{minHeight:"400px",marginTop:"10%",padding:"2vh",backgroundColor:"#F5F5F5 "}},r.a.createElement("h1",{className:"text-center"},"Add User"),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){return y(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your Name",onChange:function(e){return g(e)},name:"name",value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"username",className:"form-control",placeholder:"Enter Your UserName",onChange:function(e){return g(e)},name:"username",value:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter Your Email_id",onChange:function(e){return g(e)},name:"email",value:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"phno",className:"form-control",placeholder:"Enter Your PhoneNo.",onChange:function(e){return g(e)},name:"phone",value:b})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"website",className:"form-control",placeholder:"Enter Your City",onChange:function(e){return g(e)},name:"city",value:f})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"website",className:"form-control",placeholder:"Enter Your Website Name",onChange:function(e){return g(e)},name:"website",value:v})),r.a.createElement("button",{type:"submit",className:"btn btn-block btn-primary"},"Add User"))))};var y=function(){var e=Object(s.f)(),a=Object(s.g)().id,t=Object(n.useState)({name:"",username:"",email:"",phone:"",city:"",website:""}),c=Object(p.a)(t,2),l=c[0],o=c[1],m=l.name,d=l.username,b=l.email,f=l.phone,v=l.city,g=l.website;Object(n.useEffect)((function(){j()}),[]);var y=function(e){o(Object(N.a)(Object(N.a)({},l),{},Object(h.a)({},e.target.name,e.target.value)))},w=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,E.a.put("http://localhost:3010/users/".concat(a),l);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("running"),e.next=3,E.a.get("http://localhost:3010/users/".concat(a));case 3:t=e.sent,console.log(t.data),o(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",style:{minHeight:"400px",marginTop:"10%",padding:"2vh",backgroundColor:"#F5F5F5 "}},r.a.createElement("h1",{className:"text-center"},"Edit User ",m),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){return w(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your Name",onChange:function(e){return y(e)},name:"name",value:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"username",className:"form-control",placeholder:"Enter Your UserName",onChange:function(e){return y(e)},name:"username",value:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter Your Email_id",onChange:function(e){return y(e)},name:"email",value:b})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"phno",className:"form-control",placeholder:"Enter Your PhoneNo.",onChange:function(e){return y(e)},name:"phone",value:f})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"city",className:"form-control",placeholder:"Enter Your City.",onChange:function(e){return y(e)},name:"city",value:v})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"website",className:"form-control",placeholder:"Enter Your Website Name",onChange:function(e){return y(e)},name:"website",value:g})),r.a.createElement("button",{type:"submit",className:"btn btn-block btn-warning"},"Update User"))))};var w=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:"",city:"",website:""}),a=Object(p.a)(e,2),t=a[0],c=a[1],l=Object(s.g)().id;Object(n.useEffect)((function(){o()}),[0]);var o=function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(" http://localhost:3010/users/".concat(l));case 2:a=e.sent,c(a.data),console.log(a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"constainer"},r.a.createElement("div",{className:"card card-header"},r.a.createElement("h1",null,t.name," Details")),r.a.createElement("div",{className:"card card-body"},r.a.createElement("ul",{className:"list-group w-50"},r.a.createElement("li",{className:"list-group-item"}," Name: ",t.name),r.a.createElement("li",{className:"list-group-item"},"User Name: ",t.username),r.a.createElement("li",{className:"list-group-item"},"Email: ",t.email),r.a.createElement("li",{className:"list-group-item"},"Phone NO. : ",t.phone),r.a.createElement("li",{className:"list-group-item"},"Website: ",t.website),r.a.createElement("li",{className:"list-group-item"},"City: ",t.city))))},j=t(31),x=t.n(j);var O=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("div",null,r.a.createElement("img",{className:"rounded mx-auto d-block",src:x.a})),r.a.createElement("div",null,r.a.createElement("h1",{className:"display-1"},"Page Not Found"),r.a.createElement(o.b,{className:"btn-lg btn-success",to:"/"}," Back To Home")))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(v,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:b}),r.a.createElement(s.a,{exact:!0,path:"/about",component:f}),r.a.createElement(s.a,{exact:!0,path:"/adduser",component:g}),r.a.createElement(s.a,{exact:!0,path:"/edituser/:id",component:y}),r.a.createElement(s.a,{exact:!0,path:"/user/:id",component:w}),r.a.createElement(s.a,{component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7d8f1643.chunk.js.map