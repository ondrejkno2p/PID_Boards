import{S as x,i as $,s as ee,k as v,q as g,a as y,e as q,l as k,m as b,r as j,h as d,c as S,n as D,p as A,b as T,G as h,J as Z,u as C,H as G,K as te,I as ie,o as le,M as se}from"./index.e9c46f01.js";import{w as I}from"./index.6ff06ecf.js";let ve=I(["U669Z1P","U669Z2P"]),ke=I(new Array),be=I(!0),re=I(!1);function H(t){let e,l=(Math.floor(t[5]/60)>0?Math.floor(t[5]/60)+" h. ":"")+t[5]%60+" m.",o,a,r,i=t[4].is_available&&J(t);return{c(){e=v("td"),o=g(l),a=y(),r=v("td"),i&&i.c(),this.h()},l(s){e=k(s,"TD",{class:!0});var n=b(e);o=j(n,l),n.forEach(d),a=S(s),r=k(s,"TD",{class:!0});var f=b(r);i&&i.l(f),f.forEach(d),this.h()},h(){D(e,"class","svelte-1a1kvxo"),D(r,"class","svelte-1a1kvxo")},m(s,n){T(s,e,n),h(e,o),T(s,a,n),T(s,r,n),i&&i.m(r,null)},p(s,n){n&32&&l!==(l=(Math.floor(s[5]/60)>0?Math.floor(s[5]/60)+" h. ":"")+s[5]%60+" m.")&&C(o,l),s[4].is_available?i?i.p(s,n):(i=J(s),i.c(),i.m(r,null)):i&&(i.d(1),i=null)},d(s){s&&d(e),s&&d(a),s&&d(r),i&&i.d()}}}function J(t){let e=t[4].minutes>0?t[4].minutes%60+" m. ":"",l,o,a=t[4].seconds>0?t[4].seconds%60+" s.":"",r;return{c(){l=g(e),o=y(),r=g(a)},l(i){l=j(i,e),o=S(i),r=j(i,a)},m(i,s){T(i,l,s),T(i,o,s),T(i,r,s)},p(i,s){s&16&&e!==(e=i[4].minutes>0?i[4].minutes%60+" m. ":"")&&C(l,e),s&16&&a!==(a=i[4].seconds>0?i[4].seconds%60+" s.":"")&&C(r,a)},d(i){i&&d(l),i&&d(o),i&&d(r)}}}function K(t){let e,l,o;function a(s,n){return s[1].last_stop.id==null?ne:s[1].last_stop.id==null?oe:ae}let r=a(t),i=r(t);return{c(){e=v("tr"),l=v("td"),o=y(),i.c(),this.h()},l(s){e=k(s,"TR",{class:!0});var n=b(e);l=k(n,"TD",{}),b(l).forEach(d),o=S(n),i.l(n),n.forEach(d),this.h()},h(){D(e,"class","info svelte-1a1kvxo"),A(e,"font-size",t[0]?"xx-large":"large")},m(s,n){T(s,e,n),h(e,l),h(e,o),i.m(e,null)},p(s,n){r===(r=a(s))&&i?i.p(s,n):(i.d(1),i=r(s),i&&(i.c(),i.m(e,null))),n&1&&A(e,"font-size",s[0]?"xx-large":"large")},d(s){s&&d(e),i.d()}}}function ae(t){let e,l,o=t[1].last_stop.name+"",a,r,i,s=new Date(t[1].last_stop.time).toLocaleTimeString().slice(0,-3)+"",n;return{c(){e=v("td"),l=v("a"),a=g(o),i=v("td"),n=g(s),this.h()},l(f){e=k(f,"TD",{});var u=b(e);l=k(u,"A",{href:!0,class:!0});var E=b(l);a=j(E,o),E.forEach(d),u.forEach(d),i=k(f,"TD",{});var w=b(i);n=j(w,s),w.forEach(d),this.h()},h(){D(l,"href",r="/trip?trip_id="+t[3]),D(l,"class","svelte-1a1kvxo")},m(f,u){T(f,e,u),h(e,l),h(l,a),T(f,i,u),h(i,n)},p(f,u){u&2&&o!==(o=f[1].last_stop.name+"")&&C(a,o),u&8&&r!==(r="/trip?trip_id="+f[3])&&D(l,"href",r),u&2&&s!==(s=new Date(f[1].last_stop.time).toLocaleTimeString().slice(0,-3)+"")&&C(n,s)},d(f){f&&d(e),f&&d(i)}}}function oe(t){let e,l,o=t[1].next_stop.name+"",a,r,i,s=new Date(t[1].next_stop.time).toLocaleTimeString().slice(0,-3)+"",n;return{c(){e=v("td"),l=v("a"),a=g(o),i=v("td"),n=g(s),this.h()},l(f){e=k(f,"TD",{});var u=b(e);l=k(u,"A",{href:!0,class:!0});var E=b(l);a=j(E,o),E.forEach(d),u.forEach(d),i=k(f,"TD",{});var w=b(i);n=j(w,s),w.forEach(d),this.h()},h(){D(l,"href",r="/trip?trip_id="+t[3]),D(l,"class","svelte-1a1kvxo")},m(f,u){T(f,e,u),h(e,l),h(l,a),T(f,i,u),h(i,n)},p(f,u){u&2&&o!==(o=f[1].next_stop.name+"")&&C(a,o),u&8&&r!==(r="/trip?trip_id="+f[3])&&D(l,"href",r),u&2&&s!==(s=new Date(f[1].next_stop.time).toLocaleTimeString().slice(0,-3)+"")&&C(n,s)},d(f){f&&d(e),f&&d(i)}}}function ne(t){let e,l,o,a,r;return{c(){e=v("td"),l=v("a"),o=g("Detail spoje"),r=v("td"),this.h()},l(i){e=k(i,"TD",{});var s=b(e);l=k(s,"A",{href:!0,class:!0});var n=b(l);o=j(n,"Detail spoje"),n.forEach(d),s.forEach(d),r=k(i,"TD",{}),b(r).forEach(d),this.h()},h(){D(l,"href",a="/trip?trip_id="+t[3]),D(l,"class","svelte-1a1kvxo")},m(i,s){T(i,e,s),h(e,l),h(l,o),T(i,r,s)},p(i,s){s&8&&a!==(a="/trip?trip_id="+i[3])&&D(l,"href",a)},d(i){i&&d(e),i&&d(r)}}}function fe(t){let e,l,o,a,r,i,s,n,f=t[6].toLocaleTimeString().slice(0,-3)+"",u,E,w,z,O,U,_=!t[9]&&H(t),m=t[2]&&K(t);return{c(){e=v("tr"),l=v("td"),o=g(t[8]),a=y(),r=v("td"),i=g(t[7]),s=y(),n=v("td"),u=g(f),E=y(),_&&_.c(),w=y(),m&&m.c(),z=q(),this.h()},l(c){e=k(c,"TR",{class:!0});var p=b(e);l=k(p,"TD",{class:!0});var B=b(l);o=j(B,t[8]),B.forEach(d),a=S(p),r=k(p,"TD",{class:!0});var F=b(r);i=j(F,t[7]),F.forEach(d),s=S(p),n=k(p,"TD",{class:!0});var P=b(n);u=j(P,f),P.forEach(d),E=S(p),_&&_.l(p),p.forEach(d),w=S(c),m&&m.l(c),z=q(),this.h()},h(){D(l,"class","svelte-1a1kvxo"),D(r,"class","svelte-1a1kvxo"),D(n,"class","svelte-1a1kvxo"),D(e,"class","departure svelte-1a1kvxo"),A(e,"font-size",t[0]?"xx-large":"large")},m(c,p){T(c,e,p),h(e,l),h(l,o),h(e,a),h(e,r),h(r,i),h(e,s),h(e,n),h(n,u),h(e,E),_&&_.m(e,null),T(c,w,p),m&&m.m(c,p),T(c,z,p),O||(U=[Z(e,"keydown",t[10]),Z(e,"click",t[10])],O=!0)},p(c,[p]){p&256&&C(o,c[8]),p&128&&C(i,c[7]),p&64&&f!==(f=c[6].toLocaleTimeString().slice(0,-3)+"")&&C(u,f),c[9]?_&&(_.d(1),_=null):_?_.p(c,p):(_=H(c),_.c(),_.m(e,null)),p&1&&A(e,"font-size",c[0]?"xx-large":"large"),c[2]?m?m.p(c,p):(m=K(c),m.c(),m.m(z.parentNode,z)):m&&(m.d(1),m=null)},i:G,o:G,d(c){c&&d(e),_&&_.d(),c&&d(w),m&&m.d(c),c&&d(z),O=!1,te(U)}}}function ce(t,e,l){let o,a,r,i,s,n,f;ie(t,re,c=>l(9,f=c));let{departure:u}=e,{arivals:E=!1}=e,{size:w}=e;function z(c){return E?new Date(c.arrival_timestamp.scheduled):new Date(c.departure_timestamp.scheduled)}let O;async function U(){_||l(1,O=await(await fetch("/api/position/?trip_id="+u.trip.id)).json()),l(2,_=!_)}let _=!1,m;return le(()=>{m=setInterval(async()=>{_&&l(1,O=await(await fetch("/api/position/?trip_id="+u.trip.id)).json())},5e3)}),se(()=>{clearInterval(m)}),t.$$set=c=>{"departure"in c&&l(11,u=c.departure),"arivals"in c&&l(12,E=c.arivals),"size"in c&&l(0,w=c.size)},t.$$.update=()=>{t.$$.dirty&2048&&l(8,o=u.route.short_name),t.$$.dirty&2048&&l(7,a=u.trip.headsign),t.$$.dirty&2048&&l(6,r=z(u)),t.$$.dirty&2048&&l(5,i=u.departure_timestamp.minutes),t.$$.dirty&2048&&l(4,s=u.delay),t.$$.dirty&2048&&l(3,n=u.trip.id)},[w,O,_,n,s,i,r,a,o,f,U,u,E]}class De extends x{constructor(e){super(),$(this,e,ce,fe,ee,{departure:11,arivals:12,size:0})}}/*! typescript-cookie v1.0.6 | MIT */const W=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),X=t=>encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent),L=decodeURIComponent,R=t=>(t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent));function ue(t){return t=Object.assign({},t),typeof t.expires=="number"&&(t.expires=new Date(Date.now()+t.expires*864e5)),t.expires!=null&&(t.expires=t.expires.toUTCString()),Object.entries(t).filter(([e,l])=>l!=null&&l!==!1).map(([e,l])=>l===!0?`; ${e}`:`; ${e}=${l.split(";")[0]}`).join("")}function Y(t,e,l){const o=/(?:^|; )([^=]*)=([^;]*)/g,a={};let r;for(;(r=o.exec(document.cookie))!=null;)try{const i=l(r[1]);if(a[i]=e(r[2],i),t===i)break}catch{}return t!=null?a[t]:a}const Q=Object.freeze({decodeName:L,decodeValue:R,encodeName:W,encodeValue:X}),N=Object.freeze({path:"/"});function M(t,e,l=N,{encodeValue:o=X,encodeName:a=W}={}){return document.cookie=`${a(t)}=${o(e,t)}${ue(l)}`}function de(t,{decodeValue:e=R,decodeName:l=L}={}){return Y(t,e,l)}function _e({decodeValue:t=R,decodeName:e=L}={}){return Y(void 0,t,e)}function pe(t,e=N){M(t,"",Object.assign({},e,{expires:-1}))}function V(t,e){const l={set:function(a,r,i){return M(a,r,Object.assign({},this.attributes,i),{encodeValue:this.converter.write})},get:function(a){if(arguments.length===0)return _e(this.converter.read);if(a!=null)return de(a,this.converter.read)},remove:function(a,r){pe(a,Object.assign({},this.attributes,r))},withAttributes:function(a){return V(this.converter,Object.assign({},this.attributes,a))},withConverter:function(a){return V(Object.assign({},this.converter,a),this.attributes)}},o={attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}};return Object.create(l,o)}V({read:Q.decodeValue,write:Q.encodeValue},N);function Te(t){let e="";for(let l=0;l<t.length;l++)e+=t[l]+"-";t.length>0&&(e=e.slice(0,-1)),M("stations",e,{expires:7,path:"",SameSite:"Lax"})}export{De as D,be as a,Te as b,de as g,re as i,ke as p,ve as s};