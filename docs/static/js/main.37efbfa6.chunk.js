(this["webpackJsonpmeta-ui"]=this["webpackJsonpmeta-ui"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports={app:"App_app__19O7e",header:"App_header__aow5j",main:"App_main__2uj_m",page:"App_page__38t76"}},,function(e,n,t){e.exports={card:"Card_card__fWgo5",isExpandable:"Card_is-expandable__ATcee",body:"Card_body__3yUc7",isExpanded:"Card_is-expanded__pUvNj",title:"Card_title__DWLMt"}},,,,,function(e,n,t){e.exports={columns:"Column_columns__2L1jO",column:"Column_column__2ykxZ"}},,,function(e,n,t){},function(e,n,t){e.exports={header:"Tabs_header__xydOr"}},,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),a=t.n(c),i=t(16),u=t.n(i),o=t(8),s=t.n(o),l=t(3),d=t(2),j=t(4);function v(e){var n=e.children,t=Object(j.a)(e,["children"]);return Object(r.jsx)("form",Object(d.a)(Object(d.a)({},t),{},{children:n}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return{type:"Unit",value:e}}var h={type:"Boolean"};var b={type:"String"};function O(e){return{type:"Record",fields:Object.entries(e).map((function(e){var n=Object(l.a)(e,2);return{name:n[0],schema:n[1]}}))}}function m(e){return{type:"Variant",cases:Object.entries(e).map((function(e){var n=Object(l.a)(e,2);return{name:n[0],schema:n[1]}}))}}function p(e){return{type:"Sequence",schema:e}}var y=t(7),x=t(20),g=t(5),w=t(12),k=t(13),S=t(6),_=t.n(S);t(26);function C(e){var n=e.className,t=e.children,c=Object(j.a)(e,["className","children"]);return Object(r.jsx)("div",Object(d.a)(Object(d.a)({className:_()("control",n)},c),{},{children:t}))}function N(e){var n=e.errors,t=e.children,c=null!=n&&0!==n.length;return Object(r.jsxs)(C,{className:_()({"is-danger":c}),children:[t,c&&Object(r.jsx)("ul",{className:"messages",children:n&&n.map((function(e,n){return Object(r.jsx)("li",{children:e},n)}))})]})}t(27);function E(e){var n=e.value,t=e.onChange,c=void 0===t?function(){}:t,a=Object(j.a)(e,["value","onChange"]);return Object(r.jsx)("div",{children:Object(r.jsx)("input",Object(d.a)({type:"text",className:"text-input",value:n,onChange:function(e){return c(e.target.value)}},a))})}t(28);function A(e){var n=e.values,t=e.value,c=e.onChange,a=void 0===c?function(){}:c,i=e.allowEmpty,u=void 0!==i&&i,o=function(e){return function(){e===t?u&&a(void 0):a(e)}};return Object(r.jsx)("div",{className:"toggle-group",children:n.map((function(e){return Object(r.jsx)("span",{className:_()("toggle",{"is-toggled":e===t}),onClick:o(e),children:e},e)}))})}function I(e){return e.join(".")}function T(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return 0===t.length?e:[].concat(Object(y.a)(e),t)}var V=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(w.a)(this,e),this.path=void 0,this.key=void 0,this.path=n,this.key=I(n)}return Object(k.a)(e,[{key:"down",value:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return new e(T.apply(void 0,[this.path].concat(t)))}}]),e}(),F=function(){function e(n,t){Object(w.a)(this,e),this.state=void 0,this.setState=void 0,this.state=n,this.setState=t}return Object(k.a)(e,[{key:"get",value:function(e){return this.state[e.key]}},{key:"set",value:function(n,t){this.mutate(e.set(n,t))}},{key:"setMany",value:function(n){this.mutate(e.setMany(n))}},{key:"remove",value:function(n){this.mutate(e.remove(n))}},{key:"removeAll",value:function(n){this.mutate(e.removeAll(n))}},{key:"update",value:function(n,t){this.mutate(e.update(n,t))}},{key:"modify",value:function(n,t){this.mutate(e.modify(n,t))}},{key:"mutate",value:function(){for(var e=this.state,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];for(var c=0,a=t;c<a.length;c++){var i=a[c];e=i(e)}this.setState(e)}}],[{key:"set",value:function(n,t){return e.modify(n,(function(){return t}))}},{key:"setMany",value:function(e){return function(n){return Object(d.a)(Object(d.a)({},n),e)}}},{key:"remove",value:function(n){return e.modify(n,(function(){}))}},{key:"removeAll",value:function(e){return function(n){for(var t=Object(d.a)({},n),r=0,c=Object.keys(t);r<c.length;r++){var a=c[r];a.startsWith(e.key)&&delete t[a]}return t}}},{key:"update",value:function(n,t){return e.modify(n,(function(){return t}))}},{key:"modify",value:function(e,n){return function(t){var r=n(t[e.key]);if(null!=r)return Object(d.a)(Object(d.a)({},t),{},Object(g.a)({},e.key,r));var c=e.key;t[c];return Object(j.a)(t,[c].map(x.a))}}}]),e}(),R=function(){var e=0,n=function(){var n=e;return e+=1,n};return{next:n}}();function U(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function c(e,a){var i,u,o=n.get(a);function s(e){n.update(a,e)}switch(e.type){case"Unit":return null;case"Boolean":return Object(r.jsx)(N,{errors:t[a.key],children:Object(r.jsx)(A,{values:["True","False"],value:o,onChange:s,allowEmpty:!0})});case"Enumeration":return Object(r.jsx)(N,{errors:t[a.key],children:Object(r.jsx)(A,{values:e.values,value:o,onChange:s,allowEmpty:!0})});case"String":return Object(r.jsx)(N,{errors:t[a.key],children:Object(r.jsx)(E,{value:null!==o&&void 0!==o?o:"",onChange:s})});case"Record":return Object(r.jsx)("div",{children:e.fields.map((function(e){var n=e.name,t=e.schema;if("Unit"===t.type)return null;var i=a.down(n);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:n}),c(t,i)]},i.key)}))});case"Variant":var l=a.down("type"),d=n.get(l),j=null===(i=e.cases.find((function(e){return e.name===d})))||void 0===i?void 0:i.schema;return Object(r.jsxs)("div",{children:[Object(r.jsx)(A,{values:e.cases.map((function(e){return e.name})),value:d,onChange:function(e){return n.update(l,e)}}),d&&j&&c(j,a.down(d))]});case"Sequence":var v=a.down("ids"),f=null!==(u=n.get(v))&&void 0!==u?u:[],h=function(e){return function(){n.mutate(F.set(v,f.filter((function(n){return n!==e}))),F.removeAll(a.down(e)))}};return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",onClick:function(){return n.set(v,[].concat(Object(y.a)(f),[R.next()]))},children:"Add"}),f.map((function(n){var t=a.down(n);return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",onClick:h(n),children:"Remove"}),c(e.schema,t)]},t.key)}))]});case"Lazy":return c(e.getSchema(),a)}}return c(e,new V)}var L=t(17);function B(e){return{type:"Valid",value:e}}function M(e){return{type:"Invalid",error:e}}function P(e,n){switch(e.type){case"Valid":return B(n(e.value));case"Invalid":return e}}function q(e,n){return[].concat(Object(y.a)(e),Object(y.a)(n))}function J(e,n){return Object(d.a)(Object(d.a)({},e),n)}function D(){return q}function z(e,n){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D(),c=[],a=[],i=Object(L.a)(e);try{for(i.s();!(t=i.n()).done;){var u=t.value,o=n(u);switch(o.type){case"Valid":c.push(o.value);break;case"Invalid":a.push(o.error)}}}catch(s){i.e(s)}finally{i.f()}return 0===a.length?B(c):M(a.reduce(r))}var W=function(e){return function(n){return"Expected ".concat(e,', got: "').concat(n,'"')}};function G(e){return B(e)}function H(e){return M([e])}function Z(e,n){return function e(t,r){var c,a;switch(t.type){case"Unit":return B(t.value);case"Boolean":return X(r,n,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W("boolean");return function(n){switch(n){case"True":return G(!0);case"False":return G(!1);default:return H(e(n))}}}());case"Enumeration":return X(r,n,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W("one of [".concat(e.join(", "),"]"));return function(t){var r=e.find((function(e){return e===t}));return null!=r?G(r):H(n(t))}}(t.values));case"String":return X(r,n,B);case"Record":return P(z(t.fields,(function(n){var t=n.name;return P(e(n.schema,r.down(t)),(function(e){return[t,e]}))}),J),Object.fromEntries);case"Variant":var i=K(r.down("type"),n);if(null==i)return Q(r,"Type is missing");var u=null===(c=t.cases.find((function(e){return e.name===i})))||void 0===c?void 0:c.schema;if(null==u){var o=t.cases.map((function(e){return e.name}));return Q(r,'Invalid type "'.concat(i,'", expected one of [').concat(o.join(", "),"]"))}return e(u,r.down(i));case"Sequence":return z(null!==(a=K(r.down("ids"),n))&&void 0!==a?a:[],(function(n){return e(t.schema,r.down(n))}),J);case"Lazy":return e(t.getSchema(),r);default:return Q(r,'Invalid schema "'.concat(t,'"'))}}(e,new V)}function K(e,n){return n[e.key]}function Q(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return M(Object(g.a)({},e.key,t))}function X(e,n,t){var r=K(e,n);return function(e,n){switch(e.type){case"Valid":return e;case"Invalid":return M(n(e.error))}}(null!=r?t(r):M(["Value is missing"]),(function(n){return Object(g.a)({},e.key,n)}))}var Y=t(10),$=t.n(Y);function ee(e){var n=e.className,t=e.expandable,a=e.title,i=e.children,u=Object(j.a)(e,["className","expandable","title","children"]),o=Object(c.useState)(!1),s=Object(l.a)(o,2),v=s[0],f=s[1],h=_()($.a.card,n,t&&$.a.isExpandable,Object(g.a)({},$.a.isExpanded,v));return Object(r.jsxs)("div",Object(d.a)(Object(d.a)({className:h},u),{},{children:[a&&Object(r.jsx)("div",{className:$.a.title,children:a}),Object(r.jsxs)("div",{className:$.a.body,children:[t&&Object(r.jsx)("button",{type:"button",onClick:function(){return f(!v)},children:v?"Show less":"Show more"}),i]})]}))}var ne=t(18),te=t.n(ne);function re(e){var n=e.children;return Object(r.jsx)("pre",{className:te.a.code,children:Object(r.jsx)("code",{children:n})})}function ce(e){var n=e.children,t=e.indent,c=void 0===t?4:t;return Object(r.jsx)(re,{children:JSON.stringify(n,null,c)})}var ae,ie=O({name:b,fruit:(ae=["Apples","Bananas","Oranges"],{type:"Enumeration",values:ae}),contact:m({Address:O({city:b,street:b,country:b}),Phone:b}),games:p(b),consent:h}),ue=function e(n){return n({type:"Lazy",getSchema:function(){return e(n)}})}((function(e){return m({Unit:f(f()),Boolean:f(h),Enumeration:O({type:f("Enumeration"),values:p(b)}),String:f(b),Record:O({type:f("Record"),fields:p(O({name:b,schema:e}))}),Variant:O({type:f("Variant"),cases:p(O({name:b,schema:e}))}),Sequence:O({type:f("Sequence"),schema:e})})}));function oe(e){return function(n){null!=n&&e(n)}}function se(e){return"function"===typeof e?e():e}function le(e){var n=function(e){function n(){var n=window.localStorage.getItem(e);if(null!=n)try{return JSON.parse(n)}catch(t){console.error("Error while loading ".concat(e," -"),t)}return null}function t(e){var t;return null!==(t=n())&&void 0!==t?t:se(e)}function r(n){window.localStorage.setItem(e,JSON.stringify(n))}return{load:n,loadOrElse:t,loadOrCreate:function(e){return t((function(){var n=se(e);return r(n),n}))},save:r,remove:function(){window.localStorage.removeItem(e)}}}(e);return[n,function(e){var t=Object(c.useState)((function(){var t;return null!==(t=n.load())&&void 0!==t?t:se(e)})),r=Object(l.a)(t,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){return n.save(a)}),[a]),[a,i]}]}var de=t(15),je=t.n(de);function ve(e){var n=e.children;return Object(r.jsx)("div",{className:je.a.column,children:n})}function fe(e){var n=e.children;return Object(r.jsx)("div",{className:je.a.columns,children:n})}var he=le("schema"),be=Object(l.a)(he,1)[0];var Oe=t(19),me=t.n(Oe),pe=le("currentTab"),ye=Object(l.a)(pe,2)[1];function xe(e){var n=e.tabs,t=e.render,c=ye(n[0]),a=Object(l.a)(c,2),i=a[0],u=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:me.a.header,children:Object(r.jsx)(A,{values:n,value:i,onChange:oe(u)})}),t(i)]})}var ge={Demo:function(){var e=ie,n=Object(c.useState)({}),t=Object(l.a)(n,2),a=t[0],i=t[1],u=new F(a,i),o=Z(e,a),s="Invalid"===o.type?o.error:void 0;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ee,{expandable:!0,title:"Schema",children:Object(r.jsx)(ce,{children:e})}),Object(r.jsx)(ee,{title:"Form",children:Object(r.jsx)(v,{children:U(e,u,s)})}),Object(r.jsx)(ee,{title:"State",children:Object(r.jsx)(ce,{children:a})}),Object(r.jsx)(ee,{title:"Result",children:Object(r.jsx)(ce,{children:o})})]})},Meta:function(){var e=Object(c.useState)(be.loadOrElse(f)),n=Object(l.a)(e,2),t=n[0],a=n[1],i=new F(t,a),u=Z(ue,t),o="Valid"===u.type?u.value:void 0,d="Invalid"===u.type?u.error:void 0,j=Object(c.useState)({}),h=Object(l.a)(j,2),b=h[0],O=h[1],m=new F(b,O),p=function(e,n){switch(e.type){case"Valid":return n(e.value);case"Invalid":return e}}(u,(function(e){return Z(e,b)})),y="Valid"===p.type,x="Invalid"===p.type,g="Valid"===p.type?p.value:void 0,w="Invalid"===p.type?p.error:void 0;Object(c.useEffect)((function(){null!=o&&be.save(o)}),[o]);var k=["GET","POST","PUT","PATCH","DELETE"],S=Object(c.useState)(k[1]),_=Object(l.a)(S,2),C=_[0],N=_[1],E=Object(c.useState)("//localhost:8080"),I=Object(l.a)(E,2),T=I[0],V=I[1];return Object(r.jsxs)(fe,{children:[Object(r.jsx)(ve,{children:Object(r.jsxs)(ee,{className:s.a.form,title:"Schema",children:[Object(r.jsx)(v,{children:U(ue,i,d)}),Object(r.jsx)("h2",{children:"State"}),Object(r.jsx)(ce,{children:t}),Object(r.jsx)("h2",{children:"Result"}),Object(r.jsx)(ce,{children:u})]})}),o&&Object(r.jsx)(ve,{children:Object(r.jsxs)(ee,{title:"Form",children:[Object(r.jsx)(v,{children:U(o,m,w)}),Object(r.jsx)("h2",{children:"State"}),Object(r.jsx)(ce,{children:b}),Object(r.jsx)("h2",{children:"Result"}),Object(r.jsx)(ce,{children:p}),Object(r.jsx)("h2",{children:"Request"}),Object(r.jsx)(A,{values:k,value:C,onChange:oe(N)}),Object(r.jsx)("input",{type:"string",value:T,onChange:function(e){return V(e.target.value)}}),Object(r.jsx)("button",{type:"button",onClick:function(){y&&fetch(T,{method:"POST",body:JSON.stringify(g)}).then((function(e){return e.json()})).then(console.log).catch(console.warn)},disabled:x,children:"Submit"})]})})]})}};function we(){return Object(r.jsxs)("div",{className:s.a.app,children:[Object(r.jsx)("header",{className:s.a.header,children:"Meta UI"}),Object(r.jsx)("main",{className:s.a.main,children:Object(r.jsx)("div",{className:s.a.page,children:Object(r.jsx)(xe,{tabs:Object.keys(ge),render:function(e){var n=ge[e];return Object(r.jsx)(n,{})}})})})]})}t(29);var ke=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};u.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(we,{})}),document.getElementById("root")),ke()}],[[30,1,2]]]);
//# sourceMappingURL=main.37efbfa6.chunk.js.map