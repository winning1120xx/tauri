"use strict";var __TAURI_IIFE__=(()=>{var S=Object.defineProperty;var he=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var _e=Object.prototype.hasOwnProperty;var c=(t,e)=>{for(var n in e)S(t,n,{get:e[n],enumerable:!0})},Pe=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of be(e))!_e.call(t,a)&&a!==n&&S(t,a,{get:()=>e[a],enumerable:!(r=he(e,a))||r.enumerable});return t};var we=t=>Pe(S({},"__esModule",{value:!0}),t);var an={};c(an,{app:()=>T,cli:()=>C,clipboard:()=>W,dialog:()=>A,event:()=>I,fs:()=>N,globalShortcut:()=>H,http:()=>V,invoke:()=>sn,notification:()=>G,os:()=>J,path:()=>j,process:()=>q,shell:()=>$,tauri:()=>F,updater:()=>Q,window:()=>Y});var T={};c(T,{getName:()=>De,getTauriVersion:()=>Re,getVersion:()=>Le,hide:()=>Ee,show:()=>Ue});var F={};c(F,{convertFileSrc:()=>Me,invoke:()=>h,transformCallback:()=>m});function ve(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function m(t,e=!1){let n=ve(),r=`_${n}`;return Object.defineProperty(window,r,{value:a=>(e&&Reflect.deleteProperty(window,r),t?.(a)),writable:!1,configurable:!0}),n}async function h(t,e={}){return new Promise((n,r)=>{let a=m(l=>{n(l),Reflect.deleteProperty(window,`_${o}`)},!0),o=m(l=>{r(l),Reflect.deleteProperty(window,`_${a}`)},!0);window.__TAURI_IPC__({cmd:t,callback:a,error:o,...e})})}function Me(t,e="asset"){let n=encodeURIComponent(t);return navigator.userAgent.includes("Windows")?`https://${e}.localhost/${n}`:`${e}://localhost/${n}`}async function i(t){return h("tauri",t)}async function Le(){return i({__tauriModule:"App",message:{cmd:"getAppVersion"}})}async function De(){return i({__tauriModule:"App",message:{cmd:"getAppName"}})}async function Re(){return i({__tauriModule:"App",message:{cmd:"getTauriVersion"}})}async function Ue(){return i({__tauriModule:"App",message:{cmd:"show"}})}async function Ee(){return i({__tauriModule:"App",message:{cmd:"hide"}})}var C={};c(C,{getMatches:()=>Oe});async function Oe(){return i({__tauriModule:"Cli",message:{cmd:"cliMatches"}})}var W={};c(W,{readText:()=>Fe,writeText:()=>Se});async function Se(t){return i({__tauriModule:"Clipboard",message:{cmd:"writeText",data:t}})}async function Fe(){return i({__tauriModule:"Clipboard",message:{cmd:"readText",data:null}})}var A={};c(A,{ask:()=>Ae,confirm:()=>xe,message:()=>We,open:()=>Te,save:()=>Ce});async function Te(t={}){return typeof t=="object"&&Object.freeze(t),i({__tauriModule:"Dialog",message:{cmd:"openDialog",options:t}})}async function Ce(t={}){return typeof t=="object"&&Object.freeze(t),i({__tauriModule:"Dialog",message:{cmd:"saveDialog",options:t}})}async function We(t,e){let n=typeof e=="string"?{title:e}:e;return i({__tauriModule:"Dialog",message:{cmd:"messageDialog",message:t.toString(),title:n?.title?.toString(),type:n?.type}})}async function Ae(t,e){let n=typeof e=="string"?{title:e}:e;return i({__tauriModule:"Dialog",message:{cmd:"askDialog",message:t.toString(),title:n?.title?.toString(),type:n?.type}})}async function xe(t,e){let n=typeof e=="string"?{title:e}:e;return i({__tauriModule:"Dialog",message:{cmd:"confirmDialog",message:t.toString(),title:n?.title?.toString(),type:n?.type}})}var I={};c(I,{TauriEvent:()=>M,emit:()=>L,listen:()=>x,once:()=>k});async function B(t,e){return i({__tauriModule:"Event",message:{cmd:"unlisten",event:t,eventId:e}})}async function w(t,e,n){await i({__tauriModule:"Event",message:{cmd:"emit",event:t,windowLabel:e,payload:n}})}async function b(t,e,n){return i({__tauriModule:"Event",message:{cmd:"listen",event:t,windowLabel:e,handler:m(n)}}).then(r=>async()=>B(t,r))}async function v(t,e,n){return b(t,e,r=>{n(r),B(t,r.id).catch(()=>{})})}var M=(u=>(u.WINDOW_RESIZED="tauri://resize",u.WINDOW_MOVED="tauri://move",u.WINDOW_CLOSE_REQUESTED="tauri://close-requested",u.WINDOW_CREATED="tauri://window-created",u.WINDOW_DESTROYED="tauri://destroyed",u.WINDOW_FOCUS="tauri://focus",u.WINDOW_BLUR="tauri://blur",u.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",u.WINDOW_THEME_CHANGED="tauri://theme-changed",u.WINDOW_FILE_DROP="tauri://file-drop",u.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",u.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",u.MENU="tauri://menu",u.CHECK_UPDATE="tauri://update",u.UPDATE_AVAILABLE="tauri://update-available",u.INSTALL_UPDATE="tauri://update-install",u.STATUS_UPDATE="tauri://update-status",u.DOWNLOAD_PROGRESS="tauri://update-download-progress",u))(M||{});async function x(t,e){return b(t,null,e)}async function k(t,e){return v(t,null,e)}async function L(t,e){return w(t,void 0,e)}var N={};c(N,{BaseDirectory:()=>D,FsFile:()=>_,SeekMode:()=>ee,close:()=>te,copyFile:()=>Ne,create:()=>Ie,exists:()=>Be,fstat:()=>re,ftruncate:()=>se,lstat:()=>Ze,mkdir:()=>He,open:()=>ze,read:()=>ne,readDir:()=>Ve,readFile:()=>Ge,readTextFile:()=>je,readTextFileLines:()=>qe,remove:()=>$e,rename:()=>Ke,seek:()=>ie,stat:()=>Qe,truncate:()=>Ye,write:()=>ae,writeFile:()=>Je,writeTextFile:()=>Xe});function d(){return navigator.appVersion.includes("Win")}var D=(s=>(s[s.Audio=1]="Audio",s[s.Cache=2]="Cache",s[s.Config=3]="Config",s[s.Data=4]="Data",s[s.LocalData=5]="LocalData",s[s.Desktop=6]="Desktop",s[s.Document=7]="Document",s[s.Download=8]="Download",s[s.Executable=9]="Executable",s[s.Font=10]="Font",s[s.Home=11]="Home",s[s.Picture=12]="Picture",s[s.Public=13]="Public",s[s.Runtime=14]="Runtime",s[s.Template=15]="Template",s[s.Video=16]="Video",s[s.Resource=17]="Resource",s[s.App=18]="App",s[s.Log=19]="Log",s[s.Temp=20]="Temp",s[s.AppConfig=21]="AppConfig",s[s.AppData=22]="AppData",s[s.AppLocalData=23]="AppLocalData",s[s.AppCache=24]="AppCache",s[s.AppLog=25]="AppLog",s))(D||{}),ee=(r=>(r[r.Start=0]="Start",r[r.Current=1]="Current",r[r.End=2]="End",r))(ee||{});function z(t){let e=!d();return{isFile:t.isFile,isDirectory:t.isDirectory,isSymlink:t.isSymlink,size:t.size,mtime:t.mtime!=null?new Date(t.mtime):null,atime:t.atime!=null?new Date(t.atime):null,birthtime:t.birthtime!=null?new Date(t.birthtime):null,dev:e?t.dev:null,ino:e?t.ino:null,mode:e?t.mode:null,nlink:e?t.nlink:null,uid:e?t.uid:null,gid:e?t.gid:null,rdev:e?t.rdev:null,blksize:e?t.blksize:null,blocks:e?t.blocks:null}}var _=class{constructor(e){this.rid=e}async read(e){return ne(this.rid,e)}async seek(e,n){return ie(this.rid,e,n)}async stat(){return re(this.rid)}async truncate(e){return se(this.rid,e)}async write(e){return ae(this.rid,e)}async close(){return te(this.rid)}};async function Ie(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");let n=await i({__tauriModule:"Fs",message:{cmd:"create",path:t instanceof URL?t.toString():t,options:e}});return new _(n)}async function ze(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");let n=await i({__tauriModule:"Fs",message:{cmd:"open",path:t instanceof URL?t.toString():t,options:e}});return new _(n)}async function te(t){return i({__tauriModule:"Fs",message:{cmd:"close",rid:t}})}async function Ne(t,e,n){if(t instanceof URL&&t.protocol!=="file:"||e instanceof URL&&e.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"copyFile",fromPath:t instanceof URL?t.toString():t,toPath:e instanceof URL?e.toString():e,options:n}})}async function He(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"mkdir",path:t instanceof URL?t.toString():t,options:e}})}async function Ve(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"readDir",path:t instanceof URL?t.toString():t,options:e}})}async function ne(t,e){if(e.byteLength===0)return 0;let[n,r]=await i({__tauriModule:"Fs",message:{cmd:"read",rid:t,len:e.byteLength}});return e.set(n),r===0?null:r}async function Ge(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");let n=await i({__tauriModule:"Fs",message:{cmd:"readFile",path:t instanceof URL?t.toString():t,options:e}});return Uint8Array.from(n)}async function je(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"readTextFile",path:t instanceof URL?t.toString():t,options:e}})}async function qe(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");let n=t instanceof URL?t.toString():t;return Promise.resolve({path:n,rid:null,async next(){this.rid||(this.rid=await i({__tauriModule:"Fs",message:{cmd:"readTextFileLines",path:n,options:e}}));let[r,a]=await i({__tauriModule:"Fs",message:{cmd:"readTextFileLinesNext",rid:this.rid}});return a&&(this.rid=null),{value:a?"":r,done:a}},[Symbol.asyncIterator](){return this}})}async function $e(t,e){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"remove",path:t instanceof URL?t.toString():t,options:e}})}async function Ke(t,e,n){if(t instanceof URL&&t.protocol!=="file:"||e instanceof URL&&e.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"rename",oldPath:t instanceof URL?t.toString():t,newPath:e instanceof URL?e.toString():e,options:n}})}async function ie(t,e,n){return i({__tauriModule:"Fs",message:{cmd:"seek",rid:t,offset:e,whence:n}})}async function Qe(t,e){let n=await i({__tauriModule:"Fs",message:{cmd:"stat",path:t instanceof URL?t.toString():t,options:e}});return z(n)}async function Ze(t,e){let n=await i({__tauriModule:"Fs",message:{cmd:"lstat",path:t instanceof URL?t.toString():t,options:e}});return z(n)}async function re(t){let e=await i({__tauriModule:"Fs",message:{cmd:"fstat",rid:t}});return z(e)}async function Ye(t,e,n){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"truncate",path:t instanceof URL?t.toString():t,len:e,options:n}})}async function se(t,e){return i({__tauriModule:"Fs",message:{cmd:"ftruncate",rid:t,len:e}})}async function ae(t,e){return i({__tauriModule:"Fs",message:{cmd:"write",rid:t,data:Array.from(e)}})}async function Je(t,e,n){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"writeFile",path:t instanceof URL?t.toString():t,data:Array.from(e),options:n}})}async function Xe(t,e,n){if(t instanceof URL&&t.protocol!=="file:")throw new TypeError("Must be a file URL.");return i({__tauriModule:"Fs",message:{cmd:"writeTextFile",path:t instanceof URL?t.toString():t,data:e,options:n}})}async function Be(t,e){return i({__tauriModule:"Fs",message:{cmd:"exists",path:t,options:e}})}var H={};c(H,{isRegistered:()=>nt,register:()=>et,registerAll:()=>tt,unregister:()=>it,unregisterAll:()=>rt});async function et(t,e){return i({__tauriModule:"GlobalShortcut",message:{cmd:"register",shortcut:t,handler:m(e)}})}async function tt(t,e){return i({__tauriModule:"GlobalShortcut",message:{cmd:"registerAll",shortcuts:t,handler:m(e)}})}async function nt(t){return i({__tauriModule:"GlobalShortcut",message:{cmd:"isRegistered",shortcut:t}})}async function it(t){return i({__tauriModule:"GlobalShortcut",message:{cmd:"unregister",shortcut:t}})}async function rt(){return i({__tauriModule:"GlobalShortcut",message:{cmd:"unregisterAll"}})}var V={};c(V,{fetch:()=>st});async function st(t,e){let n=new Request(t,e),r=await n.arrayBuffer(),a=r.byteLength?Array.from(new Uint8Array(r)):null,[o,l]=await i({__tauriModule:"Http",message:{cmd:"fetch",method:n.method,url:n.url,headers:Array.from(n.headers.entries()),data:a}});l&&n.signal.addEventListener("abort",on=>{i({__tauriModule:"Http",message:{cmd:"fetchCancel",rid:l}})});let{status:de,statusText:ge,url:pe,headers:fe,data:ye}=await i({__tauriModule:"Http",message:{cmd:"fetchSend",rid:o}}),X=new Response(Uint8Array.from(ye),{headers:fe,status:de,statusText:ge});return Object.defineProperty(X,"url",{value:pe}),X}var G={};c(G,{isPermissionGranted:()=>at,requestPermission:()=>ot,sendNotification:()=>lt});async function at(){return window.Notification.permission!=="default"?Promise.resolve(window.Notification.permission==="granted"):i({__tauriModule:"Notification",message:{cmd:"isNotificationPermissionGranted"}})}async function ot(){return window.Notification.requestPermission()}function lt(t){typeof t=="string"?new window.Notification(t):new window.Notification(t.title,t)}var j={};c(j,{BaseDirectory:()=>D,appCacheDir:()=>dt,appConfigDir:()=>oe,appDataDir:()=>ct,appDir:()=>ut,appLocalDataDir:()=>mt,appLogDir:()=>le,audioDir:()=>gt,basename:()=>Nt,cacheDir:()=>pt,configDir:()=>ft,dataDir:()=>yt,delimiter:()=>Wt,desktopDir:()=>ht,dirname:()=>It,documentDir:()=>bt,downloadDir:()=>_t,executableDir:()=>Pt,extname:()=>zt,fontDir:()=>wt,homeDir:()=>vt,isAbsolute:()=>Ht,join:()=>kt,localDataDir:()=>Mt,logDir:()=>Ft,normalize:()=>xt,pictureDir:()=>Lt,publicDir:()=>Dt,resolve:()=>At,resolveResource:()=>Ut,resourceDir:()=>Rt,runtimeDir:()=>Et,sep:()=>Ct,tempDir:()=>Tt,templateDir:()=>Ot,videoDir:()=>St});async function ut(){return oe()}async function oe(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:21}})}async function ct(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:22}})}async function mt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:23}})}async function dt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:24}})}async function gt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:1}})}async function pt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:2}})}async function ft(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:3}})}async function yt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:4}})}async function ht(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:6}})}async function bt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:7}})}async function _t(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:8}})}async function Pt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:9}})}async function wt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:10}})}async function vt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:11}})}async function Mt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:5}})}async function Lt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:12}})}async function Dt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:13}})}async function Rt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:17}})}async function Ut(t){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:t,directory:17}})}async function Et(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:14}})}async function Ot(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:15}})}async function St(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:16}})}async function Ft(){return le()}async function le(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:25}})}async function Tt(){return i({__tauriModule:"Path",message:{cmd:"tempDir"}})}var Ct=d()?"\\":"/",Wt=d()?";":":";async function At(...t){return i({__tauriModule:"Path",message:{cmd:"resolve",paths:t}})}async function xt(t){return i({__tauriModule:"Path",message:{cmd:"normalize",path:t}})}async function kt(...t){return i({__tauriModule:"Path",message:{cmd:"join",paths:t}})}async function It(t){return i({__tauriModule:"Path",message:{cmd:"dirname",path:t}})}async function zt(t){return i({__tauriModule:"Path",message:{cmd:"extname",path:t}})}async function Nt(t,e){return i({__tauriModule:"Path",message:{cmd:"basename",path:t,ext:e}})}async function Ht(t){return i({__tauriModule:"Path",message:{cmd:"isAbsolute",path:t}})}var q={};c(q,{exit:()=>Vt,relaunch:()=>Gt});async function Vt(t=0){return i({__tauriModule:"Process",message:{cmd:"exit",exitCode:t}})}async function Gt(){return i({__tauriModule:"Process",message:{cmd:"relaunch"}})}var $={};c($,{Child:()=>R,Command:()=>P,EventEmitter:()=>p,open:()=>qt});async function jt(t,e,n=[],r){return typeof n=="object"&&Object.freeze(n),i({__tauriModule:"Shell",message:{cmd:"execute",program:e,args:n,options:r,onEventFn:m(t)}})}var p=class{constructor(){this.eventListeners=Object.create(null)}addListener(e,n){return this.on(e,n)}removeListener(e,n){return this.off(e,n)}on(e,n){return e in this.eventListeners?this.eventListeners[e].push(n):this.eventListeners[e]=[n],this}once(e,n){let r=(...a)=>{this.removeListener(e,r),n(...a)};return this.addListener(e,r)}off(e,n){return e in this.eventListeners&&(this.eventListeners[e]=this.eventListeners[e].filter(r=>r!==n)),this}removeAllListeners(e){return e?delete this.eventListeners[e]:this.eventListeners=Object.create(null),this}emit(e,...n){if(e in this.eventListeners){let r=this.eventListeners[e];for(let a of r)a(...n);return!0}return!1}listenerCount(e){return e in this.eventListeners?this.eventListeners[e].length:0}prependListener(e,n){return e in this.eventListeners?this.eventListeners[e].unshift(n):this.eventListeners[e]=[n],this}prependOnceListener(e,n){let r=(...a)=>{this.removeListener(e,r),n(...a)};return this.prependListener(e,r)}},R=class{constructor(e){this.pid=e}async write(e){return i({__tauriModule:"Shell",message:{cmd:"stdinWrite",pid:this.pid,buffer:typeof e=="string"?e:Array.from(e)}})}async kill(){return i({__tauriModule:"Shell",message:{cmd:"killChild",pid:this.pid}})}},P=class extends p{constructor(n,r=[],a){super();this.stdout=new p;this.stderr=new p;this.program=n,this.args=typeof r=="string"?[r]:r,this.options=a??{}}static sidecar(n,r=[],a){let o=new P(n,r,a);return o.options.sidecar=!0,o}async spawn(){return jt(n=>{switch(n.event){case"Error":this.emit("error",n.payload);break;case"Terminated":this.emit("close",n.payload);break;case"Stdout":this.stdout.emit("data",n.payload);break;case"Stderr":this.stderr.emit("data",n.payload);break}},this.program,this.args,this.options).then(n=>new R(n))}async execute(){return new Promise((n,r)=>{this.on("error",r);let a=[],o=[];this.stdout.on("data",l=>{a.push(l)}),this.stderr.on("data",l=>{o.push(l)}),this.on("close",l=>{n({code:l.code,signal:l.signal,stdout:a.join(`
`),stderr:o.join(`
`)})}),this.spawn().catch(r)})}};async function qt(t,e){return i({__tauriModule:"Shell",message:{cmd:"open",path:t,with:e}})}var Q={};c(Q,{checkUpdate:()=>Kt,installUpdate:()=>$t,onUpdaterEvent:()=>K});async function K(t){return x("tauri://update-status",e=>{t(e?.payload)})}async function $t(){let t;function e(){t&&t(),t=void 0}return new Promise((n,r)=>{function a(o){if(o.error)return e(),r(o.error);if(o.status==="DONE")return e(),n()}K(a).then(o=>{t=o}).catch(o=>{throw e(),o}),L("tauri://update-install").catch(o=>{throw e(),o})})}async function Kt(){let t;function e(){t&&t(),t=void 0}return new Promise((n,r)=>{function a(l){return e(),n({manifest:l,shouldUpdate:!0})}function o(l){if(l.error)return e(),r(l.error);if(l.status==="UPTODATE")return e(),n({shouldUpdate:!1})}k("tauri://update-available",l=>{a(l?.payload)}).catch(l=>{throw e(),l}),K(o).then(l=>{t=l}).catch(l=>{throw e(),l}),L("tauri://update").catch(l=>{throw e(),l})})}var Y={};c(Y,{CloseRequestedEvent:()=>O,LogicalPosition:()=>E,LogicalSize:()=>U,PhysicalPosition:()=>y,PhysicalSize:()=>f,UserAttentionType:()=>ce,Window:()=>g,availableMonitors:()=>Jt,currentMonitor:()=>Zt,getAll:()=>me,getCurrent:()=>Qt,primaryMonitor:()=>Yt});var U=class{constructor(e,n){this.type="Logical";this.width=e,this.height=n}},f=class{constructor(e,n){this.type="Physical";this.width=e,this.height=n}toLogical(e){return new U(this.width/e,this.height/e)}},E=class{constructor(e,n){this.type="Logical";this.x=e,this.y=n}},y=class{constructor(e,n){this.type="Physical";this.x=e,this.y=n}toLogical(e){return new E(this.x/e,this.y/e)}},ce=(n=>(n[n.Critical=1]="Critical",n[n.Informational=2]="Informational",n))(ce||{});function Qt(){return new g(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function me(){return window.__TAURI_METADATA__.__windows.map(t=>new g(t.label,{skip:!0}))}var ue=["tauri://created","tauri://error"],g=class{constructor(e,n={}){this.label=e,this.listeners=Object.create(null),n?.skip||i({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:{label:e,...n}}}}).then(async()=>this.emit("tauri://created")).catch(async r=>this.emit("tauri://error",r))}static getByLabel(e){return me().some(n=>n.label===e)?new g(e,{skip:!0}):null}async listen(e,n){return this._handleTauriEvent(e,n)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(n),1)}):b(e,this.label,n)}async once(e,n){return this._handleTauriEvent(e,n)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(n),1)}):v(e,this.label,n)}async emit(e,n){if(ue.includes(e)){for(let r of this.listeners[e]||[])r({event:e,id:-1,windowLabel:this.label,payload:n});return Promise.resolve()}return w(e,this.label,n)}_handleTauriEvent(e,n){return ue.includes(e)?(e in this.listeners?this.listeners[e].push(n):this.listeners[e]=[n],!0):!1}async scaleFactor(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})}async innerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then(({x:e,y:n})=>new y(e,n))}async outerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then(({x:e,y:n})=>new y(e,n))}async innerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then(({width:e,height:n})=>new f(e,n))}async outerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then(({width:e,height:n})=>new f(e,n))}async isFullscreen(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})}async isMaximized(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})}async isDecorated(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})}async isResizable(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})}async isVisible(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})}async theme(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})}async center(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})}async requestUserAttention(e){let n=null;return e&&(e===1?n={type:"Critical"}:n={type:"Informational"}),i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:n}}}})}async setResizable(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:e}}}})}async setTitle(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:e}}}})}async maximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})}async unmaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})}async toggleMaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})}async minimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})}async unminimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})}async show(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})}async hide(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})}async close(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})}async setDecorations(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:e}}}})}async setAlwaysOnTop(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:e}}}})}async setSize(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:e.type,data:{width:e.width,height:e.height}}}}}})}async setMinSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setMaxSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setFullscreen(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:e}}}})}async setFocus(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})}async setIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:typeof e=="string"?e:Array.from(e)}}}}})}async setSkipTaskbar(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:e}}}})}async setCursorGrab(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:e}}}})}async setCursorVisible(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:e}}}})}async setCursorIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:e}}}})}async setCursorPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setIgnoreCursorEvents(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIgnoreCursorEvents",payload:e}}}})}async startDragging(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})}async onResized(e){return this.listen("tauri://resize",e)}async onMoved(e){return this.listen("tauri://move",e)}async onCloseRequested(e){return this.listen("tauri://close-requested",n=>{let r=new O(n);Promise.resolve(e(r)).then(()=>{if(!r.isPreventDefault())return this.close()})})}async onFocusChanged(e){let n=await this.listen("tauri://focus",a=>{e({...a,payload:!0})}),r=await this.listen("tauri://blur",a=>{e({...a,payload:!1})});return()=>{n(),r()}}async onScaleChanged(e){return this.listen("tauri://scale-change",e)}async onMenuClicked(e){return this.listen("tauri://menu",e)}async onFileDropEvent(e){let n=await this.listen("tauri://file-drop",o=>{e({...o,payload:{type:"drop",paths:o.payload}})}),r=await this.listen("tauri://file-drop-hover",o=>{e({...o,payload:{type:"hover",paths:o.payload}})}),a=await this.listen("tauri://file-drop-cancelled",o=>{e({...o,payload:{type:"cancel"}})});return()=>{n(),r(),a()}}async onThemeChanged(e){return this.listen("tauri://theme-changed",e)}},O=class{constructor(e){this._preventDefault=!1;this.event=e.event,this.windowLabel=e.windowLabel,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}};function Z(t){return t===null?null:{name:t.name,scaleFactor:t.scaleFactor,position:new y(t.position.x,t.position.y),size:new f(t.size.width,t.size.height)}}async function Zt(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}}).then(Z)}async function Yt(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}}).then(Z)}async function Jt(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}}).then(t=>t.map(Z))}var J={};c(J,{EOL:()=>Xt,arch:()=>tn,hostname:()=>rn,platform:()=>Bt,tempDir:()=>nn,version:()=>en});var Xt=d()?`\r
`:`
`;async function Bt(){return i({__tauriModule:"Os",message:{cmd:"platform"}})}async function en(){return i({__tauriModule:"Os",message:{cmd:"version"}})}async function tn(){return i({__tauriModule:"Os",message:{cmd:"arch"}})}async function nn(){return i({__tauriModule:"Os",message:{cmd:"tempDir"}})}async function rn(){return i({__tauriModule:"Os",message:{cmd:"hostname"}})}var sn=h;return we(an);})();
window.__TAURI__ = __TAURI_IIFE__
