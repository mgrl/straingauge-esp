"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[657],{9278:(e,l,a)=>{a.d(l,{Z:()=>m});var o=a(9835);function n(e,l,a,n,t,i){const u=(0,o.up)("q-btn");return(0,o.wg)(),(0,o.j4)(u,{label:a.caption,onClick:n.cmd},null,8,["label","onClick"])}const t={props:{caption:{type:String,required:!0},link:{type:String,required:!0,default:"/api/cmd"}},setup(e){function l(l){fetch(e.link,{method:"GET"}).then((e=>{200===e.status&&console.log(e)})).catch((e=>{console.error(e)}))}return{cmd:l}}};var i=a(1639),u=a(4455),r=a(9984),s=a.n(r);const c=(0,i.Z)(t,[["render",n]]),m=c;s()(t,"components",{QBtn:u.Z})},7657:(e,l,a)=>{a.r(l),a.d(l,{default:()=>T});var o=a(9835);const n=(0,o._)("div",{class:"text-h4"},"System",-1),t=(0,o._)("div",{class:"text-h4"},"Sensor",-1),i=(0,o._)("div",{class:"text-h4"},"ADC",-1),u=(0,o._)("div",{class:"text-h4"},"Teach In",-1),r=(0,o._)("input",{hidden:"",name:"action",value:"calibrateToKnownValue"},null,-1),s={class:"q-gutter-xs"},c=(0,o._)("div",null,[(0,o._)("p",null,"Download configuration files from system memory:"),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",{href:"/config/system.json",target:"_blank"},"system.json")]),(0,o._)("li",null,[(0,o._)("a",{href:"/config/sensor.json",target:"_blank"},"sensor.json")]),(0,o._)("li",null,[(0,o._)("a",{href:"/config/adc.json",target:"_blank"},"adc.json")])])],-1);function m(e,l,a,m,d,f){const p=(0,o.up)("q-card-section"),g=(0,o.up)("q-input"),_=(0,o.up)("q-toggle"),b=(0,o.up)("q-form"),V=(0,o.up)("q-separator"),S=(0,o.up)("q-card"),v=(0,o.up)("q-select"),w=(0,o.up)("CmdLink"),y=(0,o.up)("q-card-actions"),W=(0,o.up)("q-btn"),h=(0,o.up)("q-page-sticky"),k=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(k,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[n])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" System Settings "),(0,o.Wm)(b,{action:"/api/config/system",method:"post",class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{type:"text",modelValue:e.configurationStore.config.system.hostname,"onUpdate:modelValue":l[0]||(l[0]=l=>e.configurationStore.config.system.hostname=l),label:"hostname"},null,8,["modelValue"]),(0,o.Wm)(_,{modelValue:e.configurationStore.config.system.wifi_ap_mode,"onUpdate:modelValue":l[1]||(l[1]=l=>e.configurationStore.config.system.wifi_ap_mode=l),label:"ap mode"},null,8,["modelValue"]),(0,o.Wm)(g,{type:"text",modelValue:e.configurationStore.config.system.wifi_ap_ssid,"onUpdate:modelValue":l[2]||(l[2]=l=>e.configurationStore.config.system.wifi_ap_ssid=l),label:"wifi_sta_ssid"},null,8,["modelValue"]),(0,o.Wm)(g,{type:"text",modelValue:e.configurationStore.config.system.wifi_ap_password,"onUpdate:modelValue":l[3]||(l[3]=l=>e.configurationStore.config.system.wifi_ap_password=l),label:"wifi_sta_password"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(V)])),_:1}),(0,o.Wm)(S,{class:"q-my-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[t])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" Straing Gauge Settings. "),(0,o.Wm)(b,{action:"/api/config/sensor",method:"post",class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{type:"text",modelValue:e.configurationStore.config.sensor.name,"onUpdate:modelValue":l[4]||(l[4]=l=>e.configurationStore.config.sensor.name=l),label:"name"},null,8,["modelValue"]),(0,o.Wm)(g,{type:"text",modelValue:e.configurationStore.config.sensor.serial,"onUpdate:modelValue":l[5]||(l[5]=l=>e.configurationStore.config.sensor.serial=l),label:"serial"},null,8,["modelValue"]),(0,o.Wm)(g,{type:"text",modelValue:e.configurationStore.config.sensor.displayunit,"onUpdate:modelValue":l[6]||(l[6]=l=>e.configurationStore.config.sensor.displayunit=l),label:"Displayunit"},null,8,["modelValue"]),(0,o.Wm)(g,{type:"number",modelValue:e.configurationStore.config.sensor.fullrange,"onUpdate:modelValue":l[7]||(l[7]=l=>e.configurationStore.config.sensor.fullrange=l),label:"Fullrange"},null,8,["modelValue"]),(0,o.Wm)(g,{type:"number",modelValue:e.configurationStore.config.sensor.sensitivity,"onUpdate:modelValue":l[8]||(l[8]=l=>e.configurationStore.config.sensor.sensitivity=l),label:"Sensitivity"},null,8,["modelValue"]),(0,o.Wm)(g,{type:"number",modelValue:e.configurationStore.config.sensor.zerobalance,"onUpdate:modelValue":l[9]||(l[9]=l=>e.configurationStore.config.sensor.zerobalance=l),label:"Zerobalance"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(V)])),_:1}),(0,o.Wm)(S,{class:"q-my-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" Amplifier and ADC. "),(0,o.Wm)(b,{action:"/api/config/adc",method:"post",class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{modelValue:e.configurationStore.config.adc.ldovoltage,"onUpdate:modelValue":l[10]||(l[10]=l=>e.configurationStore.config.adc.ldovoltage=l),options:e.options_nau7802_ldovoltage,label:"Excitation Voltage","emit-value":"","map-options":""},null,8,["modelValue","options"]),(0,o.Wm)(v,{modelValue:e.configurationStore.config.adc.gain,"onUpdate:modelValue":l[11]||(l[11]=l=>e.configurationStore.config.adc.gain=l),options:e.options_nau7802_gain,label:"Preamplifier Gain","emit-value":"","map-options":""},null,8,["modelValue","options"]),(0,o.Wm)(v,{modelValue:e.configurationStore.config.adc.samplerate,"onUpdate:modelValue":l[12]||(l[12]=l=>e.configurationStore.config.adc.samplerate=l),options:e.options_nau7802_samplerate,label:"Samplerate","emit-value":"","map-options":""},null,8,["modelValue","options"]),(0,o.Wm)(g,{type:"number",modelValue:e.configurationStore.config.adc.cali_offset,"onUpdate:modelValue":l[13]||(l[13]=l=>e.configurationStore.config.adc.cali_offset=l),label:"ADC Offset calibration value"},null,8,["modelValue"]),(0,o.Wm)(g,{type:"number",modelValue:e.configurationStore.config.adc.cali_gain_factor,"onUpdate:modelValue":l[14]||(l[14]=l=>e.configurationStore.config.adc.cali_gain_factor=l),label:"ADC Gain calibration factor"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(V)])),_:1}),(0,o.Wm)(S,{class:"q-my-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" Calibrate the force sensor to a known reference. 1. Tare the sensor 2. Apply a defined force to the sensor 3. Recalc the new calibration value "),(0,o.Wm)(b,{action:"/api/cmd",method:"post",class:"q-gutter-md"},{default:(0,o.w5)((()=>[r,(0,o.Wm)(g,{type:"text",name:"knownValue",modelValue:e.knownValue,"onUpdate:modelValue":l[15]||(l[15]=l=>e.knownValue=l),label:"Known Weight"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(V),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{link:"/api/cmd/TODO",caption:"Teach In Zerobalance"}),(0,o.Wm)(w,{link:"/api/cmd/TODO",caption:"Teach In Sensitivity"})])),_:1})])),_:1}),(0,o.Wm)(h,{position:"bottom-right",offset:[18,18]},{default:(0,o.w5)((()=>[(0,o._)("div",s,[(0,o.Wm)(w,{link:"/api/cmd/loadconfiguration",caption:"Load Config"}),(0,o.Wm)(w,{link:"/api/cmd/saveconfiguration",caption:"Persist Config"}),(0,o.Wm)(W,{label:"apply config",onClick:l[16]||(l[16]=l=>e.configurationStore.updateServer()),color:"primary"})])])),_:1}),c])),_:1})}var d=a(499),f=a(7575),p=a(6462),g=a(9278);const _=(0,o.aZ)({name:"SettingsPage",components:{CmdLink:g.Z},setup(){const e=(0,f.h)(),l=(0,p.w)(),a=(0,d.iH)(null),o=[{label:"4,5 V",value:0},{label:"4,2 V",value:1},{label:"3,9 V",value:2},{label:"3,6 V",value:3},{label:"3,3 V",value:4},{label:"3,0 V",value:5},{label:"2,7 V",value:6},{label:"2,4 V",value:7},{label:"external",value:8}],n=[{label:"1x",value:0},{label:"2x",value:1},{label:"4x",value:2},{label:"8x",value:3},{label:"16x",value:4},{label:"32x",value:5},{label:"64x",value:6},{label:"128x",value:7}],t=[{label:"10 SPS",value:0},{label:"20 SPS",value:1},{label:"40 SPS",value:2},{label:"80 SPS",value:3},{label:"320 SPS",value:7}];return{store:e,configurationStore:l,knownValue:a,options_nau7802_ldovoltage:o,options_nau7802_gain:n,options_nau7802_samplerate:t}}});var b=a(1639),V=a(9885),S=a(4458),v=a(3190),w=a(8326),y=a(6611),W=a(3175),h=a(926),k=a(457),q=a(4455),x=a(1821),U=a(627),Z=a(9984),C=a.n(Z);const Q=(0,b.Z)(_,[["render",m]]),T=Q;C()(_,"components",{QPage:V.Z,QCard:S.Z,QCardSection:v.Z,QForm:w.Z,QInput:y.Z,QToggle:W.Z,QSeparator:h.Z,QSelect:k.Z,QBtn:q.Z,QCardActions:x.Z,QPageSticky:U.Z})}}]);