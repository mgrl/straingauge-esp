"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[966],{9278:(e,a,o)=>{o.d(a,{Z:()=>c});var l=o(9835);function n(e,a,o,n,t,i){const u=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)(u,{label:o.caption,onClick:n.cmd},null,8,["label","onClick"])}const t={props:{caption:{type:String,required:!0},link:{type:String,required:!0,default:"/api/cmd"}},setup(e){function a(a){fetch(e.link,{method:"GET"}).then((e=>{200===e.status&&console.log(e)})).catch((e=>{console.error(e)}))}return{cmd:a}}};var i=o(1639),u=o(4455),r=o(9984),s=o.n(r);const d=(0,i.Z)(t,[["render",n]]),c=d;s()(t,"components",{QBtn:u.Z})},966:(e,a,o)=>{o.r(a),o.d(a,{default:()=>P});var l=o(9835);const n=(0,l._)("div",{class:"text-h4"},"System",-1),t=(0,l._)("div",{class:"text-h4"},"Sensor",-1),i=(0,l._)("div",{class:"text-h4"},"ADC",-1),u=(0,l._)("div",{class:"text-h4"},"Teach In",-1),r=(0,l._)("input",{hidden:"",name:"action",value:"calibrateToKnownValue"},null,-1),s={class:"q-gutter-xs"},d=(0,l._)("div",null,[(0,l._)("p",null,"Download configuration files from system memory:"),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l._)("a",{href:"/config/system.json",target:"_blank"},"system.json")]),(0,l._)("li",null,[(0,l._)("a",{href:"/config/sensor.json",target:"_blank"},"sensor.json")]),(0,l._)("li",null,[(0,l._)("a",{href:"/config/adc.json",target:"_blank"},"adc.json")])])],-1);function c(e,a,o,c,m,f){const g=(0,l.up)("q-card-section"),p=(0,l.up)("q-input"),b=(0,l.up)("q-form"),_=(0,l.up)("q-separator"),S=(0,l.up)("q-card"),V=(0,l.up)("q-select"),y=(0,l.up)("CmdLink"),v=(0,l.up)("q-card-actions"),W=(0,l.up)("q-btn"),w=(0,l.up)("q-page-sticky"),h=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(h,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[n])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" System Settings "),(0,l.Wm)(b,{action:"/api/config/system",method:"post",class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{type:"text",modelValue:e.configurationStore.config.system.hostname,"onUpdate:modelValue":a[0]||(a[0]=a=>e.configurationStore.config.system.hostname=a),label:"hostname"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"text",modelValue:e.configurationStore.config.system.wifi_ap_ssid,"onUpdate:modelValue":a[1]||(a[1]=a=>e.configurationStore.config.system.wifi_ap_ssid=a),label:"wifi_sta_ssid"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"text",modelValue:e.configurationStore.config.system.wifi_ap_password,"onUpdate:modelValue":a[2]||(a[2]=a=>e.configurationStore.config.system.wifi_ap_password=a),label:"wifi_sta_password"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(_)])),_:1}),(0,l.Wm)(S,{class:"q-my-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[t])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Straing Gauge Settings. "),(0,l.Wm)(b,{action:"/api/config/sensor",method:"post",class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{type:"text",modelValue:e.configurationStore.config.sensor.name,"onUpdate:modelValue":a[3]||(a[3]=a=>e.configurationStore.config.sensor.name=a),label:"name"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"text",modelValue:e.configurationStore.config.sensor.serial,"onUpdate:modelValue":a[4]||(a[4]=a=>e.configurationStore.config.sensor.serial=a),label:"serial"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"text",modelValue:e.configurationStore.config.sensor.displayunit,"onUpdate:modelValue":a[5]||(a[5]=a=>e.configurationStore.config.sensor.displayunit=a),label:"Displayunit"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"number",modelValue:e.configurationStore.config.sensor.fullrange,"onUpdate:modelValue":a[6]||(a[6]=a=>e.configurationStore.config.sensor.fullrange=a),label:"Fullrange"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"number",modelValue:e.configurationStore.config.sensor.sensitivity,"onUpdate:modelValue":a[7]||(a[7]=a=>e.configurationStore.config.sensor.sensitivity=a),label:"Sensitivity"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"number",modelValue:e.configurationStore.config.sensor.zerobalance,"onUpdate:modelValue":a[8]||(a[8]=a=>e.configurationStore.config.sensor.zerobalance=a),label:"Zerobalance"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"number",modelValue:e.configurationStore.config.sensor.digits,"onUpdate:modelValue":a[9]||(a[9]=a=>e.configurationStore.config.sensor.digits=a),label:"Digits"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(_)])),_:1}),(0,l.Wm)(S,{class:"q-my-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[i])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Amplifier and ADC. "),(0,l.Wm)(b,{action:"/api/config/adc",method:"post",class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{modelValue:e.configurationStore.config.adc.mode,"onUpdate:modelValue":a[10]||(a[10]=a=>e.configurationStore.config.adc.mode=a),options:e.options_ads1220_mode,label:"Operating Mode","emit-value":"","map-options":""},null,8,["modelValue","options"]),(0,l.Wm)(V,{modelValue:e.configurationStore.config.adc.datarate,"onUpdate:modelValue":a[11]||(a[11]=a=>e.configurationStore.config.adc.datarate=a),options:e.options_ads1220_datarate,label:"Datarate","emit-value":"","map-options":""},null,8,["modelValue","options"]),(0,l.Wm)(V,{modelValue:e.configurationStore.config.adc.gain,"onUpdate:modelValue":a[12]||(a[12]=a=>e.configurationStore.config.adc.gain=a),options:e.options_ads1220_gain,label:"Preamplifier Gain","emit-value":"","map-options":""},null,8,["modelValue","options"]),(0,l.Wm)(p,{type:"number",modelValue:e.configurationStore.config.adc.averagereadings,"onUpdate:modelValue":a[13]||(a[13]=a=>e.configurationStore.config.adc.averagereadings=a),label:"Average readings (number of readings to average)"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"number",modelValue:e.configurationStore.config.adc.cali_offset,"onUpdate:modelValue":a[14]||(a[14]=a=>e.configurationStore.config.adc.cali_offset=a),label:"ADC Offset calibration value"},null,8,["modelValue"]),(0,l.Wm)(p,{type:"number",modelValue:e.configurationStore.config.adc.cali_gain_factor,"onUpdate:modelValue":a[15]||(a[15]=a=>e.configurationStore.config.adc.cali_gain_factor=a),label:"ADC Gain calibration factor"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(_)])),_:1}),(0,l.Wm)(S,{class:"q-my-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[u])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Calibrate the force sensor to a known reference. 1. Tare the sensor 2. Apply a defined force to the sensor 3. Recalc the new calibration value "),(0,l.Wm)(b,{action:"/api/cmd",method:"post",class:"q-gutter-md"},{default:(0,l.w5)((()=>[r,(0,l.Wm)(p,{type:"text",name:"knownValue",modelValue:e.knownValue,"onUpdate:modelValue":a[16]||(a[16]=a=>e.knownValue=a),label:"Known Weight"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(_),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y,{link:"/api/cmd/TODO",caption:"Teach In Zerobalance"}),(0,l.Wm)(y,{link:"/api/cmd/TODO",caption:"Teach In Sensitivity"})])),_:1})])),_:1}),(0,l.Wm)(w,{position:"bottom-right",offset:[18,18]},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(y,{link:"/api/cmd/loadconfiguration",caption:"Load Config"}),(0,l.Wm)(y,{link:"/api/cmd/saveconfiguration",caption:"Persist Config"}),(0,l.Wm)(W,{label:"apply config",onClick:a[17]||(a[17]=a=>e.configurationStore.updateServer()),color:"primary"})])])),_:1}),d])),_:1})}var m=o(499),f=o(7575),g=o(6462),p=o(9278);const b=(0,l.aZ)({name:"SettingsPage",components:{CmdLink:p.Z},setup(){const e=(0,f.h)(),a=(0,g.w)(),o=(0,m.iH)(null),l=[{label:"Normal",value:0},{label:"Duty Cycle",value:1},{label:"Turbo",value:2}],n=[{label:"1x",value:0},{label:"2x",value:1},{label:"4x",value:2},{label:"8x",value:3},{label:"16x",value:4},{label:"32x",value:5},{label:"64x",value:6},{label:"128x",value:7}],t=[{label:"normal: 20, duty: 5, turbo: 40 SPS",value:0},{label:"normal: 45, duty: 11, turbo: 90 SPS",value:1},{label:"normal: 90, duty: 22, turbo: 180 SPS",value:2},{label:"normal: 175, duty: 44, turbo: 350 SPS",value:3},{label:"normal: 330, duty: 82, turbo: 660 SPS",value:4},{label:"normal: 600, duty: 150, turbo: 1200 SPS",value:5},{label:"normal: 1000, duty: 250, turbo: 2000 SPS",value:6}];return{store:e,configurationStore:a,knownValue:o,options_ads1220_mode:l,options_ads1220_gain:n,options_ads1220_datarate:t}}});var _=o(1639),S=o(9885),V=o(4458),y=o(3190),v=o(8326),W=o(6611),w=o(926),h=o(457),k=o(4455),q=o(1821),U=o(627),x=o(9984),C=o.n(x);const Z=(0,_.Z)(b,[["render",c]]),P=Z;C()(b,"components",{QPage:S.Z,QCard:V.Z,QCardSection:y.Z,QForm:v.Z,QInput:W.Z,QSeparator:w.Z,QSelect:h.Z,QBtn:k.Z,QCardActions:q.Z,QPageSticky:U.Z})}}]);