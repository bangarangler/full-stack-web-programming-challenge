(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports={loader:"Spinner_loader__3qpwL",load1:"Spinner_load1__2VNPS"}},20:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r),l=(a(26),a(4)),u=a.n(l),i=a(19),s=a(5),m=a(1),f=a(3),p=a.n(f),d=function(e,t){var a=Object(n.useState)(t),o=Object(m.a)(a,2),r=o[0],c=o[1],l=Object(n.useState)(!0),i=Object(m.a)(l,2),f=i[0],d=i[1];return Object(n.useEffect)(function(){!function(){var t=Object(s.a)(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,p.a.get(e,{crossdomain:!0});case 4:200===(a=t.sent).status&&c(a.data),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:return t.prev=11,d(!1),t.finish(11);case 14:case"end":return t.stop()}},t,null,[[0,8,11,14]])}));return function(){return t.apply(this,arguments)}}()()},[e]),{loading:f,data:r}},h=function(e){var t=Object(n.useState)(e),a=Object(m.a)(t,2),o=a[0],r=a[1];return[o,function(e){r(e.target.value)},function(){r("")}]},g=a(7),b=a.n(g),v=function(e){var t=e.generateFactory,a=e.setRoot,r=Object(n.useState)(null),c=Object(m.a)(r,2),l=c[0],i=c[1],f=h(""),d=Object(m.a)(f,3),g=d[0],v=d[1],y=d[2],E=h(void 0),_=Object(m.a)(E,3),N=_[0],w=_[1],F=_[2],O=h(void 0),j=Object(m.a)(O,3),k=j[0],R=j[1],x=j[2],C=h(void 0),S=Object(m.a)(C,3),G=S[0],D=S[1],H=S[2],B=Object(n.useState)([]),L=Object(m.a)(B,2),I=L[0],T=L[1],W=function(e){if(e.preventDefault(),G>15)i("Sorry 15 is the limit!");else if(""===g)i("Factory Name Can Not Be Empty");else{var a=function(){for(var e,t,a=new Array(Number(G)),n=0;n<a.length;n++)a[n]=(e=N,t=k,Math.floor(Math.random()*(Number(t)-Number(e)+1)+Number(e))),console.log(a);return T(a),a}(),n={factName:g,childGen:G,lRange:N,hRange:k,children:a};i(null),t(n),q(a),y(),H(),F(),x()}},q=function(e){console.log(g,G,N,k,I),p.a.post("https://full-stack-web-challenge.herokuapp.com/add-factory",{crossdomain:!0},{factName:g,childGen:G,lRange:N,hRange:k,children:e}).then(function(){var e=Object(s.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),200===t.status){e.next=5;break}return i(t.data),e.next=5,p.a.get("https://full-stack-web-challenge.herokuapp.com/get-factory").then(function(e){console.log("get log: ",e.data),a(e.data)});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){return console.log(e)})};return o.a.createElement("div",{className:b.a.Container},o.a.createElement("form",{className:b.a.Form},o.a.createElement("h3",{className:b.a.formHeading},"Generate your Factory"),o.a.createElement("label",{htmlFor:"factoryName"},"Factory Name"),o.a.createElement("input",{type:"text",name:"factoryName",value:g,placeholder:"Factory Name...",onChange:v}),o.a.createElement("label",{htmlFor:"childToGen"},"How many children should your Factory generate? (Limit 15)"),o.a.createElement("input",{type:"number",name:"childToGen",value:Number(G),placeholder:"Children to generate...",onChange:D}),o.a.createElement("label",{htmlFor:"lowRange"},"Low Range"),o.a.createElement("input",{type:"number",name:"lowRange",value:Number(N),placeholder:"Low Range...",onChange:w}),o.a.createElement("label",{htmlFor:"highRange"},"High Range"),o.a.createElement("input",{type:"number",name:"highRange",value:Number(k),placeholder:"High Range...",onChange:R}),o.a.createElement("button",{className:b.a.GenerateBtn,type:"submit",onClick:function(e){return W(e)}},"Create Factory"),l))},y=function(e){var t=e.factory,a=e.root,r=e.setRoot,c=e.showForm,l=e.setShowForm,u=h(""),i=Object(m.a)(u,2),s=i[0],f=i[1],d=function(e,t){var n;e.preventDefault(),a.map(function(e){return e._id===t&&(n=s,console.log(n),e.factName=n,console.log("updated root?: ",a)),g(t,n),l(!c),n})};console.log(a),Object(n.useEffect)(function(){r(a)},[d]);var g=function(e,t){var a={_id:e,newName:s};console.log("update data: ",a),p.a.put("https://full-stack-web-challenge.herokuapp.com/update-factory",{crossdomain:!0},a).then(function(e){console.log("res, ".concat(e.data))}).catch(function(e){console.log(e)})};return o.a.createElement("form",null,o.a.createElement("input",{type:"text",placeholder:t.factName,name:"update",value:s,onChange:f}),o.a.createElement("button",{onClick:function(e){return d(e,t._id)}},"Update"))},E=a(6),_=a.n(E),N=function(e){var t=e.factory,a=e.root,r=e.setRoot,c=Object(n.useState)(!1),l=Object(m.a)(c,2),u=l[0],i=l[1];console.log("Factory: ",t);var s=function(e){console.log("axiosRemove id: ",e);var t={_id:e};p.a.delete("https://full-stack-web-challenge.herokuapp.com/remove-factory",{crossdomain:!0},{data:t}).then(function(e){console.log("res: ".concat(e.data))}).catch(function(e){console.log(e)})};return o.a.createElement("div",{className:_.a.Wrapper},o.a.createElement("div",{className:_.a.Display},o.a.createElement("p",{className:_.a.Name},o.a.createElement("span",{onClick:function(e){return function(e,n){e.preventDefault();var o=[];a.filter(function(e){return e._id!==t._id&&o.push(e),r(o),console.log("factoryID: ",t._id),s(t._id),null})}(e,t._id)}},"X"),"\xa0 Factory Name: \xa0 ",t.factName,o.a.createElement("span",{onClick:function(){return i(!u)}},"^")),u&&o.a.createElement(y,{factory:t,root:a,setRoot:r,showForm:u,setShowForm:i}),t.children.map(function(e,t){return o.a.createElement("div",{key:t,className:_.a.flex},o.a.createElement("p",{className:_.a.Children},e))})))},w=function(e){var t=e.root,a=e.data,r=e.setRoot;return Object(n.useEffect)(function(){void 0!==a&&r(a)},[a]),o.a.createElement("div",null,t.map(function(e,a){return o.a.createElement(N,{key:a,setRoot:r,root:t,factory:e})}))},F=a(18),O=a.n(F),j=function(){return o.a.createElement("div",{className:O.a.loader},"Loading...")};a(45),a(46);var k=function(){var e=d("https://full-stack-web-challenge.herokuapp.com/get-factory"),t=e.loading,a=e.data;console.log(a);var r=Object(n.useState)([]),c=Object(m.a)(r,2),l=c[0],f=c[1],p=function(){var e=Object(s.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f([].concat(Object(i.a)(l),[t]));case 2:console.log("root",l);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return console.log("root: ",l),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"heading"},o.a.createElement("h1",{className:"headingTitle"},"Root")),o.a.createElement("main",null,o.a.createElement(v,{generateFactory:p,setRoot:f}),o.a.createElement(w,{root:l,data:a,setRoot:f}),t&&o.a.createElement(j,null)))};c.a.render(o.a.createElement(k,null),document.getElementById("root"))},6:function(e,t,a){e.exports={Wrapper:"Factory_Wrapper__1Icie",Display:"Factory_Display__1k5Eq",flex:"Factory_flex__3d634"}},7:function(e,t,a){e.exports={Container:"factoryForm_Container__13wWV",Form:"factoryForm_Form__32Ps7",formHeading:"factoryForm_formHeading__T2OlI",GenerateBtn:"factoryForm_GenerateBtn__28qHM"}}},[[20,1,2]]]);
//# sourceMappingURL=main.850d4ff8.chunk.js.map