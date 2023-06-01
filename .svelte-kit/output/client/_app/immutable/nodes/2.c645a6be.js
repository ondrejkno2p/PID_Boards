import{S as oe,i as ce,s as ue,k as y,q as B,a as N,l as w,m as D,r as G,h as p,c as q,p as T,n as v,b as P,G as b,J as U,u as Y,v as X,d as H,f as J,g as L,K as fe,I as Z,L as S,o as me,M as Ze,N as re,H as C,O as he,P as de,e as O,y as ee,z as te,A as le,B as ie,Q as Ke,R as ne,T as Pe}from"../chunks/index.e9c46f01.js";import{C as Ye}from"../chunks/Clock.34340839.js";import{s as W,a as K,i as se,b as De,D as $e,p as $,g as xe}from"../chunks/cookies.ba17c740.js";const et=!0;async function tt(){}const Ut=Object.freeze(Object.defineProperty({__proto__:null,load:tt,prerender:et},Symbol.toStringTag,{value:"Module"}));var M={};function be(){var i=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),i}function je(){if(be()){var i=window.innerWidth,e=window.innerHeight,l=Math.min(i,e),t=Math.max(i,e);return l<=480&&t<=896}else return!1}function lt(){return M.DevicePointingAccuracy==null&&(ae(),!ve()&&!M.waitingForLoaded&&(M.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",ae))),M.DeviceCanHover}function x(i){var e=window.matchMedia||window.webkitMatchmedia||window.mozMatchmedia||window.oMatchmedia;return e!=null&&e(i).matches}function ve(){return document.readyState==="interactive"||document.readyState==="complete"}function ke(){return M.AppRunsOnLegacyTouchDevice==null&&(M.AppRunsOnLegacyTouchDevice=!x("(pointer:fine)")&&!x("(pointer:coarse)")&&!x("-moz-touch-enabled")&&("ontouchstart"in Window||(navigator.maxTouchPoints||0)>0||/touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))),M.AppRunsOnLegacyTouchDevice}function it(i,e){return typeof i.item=="function"?i.item(e):i[e]}function nt(i,e){for(var l=0,t=i.length;l<t;l++)if(e.test(it(i,l)))return!0;return!1}function Fe(){if(!M.MediaQueriesHaveBeenRewritten&&ke())if(ve()){for(var i=document.styleSheets,e=0,l=i.length;e<l;e++)for(var t=i[e].cssRules||i[e].rules,n=0,r=t.length;n<r;n++){var s=t[n];if(s.type===CSSRule.MEDIA_RULE&&nt(s.media,/handheld/i)){var a=s.media;a.mediaText=a.mediaText.replace("handheld","screen")}}for(var c=document.getElementsByTagName("link"),e=0,l=c.length;e<l;e++){var d=c[e];/handheld/i.test(d.media)&&(d.media=d.media.replace("handheld","screen"))}M.MediaQueriesHaveBeenRewritten=!0}else window.addEventListener("DOMContentLoaded",Fe)}function pe(){return M.DevicePointingAccuracy==null&&(ae(),!ve()&&!M.waitingForLoaded&&(M.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",ae))),M.DevicePointingAccuracy}function ae(){M.DeviceCanHover=x("(hover:hover)");var i="fine";switch(!0){case x("(pointer:none)"):i="none";break;case x("(pointer:coarse)"):case x("-moz-touch-enabled"):case ke():i="coarse";break}if(M.DevicePointingAccuracy=i,ve()){var e=document.body.classList;if(i==="none"!==e.contains("noPointer")||i==="fine"!==e.contains("finePointer")||i==="coarse"!==e.contains("coarsePointer"))switch(document.body.classList.remove("noPointer","finePointer","coarsePointer"),i){case"none":document.body.classList.add("noPointer");break;case"fine":document.body.classList.add("finePointer");break;case"coarse":document.body.classList.add("coarsePointer");break}}}function We(i,e){if(typeof i!="function")throw new Error("handler function expected");M.EventHandlerRegistry==null&&(M.EventHandlerRegistry=[]);for(var l=M.EventHandlerRegistry,t=0,n=l.length;t<n;t++)if(l[t].Handler===i){l[t].onceOnly=e;return}l.push({Handler:i,onceOnly:e}),l.length===1&&ot()}function Xe(i){M.EventHandlerRegistry==null&&(M.EventHandlerRegistry=[]);for(var e=M.EventHandlerRegistry,l=0,t=e.length;l<t;l++)if(e[l].Handler===i){e.splice(l,1);break}e.length===0&&ct()}function rt(i){We(i,!1)}function st(i){We(i,!0)}function at(i){Xe(i)}function ot(){M.AccuracyPoller=setInterval(function(){var i=pe();ae(),pe()!==i&&ut()},500)}function ct(){clearInterval(M.AccuracyPoller),M.AccuracyPoller=void 0}function ut(){M.EventHandlerRegistry==null&&(M.EventHandlerRegistry=[]);for(var i=M.EventHandlerRegistry,e=0,l=i.length;e<l;e++){var t=i[e],n=t.Handler,r=t.onceOnly;try{n(pe())}catch(s){console.warn("PointingAccuracy observation function failed with",s)}r&&Xe(n)}}var _e={get isMobile(){return be()},get isPhone(){return je()},get isTablet(){return be()&&!je()},get isLegacyTouchDevice(){return ke()},rewriteMediaQueriesOnLegacyTouchDevices:Fe,get PointingAccuracy(){return pe()},get canHover(){return lt()},onPointingAccuracyChanged:rt,oncePointingAccuracyChanged:st,offPointingAccuracyChanged:at,get observesPointingAccuracy(){return M.AccuracyPoller!=null}};function Ae(i,e,l){const t=i.slice();return t[17]=e[l],t}function ft(i){let e,l,t,n,r,s=i[3]?" Příjezd":" Odjezd",a,c,d;return{c(){e=y("div"),l=y("table"),t=y("tr"),n=y("td"),r=B("Zádný "),a=B(s),this.h()},l(_){e=w(_,"DIV",{class:!0});var m=D(e);l=w(m,"TABLE",{class:!0});var f=D(l);t=w(f,"TR",{class:!0});var o=D(t);n=w(o,"TD",{style:!0});var u=D(n);r=G(u,"Zádný "),a=G(u,s),u.forEach(p),o.forEach(p),f.forEach(p),m.forEach(p),this.h()},h(){T(n,"with","12%"),v(t,"class","first svelte-1284akv"),v(l,"class","svelte-1284akv"),v(e,"class","time-table svelte-1284akv")},m(_,m){P(_,e,m),b(e,l),b(l,t),b(t,n),b(n,r),b(n,a),c||(d=[U(n,"keydown",i[9]),U(n,"click",i[11])],c=!0)},p(_,m){m&8&&s!==(s=_[3]?" Příjezd":" Odjezd")&&Y(a,s)},i:C,o:C,d(_){_&&p(e),c=!1,fe(d)}}}function ht(i){let e,l,t,n,r,s,a,c,d,_,m=i[3]?"Příjezd":"Odjezd",f,o,u,h=[],k=new Map,z,j,Q,R=!i[5]&&Te(),I=i[0];const E=g=>g[17].trip.id;for(let g=0;g<I.length;g+=1){let A=Ae(i,I,g),V=E(A);k.set(V,h[g]=Me(V,A))}return{c(){e=y("div"),l=y("table"),t=y("tr"),n=y("td"),r=B("Linka"),s=N(),a=y("td"),c=B("Směr"),d=N(),_=y("td"),f=B(m),o=N(),R&&R.c(),u=N();for(let g=0;g<h.length;g+=1)h[g].c();this.h()},l(g){e=w(g,"DIV",{class:!0});var A=D(e);l=w(A,"TABLE",{class:!0});var V=D(l);t=w(V,"TR",{class:!0});var F=D(t);n=w(F,"TD",{style:!0});var ye=D(n);r=G(ye,"Linka"),ye.forEach(p),s=q(F),a=w(F,"TD",{});var we=D(a);c=G(we,"Směr"),we.forEach(p),d=q(F),_=w(F,"TD",{style:!0});var Ee=D(_);f=G(Ee,m),Ee.forEach(p),o=q(F),R&&R.l(F),F.forEach(p),u=q(V);for(let ge=0;ge<h.length;ge+=1)h[ge].l(V);V.forEach(p),A.forEach(p),this.h()},h(){T(n,"width","6%"),T(_,"width","12%"),v(t,"class","first svelte-1284akv"),v(l,"class","svelte-1284akv"),v(e,"class","time-table svelte-1284akv")},m(g,A){P(g,e,A),b(e,l),b(l,t),b(t,n),b(n,r),b(t,s),b(t,a),b(a,c),b(t,d),b(t,_),b(_,f),b(t,o),R&&R.m(t,null),b(l,u);for(let V=0;V<h.length;V+=1)h[V]&&h[V].m(l,null);z=!0,j||(Q=[U(_,"keydown",i[8]),U(_,"click",i[10])],j=!0)},p(g,A){(!z||A&8)&&m!==(m=g[3]?"Příjezd":"Odjezd")&&Y(f,m),g[5]?R&&(R.d(1),R=null):R||(R=Te(),R.c(),R.m(t,null)),A&9&&(I=g[0],X(),h=he(h,A,E,1,g,I,k,l,de,Me,null,Ae),J())},i(g){if(!z){for(let A=0;A<I.length;A+=1)L(h[A]);z=!0}},o(g){for(let A=0;A<h.length;A+=1)H(h[A]);z=!1},d(g){g&&p(e),R&&R.d();for(let A=0;A<h.length;A+=1)h[A].d();j=!1,fe(Q)}}}function Te(i){let e,l,t,n,r;return{c(){e=y("td"),l=B("Za"),t=N(),n=y("td"),r=B("Zpoždění"),this.h()},l(s){e=w(s,"TD",{style:!0});var a=D(e);l=G(a,"Za"),a.forEach(p),t=q(s),n=w(s,"TD",{});var c=D(n);r=G(c,"Zpoždění"),c.forEach(p),this.h()},h(){T(e,"width","16%")},m(s,a){P(s,e,a),b(e,l),P(s,t,a),P(s,n,a),b(n,r)},d(s){s&&p(e),s&&p(t),s&&p(n)}}}function Me(i,e){let l,t,n;return t=new $e({props:{size:0,arivals:e[3],departure:e[17]}}),{key:i,first:null,c(){l=O(),ee(t.$$.fragment),this.h()},l(r){l=O(),te(t.$$.fragment,r),this.h()},h(){this.first=l},m(r,s){P(r,l,s),le(t,r,s),n=!0},p(r,s){e=r;const a={};s&8&&(a.arivals=e[3]),s&1&&(a.departure=e[17]),t.$set(a)},i(r){n||(L(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){r&&p(l),ie(t,r)}}}function dt(i){let e,l,t,n,r,s=i[2]==null?"":", "+i[2],a,c,d,_,m,f,o,u,h,k,z;const j=[ht,ft],Q=[];function R(I,E){return I[0].length>0?0:1}return o=R(i),u=Q[o]=j[o](i),{c(){e=y("div"),l=y("div"),t=y("a"),n=y("h1"),r=B(i[4]),a=B(s),d=N(),_=y("p"),m=B("X"),f=N(),u.c(),this.h()},l(I){e=w(I,"DIV",{class:!0});var E=D(e);l=w(E,"DIV",{class:!0});var g=D(l);t=w(g,"A",{href:!0,class:!0});var A=D(t);n=w(A,"H1",{style:!0,class:!0});var V=D(n);r=G(V,i[4]),a=G(V,s),V.forEach(p),A.forEach(p),d=q(g),_=w(g,"P",{class:!0});var F=D(_);m=G(F,"X"),F.forEach(p),g.forEach(p),f=q(E),u.l(E),E.forEach(p),this.h()},h(){T(n,"float","left"),v(n,"class","svelte-1284akv"),v(t,"href",c="/single?ids="+i[1]),v(t,"class","svelte-1284akv"),v(_,"class","close svelte-1284akv"),v(l,"class","board_header svelte-1284akv"),v(e,"class","board svelte-1284akv"),T(e,"width",i[5]?Le:Ie)},m(I,E){P(I,e,E),b(e,l),b(l,t),b(t,n),b(n,r),b(n,a),b(l,d),b(l,_),b(_,m),b(e,f),Q[o].m(e,null),h=!0,k||(z=[U(_,"keydown",i[6]),U(_,"click",i[6])],k=!0)},p(I,[E]){(!h||E&16)&&Y(r,I[4]),(!h||E&4)&&s!==(s=I[2]==null?"":", "+I[2])&&Y(a,s),(!h||E&2&&c!==(c="/single?ids="+I[1]))&&v(t,"href",c);let g=o;o=R(I),o===g?Q[o].p(I,E):(X(),H(Q[g],1,1,()=>{Q[g]=null}),J(),u=Q[o],u?u.p(I,E):(u=Q[o]=j[o](I),u.c()),L(u,1),u.m(e,null)),E&32&&T(e,"width",I[5]?Le:Ie)},i(I){h||(L(u),h=!0)},o(I){H(u),h=!1},d(I){I&&p(e),Q[o].d(),k=!1,fe(z)}}}const Ie="49%",Le="98%";function _t(i,e,l){let t,n,r;Z(i,W,j=>l(13,t=j)),Z(i,K,j=>l(14,n=j)),Z(i,se,j=>l(5,r=j));let{bus_departures:s}=e,{ids:a}=e,c="",d,_=!1;a.search("S")>0&&m();function m(){clearInterval(d),S(W,t=t.filter(function(j,Q,R){if(j!=a)return j}),t),r&&(S(W,t=[],t),S(K,n=!0,n))}async function f(){let j;_?j=await(await fetch("/api/departure_board/?ids="+a+"&type=arivals")).json():j=await(await fetch("/api/departure_board/?ids="+a)).json(),l(4,o=j.stops[0].stop_name),l(2,c=j.stops[0].platform_code),l(0,s=j.departures)}let o="Stanice";me(async()=>{De(t),d>0&&clearInterval(d),f(),d=setInterval(async()=>{f()},1e3)}),Ze(()=>{clearInterval(d),De(t)});function u(j){re.call(this,i,j)}function h(j){re.call(this,i,j)}const k=async()=>{l(3,_=!_),f()},z=async()=>{l(3,_=!_),f()};return i.$$set=j=>{"bus_departures"in j&&l(0,s=j.bus_departures),"ids"in j&&l(1,a=j.ids)},[s,a,c,_,o,r,m,f,u,h,k,z]}class Je extends oe{constructor(e){super(),ce(this,e,_t,dt,ue,{bus_departures:0,ids:1})}}function ze(i,e,l){const t=i.slice();return t[10]=e[l],t}function pt(i){let e,l,t;return{c(){e=y("tr"),l=y("td"),t=B("Žádné informace o linkách"),this.h()},l(n){e=w(n,"TR",{class:!0});var r=D(e);l=w(r,"TD",{style:!0,class:!0});var s=D(l);t=G(s,"Žádné informace o linkách"),s.forEach(p),r.forEach(p),this.h()},h(){T(l,"width","30%"),v(l,"class","svelte-jrihpe"),v(e,"class","svelte-jrihpe")},m(n,r){P(n,e,r),b(e,l),b(l,t)},p:C,d(n){n&&p(e)}}}function mt(i){let e,l=i[0],t=[];for(let n=0;n<l.length;n+=1)t[n]=He(ze(i,l,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=O()},l(n){for(let r=0;r<t.length;r+=1)t[r].l(n);e=O()},m(n,r){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,r);P(n,e,r)},p(n,r){if(r&1){l=n[0];let s;for(s=0;s<l.length;s+=1){const a=ze(n,l,s);t[s]?t[s].p(a,r):(t[s]=He(a),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(n){Ke(t,n),n&&p(e)}}}function vt(i){let e,l;return{c(){e=y("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","icon svelte-jrihpe"),ne(e.src,l="train.png")||v(e,"src",l),v(e,"alt","train")},m(t,n){P(t,e,n)},d(t){t&&p(e)}}}function gt(i){let e,l;return{c(){e=y("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","icon svelte-jrihpe"),ne(e.src,l="kotva.png")||v(e,"src",l),v(e,"alt","ferry")},m(t,n){P(t,e,n)},d(t){t&&p(e)}}}function bt(i){let e,l;return{c(){e=y("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","icon svelte-jrihpe"),ne(e.src,l="metro.png")||v(e,"src",l),v(e,"alt","metro")},m(t,n){P(t,e,n)},d(t){t&&p(e)}}}function kt(i){let e,l;return{c(){e=y("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","icon_night svelte-jrihpe"),ne(e.src,l="bus.png")||v(e,"src",l),v(e,"alt","bus")},m(t,n){P(t,e,n)},d(t){t&&p(e)}}}function yt(i){let e,l;return{c(){e=y("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","icon svelte-jrihpe"),ne(e.src,l="bus.png")||v(e,"src",l),v(e,"alt","bus")},m(t,n){P(t,e,n)},d(t){t&&p(e)}}}function wt(i){let e,l;return{c(){e=y("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","icon_night svelte-jrihpe"),ne(e.src,l="tram.png")||v(e,"src",l),v(e,"alt","tram")},m(t,n){P(t,e,n)},d(t){t&&p(e)}}}function Et(i){let e,l;return{c(){e=y("img"),this.h()},l(t){e=w(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","icon svelte-jrihpe"),ne(e.src,l="tram.png")||v(e,"src",l),v(e,"alt","tram")},m(t,n){P(t,e,n)},d(t){t&&p(e)}}}function He(i){let e,l,t,n,r=i[10].name+"",s,a,c,d=i[10].headsign+"",_,m;function f(h,k){if(h[10].type=="tram")return Et;if(h[10].type=="night tram")return wt;if(h[10].type=="bus")return yt;if(h[10].type=="night bus")return kt;if(h[10].type=="metro")return bt;if(h[10].type=="ferry")return gt;if(h[10].type=="train")return vt}let o=f(i),u=o&&o(i);return{c(){e=y("tr"),l=y("td"),u&&u.c(),t=N(),n=y("td"),s=B(r),a=N(),c=y("td"),_=B(d),m=N(),this.h()},l(h){e=w(h,"TR",{style:!0,class:!0});var k=D(e);l=w(k,"TD",{style:!0,class:!0});var z=D(l);u&&u.l(z),z.forEach(p),t=q(k),n=w(k,"TD",{class:!0});var j=D(n);s=G(j,r),j.forEach(p),a=q(k),c=w(k,"TD",{class:!0});var Q=D(c);_=G(Q,d),Q.forEach(p),m=q(k),k.forEach(p),this.h()},h(){T(l,"width","34px"),v(l,"class","svelte-jrihpe"),v(n,"class","svelte-jrihpe"),v(c,"class","svelte-jrihpe"),T(e,"height","34px"),v(e,"class","svelte-jrihpe")},m(h,k){P(h,e,k),b(e,l),u&&u.m(l,null),b(e,t),b(e,n),b(n,s),b(e,a),b(e,c),b(c,_),b(e,m)},p(h,k){o!==(o=f(h))&&(u&&u.d(1),u=o&&o(h),u&&(u.c(),u.m(l,null))),k&1&&r!==(r=h[10].name+"")&&Y(s,r),k&1&&d!==(d=h[10].headsign+"")&&Y(_,d)},d(h){h&&p(e),u&&u.d()}}}function Pt(i){let e,l,t,n=i[1]==null?"":", "+i[1],r,s,a,c,d;function _(o,u){return o[0].length>0?mt:pt}let m=_(i),f=m(i);return{c(){e=y("li"),l=y("p"),t=B(i[2]),r=B(n),s=N(),a=y("table"),f.c(),this.h()},l(o){e=w(o,"LI",{class:!0});var u=D(e);l=w(u,"P",{class:!0});var h=D(l);t=G(h,i[2]),r=G(h,n),h.forEach(p),s=q(u),a=w(u,"TABLE",{class:!0});var k=D(a);f.l(k),k.forEach(p),u.forEach(p),this.h()},h(){v(l,"class","svelte-jrihpe"),v(a,"class","lines svelte-jrihpe"),v(e,"class","posible_stop svelte-jrihpe"),T(e,"width",i[3]?"100%":"398px")},m(o,u){P(o,e,u),b(e,l),b(l,t),b(l,r),b(e,s),b(e,a),f.m(a,null),c||(d=U(e,"click",i[4]),c=!0)},p(o,[u]){u&4&&Y(t,o[2]),u&2&&n!==(n=o[1]==null?"":", "+o[1])&&Y(r,n),m===(m=_(o))&&f?f.p(o,u):(f.d(1),f=m(o),f&&(f.c(),f.m(a,null))),u&8&&T(e,"width",o[3]?"100%":"398px")},i:C,o:C,d(o){o&&p(e),f.d(),c=!1,d()}}}function Dt(i,e,l){let t,n,r,s,a,c,d;Z(i,W,o=>l(7,s=o)),Z(i,K,o=>l(8,a=o)),Z(i,$,o=>l(9,c=o)),Z(i,se,o=>l(3,d=o));let{stop:_}=e,{lines:m}=e;function f(){let o=s.length;d?(S($,c=[],c),S(W,s[0]=n,s),S(K,a=!1,a)):S(W,s[o]=n,s)}return me(()=>(m.length==0,0)),i.$$set=o=>{"stop"in o&&l(5,_=o.stop),"lines"in o&&l(0,m=o.lines)},i.$$.update=()=>{i.$$.dirty&32&&l(2,t=_.name),i.$$.dirty&32&&(n=_.gtfsid),i.$$.dirty&32&&l(1,r=_.platform)},[m,r,t,d,f,_]}class jt extends oe{constructor(e){super(),ce(this,e,Dt,Pt,ue,{stop:5,lines:0})}}function At(i){let e,l,t,n;return{c(){e=y("li"),l=B(i[0]),this.h()},l(r){e=w(r,"LI",{class:!0});var s=D(e);l=G(s,i[0]),s.forEach(p),this.h()},h(){v(e,"class","autocomplete-items svelte-1e4ctj9")},m(r,s){P(r,e,s),b(e,l),t||(n=[U(e,"click",i[1]),U(e,"keydown",i[2]),U(e,"keyup",i[3])],t=!0)},p(r,[s]){s&1&&Y(l,r[0])},i:C,o:C,d(r){r&&p(e),t=!1,fe(n)}}}function Tt(i,e,l){let{stop_group_name:t}=e;function n(a){re.call(this,i,a)}function r(a){re.call(this,i,a)}function s(a){re.call(this,i,a)}return i.$$set=a=>{"stop_group_name"in a&&l(0,t=a.stop_group_name)},[t,n,r,s]}class Mt extends oe{constructor(e){super(),ce(this,e,Tt,At,ue,{stop_group_name:0})}}function Re(i,e,l){const t=i.slice();return t[20]=e[l],t}function Oe(i,e,l){const t=i.slice();return t[23]=e[l],t}function Se(i){let e,l=[],t=new Map,n,r=i[3];const s=a=>a[23].id;for(let a=0;a<r.length;a+=1){let c=Oe(i,r,a),d=s(c);t.set(d,l[a]=Ce(d,c))}return{c(){e=y("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=w(a,"UL",{class:!0,style:!0});var c=D(e);for(let d=0;d<l.length;d+=1)l[d].l(c);c.forEach(p),this.h()},h(){v(e,"class","autocomplete svelte-1p3n1hm"),T(e,"z-index","3"),T(e,"position","sticky"),T(e,"width",i[5]?"70%":"324px")},m(a,c){P(a,e,c);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null);n=!0},p(a,c){c&520&&(r=a[3],X(),l=he(l,c,s,1,a,r,t,e,de,Ce,null,Oe),J()),c&32&&T(e,"width",a[5]?"70%":"324px")},i(a){if(!n){for(let c=0;c<r.length;c+=1)L(l[c]);n=!0}},o(a){for(let c=0;c<l.length;c+=1)H(l[c]);n=!1},d(a){a&&p(e);for(let c=0;c<l.length;c+=1)l[c].d()}}}function Ce(i,e){let l,t,n;function r(){return e[14](e[23])}return t=new Mt({props:{stop_group_name:e[23].name}}),t.$on("click",r),{key:i,first:null,c(){l=O(),ee(t.$$.fragment),this.h()},l(s){l=O(),te(t.$$.fragment,s),this.h()},h(){this.first=l},m(s,a){P(s,l,a),le(t,s,a),n=!0},p(s,a){e=s;const c={};a&8&&(c.stop_group_name=e[23].name),t.$set(c)},i(s){n||(L(t.$$.fragment,s),n=!0)},o(s){H(t.$$.fragment,s),n=!1},d(s){s&&p(l),ie(t,s)}}}function Be(i){let e,l,t=[],n=new Map,r,s,a,c=i[4];const d=o=>o[20].gtfsid;for(let o=0;o<c.length;o+=1){let u=Re(i,c,o),h=d(u);n.set(h,t[o]=Ve(h,u))}function _(o,u){if(o[4].length>0)return Lt;if(o[2])return It}let m=_(i),f=m&&m(i);return{c(){e=y("div"),l=y("ul");for(let o=0;o<t.length;o+=1)t[o].c();r=N(),f&&f.c(),s=O(),this.h()},l(o){e=w(o,"DIV",{class:!0});var u=D(e);l=w(u,"UL",{class:!0});var h=D(l);for(let k=0;k<t.length;k+=1)t[k].l(h);h.forEach(p),u.forEach(p),r=q(o),f&&f.l(o),s=O(),this.h()},h(){v(l,"class","posible_stop svelte-1p3n1hm"),T(l,"width",i[5]?"99%":"398px"),v(e,"class","stop_scroll svelte-1p3n1hm"),T(e,"width",i[5]?"90%":"400px")},m(o,u){P(o,e,u),b(e,l);for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(l,null);P(o,r,u),f&&f.m(o,u),P(o,s,u),a=!0},p(o,u){u&1104&&(c=o[4],X(),t=he(t,u,d,1,o,c,n,l,de,Ve,null,Re),J()),u&32&&T(l,"width",o[5]?"99%":"398px"),u&32&&T(e,"width",o[5]?"90%":"400px"),m!==(m=_(o))&&(f&&f.d(1),f=m&&m(o),f&&(f.c(),f.m(s.parentNode,s)))},i(o){if(!a){for(let u=0;u<c.length;u+=1)L(t[u]);a=!0}},o(o){for(let u=0;u<t.length;u+=1)H(t[u]);a=!1},d(o){o&&p(e);for(let u=0;u<t.length;u+=1)t[u].d();o&&p(r),f&&f.d(o),o&&p(s)}}}function Ge(i){let e,l;return e=new jt({props:{lines:i[10](i[20].gtfsid),stop:i[20]}}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,n){le(e,t,n),l=!0},p(t,n){const r={};n&16&&(r.lines=t[10](t[20].gtfsid)),n&16&&(r.stop=t[20]),e.$set(r)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),l=!1},d(t){ie(e,t)}}}function Ve(i,e){let l,t=!e[6].find(s),n,r;function s(...c){return e[12](e[20],...c)}let a=t&&Ge(e);return{key:i,first:null,c(){l=O(),a&&a.c(),n=O(),this.h()},l(c){l=O(),a&&a.l(c),n=O(),this.h()},h(){this.first=l},m(c,d){P(c,l,d),a&&a.m(c,d),P(c,n,d),r=!0},p(c,d){e=c,d&80&&(t=!e[6].find(s)),t?a?(a.p(e,d),d&80&&L(a,1)):(a=Ge(e),a.c(),L(a,1),a.m(n.parentNode,n)):a&&(X(),H(a,1,1,()=>{a=null}),J())},i(c){r||(L(a),r=!0)},o(c){H(a),r=!1},d(c){c&&p(l),a&&a.d(c),c&&p(n)}}}function It(i){return{c:C,l:C,m:C,d:C}}function Lt(i){return{c:C,l:C,m:C,d:C}}function zt(i){let e,l,t,n,r,s,a,c,d,_,m,f=i[3].length>0&&Se(i),o=i[1]&&Be(i);return{c(){e=y("form"),l=y("input"),t=N(),n=y("button"),r=B("Hledej"),s=N(),f&&f.c(),a=N(),o&&o.c(),c=O(),this.h()},l(u){e=w(u,"FORM",{});var h=D(e);l=w(h,"INPUT",{placeholder:!0,class:!0}),t=q(h),n=w(h,"BUTTON",{class:!0});var k=D(n);r=G(k,"Hledej"),k.forEach(p),h.forEach(p),s=q(u),f&&f.l(u),a=q(u),o&&o.l(u),c=O(),this.h()},h(){v(l,"placeholder","Vyber Stanici"),v(l,"class","svelte-1p3n1hm"),T(l,"width",i[5]?"70%":"320px"),v(n,"class","svelte-1p3n1hm")},m(u,h){P(u,e,h),b(e,l),Pe(l,i[0]),b(e,t),b(e,n),b(n,r),P(u,s,h),f&&f.m(u,h),P(u,a,h),o&&o.m(u,h),P(u,c,h),d=!0,_||(m=[U(l,"click",i[8]),U(l,"input",i[8]),U(l,"keyup",i[8]),U(l,"input",i[13]),U(n,"click",i[7])],_=!0)},p(u,[h]){h&1&&l.value!==u[0]&&Pe(l,u[0]),h&32&&T(l,"width",u[5]?"70%":"320px"),u[3].length>0?f?(f.p(u,h),h&8&&L(f,1)):(f=Se(u),f.c(),L(f,1),f.m(a.parentNode,a)):f&&(X(),H(f,1,1,()=>{f=null}),J()),u[1]?o?(o.p(u,h),h&2&&L(o,1)):(o=Be(u),o.c(),L(o,1),o.m(c.parentNode,c)):o&&(X(),H(o,1,1,()=>{o=null}),J())},i(u){d||(L(f),L(o),d=!0)},o(u){H(f),H(o),d=!1},d(u){u&&p(e),u&&p(s),f&&f.d(u),u&&p(a),o&&o.d(u),u&&p(c),_=!1,fe(m)}}}function Ht(i,e,l){let t,n,r;Z(i,$,E=>l(4,t=E)),Z(i,se,E=>l(5,n=E)),Z(i,W,E=>l(6,r=E));let s="",{station_names:a}=e,c=!1,d=!1,_=new Array,m,f,o;async function u(){S($,t=new Array,t);let E=encodeURI(s.trim());m=await(await fetch("/api/station/?station_name="+E)).json(),f=m.search_results,o=m.static_data;let g=0;for(let A=0;A<f.length;A++)f[A].gtfsid.search("S")>0||(S($,t[g]=f[A],t),g+=1);l(3,_=new Array)}const h=()=>{l(3,_=new Array);let E=new Array;if(s.length>1)for(let g=0;g<a.length;g++)a[g].toLowerCase().startsWith(s.toLowerCase())&&(E=[...E,k(a[g])]);for(let g=0;g<E.length;g++)l(3,_[g]={id:g,name:E[g]},_)},k=E=>{let g=E.substring(0,s.length),A=`${g}`;return E.replace(g,A)};function z(E){l(0,s=E),l(3,_=new Array),u()}me(()=>{l(1,c=!0),S($,t=[],t)});function j(E){let g=o.filter(function(A,V,F){if(A.ids==E)return A});return g.length>0?g[0].lines:[]}Ze(()=>{S($,t=[],t)});const Q=(E,g)=>g==E.gtfsid;function R(){s=this.value,l(0,s)}const I=E=>{z(E.name)};return i.$$set=E=>{"station_names"in E&&l(11,a=E.station_names)},[s,c,d,_,t,n,r,u,h,z,j,a,Q,R,I]}class Rt extends oe{constructor(e){super(),ce(this,e,Ht,zt,ue,{station_names:11})}}function Ne(i,e,l){const t=i.slice();return t[8]=e[l],t}function qe(i,e,l){const t=i.slice();return t[8]=e[l],t}function Ot(i){let e,l,t,n;return{c(){e=y("h2"),l=B("Odjezdové Tabule PID"),this.h()},l(r){e=w(r,"H2",{style:!0,class:!0});var s=D(e);l=G(s,"Odjezdové Tabule PID"),s.forEach(p),this.h()},h(){T(e,"width","93%"),v(e,"class","svelte-1j6uheg")},m(r,s){P(r,e,s),b(e,l),t||(n=U(e,"click",i[6]),t=!0)},p:C,i:C,o:C,d(r){r&&p(e),t=!1,n()}}}function St(i){let e,l,t,n,r,s,a;return n=new Ye({}),{c(){e=y("h1"),l=B("Odjezdové Tabule PID"),t=N(),ee(n.$$.fragment),this.h()},l(c){e=w(c,"H1",{class:!0});var d=D(e);l=G(d,"Odjezdové Tabule PID"),d.forEach(p),t=q(c),te(n.$$.fragment,c),this.h()},h(){v(e,"class","svelte-1j6uheg")},m(c,d){P(c,e,d),b(e,l),P(c,t,d),le(n,c,d),r=!0,s||(a=U(e,"click",i[5]),s=!0)},p:C,i(c){r||(L(n.$$.fragment,c),r=!0)},o(c){H(n.$$.fragment,c),r=!1},d(c){c&&p(e),c&&p(t),ie(n,c),s=!1,a()}}}function Ct(i){let e,l,t=[],n=new Map,r,s=i[2];const a=c=>c[8];for(let c=0;c<s.length;c+=1){let d=Ne(i,s,c),_=a(d);n.set(_,t[c]=Qe(_,d))}return{c(){e=y("div"),l=y("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=w(c,"DIV",{class:!0});var d=D(e);l=w(d,"DIV",{class:!0});var _=D(l);for(let m=0;m<t.length;m+=1)t[m].l(_);_.forEach(p),d.forEach(p),this.h()},h(){v(l,"class","boards svelte-1j6uheg"),v(e,"class","main_only svelte-1j6uheg")},m(c,d){P(c,e,d),b(e,l);for(let _=0;_<t.length;_+=1)t[_]&&t[_].m(l,null);r=!0},p(c,d){d&5&&(s=c[2],X(),t=he(t,d,a,1,c,s,n,l,de,Qe,null,Ne),J())},i(c){if(!r){for(let d=0;d<s.length;d+=1)L(t[d]);r=!0}},o(c){for(let d=0;d<t.length;d+=1)H(t[d]);r=!1},d(c){c&&p(e);for(let d=0;d<t.length;d+=1)t[d].d()}}}function Bt(i){let e,l,t,n,r,s,a=[],c=new Map,d;t=new Rt({props:{station_names:i[1].station_names}});let _=i[2];const m=f=>f[8];for(let f=0;f<_.length;f+=1){let o=qe(i,_,f),u=m(o);c.set(u,a[f]=Ue(u,o))}return{c(){e=y("div"),l=y("div"),ee(t.$$.fragment),n=N(),r=y("div"),s=y("div");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=w(f,"DIV",{class:!0});var o=D(e);l=w(o,"DIV",{style:!0});var u=D(l);te(t.$$.fragment,u),u.forEach(p),o.forEach(p),n=q(f),r=w(f,"DIV",{class:!0});var h=D(r);s=w(h,"DIV",{class:!0});var k=D(s);for(let z=0;z<a.length;z+=1)a[z].l(k);k.forEach(p),h.forEach(p),this.h()},h(){T(l,"display","block "),T(l,"float","left"),v(e,"class","sidebar svelte-1j6uheg"),T(e,"width",i[3]?"100%":"402px"),v(s,"class","boards svelte-1j6uheg"),v(r,"class","main svelte-1j6uheg")},m(f,o){P(f,e,o),b(e,l),le(t,l,null),P(f,n,o),P(f,r,o),b(r,s);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(s,null);d=!0},p(f,o){const u={};o&2&&(u.station_names=f[1].station_names),t.$set(u),o&8&&T(e,"width",f[3]?"100%":"402px"),o&5&&(_=f[2],X(),a=he(a,o,m,1,f,_,c,s,de,Ue,null,qe),J())},i(f){if(!d){L(t.$$.fragment,f);for(let o=0;o<_.length;o+=1)L(a[o]);d=!0}},o(f){H(t.$$.fragment,f);for(let o=0;o<a.length;o+=1)H(a[o]);d=!1},d(f){f&&p(e),ie(t),f&&p(n),f&&p(r);for(let o=0;o<a.length;o+=1)a[o].d()}}}function Qe(i,e){let l,t,n;return t=new Je({props:{ids:e[8],bus_departures:e[0]}}),{key:i,first:null,c(){l=O(),ee(t.$$.fragment),this.h()},l(r){l=O(),te(t.$$.fragment,r),this.h()},h(){this.first=l},m(r,s){P(r,l,s),le(t,r,s),n=!0},p(r,s){e=r;const a={};s&4&&(a.ids=e[8]),s&1&&(a.bus_departures=e[0]),t.$set(a)},i(r){n||(L(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){r&&p(l),ie(t,r)}}}function Ue(i,e){let l,t,n;return t=new Je({props:{ids:e[8],bus_departures:e[0]}}),{key:i,first:null,c(){l=O(),ee(t.$$.fragment),this.h()},l(r){l=O(),te(t.$$.fragment,r),this.h()},h(){this.first=l},m(r,s){P(r,l,s),le(t,r,s),n=!0},p(r,s){e=r;const a={};s&4&&(a.ids=e[8]),s&1&&(a.bus_departures=e[0]),t.$set(a)},i(r){n||(L(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){r&&p(l),ie(t,r)}}}function Gt(i){let e,l,t,n,r,s,a,c;const d=[St,Ot],_=[];function m(h,k){return h[3]?1:0}l=m(i),t=_[l]=d[l](i);const f=[Bt,Ct],o=[];function u(h,k){return h[4]?0:1}return r=u(i),s=o[r]=f[r](i),{c(){e=y("div"),t.c(),n=N(),s.c(),a=O(),this.h()},l(h){e=w(h,"DIV",{class:!0});var k=D(e);t.l(k),k.forEach(p),n=q(h),s.l(h),a=O(),this.h()},h(){v(e,"class","header svelte-1j6uheg"),T(e,"height",i[3]?"70px":"90px")},m(h,k){P(h,e,k),_[l].m(e,null),P(h,n,k),o[r].m(h,k),P(h,a,k),c=!0},p(h,[k]){let z=l;l=m(h),l===z?_[l].p(h,k):(X(),H(_[z],1,1,()=>{_[z]=null}),J(),t=_[l],t?t.p(h,k):(t=_[l]=d[l](h),t.c()),L(t,1),t.m(e,null)),k&8&&T(e,"height",h[3]?"70px":"90px");let j=r;r=u(h),r===j?o[r].p(h,k):(X(),H(o[j],1,1,()=>{o[j]=null}),J(),s=o[r],s?s.p(h,k):(s=o[r]=f[r](h),s.c()),L(s,1),s.m(a.parentNode,a))},i(h){c||(L(t),L(s),c=!0)},o(h){H(t),H(s),c=!1},d(h){h&&p(e),_[l].d(),h&&p(n),o[r].d(h),h&&p(a)}}}function Vt(i,e,l){let t,n,r;Z(i,W,m=>l(2,t=m)),Z(i,se,m=>l(3,n=m)),Z(i,K,m=>l(4,r=m));let{bus_departures:s=new Array}=e;W.set([]);let{data:a}=e;me(()=>{S(se,n=_e.isMobile||_e.isPhone||_e.isTablet||_e.isLegacyTouchDevice,n),c()});function c(){let m=xe("stations");if(m!=null&&(m==null?void 0:m.length)>0){let f=m.split("-");for(let o=0;o<(f==null?void 0:f.length);o++)S(W,t[o]=f[o],t)}}const d=()=>{n?(S(K,r=!0,r),S(W,t=[],t)):S(K,r=!r,r)},_=()=>{n?(S(K,r=!0,r),S(W,t=[],t)):S(K,r=!r,r)};return i.$$set=m=>{"bus_departures"in m&&l(0,s=m.bus_departures),"data"in m&&l(1,a=m.data)},[s,a,t,n,r,d,_]}class Zt extends oe{constructor(e){super(),ce(this,e,Vt,Gt,ue,{bus_departures:0,data:1})}}export{Zt as component,Ut as universal};