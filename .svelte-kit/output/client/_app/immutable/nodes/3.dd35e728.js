import{S as oe,i as ie,s as de,k as j,q as S,a as A,l as k,m as g,r as Z,h as v,c as L,p as M,n as I,b as G,G as o,u as q,d as C,f as ae,g as H,o as ce,M as ue,v as re,N as x,J as R,H as ee,K as ne,O as _e,P as fe,e as te,y as he,z as pe,A as ve,B as me}from"../chunks/index.e9c46f01.js";import{b as be,g as je,D as ke}from"../chunks/cookies.ba17c740.js";function ge({url:i,route:t}){return{ids:i.searchParams.get("ids")}}const Pe=Object.freeze(Object.defineProperty({__proto__:null,load:ge},Symbol.toStringTag,{value:"Module"}));function se(i,t,s){const e=i.slice();return e[16]=t[s],e}function ye(i){let t,s,e,l,n,d=i[1]?" Příjezd":" Odjezd",c,z,u;return{c(){t=j("div"),s=j("table"),e=j("tr"),l=j("td"),n=S("Zádný "),c=S(d),this.h()},l(r){t=k(r,"DIV",{class:!0});var _=g(t);s=k(_,"TABLE",{class:!0});var E=g(s);e=k(E,"TR",{class:!0});var b=g(e);l=k(b,"TD",{style:!0});var y=g(l);n=Z(y,"Zádný "),c=Z(y,d),y.forEach(v),b.forEach(v),E.forEach(v),_.forEach(v),this.h()},h(){M(l,"with","12%"),I(e,"class","first svelte-szjjwt"),I(s,"class","svelte-szjjwt"),I(t,"class","time-table svelte-szjjwt")},m(r,_){G(r,t,_),o(t,s),o(s,e),o(e,l),o(l,n),o(l,c),z||(u=[R(l,"keydown",i[7]),R(l,"click",i[9])],z=!0)},p(r,_){_&2&&d!==(d=r[1]?" Příjezd":" Odjezd")&&q(c,d)},i:ee,o:ee,d(r){r&&v(t),z=!1,ne(u)}}}function we(i){let t,s,e,l,n,d,c,z,u,r,_=i[1]?"Příjezd":"Odjezd",E,b,y,f,m,a,P,D,w=[],N=new Map,V,J,F,B=i[0];const Q=p=>p[16].trip.id;for(let p=0;p<B.length;p+=1){let h=se(i,B,p),T=Q(h);N.set(T,w[p]=le(T,h))}return{c(){t=j("div"),s=j("table"),e=j("tr"),l=j("td"),n=S("Linka"),d=A(),c=j("td"),z=S("Směr"),u=A(),r=j("td"),E=S(_),b=A(),y=j("td"),f=S("Za"),m=A(),a=j("td"),P=S("Zpoždění"),D=A();for(let p=0;p<w.length;p+=1)w[p].c();this.h()},l(p){t=k(p,"DIV",{class:!0});var h=g(t);s=k(h,"TABLE",{class:!0});var T=g(s);e=k(T,"TR",{class:!0});var O=g(e);l=k(O,"TD",{style:!0});var U=g(l);n=Z(U,"Linka"),U.forEach(v),d=L(O),c=k(O,"TD",{});var W=g(c);z=Z(W,"Směr"),W.forEach(v),u=L(O),r=k(O,"TD",{style:!0});var X=g(r);E=Z(X,_),X.forEach(v),b=L(O),y=k(O,"TD",{style:!0});var Y=g(y);f=Z(Y,"Za"),Y.forEach(v),m=L(O),a=k(O,"TD",{});var $=g(a);P=Z($,"Zpoždění"),$.forEach(v),O.forEach(v),D=L(T);for(let K=0;K<w.length;K+=1)w[K].l(T);T.forEach(v),h.forEach(v),this.h()},h(){M(l,"width","6%"),M(r,"width","12%"),M(y,"width","12%"),I(e,"class","first svelte-szjjwt"),I(s,"class","svelte-szjjwt"),I(t,"class","time-table svelte-szjjwt")},m(p,h){G(p,t,h),o(t,s),o(s,e),o(e,l),o(l,n),o(e,d),o(e,c),o(c,z),o(e,u),o(e,r),o(r,E),o(e,b),o(e,y),o(y,f),o(e,m),o(e,a),o(a,P),o(s,D);for(let T=0;T<w.length;T+=1)w[T]&&w[T].m(s,null);V=!0,J||(F=[R(r,"keydown",i[6]),R(r,"click",i[8])],J=!0)},p(p,h){(!V||h&2)&&_!==(_=p[1]?"Příjezd":"Odjezd")&&q(E,_),h&3&&(B=p[0],re(),w=_e(w,h,Q,1,p,B,N,s,fe,le,null,se),ae())},i(p){if(!V){for(let h=0;h<B.length;h+=1)H(w[h]);V=!0}},o(p){for(let h=0;h<w.length;h+=1)C(w[h]);V=!1},d(p){p&&v(t);for(let h=0;h<w.length;h+=1)w[h].d();J=!1,ne(F)}}}function le(i,t){let s,e,l;return e=new ke({props:{size:1,arivals:t[1],departure:t[16]}}),{key:i,first:null,c(){s=te(),he(e.$$.fragment),this.h()},l(n){s=te(),pe(e.$$.fragment,n),this.h()},h(){this.first=s},m(n,d){G(n,s,d),ve(e,n,d),l=!0},p(n,d){t=n;const c={};d&2&&(c.arivals=t[1]),d&1&&(c.departure=t[16]),e.$set(c)},i(n){l||(H(e.$$.fragment,n),l=!0)},o(n){C(e.$$.fragment,n),l=!1},d(n){n&&v(s),me(e,n)}}}function ze(i){let t,s,e,l,n,d=i[2]==null?"":", "+i[2],c,z,u,r,_;const E=[we,ye],b=[];function y(f,m){return f[0].length>0?0:1}return u=y(i),r=b[u]=E[u](i),{c(){t=j("div"),s=j("div"),e=j("a"),l=j("h1"),n=S(i[3]),c=S(d),z=A(),r.c(),this.h()},l(f){t=k(f,"DIV",{class:!0});var m=g(t);s=k(m,"DIV",{class:!0});var a=g(s);e=k(a,"A",{href:!0,class:!0});var P=g(e);l=k(P,"H1",{style:!0,class:!0});var D=g(l);n=Z(D,i[3]),c=Z(D,d),D.forEach(v),P.forEach(v),a.forEach(v),z=L(m),r.l(m),m.forEach(v),this.h()},h(){M(l,"float","left"),I(l,"class","svelte-szjjwt"),I(e,"href","/"),I(e,"class","svelte-szjjwt"),I(s,"class","board_header svelte-szjjwt"),I(t,"class","board svelte-szjjwt"),M(t,"width","100%")},m(f,m){G(f,t,m),o(t,s),o(s,e),o(e,l),o(l,n),o(l,c),o(t,z),b[u].m(t,null),_=!0},p(f,[m]){(!_||m&8)&&q(n,f[3]),(!_||m&4)&&d!==(d=f[2]==null?"":", "+f[2])&&q(c,d);let a=u;u=y(f),u===a?b[u].p(f,m):(re(),C(b[a],1,1,()=>{b[a]=null}),ae(),r=b[u],r?r.p(f,m):(r=b[u]=E[u](f),r.c()),H(r,1),r.m(t,null))},i(f){_||(H(r),_=!0)},o(f){C(r),_=!1},d(f){f&&v(t),b[u].d()}}}function Ee(i,t,s){let e=[],{data:l}=t,n=l.ids,d,c=!1,z="";async function u(){let a;c?a=await(await fetch("/api/departure_board/?ids="+n+"&type=arivals&number=18")).json():a=await(await fetch("/api/departure_board/?ids="+n+"&number=18")).json(),s(3,r=a.stops[0].stop_name),s(2,z=a.stops[0].platform_code),s(0,e=a.departures)}let r="Stanice";ce(async()=>{E(),_.find(a=>{if(a==n)return a})||(_[_.length]=n),be(_),d>0&&clearInterval(d),u(),d=setInterval(async()=>{u()},1e3)}),ue(()=>{clearInterval(d)});let _=[];function E(){let a=je("stations");if(a!=null&&(a==null?void 0:a.length)>0){let P=a.split("-");for(let D=0;D<(P==null?void 0:P.length);D++)_[D]=P[D]}}function b(a){x.call(this,i,a)}function y(a){x.call(this,i,a)}const f=async()=>{s(1,c=!c),u()},m=async()=>{s(1,c=!c),u()};return i.$$set=a=>{"data"in a&&s(5,l=a.data)},[e,c,z,r,u,l,b,y,f,m]}class Ie extends oe{constructor(t){super(),ie(this,t,Ee,ze,de,{data:5})}}export{Ie as component,Pe as universal};