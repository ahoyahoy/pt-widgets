const e="purple-web-components";let t,n=0,s=!1,o=!1;const r=window,l=document,c={t:0,s:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)},i=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),a=new WeakMap,f=e=>a.get(e),u=(e,t)=>a.set(t.o=e,t),p=(e,t)=>t in e,$=e=>console.error(e),m=new Map,w=new Map,h=[],d=[],y=[],g=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&c.t?_(v):c.raf(v))},b=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(e){$(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},v=()=>{n++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){$(e)}e.length=0})(h);const e=2==(6&c.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;b(d,e),b(y,e),d.length>0&&(y.push(...d),d.length=0),(s=h.length+d.length+y.length>0)?c.raf(v):n=0},_=e=>Promise.resolve().then(e),j=g(d,!0),k={},S=e=>null!=e,M=e=>e.toLowerCase(),O=e=>"object"==(e=typeof e)||"function"===e,x=()=>r.CSS&&r.CSS.supports&&r.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_purple_web_components("./p-3ea8955c.js"),R=async()=>{const t=new RegExp(`/${e}(\\.esm)?\\.js($|\\?|#)`),n=Array.from(l.querySelectorAll("script")).find(n=>t.test(n.src)||n.getAttribute("data-namespace")===e),s=n["data-opts"];{const e=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,r.location.href));return U(e.href),window.customElements||await __sc_import_purple_web_components("./p-59290340.js"),Object.assign({},s,{resourcesUrl:e.href})}},U=t=>{const n=(e=>`__sc_import_${e.replace(/\s|-/g,"_")}`)(e);try{r[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(e){const s=new Map;r[n]=e=>{const o=new URL(e,t).href;let c=s.get(o);if(!c){const e=l.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${n}.m = m;`],{type:"application/javascript"})),c=new Promise(t=>{e.onload=()=>{t(r[n].m),e.remove()}}),s.set(o,c),l.head.appendChild(e)}return c}}},L="http://www.w3.org/1999/xlink",C=new WeakMap,E=e=>"sc-"+e,P=(e,t,...n)=>{let s,o=null,r=!1,l=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((r="function"!=typeof e&&!O(o))&&(o=String(o)),r&&l?c[c.length-1].l+=o:c.push(r?{t:0,l:o}:o),l=r)};if(i(n),t){s=t.key||void 0;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,T);const a={t:0,i:e,u:c.length>0?c:null,p:void 0,$:t};return a.h=s,a},A={},T={forEach:(e,t)=>e.map(D).forEach(t),map:(e,t)=>e.map(D).map(t).map(F)},D=e=>({vattrs:e.$,vchildren:e.u,vkey:e.h,vname:e.g,vtag:e.i,vtext:e.l}),F=e=>({t:0,$:e.vattrs,u:e.vchildren,h:e.vkey,g:e.vname,i:e.vtag,l:e.vtext}),W=(e,t,n,s,o,r)=>{if(n!==s)if("class"===t){const t=e.classList;q(n).forEach(e=>t.remove(e)),q(s).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!p(e,t))t=p(e,M(t))?M(t.substring(2)):M(t[2])+t.substring(3),n&&c.rel(e,t,n,!1),s&&c.ael(e,t,s,!1);else{const n=p(e,t),l=O(s);if((n||l&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{const n=null==s?"":s;e[t]!==n&&(e[t]=n)}}catch(e){}const c=!(!o||t===(t=t.replace(/^xlink\:?/,"")));null==s||!1===s?c?e.removeAttributeNS(L,M(t)):e.removeAttribute(t):(!n||4&r||o)&&!l&&(s=!0===s?"":s.toString(),c?e.setAttributeNS(L,M(t),s):e.setAttribute(t,s))}},q=e=>e?e.split(/\s+/).filter(e=>e):[],B=(e,t,n,s)=>{const o=11===t.p.nodeType&&t.p.host?t.p.host:t.p,r=e&&e.$||k,l=t.$||k;for(s in r)s in l||W(o,s,r[s],void 0,n,t.t);for(s in l)W(o,s,r[s],l[s],n,t.t)},H=(e,t,n)=>{let s,r,c=t.u[n],i=0;if(S(c.l))c.p=l.createTextNode(c.l);else{if(s=c.p=o||"svg"===c.i?l.createElementNS("http://www.w3.org/2000/svg",c.i):l.createElement(c.i),B(null,c,o="svg"===c.i||"foreignObject"!==c.i&&o),c.u)for(i=0;i<c.u.length;++i)(r=H(e,c,i))&&s.appendChild(r);"svg"===c.i?o=!1:"foreignObject"===c.p.tagName&&(o=!0)}return c.p},N=(e,t,n,s,o,r)=>{let l,c=e;for(;o<=r;++o)s[o]&&(l=H(null,n,o))&&(s[o].p=l,c.insertBefore(l,t))},V=(e,t,n,s)=>{for(;t<=n;++t)S(e[t])&&(s=e[t].p,I(e[t],!0),s.remove())},z=(e,t)=>e.i===t.i&&e.h===t.h,G=(e,t)=>{const n=t.p=e.p,s=e.u,r=t.u;o=n&&S(n.parentNode)&&void 0!==n.ownerSVGElement,o="svg"===t.i||"foreignObject"!==t.i&&o,S(t.l)?e.l!==t.l&&(n.textContent=t.l):(B(e,t,o),S(s)&&S(r)?((e,t,n,s)=>{let o,r,l=0,c=0,i=0,a=0,f=t.length-1,u=t[0],p=t[f],$=s.length-1,m=s[0],w=s[$];for(;l<=f&&c<=$;)if(null==u)u=t[++l];else if(null==p)p=t[--f];else if(null==m)m=s[++c];else if(null==w)w=s[--$];else if(z(u,m))G(u,m),u=t[++l],m=s[++c];else if(z(p,w))G(p,w),p=t[--f],w=s[--$];else if(z(u,w))G(u,w),e.insertBefore(u.p,p.p.nextSibling),u=t[++l],w=s[--$];else if(z(p,m))G(p,m),e.insertBefore(p.p,u.p),p=t[--f],m=s[++c];else{for(i=-1,a=l;a<=f;++a)if(t[a]&&S(t[a].h)&&t[a].h===m.h){i=a;break}i>=0?((r=t[i]).i!==m.i?o=H(t&&t[c],n,i):(G(r,m),t[i]=void 0,o=r.p),m=s[++c]):(o=H(t&&t[c],n,c),m=s[++c]),o&&u.p.parentNode.insertBefore(o,u.p)}l>f?N(e,null==s[$+1]?null:s[$+1].p,n,s,c,$):c>$&&V(t,l,f)})(n,s,t,r):S(r)?(S(e.l)&&(n.textContent=""),N(n,null,t,r,0,r.length-1)):S(s)&&V(s,0,s.length-1)),o&&"svg"===t.i&&(o=!1)},I=(e,t)=>{e&&(e.$&&e.$.ref&&e.$.ref(t?null:e.p),e.u&&e.u.forEach(e=>{I(e,t)}))},J=(e,t,n,s)=>{t.t|=16;const o=t.o,r=()=>K(e,t,n,o,s);return s&&(t.t|=256,t.v&&(t.v.forEach(([e,t])=>Y(o,e,t)),t.v=null)),Z(void 0,()=>j(r))},K=(e,n,s,o,r)=>{n.t&=-17,e["s-lr"]=!1,r&&((e,t)=>{((e,t)=>{let n=E(t._),s=w.get(n);if(e=11===e.nodeType?e:l,s)if("string"==typeof s){let t,o=C.get(e=e.head||e);o||C.set(e,o=new Set),o.has(n)||((t=l.createElement("style")).innerHTML=s,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s])})(e.getRootNode(),t)})(e,s),n.t|=4;try{((e,n,s,o)=>{t=M(e.tagName);const r=n.j||{t:0},l=(e=>e&&e.i===A)(o)?o:P(null,null,o);l.i=null,l.t|=4,n.j=l,l.p=r.p=e,G(r,l)})(e,n,0,o.render())}catch(e){$(e)}n.t&=-5,e["s-lr"]=!0,n.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),Q(e,n)},Q=(e,t,n)=>{if(!e["s-al"]){const s=t.o,o=t.k;Y(s,"componentDidRender"),64&t.t||(t.t|=64,e.classList.add("hydrated"),Y(s,"componentDidLoad"),t.S(e),o||X()),o&&((n=o["s-al"])&&(n.delete(e),0===n.size&&(o["s-al"]=void 0,o["s-init"]())),t.k=void 0)}},X=()=>{l.documentElement.classList.add("hydrated"),c.t|=2},Y=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){$(e)}},Z=(e,t)=>e&&e.then?e.then(t):t(),ee=(e,t,n)=>{if(t.M){e.watchers&&(t.O=e.watchers);const s=Object.entries(t.M),o=e.prototype;if(s.forEach(([e,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(o,e,{get(){return((e,t)=>f(e).R.get(t))(this,e)},set(n){((e,t,n,s)=>{const o=f(this),r=o.U,l=o.R.get(t),c=o.t;if(!((n=((e,t)=>null==e||O(e)?e:1&t?String(e):e)(n,s.M[t][0]))===l||8&c&&void 0!==l)&&(o.R.set(t,n),o.o)){if(s.O&&128&c){const e=s.O[t];e&&e.forEach(e=>{try{o.o[e].call(o.o,n,l,t)}catch(e){$(e)}})}2==(22&c)&&J(r,o,s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,s){c.jmp(()=>{const n=t.get(e);this[n]=(null!==s||"boolean"!=typeof this[n])&&s})},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,n])=>{const s=n[1]||e;return t.set(s,e),s})}}return e},te=(e,t={})=>{const n=[],s=t.exclude||[],o=l.head,u=r.customElements,p=o.querySelector("meta[charset]"),h=l.createElement("style");let d;Object.assign(c,t),c.s=new URL(t.resourcesUrl||"./",l.baseURI).href,t.syncQueue&&(c.t|=4),e.forEach(e=>e[1].forEach(t=>{const o={t:t[0],_:t[1],M:t[2],L:t[3],O:{}},l=o._;o.C=e[0],s.includes(l)||u.get(l)||(n.push(l),u.define(l,ee(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,U:e,R:new Map};t.P=new Promise(e=>t.S=e),a.set(e,t)}})(e)}connectedCallback(){d&&(clearTimeout(d),d=null),c.jmp(()=>((e,t)=>{if(0==(1&c.t)){const n=f(e);if(t.L&&(n.A=((e,t,n)=>{t.v=t.v||[];const s=n.map(([n,s,o])=>{const l=((e,t)=>8&t?r:e)(e,n),i=((e,t)=>n=>{256&e.t?e.o[t](n):e.v.push([t,n])})(t,o),a=(e=>({passive:0!=(1&e),capture:0!=(2&e)}))(n);return c.ael(l,s,i,a),()=>c.rel(l,s,i,a)});return()=>s.forEach(e=>e())})(e,n,t.L)),!(1&n.t)){n.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!1===t["s-lr"]){n.k=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.M&&Object.entries(t.M).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),_(()=>(async(e,t,n,s,o)=>{if(0==(32&t.t)){t.t|=32,(o=(e=>{const t=e._.replace(/-/g,"_"),n=e.C,s=m.get(n);return s?s[t]:__sc_import_purple_web_components(`./${n}.entry.js`).then(e=>(m.set(n,e),e[t]),$)})(n)).then&&(o=await o),o.isProxied||(n.O=o.watchers,ee(o,n,2),o.isProxied=!0),t.t|=8;try{new o(t)}catch(e){$(e)}t.t&=-9,t.t|=128;const e=E(n._);!w.has(e)&&o.style&&((e,t,n)=>{let s=w.get(e);i&&n?(s=s||new CSSStyleSheet).replace(t):s=t,w.set(e,s)})(e,o.style,!!(1&n.t))}const r=t.k,l=()=>J(e,t,n,!0);r&&!1===r["s-lr"]&&r["s-rc"]?r["s-rc"].push(l):l()})(e,n,t))}}})(this,o))}disconnectedCallback(){c.jmp(()=>(()=>{if(0==(1&c.t)){const e=f(this);e.A&&(e.A(),e.A=void 0)}})())}"s-init"(){const e=f(this);e.o&&Q(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=f(e);2&n.t&&J(e,n,t,!1)}})(this,o)}componentOnReady(){return f(this).P}},o,1)))})),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),o.insertBefore(h,p?p.nextSibling:o.firstChild),c.jmp(()=>d=setTimeout(X,30))},ne=e=>f(e).U;export{x as a,te as b,ne as g,P as h,R as p,u as r};