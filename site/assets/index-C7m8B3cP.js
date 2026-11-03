/*! three.js r187 (0.187.0) | Copyright © 2010-2026 three.js authors | MIT License | 全文は THIRD-PARTY-LICENSES.md */
(function(){"use strict";var mo=document.createElement("style");mo.textContent=`:root{--bg: #12151c;--panel: #1b1f29;--line: #2c3240;--text: #e4e7ee;--muted: #9aa3b5;--accent: #5b9bd5;--accent-text: #0b1420;color-scheme:dark}*{box-sizing:border-box}[hidden]{display:none!important}html,body{margin:0;height:100%;background:var(--bg);color:var(--text);font:14px/1.5 system-ui,Segoe UI,Hiragino Sans,Yu Gothic UI,sans-serif}body{display:flex}#panel{width:320px;flex:none;height:100%;overflow-y:auto;padding:12px 16px 16px;background:var(--panel);border-right:1px solid var(--line)}#view{flex:1;position:relative;min-width:0}#view canvas{display:block;width:100%;height:100%}h1{font-size:18px;margin:0 0 8px}h2{font-size:12px;margin:0 0 6px;color:var(--muted);font-weight:600;letter-spacing:.05em}section{padding:10px 0;border-bottom:1px solid var(--line)}.row{display:flex;align-items:center;gap:8px;margin:6px 0;flex-wrap:wrap}.row label{display:flex;align-items:center;gap:6px}.buttons button{flex:1}input[type=number]{width:7em;padding:4px 6px;background:var(--bg);color:var(--text);border:1px solid var(--line);border-radius:4px}#seed{width:9em}input[type=range]{flex:1;min-width:120px;accent-color:var(--accent)}button{padding:5px 10px;background:#262c38;color:var(--text);border:1px solid var(--line);border-radius:4px;cursor:pointer}button:hover{border-color:var(--accent)}button:focus-visible,input:focus-visible{outline:2px solid var(--accent);outline-offset:1px}button.primary,.combos button[aria-checked=true]{background:var(--accent);color:var(--accent-text);border-color:var(--accent)}.combos{display:grid;grid-template-columns:1fr 1fr;gap:6px}.muted{color:var(--muted)}.small{font-size:12px}output{font-variant-numeric:tabular-nums}.cellInfo{white-space:pre-line;font-size:13px}.cellInfo.selected{color:var(--text)}.legend{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:2px 8px;font-size:12px}.legend li{display:flex;align-items:center;gap:6px}.legend .sw{width:12px;height:12px;border-radius:2px;border:1px solid #0006;flex:none}@media(max-width:720px){body{flex-direction:column}#panel{width:100%;height:auto;max-height:45%;border-right:0;border-bottom:1px solid var(--line)}#view{min-height:55%}}
/*$vite$:1*/`,document.head.appendChild(mo);const bs="187",mi={ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rh=0,go=1,sh=2,Mr=1,ah=2,Yi=3,Qn=0,Nt=1,Mn=2,_i=0,Ki=1,_o=2,xo=3,vo=4,oh=5,xi=100,lh=101,ch=102,hh=103,uh=104,dh=200,fh=201,ph=202,mh=203,Mo=204,So=205,gh=206,_h=207,xh=208,vh=209,Mh=210,Sh=211,Eh=212,yh=213,bh=214,Ts=0,As=1,ws=2,Zi=3,Rs=4,Cs=5,Ps=6,Ls=7,Ds=0,Th=1,Ah=2,Sn=0,Eo=1,yo=2,bo=3,To=4,Ao=5,wo=6,Ro=7,Co=300,vi=301,$i=302,Is=303,Ns=304,Us=1e3,En=1001,Fs=1002,bt=1003,wh=1004,Sr=1005,Ut=1006,Os=1007,Un=1008,zt=1009,Po=1010,Lo=1011,Ji=1012,Bs=1013,on=1014,ln=1015,cn=1016,zs=1017,Gs=1018,Mi=1020,Do=35902,Io=35899,No=1021,Uo=1022,hn=1023,Fn=1026,On=1027,Fo=1028,Hs=1029,jn=1030,ks=1031,Vs=1033,Er=33776,yr=33777,br=33778,Tr=33779,Ws=35840,Xs=35841,qs=35842,Ys=35843,Ks=36196,Zs=37492,$s=37496,Js=37488,Qs=37489,Ar=37490,js=37491,ea=37808,ta=37809,na=37810,ia=37811,ra=37812,sa=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,pa=36492,ma=36494,ga=36495,_a=36283,xa=36284,wr=36285,va=36286,Rh=3200,Ma=0,Ch=1,Bn="",kt="srgb",Rr="srgb-linear",Cr="linear",Je="srgb",Sa=7680,Ph=519,Lh=512,Dh=513,Ih=514,Oo=515,Nh=516,Uh=517,Bo=518,zo=519,Fh=35044,Go="300 es",Jt=2e3,Qi=2001;function Oh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bh(){const n=Pr("canvas");return n.style.display="block",n}const Ho={};function ko(...n){const e="THREE."+n.shift();console.log(e,...n)}function Vo(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=Vo(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ke(...n){n=Vo(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Lr(...n){const e=n.join(" ");e in Ho||(Ho[e]=!0,Le(...n))}function zh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Gh={[Ts]:Ts,[ws]:Ps,[Rs]:Rs,[Zi]:Cs,[As]:As,[Ps]:ws,[Ls]:Ls,[Cs]:Zi};class zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wo=1234567;const ji=Math.PI/180,er=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function He(n,e,t){return Math.max(e,Math.min(t,n))}function Ea(n,e){return(n%e+e)%e}function Hh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function kh(n,e,t){return n!==e?(t-n)/(e-n):0}function tr(n,e,t){return(1-t)*n+t*e}function Vh(n,e,t,i){return tr(n,e,1-Math.exp(-t*i))}function Wh(n,e=1){return e-Math.abs(Ea(n,e*2)-e)}function Xh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function qh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kh(n,e){return n+Math.random()*(e-n)}function Zh(n){return n*(.5-Math.random())}function $h(n){n!==void 0&&(Wo=n);let e=Wo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jh(n){return n*ji}function Qh(n){return n*er}function jh(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function eu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tu(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),f=a((e+i)/2),m=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*f,l*m,l*h,o*c);break;case"YZY":n.set(l*h,o*f,l*m,o*c);break;case"ZXZ":n.set(l*m,l*h,o*f,o*c);break;case"XZX":n.set(o*f,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*f,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*f,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ya(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qo(n,e){if(e.constructor===Float32Array)return n;const t=ya(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Yo(n,e){if(e.constructor===Float32Array)return n;const t=ya(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const ba={DEG2RAD:ji,RAD2DEG:er,generateUUID:Si,clamp:He,euclideanModulo:Ea,mapLinear:Hh,inverseLerp:kh,lerp:tr,damp:Vh,pingpong:Wh,smoothstep:Xh,smootherstep:qh,randInt:Yh,randFloat:Kh,randFloatSpread:Zh,seededRandom:$h,degToRad:Jh,radToDeg:Qh,isPowerOfTwo:jh,ceilPowerOfTwo:eu,floorPowerOfTwo:Xo,setQuaternionFromProperEuler:tu,normalize:Yo,denormalize:qo};class Ne{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],m=i[r+3],h=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(m!==x||l!==h||c!==p||f!==g){let u=l*h+c*p+f*g+m*x;u<0&&(h=-h,p=-p,g=-g,x=-x,u=-u);let d=1-o;if(u<.9995){const v=Math.acos(u),A=Math.sin(v);d=Math.sin(d*v)/A,o=Math.sin(o*v)/A,l=l*d+h*o,c=c*d+p*o,f=f*d+g*o,m=m*d+x*o}else{l=l*d+h*o,c=c*d+p*o,f=f*d+g*o,m=m*d+x*o;const v=1/Math.sqrt(l*l+c*c+f*f+m*m);l*=v,c*=v,f*=v,m*=v}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],m=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+f*m+l*p-c*h,e[t+1]=l*g+f*h+c*m-o*p,e[t+2]=c*g+f*p+o*h-l*m,e[t+3]=f*g-o*m-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),m=o(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*f*m+c*p*g,this._y=c*p*m-h*f*g,this._z=c*f*g+h*p*m,this._w=c*f*m-h*p*g;break;case"YXZ":this._x=h*f*m+c*p*g,this._y=c*p*m-h*f*g,this._z=c*f*g-h*p*m,this._w=c*f*m+h*p*g;break;case"ZXY":this._x=h*f*m-c*p*g,this._y=c*p*m+h*f*g,this._z=c*f*g+h*p*m,this._w=c*f*m-h*p*g;break;case"ZYX":this._x=h*f*m-c*p*g,this._y=c*p*m+h*f*g,this._z=c*f*g-h*p*m,this._w=c*f*m+h*p*g;break;case"YZX":this._x=h*f*m+c*p*g,this._y=c*p*m+h*f*g,this._z=c*f*g-h*p*m,this._w=c*f*m-h*p*g;break;case"XZY":this._x=h*f*m-c*p*g,this._y=c*p*m-h*f*g,this._z=c*f*g+h*p*m,this._w=c*f*m+h*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],m=t[10],h=i+o+m;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),m=2*(s*i-a*t);return this.x=t+l*c+a*m-o*f,this.y=i+l*f+o*c-s*m,this.z=r+l*m+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new V,Ko=new Gn;class Fe{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],m=i[7],h=i[2],p=i[5],g=i[8],x=r[0],u=r[3],d=r[6],v=r[1],A=r[4],E=r[7],w=r[2],R=r[5],_=r[8];return s[0]=a*x+o*v+l*w,s[3]=a*u+o*A+l*R,s[6]=a*d+o*E+l*_,s[1]=c*x+f*v+m*w,s[4]=c*u+f*A+m*R,s[7]=c*d+f*E+m*_,s[2]=h*x+p*v+g*w,s[5]=h*u+p*A+g*R,s[8]=h*d+p*E+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],m=f*a-o*c,h=o*l-f*s,p=c*s-a*l,g=t*m+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=m*x,e[1]=(r*c-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(f*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Fe,Zo=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$o=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nu(){const n={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=yn(r.r),r.g=yn(r.g),r.b=yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=Ei(r.r),r.g=Ei(r.g),r.b=Ei(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?Cr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rr]:{primaries:e,whitePoint:i,transfer:Cr,toXYZ:Zo,fromXYZ:$o,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:Zo,fromXYZ:$o,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),n}const qe=nu();function yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ei(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let yi;class iu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yi===void 0&&(yi=Pr("canvas")),yi.width=e.width,yi.height=e.height;const r=yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yn(t[i]/255)*255):t[i]=yn(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ru=0;class wa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ra(r[a].image)):s.push(Ra(r[a]))}else s=Ra(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let su=0;const Ca=new V;class Lt extends zn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=En,r=En,s=Ut,a=Un,o=hn,l=zt,c=Lt.DEFAULT_ANISOTROPY,f=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Si(),this.name="",this.source=new wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Co)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null,Lt.DEFAULT_MAPPING=Co,Lt.DEFAULT_ANISOTROPY=1;class ht{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],m=l[8],h=l[1],p=l[5],g=l[9],x=l[2],u=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(m-x)<.01&&Math.abs(g-u)<.01){if(Math.abs(f+h)<.1&&Math.abs(m+x)<.1&&Math.abs(g+u)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(p+1)/2,w=(d+1)/2,R=(f+h)/4,_=(m+x)/4,y=(g+u)/4;return A>E&&A>w?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=R/i,s=_/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=_/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((u-g)*(u-g)+(m-x)*(m-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(u-g)/v,this.y=(m-x)/v,this.z=(h-f)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class au extends zn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Lt({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new wa(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends au{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jo extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ou extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class rt{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,f,m,h,p,g,x,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,m,h,p,g,x,u)}set(e,t,i,r,s,a,o,l,c,f,m,h,p,g,x,u){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=m,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const h=a*f,p=a*m,g=o*f,x=o*m;t[0]=l*f,t[4]=-l*m,t[8]=c,t[1]=p+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*f,p=l*m,g=c*f,x=c*m;t[0]=h+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*m,t[5]=a*f,t[9]=-o,t[2]=p*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*f,p=l*m,g=c*f,x=c*m;t[0]=h-x*o,t[4]=-a*m,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*f,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*f,p=a*m,g=o*f,x=o*m;t[0]=l*f,t[4]=g*c-p,t[8]=h*c+x,t[1]=l*m,t[5]=x*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*f,t[4]=x-h*m,t[8]=g*m+p,t[1]=m,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=p*m+g,t[10]=h-x*m}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*f,t[4]=-m,t[8]=c*f,t[1]=h*m+x,t[5]=a*f,t[9]=p*m-g,t[2]=g*m-p,t[6]=o*f,t[10]=x*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lu,e,cu)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Hn.crossVectors(i,Gt),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Hn.crossVectors(i,Gt)),Hn.normalize(),Dr.crossVectors(Gt,Hn),r[0]=Hn.x,r[4]=Dr.x,r[8]=Gt.x,r[1]=Hn.y,r[5]=Dr.y,r[9]=Gt.y,r[2]=Hn.z,r[6]=Dr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],m=i[5],h=i[9],p=i[13],g=i[2],x=i[6],u=i[10],d=i[14],v=i[3],A=i[7],E=i[11],w=i[15],R=r[0],_=r[4],y=r[8],k=r[12],U=r[1],z=r[5],K=r[9],D=r[13],T=r[2],O=r[6],W=r[10],G=r[14],I=r[3],L=r[7],H=r[11],C=r[15];return s[0]=a*R+o*U+l*T+c*I,s[4]=a*_+o*z+l*O+c*L,s[8]=a*y+o*K+l*W+c*H,s[12]=a*k+o*D+l*G+c*C,s[1]=f*R+m*U+h*T+p*I,s[5]=f*_+m*z+h*O+p*L,s[9]=f*y+m*K+h*W+p*H,s[13]=f*k+m*D+h*G+p*C,s[2]=g*R+x*U+u*T+d*I,s[6]=g*_+x*z+u*O+d*L,s[10]=g*y+x*K+u*W+d*H,s[14]=g*k+x*D+u*G+d*C,s[3]=v*R+A*U+E*T+w*I,s[7]=v*_+A*z+E*O+w*L,s[11]=v*y+A*K+E*W+w*H,s[15]=v*k+A*D+E*G+w*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],m=e[6],h=e[10],p=e[14],g=e[3],x=e[7],u=e[11],d=e[15],v=l*p-c*h,A=o*p-c*m,E=o*h-l*m,w=a*p-c*f,R=a*h-l*f,_=a*m-o*f;return t*(x*v-u*A+d*E)-i*(g*v-u*w+d*R)+r*(g*A-x*w+d*_)-s*(g*E-x*R+u*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],m=e[9],h=e[10],p=e[11],g=e[12],x=e[13],u=e[14],d=e[15],v=t*o-i*a,A=t*l-r*a,E=t*c-s*a,w=i*l-r*o,R=i*c-s*o,_=r*c-s*l,y=f*x-m*g,k=f*u-h*g,U=f*d-p*g,z=m*u-h*x,K=m*d-p*x,D=h*d-p*u,T=v*D-A*K+E*z+w*U-R*k+_*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/T;return e[0]=(o*D-l*K+c*z)*O,e[1]=(r*K-i*D-s*z)*O,e[2]=(x*_-u*R+d*w)*O,e[3]=(h*R-m*_-p*w)*O,e[4]=(l*U-a*D-c*k)*O,e[5]=(t*D-r*U+s*k)*O,e[6]=(u*E-g*_-d*A)*O,e[7]=(f*_-h*E+p*A)*O,e[8]=(a*K-o*U+c*y)*O,e[9]=(i*U-t*K-s*y)*O,e[10]=(g*R-x*E+d*v)*O,e[11]=(m*E-f*R-p*v)*O,e[12]=(o*k-a*z-l*y)*O,e[13]=(t*z-i*k+r*y)*O,e[14]=(x*A-g*w-u*v)*O,e[15]=(f*w-m*A+h*v)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,m=o+o,h=s*c,p=s*f,g=s*m,x=a*f,u=a*m,d=o*m,v=l*c,A=l*f,E=l*m,w=i.x,R=i.y,_=i.z;return r[0]=(1-(x+d))*w,r[1]=(p+E)*w,r[2]=(g-A)*w,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(h+d))*R,r[6]=(u+v)*R,r[7]=0,r[8]=(g+A)*_,r[9]=(u-v)*_,r[10]=(1-(h+x))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=bi.set(r[0],r[1],r[2]).length();const o=bi.set(r[4],r[5],r[6]).length(),l=bi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qt.copy(this);const c=1/a,f=1/o,m=1/l;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=f,Qt.elements[5]*=f,Qt.elements[6]*=f,Qt.elements[8]*=m,Qt.elements[9]*=m,Qt.elements[10]*=m,t.setFromRotationMatrix(Qt),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Jt,l=!1){const c=this.elements,f=2*s/(t-e),m=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===Jt)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Qi)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Jt,l=!1){const c=this.elements,f=2/(t-e),m=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===Jt)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Qi)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bi=new V,Qt=new rt,lu=new V(0,0,0),cu=new V(1,1,1),Hn=new V,Dr=new V,Gt=new V,Qo=new rt,jo=new Gn;class kn{constructor(e=0,t=0,i=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],m=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jo.setFromEuler(this),this.setFromQuaternion(jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hu=0;const el=new V,Ti=new Gn,bn=new rt,Ir=new V,nr=new V,uu=new V,du=new Gn,tl=new V(1,0,0),nl=new V(0,1,0),il=new V(0,0,1),rl={type:"added"},fu={type:"removed"},Ai={type:"childadded",child:null},La={type:"childremoved",child:null};class vt extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new V,t=new kn,i=new Gn,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Fe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(tl,e)}rotateY(e){return this.rotateOnAxis(nl,e)}rotateZ(e){return this.rotateOnAxis(il,e)}translateOnAxis(e,t){return el.copy(e).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tl,e)}translateY(e){return this.translateOnAxis(nl,e)}translateZ(e){return this.translateOnAxis(il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ir.copy(e):Ir.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(nr,Ir,this.up):bn.lookAt(Ir,nr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(bn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fu),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,du,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const m=l[c];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),m=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vt.DEFAULT_UP=new V(0,1,0),vt.DEFAULT_MATRIX_AUTO_UPDATE=!0,vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nr extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pu={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const u=t.getJointPose(x,i),d=this._getHandJoint(c,x);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}const f=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=f.position.distanceTo(m.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Nr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=Ea(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ia(a,s,e+1/3),this.g=Ia(a,s,e),this.b=Ia(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=sl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return qe.workingToColorSpace(Rt.copy(this),e),Math.round(He(Rt.r*255,0,255))*65536+Math.round(He(Rt.g*255,0,255))*256+Math.round(He(Rt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=f<=.5?m/(a+o):m/(2-a-o),a){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=kt){qe.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Ur);const i=tr(Vn.h,Ur.h,t),r=tr(Vn.s,Ur.s,t),s=tr(Vn.l,Ur.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Oe;Oe.NAMES=sl;class mu extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jt=new V,Tn=new V,Na=new V,An=new V,wi=new V,Ri=new V,al=new V,Ua=new V,Fa=new V,Oa=new V,Ba=new ht,za=new ht,Ga=new ht;class en{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jt.subVectors(r,t),Tn.subVectors(i,t),Na.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(Tn),l=jt.dot(Na),c=Tn.dot(Tn),f=Tn.dot(Na),m=a*c-o*o;if(m===0)return s.set(0,0,0),null;const h=1/m,p=(c*l-o*f)*h,g=(a*f-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ba.setScalar(0),za.setScalar(0),Ga.setScalar(0),Ba.fromBufferAttribute(e,t),za.fromBufferAttribute(e,i),Ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ba,s.x),a.addScaledVector(za,s.y),a.addScaledVector(Ga,s.z),a}static isFrontFacing(e,t,i,r){return jt.subVectors(i,t),Tn.subVectors(e,t),jt.cross(Tn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),jt.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;wi.subVectors(r,i),Ri.subVectors(s,i),Ua.subVectors(e,i);const l=wi.dot(Ua),c=Ri.dot(Ua);if(l<=0&&c<=0)return t.copy(i);Fa.subVectors(e,r);const f=wi.dot(Fa),m=Ri.dot(Fa);if(f>=0&&m<=f)return t.copy(r);const h=l*m-f*c;if(h<=0&&l>=0&&f<=0&&l-f>0)return a=l/(l-f),t.copy(i).addScaledVector(wi,a);Oa.subVectors(e,s);const p=wi.dot(Oa),g=Ri.dot(Oa);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ri,o);const u=f*g-p*m;if(u<=0&&m-f>=0&&p-g>=0)return al.subVectors(s,r),o=(m-f)/(m-f+(p-g)),t.copy(r).addScaledVector(al,o);const d=1/(u+x+h);return a=x*d,o=h*d,t.copy(i).addScaledVector(wi,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ir{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Or.subVectors(this.max,rr),Ci.subVectors(e.a,rr),Pi.subVectors(e.b,rr),Li.subVectors(e.c,rr),Wn.subVectors(Pi,Ci),Xn.subVectors(Li,Pi),ei.subVectors(Ci,Li);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ei.z,ei.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ei.z,0,-ei.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ei.y,ei.x,0];return!Ha(t,Ci,Pi,Li,Or)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,Ci,Pi,Li,Or))?!1:(Br.crossVectors(Wn,Xn),t=[Br.x,Br.y,Br.z],Ha(t,Ci,Pi,Li,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new V,new V,new V,new V,new V,new V,new V,new V],tn=new V,Fr=new ir,Ci=new V,Pi=new V,Li=new V,Wn=new V,Xn=new V,ei=new V,rr=new V,Or=new V,Br=new V,ti=new V;function Ha(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ti.fromArray(n,s);const o=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),f=i.dot(ti);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const ut=new V,zr=new Ne;let gu=0;class ni extends zn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fh,this.updateRanges=[],this.gpuType=ln,this.version=0,this._normalizationScale=e!==void 0?ya(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):qo(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yo(e,this.array)}}class ol extends ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ll extends ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vt extends ni{constructor(e,t,i){super(new Float32Array(e),t,i)}}const _u=new ir,sr=new V,ka=new V;class Gr{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_u.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(ka)),this.expandByPoint(sr.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xu=0;const Wt=new rt,Va=new vt,Di=new V,Ht=new ir,ar=new ir,Mt=new V;class dn extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?ll:ol)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ht.min,ar.min),Ht.expandByPoint(Mt),Mt.addVectors(Ht.max,ar.max),Ht.expandByPoint(Mt)):(Ht.expandByPoint(ar.min),Ht.expandByPoint(ar.max))}Ht.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Mt.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(e,c),Mt.add(Di)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ni(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let k=0;k<i.count;k++)o[k]=new V,l[k]=new V;const f=new V,m=new V,h=new V,p=new Ne,g=new Ne,x=new Ne,u=new V,d=new V;function v(k,U,z){c[k]=c[U]=c[z]=1,f.fromBufferAttribute(i,k),m.fromBufferAttribute(i,U),h.fromBufferAttribute(i,z),p.fromBufferAttribute(s,k),g.fromBufferAttribute(s,U),x.fromBufferAttribute(s,z),m.sub(f),h.sub(f),g.sub(p),x.sub(p);const K=1/(g.x*x.y-x.x*g.y);isFinite(K)&&(u.copy(m).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(K),d.copy(h).multiplyScalar(g.x).addScaledVector(m,-x.x).multiplyScalar(K),o[k].add(u),o[U].add(u),o[z].add(u),l[k].add(d),l[U].add(d),l[z].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,U=A.length;k<U;++k){const z=A[k],K=z.start,D=z.count;for(let T=K,O=K+D;T<O;T+=3)v(e.getX(T+0),e.getX(T+1),e.getX(T+2))}const E=new V,w=new V,R=new V,_=new V;function y(k){R.fromBufferAttribute(r,k),_.copy(R);const U=o[k];E.copy(U),E.sub(R.multiplyScalar(R.dot(U))).normalize(),w.crossVectors(_,U);const K=w.dot(l[k])<0?-1:1;a.setXYZW(k,E.x,E.y,E.z,K)}for(let k=0,U=i.count;k<U;++k)c[k]&&y(k);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,f=new V,m=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),u=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,u),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,u),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(u,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,m=o.normalized,h=new c.constructor(l.length*f);let p=0,g=0;for(let x=0,u=l.length;x<u;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let d=0;d<f;d++)h[g++]=c[p++]}return new ni(h,f,m)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,m=c.length;f<m;f++){const h=c[f],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let m=0,h=c.length;m<h;m++){const p=c[m];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],m=s[c];for(let h=0,p=m.length;h<p;h++)f.push(m[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new V,vu=new V,Mu=new Fe;class Rn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wa.subVectors(i,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Wa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mu.getNormalMatrix(e),r=this.coplanarPoint(Wa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Su=0;class Ii extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Ki,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=So,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Rn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cn=new V,Xa=new V,Hr=new V,kr=new V;class Vr{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xa.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(Xa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),o=kr.dot(this.direction),l=-kr.dot(Hr),c=kr.lengthSq(),f=Math.abs(1-a*a);let m,h,p,g;if(f>0)if(m=a*l-o,h=a*o-l,g=s*f,m>=0)if(h>=-g)if(h<=g){const x=1/f;m*=x,h*=x,p=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=s,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h=-s,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h<=-g?(m=Math.max(0,-(-a*s+o)),h=m>0?-s:Math.min(Math.max(-s,-l),s),p=-m*m+h*(h+2*l)+c):h<=g?(m=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(m=Math.max(0,-(a*s+o)),h=m>0?s:Math.min(Math.max(-s,-l),s),p=-m*m+h*(h+2*l)+c);else h=a>0?-s:s,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Xa).addScaledVector(Hr,h),p}intersectSphere(e,t){if(e.radius<0)return null;Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-h.z)*m,l=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,l=(e.min.z-h.z)*m),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,m=e.x-a.x,h=e.y-a.y,p=e.z-a.z,g=t.x-a.x,x=t.y-a.y,u=t.z-a.z,d=i.x-a.x,v=i.y-a.y,A=i.z-a.z,E=Math.abs(l),w=Math.abs(c),R=Math.abs(f);let _,y,k,U,z,K,D,T,O,W,G,I;if(E>=w&&E>=R?(k=l,K=m,O=g,I=d,l>=0?(_=c,y=f,U=h,z=p,D=x,T=u,W=v,G=A):(_=f,y=c,U=p,z=h,D=u,T=x,W=A,G=v)):w>=R?(k=c,K=h,O=x,I=v,c>=0?(_=f,y=l,U=p,z=m,D=u,T=g,W=A,G=d):(_=l,y=f,U=m,z=p,D=g,T=u,W=d,G=A)):(k=f,K=p,O=u,I=A,f>=0?(_=l,y=c,U=m,z=h,D=g,T=x,W=d,G=v):(_=c,y=l,U=h,z=m,D=x,T=g,W=v,G=d)),k===0)return null;const L=_/k,H=y/k,C=1/k,Z=U-L*K,ee=z-H*K,B=D-L*O,J=T-H*O,re=W-L*I,_e=G-H*I,oe=re*J-_e*B,Te=Z*_e-ee*re,nt=B*ee-J*Z;if(r){if(oe<0||Te<0||nt<0)return null}else if((oe<0||Te<0||nt<0)&&(oe>0||Te>0||nt>0))return null;const Ce=oe+Te+nt;if(Ce===0)return null;const Qe=C*(oe*K+Te*O+nt*I);return(Ce>0?Qe<0:Qe>0)?null:this.at(Qe/Ce,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Eu extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cl=new rt,ii=new Vr,Wr=new Gr,hl=new V,Xr=new V,qr=new V,Yr=new V,qa=new V,Kr=new V,ul=new V,Zr=new V;class qn extends vt{constructor(e=new dn,t=new Eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Kr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],m=s[l];f!==0&&(qa.fromBufferAttribute(m,e),a?Kr.addScaledVector(qa,f):Kr.addScaledVector(qa.sub(t),f))}t.add(Kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!(Wr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Wr,hl)===null||ii.origin.distanceToSquared(hl)>(e.far-e.near)**2))&&(cl.copy(s).invert(),ii.copy(e.ray).applyMatrix4(cl),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,m=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const u=h[g],d=a[u.materialIndex],v=Math.max(u.start,p.start),A=Math.min(o.count,Math.min(u.start+u.count,p.start+p.count));for(let E=v,w=A;E<w;E+=3){const R=o.getX(E),_=o.getX(E+1),y=o.getX(E+2);r=$r(this,d,e,i,c,f,m,R,_,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let u=g,d=x;u<d;u+=3){const v=o.getX(u),A=o.getX(u+1),E=o.getX(u+2);r=$r(this,a,e,i,c,f,m,v,A,E),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const u=h[g],d=a[u.materialIndex],v=Math.max(u.start,p.start),A=Math.min(l.count,Math.min(u.start+u.count,p.start+p.count));for(let E=v,w=A;E<w;E+=3){const R=E,_=E+1,y=E+2;r=$r(this,d,e,i,c,f,m,R,_,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let u=g,d=x;u<d;u+=3){const v=u,A=u+1,E=u+2;r=$r(this,a,e,i,c,f,m,v,A,E),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}}function yu(n,e,t,i,r,s,a,o){let l;if(e.side===Nt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qn,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:n}}function $r(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Xr),n.getVertexPosition(l,qr),n.getVertexPosition(c,Yr);const f=yu(n,e,t,i,Xr,qr,Yr,ul);if(f){const m=new V;en.getBarycoord(ul,Xr,qr,Yr,m),r&&(f.uv=en.getInterpolatedAttribute(r,o,l,c,m,new Ne)),s&&(f.uv1=en.getInterpolatedAttribute(s,o,l,c,m,new Ne)),a&&(f.normal=en.getInterpolatedAttribute(a,o,l,c,m,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new V,materialIndex:0};en.getNormal(Xr,qr,Yr,h.normal),f.face=h,f.barycoord=m}return f}class bu extends Lt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=bt,f=bt,m,h){super(null,a,o,l,c,f,r,s,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ri=new Gr,Tu=new Ne(.5,.5),Jr=new V;class or{constructor(e=new Rn,t=new Rn,i=new Rn,r=new Rn,s=new Rn,a=new Rn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jt,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],m=s[5],h=s[6],p=s[7],g=s[8],x=s[9],u=s[10],d=s[11],v=s[12],A=s[13],E=s[14],w=s[15];if(r[0].setComponents(c-a,p-f,d-g,w-v).normalize(),r[1].setComponents(c+a,p+f,d+g,w+v).normalize(),r[2].setComponents(c+o,p+m,d+x,w+A).normalize(),r[3].setComponents(c-o,p-m,d-x,w-A).normalize(),i)r[4].setComponents(l,h,u,E).normalize(),r[5].setComponents(c-l,p-h,d-u,w-E).normalize();else if(r[4].setComponents(c-l,p-h,d-u,w-E).normalize(),t===Jt)r[5].setComponents(c+l,p+h,d+u,w+E).normalize();else if(t===Qi)r[5].setComponents(l,h,u,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=Tu.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const dl=new rt;class Ya{constructor(){this.coordinateSystem=Jt,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];dl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new or),i[r].setFromProjectionMatrix(dl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new or),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new Ya().copy(this)}}class fl extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qr=new V,jr=new V,pl=new rt,lr=new Vr,es=new Gr,Ka=new V,ml=new V;class Au extends vt{constructor(e=new dn,t=new fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Qr.fromBufferAttribute(t,r-1),jr.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Qr.distanceTo(jr);e.setAttribute("lineDistance",new Vt(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(r),es.radius+=s,e.ray.intersectsSphere(es)===!1)return;pl.copy(r).invert(),lr.copy(e.ray).applyMatrix4(pl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,u=g-1;x<u;x+=c){const d=f.getX(x),v=f.getX(x+1),A=ts(this,e,lr,l,d,v,x);A&&t.push(A)}if(this.isLineLoop){const x=f.getX(g-1),u=f.getX(p),d=ts(this,e,lr,l,x,u,g-1);d&&t.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,u=g-1;x<u;x+=c){const d=ts(this,e,lr,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=ts(this,e,lr,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ts(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Qr.fromBufferAttribute(o,r),jr.fromBufferAttribute(o,s),t.distanceSqToSegment(Qr,jr,Ka,ml)>i)return;Ka.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ka);if(!(c<e.near||c>e.far))return{distance:c,point:ml.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class wu extends Au{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gl extends Lt{constructor(e=[],t=vi,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ni extends Lt{constructor(e,t,i=on,r,s,a,o=bt,l=bt,c,f=Fn,m=1){if(f!==Fn&&f!==On)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:m};super(h,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class _l extends Ni{constructor(e,t=on,i=vi,r,s,a=bt,o=bt,l,c=Fn){const f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xl extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cr extends dn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],m=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(m,2));function g(x,u,d,v,A,E,w,R,_,y,k){const U=E/_,z=w/y,K=E/2,D=w/2,T=R/2,O=_+1,W=y+1;let G=0,I=0;const L=new V;for(let H=0;H<W;H++){const C=H*z-D;for(let Z=0;Z<O;Z++){const ee=Z*U-K;L[x]=ee*v,L[u]=C*A,L[d]=T,c.push(L.x,L.y,L.z),L[x]=0,L[u]=0,L[d]=R>0?1:-1,f.push(L.x,L.y,L.z),m.push(Z/_),m.push(1-H/y),G+=1}}for(let H=0;H<y;H++)for(let C=0;C<_;C++){const Z=h+C+O*H,ee=h+C+O*(H+1),B=h+(C+1)+O*(H+1),J=h+(C+1)+O*H;l.push(Z,ee,J),l.push(ee,B,J),I+=6}o.addGroup(p,I,k),p+=I,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ns extends dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,m=e/o,h=t/l,p=[],g=[],x=[],u=[];for(let d=0;d<f;d++){const v=d*h-a;for(let A=0;A<c;A++){const E=A*m-s;g.push(E,-v,0),x.push(0,0,1),u.push(A/o),u.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const A=v+c*d,E=v+c*(d+1),w=v+1+c*(d+1),R=v+1+c*d;p.push(A,E,R),p.push(E,w,R)}this.setIndex(p),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ui(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(vl(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(vl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=Ui(n[t]);for(const r in i)e[r]=i[r]}return e}function vl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ru(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ml(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Cu={clone:Ui,merge:Dt};var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Du extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Iu extends Ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Ds,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nu extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uu extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sl extends vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Fu extends Sl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Za=new rt,El=new V,yl=new V;class Ou{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=zt,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),yl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Za,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Qi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const is=new V,rs=new Gn,fn=new V;class bl extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(is,rs,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,rs,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(is,rs,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,rs,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new V,Tl=new Ne,Al=new Ne;class nn extends bl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Tl,Al),t.subVectors(Al,Tl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wl extends bl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bu extends Ou{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zu extends Sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Fi=-90,Oi=1;class $a extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const s=new nn(Fi,Oi,e,t);s.layers=this.layers,this.add(s);const a=new nn(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new nn(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new nn(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new nn(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Jt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qi)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gu extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Rl=new rt;class Hu{constructor(e,t,i=0,r=1/0){this.ray=new Vr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rl),this}intersectObject(e,t=!0,i=[]){return Ja(e,this,i,t),i.sort(Cl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ja(e[r],this,i,t);return i.sort(Cl),i}}function Cl(n,e){return n.distance-e.distance}function Ja(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Ja(s[a],e,t,!0)}}class Pl{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ku extends zn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ll(n,e,t,i){const r=Vu(i);switch(t){case No:return n*e;case Fo:return n*e/r.components*r.byteLength;case Hs:return n*e/r.components*r.byteLength;case jn:return n*e*2/r.components*r.byteLength;case ks:return n*e*2/r.components*r.byteLength;case Uo:return n*e*3/r.components*r.byteLength;case hn:return n*e*4/r.components*r.byteLength;case Vs:return n*e*4/r.components*r.byteLength;case Er:case yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case br:case Tr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xs:case Ys:return Math.max(n,16)*Math.max(e,8)/4;case Ws:case qs:return Math.max(n,8)*Math.max(e,8)/2;case Ks:case Zs:case Js:case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $s:case Ar:case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case na:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ia:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ra:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case aa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case la:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ca:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ha:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case da:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pa:case ma:case ga:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _a:case xa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wr:case va:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vu(n){switch(n){case zt:case Po:return{byteLength:1,components:1};case Ji:case Lo:case cn:return{byteLength:2,components:1};case zs:case Gs:return{byteLength:2,components:4};case on:case Bs:case ln:return{byteLength:4,components:1};case Do:case Io:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bs}})),typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bs);function Dl(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Wu(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,m=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const f=l.array,m=l.updateRanges;if(n.bindBuffer(c,o),m.length===0)n.bufferSubData(c,0,f);else{m.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<m.length;p++){const g=m[h],x=m[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,m[h]=x)}m.length=h+1;for(let p=0,g=m.length;p<g;p++){const x=m[p];n.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Xu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ju=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,md=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ef=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ze={alphahash_fragment:Xu,alphahash_pars_fragment:qu,alphamap_fragment:Yu,alphamap_pars_fragment:Ku,alphatest_fragment:Zu,alphatest_pars_fragment:$u,aomap_fragment:Ju,aomap_pars_fragment:Qu,batching_pars_vertex:ju,batching_vertex:ed,begin_vertex:td,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:rd,bumpmap_pars_fragment:sd,clipping_planes_fragment:ad,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:hd,color_pars_fragment:ud,color_pars_vertex:dd,color_vertex:fd,common:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:xd,emissivemap_pars_fragment:vd,colorspace_fragment:Md,colorspace_pars_fragment:Sd,envmap_fragment:Ed,envmap_common_pars_fragment:yd,envmap_pars_fragment:bd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Fd,envmap_vertex:Ad,fog_vertex:wd,fog_pars_vertex:Rd,fog_fragment:Cd,fog_pars_fragment:Pd,gradientmap_pars_fragment:Ld,lightmap_pars_fragment:Dd,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Nd,lights_pars_begin:Ud,lights_toon_fragment:Od,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Hd,lights_physical_pars_fragment:kd,lights_fragment_begin:Vd,lights_fragment_maps:Wd,lights_fragment_end:Xd,lightprobes_pars_fragment:qd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:Zd,logdepthbuf_vertex:$d,map_fragment:Jd,map_pars_fragment:Qd,map_particle_fragment:jd,map_particle_pars_fragment:ef,metalnessmap_fragment:tf,metalnessmap_pars_fragment:nf,morphinstance_vertex:rf,morphcolor_vertex:sf,morphnormal_vertex:af,morphtarget_pars_vertex:of,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:hf,normal_pars_fragment:uf,normal_pars_vertex:df,normal_vertex:ff,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:xf,opaque_fragment:vf,packing:Mf,premultiplied_alpha_fragment:Sf,project_vertex:Ef,dithering_fragment:yf,dithering_pars_fragment:bf,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:Af,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Rf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Pf,skinbase_vertex:Lf,skinning_pars_vertex:Df,skinning_vertex:If,skinnormal_vertex:Nf,specularmap_fragment:Uf,specularmap_pars_fragment:Ff,tonemapping_fragment:Of,tonemapping_pars_fragment:Bf,transmission_fragment:zf,transmission_pars_fragment:Gf,uv_pars_fragment:Hf,uv_pars_vertex:kf,uv_vertex:Vf,worldpos_vertex:Wf,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},xe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},pn={basic:{uniforms:Dt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Dt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Dt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Dt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Dt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Dt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Dt([xe.points,xe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Dt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Dt([xe.common,xe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Dt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Dt([xe.sprite,xe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Dt([xe.common,xe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Dt([xe.lights,xe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};pn.physical={uniforms:Dt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const ss={r:0,b:0,g:0},Xf=new rt,Il=new Fe;Il.set(-1,0,0,0,1,0,0,0,1);function qf(n,e,t,i,r,s){const a=new Oe(0);let o=r===!0?0:1,l,c,f=null,m=0,h=null;function p(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){const E=v.backgroundBlurriness>0;A=e.get(A,E)}return A}function g(v){let A=!1;const E=p(v);E===null?u(a,o):E&&E.isColor&&(u(E,1),A=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,A){const E=p(A);E&&E.isCubeTexture?(c===void 0&&(c=new qn(new cr(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Ui(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Il),c.material.toneMapped=qe.getTransfer(E.colorSpace)!==Je,(f!==E||m!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,m=E.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new qn(new ns(2,2),new si({name:"BackgroundMaterial",uniforms:Ui(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=qe.getTransfer(E.colorSpace)!==Je,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||m!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=E,m=E.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function u(v,A){v.getRGB(ss,Ml(n)),t.buffers.color.setClear(ss.r,ss.g,ss.b,A,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,u(a,o)},render:g,addToRenderList:x,dispose:d}}function Yf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(z,K,D,T,O){let W=!1;const G=m(z,T,D,K);s!==G&&(s=G,c(s.object)),W=p(z,T,D,O),W&&g(z,T,D,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(z,K,D,T),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(z){return n.bindVertexArray(z)}function f(z){return n.deleteVertexArray(z)}function m(z,K,D,T){const O=T.wireframe===!0;let W=i[K.id];W===void 0&&(W={},i[K.id]=W);const G=z.isInstancedMesh===!0?z.id:0;let I=W[G];I===void 0&&(I={},W[G]=I);let L=I[D.id];L===void 0&&(L={},I[D.id]=L);let H=L[O];return H===void 0&&(H=h(l()),L[O]=H),H}function h(z){const K=[],D=[],T=[];for(let O=0;O<t;O++)K[O]=0,D[O]=0,T[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:D,attributeDivisors:T,object:z,attributes:{},index:null}}function p(z,K,D,T){const O=s.attributes,W=K.attributes;let G=0;const I=D.getAttributes();for(const L in I)if(I[L].location>=0){const C=O[L];let Z=W[L];if(Z===void 0&&(L==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),L==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),C===void 0||C.attribute!==Z||Z&&C.data!==Z.data)return!0;G++}return s.attributesNum!==G||s.index!==T}function g(z,K,D,T){const O={},W=K.attributes;let G=0;const I=D.getAttributes();for(const L in I)if(I[L].location>=0){let C=W[L];C===void 0&&(L==="instanceMatrix"&&z.instanceMatrix&&(C=z.instanceMatrix),L==="instanceColor"&&z.instanceColor&&(C=z.instanceColor));const Z={};Z.attribute=C,C&&C.data&&(Z.data=C.data),O[L]=Z,G++}s.attributes=O,s.attributesNum=G,s.index=T}function x(){const z=s.newAttributes;for(let K=0,D=z.length;K<D;K++)z[K]=0}function u(z){d(z,0)}function d(z,K){const D=s.newAttributes,T=s.enabledAttributes,O=s.attributeDivisors;D[z]=1,T[z]===0&&(n.enableVertexAttribArray(z),T[z]=1),O[z]!==K&&(n.vertexAttribDivisor(z,K),O[z]=K)}function v(){const z=s.newAttributes,K=s.enabledAttributes;for(let D=0,T=K.length;D<T;D++)K[D]!==z[D]&&(n.disableVertexAttribArray(D),K[D]=0)}function A(z,K,D,T,O,W,G){G===!0?n.vertexAttribIPointer(z,K,D,O,W):n.vertexAttribPointer(z,K,D,T,O,W)}function E(z,K,D,T){x();const O=T.attributes,W=D.getAttributes(),G=K.defaultAttributeValues;for(const I in W){const L=W[I];if(L.location>=0){let H=O[I];if(H===void 0&&(I==="instanceMatrix"&&z.instanceMatrix&&(H=z.instanceMatrix),I==="instanceColor"&&z.instanceColor&&(H=z.instanceColor)),H!==void 0){const C=H.normalized,Z=H.itemSize,ee=e.get(H);if(ee===void 0)continue;const B=ee.buffer,J=ee.type,re=ee.bytesPerElement,_e=J===n.INT||J===n.UNSIGNED_INT||H.gpuType===Bs;if(H.isInterleavedBufferAttribute){const oe=H.data,Te=oe.isInterleavedBuffer===!0?oe.stride:oe.itemSize,nt=H.offset;if(oe.isInstancedInterleavedBuffer||oe.isInstancedBufferAttribute){for(let Ce=0;Ce<L.locationSize;Ce++)d(L.location+Ce,oe.meshPerAttribute);z.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<L.locationSize;Ce++)u(L.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,B);for(let Ce=0;Ce<L.locationSize;Ce++)A(L.location+Ce,Z/L.locationSize,J,C,Te*re,(nt+Z/L.locationSize*Ce)*re,_e)}else{if(H.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)d(L.location+oe,H.meshPerAttribute);z.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let oe=0;oe<L.locationSize;oe++)u(L.location+oe);n.bindBuffer(n.ARRAY_BUFFER,B);for(let oe=0;oe<L.locationSize;oe++)A(L.location+oe,Z/L.locationSize,J,C,Z*re,Z/L.locationSize*oe*re,_e)}}else if(G!==void 0){const C=G[I];if(C!==void 0)switch(C.length){case 2:n.vertexAttrib2fv(L.location,C);break;case 3:n.vertexAttrib3fv(L.location,C);break;case 4:n.vertexAttrib4fv(L.location,C);break;default:n.vertexAttrib1fv(L.location,C)}}}}v()}function w(){k();for(const z in i){const K=i[z];for(const D in K){const T=K[D];for(const O in T){const W=T[O];for(const G in W)f(W[G].object),delete W[G];delete T[O]}}delete i[z]}}function R(z){if(i[z.id]===void 0)return;const K=i[z.id];for(const D in K){const T=K[D];for(const O in T){const W=T[O];for(const G in W)f(W[G].object),delete W[G];delete T[O]}}delete i[z.id]}function _(z){for(const K in i){const D=i[K];for(const T in D){const O=D[T];if(O[z.id]===void 0)continue;const W=O[z.id];for(const G in W)f(W[G].object),delete W[G];delete O[z.id]}}}function y(z){for(const K in i){const D=i[K],T=z.isInstancedMesh===!0?z.id:0,O=D[T];if(O!==void 0){for(const W in O){const G=O[W];for(const I in G)f(G[I].object),delete G[I];delete O[W]}delete D[T],Object.keys(D).length===0&&delete i[K]}}}function k(){U(),a=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:k,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:u,disableUnusedAttributes:v}}function Kf(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let h=0;for(let p=0;p<f;p++)h+=c[p];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Zf(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==hn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const y=_===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==zt&&_!==ln&&!y&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Le("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),u=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:u,maxAttributes:d,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:E,maxSamples:w,samples:R}}function $f(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Rn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const p=m.length!==0||h||i!==0||r;return r=h,i=m.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){t=f(m,h,0)},this.setState=function(m,h,p){const g=m.clippingPlanes,x=m.clipIntersection,u=m.clipShadows,d=n.get(m);if(!r||g===null||g.length===0||s&&!u)s?f(null):c();else{const v=s?0:i,A=v*4;let E=d.clippingState||null;l.value=E,E=f(g,h,A,p);for(let w=0;w!==A;++w)E[w]=t[w];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(m,h,p,g){const x=m!==null?m.length:0;let u=null;if(x!==0){if(u=l.value,g!==!0||u===null){const d=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(u===null||u.length<d)&&(u=new Float32Array(d));for(let A=0,E=p;A!==x;++A,E+=4)a.copy(m[A]).applyMatrix4(v,o),a.normal.toArray(u,E),u[E+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,u}}class Qa extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cr(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:_i});s.uniforms.tEquirect.value=t;const a=new qn(r,s),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=Ut),new $a(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Nl=256,Jf=3,Qf=20,Ul=256,Fl=16,jf=3,ep=new V,tp=new Oe;class as{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $a(1,10,null),this._boxMesh=new qn(new cr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=ep}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);const m=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(tp));const u=new $a(i,r,f);return u.position.copy(o),u.update(l,e),l.autoClear=m,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=g,e.background=x,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Nl,Xo(e))}_fromTexture(e,t){e.mapping===vi||e.mapping===$i?this._setSize(e.image.length===0?Nl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Ol(e,!1,!1),i=Math.log2(e)-Jf;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ol(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vi||e.mapping===$i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=np(),this._integrationMaterial=ip());const t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Fl);for(let a=0;a<=i;a++){const o=as.lodToRoughness(a,i);if(a>i-jf)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Ul*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rp());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Ol(n,e,t){return new Qa(n,{minFilter:Un,generateMipmaps:e,type:cn,colorSpace:Rr,depthBuffer:t})}function hr(n,e,t){return new si({name:n,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:t,side:Nt,blending:_i,depthTest:!1,depthWrite:!1})}function np(){return hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ul}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ip(){return hr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fl}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rp(){return hr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Qf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Bl(){return hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function zl(){return hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sp(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Is||p===Ns)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new Qa(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const p=h.mapping,g=p===Is||p===Ns,x=p===vi||p===$i;if(g||x){let u=t.get(h);const d=u!==void 0?u.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new as(n)),u=g?i.fromEquirectangular(h,u):i.fromCubemap(h,u),u.texture.pmremVersion=h.pmremVersion,t.set(h,u),u.texture;if(u!==void 0)return u.texture;{const v=h.image;return g&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new as(n)),u=g?i.fromEquirectangular(h):i.fromCubemap(h),u.texture.pmremVersion=h.pmremVersion,t.set(h,u),h.addEventListener("dispose",f),u.texture):null}}}return h}function o(h,p){return p===Is?h.mapping=vi:p===Ns&&(h.mapping=$i),h}function l(h){let p=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(h){const p=h.target;p.removeEventListener("dispose",f);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function m(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function ap(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Lr("WebGLRenderer: "+i+" extension not supported."),r}}}function op(n,e,t,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const u in g.attributes)e.remove(g.attributes[u]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const x=s.get(g);x&&(e.remove(x),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return r[x.id]!==void 0||(x.addEventListener("dispose",o),r[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function f(g){const x=g.attributes;for(const u in x)e.update(x[u],n.ARRAY_BUFFER)}function m(g){const x=g.index,u=g.attributes.position;let d=0;if(u===void 0)return;const v=x!==null?x.array.length:u.array.length/3-1,A=u.count>=65535?ll:ol,E=new A(Math.ceil(v/3)*6,1),w=E.array;if(x!==null){const _=x.array;d=x.version;for(let y=0,k=0;y<v;y+=3){const U=_[y+0],z=_[y+1],K=_[y+2];w[k++]=U,w[k++]=z,w[k++]=z,w[k++]=K,w[k++]=K,w[k++]=U}}else{d=u.version;for(let _=0,y=0;_<v;_+=3){const k=_+0,U=_+1,z=_+2;w[y++]=k,w[y++]=U,w[y++]=U,w[y++]=z,w[y++]=z,w[y++]=k}}E.version=d;const R=s.get(g);R&&e.remove(R),s.set(g,E)}function h(g){const x=s.get(g);if(x){const u=g.index;u!==null&&x.version<u.version&&m(g)}else m(g);return s.get(g)}function p(){for(const g in r){const x=r[g].deref();x!==void 0&&l(x)}}return{get:c,update:f,getWireframeAttribute:h,dispose:p}}function lp(n,e,t){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,h){n.drawElements(i,h,s,m*a),t.update(h,i,1)}function c(m,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,m*a,p),t.update(h,i,p))}function f(m,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,m,0,p);let x=0;for(let u=0;u<p;u++)x+=h[u];t.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function cp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hp(n,e,t){const i=new WeakMap,r=new ht;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==m){let k=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",k)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let E=o.attributes.position.count*A,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*w*4*m),_=new Jo(R,E,w,m);_.type=ln,_.needsUpdate=!0;const y=A*4;for(let U=0;U<m;U++){const z=u[U],K=d[U],D=v[U],T=E*w*4*U;for(let O=0;O<z.count;O++){const W=O*y;p===!0&&(r.fromBufferAttribute(z,O),R[T+W+0]=r.x,R[T+W+1]=r.y,R[T+W+2]=r.z,R[T+W+3]=0),g===!0&&(r.fromBufferAttribute(K,O),R[T+W+4]=r.x,R[T+W+5]=r.y,R[T+W+6]=r.z,R[T+W+7]=0),x===!0&&(r.fromBufferAttribute(D,O),R[T+W+8]=r.x,R[T+W+9]=r.y,R[T+W+10]=r.z,R[T+W+11]=D.itemSize===4?r.w:1)}}h={count:m,texture:_,size:new Ne(E,w)},i.set(o,h),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function up(n,e,t,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,m=c.geometry,h=e.get(c,m);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return h}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const dp={[Eo]:"LINEAR_TONE_MAPPING",[yo]:"REINHARD_TONE_MAPPING",[bo]:"CINEON_TONE_MAPPING",[To]:"ACES_FILMIC_TONE_MAPPING",[wo]:"AGX_TONE_MAPPING",[Ro]:"NEUTRAL_TONE_MAPPING",[Ao]:"CUSTOM_TONE_MAPPING"};function fp(n,e,t,i,r,s){const a=new un(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const f=new dn;f.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const m=new Du({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new qn(f,m),p=new wl(-1,1,1,-1,0,1);let g=null,x=null,u=!1,d,v=null,A=[],E=!1;this.setSize=function(w,R){a.setSize(w,R),o!==null&&o.setSize(w,R),l!==null&&l.setSize(w,R);for(let _=0;_<A.length;_++){const y=A[_];y.setSize&&y.setSize(w,R)}},this.setEffects=function(w){A=w,E=A.length>0&&A[0].isRenderPass===!0;const R=a.width,_=a.height;A.length>0&&o===null&&(o=new un(R,_,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new un(R,_,{type:cn,depthBuffer:!1,stencilBuffer:!1}));const y=r===!0&&A.some(k=>k.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ni(R,_),s===!0&&(c.format=On,c.type=Mi)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let k=0;k<A.length;k++){const U=A[k];U.setSize&&U.setSize(R,_),y&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(c)}},this.begin=function(w,R){if(u||w.toneMapping===Sn&&A.length===0)return!1;if(v=R,R!==null){const _=R.width,y=R.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return E===!1&&w.setRenderTarget(a),d=w.toneMapping,w.toneMapping=Sn,!0},this.hasRenderPass=function(){return E},this.end=function(w,R){w.toneMapping=d,u=!0;let _=a,y=o;for(let k=0;k<A.length;k++){const U=A[k];U.enabled!==!1&&(U.render(w,y,_,R),U.needsSwap!==!1&&(_=y,y=y===o?l:o))}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,m.defines={},qe.getTransfer(g)===Je&&(m.defines.SRGB_TRANSFER="");const k=dp[x];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(v),w.render(h,p),v=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),m.dispose()}}const Gl=new Lt,Hl=new Ni(1,1),kl=new _l(1),Vl=new Jo,Wl=new ou,Xl=new gl,ql=[],Yl=[],Kl=new Float32Array(16),Zl=new Float32Array(9),$l=new Float32Array(4);function Bi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ql[r];if(s===void 0&&(s=new Float32Array(r),ql[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function os(n,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function _p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function xp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;$l.set(i),n.uniformMatrix2fv(this.addr,!1,$l),mt(t,i)}}function vp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Zl.set(i),n.uniformMatrix3fv(this.addr,!1,Zl),mt(t,i)}}function Mp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Kl.set(i),n.uniformMatrix4fv(this.addr,!1,Kl),mt(t,i)}}function Sp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function Tp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function Rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function ls(n){return n.version===0&&(n.compareFunction=zo,n.needsUpdate=!0),n}function Cp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=ls(Hl):s=Gl,t.setTexture2D(e||s,r)}function Pp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wl,r)}function Lp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=ls(kl):s=Xl,t.setTextureCube(e||s,r)}function Dp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vl,r)}function Ip(n){switch(n){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return xp;case 35675:return vp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return Ep;case 35668:case 35672:return yp;case 35669:case 35673:return bp;case 5125:return Tp;case 36294:return Ap;case 36295:return wp;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}function Np(n,e){n.uniform1fv(this.addr,e)}function Up(n,e){const t=Bi(e,this.size,2);n.uniform2fv(this.addr,t)}function Fp(n,e){const t=Bi(e,this.size,3);n.uniform3fv(this.addr,t)}function Op(n,e){const t=Bi(e,this.size,4);n.uniform4fv(this.addr,t)}function Bp(n,e){const t=Bi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zp(n,e){const t=Bi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gp(n,e){const t=Bi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hp(n,e){n.uniform1iv(this.addr,e)}function kp(n,e){n.uniform2iv(this.addr,e)}function Vp(n,e){n.uniform3iv(this.addr,e)}function Wp(n,e){n.uniform4iv(this.addr,e)}function Xp(n,e){n.uniform1uiv(this.addr,e)}function qp(n,e){n.uniform2uiv(this.addr,e)}function Yp(n,e){n.uniform3uiv(this.addr,e)}function Kp(n,e){n.uniform4uiv(this.addr,e)}function Zp(n,e,t){const i=this.cache,r=e.length,s=os(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=ls(Hl):a=Gl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function $p(n,e,t){const i=this.cache,r=e.length,s=os(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wl,s[a])}function Jp(n,e,t){const i=this.cache,r=e.length,s=os(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ls(kl):a=Xl;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Qp(n,e,t){const i=this.cache,r=e.length,s=os(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vl,s[a])}function jp(n){switch(n){case 5126:return Np;case 35664:return Up;case 35665:return Fp;case 35666:return Op;case 35674:return Bp;case 35675:return zp;case 35676:return Gp;case 5124:case 35670:return Hp;case 35667:case 35671:return kp;case 35668:case 35672:return Vp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Qp}}class em{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ip(t.type)}}class tm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jp(t.type)}}class nm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Jl(n,e){n.seq.push(e),n.map[e.id]=e}function im(n,e,t){const i=n.name,r=i.length;for(ja.lastIndex=0;;){const s=ja.exec(i),a=ja.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Jl(t,c===void 0?new em(o,n,e):new tm(o,n,e));break}else{let m=t.map[o];m===void 0&&(m=new nm(o),Jl(t,m)),t=m}}}class cs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);im(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ql(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rm=37297;let sm=0;function am(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const jl=new Fe;function om(n){qe._getMatrix(jl,qe.workingColorSpace,n);const e=`mat3( ${jl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Cr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ec(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+am(n.getShaderSource(e),o)}else return s}function lm(n,e){const t=om(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const cm={[Eo]:"Linear",[yo]:"Reinhard",[bo]:"Cineon",[To]:"ACESFilmic",[wo]:"AgX",[Ro]:"Neutral",[Ao]:"Custom"};function hm(n,e){const t=cm[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hs=new V;function um(){qe.getLuminanceCoefficients(hs);const n=hs.x.toFixed(4),e=hs.y.toFixed(4),t=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function fm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ur(n){return n!==""}function tc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function nc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(n){return n.replace(mm,gm)}function gm(n,e){const t=ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return eo(t)}const _m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(n){return n.replace(_m,xm)}function xm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vm={[Mr]:"SHADOWMAP_TYPE_PCF",[Yi]:"SHADOWMAP_TYPE_VSM"};function Mm(n){return vm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sm={[$i]:"ENVMAP_MODE_REFRACTION"};function Em(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Sm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ym={[Ds]:"ENVMAP_BLENDING_MULTIPLY",[Th]:"ENVMAP_BLENDING_MIX",[Ah]:"ENVMAP_BLENDING_ADD"};function bm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ym[n.combine]||"ENVMAP_BLENDING_NONE"}function Tm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Mm(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Em(t),m=bm(t),h=dm(t),p=fm(s),g=r.createProgram();let x,u,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ur).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ur).join(`
`),u.length>0&&(u+=`
`)):(x=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),u=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Sn?hm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,lm("linearToOutputTexel",t.outputColorSpace),um(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=eo(a),a=tc(a,t),a=nc(a,t),o=eo(o),o=tc(o,t),o=nc(o,t),a=ic(a),o=ic(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=d+x+a,A=d+u+o,E=Ql(r,r.VERTEX_SHADER,v),w=Ql(r,r.FRAGMENT_SHADER,A);r.attachShader(g,E),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(U){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(g)||"",K=r.getShaderInfoLog(E)||"",D=r.getShaderInfoLog(w)||"",T=z.trim(),O=K.trim(),W=D.trim();let G=!0,I=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,w);else{const L=ec(r,E,"vertex"),H=ec(r,w,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+T+`
`+L+`
`+H)}else T!==""?Le("WebGLProgram: Program Info Log:",T):(O===""||W==="")&&(I=!1);I&&(U.diagnostics={runnable:G,programLog:T,vertexShader:{log:O,prefix:x},fragmentShader:{log:W,prefix:u}})}r.deleteShader(E),r.deleteShader(w),_=new cs(r,g),y=pm(r,g)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(g,rm)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let Am=0;class wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rm(e),t.set(e,i)),i}}class Rm{constructor(e){this.id=Am++,this.code=e,this.usedTimes=0}}function Cm(n){return n===jn||n===Ar||n===wr}function Pm(n,e,t,i,r,s){const a=new Pa,o=new wm,l=new Set,c=[],f=new Map,m=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,y,k,U,z,K){const D=U.fog,T=z.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||O,W),I=h[_.type];let L=i.precision;_.precision!==null&&(L=i.getMaxPrecision(_.precision),L!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",L,"instead."));const H=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,C=H!==void 0?H.length:0;let Z=0;T.morphAttributes.position!==void 0&&(Z=1),T.morphAttributes.normal!==void 0&&(Z=2),T.morphAttributes.color!==void 0&&(Z=3);let ee,B,J,re;if(I){const ve=pn[I];ee=ve.vertexShader,B=ve.fragmentShader}else{ee=_.vertexShader,B=_.fragmentShader;const ve=o.getVertexShaderStage(_),je=o.getFragmentShaderStage(_);o.update(_,ve,je),J=ve.id,re=je.id}const _e=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Te=z.isInstancedMesh===!0,nt=z.isBatchedMesh===!0,Ce=!!_.map,Qe=!!_.matcap,et=!!G,Ve=et&&G.isPMREMTexture===!0,Tt=!!_.aoMap,_t=!!_.lightMap,Bt=!!_.bumpMap&&_.wireframe===!1,lt=!!_.normalMap,vn=!!_.displacementMap,St=!!_.emissiveMap,Yt=!!_.metalnessMap,Kt=!!_.roughnessMap,Zt=_.anisotropy>0,F=_.clearcoat>0,$t=_.diffuseRoughness>0,at=_.dispersion>0,ot=_.retroreflectivity>0,ge=_.iridescence>0,xt=_.sheen>0,Pe=_.transmission>0,Ie=Zt&&!!_.anisotropyMap,b=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,q=F&&!!_.clearcoatRoughnessMap,se=$t&&!!_.diffuseRoughnessMap,ie=ge&&!!_.iridescenceMap,ce=ge&&!!_.iridescenceThicknessMap,pe=xt&&!!_.sheenColorMap,j=xt&&!!_.sheenRoughnessMap,te=!!_.specularMap,ue=!!_.specularColorMap,P=!!_.specularIntensityMap,ne=Pe&&!!_.transmissionMap,Q=Pe&&!!_.thicknessMap,de=!!_.gradientMap,le=!!_.alphaMap,he=_.alphaTest>0,we=!!_.alphaHash,Ge=!!_.extensions;let ae=Sn;_.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ae=n.toneMapping);const Re=Ve?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Be={shaderID:I,shaderType:_.type,shaderName:_.name,vertexShader:ee,fragmentShader:B,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:L,batching:nt,batchingColor:nt&&z._colorsTexture!==null,instancing:Te,instancingColor:Te&&z.instanceColor!==null,instancingMorph:Te&&z.morphTexture!==null,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ce,matcap:Qe,envMap:et,envMapMode:et&&G.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Re.length-1:null,envMapSize:Ve?Re[0].width:null,aoMap:Tt,lightMap:_t,bumpMap:Bt,normalMap:lt,displacementMap:vn,emissiveMap:St,normalMapObjectSpace:lt&&_.normalMapType===Ch,normalMapTangentSpace:lt&&_.normalMapType===Ma,packedNormalMap:lt&&_.normalMapType===Ma&&Cm(_.normalMap.format),metalnessMap:Yt,roughnessMap:Kt,anisotropy:Zt,anisotropyMap:Ie,clearcoat:F,clearcoatMap:b,clearcoatNormalMap:M,clearcoatRoughnessMap:q,diffuseRoughness:$t,diffuseRoughnessMap:se,dispersion:at,retroreflection:ot,iridescence:ge,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:xt,sheenColorMap:pe,sheenRoughnessMap:j,specularMap:te,specularColorMap:ue,specularIntensityMap:P,transmission:Pe,transmissionMap:ne,thicknessMap:Q,gradientMap:de,opaque:_.transparent===!1&&_.blending===Ki&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:he,alphaHash:we,combine:_.combine,mapUv:Ce&&p(_.map.channel),aoMapUv:Tt&&p(_.aoMap.channel),lightMapUv:_t&&p(_.lightMap.channel),bumpMapUv:Bt&&p(_.bumpMap.channel),normalMapUv:lt&&p(_.normalMap.channel),displacementMapUv:vn&&p(_.displacementMap.channel),emissiveMapUv:St&&p(_.emissiveMap.channel),metalnessMapUv:Yt&&p(_.metalnessMap.channel),roughnessMapUv:Kt&&p(_.roughnessMap.channel),anisotropyMapUv:Ie&&p(_.anisotropyMap.channel),clearcoatMapUv:b&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&p(_.sheenRoughnessMap.channel),specularMapUv:te&&p(_.specularMap.channel),specularColorMapUv:ue&&p(_.specularColorMap.channel),specularIntensityMapUv:P&&p(_.specularIntensityMap.channel),transmissionMapUv:ne&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:le&&p(_.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(lt||Zt),vertexNormals:!!T.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!T.attributes.uv&&(Ce||le),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||T.attributes.normal===void 0&&lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:oe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:Z,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:K.filter(ve=>ve.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ce&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===Je,decodeVideoTextureEmissive:St&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===Je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mn,flipSided:_.side===Nt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&_.extensions.multiDraw===!0||nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function x(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)y.push(k),y.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(u(y,_),d(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function u(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function d(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){const y=h[_.type];let k;if(y){const U=pn[y];k=Cu.clone(U.uniforms)}else k=_.uniforms;return k}function A(_,y){let k=f.get(y);return k!==void 0?++k.usedTimes:(k=new Tm(n,y,_,r),c.push(k),f.set(y,k)),k}function E(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:R}}function Lm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Dm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function sc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ac(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,x,u,d){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:u,group:d},n[e]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=u,v.group=d),e++,v}function l(h,p,g,x,u,d,v){v.reversedDepth===!0&&(u=-u);const A=o(h,p,g,x,u,d);g.transmission>0?i.push(A):g.transparent===!0?r.push(A):t.push(A)}function c(h,p,g,x,u,d){const v=o(h,p,g,x,u,d);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function f(h,p){t.length>1&&t.sort(h||Dm),i.length>1&&i.sort(p||sc),r.length>1&&r.sort(p||sc)}function m(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:m,sort:f}}function Im(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ac,n.set(i,[a])):r>=s.length?(a=new ac,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Nm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new Oe};break;case"SpotLight":t={position:new V,direction:new V,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Um(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fm=0;function Om(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bm(n){const e=new Nm,t=Um(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new rt,a=new rt;function o(c){let f=0,m=0,h=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let p=0,g=0,x=0,u=0,d=0,v=0,A=0,E=0,w=0,R=0,_=0,y=0,k=0,U=0;c.sort(Om);for(let K=0,D=c.length;K<D;K++){const T=c[K],O=T.color,W=T.intensity,G=T.distance;let I=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===jn?I=T.shadow.map.texture:I=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)f+=O.r*W,m+=O.g*W,h+=O.b*W;else if(T.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(T.sh.coefficients[L],W);U++}else if(T.isSunLight){const L=e.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const H=T.shadow,C=t.get(T);C.shadowIntensity=H.intensity,C.shadowBias=H.bias,C.shadowNormalBias=H.normalBias,C.shadowRadius=H.radius,C.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[g]=C,i.sunShadowMap[g]=I;const Z=H.getViewportCount();for(let ee=0;ee<Z;ee++)i.sunShadowMatrix[x+ee]=H.getMatrix(ee),i.sunShadowCascade[x+ee]=H._cascadeData[ee];x+=Z,g++}i.sun[p]=L,p++}else if(T.isDirectionalLight){const L=e.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const H=T.shadow,C=t.get(T);C.shadowIntensity=H.intensity,C.shadowBias=H.bias,C.shadowNormalBias=H.normalBias,C.shadowRadius=H.radius,C.shadowMapSize=H.mapSize,i.directionalShadow[u]=C,i.directionalShadowMap[u]=I,i.directionalShadowMatrix[u]=T.shadow.matrix,w++}i.directional[u]=L,u++}else if(T.isSpotLight){const L=e.get(T);L.position.setFromMatrixPosition(T.matrixWorld),L.color.copy(O).multiplyScalar(W),L.distance=G,L.coneCos=Math.cos(T.angle),L.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),L.decay=T.decay,i.spot[v]=L;const H=T.shadow;if(T.map&&(i.spotLightMap[y]=T.map,y++,H.updateMatrices(T),T.castShadow&&k++),i.spotLightMatrix[v]=H.matrix,T.castShadow){const C=t.get(T);C.shadowIntensity=H.intensity,C.shadowBias=H.bias,C.shadowNormalBias=H.normalBias,C.shadowRadius=H.radius,C.shadowMapSize=H.mapSize,i.spotShadow[v]=C,i.spotShadowMap[v]=I,_++}v++}else if(T.isRectAreaLight){const L=e.get(T);L.color.copy(O).multiplyScalar(W),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),i.rectArea[A]=L,A++}else if(T.isPointLight){const L=e.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),L.distance=T.distance,L.decay=T.decay,T.castShadow){const H=T.shadow,C=t.get(T);C.shadowIntensity=H.intensity,C.shadowBias=H.bias,C.shadowNormalBias=H.normalBias,C.shadowRadius=H.radius,C.shadowMapSize=H.mapSize,C.shadowCameraNear=H.camera.near,C.shadowCameraFar=H.camera.far,i.pointShadow[d]=C,i.pointShadowMap[d]=I,i.pointShadowMatrix[d]=T.shadow.matrix,R++}i.point[d]=L,d++}else if(T.isHemisphereLight){const L=e.get(T);L.skyColor.copy(T.color).multiplyScalar(W),L.groundColor.copy(T.groundColor).multiplyScalar(W),i.hemi[E]=L,E++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=h;const z=i.hash;(z.sunLength!==p||z.directionalLength!==u||z.pointLength!==d||z.spotLength!==v||z.rectAreaLength!==A||z.hemiLength!==E||z.numSunShadows!==g||z.numDirectionalShadows!==w||z.numPointShadows!==R||z.numSpotShadows!==_||z.numSpotMaps!==y||z.numLightProbes!==U)&&(i.sun.length=p,i.directional.length=u,i.spot.length=v,i.rectArea.length=A,i.point.length=d,i.hemi.length=E,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+y-k,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=U,z.sunLength=p,z.directionalLength=u,z.pointLength=d,z.spotLength=v,z.rectAreaLength=A,z.hemiLength=E,z.numSunShadows=g,z.numDirectionalShadows=w,z.numPointShadows=R,z.numSpotShadows=_,z.numSpotMaps=y,z.numLightProbes=U,i.version=Fm++)}function l(c,f){let m=0,h=0,p=0,g=0,x=0,u=0;const d=f.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){const E=c[v];if(E.isSunLight){const w=i.sun[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),m++}else if(E.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),h++}else if(E.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),g++}else if(E.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),a.identity(),s.copy(E.matrixWorld),s.premultiply(d),a.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const w=i.hemi[u];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),u++}}}return{setup:o,setupView:l,state:i}}function oc(n){const e=new Bm(n),t=[],i=[],r=[];function s(m){f.camera=m,t.length=0,i.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):t.push(m)}function o(m){i.push(m)}function l(){e.setup(t),r.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function c(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function zm(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new oc(n),e.set(r,[o])):s>=a.length?(o=new oc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,km=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Vm=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],lc=new rt,dr=new V,to=new V;function Wm(n,e,t){let i=new or;const r=new Ne,s=new Ne,a=new ht,o=new Nu,l=new Uu,c={},f=t.maxTextureSize,m={[Qn]:Nt,[Nt]:Qn,[Mn]:Mn},h=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Gm,fragmentShader:Hm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qn(g,h),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let d=this.type;this.render=function(R,_,y){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||R.length===0)return;this.type===ah&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);const k=n.getRenderTarget(),U=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),K=n.state;K.setBlending(_i),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const D=d!==this.type;D&&_.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(O=>O.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,O=R.length;T<O;T++){const W=R[T],G=W.shadow;if(G===void 0){Le("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const I=G.getFrameExtents();r.multiply(I),s.copy(G.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/I.x),r.x=s.x*I.x,G.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/I.y),r.y=s.y*I.y,G.mapSize.y=s.y));const L=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=L,G.map===null||D===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Yi){if(W.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new un(r.x,r.y,{format:jn,type:cn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new Ni(r.x,r.y,ln),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=Fn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=bt,G.map.depthTexture.magFilter=bt}else W.isPointLight?(G.map=new Qa(r.x),G.map.depthTexture=new _l(r.x,on)):(G.map=new un(r.x,r.y),G.map.depthTexture=new Ni(r.x,r.y,on)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=Fn,this.type===Mr?(G.map.depthTexture.compareFunction=L?Bo:Oo,G.map.depthTexture.minFilter=Ut,G.map.depthTexture.magFilter=Ut):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=bt,G.map.depthTexture.magFilter=bt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const H=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();W.isPointLight!==!0&&G.updateMatrices(W,y);const C=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:y.layers;for(let Z=0;Z<H;Z++){const ee=G.getCamera(Z);if(W.isPointLight){const B=G.camera,J=G.matrix,re=W.distance||B.far;re!==B.far&&(B.far=re,B.updateProjectionMatrix()),dr.setFromMatrixPosition(W.matrixWorld),B.position.copy(dr),to.copy(B.position),to.add(km[Z]),B.up.copy(Vm[Z]),B.lookAt(to),B.updateMatrixWorld(),J.makeTranslation(-dr.x,-dr.y,-dr.z),lc.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),G._frustum.setFromProjectionMatrix(lc,B.coordinateSystem,B.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(G.map),n.clear());const B=G.getViewport(Z);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),K.viewport(a)}i=G.getFrustum(Z),E(_,y,ee,W,C,this.type)}G.isPointLightShadow!==!0&&this.type===Yi&&v(G,y),G.needsUpdate=!1}d=this.type,u.needsUpdate=!1,n.setRenderTarget(k,U,z)};function v(R,_){const y=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null?R.mapPass=new un(r.x,r.y,{format:jn,type:cn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(_,null,y,h,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(_,null,y,p,x,null)}function A(R,_,y,k){let U=null;const z=y.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)U=z;else if(U=y.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const K=U.uuid,D=_.uuid;let T=c[K];T===void 0&&(T={},c[K]=T);let O=T[D];O===void 0&&(O=U.clone(),T[D]=O,_.addEventListener("dispose",w)),U=O}if(U.visible=_.visible,U.wireframe=_.wireframe,k===Yi?U.side=_.shadowSide!==null?_.shadowSide:_.side:U.side=_.shadowSide!==null?_.shadowSide:m[_.side],U.alphaMap=_.alphaMap,U.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,U.map=_.map,U.clipShadows=_.clipShadows,U.clippingPlanes=_.clippingPlanes,U.clipIntersection=_.clipIntersection,U.displacementMap=_.displacementMap,U.displacementScale=_.displacementScale,U.displacementBias=_.displacementBias,U.wireframeLinewidth=_.wireframeLinewidth,U.linewidth=_.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const K=n.properties.get(U);K.light=y}return U}function E(R,_,y,k,U,z){if(R.visible===!1)return;if(R.layers.test(U)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===Yi)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,R.matrixWorld);const T=e.update(R),O=R.material;if(Array.isArray(O)){const W=T.groups;for(let G=0,I=W.length;G<I;G++){const L=W[G],H=O[L.materialIndex];if(H&&H.visible){const C=A(R,H,k,z);R.onBeforeShadow(n,R,_,y,T,C,L),n.renderBufferDirect(y,null,T,C,R,L),R.onAfterShadow(n,R,_,y,T,C,L)}}}else if(O.visible){const W=A(R,O,k,z);R.onBeforeShadow(n,R,_,y,T,W,null),n.renderBufferDirect(y,null,T,W,R,null),R.onAfterShadow(n,R,_,y,T,W,null)}}const D=R.children;for(let T=0,O=D.length;T<O;T++)E(D[T],_,y,k,U,z)}function w(R){R.target.removeEventListener("dispose",w);for(const y in c){const k=c[y],U=R.target.uuid;U in k&&(k[U].dispose(),delete k[U])}}}function Xm(n,e){function t(){let P=!1;const ne=new ht;let Q=null;const de=new ht(0,0,0,0);return{setMask:function(le){Q!==le&&!P&&(n.colorMask(le,le,le,le),Q=le)},setLocked:function(le){P=le},setClear:function(le,he,we,Ge,ae){ae===!0&&(le*=Ge,he*=Ge,we*=Ge),ne.set(le,he,we,Ge),de.equals(ne)===!1&&(n.clearColor(le,he,we,Ge),de.copy(ne))},reset:function(){P=!1,Q=null,de.set(-1,0,0,0)}}}function i(){let P=!1,ne=!1,Q=null,de=null,le=null;return{setReversed:function(he){if(ne!==he){const we=e.get("EXT_clip_control");he?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ne=he;const Ge=le;le=null,this.setClear(Ge)}},getReversed:function(){return ne},setTest:function(he){he?oe(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(he){Q!==he&&!P&&(n.depthMask(he),Q=he)},setFunc:function(he){if(ne&&(he=Gh[he]),de!==he){switch(he){case Ts:n.depthFunc(n.NEVER);break;case As:n.depthFunc(n.ALWAYS);break;case ws:n.depthFunc(n.LESS);break;case Zi:n.depthFunc(n.LEQUAL);break;case Rs:n.depthFunc(n.EQUAL);break;case Cs:n.depthFunc(n.GEQUAL);break;case Ps:n.depthFunc(n.GREATER);break;case Ls:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=he}},setLocked:function(he){P=he},setClear:function(he){le!==he&&(le=he,ne&&(he=1-he),n.clearDepth(he))},reset:function(){P=!1,Q=null,de=null,le=null,ne=!1}}}function r(){let P=!1,ne=null,Q=null,de=null,le=null,he=null,we=null,Ge=null,ae=null;return{setTest:function(Re){P||(Re?oe(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Re){ne!==Re&&!P&&(n.stencilMask(Re),ne=Re)},setFunc:function(Re,Be,ve){(Q!==Re||de!==Be||le!==ve)&&(n.stencilFunc(Re,Be,ve),Q=Re,de=Be,le=ve)},setOp:function(Re,Be,ve){(he!==Re||we!==Be||Ge!==ve)&&(n.stencilOp(Re,Be,ve),he=Re,we=Be,Ge=ve)},setLocked:function(Re){P=Re},setClear:function(Re){ae!==Re&&(n.clearStencil(Re),ae=Re)},reset:function(){P=!1,ne=null,Q=null,de=null,le=null,he=null,we=null,Ge=null,ae=null}}}const s=new t,a=new i,o=new r;let l={};const c=new WeakMap;let f={},m={},h={},p=new WeakMap,g=[],x=null,u=!1,d=null,v=null,A=null,E=null,w=null,R=null,_=null,y=new Oe(0,0,0),k=0,U=!1,z=null,K=null,D=null,T=null,O=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,I=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(L)[1]),G=I>=1):L.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),G=I>=2);let H=null,C={};const Z=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),B=new ht().fromArray(Z),J=new ht().fromArray(ee);function re(P,ne,Q,de){const le=new Uint8Array(4),he=n.createTexture();n.bindTexture(P,he),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<Q;we++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ne+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return he}const _e={};_e[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(Zi),Bt(!1),lt(go),oe(n.CULL_FACE),Tt(_i);function oe(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function Te(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function nt(P,ne){return h[P]!==ne?(n.bindFramebuffer(P,ne),h[P]=ne,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ne),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ce(P,ne){let Q=g,de=!1;if(P){Q=p.get(ne),Q===void 0&&(Q=[],p.set(ne,Q));const le=P.textures;if(Q.length!==le.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let he=0,we=le.length;he<we;he++)Q[he]=n.COLOR_ATTACHMENT0+he;Q.length=le.length,de=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,de=!0);de&&n.drawBuffers(Q)}function Qe(P){return x!==P?(n.useProgram(P),x=P,!0):!1}const et={[xi]:n.FUNC_ADD,[lh]:n.FUNC_SUBTRACT,[ch]:n.FUNC_REVERSE_SUBTRACT};et[hh]=n.MIN,et[uh]=n.MAX;const Ve={[dh]:n.ZERO,[fh]:n.ONE,[ph]:n.SRC_COLOR,[Mo]:n.SRC_ALPHA,[Mh]:n.SRC_ALPHA_SATURATE,[xh]:n.DST_COLOR,[gh]:n.DST_ALPHA,[mh]:n.ONE_MINUS_SRC_COLOR,[So]:n.ONE_MINUS_SRC_ALPHA,[vh]:n.ONE_MINUS_DST_COLOR,[_h]:n.ONE_MINUS_DST_ALPHA,[Sh]:n.CONSTANT_COLOR,[Eh]:n.ONE_MINUS_CONSTANT_COLOR,[yh]:n.CONSTANT_ALPHA,[bh]:n.ONE_MINUS_CONSTANT_ALPHA};function Tt(P,ne,Q,de,le,he,we,Ge,ae,Re){if(P===_i){u===!0&&(Te(n.BLEND),u=!1);return}if(u===!1&&(oe(n.BLEND),u=!0),P!==oh){if(P!==d||Re!==U){if((v!==xi||w!==xi)&&(n.blendEquation(n.FUNC_ADD),v=xi,w=xi),Re)switch(P){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _o:n.blendFunc(n.ONE,n.ONE);break;case xo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",P);break}else switch(P){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _o:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xo:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vo:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",P);break}A=null,E=null,R=null,_=null,y.set(0,0,0),k=0,d=P,U=Re}return}le=le||ne,he=he||Q,we=we||de,(ne!==v||le!==w)&&(n.blendEquationSeparate(et[ne],et[le]),v=ne,w=le),(Q!==A||de!==E||he!==R||we!==_)&&(n.blendFuncSeparate(Ve[Q],Ve[de],Ve[he],Ve[we]),A=Q,E=de,R=he,_=we),(Ge.equals(y)===!1||ae!==k)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ae),y.copy(Ge),k=ae),d=P,U=!1}function _t(P,ne){P.side===Mn?Te(n.CULL_FACE):oe(n.CULL_FACE);let Q=P.side===Nt;ne&&(Q=!Q),Bt(Q),P.blending===Ki&&P.transparent===!1?Tt(_i):Tt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const de=P.stencilWrite;o.setTest(de),de&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),St(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(P){z!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),z=P)}function lt(P){P!==rh?(oe(n.CULL_FACE),P!==K&&(P===go?n.cullFace(n.BACK):P===sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),K=P}function vn(P){P!==D&&(G&&n.lineWidth(P),D=P)}function St(P,ne,Q){P?(oe(n.POLYGON_OFFSET_FILL),(T!==ne||O!==Q)&&(T=ne,O=Q,a.getReversed()&&(ne=-ne,Q=-Q),n.polygonOffset(ne,Q))):Te(n.POLYGON_OFFSET_FILL)}function Yt(P){P?oe(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Kt(P){P===void 0&&(P=n.TEXTURE0+W-1),H!==P&&(n.activeTexture(P),H=P)}function Zt(P,ne,Q){Q===void 0&&(H===null?Q=n.TEXTURE0+W-1:Q=H);let de=C[Q];de===void 0&&(de={type:void 0,texture:void 0},C[Q]=de),(de.type!==P||de.texture!==ne)&&(H!==Q&&(n.activeTexture(Q),H=Q),n.bindTexture(P,ne||_e[P]),de.type=P,de.texture=ne)}function F(){const P=C[H];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $t(){try{n.compressedTexImage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function at(){try{n.compressedTexImage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function ot(){try{n.texSubImage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function ge(){try{n.texSubImage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function xt(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function Ie(){try{n.texStorage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function b(){try{n.texStorage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function M(){try{n.texImage2D(...arguments)}catch(P){Ke("WebGLState:",P)}}function q(){try{n.texImage3D(...arguments)}catch(P){Ke("WebGLState:",P)}}function se(P){return m[P]!==void 0?m[P]:n.getParameter(P)}function ie(P,ne){m[P]!==ne&&(n.pixelStorei(P,ne),m[P]=ne)}function ce(P){B.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),B.copy(P))}function pe(P){J.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),J.copy(P))}function j(P,ne){let Q=c.get(ne);Q===void 0&&(Q=new WeakMap,c.set(ne,Q));let de=Q.get(P);de===void 0&&(de=n.getUniformBlockIndex(ne,P.name),n.uniformBlockBinding(ne,de,de),Q.set(P,de))}function te(P,ne,Q){const le=c.get(ne).get(P);l[le]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,Q),l[le]=Q)}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},m={},H=null,C={},h={},l={},p=new WeakMap,g=[],x=null,u=!1,d=null,v=null,A=null,E=null,w=null,R=null,_=null,y=new Oe(0,0,0),k=0,U=!1,z=null,K=null,D=null,T=null,O=null,B.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Te,bindFramebuffer:nt,drawBuffers:Ce,useProgram:Qe,setBlending:Tt,setMaterial:_t,setFlipSided:Bt,setCullFace:lt,setLineWidth:vn,setPolygonOffset:St,setScissorTest:Yt,activeTexture:Kt,bindTexture:Zt,unbindTexture:F,compressedTexImage2D:$t,compressedTexImage3D:at,texImage2D:M,texImage3D:q,pixelStorei:ie,getParameter:se,updateUBOMapping:j,uniformBlockBinding:te,texStorage2D:Ie,texStorage3D:b,texSubImage2D:ot,texSubImage3D:ge,compressedTexSubImage2D:xt,compressedTexSubImage3D:Pe,scissor:ce,viewport:pe,reset:ue}}function qm(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,f=new WeakMap,m=new Set;let h;const p=new WeakMap,g=new Set,x=new FinalizationRegistry(b=>g.delete(b));let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(b,M){return u?new OffscreenCanvas(b,M):Pr("canvas")}function v(b,M,q){let se=1;const ie=Ie(b);if((ie.width>q||ie.height>q)&&(se=q/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(se*ie.width),pe=Math.floor(se*ie.height);h===void 0&&(h=d(ce,pe));const j=M?d(ce,pe):h;return j.width=ce,j.height=pe,j.getContext("2d").drawImage(b,0,0,ce,pe),Le("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ce+"x"+pe+")."),j}else return"data"in b&&Le("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function A(b){return b.generateMipmaps}function E(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(b,M,q,se,ie,ce=!1){if(b!==null){if(n[b]!==void 0)return n[b];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let pe;se&&(pe=e.get("EXT_texture_norm16"),pe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===n.RED&&(q===n.FLOAT&&(j=n.R32F),q===n.HALF_FLOAT&&(j=n.R16F),q===n.UNSIGNED_BYTE&&(j=n.R8),q===n.UNSIGNED_SHORT&&pe&&(j=pe.R16_EXT),q===n.SHORT&&pe&&(j=pe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.R8UI),q===n.UNSIGNED_SHORT&&(j=n.R16UI),q===n.UNSIGNED_INT&&(j=n.R32UI),q===n.BYTE&&(j=n.R8I),q===n.SHORT&&(j=n.R16I),q===n.INT&&(j=n.R32I)),M===n.RG&&(q===n.FLOAT&&(j=n.RG32F),q===n.HALF_FLOAT&&(j=n.RG16F),q===n.UNSIGNED_BYTE&&(j=n.RG8),q===n.UNSIGNED_SHORT&&pe&&(j=pe.RG16_EXT),q===n.SHORT&&pe&&(j=pe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.RG8UI),q===n.UNSIGNED_SHORT&&(j=n.RG16UI),q===n.UNSIGNED_INT&&(j=n.RG32UI),q===n.BYTE&&(j=n.RG8I),q===n.SHORT&&(j=n.RG16I),q===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.RGB8UI),q===n.UNSIGNED_SHORT&&(j=n.RGB16UI),q===n.UNSIGNED_INT&&(j=n.RGB32UI),q===n.BYTE&&(j=n.RGB8I),q===n.SHORT&&(j=n.RGB16I),q===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),q===n.UNSIGNED_INT&&(j=n.RGBA32UI),q===n.BYTE&&(j=n.RGBA8I),q===n.SHORT&&(j=n.RGBA16I),q===n.INT&&(j=n.RGBA32I)),M===n.RGB&&(q===n.UNSIGNED_SHORT&&pe&&(j=pe.RGB16_EXT),q===n.SHORT&&pe&&(j=pe.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),M===n.RGBA){const te=ce?Cr:qe.getTransfer(ie);q===n.FLOAT&&(j=n.RGBA32F),q===n.HALF_FLOAT&&(j=n.RGBA16F),q===n.UNSIGNED_BYTE&&(j=te===Je?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&pe&&(j=pe.RGBA16_EXT),q===n.SHORT&&pe&&(j=pe.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(b,M){let q;return b?M===null||M===on||M===Mi?q=n.DEPTH24_STENCIL8:M===ln?q=n.DEPTH32F_STENCIL8:M===Ji&&(q=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===on||M===Mi?q=n.DEPTH_COMPONENT24:M===ln?q=n.DEPTH_COMPONENT32F:M===Ji&&(q=n.DEPTH_COMPONENT16),q}function y(b,M){return A(b)===!0||b.isFramebufferTexture&&b.minFilter!==bt&&b.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function k(b){const M=new WeakRef(b);i.get(b).__ref=M,g.add(M),x.register(b,M,M)}function U(b){const M=i.get(b).__ref;M!==void 0&&(g.delete(M),x.unregister(M))}function z(b){D(b.target)}function K(b){T(b.target)}function D(b){b.removeEventListener("dispose",z),U(b),W(b),b.isVideoTexture&&f.delete(b),b.isHTMLTexture&&m.delete(b)}function T(b){b.removeEventListener("dispose",K),U(b),I(b)}function O(){for(const b of g){const M=b.deref();M!==void 0&&(M.isRenderTarget===!0?T(M):D(M))}g.clear(),m.clear()}function W(b){const M=i.get(b);if(M.__webglInit===void 0)return;const q=b.source,se=p.get(q);if(se){const ie=se[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&G(b),Object.keys(se).length===0&&p.delete(q)}i.remove(b)}function G(b){const M=i.get(b);n.deleteTexture(M.__webglTexture);const q=b.source,se=p.get(q);delete se[M.__cacheKey],a.memory.textures--}function I(b){const M=i.get(b);M.__depthDisposeCallback&&M.__depthDisposeCallback();const q=b.depthTexture;if(q&&q.renderTarget===b&&D(q),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let ce=0;ce<M.__webglFramebuffer[ie].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[ie][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)n.deleteFramebuffer(M.__webglFramebuffer[ie]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const se=b.textures;for(let ie=0,ce=se.length;ie<ce;ie++){const pe=i.get(se[ie]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(se[ie])}i.remove(b)}let L=0;function H(){L=0}function C(){return L}function Z(b){L=b}function ee(){const b=L;return b>=r.maxTextures&&Le("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function B(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.mipmapsAutoUpdate),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function J(b,M){const q=i.get(b);if(b.isVideoTexture&&xt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&q.__version!==b.version){const se=b.image;if(se===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(q,b,M);return}}else b.isExternalTexture&&(q.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+M)}function re(b,M){const q=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&q.__version!==b.version){_t(q,b,M);return}else b.isExternalTexture&&(q.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+M)}function _e(b,M){const q=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&q.__version!==b.version){_t(q,b,M);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+M)}function oe(b,M){const q=i.get(b);if(b.version>0&&q.__version!==b.version){Bt(q,b,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+M)}const Te={[Us]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[Fs]:n.MIRRORED_REPEAT},nt={[bt]:n.NEAREST,[wh]:n.NEAREST_MIPMAP_NEAREST,[Sr]:n.NEAREST_MIPMAP_LINEAR,[Ut]:n.LINEAR,[Os]:n.LINEAR_MIPMAP_NEAREST,[Un]:n.LINEAR_MIPMAP_LINEAR},Ce={[Lh]:n.NEVER,[zo]:n.ALWAYS,[Dh]:n.LESS,[Oo]:n.LEQUAL,[Ih]:n.EQUAL,[Bo]:n.GEQUAL,[Nh]:n.GREATER,[Uh]:n.NOTEQUAL};function Qe(b,M){if(M.type===ln&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ut||M.magFilter===Os||M.magFilter===Sr||M.magFilter===Un||M.minFilter===Ut||M.minFilter===Os||M.minFilter===Sr||M.minFilter===Un)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Te[M.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Te[M.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Te[M.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,nt[M.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,nt[M.minFilter]),M.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bt||M.minFilter!==Sr&&M.minFilter!==Un||M.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function et(b,M){let q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",z),k(M));const se=M.source;let ie=p.get(se);ie===void 0&&(ie={},p.set(se,ie));const ce=B(M);if(ce!==b.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ie[ce].usedTimes++;const pe=ie[b.__cacheKey];pe!==void 0&&(ie[b.__cacheKey].usedTimes--,pe.usedTimes===0&&G(M)),b.__cacheKey=ce,b.__webglTexture=ie[ce].texture}return q}function Ve(b,M,q){return Math.floor(Math.floor(b/q)/M)}function Tt(b,M,q,se){const ce=b.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,q,se,M.data);else{ce.sort((P,ne)=>P.start-ne.start);let pe=0;for(let P=1;P<ce.length;P++){const ne=ce[pe],Q=ce[P],de=ne.start+ne.count,le=Ve(Q.start,M.width,4),he=Ve(ne.start,M.width,4);Q.start<=de+1&&le===he&&Ve(Q.start+Q.count-1,M.width,4)===le?ne.count=Math.max(ne.count,Q.start+Q.count-ne.start):(++pe,ce[pe]=Q)}ce.length=pe+1;const j=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let P=0,ne=ce.length;P<ne;P++){const Q=ce[P],de=Math.floor(Q.start/4),le=Math.ceil(Q.count/4),he=de%M.width,we=Math.floor(de/M.width),Ge=le,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,we),t.texSubImage2D(n.TEXTURE_2D,0,he,we,Ge,ae,q,se,M.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function _t(b,M,q){let se=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=n.TEXTURE_3D);const ie=et(b,M),ce=M.source;t.bindTexture(se,b.__webglTexture,n.TEXTURE0+q);const pe=i.get(ce);if(ce.version!==pe.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ae=qe.getPrimaries(qe.workingColorSpace),Re=M.colorSpace===Bn?null:qe.getPrimaries(M.colorSpace),Be=M.colorSpace===Bn||ae===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let te=v(M.image,!1,r.maxTextureSize);te=Pe(M,te);const ue=s.convert(M.format,M.colorSpace),P=s.convert(M.type);let ne=R(M.internalFormat,ue,P,M.normalized,M.colorSpace,M.isVideoTexture);Qe(se,M);let Q;const de=M.mipmaps,le=M.isVideoTexture!==!0,he=pe.__version===void 0||ie===!0,we=ce.dataReady,Ge=y(M,te);if(M.isDepthTexture)ne=_(M.format===On,M.type),he&&(le?t.texStorage2D(n.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ne,te.width,te.height,0,ue,P,null));else if(M.isDataTexture)if(de.length>0){le&&he&&t.texStorage2D(n.TEXTURE_2D,Ge,ne,de[0].width,de[0].height);for(let ae=0,Re=de.length;ae<Re;ae++)Q=de[ae],le?we&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Q.width,Q.height,ue,P,Q.data):t.texImage2D(n.TEXTURE_2D,ae,ne,Q.width,Q.height,0,ue,P,Q.data);M.generateMipmaps=!1}else le?(he&&t.texStorage2D(n.TEXTURE_2D,Ge,ne,te.width,te.height),we&&Tt(M,te,ue,P)):t.texImage2D(n.TEXTURE_2D,0,ne,te.width,te.height,0,ue,P,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,ne,de[0].width,de[0].height,te.depth);for(let ae=0,Re=de.length;ae<Re;ae++)if(Q=de[ae],M.format!==hn)if(ue!==null)if(le){if(we)if(M.layerUpdates.size>0){const Be=Ll(Q.width,Q.height,M.format,M.type);for(const ve of M.layerUpdates){const je=Q.data.subarray(ve*Be/Q.data.BYTES_PER_ELEMENT,(ve+1)*Be/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,ve,Q.width,Q.height,1,ue,je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Q.width,Q.height,te.depth,ue,Q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ne,Q.width,Q.height,te.depth,0,Q.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Q.width,Q.height,te.depth,ue,P,Q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ne,Q.width,Q.height,te.depth,0,ue,P,Q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{le&&he&&t.texStorage2D(n.TEXTURE_2D,Ge,ne,de[0].width,de[0].height);for(let ae=0,Re=de.length;ae<Re;ae++)Q=de[ae],M.format!==hn?ue!==null?le?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Q.width,Q.height,ue,Q.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ne,Q.width,Q.height,0,Q.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?we&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Q.width,Q.height,ue,P,Q.data):t.texImage2D(n.TEXTURE_2D,ae,ne,Q.width,Q.height,0,ue,P,Q.data)}else if(M.isDataArrayTexture)if(le){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,ne,te.width,te.height,te.depth),we)if(M.layerUpdates.size>0){const ae=Ll(te.width,te.height,M.format,M.type);for(const Re of M.layerUpdates){const Be=te.data.subarray(Re*ae/te.data.BYTES_PER_ELEMENT,(Re+1)*ae/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,te.width,te.height,1,ue,P,Be)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,P,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,ue,P,te.data);else if(M.isData3DTexture)le?(he&&t.texStorage3D(n.TEXTURE_3D,Ge,ne,te.width,te.height,te.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,P,te.data)):t.texImage3D(n.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,ue,P,te.data);else if(M.isFramebufferTexture){if(he)if(le)t.texStorage2D(n.TEXTURE_2D,Ge,ne,te.width,te.height);else{let ae=te.width,Re=te.height;for(let Be=0;Be<Ge;Be++)t.texImage2D(n.TEXTURE_2D,Be,ne,ae,Re,0,ue,P,null),ae>>=1,Re>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),te.parentNode!==ae){ae.appendChild(te),m.add(M),ae.onpaint=Re=>{const Be=Re.changedElements;for(const ve of m)Be.includes(ve.image)&&(ve.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const Be=n.RGBA,ve=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,ve,je,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(le&&he){const ae=Ie(de[0]);t.texStorage2D(n.TEXTURE_2D,Ge,ne,ae.width,ae.height)}for(let ae=0,Re=de.length;ae<Re;ae++)Q=de[ae],le?we&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ue,P,Q):t.texImage2D(n.TEXTURE_2D,ae,ne,ue,P,Q);M.generateMipmaps=!1}else if(le){if(he){const ae=Ie(te);t.texStorage2D(n.TEXTURE_2D,Ge,ne,ae.width,ae.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,P,te)}else t.texImage2D(n.TEXTURE_2D,0,ne,ue,P,te);A(M)&&M.mipmapsAutoUpdate===!0&&E(se),pe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Bt(b,M,q){if(M.image.length!==6)return;const se=et(b,M),ie=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+q);const ce=i.get(ie);if(ie.version!==ce.__version||se===!0){t.activeTexture(n.TEXTURE0+q);const pe=qe.getPrimaries(qe.workingColorSpace),j=M.colorSpace===Bn?null:qe.getPrimaries(M.colorSpace),te=M.colorSpace===Bn||pe===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let ve=0;ve<6;ve++)!ue&&!P?ne[ve]=v(M.image[ve],!0,r.maxCubemapSize):ne[ve]=P?M.image[ve].image:M.image[ve],ne[ve]=Pe(M,ne[ve]);const Q=ne[0],de=s.convert(M.format,M.colorSpace),le=s.convert(M.type);let he=R(M.internalFormat,de,le,M.normalized,M.colorSpace);const we=M.isVideoTexture!==!0,Ge=ce.__version===void 0||se===!0,ae=ie.dataReady;let Re=y(M,Q);Qe(n.TEXTURE_CUBE_MAP,M);let Be;if(M.isDepthTexture){if(he=_(M.format===On,M.type),Ge)if(we)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,Q.width,Q.height);else for(let ve=0;ve<6;ve++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,Q.width,Q.height,0,de,le,null)}else if(ue){we&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,he,Q.width,Q.height);for(let ve=0;ve<6;ve++){Be=ne[ve].mipmaps;for(let je=0;je<Be.length;je++){const Et=Be[je];M.format!==hn?de!==null?we?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,Et.width,Et.height,de,Et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,he,Et.width,Et.height,0,Et.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,Et.width,Et.height,de,le,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,he,Et.width,Et.height,0,de,le,Et.data)}}}else{if(Be=M.mipmaps,we&&Ge){Be.length>0&&Re++;const ve=Ie(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,he,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(P){we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ne[ve].width,ne[ve].height,de,le,ne[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,ne[ve].width,ne[ve].height,0,de,le,ne[ve].data);for(let je=0;je<Be.length;je++){const $n=Be[je].image[ve].image;we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,$n.width,$n.height,de,le,$n.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,he,$n.width,$n.height,0,de,le,$n.data)}}else{we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de,le,ne[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,de,le,ne[ve]);for(let je=0;je<Be.length;je++){const Et=Be[je];we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,de,le,Et.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,he,de,le,Et.image[ve])}}}A(M)&&M.mipmapsAutoUpdate===!0&&E(n.TEXTURE_CUBE_MAP),ce.__version=ie.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function lt(b,M,q,se,ie,ce){const pe=s.convert(q.format,q.colorSpace),j=s.convert(q.type),te=R(q.internalFormat,pe,j,q.normalized,q.colorSpace),ue=i.get(M),P=i.get(q);if(P.__renderTarget=M,!ue.__hasExternalTextures){const ne=Math.max(1,M.width>>ce),Q=Math.max(1,M.height>>ce);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,ce,te,ne,Q,M.depth,0,pe,j,null):t.texImage2D(ie,ce,te,ne,Q,0,pe,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ie,P.__webglTexture,0,ot(M)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ie,P.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function vn(b,M,q){if(n.bindRenderbuffer(n.RENDERBUFFER,b),M.depthBuffer){const se=M.depthTexture,ie=se&&se.isDepthTexture?se.type:null,ce=_(M.stencilBuffer,ie),pe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot(M),ce,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot(M),ce,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ce,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,b)}else{const se=M.textures;for(let ie=0;ie<se.length;ie++){const ce=se[ie],pe=s.convert(ce.format,ce.colorSpace),j=s.convert(ce.type),te=R(ce.internalFormat,pe,j,ce.normalized,ce.colorSpace);ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot(M),te,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot(M),te,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,te,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(b,M,q){const se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(M.depthTexture);ie.__renderTarget=M;const ce=se?M.depthTexture.image[0]:M.depthTexture.image;(!ie.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),se?oe(M.depthTexture,0):J(M.depthTexture,0);const pe=ie.__webglTexture,j=ot(M),te=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,ue=M.depthTexture.format===On?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Fn)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,te,pe,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,ue,te,pe,0);else if(M.depthTexture.format===On)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,te,pe,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,ue,te,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(b){const M=i.get(b),q=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const se=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ie)};se.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=se}if(b.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let se=0;se<6;se++)St(M.__webglFramebuffer[se],b,se);else b.texture.mipmaps.length>0?St(M.__webglFramebuffer[0],b,0):St(M.__webglFramebuffer,b,0);else if(q){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=n.createRenderbuffer(),vn(M.__webglDepthbuffer[se],b,!1);else{const ie=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ce)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),vn(M.__webglDepthbuffer,b,!1);else{const ie=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(b,M,q){const se=i.get(b);M!==void 0&&lt(se.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Yt(b)}function Zt(b){const M=b.texture,q=i.get(b),se=i.get(M);b.addEventListener("dispose",K),k(b);const ie=b.textures,ce=b.isWebGLCubeRenderTarget===!0,pe=ie.length>1;if(pe||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=M.version,a.memory.textures++),ce){q.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps.length>0){q.__webglFramebuffer[j]=[];for(let te=0;te<M.mipmaps.length;te++)q.__webglFramebuffer[j][te]=n.createFramebuffer()}else q.__webglFramebuffer[j]=n.createFramebuffer()}else{if(M.mipmaps.length>0){q.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)q.__webglFramebuffer[j]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(pe)for(let j=0,te=ie.length;j<te;j++){const ue=i.get(ie[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&ge(b)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let j=0;j<ie.length;j++){const te=ie[j];q.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[j]);const ue=s.convert(te.format,te.colorSpace),P=s.convert(te.type),ne=R(te.internalFormat,ue,P,te.normalized,te.colorSpace,b.isXRRenderTarget===!0),Q=ot(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,ne,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,q.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),vn(q.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)lt(q.__webglFramebuffer[j][te],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else lt(q.__webglFramebuffer[j],b,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);A(M)?E(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let j=0,te=ie.length;j<te;j++){const ue=ie[j],P=i.get(ue);let ne=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ne=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,P.__webglTexture),Qe(ne,ue),lt(q.__webglFramebuffer,b,ue,n.COLOR_ATTACHMENT0+j,ne,0),A(ue)&&E(ne)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,se.__webglTexture),Qe(j,M),M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)lt(q.__webglFramebuffer[te],b,M,n.COLOR_ATTACHMENT0,j,te);else lt(q.__webglFramebuffer,b,M,n.COLOR_ATTACHMENT0,j,0);A(M)?E(j):M.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&Yt(b)}function F(b){const M=b.textures;for(let q=0,se=M.length;q<se;q++){const ie=M[q];if(A(ie)&&ie.mipmapsAutoUpdate===!0){const ce=w(b),pe=i.get(ie).__webglTexture;t.bindTexture(ce,pe),E(ce),t.unbindTexture()}}}const $t=[];function at(b){if(b.samples>0){if(ge(b)===!1){const M=b.textures,q=b.width,se=b.height;let ie=n.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(b),j=M.length>1;if(j)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const P=i.get(M[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,q,se,0,0,q,se,ie,n.NEAREST),l===!0&&($t.length=0,$t.push(n.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&$t.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const P=i.get(M[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const M=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ot(b){return Math.min(r.maxSamples,b.samples)}function ge(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xt(b){const M=a.render.frame;f.get(b)!==M&&(f.set(b,M),b.update())}function Pe(b,M){const q=b.colorSpace,se=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||q!==Rr&&q!==Bn&&(qe.getTransfer(q)===Je?(se!==hn||ie!==zt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",q)),M}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=H,this.getTextureUnits=C,this.setTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=re,this.setTexture3D=_e,this.setTextureCube=oe,this.rebindTextures=Kt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ge,this.dispose=O}function Ym(n,e){function t(i,r=Bn){let s;const a=qe.getTransfer(r);if(i===zt)return n.UNSIGNED_BYTE;if(i===zs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gs)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Do)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Io)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Po)return n.BYTE;if(i===Lo)return n.SHORT;if(i===Ji)return n.UNSIGNED_SHORT;if(i===Bs)return n.INT;if(i===on)return n.UNSIGNED_INT;if(i===ln)return n.FLOAT;if(i===cn)return n.HALF_FLOAT;if(i===No)return n.ALPHA;if(i===Uo)return n.RGB;if(i===hn)return n.RGBA;if(i===Fn)return n.DEPTH_COMPONENT;if(i===On)return n.DEPTH_STENCIL;if(i===Fo)return n.RED;if(i===Hs)return n.RED_INTEGER;if(i===jn)return n.RG;if(i===ks)return n.RG_INTEGER;if(i===Vs)return n.RGBA_INTEGER;if(i===Er||i===yr||i===br||i===Tr)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Er)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Er)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ws||i===Xs||i===qs||i===Ys)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ws)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ys)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ks||i===Zs||i===$s||i===Js||i===Qs||i===Ar||i===js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ks||i===Zs)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$s)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Js)return s.COMPRESSED_R11_EAC;if(i===Qs)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ar)return s.COMPRESSED_RG11_EAC;if(i===js)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ea||i===ta||i===na||i===ia||i===ra||i===sa||i===aa||i===oa||i===la||i===ca||i===ha||i===ua||i===da||i===fa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ea)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ta)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===na)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ia)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ra)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===aa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===la)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ca)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ha)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ua)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===da)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pa||i===ma||i===ga)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pa)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ma)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ga)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_a||i===xa||i===wr||i===va)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_a)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===va)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $m{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new si({vertexShader:Km,fragmentShader:Zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jm extends zn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,m=null,h=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",u=new $m,d={},v=t.getContextAttributes();let A=null,E=null;const w=[],R=[],_=new Ne;let y=null,k=null;const U=new nn;U.viewport=new ht;const z=new nn;z.viewport=new ht;const K=[U,z],D=new Gu;let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=w[B];return J===void 0&&(J=new Da,w[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=w[B];return J===void 0&&(J=new Da,w[B]=J),J.getGripSpace()},this.getHand=function(B){let J=w[B];return J===void 0&&(J=new Da,w[B]=J),J.getHandSpace()};function W(B){const J=R.indexOf(B.inputSource);if(J===-1)return;const re=w[J];re!==void 0&&(re.update(B.inputSource,B.frame,c||a),re.dispatchEvent({type:B.type,data:B.inputSource}))}function G(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",I);for(let B=0;B<w.length;B++){const J=R[B];J!==null&&(R[B]=null,w[B].disconnect(J))}T=null,O=null,u.reset();for(const B in d)delete d[B];if(e.setRenderTarget(A),p=null,h=null,m=null,r=null,E=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(_.width,_.height,!1),k!==null){const B=k.camera;B.fov=k.fov,B.zoom=k.zoom,B.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&x&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",G),r.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,_e=null,oe=null;v.depth&&(oe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?On:Fn,_e=v.stencil?Mi:on);const Te={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new un(h.textureWidth,h.textureHeight,{format:hn,type:zt,depthTexture:new Ni(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new un(p.framebufferWidth,p.framebufferHeight,{format:hn,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function I(B){for(let J=0;J<B.removed.length;J++){const re=B.removed[J],_e=R.indexOf(re);_e>=0&&(R[_e]=null,w[_e].disconnect(re))}for(let J=0;J<B.added.length;J++){const re=B.added[J];let _e=R.indexOf(re);if(_e===-1){for(let Te=0;Te<w.length;Te++)if(Te>=R.length){R.push(re),_e=Te;break}else if(R[Te]===null){R[Te]=re,_e=Te;break}if(_e===-1)break}const oe=w[_e];oe&&oe.connect(re)}}function L(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let J=B.near,re=B.far;u.texture!==null&&(u.depthNear>0&&(J=u.depthNear),u.depthFar>0&&(re=u.depthFar)),D.near=z.near=U.near=J,D.far=z.far=U.far=re,(T!==D.near||O!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),T=D.near,O=D.far),D.layers.mask=B.layers.mask|6,U.layers.mask=D.layers.mask&-5,z.layers.mask=D.layers.mask&-3;const _e=B.parent,oe=D.cameras;L(D,_e);for(let Te=0;Te<oe.length;Te++)L(oe[Te],_e);D.projectionMatrix.copy(U.projectionMatrix),D.projectionMatrixInverse.copy(U.projectionMatrixInverse),k===null&&B.isPerspectiveCamera&&(k={camera:B,fov:B.fov,zoom:B.zoom}),H(B,D,_e)};function H(B,J,re){re===null?B.matrix.copy(J.matrixWorld):(B.matrix.copy(re.matrixWorld),B.matrix.invert(),B.matrix.multiply(J.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=er*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(D)},this.getCameraTexture=function(B){return d[B]};let C=null;function Z(B,J){if(f=J.getViewerPose(c||a),g=J,f!==null){const re=f.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let _e=!1;re.length!==D.cameras.length&&(D.cameras.length=0,_e=!0);for(let Ce=0;Ce<re.length;Ce++){const Qe=re[Ce];let et=null;if(p!==null)et=p.getViewport(Qe);else{const Tt=m.getViewSubImage(h,Qe);et=Tt.viewport,Ce===0&&(e.setRenderTargetTextures(E,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(E))}let Ve=K[Ce];Ve===void 0&&(Ve=new nn,Ve.layers.enable(Ce),Ve.viewport=new ht,K[Ce]=Ve),Ve.matrix.fromArray(Qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(et.x,et.y,et.width,et.height),Ce===0&&(D.matrix.copy(Ve.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),_e===!0&&D.cameras.push(Ve)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){m=i.getBinding();const Ce=m.getDepthInformation(re[0]);Ce&&Ce.isValid&&Ce.texture&&u.init(Ce,r.renderState)}if(oe&&oe.includes("camera-access")&&x){e.state.unbindTexture(),m=i.getBinding();for(let Ce=0;Ce<re.length;Ce++){const Qe=re[Ce].camera;if(Qe){let et=d[Qe];et||(et=new xl,d[Qe]=et);const Ve=m.getCameraImage(Qe);et.sourceTexture=Ve}}}}for(let re=0;re<w.length;re++){const _e=R[re],oe=w[re];_e!==null&&oe!==void 0&&oe.update(_e,J,c||a)}C&&C(B,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const ee=new Dl;ee.setAnimationLoop(Z),this.setAnimationLoop=function(B){C=B},this.dispose=function(){}}}const Qm=new rt,cc=new Fe;cc.set(-1,0,0,0,1,0,0,0,1);function jm(n,e){function t(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function i(u,d){d.color.getRGB(u.fogColor.value,Ml(n)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function r(u,d,v,A,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(u,d):d.isMeshLambertMaterial?(s(u,d),d.envMap&&(u.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(u,d),m(u,d)):d.isMeshPhongMaterial?(s(u,d),f(u,d),d.envMap&&(u.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(u,d),h(u,d),d.isMeshPhysicalMaterial&&p(u,d,E)):d.isMeshMatcapMaterial?(s(u,d),g(u,d)):d.isMeshDepthMaterial?s(u,d):d.isMeshDistanceMaterial?(s(u,d),x(u,d)):d.isMeshNormalMaterial?s(u,d):d.isLineBasicMaterial?(a(u,d),d.isLineDashedMaterial&&o(u,d)):d.isPointsMaterial?l(u,d,v,A):d.isSpriteMaterial?c(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,t(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===Nt&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,t(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===Nt&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,t(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,t(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);const v=e.get(d),A=v.envMap,E=v.envMapRotation;A&&(u.envMap.value=A,u.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(cc),u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap&&(u.lightMap.value=d.lightMap,u.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,u.lightMapTransform)),d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,u.aoMapTransform))}function a(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform))}function o(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function l(u,d,v,A){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*v,u.scale.value=A*.5,d.map&&(u.map.value=d.map,t(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function c(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function f(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function m(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function h(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,u.roughnessMapTransform)),d.envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function p(u,d,v){u.ior.value=d.ior,d.diffuseRoughness>0&&(u.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(u.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,u.diffuseRoughnessMapTransform))),d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt&&u.clearcoatNormalScale.value.negate())),d.dispersion>0&&(u.dispersion.value=d.dispersion),d.retroreflectivity>0&&(u.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=v.texture,u.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,d){d.matcap&&(u.matcap.value=d.matcap)}function x(u,d){const v=e.get(d).light;u.referencePosition.value.setFromMatrixPosition(v.matrixWorld),u.nearDistance.value=v.shadow.camera.near,u.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eg(n,e,t,i){let r={},s={};function a(v,A){const E=A.program;i.uniformBlockBinding(v,E,r[v.id])}function o(v,A){let E=r[v.id];E===void 0&&(g(v),E=l(v),r[v.id]=E,v.addEventListener("dispose",u));const w=A.program;i.updateUBOMapping(v,w);const R=e.render.frame;s[v.id]!==R&&(c(v),s[v.id]=R)}function l(v){const A=n.createBuffer(),E=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),A}function c(v){const A=r[v.id],E=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,_=E.length;R<_;R++){const y=E[R];if(Array.isArray(y))for(let k=0,U=y.length;k<U;k++)f(y[k],R,k,w);else f(y,R,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,A,E,w){if(h(v,A,E,w)===!0){const R=v.__offset,_=v.value;if(Array.isArray(_)){let y=0;for(let k=0;k<_.length;k++){const U=_[k],z=x(U,!0);m(U,v.__data,y),y+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,v.__data)}}function m(v,A,E){typeof v=="number"||typeof v=="boolean"?A[E]=v:v.isMatrix3?(A[E]=v.elements[0],A[E+1]=v.elements[1],A[E+2]=v.elements[2],A[E+3]=0,A[E+4]=v.elements[3],A[E+5]=v.elements[4],A[E+6]=v.elements[5],A[E+7]=0,A[E+8]=v.elements[6],A[E+9]=v.elements[7],A[E+10]=v.elements[8],A[E+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-E),E):v.toArray(A,E)}function h(v,A,E,w){const R=v.value,_=A+"_"+E;if(Array.isArray(R)){w[_]===void 0&&(w[_]=[]);const y=w[_];let k=!1;for(let U=0;U<R.length;U++)p(R[U],y,U)===!0&&(k=!0);return k}return p(R,w,_)}function p(v,A,E){if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const w=A[E];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(v){const A=v.uniforms;let E=0;const w=16;for(let _=0,y=A.length;_<y;_++){const k=Array.isArray(A[_])?A[_]:[A[_]];for(let U=0,z=k.length;U<z;U++){const K=k[U],D=Array.isArray(K.value)?K.value:[K.value],T=Array.isArray(A[_])||Array.isArray(K.value);let O=E;for(let G=0,I=D.length;G<I;G++){const L=D[G],H=x(L,T),C=E%w,Z=C%H.boundary,ee=C+Z;E+=Z,ee!==0&&w-ee<H.storage&&(E+=w-ee),G===0&&(O=E),E+=H.storage}const W=K.type==="int"?Int32Array:K.type==="uint"?Uint32Array:Float32Array;K.__data=new W((E-O)/Float32Array.BYTES_PER_ELEMENT),K.__offset=O}}const R=E%w;return R>0&&(E+=w-R),v.__size=E,v.__cache={},this}function x(v,A){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=16,E.storage=48):v.isMatrix4?(E.boundary=16,E.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function u(v){const A=v.target;A.removeEventListener("dispose",u),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);r={},s={}}return{bind:a,update:o,dispose:d}}const tg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function ng(){return mn===null&&(mn=new bu(tg,16,16,jn,cn),mn.name="DFG_LUT",mn.minFilter=Ut,mn.magFilter=Ut,mn.wrapS=En,mn.wrapT=En,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class ig{constructor(e={}){const{canvas:t=Bh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=zt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=p,u=new Set([Vs,ks,Hs]),d=new Set([zt,on,Ji,Mi,zs,Gs]),v=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let w=null,R=null;const _=[],y=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1,K=null,D=null,T=null,O=null;this._outputColorSpace=kt;let W=0,G=0,I=null,L=-1,H=null;const C=new ht,Z=new ht;let ee=null;const B=new Oe(0);let J=0,re=t.width,_e=t.height,oe=1,Te=null,nt=null;const Ce=new ht(0,0,re,_e),Qe=new ht(0,0,re,_e);let et=!1;const Ve=new or,Tt=new Ya;let _t=!1,Bt=!1;const lt=new rt,vn=new V,St=new ht,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Zt(){return I===null?oe:1}let F=i;function $t(S,N){return t.getContext(S,N)}let at,ot,ge,xt,Pe,Ie,b,M,q,se,ie,ce,pe,j,te,ue,P,ne,Q,de,le,he,we;try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bs}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",ve,!1),F===null){const N="webgl2";if(F=$t(N,S),F===null)throw $t(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(S){throw t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ke("WebGLRenderer: "+S.message),S}function Ge(){at=new ap(F),at.init(),le=new Ym(F,at),ot=new Zf(F,at,e,le),ge=new Xm(F,at),ot.reversedDepthBuffer&&h&&ge.buffers.depth.setReversed(!0),D=F.createFramebuffer(),T=F.createFramebuffer(),O=F.createFramebuffer(),xt=new cp(F),Pe=new Lm,Ie=new qm(F,at,ge,Pe,ot,le,xt),b=new sp(U),M=new Wu(F),he=new Yf(F,M),q=new op(F,M,xt,he),se=new up(F,q,M,he,xt),ne=new hp(F,ot,Ie),te=new $f(Pe),ie=new Pm(U,b,at,ot,he,te),ce=new jm(U,Pe),pe=new Im,j=new zm(at),P=new qf(U,b,ge,se,g,l),ue=new Wm(U,se,ot),we=new eg(F,xt,ot,ge),Q=new Kf(F,at,xt),de=new lp(F,at,xt),xt.programs=ie.programs,U.capabilities=ot,U.extensions=at,U.properties=Pe,U.renderLists=pe,U.shadowMap=ue,U.state=ge,U.info=xt}x!==zt&&(k=new fp(x,t.width,t.height,o,r,s));const ae=new Jm(U,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=at.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=at.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(S){S!==void 0&&(oe=S,this.setSize(re,_e,!1))},this.getSize=function(S){return S.set(re,_e)},this.setSize=function(S,N,$=!0){if(ae.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}re=S,_e=N,t.width=Math.floor(S*oe),t.height=Math.floor(N*oe),$===!0&&(t.style.width=S+"px",t.style.height=N+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(re*oe,_e*oe).floor()},this.setDrawingBufferSize=function(S,N,$){re=S,_e=N,oe=$,t.width=Math.floor(S*$),t.height=Math.floor(N*$),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(x===zt){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(Ce)},this.setViewport=function(S,N,$,X){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,N,$,X),ge.viewport(C.copy(Ce).multiplyScalar(Zt()).round())},this.getScissor=function(S){return S.copy(Qe)},this.setScissor=function(S,N,$,X){S.isVector4?Qe.set(S.x,S.y,S.z,S.w):Qe.set(S,N,$,X),ge.scissor(Z.copy(Qe).multiplyScalar(Zt()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(S){ge.setScissorTest(et=S)},this.setOpaqueSort=function(S){Te=S},this.setTransparentSort=function(S){nt=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,$=!0){let X=0;if(S){let Y=!1;if(I!==null){const me=I.texture.format;Y=u.has(me)}if(Y){const me=I.texture.type,Se=d.has(me),fe=P.getClearColor(),Me=P.getClearAlpha(),Ae=fe.r,Ue=fe.g,We=fe.b;Se?(v[0]=Ae,v[1]=Ue,v[2]=We,v[3]=Me,F.clearBufferuiv(F.COLOR,0,v)):(A[0]=Ae,A[1]=Ue,A[2]=We,A[3]=Me,F.clearBufferiv(F.COLOR,0,A))}else X|=F.COLOR_BUFFER_BIT}N&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),K=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),P.dispose(),pe.dispose(),j.dispose(),Ie.dispose(),Pe.dispose(),b.dispose(),se.dispose(),q.dispose(),he.dispose(),we.dispose(),ie.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Kc),ae.removeEventListener("sessionend",Zc),di.stop()};function Re(S){S.preventDefault(),ko("WebGLRenderer: Context Lost."),z=!0}function Be(){ko("WebGLRenderer: Context Restored."),z=!1;const S=xt.autoReset,N=ue.enabled,$=ue.autoUpdate,X=ue.needsUpdate,Y=ue.type;Ge(),xt.autoReset=S,ue.enabled=N,ue.autoUpdate=$,ue.needsUpdate=X,ue.type=Y}function ve(S){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function je(S){const N=S.target;N.removeEventListener("dispose",je),Et(N)}function Et(S){$n(S),Pe.remove(S)}function $n(S){const N=Pe.get(S).programs;N!==void 0&&(N.forEach(function($){ie.releaseProgram($)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,$,X,Y,me){N===null&&(N=Yt);const Se=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,fe=m_(S,N,$,X,Y);ge.setMaterial(X,Se);let Me=$.index,Ae=1;if(X.wireframe===!0){if(Me=q.getWireframeAttribute($),Me===void 0)return;Ae=2}const Ue=$.drawRange,We=$.attributes.position;let Ee=Ue.start*Ae,Xe=(Ue.start+Ue.count)*Ae;me!==null&&(Ee=Math.max(Ee,me.start*Ae),Xe=Math.min(Xe,(me.start+me.count)*Ae)),Me!==null?(Ee=Math.max(Ee,0),Xe=Math.min(Xe,Me.count)):We!=null&&(Ee=Math.max(Ee,0),Xe=Math.min(Xe,We.count));const ft=Xe-Ee;if(ft<0||ft===1/0)return;he.setup(Y,X,fe,$,Me);let it,tt=Q;if(Me!==null&&(it=M.get(Me),tt=de,tt.setIndex(it)),Y.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*Zt()),tt.setMode(F.LINES)):tt.setMode(F.TRIANGLES);else if(Y.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),ge.setLineWidth(Ct*Zt()),Y.isLineSegments?tt.setMode(F.LINES):Y.isLineLoop?tt.setMode(F.LINE_LOOP):tt.setMode(F.LINE_STRIP)}else Y.isPoints?tt.setMode(F.POINTS):Y.isSprite&&tt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(at.get("WEBGL_multi_draw"))tt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ct=Y._multiDrawStarts,ye=Y._multiDrawCounts,It=Y._multiDrawCount,$e=Me?M.get(Me).bytesPerElement:1,fi=Pe.get(X).currentProgram.getUniforms();for(let Pt=0;Pt<It;Pt++)fi.setValue(F,"_gl_DrawID",Pt),tt.render(Ct[Pt]/$e,ye[Pt])}else if(Y.isInstancedMesh)tt.renderInstances(Ee,ft,Y.count);else if($.isInstancedBufferGeometry){const Ct=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,Ct);tt.renderInstances(Ee,ft,ye)}else tt.render(Ee,ft)};function Yc(S,N,$,X){K!==null&&S.isNodeMaterial&&K.setObject(X,S),_t===!0&&te.setState(S,$,!1),S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=Nt,S.needsUpdate=!0,vr(S,N,X),S.side=Qn,S.needsUpdate=!0,vr(S,N,X),S.side=Mn):vr(S,N,X)}this.compile=function(S,N,$=null){$===null&&($=S),K!==null&&K.renderStart(S,N,$),R=j.get($),R.init(N),y.push(R),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(R.pushLight(Y),Y.castShadow&&R.pushShadow(Y))}),S!==$&&S.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(R.pushLight(Y),Y.castShadow&&R.pushShadow(Y))}),R.setupLights(),K!==null&&K.updateLights(R.state.lightsArray),Bt=this.localClippingEnabled,_t=te.init(this.clippingPlanes,Bt),_t===!0&&te.setGlobalState(this.clippingPlanes,N),K!==null&&ue.render(R.state.shadowsArray,$,N);const X=new Set;return S.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const me=Y.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const fe=me[Se];Yc(fe,$,N,Y),X.add(fe)}else Yc(me,$,N,Y),X.add(me)}),R=y.pop(),K!==null&&K.renderEnd(),X},this.compileAsync=function(S,N,$=null){const X=this.compile(S,N,$);return new Promise(Y=>{function me(){if(X.forEach(function(Se){const Me=Pe.get(Se).currentProgram;(Me===void 0||Me.isReady())&&X.delete(Se)}),X.size===0){Y(S);return}setTimeout(me,10)}at.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let fo=null;function f_(S){fo&&fo(S)}function Kc(){di.stop()}function Zc(){di.start()}const di=new Dl;di.setAnimationLoop(f_),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(S){fo=S,ae.setAnimationLoop(S),S===null?di.stop():di.start()},ae.addEventListener("sessionstart",Kc),ae.addEventListener("sessionend",Zc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;K!==null&&K.renderStart(S,N);const $=ae.enabled===!0&&ae.isPresenting===!0,X=k!==null&&(I===null||$)&&k.begin(U,I);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(U,S,N,I),R=j.get(S,y.length),R.init(N),R.state.textureUnits=Ie.getTextureUnits(),y.push(R),lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Tt.setFromArrayCamera(N):Ve.setFromProjectionMatrix(lt,Jt,N.reversedDepth),Bt=this.localClippingEnabled,_t=te.init(this.clippingPlanes,Bt),w=pe.get(S,_.length),w.init(),_.push(w),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const Se=U.xr.getDepthSensingMesh();Se!==null&&po(Se,N,-1/0,U.sortObjects)}po(S,N,0,U.sortObjects),w.finish(),K!==null&&K.updateLights(R.state.lightsArray),U.sortObjects===!0&&w.sort(Te,nt),Kt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Kt&&P.addToRenderList(w,S),this.info.autoReset===!0&&this.info.reset(),_t===!0&&te.beginShadows();const Y=R.state.shadowsArray;if(ue.render(Y,S,N),_t===!0&&te.endShadows(),(X&&k.hasRenderPass())===!1){const Se=w.opaque,fe=w.transmissive;if(R.setupLights(),N.isArrayCamera){const Me=N.cameras;if(fe.length>0)for(let Ae=0,Ue=Me.length;Ae<Ue;Ae++){const We=Me[Ae];Jc(Se,fe,S,We)}Kt&&P.render(S);for(let Ae=0,Ue=Me.length;Ae<Ue;Ae++){const We=Me[Ae];$c(w,S,We,We.viewport)}}else fe.length>0&&Jc(Se,fe,S,N),Kt&&P.render(S),$c(w,S,N)}I!==null&&G===0&&(Ie.updateMultisampleRenderTarget(I),Ie.updateRenderTargetMipmap(I)),X&&k.end(U),S.isScene===!0&&S.onAfterRender(U,S,N),he.resetDefaultState(),L=-1,H=null,y.pop(),y.length>0?(R=y[y.length-1],Ie.setTextureUnits(R.state.textureUnits),_t===!0&&te.setGlobalState(U.clippingPlanes,R.state.camera)):R=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,K!==null&&K.renderEnd()};function po(S,N,$,X){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){const Se=N.isArrayCamera?Tt:Ve;if(!S.frustumCulled||S.intersectsFrustum(Se)){X&&St.setFromMatrixPosition(S.matrixWorld).applyMatrix4(lt);const fe=se.update(S),Me=S.material;Me.visible&&w.push(S,fe,Me,$,St.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){const Se=N.isArrayCamera?Tt:Ve;if(!S.frustumCulled||S.intersectsFrustum(Se)){const fe=se.update(S),Me=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),St.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),St.copy(fe.boundingSphere.center)),St.applyMatrix4(S.matrixWorld).applyMatrix4(lt)),Array.isArray(Me)){const Ae=fe.groups;for(let Ue=0,We=Ae.length;Ue<We;Ue++){const Ee=Ae[Ue],Xe=Me[Ee.materialIndex];Xe&&Xe.visible&&w.push(S,fe,Xe,$,St.z,Ee,N)}}else Me.visible&&w.push(S,fe,Me,$,St.z,null,N)}}}const me=S.children;for(let Se=0,fe=me.length;Se<fe;Se++)po(me[Se],N,$,X)}function $c(S,N,$,X){const{opaque:Y,transmissive:me,transparent:Se}=S;R.setupLightsView($),_t===!0&&te.setGlobalState(U.clippingPlanes,$),X&&ge.viewport(C.copy(X)),Y.length>0&&Es(Y,N,$),me.length>0&&Es(me,N,$),Se.length>0&&Es(Se,N,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Jc(S,N,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[X.id]===void 0){const Ee=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[X.id]=new un(1,1,{generateMipmaps:!0,type:Ee?cn:zt,minFilter:Un,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const me=R.state.transmissionRenderTarget[X.id],Se=X.viewport||C;me.setSize(Se.z*U.transmissionResolutionScale,Se.w*U.transmissionResolutionScale);const fe=U.getRenderTarget(),Me=U.getActiveCubeFace(),Ae=U.getActiveMipmapLevel();U.setRenderTarget(me),U.getClearColor(B),J=U.getClearAlpha(),J<1&&U.setClearColor(16777215,.5),U.clear(),Kt&&P.render($);const Ue=U.toneMapping;U.toneMapping=Sn;const We=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),R.setupLightsView(X),_t===!0&&te.setGlobalState(U.clippingPlanes,X),Es(S,$,X),Ie.updateMultisampleRenderTarget(me),Ie.updateRenderTargetMipmap(me),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Xe=0,ft=N.length;Xe<ft;Xe++){const it=N[Xe],{object:tt,geometry:Ct,material:ye,group:It}=it;if(ye.side===Mn&&tt.layers.test(X.layers)){const $e=ye.side;ye.side=Nt,ye.needsUpdate=!0,Qc(tt,$,X,Ct,ye,It),ye.side=$e,ye.needsUpdate=!0,Ee=!0}}Ee===!0&&(Ie.updateMultisampleRenderTarget(me),Ie.updateRenderTargetMipmap(me))}U.setRenderTarget(fe,Me,Ae),U.setClearColor(B,J),We!==void 0&&(X.viewport=We),U.toneMapping=Ue}function Es(S,N,$){const X=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,me=S.length;Y<me;Y++){const Se=S[Y],{object:fe,geometry:Me,group:Ae}=Se;let Ue=Se.material;Ue.allowOverride===!0&&X!==null&&(Ue=X),fe.layers.test($.layers)&&Qc(fe,N,$,Me,Ue,Ae)}}function Qc(S,N,$,X,Y,me){K!==null&&Y.isNodeMaterial&&K.setObject(S,Y),S.onBeforeRender(U,N,$,X,Y,me),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(U,N,$,X,S,me),Y.transparent===!0&&Y.side===Mn&&Y.forceSinglePass===!1?(Y.side=Nt,Y.needsUpdate=!0,U.renderBufferDirect($,N,X,Y,S,me),Y.side=Qn,Y.needsUpdate=!0,U.renderBufferDirect($,N,X,Y,S,me),Y.side=Mn):U.renderBufferDirect($,N,X,Y,S,me),S.onAfterRender(U,N,$,X,Y,me)}function jc(S){let N=0;for(const $ of S)$.texture!==null&&N++;return N}function vr(S,N,$){N.isScene!==!0&&(N=Yt);const X=Pe.get(S),Y=R.state.lights,me=R.state.shadowsArray,Se=Y.state.version,fe=ie.getParameters(S,Y.state,me,N,$,R.state.lightProbeGridArray),Me=ie.getProgramCacheKey(fe);let Ae=X.programs;X.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,X.fog=N.fog;const Ue=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;X.envMap=b.get(S.envMap||X.environment,Ue),X.envMapRotation=X.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ae===void 0&&(S.addEventListener("dispose",je),Ae=new Map,X.programs=Ae,X.programVariants=new Map);let We=Ae.get(Me);if(We!==void 0){if(X.currentProgram===We&&X.lightsStateVersion===Se)return th(S,fe),We}else fe.uniforms=ie.getUniforms(S),K!==null&&S.isNodeMaterial&&K.build(S,$,fe),S.onBeforeCompile(fe,U),We=ie.acquireProgram(fe,Me),Ae.set(Me,We),X.uniforms=fe.uniforms;const Ee=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=te.uniform),th(S,fe),X.needsLights=__(S),X.lightsStateVersion=Se,X.needsLights&&(Ee.ambientLightColor.value=Y.state.ambient,Ee.lightProbe.value=Y.state.probe,Ee.sunLights.value=Y.state.sun,Ee.sunLightShadows.value=Y.state.sunShadow,Ee.directionalLights.value=Y.state.directional,Ee.directionalLightShadows.value=Y.state.directionalShadow,Ee.spotLights.value=Y.state.spot,Ee.spotLightShadows.value=Y.state.spotShadow,Ee.rectAreaLights.value=Y.state.rectArea,Ee.ltc_1.value=Y.state.rectAreaLTC1,Ee.ltc_2.value=Y.state.rectAreaLTC2,Ee.pointLights.value=Y.state.point,Ee.pointLightShadows.value=Y.state.pointShadow,Ee.hemisphereLights.value=Y.state.hemi,Ee.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ee.sunShadowCascade.value=Y.state.sunShadowCascade,Ee.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ee.spotLightMatrix.value=Y.state.spotLightMatrix,Ee.spotLightMap.value=Y.state.spotLightMap,Ee.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=jc(R.state.lightProbeGridArray),X.currentProgram=We,X.uniformsList=null,We}function p_(S,N,$,X,Y){const me=Pe.get(S),Se=me.currentProgram.id+","+X+","+Y;let fe=me.programVariants.get(Se);return fe===void 0?(fe=vr(S,N,$),me.programVariants.set(Se,fe)):(me.currentProgram=fe,me.uniformsList=null,me.outputColorSpace=X,me.toneMapping=Y),fe}function eh(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=cs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function th(S,N){const $=Pe.get(S);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function m_(S,N,$,X,Y){N.isScene!==!0&&(N=Yt),Ie.resetTextureUnits();const me=N.fog,Se=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?N.environment:null,fe=I===null?U.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qe.workingColorSpace,Me=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ae=b.get(X.envMap||Se,Me),Ue=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ee=!!$.morphAttributes.position,Xe=!!$.morphAttributes.normal,ft=!!$.morphAttributes.color;let it=Sn;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(it=U.toneMapping);const tt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ct=tt!==void 0?tt.length:0,ye=Pe.get(X),It=R.state.lights;if(_t===!0&&(Bt===!0||S!==H)){const ct=S===H&&X.id===L;te.setState(X,S,ct)}let $e=!1,fi=!1;X.version===ye.__version?ye.needsLights&&ye.lightsStateVersion!==It.state.version||Y.isBatchedMesh&&ye.batching===!1||!Y.isBatchedMesh&&ye.batching===!0||Y.isBatchedMesh&&ye.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&ye.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&ye.instancing===!1||!Y.isInstancedMesh&&ye.instancing===!0||Y.isSkinnedMesh&&ye.skinning===!1||!Y.isSkinnedMesh&&ye.skinning===!0||Y.isInstancedMesh&&ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ye.instancingMorph===!1&&Y.morphTexture!==null||ye.envMap!==Ae||X.fog===!0&&ye.fog!==me||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==te.numPlanes||ye.numIntersection!==te.numIntersection)||ye.vertexAlphas!==Ue||ye.vertexTangents!==We||ye.morphTargets!==Ee||ye.morphNormals!==Xe||ye.morphColors!==ft||ye.morphTargetsCount!==Ct||ye.numLightProbeGrids!==jc(R.state.lightProbeGridArray)?$e=!0:(ye.outputColorSpace!==fe||ye.toneMapping!==it)&&(fi=!0):($e=!0,ye.__version=X.version);let Pt=ye.currentProgram;($e===!0||fi===!0)&&(Pt=fi===!0?p_(X,N,Y,fe,it):vr(X,N,Y),K&&X.isNodeMaterial&&K.onUpdateProgram(X,Pt,ye));let ys=!1,Jn=!1,pi=!1;const Ye=Pt.getUniforms(),At=ye.uniforms;if(ge.useProgram(Pt.program)&&(ys=!0,Jn=!0,pi=!0),X.id!==L&&(L=X.id,Jn=!0),ys||H!==S){ge.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ye.setValue(F,"projectionMatrix",S.projectionMatrix),Ye.setValue(F,"viewMatrix",S.matrixWorldInverse);const yt=Ye.map.cameraPosition;yt!==void 0&&yt.setValue(F,vn.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&Ye.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ye.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),H!==S&&(H=S,Jn=!0,pi=!0)}if(ye.needsLights&&(It.state.sunShadowMap.length>0&&Ye.setValue(F,"sunShadowMap",It.state.sunShadowMap,Ie),It.state.directionalShadowMap.length>0&&Ye.setValue(F,"directionalShadowMap",It.state.directionalShadowMap,Ie),It.state.spotShadowMap.length>0&&Ye.setValue(F,"spotShadowMap",It.state.spotShadowMap,Ie),It.state.pointShadowMap.length>0&&Ye.setValue(F,"pointShadowMap",It.state.pointShadowMap,Ie)),Y.isSkinnedMesh){Ye.setOptional(F,Y,"bindMatrix"),Ye.setOptional(F,Y,"bindMatrixInverse");const ct=Y.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),Ye.setValue(F,"boneTexture",ct.boneTexture,Ie))}Y.isBatchedMesh&&(Ye.setOptional(F,Y,"batchingTexture"),Ye.setValue(F,"batchingTexture",Y._matricesTexture,Ie),Ye.setOptional(F,Y,"batchingIdTexture"),Ye.setValue(F,"batchingIdTexture",Y._indirectTexture,Ie),Ye.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ye.setValue(F,"batchingColorTexture",Y._colorsTexture,Ie));const an=$.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ne.update(Y,$,Pt),(Jn||ye.receiveShadow!==Y.receiveShadow)&&(ye.receiveShadow=Y.receiveShadow,Ye.setValue(F,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&N.environment!==null&&(At.envMapIntensity.value=N.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=ng()),Jn){if(Ye.setValue(F,"toneMappingExposure",U.toneMappingExposure),ye.needsLights&&g_(At,pi),me&&X.fog===!0&&ce.refreshFogUniforms(At,me),ce.refreshMaterialUniforms(At,X,oe,_e,R.state.transmissionRenderTarget[S.id]),ye.needsLights&&ye.numLightProbeGrids>0){const ct=E;let yt=0;for(const Nn of R.state.lightProbeGridArray)Nn.texture!==null&&(ct.textures[yt]=Nn.texture,ct.min[yt]=Nn.boundingBox.min,ct.max[yt]=Nn.boundingBox.max,ct.resolution[yt]=Nn.resolution,yt++);for(const Nn in ct)ct[Nn].length=yt;At.probesSH.value=ct.textures,At.probesMin.value=ct.min,At.probesMax.value=ct.max,At.probesResolution.value=ct.resolution}cs.upload(F,eh(ye),At,Ie)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(cs.upload(F,eh(ye),At,Ie),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ye.setValue(F,"center",Y.center),Ye.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ye.setValue(F,"normalMatrix",Y.normalMatrix),Ye.setValue(F,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const ct=X.uniformsGroups;for(let yt=0,Nn=ct.length;yt<Nn;yt++){const ih=ct[yt];we.update(ih,Pt),we.bind(ih,Pt)}}return Pt}function g_(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function __(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,N,$){const X=Pe.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Pe.get(S.texture).__webglTexture=N,Pe.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const $=Pe.get(S);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,$=0){I=S,W=N,G=$;let X=null,Y=!1,me=!1;if(S){const fe=Pe.get(S);if(fe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(F.FRAMEBUFFER,fe.__webglFramebuffer),C.copy(S.viewport),Z.copy(S.scissor),ee=S.scissorTest,ge.viewport(C),ge.scissor(Z),ge.setScissorTest(ee),L=-1;return}else if(fe.__webglFramebuffer===void 0)Ie.setupRenderTarget(S);else if(fe.__hasExternalTextures)Ie.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ue=S.depthTexture;if(fe.__boundDepthTexture!==Ue){if(Ue!==null&&Pe.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);const Ae=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?X=Ae[N][$]:X=Ae[N],Y=!0):S.samples>0&&Ie.useMultisampledRTT(S)===!1?X=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?X=Ae[$]:X=Ae,C.copy(S.viewport),Z.copy(S.scissor),ee=S.scissorTest}else C.copy(Ce).multiplyScalar(oe).floor(),Z.copy(Qe).multiplyScalar(oe).floor(),ee=et;if($!==0&&(X=D),ge.bindFramebuffer(F.FRAMEBUFFER,X)&&ge.drawBuffers(S,X),ge.viewport(C),ge.scissor(Z),ge.setScissorTest(ee),Y){const fe=Pe.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,$)}else if(me){const fe=N;for(let Me=0;Me<S.textures.length;Me++){const Ae=Pe.get(S.textures[Me]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,$,fe)}}else if(S!==null&&$!==0){const fe=Pe.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,$)}L=-1};function nh(S){const N=Pe.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=ot.textureFormatReadable(S.format),N.__typeReadable=ot.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,$,X,Y,me,Se,fe=0){if(!(S&&S.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me){ge.bindFramebuffer(F.FRAMEBUFFER,Me);try{const Ae=S.textures[fe],Ue=Ae.format,We=Ae.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const Ee=nh(Ae);if(Ee.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-X&&$>=0&&$<=S.height-Y&&F.readPixels(N,$,X,Y,le.convert(Ue),le.convert(We),me)}finally{const Ae=I!==null?Pe.get(I).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,N,$,X,Y,me,Se,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me)if(N>=0&&N<=S.width-X&&$>=0&&$<=S.height-Y){ge.bindFramebuffer(F.FRAMEBUFFER,Me);const Ae=S.textures[fe],Ue=Ae.format,We=Ae.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const Ee=nh(Ae);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),F.readPixels(N,$,X,Y,le.convert(Ue),le.convert(We),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const ft=I!==null?Pe.get(I).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,ft);const it=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zh(F,it,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Xe),F.deleteSync(it),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,$=0){const X=Math.pow(2,-$),Y=Math.floor(S.image.width*X),me=Math.floor(S.image.height*X),Se=N!==null?N.x:0,fe=N!==null?N.y:0;Ie.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Se,fe,Y,me),ge.unbindTexture()},this.copyTextureToTexture=function(S,N,$=null,X=null,Y=0,me=0){let Se,fe,Me,Ae,Ue,We,Ee,Xe,ft;const it=S.isCompressedTexture?S.mipmaps[me]:S.image;if($!==null)Se=$.max.x-$.min.x,fe=$.max.y-$.min.y,Me=$.isBox3?$.max.z-$.min.z:1,Ae=$.min.x,Ue=$.min.y,We=$.isBox3?$.min.z:0;else{const Ye=Math.pow(2,-Y);Se=Math.floor(it.width*Ye),fe=Math.floor(it.height*Ye),S.isDataArrayTexture?Me=it.depth:S.isData3DTexture?Me=Math.floor(it.depth*Ye):Me=1,Ae=0,Ue=0,We=0}X!==null?(Ee=X.x,Xe=X.y,ft=X.z):(Ee=0,Xe=0,ft=0);const tt=le.convert(N.format),Ct=le.convert(N.type);let ye;N.isData3DTexture?(Ie.setTexture3D(N,0),ye=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ie.setTexture2DArray(N,0),ye=F.TEXTURE_2D_ARRAY):(Ie.setTexture2D(N,0),ye=F.TEXTURE_2D),ge.activeTexture(F.TEXTURE0),ge.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),ge.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ge.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const It=ge.getParameter(F.UNPACK_ROW_LENGTH),$e=ge.getParameter(F.UNPACK_IMAGE_HEIGHT),fi=ge.getParameter(F.UNPACK_SKIP_PIXELS),Pt=ge.getParameter(F.UNPACK_SKIP_ROWS),ys=ge.getParameter(F.UNPACK_SKIP_IMAGES);ge.pixelStorei(F.UNPACK_ROW_LENGTH,it.width),ge.pixelStorei(F.UNPACK_IMAGE_HEIGHT,it.height),ge.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),ge.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),ge.pixelStorei(F.UNPACK_SKIP_IMAGES,We);const Jn=S.isDataArrayTexture||S.isData3DTexture,pi=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const Ye=Pe.get(S),At=Pe.get(N),an=Pe.get(Ye.__renderTarget),ct=Pe.get(At.__renderTarget);ge.bindFramebuffer(F.READ_FRAMEBUFFER,an.__webglFramebuffer),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let yt=0;yt<Me;yt++)Jn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.get(S).__webglTexture,Y,We+yt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.get(N).__webglTexture,me,ft+yt)),F.blitFramebuffer(Ae,Ue,Ae+Se,Ue+fe,Ee,Xe,Ee+Se,Xe+fe,F.DEPTH_BUFFER_BIT,F.NEAREST);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||S.isRenderTargetTexture||Pe.has(S)){const Ye=Pe.get(S),At=Pe.get(N);ge.bindFramebuffer(F.READ_FRAMEBUFFER,T),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let an=0;an<Me;an++)Jn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.__webglTexture,Y,We+an):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,Y),pi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,me,ft+an):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,At.__webglTexture,me),Y!==0?F.blitFramebuffer(Ae,Ue,Ae+Se,Ue+fe,Ee,Xe,Ee+Se,Xe+fe,F.COLOR_BUFFER_BIT,F.NEAREST):pi?F.copyTexSubImage3D(ye,me,Ee,Xe,ft+an,Ae,Ue,Se,fe):F.copyTexSubImage2D(ye,me,Ee,Xe,Ae,Ue,Se,fe);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pi?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(ye,me,Ee,Xe,ft,Se,fe,Me,tt,Ct,it.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(ye,me,Ee,Xe,ft,Se,fe,Me,tt,it.data):F.texSubImage3D(ye,me,Ee,Xe,ft,Se,fe,Me,tt,Ct,it):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,Ee,Xe,Se,fe,tt,Ct,it.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,Ee,Xe,it.width,it.height,tt,it.data):F.texSubImage2D(F.TEXTURE_2D,me,Ee,Xe,Se,fe,tt,Ct,it);ge.pixelStorei(F.UNPACK_ROW_LENGTH,It),ge.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$e),ge.pixelStorei(F.UNPACK_SKIP_PIXELS,fi),ge.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),ge.pixelStorei(F.UNPACK_SKIP_IMAGES,ys),me===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(ye),ge.unbindTexture()},this.initRenderTarget=function(S){Pe.get(S).__webglFramebuffer===void 0&&Ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ie.setTextureCube(S,0):S.isData3DTexture?Ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ie.setTexture2DArray(S,0):Ie.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){W=0,G=0,I=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const hc={type:"change"},no={type:"start"},uc={type:"end"},us=new Vr,dc=new Rn,rg=Math.cos(70*ba.DEG2RAD),gt=new V,Ft=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},io=1e-6;class sg extends ku{constructor(e,t=null){super(e,t),this.state=Ze.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Gn,this._lastTargetPosition=new V,this._quat=new Gn().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pl,this._sphericalDelta=new Pl,this._scale=1,this._panOffset=new V,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new V,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=og.bind(this),this._onPointerDown=ag.bind(this),this._onPointerUp=lg.bind(this),this._onContextMenu=mg.bind(this),this._onMouseWheel=ug.bind(this),this._onKeyDown=dg.bind(this),this._onTouchStart=fg.bind(this),this._onTouchMove=pg.bind(this),this._onMouseDown=cg.bind(this),this._onMouseMove=hg.bind(this),this._interceptControlDown=gg.bind(this),this._interceptControlUp=_g.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ze.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hc),this.update(),this.state=Ze.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;gt.copy(t).sub(this.target),gt.applyQuaternion(this._quat),this._spherical.setFromVector3(gt),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ft:i>Math.PI&&(i-=Ft),r<-Math.PI?r+=Ft:r>Math.PI&&(r-=Ft),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(gt.setFromSpherical(this._spherical),gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=gt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new V(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(us.origin.copy(this.object.position),us.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(us.direction))<rg?this.object.lookAt(this.target):(dc.setFromNormalAndCoplanarPoint(this.object.up,this.target),us.intersectPlane(dc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>io||8*(1-this._lastQuaternion.dot(this.object.quaternion))>io||this._lastTargetPosition.distanceToSquared(this.target)>io?(this.dispatchEvent(hc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gt.setFromMatrixColumn(t,0),gt.multiplyScalar(-e),this._panOffset.add(gt)}_panUp(e,t){this.screenSpacePanning===!0?gt.setFromMatrixColumn(t,1):(gt.setFromMatrixColumn(t,0),gt.crossVectors(this.object.up,gt)),gt.multiplyScalar(e),this._panOffset.add(gt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;gt.copy(r).sub(this.target);let s=gt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ag(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function og(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function lg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uc),this.state=Ze.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cg(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ze.DOLLY;break;case mi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}break;case mi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(no)}function hg(n){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ug(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(n.preventDefault(),this.dispatchEvent(no),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(uc))}function dg(n){this.enabled!==!1&&this._handleKeyDown(n)}function fg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1){this.state=Ze.NONE;break}this._handleTouchStartRotate(n),this.state=Ze.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1){this.state=Ze.NONE;break}this._handleTouchStartPan(n),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ze.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(no)}function pg(n){switch(this._trackPointer(n),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ze.NONE}}function mg(n){this.enabled!==!1&&n.preventDefault()}function gg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _g(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var st=(n=>(n[n.Sea=0]="Sea",n[n.Plain=1]="Plain",n[n.Hills=2]="Hills",n[n.Mountain=3]="Mountain",n[n.Lake=4]="Lake",n))(st||{});const ai=1e4,xg=["sea","plain","hills","mountain","lake"];function fc(n){return xg[n]}class vg{seaLevel=0;hillsLevel=0;mountainLevel=0;top=ai;plainTopMeters=500;hillsTopMeters=1500;peakMeters=6e3;seaDepthMeters=4e3;meters(e){if(e<this.seaLevel)return-Math.trunc((this.seaLevel-e)*this.seaDepthMeters/Math.max(this.seaLevel,1));if(e<this.hillsLevel)return pc(e,this.seaLevel,this.hillsLevel,0,this.plainTopMeters);if(e<this.mountainLevel)return pc(e,this.hillsLevel,this.mountainLevel,this.plainTopMeters,this.hillsTopMeters);const t=Math.max(1,this.top-this.mountainLevel),i=Math.min(e-this.mountainLevel,t);return this.hillsTopMeters+Math.trunc((this.peakMeters-this.hillsTopMeters)*i*i/(t*t))}}function pc(n,e,t,i,r){return t<=e?i:i+Math.trunc((r-i)*(n-e)/(t-e))}function Mg(n,e,t,i,r,s){return!(e<n.tempMin||e>=n.tempMax||t<n.moistMin||t>=n.moistMax||n.needsWater&&!r||n.needsVolcanic&&!s||n.landforms!==null&&n.landforms.indexOf(i)<0)}function Sg(n,e,t,i,r,s){for(let a=0;a<n.biomes.length;a++)if(Mg(n.biomes[a],e,t,i,r,s))return a;return n.biomes.length-1}function Xt(n,e,t,i={}){return{id:n,name:e,color:t,tempMin:i.tempMin??-2147483648,tempMax:i.tempMax??2147483647,moistMin:i.moistMin??0,moistMax:i.moistMax??1001,landforms:i.landforms??null,needsWater:i.needsWater??!1,needsVolcanic:i.needsVolcanic??!1}}function Eg(){const n=[2,3];return{id:"earthlike",name:"地球に似た組",biomes:[Xt("volcano","火山","#6B3B32",{needsVolcanic:!0}),Xt("ice","氷雪","#EEF2F5",{tempMax:-100}),Xt("tundra","ツンドラ","#9AA597",{tempMax:-20}),Xt("wetland","湿地","#5E7F55",{tempMin:50,moistMin:720,landforms:[1],needsWater:!0}),Xt("wasteland","荒れ地","#8C7A5E",{moistMax:300,landforms:n}),Xt("desert","砂漠","#D9C27E",{tempMin:120,moistMax:150}),Xt("steppe","乾燥草原","#B8B46A",{moistMax:330}),Xt("taiga","針葉樹林","#2F5A4A",{tempMax:80}),Xt("jungle","密林","#1F6B2A",{tempMin:220,moistMin:600}),Xt("savanna","サバンナ","#C2A74E",{tempMin:200,moistMin:330,moistMax:600}),Xt("forest","温帯の森","#35733D",{moistMin:560}),Xt("grassland","草原","#8DB85A")]}}function mc(n){return Eg()}class yg{a=[];b=[];get size(){return this.a.length}less(e,t){return this.a[e]<this.a[t]||this.a[e]===this.a[t]&&this.b[e]<this.b[t]}swap(e,t){const i=this.a[e];this.a[e]=this.a[t],this.a[t]=i;const r=this.b[e];this.b[e]=this.b[t],this.b[t]=r}push(e,t){this.a.push(e),this.b.push(t);let i=this.a.length-1;for(;i>0;){const r=i-1>>1;if(!this.less(i,r))break;this.swap(i,r),i=r}}pop(){const e=[this.a[0],this.b[0]],t=this.a.length-1;this.swap(0,t),this.a.pop(),this.b.pop();let i=0;const r=this.a.length;for(;;){const s=2*i+1,a=s+1;let o=i;if(s<r&&this.less(s,o)&&(o=s),a<r&&this.less(a,o)&&(o=a),o===i)break;this.swap(i,o),i=o}return e}}function qt(n){const e=Math.floor(n),t=n-e;return t>.5?e+1:t<.5||e%2===0?e:e+1}function zi(n,e){const t=n%e;return t<0?t+e:t}const ro=2147483647,oi=.8660254037844386,ds=1.0745699318235422,Gi=.5773502691896258,bg=[0,1,1,0,-1,-1],Tg=[1,0,-1,-1,-1,0],Ag=[1,1,0,-1,0,1];function wg(n){switch(n){case 0:return[.5,Gi*.5];case 1:return[0,Gi];case 2:return[-.5,Gi*.5];case 3:return[-.5,-Gi*.5];case 4:return[0,-Gi];default:return[.5,-Gi*.5]}}function gc(n,e){return n-(e-(e&1)>>1)}function _c(n,e){return Math.trunc((Math.abs(n)+Math.abs(e)+Math.abs(n+e))/2)}function Rg(n,e){return n=zi(n,e),n*2>e?n-e:n}function Cg(n,e){return n%=e,n<0&&(n+=e),n*2>e?n-e:n}class fr{constructor(e,t,i,r,s,a){this.seed=e,this.width=t,this.height=i,this.topology=r,this.sphere=s,this.tile=a;const o=t*i;this.elevation=new Int32Array(o),this.moisture=new Int32Array(o),this.temperature=new Int32Array(o),this.landform=new Uint8Array(o),this.biome=new Int32Array(o),this.volcanic=new Uint8Array(o),this.insideCount=o}seed;width;height;topology;sphere;tile;seaLevel=0;biomes;altitude;tileMeters=125e3;riverFlow=6e3;greatRiverFlow=2e4;elevation;moisture;temperature;landform;biome;volcanic;riverTo=null;flow=null;insideCount;static plane(e,t,i,r,s){return new fr(e,t,i,r,null,s)}static sphereGrid(e,t){return new fr(e,t.count,1,"sphere",t,"hex")}get isSphere(){return this.sphere!==null}get isHexPlane(){return this.tile==="hex"&&this.sphere===null}get wrapsX(){return this.topology==="cylinder"}get isFlat(){return this.topology==="plane"}get periodX(){return this.width}get periodY(){return this.isHexPlane?this.height*oi:this.height}get neighborSlots(){return this.tile==="hex"?6:8}centerX(e,t){return this.isHexPlane?e+.5+.5*(t&1):e+.5}centerY(e){return this.isHexPlane?(e+.5)*oi:e+.5}index(e,t){if(this.wrapsX)e=zi(e,this.width);else if(e<0||e>=this.width)return-1;return t<0||t>=this.height?-1:t*this.width+e}neighbor(e,t,i){return this.index(e%this.width+t,Math.trunc(e/this.width)+i)}neighborAt(e,t){if(this.sphere!==null)return t<this.sphere.neighborCount(e)?this.sphere.neighbor(e,t):-1;if(this.isHexPlane){const s=Math.trunc(e/this.width);return this.index(e%this.width+((s&1)===0?Tg[t]:Ag[t]),s+bg[t])}const i=t===0||t===4||t===6?1:t===1||t===5||t===7?-1:0,r=t===2||t===4||t===5?1:t===3||t===6||t===7?-1:0;return this.neighbor(e,i,r)}distance(e,t){if(this.sphere!==null)return this.sphere.distance(e,t);const i=this.width;return this.isHexPlane?this.hexDistance(e%i,Math.trunc(e/i),t%i,Math.trunc(t/i)):Math.max(Math.abs(this.deltaXInt(e%i,t%i)),Math.abs(Math.trunc(t/i)-Math.trunc(e/i)))}hexDistance(e,t,i,r){const s=gc(i,r)-gc(e,t),a=r-t;if(!this.wrapsX)return _c(s,a);let o=Number.MAX_SAFE_INTEGER;const l=qt(-(s+a*.5)/this.width);for(let c=l-1;c<=l+1;c++)o=Math.min(o,_c(s+c*this.width,a));return o}deltaXInt(e,t){return this.wrapsX?Rg(t-e,this.width):t-e}deltaX(e){return this.wrapsX?Cg(e,this.periodX):e}deltaY(e){return e}onEdge(e,t){return this.sphere!==null?!1:!this.wrapsX&&(e===0||e===this.width-1)||t===0||t===this.height-1}isWater(e){const t=this.landform[e];return t===st.Sea||t===st.Lake}river(e){if(this.flow===null||this.isWater(e))return 0;const t=this.flow[e];return t>=this.greatRiverFlow?2:t>=this.riverFlow?1:0}nearWater(e){for(let t=0;t<this.neighborSlots;t++){const i=this.neighborAt(e,t);if(!(i<0)&&this.isWater(i))return!0}return!1}reclassify(){const e=this.width*this.height;for(let t=0;t<e;t++){const i=this.landform[t];if(i===st.Sea||i===st.Lake){this.biome[t]=-1;continue}const r=Math.trunc(this.moisture[t]*1e3/ai);this.biome[t]=Sg(this.biomes,this.temperature[t],r,i,this.nearWater(t)||this.river(t)===2,this.volcanic[t]===1)}}}class fs{state;constructor(e){this.state=e>>>0}nextUInt(){this.state=this.state+1831565813>>>0;let e=this.state;return e=Math.imul(e^e>>>15,e|1)>>>0,e=(e^e+Math.imul(e^e>>>7,e|61)>>>0)>>>0,(e^e>>>14)>>>0}nextDouble(){return this.nextUInt()/4294967296}}function ps(n,e,t){let i=(Math.imul(n,2376512323)^Math.imul(e,3625334849)^Math.imul(t,3407524639))>>>0;return i=(i^i>>>16)>>>0,i=Math.imul(i,2146121005)>>>0,i=(i^i>>>15)>>>0,i=Math.imul(i,2221713035)>>>0,i=(i^i>>>16)>>>0,i/4294967296}function ms(n,e,t,i){let r=(Math.imul(n,2376512323)^Math.imul(e,3625334849)^Math.imul(t,2654435761)^Math.imul(i,3407524639))>>>0;return r=(r^r>>>16)>>>0,r=Math.imul(r,2146121005)>>>0,r=(r^r>>>15)>>>0,r=Math.imul(r,2221713035)>>>0,r=(r^r>>>16)>>>0,r/4294967296}function pr(n){return n*n*n*(n*(n*6-15)+10)}function xc(n,e,t,i=0,r=0){let s=Math.floor(n),a=Math.floor(e);const o=n-s,l=e-a,c=pr(o),f=pr(l);let m=s+1,h=a+1;i>0&&(s=zi(s,i),m=zi(m,i)),r>0&&(a=zi(a,r),h=zi(h,r));const p=ps(s,a,t),g=ps(m,a,t),x=ps(s,h,t),u=ps(m,h,t),d=p+(g-p)*c,v=x+(u-x)*c;return d+(v-d)*f}function Pg(n,e,t,i){const r=Math.floor(n),s=Math.floor(e),a=Math.floor(t),o=pr(n-r),l=pr(e-s),c=pr(t-a),f=p=>{const g=ms(r,s,p,i),x=ms(r+1,s,p,i),u=ms(r,s+1,p,i),d=ms(r+1,s+1,p,i),v=g+(x-g)*o,A=u+(d-u)*o;return v+(A-v)*l},m=f(a),h=f(a+1);return m+(h-m)*c}class gn{constructor(e,t,i,r){this.persistence=i,this.lacunarity=r;for(let s=0;s<t;s++)this.salts.push(e.nextUInt()),this.offX.push(e.nextDouble()*1024),this.offY.push(e.nextDouble()*1024)}persistence;lacunarity;salts=[];offX=[];offY=[];sample(e,t){let i=1,r=1,s=0,a=0;for(let o=0;o<this.salts.length;o++)s+=i*xc(e*r+this.offX[o],t*r+this.offY[o],this.salts[o]),a+=i,i*=this.persistence,r*=this.lacunarity;return s/a}samplePeriodic(e,t,i,r){let s=1,a=1,o=0,l=0;for(let c=0;c<this.salts.length;c++){const f=i>0?Math.max(1,qt(i*a)):0,m=r>0?Math.max(1,qt(r*a)):0,h=f>0?f/i:a,p=m>0?m/r:a;o+=s*xc(e*h+this.offX[c],t*p+this.offY[c],this.salts[c],f,m),l+=s,s*=this.persistence,a*=this.lacunarity}return o/l}}class _n{constructor(e,t,i,r){this.persistence=i,this.lacunarity=r;for(let s=0;s<t;s++)this.salts.push(e.nextUInt()),this.offX.push(e.nextDouble()*1024),this.offY.push(e.nextDouble()*1024),this.offZ.push(e.nextDouble()*1024)}persistence;lacunarity;salts=[];offX=[];offY=[];offZ=[];sample(e,t,i){let r=1,s=1,a=0,o=0;for(let l=0;l<this.salts.length;l++)a+=r*Pg(e*s+this.offX[l],t*s+this.offY[l],i*s+this.offZ[l],this.salts[l]),o+=r,r*=this.persistence,s*=this.lacunarity;return a/o}}const Lg=[1,.5,-.5,-1,-.5,.5],Dg=[0,oi,oi,0,-oi,-oi],vc=[1,-1,0,0],Mc=[0,0,1,-1];function Pn(n,e){const t=n/e,i=1/(1+t*t);return i*i}function Ig(n,e){const t=n.width,i=n.height,r=t*i,s=n.isHexPlane,a=s?1/ds:1,o=s?ds:1,l=new fs((n.seed^1592635660)>>>0),c=new gn(l,3,.5,2),f=new gn(l,3,.5,2),m=new gn(l,3,.5,2),h=new gn(l,2,.5,2),p=new gn(l,2,.5,2),g=new gn(l,2,.5,2),x=(C,Z,ee,B)=>{const J=n.deltaX(C-ee),re=n.deltaY(Z-B);return J*J+re*re},u=Math.max(2,xs(e.plateCount,n)),d=Cc(n,e),v=[],A=Math.sqrt(n.insideCount*(s?oi:1)/u)*.6;for(let C=0;C<u;C++){let Z=null;for(let _e=0;_e<20;_e++){const oe={x:l.nextDouble()*n.periodX,y:l.nextDouble()*n.periodY,vx:0,vy:0,continental:!1,group:-1,base:0,area:0};let Te=Number.MAX_VALUE;for(const nt of v)Te=Math.min(Te,Math.sqrt(x(oe.x,oe.y,nt.x,nt.y)));if(Z=oe,Te>=A)break}let ee=l.nextDouble()*2-1,B=l.nextDouble()*2-1,J=Math.sqrt(ee*ee+B*B);J<1e-6&&(ee=1,B=0,J=1);const re=.5+l.nextDouble()*.5;Z.vx=ee/J*re,Z.vy=B/J*re,v.push(Z)}const E=new Int32Array(r);for(let C=0;C<i;C++)for(let Z=0;Z<t;Z++){const ee=n.centerX(Z,C)+(Dn(c,n,4*d,Z,C)*2-1)*(e.plateWarp*a),B=n.centerY(C)+(Dn(f,n,4*d,Z,C)*2-1)*(e.plateWarp*a);let J=0,re=Number.MAX_VALUE;for(let _e=0;_e<u;_e++){const oe=x(ee,B,v[_e].x,v[_e].y);oe<re&&(re=oe,J=_e)}E[C*t+Z]=J,v[J].area++}const w=s?6:4,R=(C,Z)=>s?n.neighborAt(C,Z):n.neighbor(C,vc[Z],Mc[Z]),_=[];for(let C=0;C<u;C++)_.push(new Array(u).fill(!1));for(let C=0;C<r;C++)for(let Z=0;Z<w;Z++){const ee=R(C,Z);ee>=0&&E[ee]!==E[C]&&(_[E[C]][E[ee]]=!0)}const y=Math.max(1,Math.min(e.continents,u));Ec(v.length,y,e,n.insideCount,l,v,_,(C,Z)=>x(v[C].x,v[C].y,v[Z].x,v[Z].y));for(const C of v)C.base=C.continental?.55+(l.nextDouble()-.5)*.1:.05+(l.nextDouble()-.5)*.1;const k=new gn(l,2,.5,2),U=[],z=xs(e.hotspots,n);for(let C=0;C<z;C++){let Z=-1;for(let J=0;J<50&&Z<0;J++){const re=Math.trunc(Math.min(r-1,l.nextDouble()*r));v[E[re]].continental||(Z=re)}if(Z<0)continue;const ee=v[E[Z]],B=Math.sqrt(ee.vx*ee.vx+ee.vy*ee.vy);for(let J=0;J<4;J++)U.push({x:n.centerX(Z%t,Math.trunc(Z/t))-ee.vx/B*(1.6*a)*J,y:n.centerY(Math.trunc(Z/t))-ee.vy/B*(1.6*a)*J,h:.6*(1-.18*J)})}const K=new Float64Array(r),D=new Int32Array(r),T=new Uint8Array(r);for(let C=0;C<i;C++)for(let Z=0;Z<t;Z++){const ee=C*t+Z,B=E[ee];let J=0,re=0;for(let _e=0;_e<w;_e++){const oe=R(ee,_e);if(oe<0)continue;const Te=E[oe];Te!==B&&(s?re+=(v[B].vx-v[Te].vx)*Lg[_e]+(v[B].vy-v[Te].vy)*Dg[_e]:re+=(v[B].vx-v[Te].vx)*vc[_e]+(v[B].vy-v[Te].vy)*Mc[_e],J++,D[ee]=Te)}J>0&&(T[ee]=1,K[ee]=re/J)}const O=2147483647,W=new Int32Array(r),G=new Int32Array(r),I=[];for(let C=0;C<r;C++)T[C]?(W[C]=0,G[C]=C,I.push(C)):W[C]=O;for(let C=0;C<I.length;C++){const Z=I[C];if(s){for(let ee=0;ee<6;ee++){const B=n.neighborAt(Z,ee);B<0||E[B]!==E[Z]||W[B]!==O||(W[B]=W[Z]+1,G[B]=G[Z],I.push(B))}continue}for(let ee=-1;ee<=1;ee++)for(let B=-1;B<=1;B++){if(B===0&&ee===0)continue;const J=n.neighbor(Z,B,ee);J<0||E[J]!==E[Z]||W[J]!==O||(W[J]=W[Z]+1,G[J]=G[Z],I.push(J))}}const L=new Int32Array(r);I.length=0;for(let C=0;C<r;C++)v[E[C]].continental?(L[C]=0,I.push(C)):L[C]=O;for(let C=0;C<I.length;C++){const Z=I[C];if(s){for(let ee=0;ee<6;ee++){const B=n.neighborAt(Z,ee);B<0||L[B]!==O||(L[B]=L[Z]+1,I.push(B))}continue}for(let ee=-1;ee<=1;ee++)for(let B=-1;B<=1;B++){const J=n.neighbor(Z,B,ee);J<0||L[J]!==O||(L[J]=L[Z]+1,I.push(J))}}const H=new Float64Array(r);for(let C=0;C<i;C++)for(let Z=0;Z<t;Z++){const ee=C*t+Z,B=v[E[ee]];let J=B.base;if(W[ee]!==O&&(J=Sc(J,B,v[D[G[ee]]],K[G[ee]],s?W[ee]*o:W[ee],e)),B.continental){const re=1-Math.abs(Dn(p,n,5*d,Z,C)*2-1),_e=Math.max(0,Dn(g,n,2*d,Z,C)-.5)*2;J+=e.oldMountains*re*re*re*_e}if(!B.continental){for(const re of U)J+=re.h*Pn(Math.sqrt(x(n.centerX(Z,C),n.centerY(C),re.x,re.y))*o,.7);L[ee]<=3&&(J+=e.shelfIslands*Math.max(0,Dn(k,n,12*d,Z,C)-.5)*2*(1-(L[ee]-1)/3))}if(J+=(Dn(m,n,e.detailFrequency*d,Z,C)-.5)*e.detailAmplitude,J+=(Dn(h,n,2*d,Z,C)-.5)*.2,n.isFlat&&e.edgeSeaTiles>0){let re,_e;if(s){const oe=n.centerX(Z,C),Te=n.centerY(C),nt=t+.5,Ce=n.periodY;re=Math.max(Math.abs(2*oe/nt-1),Math.abs(2*Te/Ce-1)),_e=Math.min(Math.min(oe,nt-oe),Math.min(Te,Ce-Te))*o}else{const oe=2*(Z+.5)/t-1,Te=2*(C+.5)/i-1;re=Math.max(Math.abs(oe),Math.abs(Te)),_e=Math.min(Math.min(Z+.5,t-Z-.5),Math.min(C+.5,i-C-.5))}J-=e.edgeFalloff*re*re*re,_e<e.edgeSeaTiles&&(J-=e.edgeSeaDepth*(1-_e/e.edgeSeaTiles))}H[ee]=J}return H}function Sc(n,e,t,i,r,s){const a=s.ridgeWidth,o=t.continental;return e.continental&&o&&t.group!==e.group?n-=s.continentGap*Pn(r,a):i>0?e.continental&&o?n+=.55*i*Pn(r,a):e.continental?n+=.45*i*Pn(Math.max(0,r-1),a):o?n-=.15*i*Pn(r,a):n+=.35*i*Pn(r,a*.7):e.continental?n+=.15*i*Pn(r,a):n+=.08*-i*Pn(r,a),n}function Ec(n,e,t,i,r,s,a,o){const l=[Math.trunc(Math.min(n-1,r.nextDouble()*n))];for(;l.length<e;){let x=-1,u=-1;for(let d=0;d<n;d++){if(l.includes(d))continue;let v=Number.MAX_VALUE;for(const A of l)v=Math.min(v,o(d,A));v*=.75+r.nextDouble()*.5,v>u&&(u=v,x=d)}l.push(x)}const c=Math.trunc((1-t.seaRatio)*i);let f=0;const m=new Array(e).fill(0),h=new Array(e).fill(!1);for(let x=0;x<e;x++){const u=s[l[x]];u.continental=!0,u.group=x,m[x]=u.area,f+=u.area,h[x]=!0}const p=[],g=[];for(;f<c;){let x=-1;for(let v=0;v<e;v++)h[v]&&(x<0||m[v]<m[x])&&(x=v);if(x<0)break;p.length=0,g.length=0;for(let v=0;v<n;v++){if(s[v].continental)continue;let A=!1,E=!1;for(let w=0;w<n;w++)!a[v][w]||!s[w].continental||(s[w].group===x?A=!0:E=!0);A&&(p.push(v),E||g.push(v))}const u=g.length>0?g:p;if(u.length===0){h[x]=!1;continue}const d=u[Math.min(u.length-1,Math.trunc(r.nextDouble()*u.length))];s[d].continental=!0,s[d].group=x,m[x]+=s[d].area,f+=s[d].area}}function gs(n,e){const t=n.width*n.height,i=new Uint8Array(t),r=n.tile==="hex"?n.neighborSlots:4;for(let s=0;s<t;s++){if(i[s]||n.landform[s]!==st.Lake)continue;const a=[s];i[s]=1;for(let o=0;o<a.length;o++){const l=a[o];for(let c=0;c<r;c++){const f=n.neighborAt(l,c);f<0||i[f]||n.landform[f]!==st.Lake||(i[f]=1,a.push(f))}}if(!(a.length<e))for(const o of a)n.landform[o]=st.Sea}}function Ng(n,e,t,i){const r=n.width,s=n.height,a=r*s,o=new Float64Array(a),l=n.wrapsX?2:1;for(let f=0;f<s;f++){const m=Pc(n,e,f),h=m>=.3&&m<.65,p=h?0:r-1,g=h?1:-1;let x=n.isWater(f*r+p)?1:.6,u=t[f*r+p];for(let d=0,v=p;d<r*l;d++,v+=g){const A=(v%r+r)%r,E=f*r+A,w=d>=r*(l-1);if(n.isWater(E))x+=(1-x)*.5,w&&(o[E]=1);else{const R=Math.max(0,t[E]-u),_=Math.min(x,x*(.1+R*1.5));w&&(o[E]=x*(.6+Math.min(1,R*4))),x-=_}u=t[E]}}const c=new Float64Array(a);for(let f=0;f<s;f++)for(let m=0;m<r;m++){const h=f*r+m;if(n.isHexPlane){let x=o[h]*2,u=2;for(let d=1;d<6;d++){if(d===3)continue;const v=n.neighborAt(h,d);v<0||(x+=o[v]*.75,u+=.75)}c[h]=x/u*.75+i[h]*.25;continue}let p=0,g=0;for(let x=-1;x<=1;x++){const u=n.neighbor(h,0,x);u<0||(p+=o[u]*(x===0?2:1),g+=x===0?2:1)}c[h]=g>0?p/g*.75+i[h]*.25:0}return c}class be{constructor(e,t,i){this.x=e,this.y=t,this.z=i}x;y;z;add(e){return new be(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new be(this.x-e.x,this.y-e.y,this.z-e.z)}mul(e){return new be(this.x*e,this.y*e,this.z*e)}neg(){return new be(-this.x,-this.y,-this.z)}static dot(e,t){return e.x*t.x+e.y*t.y+e.z*t.z}static cross(e,t){return new be(e.y*t.z-e.z*t.y,e.z*t.x-e.x*t.z,e.x*t.y-e.y*t.x)}get length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}normalized(){const e=this.length;return e>0?this.mul(1/e):this}}class Ln{static DEFAULT_RELAX=16;static MAX_FREQUENCY=400;static RELAX_STRENGTH=.25;static GNOMONIC=-.2;frequency;count;northPole;southPole;meanSpacing;center;nb;deg;corner;tri;cornerPos;area;stepCos;constructor(e,t=Ln.DEFAULT_RELAX){if(e<2||e>Ln.MAX_FREQUENCY)throw new RangeError(`分割数は 2〜${Ln.MAX_FREQUENCY}`);this.frequency=e;const i=10*e*e+2;this.count=i;const r=(1+Math.sqrt(5))/2,s=new Array(12);let a=0;for(const D of[1,-1])for(const T of[1,-1])s[a]=new be(0,D,T*r).normalized(),s[a+4]=new be(D,T*r,0).normalized(),s[a+8]=new be(D*r,0,T).normalized(),a++;const o=[];for(let D=0;D<12;D++)o.push(new Array(12).fill(-1));let l=0;for(let D=0;D<12;D++)for(let T=0;T<12;T++)o[D][T]=D<T&&be.dot(s[D],s[T])>0?l++:-1;for(let D=0;D<12;D++)for(let T=0;T<D;T++)o[D][T]=o[T][D];const c=[];for(let D=0;D<12;D++)for(let T=D+1;T<12;T++)for(let O=T+1;O<12;O++)o[D][T]>=0&&o[T][O]>=0&&o[D][O]>=0&&c.push(be.dot(be.cross(s[T].sub(s[D]),s[O].sub(s[D])),s[D].add(s[T]).add(s[O]))>0?[D,T,O]:[D,O,T]);this.center=new Array(i);const f=new Uint8Array(i);this.nb=new Int32Array(i*6).fill(-1),this.deg=new Uint8Array(i);const m=12,h=12+30*(e-1),p=(e-1)*(e-2)/2,g=[1,-1,1,-1,0,0],x=[-1,1,0,0,1,-1],u=[0,0,-1,1,-1,1],d=Ln.GNOMONIC;for(let D=0;D<c.length;D++){const T=c[D][0],O=c[D][1],W=c[D][2],G=(L,H,C)=>m+o[L][H]*(e-1)+(L<H?C:e-C)-1,I=(L,H,C)=>L===e?T:H===e?O:C===e?W:C===0?G(T,O,H):H===0?G(T,W,C):L===0?G(O,W,C):h+D*p+(H-1)*(e-1)-(H-1)*H/2+(C-1);for(let L=0;L<=e;L++)for(let H=0;H<=e-L;H++){const C=e-L-H,Z=I(C,L,H);if(!f[Z]){f[Z]=1;let ee;if(Z<12)ee=s[Z];else if(C===0||L===0||H===0){const B=H===0||L===0?T:O,J=H===0?O:W,re=H===0?L:H,_e=Math.min(B,J),oe=Math.max(B,J);ee=li(s[_e],s[oe],(B<J?re:e-re)/e)}else ee=this.interior(s[T],s[O],s[W],C,L,H);Z>=12&&(ee=ee.mul(1-d).add(s[T].mul(C).add(s[O].mul(L)).add(s[W].mul(H)).normalized().mul(d)).normalized()),this.center[Z]=ee}for(let ee=0;ee<6;ee++){const B=C+g[ee],J=L+x[ee],re=H+u[ee];B<0||J<0||re<0||B>e||J>e||re>e||this.addNeighbor(Z,I(B,J,re))}}}const v=new Float64Array(6);for(let D=0;D<i;D++){const T=this.center[D],O=be.cross(T,Math.abs(T.x)<.9?new be(1,0,0):new be(0,1,0)).normalized(),W=be.cross(T,O),G=this.deg[D];for(let I=0;I<G;I++){const L=this.center[this.nb[D*6+I]].sub(T);v[I]=Hi(be.dot(L,W),be.dot(L,O))}for(let I=1;I<G;I++)for(let L=I;L>0&&v[L]<v[L-1];L--){const H=v[L];v[L]=v[L-1],v[L-1]=H;const C=this.nb[D*6+L];this.nb[D*6+L]=this.nb[D*6+L-1],this.nb[D*6+L-1]=C}}this.corner=new Int32Array(i*6);const A=[],E=new Map;for(let D=0;D<i;D++){const T=this.deg[D];for(let O=0;O<6;O++){if(O>=T){this.corner[D*6+O]=-1;continue}let W=D,G=this.nb[D*6+O],I=this.nb[D*6+(O+1)%T];if(W>G){const C=W;W=G,G=C}if(G>I){const C=G;G=I,I=C}if(W>G){const C=W;W=G,G=C}const L=W+","+G+","+I;let H=E.get(L);H===void 0&&(H=E.size,E.set(L,H),A.push(W,G,I)),this.corner[D*6+O]=H}}this.tri=A,this.cornerPos=new Array(E.size),this.area=new Float64Array(i);const w=new Array(i),R=4*Math.PI/i;for(let D=0;D<t;D++){this.placeCorners(),this.computeAreas();for(let T=0;T<i;T++)w[T]=new be(0,0,0);for(let T=0;T<i;T++){const O=Ln.RELAX_STRENGTH*(R-this.area[T])/R;for(let W=0;W<this.deg[T];W++){const G=this.nb[T*6+W];w[G]=w[G].add(this.center[G].sub(this.center[T]).mul(O))}}for(let T=0;T<i;T++)this.center[T]=this.center[T].add(w[T]).normalized()}const _=s[c[0][0]].add(s[c[0][1]]).add(s[c[0][2]]).normalized();let y=0;for(let D=1;D<i;D++)be.dot(this.center[D],_)>be.dot(this.center[y],_)&&(y=D);this.rotate(this.center[y]);let k=0;for(let D=1;D<i;D++)this.center[D].z<this.center[k].z&&(k=D);this.northPole=y,this.southPole=k,this.placeCorners(),this.computeAreas();let U=0,z=0;for(let D=0;D<i;D++)for(let T=0;T<this.deg[D];T++){const O=this.nb[D*6+T];O>D&&(U+=this.angle(D,O),z++)}this.meanSpacing=U/z;const K=Math.trunc(Math.PI/this.meanSpacing+.5);this.stepCos=new Float64Array(K);for(let D=0;D<K;D++)this.stepCos[D]=_s(Math.PI/2-(D+.5)*this.meanSpacing)}centerOf(e){return this.center[e]}neighborCount(e){return this.deg[e]}neighbor(e,t){return this.nb[e*6+t]}isPentagon(e){return this.deg[e]===5}get cornerCount(){return this.cornerPos.length}corners(e){const t=new Array(this.deg[e]);for(let i=0;i<t.length;i++)t[i]=this.cornerPos[this.corner[e*6+i]];return t}areaOf(e){return this.area[e]}latitude(e){const t=this.center[e];return Hi(t.z,Math.sqrt(t.x*t.x+t.y*t.y))*(180/Math.PI)}longitude(e){const t=this.center[e];return Hi(t.y,t.x)*(180/Math.PI)}angle(e,t){return yc(this.center[e],this.center[t])}distance(e,t){if(e===t)return 0;const i=be.dot(this.center[e],this.center[t]);let r=0,s=this.stepCos.length;for(;r<s;){const a=r+s>>1;i<=this.stepCos[a]?r=a+1:s=a}return r}computeAreas(){for(let e=0;e<this.count;e++){const t=this.deg[e];let i=0;for(let r=0;r<t;r++)i+=Ug(this.center[e],this.cornerPos[this.corner[e*6+r]],this.cornerPos[this.corner[e*6+(r+1)%t]]);this.area[e]=i}}addNeighbor(e,t){const i=this.deg[e];for(let r=0;r<i;r++)if(this.nb[e*6+r]===t)return;if(i===6)throw new Error("隣が 6 を超えた");this.nb[e*6+i]=t,this.deg[e]=i+1}placeCorners(){const e=this.tri;for(let t=0;t<this.cornerPos.length;t++)this.cornerPos[t]=this.center[e[t*3]].add(this.center[e[t*3+1]]).add(this.center[e[t*3+2]]).normalized()}rotate(e){const t=new be(0,0,1),i=be.cross(e,t),r=i.length,s=be.dot(e,t);if(r<1e-15)return;const a=i.mul(1/r);for(let o=0;o<this.count;o++){const l=this.center[o];this.center[o]=l.mul(s).add(be.cross(a,l).mul(r)).add(a.mul(be.dot(a,l)*(1-s))).normalized()}}interior(e,t,i,r,s,a){const o=this.frequency,l=be.cross(li(e,t,(o-r)/o),li(e,i,(o-r)/o)),c=be.cross(li(t,i,(o-s)/o),li(t,e,(o-s)/o)),f=be.cross(li(i,e,(o-a)/o),li(i,t,(o-a)/o)),m=e.add(t).add(i);return so(l,c,m).add(so(c,f,m)).add(so(f,l,m)).normalized()}}function so(n,e,t){const i=be.cross(n,e).normalized();return be.dot(i,t)<0?i.neg():i}function yc(n,e){return Hi(be.cross(n,e).length,be.dot(n,e))}function li(n,e,t){const i=Hi(be.cross(n,e).length,be.dot(n,e)),r=_s(i);return n.mul(_s((1-t)*i)).add(e.mul(_s(t*i))).mul(1/r)}function Ug(n,e,t){const i=Math.abs(be.dot(n,be.cross(e,t))),r=1+be.dot(n,e)+be.dot(e,t)+be.dot(t,n);return 2*Hi(i,r)}function _s(n){const e=n*n;let t=n,i=0;for(let r=1;r<40;r+=2)i+=t,t*=-e/((r+1)*(r+2));return i}function mr(n){if(n<0)return-mr(-n);if(n>1)return Math.PI/2-mr(1/n);for(let r=0;r<2;r++)n/=1+Math.sqrt(1+n*n);const e=n*n;let t=n,i=0;for(let r=1;r<40;r+=2)i+=t/r,t*=-e;return 4*i}function Hi(n,e){return e>0?mr(n/e):e<0?n>=0?mr(n/e)+Math.PI:mr(n/e)-Math.PI:n>0?Math.PI/2:n<0?-Math.PI/2:0}function Fg(){return{topology:"cylinder",cellShape:"square",width:24,height:16,sphereDivisions:18,octaves:4,moistureFrequency:3.5,persistence:.5,lacunarity:2,edgeFalloff:.3,edgeSeaTiles:5,edgeSeaDepth:2,plateCount:14,plateWarp:5,ridgeWidth:1.6,oldMountains:.25,detailFrequency:9,detailAmplitude:.32,inlandSeaTiles:24,continents:3,continentGap:.6,hotspots:3,shelfIslands:.6,seaRatio:.35,mountainRatio:.15,hillsRatio:.2,rainLevel:0,temperatureGradient:"Poles",coldTemperature:-8,warmTemperature:32,lapseRatePerKm:6.5,temperatureNoise:3,temperatureFrequency:2.5,temperatureLevel:0,temperatureStep:4,volcanoRatio:.06,biomeSet:"earthlike",tileKilometers:125,plainTopMeters:500,hillsTopMeters:1500,peakMeters:6e3,seaDepthMeters:4e3,rainMin:150,rainPerMoist:2,evapBase:250,evapPerDegree:25,evapMin:100,riverFlow:6e3,greatRiverFlow:2e4,lakeDepth:300,sphereLakeDepth:1e3}}function bc(n={}){return{...Fg(),...n}}function Og(n){if(n.topology==="sphere"){if(n.cellShape!=="hex")throw new RangeError('球はヘクスだけ（cellShape = "hex"）');if(!Number.isInteger(n.sphereDivisions)||n.sphereDivisions<2||n.sphereDivisions>Ln.MAX_FREQUENCY)throw new RangeError(`sphereDivisions は 2〜${Ln.MAX_FREQUENCY} の整数`);return}if(!Number.isInteger(n.width)||!Number.isInteger(n.height)||n.width<3||n.height<3)throw new RangeError("width と height は 3 以上の整数")}const Bg=new Set(["width","height","sphereDivisions","octaves","plateCount","inlandSeaTiles","continents","hotspots","rainLevel","temperatureLevel","tileKilometers","plainTopMeters","hillsTopMeters","peakMeters","seaDepthMeters","rainMin","evapBase","evapPerDegree","evapMin","riverFlow","greatRiverFlow","lakeDepth","sphereLakeDepth"]);function zg(n){const e=[],t=r=>{e.push([r,n[r]])};t("topology"),t("cellShape"),n.topology==="sphere"?t("sphereDivisions"):(t("width"),t("height"));const i=["octaves","moistureFrequency","persistence","lacunarity","edgeFalloff","edgeSeaTiles","edgeSeaDepth","plateCount","plateWarp","ridgeWidth","oldMountains","detailFrequency","detailAmplitude","inlandSeaTiles","continents","continentGap","hotspots","shelfIslands","seaRatio","mountainRatio","hillsRatio","rainLevel","temperatureGradient","coldTemperature","warmTemperature","lapseRatePerKm","temperatureNoise","temperatureFrequency","temperatureLevel","temperatureStep","volcanoRatio","biomeSet","tileKilometers","plainTopMeters","hillsTopMeters","peakMeters","seaDepthMeters","rainMin","rainPerMoist","evapBase","evapPerDegree","evapMin","riverFlow","greatRiverFlow","lakeDepth","sphereLakeDepth"];for(const r of i)t(r);return e}function Gg(n,e){const t=new Ln(e.sphereDivisions),i=fr.sphereGrid(n,t),r=t.count,s=new fs(n),a=new _n(s,e.octaves,e.persistence,e.lacunarity),o=new _n(s,3,.5,2),l=s.nextUInt(),c=Hg(t,e)/6e3,f=new Float64Array(r);for(let v=0;v<r;v++)f[v]=xn(a,t,v,e.moistureFrequency*c);const m=Vg(i,t,e,c),h=ki(m),p=ki(f);i.elevation.set(h),i.moisture.set(p),i.seaLevel=ao(h,e.seaRatio);const g=[];for(let v=0;v<r;v++)h[v]>=i.seaLevel&&g.push(v);const x=vs(g,h,1-e.mountainRatio),u=vs(g,h,1-e.mountainRatio-e.hillsRatio);for(let v=0;v<r;v++)i.landform[v]=h[v]<i.seaLevel?st.Lake:h[v]>=x?st.Mountain:h[v]>=u?st.Hills:st.Plain;i.tileMeters=e.tileKilometers*1e3,i.altitude=Ac(i.seaLevel,u,x,e),gs(i,e.inlandSeaTiles);const d=ki(Wg(i,t,e,m,f));wc(d,e.rainLevel),i.moisture.set(d);for(let v=0;v<r;v++){let A=e.coldTemperature+(e.warmTemperature-e.coldTemperature)*Tc(e,t.latitude(v))+e.temperatureStep*e.temperatureLevel;A-=e.lapseRatePerKm*Math.max(0,i.altitude.meters(h[v]))/1e3,A+=e.temperatureNoise*(xn(o,t,v,e.temperatureFrequency*c)*2-1),i.temperature[v]=qt(A*10)}return Rc(i,l,e.volcanoRatio),Dc(i,e,e.sphereLakeDepth),gs(i,e.inlandSeaTiles),i.biomes=mc(e.biomeSet),i.reclassify(),i}function Hg(n,e){return e.tileKilometers*Math.sqrt(n.count/(4*Math.PI))}function xn(n,e,t,i){const r=e.centerOf(t);return n.sample(r.x*i,r.y*i,r.z*i)}function Tc(n,e){const t=(e+90)/180;return n.temperatureGradient==="None"?.5:n.temperatureGradient==="NorthCold"?1-t:n.temperatureGradient==="SouthCold"?t:1-Math.abs(2*t-1)}function ci(n,e){return n.sub(e.mul(be.dot(n,e)))}function kg(n){for(;;){const e=new be(n.nextDouble()*2-1,n.nextDouble()*2-1,n.nextDouble()*2-1),t=be.dot(e,e);if(t>1e-6&&t<=1)return e.normalized()}}function Vg(n,e,t,i){const r=e.count,s=e.meanSpacing,a=new fs((n.seed^1592635660)>>>0),o=new _n(a,3,.5,2),l=new _n(a,3,.5,2),c=new _n(a,3,.5,2),f=new _n(a,3,.5,2),m=new _n(a,2,.5,2),h=new _n(a,2,.5,2),p=new _n(a,2,.5,2),g=(I,L)=>yc(I,L)/s,x=Math.max(2,xs(t.plateCount,n)),u=[],d=Math.sqrt(r/x)*.6;for(let I=0;I<x;I++){let L=null;for(let C=0;C<20;C++){const Z={c:kg(a),v:new be(0,0,0),continental:!1,group:-1,base:0,area:0};let ee=Number.MAX_VALUE;for(const B of u)ee=Math.min(ee,g(Z.c,B.c));if(L=Z,ee>=d)break}let H=ci(new be(a.nextDouble()*2-1,a.nextDouble()*2-1,a.nextDouble()*2-1),L.c);H.length<1e-6&&(H=ci(Math.abs(L.c.x)<.9?new be(1,0,0):new be(0,1,0),L.c)),L.v=H.normalized().mul(.5+a.nextDouble()*.5),u.push(L)}const v=(I,L)=>ci(u[I].v,e.centerOf(L)),A=new Int32Array(r);for(let I=0;I<r;I++){const L=e.centerOf(I),H=new be(xn(o,e,I,4*i)*2-1,xn(l,e,I,4*i)*2-1,xn(c,e,I,4*i)*2-1),C=L.add(ci(H,L).mul(t.plateWarp*s)).normalized();let Z=0,ee=-Number.MAX_VALUE;for(let B=0;B<x;B++){const J=be.dot(C,u[B].c);J>ee&&(ee=J,Z=B)}A[I]=Z,u[Z].area++}const E=[];for(let I=0;I<x;I++)E.push(new Array(x).fill(!1));for(let I=0;I<r;I++)for(let L=0;L<e.neighborCount(I);L++){const H=e.neighbor(I,L);A[H]!==A[I]&&(E[A[I]][A[H]]=!0)}const w=Math.max(1,Math.min(t.continents,x));Ec(x,w,t,r,a,u,E,(I,L)=>{const H=g(u[I].c,u[L].c);return H*H});for(const I of u)I.base=I.continental?.55+(a.nextDouble()-.5)*.1:.05+(a.nextDouble()-.5)*.1;const R=new _n(a,2,.5,2),_=[],y=xs(t.hotspots,n);for(let I=0;I<y;I++){let L=-1;for(let Z=0;Z<50&&L<0;Z++){const ee=Math.trunc(Math.min(r-1,a.nextDouble()*r));u[A[ee]].continental||(L=ee)}if(L<0)continue;const H=e.centerOf(L),C=v(A[L],L).normalized().neg();for(let Z=0;Z<4;Z++)_.push({p:H.add(C.mul(1.6*Z*s)).normalized(),h:.6*(1-.18*Z)})}const k=new Float64Array(r),U=new Int32Array(r),z=new Uint8Array(r);for(let I=0;I<r;I++){const L=A[I];let H=0,C=0;const Z=e.centerOf(I);for(let ee=0;ee<e.neighborCount(I);ee++){const B=e.neighbor(I,ee),J=A[B];if(J===L)continue;const re=ci(e.centerOf(B).sub(Z),Z).normalized();C+=be.dot(v(L,I).sub(v(J,I)),re),H++,U[I]=J}H>0&&(z[I]=1,k[I]=C/H)}const K=2147483647,D=new Int32Array(r),T=new Int32Array(r),O=[];for(let I=0;I<r;I++)z[I]?(D[I]=0,T[I]=I,O.push(I)):D[I]=K;for(let I=0;I<O.length;I++){const L=O[I];for(let H=0;H<e.neighborCount(L);H++){const C=e.neighbor(L,H);A[C]!==A[L]||D[C]!==K||(D[C]=D[L]+1,T[C]=T[L],O.push(C))}}const W=new Int32Array(r);O.length=0;for(let I=0;I<r;I++)u[A[I]].continental?(W[I]=0,O.push(I)):W[I]=K;for(let I=0;I<O.length;I++){const L=O[I];for(let H=0;H<e.neighborCount(L);H++){const C=e.neighbor(L,H);W[C]===K&&(W[C]=W[L]+1,O.push(C))}}const G=new Float64Array(r);for(let I=0;I<r;I++){const L=u[A[I]];let H=L.base;if(D[I]!==K&&(H=Sc(H,L,u[U[T[I]]],k[T[I]],D[I],t)),L.continental){const C=1-Math.abs(xn(h,e,I,5*i)*2-1),Z=Math.max(0,xn(p,e,I,2*i)-.5)*2;H+=t.oldMountains*C*C*C*Z}else{const C=e.centerOf(I);for(const Z of _)H+=Z.h*Pn(g(C,Z.p),.7);W[I]<=3&&(H+=t.shelfIslands*Math.max(0,xn(R,e,I,12*i)-.5)*2*(1-(W[I]-1)/3))}H+=(xn(f,e,I,t.detailFrequency*i)-.5)*t.detailAmplitude,H+=(xn(m,e,I,2*i)-.5)*.2,G[I]=H}return G}function Wg(n,e,t,i,r){const s=e.count,a=new be(0,0,1),o=new Int32Array(s),l=new Float64Array(s);for(let p=0;p<s;p++){const g=e.centerOf(p),x=Tc(t,e.latitude(p)),u=x>=.3&&x<.65,d=be.cross(a,g),v=e.longitude(p);if(l[p]=u?v:-v,d.length<1e-9){o[p]=e.neighbor(p,0);continue}const A=u?d.neg():d;let E=-1,w=-Number.MAX_VALUE;for(let R=0;R<e.neighborCount(p);R++){const _=e.neighbor(p,R),y=be.dot(e.centerOf(_).sub(g),A);y>w&&(w=y,E=_)}o[p]=E}const c=new Array(s);for(let p=0;p<s;p++)c[p]=p;c.sort((p,g)=>l[p]!==l[g]?l[p]<l[g]?-1:1:p-g);const f=new Float64Array(s).fill(.6),m=new Float64Array(s);for(let p=0;p<2;p++)for(const g of c){const x=o[g];let u=f[x];if(n.isWater(g))u+=(1-u)*.5,p===1&&(m[g]=1);else{const d=Math.max(0,i[g]-i[x]),v=Math.min(u,u*(.1+d*1.5));p===1&&(m[g]=u*(.6+Math.min(1,d*4))),u-=v}f[g]=u}const h=new Float64Array(s);for(let p=0;p<s;p++){const g=e.centerOf(p);let x=ci(a,g);const u=x.length<1e-9;x=x.normalized();let d=2*m[p],v=2;for(let A=0;A<e.neighborCount(p);A++){const E=e.neighbor(p,A),w=u?0:be.dot(ci(e.centerOf(E).sub(g),g).normalized(),x),R=u?.5:w*w;d+=m[E]*R,v+=R}h[p]=d/v*.75+r[p]*.25}return h}function Xg(n,e){if(Og(e),n=n>>>0,e.topology==="sphere")return Gg(n,e);const t=fr.plane(n,e.width,e.height,e.topology,e.cellShape),i=e.width,r=e.width*e.height,s=new fs(n);new gn(s,e.octaves,e.persistence,e.lacunarity);const a=new gn(s,e.octaves,e.persistence,e.lacunarity),o=new gn(s,3,.5,2),l=s.nextUInt(),c=Cc(t,e),f=new Float64Array(r);for(let E=0;E<e.height;E++)for(let w=0;w<e.width;w++)f[E*i+w]=Dn(a,t,e.moistureFrequency*c,w,E);const m=Ig(t,e),h=ki(m),p=ki(f);t.elevation.set(h),t.moisture.set(p),t.seaLevel=ao(h,e.seaRatio);const g=[];for(let E=0;E<r;E++)h[E]>=t.seaLevel&&g.push(E);const x=vs(g,h,1-e.mountainRatio),u=vs(g,h,1-e.mountainRatio-e.hillsRatio);for(let E=0;E<r;E++)t.landform[E]=h[E]<t.seaLevel?st.Lake:h[E]>=x?st.Mountain:h[E]>=u?st.Hills:st.Plain;t.tileMeters=e.tileKilometers*1e3,t.altitude=Ac(t.seaLevel,u,x,e);const d=[],v=E=>{E<0||t.landform[E]!==st.Lake||(t.landform[E]=st.Sea,d.push(E))};for(let E=0;E<e.height;E++)for(let w=0;w<e.width;w++)t.onEdge(w,E)&&v(E*i+w);for(let E=0;E<d.length;E++){const w=d[E];if(t.isHexPlane){for(let R=0;R<6;R++)v(t.neighborAt(w,R));continue}v(t.neighbor(w,1,0)),v(t.neighbor(w,-1,0)),v(t.neighbor(w,0,1)),v(t.neighbor(w,0,-1))}gs(t,e.inlandSeaTiles);const A=ki(Ng(t,e,m,f));wc(A,e.rainLevel),t.moisture.set(A);for(let E=0;E<e.height;E++)for(let w=0;w<e.width;w++){const R=E*i+w;let _=e.coldTemperature+(e.warmTemperature-e.coldTemperature)*Pc(t,e,E)+e.temperatureStep*e.temperatureLevel;_-=e.lapseRatePerKm*Math.max(0,t.altitude.meters(h[R]))/1e3,_+=e.temperatureNoise*(Dn(o,t,e.temperatureFrequency*c,w,E)*2-1),t.temperature[R]=qt(_*10)}return Rc(t,l,e.volcanoRatio),Dc(t,e,e.lakeDepth),gs(t,e.inlandSeaTiles),t.biomes=mc(e.biomeSet),t.reclassify(),t}function Ac(n,e,t,i){const r=new vg;return r.seaLevel=n,r.hillsLevel=Math.max(e,n),r.mountainLevel=Math.max(t,n),r.plainTopMeters=i.plainTopMeters,r.hillsTopMeters=i.hillsTopMeters,r.peakMeters=i.peakMeters,r.seaDepthMeters=i.seaDepthMeters,r}function wc(n,e){if(e===0)return;const t=qg(e);for(let i=0;i<n.length;i++)n[i]=qt(ai*Math.pow(n[i]/ai,t))}function qg(n){return n<=-2?2.2:n===-1?1.4:n===0?1:n===1?.78:.62}function Rc(n,e,t){const i=qt(t*1e4);for(let r=0;r<n.landform.length;r++)n.landform[r]===st.Mountain&&(n.volcanic[r]=Yg(r,e)%1e4<i?1:0)}function Dn(n,e,t,i,r){const s=1/Math.max(e.periodX,e.periodY),a=e.centerX(i,r)*s,o=e.centerY(r)*s;if(!e.wrapsX)return n.sample(a*t,o*t);const l=Math.max(1,qt(t*e.periodX*s)),c=l/(e.periodX*s);return n.samplePeriodic(a*c,o*c,l,0)}function Cc(n,e){return n.isHexPlane?Math.max(n.periodX,n.periodY)*ds*e.tileKilometers/6e3:Math.max(n.width,n.height)*e.tileKilometers/6e3}function xs(n,e){return qt(n*e.insideCount/1536)}function Pc(n,e,t){if(e.temperatureGradient==="None")return .5;const i=n.height>1?t/(n.height-1):.5;return e.temperatureGradient==="NorthCold"?1-i:e.temperatureGradient==="SouthCold"?i:1-Math.abs(2*i-1)}function Yg(n,e){let t=(Math.imul(n,2654435761)^e)>>>0;return t=(t^t>>>16)>>>0,t=Math.imul(t,2246822507)>>>0,t=(t^t>>>13)>>>0,t=Math.imul(t,3266489909)>>>0,(t^t>>>16)>>>0}function Kg(n){return n.tile==="hex"?n.neighborSlots:8}function Lc(n,e,t){if(n.tile==="hex")return n.neighborAt(e,t);const i=t<4?t:t+1;return n.neighbor(e,i%3-1,Math.trunc(i/3)-1)}function Dc(n,e,t){const i=n.width*n.height,r=new Int32Array(i).fill(-1),s=new Uint8Array(i),a=[],o=new Int32Array(i),l=new yg;for(let h=0;h<i;h++){const p=h%n.width,g=Math.trunc(h/n.width);(n.landform[h]===st.Sea||n.onEdge(p,g))&&(s[h]=1,o[h]=n.elevation[h],l.push(o[h],h))}if(l.size===0){let h=0;for(let p=1;p<i;p++)n.elevation[p]<n.elevation[h]&&(h=p);s[h]=1,o[h]=n.elevation[h],l.push(o[h],h)}const c=Kg(n);for(;l.size>0;){const[h,p]=l.pop();n.landform[p]!==st.Sea&&a.push(p);for(let g=0;g<c;g++){const x=Lc(n,p,g);x<0||s[x]||(s[x]=1,o[x]=Math.max(n.elevation[x],h),r[x]=p,l.push(o[x],x))}}const f=new Int32Array(i),m=new Int32Array(i).fill(-1);for(let h=0;h<a.length;h++)m[a[h]]=h;Ic(n,e,a,r,f);for(let h=0;h<2;h++){for(let p=0;p<a.length;p++){const g=a[p];let x=r[g],u=x<0?-1:m[x]<0?Number.MAX_VALUE:f[x];for(let d=0;d<c;d++){const v=Lc(n,g,d);if(v<0||v===g||o[v]>o[g]||m[v]>=0&&m[v]>=p)continue;const A=m[v]<0?Number.MAX_VALUE:f[v];(A>u||A===u&&v<x)&&(x=v,u=A)}r[g]=x}Ic(n,e,a,r,f)}for(let h=0;h<i;h++)n.isWater(h)||o[h]-n.elevation[h]<t||f[h]<=0||(n.landform[h]=st.Lake);n.riverFlow=e.riverFlow,n.greatRiverFlow=e.greatRiverFlow,n.riverTo=r,n.flow=f}function Ic(n,e,t,i,r){const s=new Float64Array(r.length);for(let a=t.length-1;a>=0;a--){const o=t[a],l=e.rainMin+qt(n.moisture[o]*1e3/ai*e.rainPerMoist),c=Math.max(e.evapMin,e.evapBase+e.evapPerDegree*qt(n.temperature[o]/10)),f=Math.max(0,s[o]+l-c);r[o]=Math.min(ro,f),i[o]>=0&&(s[i[o]]+=f)}}function ki(n){const e=n.length,t=new Array(e);for(let r=0;r<e;r++)t[r]=r;t.sort((r,s)=>n[r]!==n[s]?n[r]<n[s]?-1:1:r-s);const i=new Int32Array(e);for(let r=0;r<e;r++)i[t[r]]=e>1?Math.trunc(r*ai/(e-1)):0;return i}function ao(n,e){const t=Int32Array.from(n).sort(),i=qt(e*t.length);return i>=t.length?ro:t[Math.max(i,0)]}function vs(n,e,t){if(n.length===0)return ro;const i=new Int32Array(n.length);for(let r=0;r<i.length;r++)i[r]=e[n[r]];return ao(i,t)}class Nc{topology;cellShape;seed;settings;width;height;divisions;periodX;neighborSpacing;neighborSpacingMeters;static HEIGHT_MAX=ai;seaLevel;biomes;altitude;riverFlow;greatRiverFlow;cellCount;nbStart;nb;sides;centers;cornerList;grid;constructor(e,t){this.grid=e,this.settings={...t},this.topology=t.topology,this.cellShape=t.cellShape,this.seed=e.seed;const i=e.width*e.height;this.cellCount=i,this.divisions=e.sphere!==null?e.sphere.frequency:0,this.width=e.sphere!==null?0:e.width,this.height=e.sphere!==null?0:e.height,this.periodX=e.wrapsX?e.periodX:0,this.neighborSpacing=e.sphere!==null?e.sphere.meanSpacing:1;const r=t.tileKilometers*1e3;this.neighborSpacingMeters=e.sphere!==null?r*Math.sqrt(e.sphere.count/(4*Math.PI))*e.sphere.meanSpacing:e.isHexPlane?r*ds:r,this.seaLevel=e.seaLevel,this.biomes=e.biomes,this.altitude=e.altitude,this.riverFlow=e.riverFlow,this.greatRiverFlow=e.greatRiverFlow,this.nbStart=new Int32Array(i+1);const s=[];for(let a=0;a<i;a++){this.nbStart[a]=s.length;for(let o=0;o<e.neighborSlots;o++){const l=e.neighborAt(a,o);if(l<0||l===a)continue;let c=!1;for(let f=this.nbStart[a];f<s.length;f++)if(s[f]===l){c=!0;break}c||s.push(l)}}this.nbStart[i]=s.length,this.nb=Int32Array.from(s),this.sides=new Uint8Array(i),this.centers=new Array(i),this.cornerList=new Array(i);for(let a=0;a<i;a++){const o=a%e.width,l=Math.trunc(a/e.width);if(e.sphere!==null)this.sides[a]=e.sphere.neighborCount(a),this.centers[a]=e.sphere.centerOf(a),this.cornerList[a]=e.sphere.corners(a);else if(e.isHexPlane){this.sides[a]=6;const c=e.centerX(o,l),f=e.centerY(l);this.centers[a]=new be(c,f,0);const m=[];for(let h=0;h<6;h++){const[p,g]=wg(h);m.push(new be(c+p,f+g,0))}this.cornerList[a]=m}else this.sides[a]=4,this.centers[a]=new be(o+.5,l+.5,0),this.cornerList[a]=[new be(o,l,0),new be(o+1,l,0),new be(o+1,l+1,0),new be(o,l+1,0)]}}neighborCount(e){return this.nbStart[e+1]-this.nbStart[e]}neighbor(e,t){return this.nb[this.nbStart[e]+t]}neighbors(e){return Array.from(this.nb.subarray(this.nbStart[e],this.nbStart[e+1]))}areNeighbors(e,t){for(let i=this.nbStart[e];i<this.nbStart[e+1];i++)if(this.nb[i]===t)return!0;return!1}distance(e,t){return this.grid.distance(e,t)}sidesOf(e){return this.sides[e]}isPentagon(e){return this.topology==="sphere"&&this.sides[e]===5}center(e){return this.centers[e]}corners(e){return this.cornerList[e]}gridCoord(e){return this.topology==="sphere"?[-1,-1]:[e%this.width,Math.trunc(e/this.width)]}cellAt(e,t){return this.topology==="sphere"?-1:this.grid.index(e,t)}elevation(e){return this.grid.elevation[e]}elevationMeters(e){return this.altitude.meters(this.grid.elevation[e])}temperature10(e){return this.grid.temperature[e]}temperatureC(e){return this.grid.temperature[e]/10}moisture(e){return this.grid.moisture[e]}landform(e){return this.grid.landform[e]}isWater(e){return this.grid.isWater(e)}volcanic(e){return this.grid.volcanic[e]===1}biomeIndex(e){return this.grid.biome[e]}biome(e){const t=this.grid.biome[e];return t>=0?this.biomes.biomes[t]:null}biomeId(e){const t=this.grid.biome[e];return t>=0?this.biomes.biomes[t].id:null}riverTo(e){return this.grid.riverTo!==null?this.grid.riverTo[e]:-1}flow(e){return this.grid.flow!==null?this.grid.flow[e]:0}river(e){return this.grid.river(e)}get pentagonCount(){let e=0;for(let t=0;t<this.cellCount;t++)this.isPentagon(t)&&e++;return e}biomeCounts(){const e=this.biomes.biomes.length,t=new Array(e+2).fill(0);for(let r=0;r<this.cellCount;r++){const s=this.grid.biome[r];t[s>=0?s:this.grid.landform[r]===st.Sea?e:e+1]++}const i=this.biomes.biomes.map((r,s)=>[r.id,t[s]]);return i.push(["sea",t[e]],["lake",t[e+1]]),i}}function Uc(n,e){const t={...n};return new Nc(Xg(e>>>0,t),t)}const Zg=1;function Vi(n){if(!Number.isFinite(n))throw new RangeError("JSON に書けない数: "+n);if(n===0)return"0.0";const[e,t]=n.toExponential().split("e"),i=e.startsWith("-"),r=e.replace("-","").replace(".",""),s=parseInt(t,10),a=r.length<=15?15:r.length;let o;if(s>-5&&s<a)if(s>=0){const l=r.length>s+1?r.slice(0,s+1):r.padEnd(s+1,"0"),c=r.length>s+1?r.slice(s+1):"";o=l+"."+(c===""?"0":c)}else o="0."+"0".repeat(-s-1)+r;else{const l=r.length>1?r[0]+"."+r.slice(1):r,c=Math.abs(s);o=l+"e"+(s<0?"-":"+")+(c<10?"0"+c:String(c))}return i?"-"+o:o}function rn(n){let e='"';for(const t of n){const i=t.charCodeAt(0);t==='"'?e+='\\"':t==="\\"?e+="\\\\":t===`
`?e+="\\n":t==="\r"?e+="\\r":t==="	"?e+="\\t":i<32?e+="\\u"+i.toString(16).padStart(4,"0"):e+=t}return e+'"'}function Fc(n){return"["+Vi(n.x)+", "+Vi(n.y)+", "+Vi(n.z)+"]"}function $g(n){const e=[];e.push(`{
`),e.push('  "formatVersion": '+Zg+`,
`),e.push('  "topology": '+rn(n.topology)+`,
`),e.push('  "cellShape": '+rn(n.cellShape)+`,
`),e.push('  "seed": '+n.seed+`,
`),e.push('  "parameters": {'),zg(n.settings).forEach(([i,r],s)=>{const a=typeof r=="string"?rn(r):Bg.has(i)?String(r):Vi(r);e.push((s>0?", ":" ")+rn(i)+": "+a)}),e.push(` },
`),e.push('  "cellCount": '+n.cellCount+`,
`),e.push('  "coordinates": '+rn(n.topology==="sphere"?"unitSphere":n.cellShape==="hex"?"hexSpacing":"cellUnit")+`,
`),e.push('  "wrapX": '+(n.periodX>0?Vi(n.periodX):"null")+`,
`),e.push('  "heightMax": '+Nc.HEIGHT_MAX+`,
`),e.push('  "seaLevel": '+n.seaLevel+`,
`),e.push('  "biomeSet": '+rn(n.biomes.id)+`,
`),e.push('  "biomes": ['),n.biomes.biomes.forEach((i,r)=>{e.push((r>0?", ":"")+'{ "id": '+rn(i.id)+', "name": '+rn(i.name)+', "color": '+rn(i.color)+" }")}),e.push(`],
`),e.push(`  "cells": [
`);for(let i=0;i<n.cellCount;i++){let r='    { "id": '+i;r+=', "center": '+Fc(n.center(i)),r+=', "sides": '+n.sidesOf(i),r+=', "neighbors": ['+n.neighbors(i).join(", ")+"]",r+=', "elevation": '+n.elevation(i),r+=', "temperature": '+Vi(n.temperatureC(i)),r+=', "moisture": '+n.moisture(i);const s=n.biomeId(i);if(r+=', "biome": '+(s!==null?rn(s):"null"),r+=', "landform": '+rn(fc(n.landform(i))),r+=', "elevationMeters": '+n.elevationMeters(i),r+=', "volcanic": '+(n.volcanic(i)?"true":"false"),r+=', "river": '+n.river(i),r+=', "riverTo": '+n.riverTo(i),r+=', "flow": '+n.flow(i),n.topology!=="sphere"){const[a,o]=n.gridCoord(i);r+=', "grid": ['+a+", "+o+"]"}r+=', "corners": ['+n.corners(i).map(Fc).join(", ")+"] }",i<n.cellCount-1&&(r+=","),e.push(r+`
`)}return e.push(`  ]
`),e.push(`}
`),e.join("")}const Jg={planeScale:1,sphereRadius:20,wrapCylinder:!1,heightScale:10,edgeDarken:.12,wallDarken:.35},Qg=new Oe("#2C5A8A"),jg=new Oe("#1D3F6A"),e_=new Oe("#4C8CC0"),Oc=new Map;function t_(n,e){const t=n.landform(e);if(t===st.Lake)return e_;if(t===st.Sea){const s=n.seaLevel>0?Math.min(1,Math.max(0,(n.seaLevel-n.elevation(e))/n.seaLevel)):0;return Qg.clone().lerp(jg,s)}const i=n.biome(e).color;let r=Oc.get(i);return r||(r=new Oe(i),Oc.set(i,r)),r}function Bc(n,e,t){return t.heightScale<=0||n.isWater(e)?0:Math.max(0,n.elevationMeters(e))/n.neighborSpacingMeters*t.heightScale}function hi(n,e,t,i,r=new V){if(n.topology==="sphere"){const s=i.sphereRadius*(1+t*n.neighborSpacing);return r.set(e.x*s,e.z*s,-e.y*s)}if(n.topology==="cylinder"&&i.wrapCylinder){const s=n.periodX/(2*Math.PI)+t,a=2*Math.PI*e.x/n.periodX;return r.set(s*Math.sin(a),e.y,s*Math.cos(a)).multiplyScalar(i.planeScale)}return r.set(e.x,t,-e.y).multiplyScalar(i.planeScale)}function n_(n,e,t){return n.topology==="sphere"?e.clone().normalize():n.topology==="cylinder"&&t.wrapCylinder?new V(e.x,0,e.z).normalize():new V(0,1,0)}function i_(n,e){if(n.topology==="sphere")return{center:new V,radius:e.sphereRadius,round:!0};const t=n.cellShape==="hex"?n.height*.8660254:n.height,i=n.cellShape==="hex"?n.width+.5:n.width;if(n.topology==="cylinder"&&e.wrapCylinder){const r=n.periodX/(2*Math.PI);return{center:new V(0,t/2,0).multiplyScalar(e.planeScale),radius:Math.max(r,t/2)*e.planeScale,round:!0}}return{center:new V(i/2,0,-t/2).multiplyScalar(e.planeScale),radius:Math.max(i,t)/2*e.planeScale,round:!1}}function r_(n,e,t,i){const r=n.center(e),s=t.x+i.x-r.x,a=t.y+i.y-r.y,o=t.z+i.z-r.z;let l=-1,c=Number.MAX_VALUE;for(let m=0;m<n.neighborCount(e);m++){const h=n.neighbor(e,m),p=n.center(h);let g=p.x-s;n.periodX>0&&(g%=n.periodX,g>n.periodX/2?g-=n.periodX:g<-n.periodX/2&&(g+=n.periodX));const x=p.y-a,u=p.z-o,d=g*g+x*x+u*u;d<c&&(c=d,l=h)}const f=n.neighborSpacing*.5;return c<f*f?l:-1}function s_(n,e){const t=n.cellCount,i=new Float64Array(t);for(let x=0;x<t;x++)i[x]=Bc(n,x,e);const r=[],s=[],a=[],o=[],l=new V,c=new V,f=new V,m=new V,h=(x,u)=>(r.push(x.x,x.y,x.z),s.push(u.r,u.g,u.b),r.length/3-1),p=(x,u,d,v,A)=>{c.fromArray(r,x*3),f.fromArray(r,u*3),m.fromArray(r,d*3),f.sub(c).cross(m.sub(c)).dot(v)<0?a.push(x,d,u):a.push(x,u,d),o.push(A)};for(let x=0;x<t;x++){const u=n.corners(x),d=t_(n,x),v=d.clone().multiplyScalar(1-e.edgeDarken),A=d.clone().multiplyScalar(1-e.wallDarken),E=i[x],w=hi(n,n.center(x),E,e,new V),R=n_(n,w,e),_=h(w,d),y=r.length/3;for(const k of u)h(hi(n,k,E,e,l),v);for(let k=0;k<u.length;k++)p(_,y+k,y+(k+1)%u.length,R,x);if(!(E<=0))for(let k=0;k<u.length;k++){const U=u[k],z=u[(k+1)%u.length],K=r_(n,x,U,z),D=K>=0?i[K]:0;if(D>=E)continue;const T=hi(n,U,E,e,new V),O=hi(n,z,E,e,new V),W=T.clone().add(O).multiplyScalar(.5).sub(w),G=h(T,A);h(O,A),h(hi(n,z,D,e,l),A),h(hi(n,U,D,e,l),A),p(G,G+1,G+2,W,x),p(G,G+2,G+3,W,x)}}const g=new dn;return g.setAttribute("position",new Vt(r,3)),g.setAttribute("color",new Vt(s,3)),g.setIndex(a),g.computeVertexNormals(),g.computeBoundingSphere(),{geometry:g,triCell:Int32Array.from(o)}}function a_(n,e,t){const i=Bc(n,e,t)+.04;return n.corners(e).map(r=>hi(n,r,i,t,new V))}const Ms=[{label:"平面・矩形",topology:"plane",cellShape:"square"},{label:"平面・ヘクス",topology:"plane",cellShape:"hex"},{label:"円筒・矩形",topology:"cylinder",cellShape:"square"},{label:"円筒・ヘクス",topology:"cylinder",cellShape:"hex"},{label:"球・ヘクス",topology:"sphere",cellShape:"hex"}],zc={sea:"海",lake:"湖",plain:"平地",hills:"丘陵",mountain:"山"},dt=n=>document.getElementById(n),De={combos:dt("combos"),seed:dt("seed"),random:dt("random"),width:dt("width"),height:dt("height"),divisions:dt("divisions"),sizePlane:dt("sizePlane"),sizeSphere:dt("sizeSphere"),sphereCells:dt("sphereCells"),generate:dt("generate"),exportBtn:dt("export"),status:dt("status"),wrapRow:dt("wrapRow"),wrap:dt("wrap"),scale:dt("scale"),scaleOut:dt("scaleOut"),resetView:dt("resetView"),cellInfo:dt("cellInfo"),legend:dt("legend"),view:dt("view")};let Wi=3,ke=null,Gc=new Int32Array(0);const sn={...Jg};let Xi=-1;const In=new ig({antialias:!0});In.setPixelRatio(Math.min(window.devicePixelRatio,2)),De.view.appendChild(In.domElement);const Kn=new mu;Kn.background=new Oe("#12151c");const Ot=new nn(40,1,.1,5e3);Kn.add(Ot),Kn.add(new Fu(16777215,4477030,1.4));const Ss=new zu(16777215,1.6);Ss.position.set(.4,.9,.6),Ot.add(Ss),Ot.add(Ss.target),Ss.target.position.set(0,0,-1);const ui=new sg(Ot,In.domElement);ui.enableDamping=!0;const o_=new Iu({vertexColors:!0,flatShading:!0});let Zn=null,qi=null;function Hc(){const n=De.view.clientWidth,e=De.view.clientHeight;In.setSize(n,e,!1),Ot.aspect=n/Math.max(e,1),Ot.updateProjectionMatrix()}new ResizeObserver(Hc).observe(De.view),In.setAnimationLoop(()=>{ui.update(),In.render(Kn,Ot)});function l_(){const n=Ms[Wi];return bc({topology:n.topology,cellShape:n.cellShape,width:Math.trunc(Number(De.width.value)),height:Math.trunc(Number(De.height.value)),sphereDivisions:Math.trunc(Number(De.divisions.value))})}function c_(){const n=Math.trunc(Number(De.seed.value));return Number.isFinite(n)?Math.min(4294967295,Math.max(0,n))>>>0:0}function gr(){De.status.textContent="生成中…",De.generate.disabled=!0,setTimeout(()=>{try{const n=performance.now();ke=Uc(l_(),c_());const e=performance.now();Xi=xr>=0&&xr<ke.cellCount?xr:-1,xr=-1,oo(),lo(),Vc(),uo(),De.status.textContent=`${ke.cellCount.toLocaleString()} セル（生成 ${(e-n).toFixed(0)} ms、描画の準備 ${(performance.now()-e).toFixed(0)} ms）`}catch(n){De.status.textContent="設定が正しくない："+(n instanceof Error?n.message:String(n))}finally{De.generate.disabled=!1}},20)}function oo(){if(Zn&&(Kn.remove(Zn),Zn.geometry.dispose(),Zn=null),!ke)return;const n=s_(ke,sn);Gc=n.triCell,Zn=new qn(n.geometry,o_),Kn.add(Zn),kc()}function lo(){if(!ke)return;const{center:n,radius:e,round:t}=i_(ke,sn);ui.target.copy(n);const i=e*(t?3.2:2.9),r=ba.degToRad(t?15:50);Ot.position.set(n.x,n.y+Math.sin(r)*i,n.z+Math.cos(r)*i),Ot.near=Math.max(.05,i*.005),Ot.far=i*20+100,Ot.updateProjectionMatrix(),ui.update()}function kc(){if(qi&&(Kn.remove(qi),qi.geometry.dispose(),qi=null),!ke||Xi<0)return;const n=new dn().setFromPoints(a_(ke,Xi,sn));qi=new wu(n,new fl({color:16769126})),Kn.add(qi)}function Vc(){if(!ke||Xi<0){De.cellInfo.textContent="クリックで選ぶ",De.cellInfo.classList.remove("selected");return}const n=Xi,e=ke.biome(n),t=fc(ke.landform(n)),i=ke.topology==="sphere"?ke.isPentagon(n)?"五角形":"六角形":`列 ${ke.gridCoord(n)[0]}・行 ${ke.gridCoord(n)[1]}`,r=[ke.volcanic(n)?"火山":"",ke.river(n)===2?"大河":ke.river(n)===1?"川":""].filter(Boolean).join("・");De.cellInfo.textContent=`セル ${n}（${i}）
バイオーム：${e?`${e.name}（${e.id}）`:zc[t]}
起伏：${zc[t]}${r?"・"+r:""}
標高：${ke.elevationMeters(n).toLocaleString()} m（順位 ${ke.elevation(n)}）
気温：${ke.temperatureC(n).toFixed(1)} ℃　湿度：${(ke.moisture(n)/100).toFixed(1)} %
隣：${ke.neighbors(n).join(", ")}`,De.cellInfo.classList.add("selected")}function h_(){if(!ke)return;const n=new Blob([$g(ke)],{type:"application/json"}),e=URL.createObjectURL(n),t=document.createElement("a");t.href=e,t.download=`map_${ke.topology}_${ke.cellShape}_${ke.seed}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),De.status.textContent=`書き出した：${t.download}`}function Wc(){De.combos.replaceChildren(...Ms.map((n,e)=>{const t=document.createElement("button");return t.type="button",t.textContent=n.label,t.setAttribute("role","radio"),t.setAttribute("aria-checked",String(e===Wi)),t.addEventListener("click",()=>{Wi=e,Wc(),co(),gr()}),t}))}function co(){const n=Ms[Wi];De.sizePlane.hidden=n.topology==="sphere",De.sizeSphere.hidden=n.topology!=="sphere",De.wrapRow.hidden=n.topology!=="cylinder";const e=Math.trunc(Number(De.divisions.value));De.sphereCells.textContent=e>=2?`${(10*e*e+2).toLocaleString()} セル`:""}function u_(){const e=Uc(bc({topology:"plane",width:3,height:3}),1).biomes.biomes.map(t=>[t.name,t.color]);e.push(["海","#"+new Oe("#2C5A8A").getHexString()],["湖","#4C8CC0"]),De.legend.replaceChildren(...e.map(([t,i])=>{const r=document.createElement("li"),s=document.createElement("span");return s.className="sw",s.style.background=i,r.append(s,t),r}))}function Xc(n){sn.heightScale=n,De.scale.value=String(n),De.scaleOut.textContent=n.toFixed(1),oo(),uo()}De.generate.addEventListener("click",gr),De.exportBtn.addEventListener("click",h_),De.random.addEventListener("click",()=>{De.seed.value=String(Math.floor(Math.random()*4294967296)),gr()}),De.divisions.addEventListener("input",co);for(const n of[De.seed,De.width,De.height,De.divisions])n.addEventListener("keydown",e=>{e.key==="Enter"&&gr()});De.wrap.addEventListener("change",()=>{sn.wrapCylinder=De.wrap.checked,oo(),lo(),uo()}),De.scale.addEventListener("input",()=>Xc(Number(De.scale.value))),document.querySelectorAll("[data-scale]").forEach(n=>n.addEventListener("click",()=>Xc(Number(n.dataset.scale)))),De.resetView.addEventListener("click",lo);const qc=new Hu;let _r=null;In.domElement.addEventListener("pointerdown",n=>{_r=[n.clientX,n.clientY]}),In.domElement.addEventListener("pointerup",n=>{if(!_r||!Zn||!ke)return;const e=Math.hypot(n.clientX-_r[0],n.clientY-_r[1]);if(_r=null,e>4)return;const t=In.domElement.getBoundingClientRect(),i=new Ne((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1);qc.setFromCamera(i,Ot);const r=qc.intersectObject(Zn)[0];Xi=r&&r.faceIndex!=null?Gc[r.faceIndex]:-1,kc(),Vc()});let xr=-1,ho=0;function d_(){const n=new URLSearchParams(location.search),e=r=>n.has(r)&&Number.isFinite(Number(n.get(r)))?Number(n.get(r)):null,t=e("combo");t!==null&&t>=0&&t<Ms.length&&(Wi=Math.trunc(t)),e("seed")!==null&&(De.seed.value=String(e("seed"))),e("w")!==null&&(De.width.value=String(e("w"))),e("h")!==null&&(De.height.value=String(e("h"))),e("m")!==null&&(De.divisions.value=String(e("m")));const i=e("scale");i!==null&&(sn.heightScale=Math.min(30,Math.max(0,i)),De.scale.value=String(sn.heightScale),De.scaleOut.textContent=sn.heightScale.toFixed(1)),n.get("wrap")==="1"&&(sn.wrapCylinder=!0,De.wrap.checked=!0),xr=e("select")??-1,ho=e("yaw")??0}function uo(){if(!ke)return;const n=new URLSearchParams;n.set("combo",String(Wi)),n.set("seed",String(ke.seed)),ke.topology==="sphere"?n.set("m",String(ke.divisions)):(n.set("w",String(ke.width)),n.set("h",String(ke.height))),n.set("scale",String(sn.heightScale)),sn.wrapCylinder&&ke.topology==="cylinder"&&n.set("wrap","1");try{history.replaceState(null,"","?"+n.toString())}catch{}}d_(),Wc(),co(),u_(),Hc(),gr(),ho!==0&&setTimeout(()=>{const n=Ot.position.clone().sub(ui.target);n.applyAxisAngle(new V(0,1,0),ba.degToRad(ho)),Ot.position.copy(ui.target).add(n),ui.update()},60)})();
