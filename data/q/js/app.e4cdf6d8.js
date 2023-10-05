(()=>{"use strict";var e={1443:(e,t,o)=>{var n=o(1957),r=o(3890),i=o(499),s=o(9835);function a(e,t,o,n,r,i){const a=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(a)}var l=o(7575),c=o(6462);let u;const d=(0,s.aZ)({name:"App",setup(){const e=(0,l.h)(),t=(0,c.w)();return{store:e,configurationStore:t}},methods:{async init(){this.configurationStore.initStore(),await this.until((e=>1==this.configurationStore.isLoaded)),this.initSseClient()},until(e){const t=o=>{e()?o():setTimeout((e=>t(o)),400)};return new Promise(t)},initSseClient(){console.log("init sse client"),u=this.$sse.create("/events").on("message",((e,t)=>{console.info("Received a message w/o an event!",e,t),this.store.messages=[`${e} (Msg received, lastEventId: ${t})`,...this.store.messages.slice(0,10)]})).on("error",(e=>console.error("Failed to parse or lost connection:",e))).on("force",(e=>{this.store.force=e,this.store.graph.data=[{x:++this.store.currentTick,y:e},...this.store.graph.data.slice(0,10)]})).on("reading",(e=>{this.store.reading=e})).on("battery",(e=>{this.store.battery=e})).on("ping",(e=>{this.store.ping=e})).connect().then((e=>{console.log("We're connected!")})).catch((e=>console.error("Failed make initial connection:",e)))}},async created(){console.log("app created, waiting for stores to init first dataset"),this.init(),console.log("data initialization finished")},mounted(){}});var h=o(1639);const p=(0,h.Z)(d,[["render",a]]),f=p;var g=o(3340),v=o(1809);const m=(0,g.h)((()=>{const e=(0,v.WB)();return e}));var b=o(8339);const y=[{path:"/",component:()=>Promise.all([o.e(736),o.e(902)]).then(o.bind(o,8902)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(564)]).then(o.bind(o,1564))},{path:"/Settings",component:()=>Promise.all([o.e(736),o.e(798)]).then(o.bind(o,798))},{path:"/Playground",component:()=>Promise.all([o.e(736),o.e(49)]).then(o.bind(o,9049))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(134)]).then(o.bind(o,4134))}],w=y,S=(0,g.BC)((function(){const e=b.r5,t=(0,b.p7)({scrollBehavior:()=>({left:0,top:0}),routes:w,history:e("")});return t}));async function O(e,t){const o=e(f);o.use(r.Z,t);const n="function"===typeof m?await m({}):m;o.use(n);const s=(0,i.Xl)("function"===typeof S?await S({store:n}):S);return n.use((({store:e})=>{e.router=s})),{app:o,store:n,router:s}}const P={config:{}},j="";async function k({app:e,router:t,store:o},n){let r=!1;const i=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},s=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},a=window.location.href.replace(window.location.origin,"");for(let c=0;!1===r&&c<n.length;c++)try{await n[c]({app:e,router:t,store:o,ssrContext:null,redirect:s,urlPath:a,publicPath:j})}catch(l){return l&&l.url?void s(l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&(e.use(t),e.mount("#q-app"))}O(n.ri,P).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(o.bind(o,5955))]).then((t=>{const o=n(t).filter((e=>"function"===typeof e));k(e,o)}))}))},5955:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});var n=o(3340),r=o(2681);const i=(0,n.xr)((({app:e})=>{e.use(r.ZP)}))},6462:(e,t,o)=>{o.d(t,{w:()=>i});var n=o(1809);const r={INIT:0,DONE:1,WIP:2,ERROR:3},i=(0,n.Q_)("configuration-store",{state:()=>({config:{system:{hostname:null,wifi_ap_mode:null,wifi_ap_ssid:null,wifi_ap_password:null,wifi_sta_ssid:null,wifi_sta_password:null},loadcell:{name:null,serial:null,fullrange:null,sensitivity:null,zerobalance:null,displayunit:null}},storeState:r.INIT}),actions:{initStore(e=!1){console.log("init store"),this.isLoaded&&0==e?console.log("items loaded once already, skipping"):(this.storeState=r.WIP,fetch("/api/config").then((e=>(console.log(e),e.json()))).then((e=>{console.log("Checkout this JSON! ",e),this.config=e,this.storeState=r.DONE})).catch((e=>{console.log("ERROR: ",e),this.storeState=r.ERROR})))},updateServer(){console.log("store send to server"),fetch("/api/config",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.config)}).then((e=>(console.log(e),e.json()))).then((e=>{console.log("Checkout this JSON! ",e),this.initStore(!0)})).catch((e=>{console.log("ERROR: ",e)}))}},getters:{isLoaded(){return this.storeState===r.DONE},isLoading(){return this.storeState===r.WIP}}})},7575:(e,t,o)=>{o.d(t,{h:()=>i});var n=o(1809),r=o(499);const i=(0,n.Q_)("main-store",{state:()=>({counter:0,settings:{sensorSelected:(0,r.iH)([]),sensors:[{id:0,desc:"test",unit:"N",serial:"1234",calibOffset:.1,calibSensitivity:329},{id:2,desc:"test1",unit:"N",serial:"12341243",calibOffset:.1,calibSensitivity:329}]},localSettings:{},currentTick:0,graph:{data:[]},messages:[],reading:null,force:null,battery:null,ping:null}),getters:{},actions:{}})}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,(()=>{var e=[];o.O=(t,n,r,i)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],a=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{49:"525c2e04",134:"b16eb19c",564:"ba9f8326",798:"0017b7aa",902:"9c4f7a9d"}[e]+".js"})(),(()=>{o.miniCssF=e=>{}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-project:";o.l=(n,r,i,s)=>{if(e[n])e[n].push(r);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[r];var h=(t,o)=>{a.onerror=a.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(o))),t)return t(o)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e={143:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((o,n)=>r=e[t]=[o,n]));n.push(r[2]=i);var s=o.p+o.u(t),a=new Error,l=n=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};o.l(s,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[s,a,l]=n,c=0;if(s.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var u=l(o)}for(t&&t(n);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[736],(()=>o(1443)));n=o.O(n)})();