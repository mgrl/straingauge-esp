"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[49],{9049:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var l=s(9835),a=s(6970);const n=(0,l._)("div",{class:"text-h6"},"Playground",-1),o=(0,l._)("div",{class:"text-h6"},"Store test",-1),i=(0,l._)("div",null,"forces",-1),r=(0,l._)("p",null,"Settings",-1),c={class:"q-mt-md"},d={class:"q-mt-md"};function u(e,t,s,u,f,m){const p=(0,l.up)("q-card-section"),g=(0,l.up)("q-separator"),w=(0,l.up)("q-btn"),b=(0,l.up)("q-card-actions"),h=(0,l.up)("q-card"),_=(0,l.up)("q-table"),k=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(k,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:""},{default:(0,l.w5)((()=>[n])),_:1}),(0,l.Wm)(p),(0,l.Wm)(g),(0,l.Wm)(b,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{onClick:t[0]||(t[0]=e=>m.cmdApiInvoke("/api/cmd/tare"))},{default:(0,l.w5)((()=>[(0,l.Uk)("TARE")])),_:1}),(0,l.Wm)(w,{onClick:t[1]||(t[1]=e=>m.cmdApiInvoke("/status/wifi-info"))},{default:(0,l.w5)((()=>[(0,l.Uk)("getWifiInfo")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:""},{default:(0,l.w5)((()=>[o])),_:1}),(0,l.Wm)(p,{class:""},{default:(0,l.w5)((()=>[i,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.store.graph.data,((e,t)=>((0,l.wg)(),(0,l.iD)("span",{key:t},(0,a.zw)(e)+"N ",1)))),128)),r,(0,l._)("p",null,(0,a.zw)(u.store.settings),1),(0,l._)("p",null,(0,a.zw)(u.store.counter)+" "+(0,a.zw)(u.store.doubleCount),1)])),_:1}),(0,l.Wm)(b,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{onClick:t[2]||(t[2]=e=>u.store.increment())},{default:(0,l.w5)((()=>[(0,l.Uk)("counter++")])),_:1})])),_:1})])),_:1}),(0,l._)("div",c,[(0,l.Wm)(_,{title:"Sensor Database",rows:this.store.settings.sensors,columns:u.columns,"row-key":"id",selection:"single",selected:u.store.settings.sensorSelected,"onUpdate:selected":t[3]||(t[3]=e=>u.store.settings.sensorSelected=e)},null,8,["rows","columns","selected"]),(0,l._)("div",d," Selected: "+(0,a.zw)(JSON.stringify(u.store.settings.sensorSelected)),1)])])),_:1})}var f=s(7575);const m={name:"App",methods:{cmdApiInvoke:function(e){fetch(e).then((e=>e.json())).then((e=>console.log("Checkout this JSON! ",e))).catch((e=>console.log("Checkout this error! ",e)))}},setup(){const e=(0,f.h)(),t=[{name:"id",align:"left",label:"#",field:"id",required:!0,sortable:!0},{name:"desc",required:!0,label:"Description",align:"left",field:"desc"},{name:"unit",label:"Unit",field:"unit"},{name:"serial",label:"Serial",field:"serial"},{name:"calibOffset",label:"Zero Offset",field:"calibOffset"},{name:"calibSensitivity",label:"Sensitivity",field:"calibSensitivity"}];return{store:e,calibrationFactor:null,columns:t,options:["Google","Facebook","Twitter","Apple","Oracle"]}},computed:{datasetsfull(){return{datasets:[{label:"Data One",backgroundColor:"#f87979",data:this.store.graph.data}]}}},data(){return{}},components:{}};var p=s(1639),g=s(9885),w=s(4458),b=s(3190),h=s(926),_=s(1821),k=s(4455),v=s(8272),S=s(9984),W=s.n(S);const q=(0,p.Z)(m,[["render",u]]),C=q;W()(m,"components",{QPage:g.Z,QCard:w.Z,QCardSection:b.Z,QSeparator:h.Z,QCardActions:_.Z,QBtn:k.Z,QTable:v.Z})}}]);