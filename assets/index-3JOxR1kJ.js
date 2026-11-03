/*! three.js r187 (0.187.0) | Copyright © 2010-2026 three.js authors | MIT License | 全文は THIRD-PARTY-LICENSES.md */
(function(){"use strict";var bo=document.createElement("style");bo.textContent=`:root{--bg: #12151c;--panel: #1b1f29;--line: #2c3240;--text: #e4e7ee;--muted: #9aa3b5;--accent: #5b9bd5;--accent-text: #0b1420;color-scheme:dark}*{box-sizing:border-box}[hidden]{display:none!important}html,body{margin:0;height:100%;background:var(--bg);color:var(--text);font:14px/1.5 system-ui,Segoe UI,Hiragino Sans,Yu Gothic UI,sans-serif}body{display:flex}#panel{width:320px;flex:none;height:100%;overflow-y:auto;padding:12px 16px 16px;background:var(--panel);border-right:1px solid var(--line)}#view{flex:1;position:relative;min-width:0}#view canvas{display:block;width:100%;height:100%}h1{font-size:18px;margin:0 0 8px}h2{font-size:12px;margin:0 0 6px;color:var(--muted);font-weight:600;letter-spacing:.05em}section{padding:10px 0;border-bottom:1px solid var(--line)}.row{display:flex;align-items:center;gap:8px;margin:6px 0;flex-wrap:wrap}.row label{display:flex;align-items:center;gap:6px}.buttons button{flex:1}input[type=number]{width:7em;padding:4px 6px;background:var(--bg);color:var(--text);border:1px solid var(--line);border-radius:4px}#seed{width:9em}input[type=range]{flex:1;min-width:120px;accent-color:var(--accent)}button{padding:5px 10px;background:#262c38;color:var(--text);border:1px solid var(--line);border-radius:4px;cursor:pointer}button:hover{border-color:var(--accent)}button:focus-visible,input:focus-visible{outline:2px solid var(--accent);outline-offset:1px}button.primary,.combos button[aria-checked=true]{background:var(--accent);color:var(--accent-text);border-color:var(--accent)}.combos{display:grid;grid-template-columns:1fr 1fr;gap:6px}.muted{color:var(--muted)}.small{font-size:12px}output{font-variant-numeric:tabular-nums}.cellInfo{white-space:pre-line;font-size:13px}.cellInfo.selected{color:var(--text)}#status{white-space:pre-line}.legend{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:2px 8px;font-size:12px}.legend li{display:flex;align-items:center;gap:6px}.legend .sw{width:12px;height:12px;border-radius:2px;border:1px solid #0006;flex:none}@media(max-width:720px){body{flex-direction:column}#panel{width:100%;height:auto;max-height:45%;border-right:0;border-bottom:1px solid var(--line)}#view{min-height:55%}}
/*$vite$:1*/`,document.head.appendChild(bo);const Ps="187",xi={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fh=0,To=1,ph=2,yr=1,mh=2,$i=3,ei=0,Ut=1,Sn=2,Mi=0,Ki=1,Ao=2,wo=3,Ro=4,gh=5,Si=100,_h=101,xh=102,vh=103,Mh=104,Sh=200,Eh=201,yh=202,bh=203,Co=204,Po=205,Th=206,Ah=207,wh=208,Rh=209,Ch=210,Ph=211,Lh=212,Dh=213,Ih=214,Ls=0,Ds=1,Is=2,Zi=3,Ns=4,Us=5,Fs=6,Os=7,Bs=0,Nh=1,Uh=2,En=0,Lo=1,Do=2,Io=3,No=4,Uo=5,Fo=6,Oo=7,Bo=300,Ei=301,Ji=302,zs=303,Gs=304,Hs=1e3,yn=1001,ks=1002,Tt=1003,Fh=1004,br=1005,Ft=1006,Vs=1007,Fn=1008,Gt=1009,zo=1010,Go=1011,Qi=1012,Ws=1013,ln=1014,cn=1015,hn=1016,Xs=1017,qs=1018,yi=1020,Ho=35902,ko=35899,Vo=1021,Wo=1022,un=1023,On=1026,Bn=1027,Xo=1028,Ys=1029,ti=1030,$s=1031,Ks=1033,Tr=33776,Ar=33777,wr=33778,Rr=33779,Zs=35840,Js=35841,Qs=35842,js=35843,ea=36196,ta=37492,na=37496,ia=37488,ra=37489,Cr=37490,sa=37491,aa=37808,oa=37809,la=37810,ca=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,xa=37820,va=37821,Ma=36492,Sa=36494,Ea=36495,ya=36283,ba=36284,Pr=36285,Ta=36286,Oh=3200,Aa=0,Bh=1,zn="",Vt="srgb",Lr="srgb-linear",Dr="linear",Qe="srgb",wa=7680,zh=519,Gh=512,Hh=513,kh=514,qo=515,Vh=516,Wh=517,Yo=518,$o=519,Xh=35044,Ko="300 es",Qt=2e3,ji=2001;function qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yh(){const n=Ir("canvas");return n.style.display="block",n}const Zo={};function Jo(...n){const e="THREE."+n.shift();console.log(e,...n)}function Qo(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=Qo(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ke(...n){n=Qo(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Nr(...n){const e=n.join(" ");e in Zo||(Zo[e]=!0,De(...n))}function $h(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Kh={[Ls]:Ls,[Is]:Fs,[Ns]:Ns,[Zi]:Us,[Ds]:Ds,[Fs]:Is,[Os]:Os,[Us]:Zi};class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jo=1234567;const er=Math.PI/180,tr=180/Math.PI;function bi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function ke(n,e,t){return Math.max(e,Math.min(t,n))}function Ra(n,e){return(n%e+e)%e}function Zh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Jh(n,e,t){return n!==e?(t-n)/(e-n):0}function nr(n,e,t){return(1-t)*n+t*e}function Qh(n,e,t,i){return nr(n,e,1-Math.exp(-t*i))}function jh(n,e=1){return e-Math.abs(Ra(n,e*2)-e)}function eu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function nu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function iu(n,e){return n+Math.random()*(e-n)}function ru(n){return n*(.5-Math.random())}function su(n){n!==void 0&&(jo=n);let e=jo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function au(n){return n*er}function ou(n){return n*tr}function lu(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function cu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function el(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hu(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),m=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*m,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*m,o*l);break;case"ZXZ":n.set(c*m,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*u,o*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ca(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tl(n,e){if(e.constructor===Float32Array)return n;const t=Ca(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function nl(n,e){if(e.constructor===Float32Array)return n;const t=Ca(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Pa={DEG2RAD:er,RAD2DEG:tr,generateUUID:bi,clamp:ke,euclideanModulo:Ra,mapLinear:Zh,inverseLerp:Jh,lerp:nr,damp:Qh,pingpong:jh,smoothstep:eu,smootherstep:tu,randInt:nu,randFloat:iu,randFloatSpread:ru,seededRandom:su,degToRad:au,radToDeg:ou,isPowerOfTwo:lu,ceilPowerOfTwo:cu,floorPowerOfTwo:el,setQuaternionFromProperEuler:hu,normalize:nl,denormalize:tl};class Ue{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],m=i[r+3],h=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(m!==v||c!==h||l!==p||u!==g){let d=c*h+l*p+u*g+m*v;d<0&&(h=-h,p=-p,g=-g,v=-v,d=-d);let f=1-o;if(d<.9995){const x=Math.acos(d),w=Math.sin(x);f=Math.sin(f*x)/w,o=Math.sin(o*x)/w,c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,m=m*f+v*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+g*o,m=m*f+v*o;const x=1/Math.sqrt(c*c+l*l+u*u+m*m);c*=x,l*=x,u*=x,m*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],m=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*m+c*p-l*h,e[t+1]=c*g+u*h+l*m-o*p,e[t+2]=l*g+u*p+o*h-c*m,e[t+3]=u*g-o*m-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),m=o(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*u*m+l*p*g,this._y=l*p*m-h*u*g,this._z=l*u*g+h*p*m,this._w=l*u*m-h*p*g;break;case"YXZ":this._x=h*u*m+l*p*g,this._y=l*p*m-h*u*g,this._z=l*u*g-h*p*m,this._w=l*u*m+h*p*g;break;case"ZXY":this._x=h*u*m-l*p*g,this._y=l*p*m+h*u*g,this._z=l*u*g+h*p*m,this._w=l*u*m-h*p*g;break;case"ZYX":this._x=h*u*m-l*p*g,this._y=l*p*m+h*u*g,this._z=l*u*g-h*p*m,this._w=l*u*m+h*p*g;break;case"YZX":this._x=h*u*m+l*p*g,this._y=l*p*m+h*u*g,this._z=l*u*g-h*p*m,this._w=l*u*m-h*p*g;break;case"XZY":this._x=h*u*m-l*p*g,this._y=l*p*m-h*u*g,this._z=l*u*g+h*p*m,this._w=l*u*m+h*p*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],m=t[10],h=i+o+m;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),m=2*(s*i-a*t);return this.x=t+c*l+a*m-o*u,this.y=i+c*u+o*l-s*m,this.z=r+c*m+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new W,il=new Hn;class Oe{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],m=i[7],h=i[2],p=i[5],g=i[8],v=r[0],d=r[3],f=r[6],x=r[1],w=r[4],E=r[7],R=r[2],C=r[5],_=r[8];return s[0]=a*v+o*x+c*R,s[3]=a*d+o*w+c*C,s[6]=a*f+o*E+c*_,s[1]=l*v+u*x+m*R,s[4]=l*d+u*w+m*C,s[7]=l*f+u*E+m*_,s[2]=h*v+p*x+g*R,s[5]=h*d+p*w+g*C,s[8]=h*f+p*E+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],m=u*a-o*l,h=o*c-u*s,p=l*s-a*c,g=t*m+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=m*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Da.makeScale(e,t)),this}rotate(e){return Nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return Nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Oe,rl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uu(){const n={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(r.r=bn(r.r),r.g=bn(r.g),r.b=bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zn?Dr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Lr]:{primaries:e,whitePoint:i,transfer:Dr,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}const qe=uu();function bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ti(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ai;class du{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ai===void 0&&(Ai=Ir("canvas")),Ai.width=e.width,Ai.height=e.height;const r=Ai.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ai}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bn(t[i]/255)*255):t[i]=bn(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fu=0;class Ia{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Na(r[a].image)):s.push(Na(r[a]))}else s=Na(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?du.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let pu=0;const Ua=new W;class Dt extends Gn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=yn,r=yn,s=Ft,a=Fn,o=un,c=Gt,l=Dt.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=bi(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null,Dt.DEFAULT_MAPPING=Bo,Dt.DEFAULT_ANISOTROPY=1;class ut{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],m=c[8],h=c[1],p=c[5],g=c[9],v=c[2],d=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(m-v)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(m+v)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,E=(p+1)/2,R=(f+1)/2,C=(u+h)/4,_=(m+v)/4,T=(g+d)/4;return w>E&&w>R?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=C/i,s=_/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=T/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=_/s,r=T/s),this.set(i,r,s,t),this}let x=Math.sqrt((d-g)*(d-g)+(m-v)*(m-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(m-v)/x,this.z=(h-u)/x,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mu extends Gn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Dt({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ia(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends mu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class al extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gu extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class st{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,c,l,u,m,h,p,g,v,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,m,h,p,g,v,d)}set(e,t,i,r,s,a,o,c,l,u,m,h,p,g,v,d){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=m,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/wi.setFromMatrixColumn(e,0).length(),s=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*m,g=o*u,v=o*m;t[0]=c*u,t[4]=-c*m,t[8]=l,t[1]=p+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*m,g=l*u,v=l*m;t[0]=h+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*m,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*m,g=l*u,v=l*m;t[0]=h-v*o,t[4]=-a*m,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*m,g=o*u,v=o*m;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+v,t[1]=c*m,t[5]=v*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-h*m,t[8]=g*m+p,t[1]=m,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*m+g,t[10]=h-v*m}else if(e.order==="XZY"){const h=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-m,t[8]=l*u,t[1]=h*m+v,t[5]=a*u,t[9]=p*m-g,t[2]=g*m-p,t[6]=o*u,t[10]=v*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_u,e,xu)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),kn.crossVectors(i,Ht),kn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),kn.crossVectors(i,Ht)),kn.normalize(),Ur.crossVectors(Ht,kn),r[0]=kn.x,r[4]=Ur.x,r[8]=Ht.x,r[1]=kn.y,r[5]=Ur.y,r[9]=Ht.y,r[2]=kn.z,r[6]=Ur.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],m=i[5],h=i[9],p=i[13],g=i[2],v=i[6],d=i[10],f=i[14],x=i[3],w=i[7],E=i[11],R=i[15],C=r[0],_=r[4],T=r[8],V=r[12],F=r[1],G=r[5],Y=r[9],y=r[13],b=r[2],U=r[6],O=r[10],B=r[14],I=r[3],D=r[7],k=r[11],P=r[15];return s[0]=a*C+o*F+c*b+l*I,s[4]=a*_+o*G+c*U+l*D,s[8]=a*T+o*Y+c*O+l*k,s[12]=a*V+o*y+c*B+l*P,s[1]=u*C+m*F+h*b+p*I,s[5]=u*_+m*G+h*U+p*D,s[9]=u*T+m*Y+h*O+p*k,s[13]=u*V+m*y+h*B+p*P,s[2]=g*C+v*F+d*b+f*I,s[6]=g*_+v*G+d*U+f*D,s[10]=g*T+v*Y+d*O+f*k,s[14]=g*V+v*y+d*B+f*P,s[3]=x*C+w*F+E*b+R*I,s[7]=x*_+w*G+E*U+R*D,s[11]=x*T+w*Y+E*O+R*k,s[15]=x*V+w*y+E*B+R*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],m=e[6],h=e[10],p=e[14],g=e[3],v=e[7],d=e[11],f=e[15],x=c*p-l*h,w=o*p-l*m,E=o*h-c*m,R=a*p-l*u,C=a*h-c*u,_=a*m-o*u;return t*(v*x-d*w+f*E)-i*(g*x-d*R+f*C)+r*(g*w-v*R+f*_)-s*(g*E-v*C+d*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],m=e[9],h=e[10],p=e[11],g=e[12],v=e[13],d=e[14],f=e[15],x=t*o-i*a,w=t*c-r*a,E=t*l-s*a,R=i*c-r*o,C=i*l-s*o,_=r*l-s*c,T=u*v-m*g,V=u*d-h*g,F=u*f-p*g,G=m*d-h*v,Y=m*f-p*v,y=h*f-p*d,b=x*y-w*Y+E*G+R*F-C*V+_*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/b;return e[0]=(o*y-c*Y+l*G)*U,e[1]=(r*Y-i*y-s*G)*U,e[2]=(v*_-d*C+f*R)*U,e[3]=(h*C-m*_-p*R)*U,e[4]=(c*F-a*y-l*V)*U,e[5]=(t*y-r*F+s*V)*U,e[6]=(d*E-g*_-f*w)*U,e[7]=(u*_-h*E+p*w)*U,e[8]=(a*Y-o*F+l*T)*U,e[9]=(i*F-t*Y-s*T)*U,e[10]=(g*C-v*E+f*x)*U,e[11]=(m*E-u*C-p*x)*U,e[12]=(o*V-a*G-c*T)*U,e[13]=(t*G-i*V+r*T)*U,e[14]=(v*w-g*R-d*x)*U,e[15]=(u*R-m*w+h*x)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,m=o+o,h=s*l,p=s*u,g=s*m,v=a*u,d=a*m,f=o*m,x=c*l,w=c*u,E=c*m,R=i.x,C=i.y,_=i.z;return r[0]=(1-(v+f))*R,r[1]=(p+E)*R,r[2]=(g-w)*R,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(h+f))*C,r[6]=(d+x)*C,r[7]=0,r[8]=(g+w)*_,r[9]=(d-x)*_,r[10]=(1-(h+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=wi.set(r[0],r[1],r[2]).length();const o=wi.set(r[4],r[5],r[6]).length(),c=wi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jt.copy(this);const l=1/a,u=1/o,m=1/c;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=m,jt.elements[9]*=m,jt.elements[10]*=m,t.setFromRotationMatrix(jt),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=Qt,c=!1){const l=this.elements,u=2*s/(t-e),m=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===Qt)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ji)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=m,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Qt,c=!1){const l=this.elements,u=2/(t-e),m=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===Qt)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===ji)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=m,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wi=new W,jt=new st,_u=new W(0,0,0),xu=new W(1,1,1),kn=new W,Ur=new W,Ht=new W,ol=new st,ll=new Hn;class Vn{constructor(e=0,t=0,i=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],m=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vu=0;const cl=new W,Ri=new Hn,Tn=new st,Fr=new W,ir=new W,Mu=new W,Su=new Hn,hl=new W(1,0,0),ul=new W(0,1,0),dl=new W(0,0,1),fl={type:"added"},Eu={type:"removed"},Ci={type:"childadded",child:null},Oa={type:"childremoved",child:null};class Mt extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new W,t=new Vn,i=new Hn,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Oe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(hl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ir,Fr,this.up):Tn.lookAt(Fr,ir,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eu),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Su,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const m=c[l];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),m=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Mt.DEFAULT_UP=new W(0,1,0),Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Or extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yu={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const d=t.getJointPose(v,i),f=this._getHandJoint(l,v);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const u=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],h=u.position.distanceTo(m.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Or;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Br={h:0,s:0,l:0};function za(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=Ra(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=za(a,s,e+1/3),this.g=za(a,s,e),this.b=za(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const i=pl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return qe.workingToColorSpace(Ct.copy(this),e),Math.round(ke(Ct.r*255,0,255))*65536+Math.round(ke(Ct.g*255,0,255))*256+Math.round(ke(Ct.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=u<=.5?m/(a+o):m/(2-a-o),a){case i:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-i)/m+2;break;case s:c=(i-r)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Vt){qe.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Br);const i=nr(Wn.h,Br.h,t),r=nr(Wn.s,Br.s,t),s=nr(Wn.l,Br.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Be;Be.NAMES=pl;class bu extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const en=new W,An=new W,Ga=new W,wn=new W,Pi=new W,Li=new W,ml=new W,Ha=new W,ka=new W,Va=new W,Wa=new ut,Xa=new ut,qa=new ut;class tn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){en.subVectors(r,t),An.subVectors(i,t),Ga.subVectors(e,t);const a=en.dot(en),o=en.dot(An),c=en.dot(Ga),l=An.dot(An),u=An.dot(Ga),m=a*l-o*o;if(m===0)return s.set(0,0,0),null;const h=1/m,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,i),qa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wa,s.x),a.addScaledVector(Xa,s.y),a.addScaledVector(qa,s.z),a}static isFrontFacing(e,t,i,r){return en.subVectors(i,t),An.subVectors(e,t),en.cross(An).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),An.subVectors(this.a,this.b),en.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,i),Li.subVectors(s,i),Ha.subVectors(e,i);const c=Pi.dot(Ha),l=Li.dot(Ha);if(c<=0&&l<=0)return t.copy(i);ka.subVectors(e,r);const u=Pi.dot(ka),m=Li.dot(ka);if(u>=0&&m<=u)return t.copy(r);const h=c*m-u*l;if(h<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(i).addScaledVector(Pi,a);Va.subVectors(e,s);const p=Pi.dot(Va),g=Li.dot(Va);if(g>=0&&p<=g)return t.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Li,o);const d=u*g-p*m;if(d<=0&&m-u>=0&&p-g>=0)return ml.subVectors(s,r),o=(m-u)/(m-u+(p-g)),t.copy(r).addScaledVector(ml,o);const f=1/(d+v+h);return a=v*f,o=h*f,t.copy(i).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zr.copy(i.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Gr.subVectors(this.max,sr),Di.subVectors(e.a,sr),Ii.subVectors(e.b,sr),Ni.subVectors(e.c,sr),Xn.subVectors(Ii,Di),qn.subVectors(Ni,Ii),ni.subVectors(Di,Ni);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ni.z,ni.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ni.z,0,-ni.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ni.y,ni.x,0];return!Ya(t,Di,Ii,Ni,Gr)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,Di,Ii,Ni,Gr))?!1:(Hr.crossVectors(Xn,qn),t=[Hr.x,Hr.y,Hr.z],Ya(t,Di,Ii,Ni,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new W,new W,new W,new W,new W,new W,new W,new W],nn=new W,zr=new rr,Di=new W,Ii=new W,Ni=new W,Xn=new W,qn=new W,ni=new W,sr=new W,Gr=new W,Hr=new W,ii=new W;function Ya(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ii.fromArray(n,s);const o=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),u=i.dot(ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ft=new W,kr=new Ue;let Tu=0;class ri extends Gn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xh,this.updateRanges=[],this.gpuType=cn,this.version=0,this._normalizationScale=e!==void 0?Ca(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tl(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):nl(e,this.array)}}class gl extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _l extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Au=new rr,ar=new W,$a=new W;class Vr{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Au.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add($a)),this.expandByPoint(ar.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wu=0;const Xt=new st,Ka=new Mt,Ui=new W,kt=new rr,or=new rr,St=new W;class fn extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?_l:gl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(kt.min,or.min),kt.expandByPoint(St),St.addVectors(kt.max,or.max),kt.expandByPoint(St)):(kt.expandByPoint(or.min),kt.expandByPoint(or.max))}kt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)St.fromBufferAttribute(o,l),c&&(Ui.fromBufferAttribute(e,l),St.add(Ui)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ri(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let V=0;V<i.count;V++)o[V]=new W,c[V]=new W;const u=new W,m=new W,h=new W,p=new Ue,g=new Ue,v=new Ue,d=new W,f=new W;function x(V,F,G){l[V]=l[F]=l[G]=1,u.fromBufferAttribute(i,V),m.fromBufferAttribute(i,F),h.fromBufferAttribute(i,G),p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,F),v.fromBufferAttribute(s,G),m.sub(u),h.sub(u),g.sub(p),v.sub(p);const Y=1/(g.x*v.y-v.x*g.y);isFinite(Y)&&(d.copy(m).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(Y),f.copy(h).multiplyScalar(g.x).addScaledVector(m,-v.x).multiplyScalar(Y),o[V].add(d),o[F].add(d),o[G].add(d),c[V].add(f),c[F].add(f),c[G].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let V=0,F=w.length;V<F;++V){const G=w[V],Y=G.start,y=G.count;for(let b=Y,U=Y+y;b<U;b+=3)x(e.getX(b+0),e.getX(b+1),e.getX(b+2))}const E=new W,R=new W,C=new W,_=new W;function T(V){C.fromBufferAttribute(r,V),_.copy(C);const F=o[V];E.copy(F),E.sub(C.multiplyScalar(C.dot(F))).normalize(),R.crossVectors(_,F);const Y=R.dot(c[V])<0?-1:1;a.setXYZW(V,E.x,E.y,E.z,Y)}for(let V=0,F=i.count;V<F;++V)l[V]&&T(V);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,c=new W,l=new W,u=new W,m=new W;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,d),u.subVectors(a,s),m.subVectors(r,s),u.cross(m),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,d),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),m.subVectors(r,s),u.cross(m),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,m=o.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,d=c.length;v<d;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new ri(h,u,m)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,m=l.length;u<m;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let m=0,h=l.length;m<h;m++){const p=l[m];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],m=s[l];for(let h=0,p=m.length;h<p;h++)u.push(m[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new W,Ru=new W,Cu=new Oe;class Cn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Za.subVectors(i,t).cross(Ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Za),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cu.getNormalMatrix(e),r=this.coplanarPoint(Za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Pu=0;class Fi extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Ki,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Po,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Cn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pn=new W,Ja=new W,Wr=new W,Xr=new W;class qr{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ja.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Xr.dot(this.direction),c=-Xr.dot(Wr),l=Xr.lengthSq(),u=Math.abs(1-a*a);let m,h,p,g;if(u>0)if(m=a*c-o,h=a*o-c,g=s*u,m>=0)if(h>=-g)if(h<=g){const v=1/u;m*=v,h*=v,p=m*(m+a*h+2*o)+h*(a*m+h+2*c)+l}else h=s,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*c)+l;else h=-s,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*c)+l;else h<=-g?(m=Math.max(0,-(-a*s+o)),h=m>0?-s:Math.min(Math.max(-s,-c),s),p=-m*m+h*(h+2*c)+l):h<=g?(m=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(m=Math.max(0,-(a*s+o)),h=m>0?s:Math.min(Math.max(-s,-c),s),p=-m*m+h*(h+2*c)+l);else h=a>0?-s:s,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Ja).addScaledVector(Wr,h),p}intersectSphere(e,t){if(e.radius<0)return null;Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-h.z)*m,c=(e.max.z-h.z)*m):(o=(e.max.z-h.z)*m,c=(e.min.z-h.z)*m),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,m=e.x-a.x,h=e.y-a.y,p=e.z-a.z,g=t.x-a.x,v=t.y-a.y,d=t.z-a.z,f=i.x-a.x,x=i.y-a.y,w=i.z-a.z,E=Math.abs(c),R=Math.abs(l),C=Math.abs(u);let _,T,V,F,G,Y,y,b,U,O,B,I;if(E>=R&&E>=C?(V=c,Y=m,U=g,I=f,c>=0?(_=l,T=u,F=h,G=p,y=v,b=d,O=x,B=w):(_=u,T=l,F=p,G=h,y=d,b=v,O=w,B=x)):R>=C?(V=l,Y=h,U=v,I=x,l>=0?(_=u,T=c,F=p,G=m,y=d,b=g,O=w,B=f):(_=c,T=u,F=m,G=p,y=g,b=d,O=f,B=w)):(V=u,Y=p,U=d,I=w,u>=0?(_=c,T=l,F=m,G=h,y=g,b=v,O=f,B=x):(_=l,T=c,F=h,G=m,y=v,b=g,O=x,B=f)),V===0)return null;const D=_/V,k=T/V,P=1/V,K=F-D*Y,ee=G-k*Y,H=y-D*U,J=b-k*U,re=O-D*I,_e=B-k*I,oe=re*J-_e*H,Ae=K*_e-ee*re,it=H*ee-J*K;if(r){if(oe<0||Ae<0||it<0)return null}else if((oe<0||Ae<0||it<0)&&(oe>0||Ae>0||it>0))return null;const Pe=oe+Ae+it;if(Pe===0)return null;const je=P*(oe*Y+Ae*U+it*I);return(Pe>0?je<0:je>0)?null:this.at(je/Pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lu extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Bs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xl=new st,si=new qr,Yr=new Vr,vl=new W,$r=new W,Kr=new W,Zr=new W,Qa=new W,Jr=new W,Ml=new W,Qr=new W;class Yn extends Mt{constructor(e=new fn,t=new Lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Jr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],m=s[c];u!==0&&(Qa.fromBufferAttribute(m,e),a?Jr.addScaledVector(Qa,u):Jr.addScaledVector(Qa.sub(t),u))}t.add(Jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(Yr.containsPoint(si.origin)===!1&&(si.intersectSphere(Yr,vl)===null||si.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(xl.copy(s).invert(),si.copy(e.ray).applyMatrix4(xl),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,m=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const d=h[g],f=a[d.materialIndex],x=Math.max(d.start,p.start),w=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let E=x,R=w;E<R;E+=3){const C=o.getX(E),_=o.getX(E+1),T=o.getX(E+2);r=jr(this,f,e,i,l,u,m,C,_,T),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let d=g,f=v;d<f;d+=3){const x=o.getX(d),w=o.getX(d+1),E=o.getX(d+2);r=jr(this,a,e,i,l,u,m,x,w,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const d=h[g],f=a[d.materialIndex],x=Math.max(d.start,p.start),w=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let E=x,R=w;E<R;E+=3){const C=E,_=E+1,T=E+2;r=jr(this,f,e,i,l,u,m,C,_,T),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let d=g,f=v;d<f;d+=3){const x=d,w=d+1,E=d+2;r=jr(this,a,e,i,l,u,m,x,w,E),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Du(n,e,t,i,r,s,a,o){let c;if(e.side===Ut?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===ei,o),c===null)return null;Qr.copy(o),Qr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Qr);return l<t.near||l>t.far?null:{distance:l,point:Qr.clone(),object:n}}function jr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,$r),n.getVertexPosition(c,Kr),n.getVertexPosition(l,Zr);const u=Du(n,e,t,i,$r,Kr,Zr,Ml);if(u){const m=new W;tn.getBarycoord(Ml,$r,Kr,Zr,m),r&&(u.uv=tn.getInterpolatedAttribute(r,o,c,l,m,new Ue)),s&&(u.uv1=tn.getInterpolatedAttribute(s,o,c,l,m,new Ue)),a&&(u.normal=tn.getInterpolatedAttribute(a,o,c,l,m,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new W,materialIndex:0};tn.getNormal($r,Kr,Zr,h.normal),u.face=h,u.barycoord=m}return u}class Iu extends Dt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Tt,u=Tt,m,h){super(null,a,o,c,l,u,r,s,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ai=new Vr,Nu=new Ue(.5,.5),es=new W;class lr{constructor(e=new Cn,t=new Cn,i=new Cn,r=new Cn,s=new Cn,a=new Cn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qt,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],m=s[5],h=s[6],p=s[7],g=s[8],v=s[9],d=s[10],f=s[11],x=s[12],w=s[13],E=s[14],R=s[15];if(r[0].setComponents(l-a,p-u,f-g,R-x).normalize(),r[1].setComponents(l+a,p+u,f+g,R+x).normalize(),r[2].setComponents(l+o,p+m,f+v,R+w).normalize(),r[3].setComponents(l-o,p-m,f-v,R-w).normalize(),i)r[4].setComponents(c,h,d,E).normalize(),r[5].setComponents(l-c,p-h,f-d,R-E).normalize();else if(r[4].setComponents(l-c,p-h,f-d,R-E).normalize(),t===Qt)r[5].setComponents(l+c,p+h,f+d,R+E).normalize();else if(t===ji)r[5].setComponents(c,h,d,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=Nu.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(es.x=r.normal.x>0?e.max.x:e.min.x,es.y=r.normal.y>0?e.max.y:e.min.y,es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sl=new st;class ja{constructor(){this.coordinateSystem=Qt,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Sl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new lr),i[r].setFromProjectionMatrix(Sl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new lr),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new ja().copy(this)}}class El extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ts=new W,ns=new W,yl=new st,cr=new qr,is=new Vr,eo=new W,bl=new W;class Uu extends Mt{constructor(e=new fn,t=new El){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ts.fromBufferAttribute(t,r-1),ns.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ts.distanceTo(ns);e.setAttribute("lineDistance",new Wt(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(r),is.radius+=s,e.ray.intersectsSphere(is)===!1)return;yl.copy(r).invert(),cr.copy(e.ray).applyMatrix4(yl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,d=g-1;v<d;v+=l){const f=u.getX(v),x=u.getX(v+1),w=rs(this,e,cr,c,f,x,v);w&&t.push(w)}if(this.isLineLoop){const v=u.getX(g-1),d=u.getX(p),f=rs(this,e,cr,c,v,d,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,d=g-1;v<d;v+=l){const f=rs(this,e,cr,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=rs(this,e,cr,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rs(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ts.fromBufferAttribute(o,r),ns.fromBufferAttribute(o,s),t.distanceSqToSegment(ts,ns,eo,bl)>i)return;eo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(eo);if(!(l<e.near||l>e.far))return{distance:l,point:bl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Fu extends Uu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Tl extends Dt{constructor(e=[],t=Ei,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oi extends Dt{constructor(e,t,i=ln,r,s,a,o=Tt,c=Tt,l,u=On,m=1){if(u!==On&&u!==Bn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:m};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Al extends Oi{constructor(e,t=ln,i=Ei,r,s,a=Tt,o=Tt,c,l=On){const u={width:e,height:e,depth:1},m=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wl extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hr extends fn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],m=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(m,2));function g(v,d,f,x,w,E,R,C,_,T,V){const F=E/_,G=R/T,Y=E/2,y=R/2,b=C/2,U=_+1,O=T+1;let B=0,I=0;const D=new W;for(let k=0;k<O;k++){const P=k*G-y;for(let K=0;K<U;K++){const ee=K*F-Y;D[v]=ee*x,D[d]=P*w,D[f]=b,l.push(D.x,D.y,D.z),D[v]=0,D[d]=0,D[f]=C>0?1:-1,u.push(D.x,D.y,D.z),m.push(K/_),m.push(1-k/T),B+=1}}for(let k=0;k<T;k++)for(let P=0;P<_;P++){const K=h+P+U*k,ee=h+P+U*(k+1),H=h+(P+1)+U*(k+1),J=h+(P+1)+U*k;c.push(K,ee,J),c.push(ee,H,J),I+=6}o.addGroup(p,I,V),p+=I,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ss extends fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,m=e/o,h=t/c,p=[],g=[],v=[],d=[];for(let f=0;f<u;f++){const x=f*h-a;for(let w=0;w<l;w++){const E=w*m-s;g.push(E,-x,0),v.push(0,0,1),d.push(w/o),d.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const w=x+l*f,E=x+l*(f+1),R=x+1+l*(f+1),C=x+1+l*f;p.push(w,E,C),p.push(E,R,C)}this.setIndex(p),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.widthSegments,e.heightSegments)}}function Bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Rl(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Rl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Bi(n[t]);for(const r in i)e[r]=i[r]}return e}function Rl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ou(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Bu={clone:Bi,merge:It};var zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new st().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Hu extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ku extends Fi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Bs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vu extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wu extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pl extends Mt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Xu extends Pl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const to=new st,Ll=new W,Dl=new W;class qu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Gt,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ll),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){to.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(to,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===ji||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(to)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const as=new W,os=new Hn,pn=new W;class Il extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(as,os,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(as,os,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(as,os,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(as,os,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new W,Nl=new Ue,Ul=new Ue;class rn extends Il{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Ul),t.subVectors(Ul,Nl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fl extends Il{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yu extends qu{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $u extends Pl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Yu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const zi=-90,Gi=1;class no extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(zi,Gi,e,t);r.layers=this.layers,this.add(r);const s=new rn(zi,Gi,e,t);s.layers=this.layers,this.add(s);const a=new rn(zi,Gi,e,t);a.layers=this.layers,this.add(a);const o=new rn(zi,Gi,e,t);o.layers=this.layers,this.add(o);const c=new rn(zi,Gi,e,t);c.layers=this.layers,this.add(c);const l=new rn(zi,Gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Qt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ji)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(m,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ku extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Ol=new st;class Zu{constructor(e,t,i=0,r=1/0){this.ray=new qr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ol.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(e,t=!0,i=[]){return io(e,this,i,t),i.sort(Bl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)io(e[r],this,i,t);return i.sort(Bl),i}}function Bl(n,e){return n.distance-e.distance}function io(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)io(s[a],e,t,!0)}}class zl{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ju extends Gn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gl(n,e,t,i){const r=Qu(i);switch(t){case Vo:return n*e;case Xo:return n*e/r.components*r.byteLength;case Ys:return n*e/r.components*r.byteLength;case ti:return n*e*2/r.components*r.byteLength;case $s:return n*e*2/r.components*r.byteLength;case Wo:return n*e*3/r.components*r.byteLength;case un:return n*e*4/r.components*r.byteLength;case Ks:return n*e*4/r.components*r.byteLength;case Tr:case Ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wr:case Rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Js:case js:return Math.max(n,16)*Math.max(e,8)/4;case Zs:case Qs:return Math.max(n,8)*Math.max(e,8)/2;case ea:case ta:case ia:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case Cr:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ha:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ma:case Sa:case Ea:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ya:case ba:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pr:case Ta:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qu(n){switch(n){case Gt:case zo:return{byteLength:1,components:1};case Qi:case Go:case hn:return{byteLength:2,components:1};case Xs:case qs:return{byteLength:2,components:4};case ln:case Ws:case cn:return{byteLength:4,components:1};case Ho:case ko:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ps}})),typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ps);function Hl(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ju(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,m=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,c,l){const u=c.array,m=c.updateRanges;if(n.bindBuffer(l,o),m.length===0)n.bufferSubData(l,0,u);else{m.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<m.length;p++){const g=m[h],v=m[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,m[h]=v)}m.length=h+1;for(let p=0,g=m.length;p<g;p++){const v=m[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fd=`#ifdef USE_IRIDESCENCE
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
#endif`,pd=`#ifdef USE_BUMPMAP
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ed=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yd=`#define PI 3.141592653589793
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
} // validated`,bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
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
}`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
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
#endif`,Jd=`uniform sampler2D dfgLUT;
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
}`,Qd=`
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hf=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
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
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
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
#endif`,_f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zf=`float getShadowMask() {
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
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ge={alphahash_fragment:ed,alphahash_pars_fragment:td,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:rd,alphatest_pars_fragment:sd,aomap_fragment:ad,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:dd,iridescence_fragment:fd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:xd,color_fragment:vd,color_pars_fragment:Md,color_pars_vertex:Sd,color_vertex:Ed,common:yd,defaultnormal_vertex:bd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ad,emissivemap_fragment:wd,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Pd,envmap_fragment:Ld,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Id,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Xd,envmap_vertex:Ud,fog_vertex:Fd,fog_pars_vertex:Od,fog_fragment:Bd,fog_pars_fragment:zd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Hd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:$d,lights_phong_pars_fragment:Kd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Jd,lights_fragment_begin:Qd,lights_fragment_maps:jd,lights_fragment_end:ef,lightprobes_pars_fragment:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:df,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:_f,normal_fragment_begin:xf,normal_fragment_maps:vf,normal_pars_fragment:Mf,normal_pars_vertex:Sf,normal_vertex:Ef,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:wf,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:Df,dithering_pars_fragment:If,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:zf,skinbase_vertex:Gf,skinning_pars_vertex:Hf,skinning_vertex:kf,skinnormal_vertex:Vf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:qf,tonemapping_pars_fragment:Yf,transmission_fragment:$f,transmission_pars_fragment:Kf,uv_pars_fragment:Zf,uv_pars_vertex:Jf,uv_vertex:Qf,worldpos_vertex:jf,background_vert:`varying vec2 vUv;
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
}`},xe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},mn={basic:{uniforms:It([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:It([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:It([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:It([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:It([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:It([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:It([xe.points,xe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:It([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:It([xe.common,xe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:It([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:It([xe.sprite,xe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:It([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:It([xe.lights,xe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};mn.physical={uniforms:It([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ls={r:0,b:0,g:0},ep=new st,kl=new Oe;kl.set(-1,0,0,0,1,0,0,0,1);function tp(n,e,t,i,r,s){const a=new Be(0);let o=r===!0?0:1,c,l,u=null,m=0,h=null;function p(x){let w=x.isScene===!0?x.background:null;if(w&&w.isTexture){const E=x.backgroundBlurriness>0;w=e.get(w,E)}return w}function g(x){let w=!1;const E=p(x);E===null?d(a,o):E&&E.isColor&&(d(E,1),w=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,w){const E=p(w);E&&E.isCubeTexture?(l===void 0&&(l=new Yn(new hr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Bi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(w.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(kl),l.material.toneMapped=qe.getTransfer(E.colorSpace)!==Qe,(u!==E||m!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,m=E.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Yn(new ss(2,2),new oi({name:"BackgroundMaterial",uniforms:Bi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=qe.getTransfer(E.colorSpace)!==Qe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||m!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,m=E.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,w){x.getRGB(ls,Cl(n)),t.buffers.color.setClear(ls.r,ls.g,ls.b,w,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),o=w,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,d(a,o)},render:g,addToRenderList:v,dispose:f}}function np(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(G,Y,y,b,U){let O=!1;const B=m(G,b,y,Y);s!==B&&(s=B,l(s.object)),O=p(G,b,y,U),O&&g(G,b,y,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,E(G,Y,y,b),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(G){return n.bindVertexArray(G)}function u(G){return n.deleteVertexArray(G)}function m(G,Y,y,b){const U=b.wireframe===!0;let O=i[Y.id];O===void 0&&(O={},i[Y.id]=O);const B=G.isInstancedMesh===!0?G.id:0;let I=O[B];I===void 0&&(I={},O[B]=I);let D=I[y.id];D===void 0&&(D={},I[y.id]=D);let k=D[U];return k===void 0&&(k=h(c()),D[U]=k),k}function h(G){const Y=[],y=[],b=[];for(let U=0;U<t;U++)Y[U]=0,y[U]=0,b[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:y,attributeDivisors:b,object:G,attributes:{},index:null}}function p(G,Y,y,b){const U=s.attributes,O=Y.attributes;let B=0;const I=y.getAttributes();for(const D in I)if(I[D].location>=0){const P=U[D];let K=O[D];if(K===void 0&&(D==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),D==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;B++}return s.attributesNum!==B||s.index!==b}function g(G,Y,y,b){const U={},O=Y.attributes;let B=0;const I=y.getAttributes();for(const D in I)if(I[D].location>=0){let P=O[D];P===void 0&&(D==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),D==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),U[D]=K,B++}s.attributes=U,s.attributesNum=B,s.index=b}function v(){const G=s.newAttributes;for(let Y=0,y=G.length;Y<y;Y++)G[Y]=0}function d(G){f(G,0)}function f(G,Y){const y=s.newAttributes,b=s.enabledAttributes,U=s.attributeDivisors;y[G]=1,b[G]===0&&(n.enableVertexAttribArray(G),b[G]=1),U[G]!==Y&&(n.vertexAttribDivisor(G,Y),U[G]=Y)}function x(){const G=s.newAttributes,Y=s.enabledAttributes;for(let y=0,b=Y.length;y<b;y++)Y[y]!==G[y]&&(n.disableVertexAttribArray(y),Y[y]=0)}function w(G,Y,y,b,U,O,B){B===!0?n.vertexAttribIPointer(G,Y,y,U,O):n.vertexAttribPointer(G,Y,y,b,U,O)}function E(G,Y,y,b){v();const U=b.attributes,O=y.getAttributes(),B=Y.defaultAttributeValues;for(const I in O){const D=O[I];if(D.location>=0){let k=U[I];if(k===void 0&&(I==="instanceMatrix"&&G.instanceMatrix&&(k=G.instanceMatrix),I==="instanceColor"&&G.instanceColor&&(k=G.instanceColor)),k!==void 0){const P=k.normalized,K=k.itemSize,ee=e.get(k);if(ee===void 0)continue;const H=ee.buffer,J=ee.type,re=ee.bytesPerElement,_e=J===n.INT||J===n.UNSIGNED_INT||k.gpuType===Ws;if(k.isInterleavedBufferAttribute){const oe=k.data,Ae=oe.isInterleavedBuffer===!0?oe.stride:oe.itemSize,it=k.offset;if(oe.isInstancedInterleavedBuffer||oe.isInstancedBufferAttribute){for(let Pe=0;Pe<D.locationSize;Pe++)f(D.location+Pe,oe.meshPerAttribute);G.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Pe=0;Pe<D.locationSize;Pe++)d(D.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Pe=0;Pe<D.locationSize;Pe++)w(D.location+Pe,K/D.locationSize,J,P,Ae*re,(it+K/D.locationSize*Pe)*re,_e)}else{if(k.isInstancedBufferAttribute){for(let oe=0;oe<D.locationSize;oe++)f(D.location+oe,k.meshPerAttribute);G.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let oe=0;oe<D.locationSize;oe++)d(D.location+oe);n.bindBuffer(n.ARRAY_BUFFER,H);for(let oe=0;oe<D.locationSize;oe++)w(D.location+oe,K/D.locationSize,J,P,K*re,K/D.locationSize*oe*re,_e)}}else if(B!==void 0){const P=B[I];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(D.location,P);break;case 3:n.vertexAttrib3fv(D.location,P);break;case 4:n.vertexAttrib4fv(D.location,P);break;default:n.vertexAttrib1fv(D.location,P)}}}}x()}function R(){V();for(const G in i){const Y=i[G];for(const y in Y){const b=Y[y];for(const U in b){const O=b[U];for(const B in O)u(O[B].object),delete O[B];delete b[U]}}delete i[G]}}function C(G){if(i[G.id]===void 0)return;const Y=i[G.id];for(const y in Y){const b=Y[y];for(const U in b){const O=b[U];for(const B in O)u(O[B].object),delete O[B];delete b[U]}}delete i[G.id]}function _(G){for(const Y in i){const y=i[Y];for(const b in y){const U=y[b];if(U[G.id]===void 0)continue;const O=U[G.id];for(const B in O)u(O[B].object),delete O[B];delete U[G.id]}}}function T(G){for(const Y in i){const y=i[Y],b=G.isInstancedMesh===!0?G.id:0,U=y[b];if(U!==void 0){for(const O in U){const B=U[O];for(const I in B)u(B[I].object),delete B[I];delete U[O]}delete y[b],Object.keys(y).length===0&&delete i[Y]}}}function V(){F(),a=!0,s!==r&&(s=r,l(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:V,resetDefaultState:F,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:d,disableUnusedAttributes:x}}function ip(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function rp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==un&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const T=_===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Gt&&_!==cn&&!T&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(De("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:E,maxSamples:R,samples:C}}function sp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Cn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const p=m.length!==0||h||i!==0||r;return r=h,i=m.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){t=u(m,h,0)},this.setState=function(m,h,p){const g=m.clippingPlanes,v=m.clipIntersection,d=m.clipShadows,f=n.get(m);if(!r||g===null||g.length===0||s&&!d)s?u(null):l();else{const x=s?0:i,w=x*4;let E=f.clippingState||null;c.value=E,E=u(g,h,w,p);for(let R=0;R!==w;++R)E[R]=t[R];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(m,h,p,g){const v=m!==null?m.length:0;let d=null;if(v!==0){if(d=c.value,g!==!0||d===null){const f=p+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<f)&&(d=new Float32Array(f));for(let w=0,E=p;w!==v;++w,E+=4)a.copy(m[w]).applyMatrix4(x,o),a.normal.toArray(d,E),d[E+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,d}}class ro extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hr(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Mi});s.uniforms.tEquirect.value=t;const a=new Yn(r,s),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Ft),new no(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Vl=256,ap=3,op=20,Wl=256,Xl=16,lp=3,cp=new W,hp=new Be;class cs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new no(1,10,null),this._boxMesh=new Yn(new hr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=cp}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const m=c.autoClear,h=c.autoClearColor,p=c.autoClearDepth,g=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(hp));const d=new no(i,r,u);return d.position.copy(o),d.update(c,e),c.autoClear=m,c.autoClearColor=h,c.autoClearDepth=p,c.autoClearStencil=g,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Vl,el(e))}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ji?this._setSize(e.image.length===0?Vl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=ql(e,!1,!1),i=Math.log2(e)-ap;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ql(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ei||e.mapping===Ji?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Yl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=up(),this._integrationMaterial=dp());const t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Xl);for(let a=0;a<=i;a++){const o=cs.lodToRoughness(a,i);if(a>i-lp)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Wl*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=fp());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function ql(n,e,t){return new ro(n,{minFilter:Fn,generateMipmaps:e,type:hn,colorSpace:Lr,depthBuffer:t})}function ur(n,e,t){return new oi({name:n,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:t,side:Ut,blending:Mi,depthTest:!1,depthWrite:!1})}function up(){return ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wl}u

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
	`)}function dp(){return ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xl}},`

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
	`)}function fp(){return ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${op}
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
	`)}function Yl(){return ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function $l(){return ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function pp(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===zs||p===Gs)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new ro(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const p=h.mapping,g=p===zs||p===Gs,v=p===Ei||p===Ji;if(g||v){let d=t.get(h);const f=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new cs(n)),d=g?i.fromEquirectangular(h,d):i.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{const x=h.image;return g&&x&&x.height>0||v&&x&&c(x)?(i===null&&(i=new cs(n)),d=g?i.fromEquirectangular(h):i.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",u),d.texture):null}}}return h}function o(h,p){return p===zs?h.mapping=Ei:p===Gs&&(h.mapping=Ji),h}function c(h){let p=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function m(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function mp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Nr("WebGLRenderer: "+i+" extension not supported."),r}}}function gp(n,e,t,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(const d in g.attributes)e.remove(g.attributes[d]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const v=s.get(g);v&&(e.remove(v),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function u(g){const v=g.attributes;for(const d in v)e.update(v[d],n.ARRAY_BUFFER)}function m(g){const v=g.index,d=g.attributes.position;let f=0;if(d===void 0)return;const x=v!==null?v.array.length:d.array.length/3-1,w=d.count>=65535?_l:gl,E=new w(Math.ceil(x/3)*6,1),R=E.array;if(v!==null){const _=v.array;f=v.version;for(let T=0,V=0;T<x;T+=3){const F=_[T+0],G=_[T+1],Y=_[T+2];R[V++]=F,R[V++]=G,R[V++]=G,R[V++]=Y,R[V++]=Y,R[V++]=F}}else{f=d.version;for(let _=0,T=0;_<x;_+=3){const V=_+0,F=_+1,G=_+2;R[T++]=V,R[T++]=F,R[T++]=F,R[T++]=G,R[T++]=G,R[T++]=V}}E.version=f;const C=s.get(g);C&&e.remove(C),s.set(g,E)}function h(g){const v=s.get(g);if(v){const d=g.index;d!==null&&v.version<d.version&&m(g)}else m(g);return s.get(g)}function p(){for(const g in r){const v=r[g].deref();v!==void 0&&c(v)}}return{get:l,update:u,getWireframeAttribute:h,dispose:p}}function _p(n,e,t){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function c(m,h){n.drawElements(i,h,s,m*a),t.update(h,i,1)}function l(m,h,p){p!==0&&(n.drawElementsInstanced(i,h,s,m*a,p),t.update(h,i,p))}function u(m,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,m,0,p);let v=0;for(let d=0;d<p;d++)v+=h[d];t.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function xp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vp(n,e,t){const i=new WeakMap,r=new ut;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==m){let V=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",V)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let E=o.attributes.position.count*w,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*R*4*m),_=new al(C,E,R,m);_.type=cn,_.needsUpdate=!0;const T=w*4;for(let F=0;F<m;F++){const G=d[F],Y=f[F],y=x[F],b=E*R*4*F;for(let U=0;U<G.count;U++){const O=U*T;p===!0&&(r.fromBufferAttribute(G,U),C[b+O+0]=r.x,C[b+O+1]=r.y,C[b+O+2]=r.z,C[b+O+3]=0),g===!0&&(r.fromBufferAttribute(Y,U),C[b+O+4]=r.x,C[b+O+5]=r.y,C[b+O+6]=r.z,C[b+O+7]=0),v===!0&&(r.fromBufferAttribute(y,U),C[b+O+8]=r.x,C[b+O+9]=r.y,C[b+O+10]=r.z,C[b+O+11]=y.itemSize===4?r.w:1)}}h={count:m,texture:_,size:new Ue(E,R)},i.set(o,h),o.addEventListener("dispose",V)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Mp(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,m=l.geometry,h=e.get(l,m);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Sp={[Lo]:"LINEAR_TONE_MAPPING",[Do]:"REINHARD_TONE_MAPPING",[Io]:"CINEON_TONE_MAPPING",[No]:"ACES_FILMIC_TONE_MAPPING",[Fo]:"AGX_TONE_MAPPING",[Oo]:"NEUTRAL_TONE_MAPPING",[Uo]:"CUSTOM_TONE_MAPPING"};function Ep(n,e,t,i,r,s){const a=new dn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new fn;u.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const m=new Hu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Yn(u,m),p=new Fl(-1,1,1,-1,0,1);let g=null,v=null,d=!1,f,x=null,w=[],E=!1;this.setSize=function(R,C){a.setSize(R,C),o!==null&&o.setSize(R,C),c!==null&&c.setSize(R,C);for(let _=0;_<w.length;_++){const T=w[_];T.setSize&&T.setSize(R,C)}},this.setEffects=function(R){w=R,E=w.length>0&&w[0].isRenderPass===!0;const C=a.width,_=a.height;w.length>0&&o===null&&(o=new dn(C,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}),c=new dn(C,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}));const T=r===!0&&w.some(V=>V.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&l===null&&(l=new Oi(C,_),s===!0&&(l.format=Bn,l.type=yi)),a.dispose(),a.depthTexture=T?l:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let V=0;V<w.length;V++){const F=w[V];F.setSize&&F.setSize(C,_),T&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(l)}},this.begin=function(R,C){if(d||R.toneMapping===En&&w.length===0)return!1;if(x=C,C!==null){const _=C.width,T=C.height;(a.width!==_||a.height!==T)&&this.setSize(_,T)}return E===!1&&R.setRenderTarget(a),f=R.toneMapping,R.toneMapping=En,!0},this.hasRenderPass=function(){return E},this.end=function(R,C){R.toneMapping=f,d=!0;let _=a,T=o;for(let V=0;V<w.length;V++){const F=w[V];F.enabled!==!1&&(F.render(R,T,_,C),F.needsSwap!==!1&&(_=T,T=T===o?c:o))}if(g!==R.outputColorSpace||v!==R.toneMapping){g=R.outputColorSpace,v=R.toneMapping,m.defines={},qe.getTransfer(g)===Qe&&(m.defines.SRGB_TRANSFER="");const V=Sp[v];V&&(m.defines[V]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(x),R.render(h,p),x=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),m.dispose()}}const Kl=new Dt,Zl=new Oi(1,1),Jl=new Al(1),Ql=new al,jl=new gu,ec=new Tl,tc=[],nc=[],ic=new Float32Array(16),rc=new Float32Array(9),sc=new Float32Array(4);function Hi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tc[r];if(s===void 0&&(s=new Float32Array(r),tc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hs(n,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function Tp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function Ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function wp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;sc.set(i),n.uniformMatrix2fv(this.addr,!1,sc),gt(t,i)}}function Rp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;rc.set(i),n.uniformMatrix3fv(this.addr,!1,rc),gt(t,i)}}function Cp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;ic.set(i),n.uniformMatrix4fv(this.addr,!1,ic),gt(t,i)}}function Pp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function Ip(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function Np(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function Fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function Op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function us(n){return n.version===0&&(n.compareFunction=$o,n.needsUpdate=!0),n}function Bp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=us(Zl):s=Kl,t.setTexture2D(e||s,r)}function zp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||jl,r)}function Gp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=us(Jl):s=ec,t.setTextureCube(e||s,r)}function Hp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ql,r)}function kp(n){switch(n){case 5126:return yp;case 35664:return bp;case 35665:return Tp;case 35666:return Ap;case 35674:return wp;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Ip;case 5125:return Np;case 36294:return Up;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Vp(n,e){n.uniform1fv(this.addr,e)}function Wp(n,e){const t=Hi(e,this.size,2);n.uniform2fv(this.addr,t)}function Xp(n,e){const t=Hi(e,this.size,3);n.uniform3fv(this.addr,t)}function qp(n,e){const t=Hi(e,this.size,4);n.uniform4fv(this.addr,t)}function Yp(n,e){const t=Hi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $p(n,e){const t=Hi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kp(n,e){const t=Hi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zp(n,e){n.uniform1iv(this.addr,e)}function Jp(n,e){n.uniform2iv(this.addr,e)}function Qp(n,e){n.uniform3iv(this.addr,e)}function jp(n,e){n.uniform4iv(this.addr,e)}function em(n,e){n.uniform1uiv(this.addr,e)}function tm(n,e){n.uniform2uiv(this.addr,e)}function nm(n,e){n.uniform3uiv(this.addr,e)}function im(n,e){n.uniform4uiv(this.addr,e)}function rm(n,e,t){const i=this.cache,r=e.length,s=hs(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=us(Zl):a=Kl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function sm(n,e,t){const i=this.cache,r=e.length,s=hs(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||jl,s[a])}function am(n,e,t){const i=this.cache,r=e.length,s=hs(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=us(Jl):a=ec;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function om(n,e,t){const i=this.cache,r=e.length,s=hs(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ql,s[a])}function lm(n){switch(n){case 5126:return Vp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return $p;case 35676:return Kp;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Qp;case 35669:case 35673:return jp;case 5125:return em;case 36294:return tm;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}class cm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kp(t.type)}}class hm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lm(t.type)}}class um{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const so=/(\w+)(\])?(\[|\.)?/g;function ac(n,e){n.seq.push(e),n.map[e.id]=e}function dm(n,e,t){const i=n.name,r=i.length;for(so.lastIndex=0;;){const s=so.exec(i),a=so.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ac(t,l===void 0?new cm(o,n,e):new hm(o,n,e));break}else{let m=t.map[o];m===void 0&&(m=new um(o),ac(t,m)),t=m}}}class ds{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);dm(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function oc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fm=37297;let pm=0;function mm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const lc=new Oe;function gm(n){qe._getMatrix(lc,qe.workingColorSpace,n);const e=`mat3( ${lc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Dr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+mm(n.getShaderSource(e),o)}else return s}function _m(n,e){const t=gm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const xm={[Lo]:"Linear",[Do]:"Reinhard",[Io]:"Cineon",[No]:"ACESFilmic",[Fo]:"AgX",[Oo]:"Neutral",[Uo]:"Custom"};function vm(n,e){const t=xm[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new W;function Mm(){qe.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Em(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ym(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function hc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function uc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(n){return n.replace(bm,Tm)}function Tm(n,e){const t=Ge[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ao(t)}const Am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(n){return n.replace(Am,wm)}function wm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Rm={[yr]:"SHADOWMAP_TYPE_PCF",[$i]:"SHADOWMAP_TYPE_VSM"};function Cm(n){return Rm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Pm={[Ji]:"ENVMAP_MODE_REFRACTION"};function Lm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Pm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Dm={[Bs]:"ENVMAP_BLENDING_MULTIPLY",[Nh]:"ENVMAP_BLENDING_MIX",[Uh]:"ENVMAP_BLENDING_ADD"};function Im(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Dm[n.combine]||"ENVMAP_BLENDING_NONE"}function Nm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Cm(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Lm(t),m=Im(t),h=Sm(t),p=Em(s),g=r.createProgram();let v,d,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),d.length>0&&(d+=`
`)):(v=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),d=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ge.tonemapping_pars_fragment:"",t.toneMapping!==En?vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,_m("linearToOutputTexel",t.outputColorSpace),Mm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=ao(a),a=hc(a,t),a=uc(a,t),o=ao(o),o=hc(o,t),o=uc(o,t),a=dc(a),o=dc(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=f+v+a,w=f+d+o,E=oc(r,r.VERTEX_SHADER,x),R=oc(r,r.FRAGMENT_SHADER,w);r.attachShader(g,E),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(F){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(g)||"",Y=r.getShaderInfoLog(E)||"",y=r.getShaderInfoLog(R)||"",b=G.trim(),U=Y.trim(),O=y.trim();let B=!0,I=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,R);else{const D=cc(r,E,"vertex"),k=cc(r,R,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+b+`
`+D+`
`+k)}else b!==""?De("WebGLProgram: Program Info Log:",b):(U===""||O==="")&&(I=!1);I&&(F.diagnostics={runnable:B,programLog:b,vertexShader:{log:U,prefix:v},fragmentShader:{log:O,prefix:d}})}r.deleteShader(E),r.deleteShader(R),_=new ds(r,g),T=ym(r,g)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(g,fm)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=R,this}let Um=0;class Fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Om(e),t.set(e,i)),i}}class Om{constructor(e){this.id=Um++,this.code=e,this.usedTimes=0}}function Bm(n){return n===ti||n===Cr||n===Pr}function zm(n,e,t,i,r,s){const a=new Fa,o=new Fm,c=new Set,l=[],u=new Map,m=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,T,V,F,G,Y){const y=F.fog,b=G.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||U,O),I=h[_.type];let D=i.precision;_.precision!==null&&(D=i.getMaxPrecision(_.precision),D!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",D,"instead."));const k=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,P=k!==void 0?k.length:0;let K=0;b.morphAttributes.position!==void 0&&(K=1),b.morphAttributes.normal!==void 0&&(K=2),b.morphAttributes.color!==void 0&&(K=3);let ee,H,J,re;if(I){const ve=mn[I];ee=ve.vertexShader,H=ve.fragmentShader}else{ee=_.vertexShader,H=_.fragmentShader;const ve=o.getVertexShaderStage(_),et=o.getFragmentShaderStage(_);o.update(_,ve,et),J=ve.id,re=et.id}const _e=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Ae=G.isInstancedMesh===!0,it=G.isBatchedMesh===!0,Pe=!!_.map,je=!!_.matcap,tt=!!B,Ve=tt&&B.isPMREMTexture===!0,At=!!_.aoMap,xt=!!_.lightMap,zt=!!_.bumpMap&&_.wireframe===!1,lt=!!_.normalMap,Mn=!!_.displacementMap,Et=!!_.emissiveMap,$t=!!_.metalnessMap,Kt=!!_.roughnessMap,Zt=_.anisotropy>0,z=_.clearcoat>0,Jt=_.diffuseRoughness>0,at=_.dispersion>0,ot=_.retroreflectivity>0,ge=_.iridescence>0,vt=_.sheen>0,Le=_.transmission>0,Ne=Zt&&!!_.anisotropyMap,A=z&&!!_.clearcoatMap,M=z&&!!_.clearcoatNormalMap,q=z&&!!_.clearcoatRoughnessMap,se=Jt&&!!_.diffuseRoughnessMap,ie=ge&&!!_.iridescenceMap,ce=ge&&!!_.iridescenceThicknessMap,pe=vt&&!!_.sheenColorMap,j=vt&&!!_.sheenRoughnessMap,te=!!_.specularMap,ue=!!_.specularColorMap,L=!!_.specularIntensityMap,ne=Le&&!!_.transmissionMap,Q=Le&&!!_.thicknessMap,de=!!_.gradientMap,le=!!_.alphaMap,he=_.alphaTest>0,Re=!!_.alphaHash,He=!!_.extensions;let ae=En;_.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ae=n.toneMapping);const Ce=Ve?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,ze={shaderID:I,shaderType:_.type,shaderName:_.name,vertexShader:ee,fragmentShader:H,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:D,batching:it,batchingColor:it&&G._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&G.instanceColor!==null,instancingMorph:Ae&&G.morphTexture!==null,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:je,envMap:tt,envMapMode:tt&&B.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Ce.length-1:null,envMapSize:Ve?Ce[0].width:null,aoMap:At,lightMap:xt,bumpMap:zt,normalMap:lt,displacementMap:Mn,emissiveMap:Et,normalMapObjectSpace:lt&&_.normalMapType===Bh,normalMapTangentSpace:lt&&_.normalMapType===Aa,packedNormalMap:lt&&_.normalMapType===Aa&&Bm(_.normalMap.format),metalnessMap:$t,roughnessMap:Kt,anisotropy:Zt,anisotropyMap:Ne,clearcoat:z,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:q,diffuseRoughness:Jt,diffuseRoughnessMap:se,dispersion:at,retroreflection:ot,iridescence:ge,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:vt,sheenColorMap:pe,sheenRoughnessMap:j,specularMap:te,specularColorMap:ue,specularIntensityMap:L,transmission:Le,transmissionMap:ne,thicknessMap:Q,gradientMap:de,opaque:_.transparent===!1&&_.blending===Ki&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:he,alphaHash:Re,combine:_.combine,mapUv:Pe&&p(_.map.channel),aoMapUv:At&&p(_.aoMap.channel),lightMapUv:xt&&p(_.lightMap.channel),bumpMapUv:zt&&p(_.bumpMap.channel),normalMapUv:lt&&p(_.normalMap.channel),displacementMapUv:Mn&&p(_.displacementMap.channel),emissiveMapUv:Et&&p(_.emissiveMap.channel),metalnessMapUv:$t&&p(_.metalnessMap.channel),roughnessMapUv:Kt&&p(_.roughnessMap.channel),anisotropyMapUv:Ne&&p(_.anisotropyMap.channel),clearcoatMapUv:A&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&p(_.sheenRoughnessMap.channel),specularMapUv:te&&p(_.specularMap.channel),specularColorMapUv:ue&&p(_.specularColorMap.channel),specularIntensityMapUv:L&&p(_.specularIntensityMap.channel),transmissionMapUv:ne&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:le&&p(_.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(lt||Zt),vertexNormals:!!b.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!b.attributes.uv&&(Pe||le),fog:!!y,useFog:_.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||b.attributes.normal===void 0&&lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:oe,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:K,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Y.filter(ve=>ve.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:Et&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Sn,flipSided:_.side===Ut,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:He&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&_.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function v(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const V in _.defines)T.push(V),T.push(_.defines[V]);return _.isRawShaderMaterial===!1&&(d(T,_),f(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function d(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function f(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const T=h[_.type];let V;if(T){const F=mn[T];V=Bu.clone(F.uniforms)}else V=_.uniforms;return V}function w(_,T){let V=u.get(T);return V!==void 0?++V.usedTimes:(V=new Nm(n,T,_,r),l.push(V),u.set(T,V)),V}function E(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function C(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:l,dispose:C}}function Gm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Hm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,v,d,f){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:d,group:f},n[e]=x):(x.id=h.id,x.object=h,x.geometry=p,x.material=g,x.materialVariant=a(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=d,x.group=f),e++,x}function c(h,p,g,v,d,f,x){x.reversedDepth===!0&&(d=-d);const w=o(h,p,g,v,d,f);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):t.push(w)}function l(h,p,g,v,d,f){const x=o(h,p,g,v,d,f);g.transmission>0?i.unshift(x):g.transparent===!0?r.unshift(x):t.unshift(x)}function u(h,p){t.length>1&&t.sort(h||Hm),i.length>1&&i.sort(p||pc),r.length>1&&r.sort(p||pc)}function m(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:m,sort:u}}function km(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new mc,n.set(i,[a])):r>=s.length?(a=new mc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Be};break;case"SpotLight":t={position:new W,direction:new W,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Wm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Xm=0;function qm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ym(n){const e=new Vm,t=Wm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const r=new W,s=new st,a=new st;function o(l){let u=0,m=0,h=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,g=0,v=0,d=0,f=0,x=0,w=0,E=0,R=0,C=0,_=0,T=0,V=0,F=0;l.sort(qm);for(let Y=0,y=l.length;Y<y;Y++){const b=l[Y],U=b.color,O=b.intensity,B=b.distance;let I=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===ti?I=b.shadow.map.texture:I=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)u+=U.r*O,m+=U.g*O,h+=U.b*O;else if(b.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(b.sh.coefficients[D],O);F++}else if(b.isSunLight){const D=e.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const k=b.shadow,P=t.get(b);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[g]=P,i.sunShadowMap[g]=I;const K=k.getViewportCount();for(let ee=0;ee<K;ee++)i.sunShadowMatrix[v+ee]=k.getMatrix(ee),i.sunShadowCascade[v+ee]=k._cascadeData[ee];v+=K,g++}i.sun[p]=D,p++}else if(b.isDirectionalLight){const D=e.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const k=b.shadow,P=t.get(b);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize=k.mapSize,i.directionalShadow[d]=P,i.directionalShadowMap[d]=I,i.directionalShadowMatrix[d]=b.shadow.matrix,R++}i.directional[d]=D,d++}else if(b.isSpotLight){const D=e.get(b);D.position.setFromMatrixPosition(b.matrixWorld),D.color.copy(U).multiplyScalar(O),D.distance=B,D.coneCos=Math.cos(b.angle),D.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),D.decay=b.decay,i.spot[x]=D;const k=b.shadow;if(b.map&&(i.spotLightMap[T]=b.map,T++,k.updateMatrices(b),b.castShadow&&V++),i.spotLightMatrix[x]=k.matrix,b.castShadow){const P=t.get(b);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize=k.mapSize,i.spotShadow[x]=P,i.spotShadowMap[x]=I,_++}x++}else if(b.isRectAreaLight){const D=e.get(b);D.color.copy(U).multiplyScalar(O),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),i.rectArea[w]=D,w++}else if(b.isPointLight){const D=e.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),D.distance=b.distance,D.decay=b.decay,b.castShadow){const k=b.shadow,P=t.get(b);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize=k.mapSize,P.shadowCameraNear=k.camera.near,P.shadowCameraFar=k.camera.far,i.pointShadow[f]=P,i.pointShadowMap[f]=I,i.pointShadowMatrix[f]=b.shadow.matrix,C++}i.point[f]=D,f++}else if(b.isHemisphereLight){const D=e.get(b);D.skyColor.copy(b.color).multiplyScalar(O),D.groundColor.copy(b.groundColor).multiplyScalar(O),i.hemi[E]=D,E++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=h;const G=i.hash;(G.sunLength!==p||G.directionalLength!==d||G.pointLength!==f||G.spotLength!==x||G.rectAreaLength!==w||G.hemiLength!==E||G.numSunShadows!==g||G.numDirectionalShadows!==R||G.numPointShadows!==C||G.numSpotShadows!==_||G.numSpotMaps!==T||G.numLightProbes!==F)&&(i.sun.length=p,i.directional.length=d,i.spot.length=x,i.rectArea.length=w,i.point.length=f,i.hemi.length=E,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-V,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=F,G.sunLength=p,G.directionalLength=d,G.pointLength=f,G.spotLength=x,G.rectAreaLength=w,G.hemiLength=E,G.numSunShadows=g,G.numDirectionalShadows=R,G.numPointShadows=C,G.numSpotShadows=_,G.numSpotMaps=T,G.numLightProbes=F,i.version=Xm++)}function c(l,u){let m=0,h=0,p=0,g=0,v=0,d=0;const f=u.matrixWorldInverse;for(let x=0,w=l.length;x<w;x++){const E=l[x];if(E.isSunLight){const R=i.sun[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(f),m++}else if(E.isDirectionalLight){const R=i.directional[h];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),h++}else if(E.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(f),a.identity(),s.copy(E.matrixWorld),s.premultiply(f),a.extractRotation(s),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const R=i.hemi[d];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(f),d++}}}return{setup:o,setupView:c,state:i}}function gc(n){const e=new Ym(n),t=[],i=[],r=[];function s(m){u.camera=m,t.length=0,i.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):t.push(m)}function o(m){i.push(m)}function c(){e.setup(t),r.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function l(m){e.setupView(t,m)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function $m(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new gc(n),e.set(r,[o])):s>=a.length?(o=new gc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
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
}`,Jm=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Qm=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],_c=new st,fr=new W,oo=new W;function jm(n,e,t){let i=new lr;const r=new Ue,s=new Ue,a=new ut,o=new Vu,c=new Wu,l={},u=t.maxTextureSize,m={[ei]:Ut,[Ut]:ei,[Sn]:Sn},h=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Km,fragmentShader:Zm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Yn(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yr;let f=this.type;this.render=function(C,_,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;this.type===mh&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yr);const V=n.getRenderTarget(),F=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Mi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const y=f!==this.type;y&&_.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(U=>U.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,U=C.length;b<U;b++){const O=C[b],B=O.shadow;if(B===void 0){De("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const I=B.getFrameExtents();r.multiply(I),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/I.x),r.x=s.x*I.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/I.y),r.y=s.y*I.y,B.mapSize.y=s.y));const D=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=D,B.map===null||y===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===$i){if(O.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new dn(r.x,r.y,{format:ti,type:hn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new Oi(r.x,r.y,cn),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=On,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tt,B.map.depthTexture.magFilter=Tt}else O.isPointLight?(B.map=new ro(r.x),B.map.depthTexture=new Al(r.x,ln)):(B.map=new dn(r.x,r.y),B.map.depthTexture=new Oi(r.x,r.y,ln)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=On,this.type===yr?(B.map.depthTexture.compareFunction=D?Yo:qo,B.map.depthTexture.minFilter=Ft,B.map.depthTexture.magFilter=Ft):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tt,B.map.depthTexture.magFilter=Tt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);const k=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();O.isPointLight!==!0&&B.updateMatrices(O,T);const P=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:T.layers;for(let K=0;K<k;K++){const ee=B.getCamera(K);if(O.isPointLight){const H=B.camera,J=B.matrix,re=O.distance||H.far;re!==H.far&&(H.far=re,H.updateProjectionMatrix()),fr.setFromMatrixPosition(O.matrixWorld),H.position.copy(fr),oo.copy(H.position),oo.add(Jm[K]),H.up.copy(Qm[K]),H.lookAt(oo),H.updateMatrixWorld(),J.makeTranslation(-fr.x,-fr.y,-fr.z),_c.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),B._frustum.setFromProjectionMatrix(_c,H.coordinateSystem,H.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,K),n.clear();else{K===0&&(n.setRenderTarget(B.map),n.clear());const H=B.getViewport(K);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),Y.viewport(a)}i=B.getFrustum(K),E(_,T,ee,O,P,this.type)}B.isPointLightShadow!==!0&&this.type===$i&&x(B,T),B.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(V,F,G)};function x(C,_){const T=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new dn(r.x,r.y,{format:ti,type:hn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(_,null,T,h,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(_,null,T,p,v,null)}function w(C,_,T,V){let F=null;const G=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(G!==void 0)F=G;else if(F=T.isPointLight===!0?c:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const Y=F.uuid,y=_.uuid;let b=l[Y];b===void 0&&(b={},l[Y]=b);let U=b[y];U===void 0&&(U=F.clone(),b[y]=U,_.addEventListener("dispose",R)),F=U}if(F.visible=_.visible,F.wireframe=_.wireframe,V===$i?F.side=_.shadowSide!==null?_.shadowSide:_.side:F.side=_.shadowSide!==null?_.shadowSide:m[_.side],F.alphaMap=_.alphaMap,F.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,F.map=_.map,F.clipShadows=_.clipShadows,F.clippingPlanes=_.clippingPlanes,F.clipIntersection=_.clipIntersection,F.displacementMap=_.displacementMap,F.displacementScale=_.displacementScale,F.displacementBias=_.displacementBias,F.wireframeLinewidth=_.wireframeLinewidth,F.linewidth=_.linewidth,T.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const Y=n.properties.get(F);Y.light=T}return F}function E(C,_,T,V,F,G){if(C.visible===!1)return;if(C.layers.test(F)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&G===$i)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const b=e.update(C),U=C.material;if(Array.isArray(U)){const O=b.groups;for(let B=0,I=O.length;B<I;B++){const D=O[B],k=U[D.materialIndex];if(k&&k.visible){const P=w(C,k,V,G);C.onBeforeShadow(n,C,_,T,b,P,D),n.renderBufferDirect(T,null,b,P,C,D),C.onAfterShadow(n,C,_,T,b,P,D)}}}else if(U.visible){const O=w(C,U,V,G);C.onBeforeShadow(n,C,_,T,b,O,null),n.renderBufferDirect(T,null,b,O,C,null),C.onAfterShadow(n,C,_,T,b,O,null)}}const y=C.children;for(let b=0,U=y.length;b<U;b++)E(y[b],_,T,V,F,G)}function R(C){C.target.removeEventListener("dispose",R);for(const T in l){const V=l[T],F=C.target.uuid;F in V&&(V[F].dispose(),delete V[F])}}}function eg(n,e){function t(){let L=!1;const ne=new ut;let Q=null;const de=new ut(0,0,0,0);return{setMask:function(le){Q!==le&&!L&&(n.colorMask(le,le,le,le),Q=le)},setLocked:function(le){L=le},setClear:function(le,he,Re,He,ae){ae===!0&&(le*=He,he*=He,Re*=He),ne.set(le,he,Re,He),de.equals(ne)===!1&&(n.clearColor(le,he,Re,He),de.copy(ne))},reset:function(){L=!1,Q=null,de.set(-1,0,0,0)}}}function i(){let L=!1,ne=!1,Q=null,de=null,le=null;return{setReversed:function(he){if(ne!==he){const Re=e.get("EXT_clip_control");he?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ne=he;const He=le;le=null,this.setClear(He)}},getReversed:function(){return ne},setTest:function(he){he?oe(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(he){Q!==he&&!L&&(n.depthMask(he),Q=he)},setFunc:function(he){if(ne&&(he=Kh[he]),de!==he){switch(he){case Ls:n.depthFunc(n.NEVER);break;case Ds:n.depthFunc(n.ALWAYS);break;case Is:n.depthFunc(n.LESS);break;case Zi:n.depthFunc(n.LEQUAL);break;case Ns:n.depthFunc(n.EQUAL);break;case Us:n.depthFunc(n.GEQUAL);break;case Fs:n.depthFunc(n.GREATER);break;case Os:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=he}},setLocked:function(he){L=he},setClear:function(he){le!==he&&(le=he,ne&&(he=1-he),n.clearDepth(he))},reset:function(){L=!1,Q=null,de=null,le=null,ne=!1}}}function r(){let L=!1,ne=null,Q=null,de=null,le=null,he=null,Re=null,He=null,ae=null;return{setTest:function(Ce){L||(Ce?oe(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(Ce){ne!==Ce&&!L&&(n.stencilMask(Ce),ne=Ce)},setFunc:function(Ce,ze,ve){(Q!==Ce||de!==ze||le!==ve)&&(n.stencilFunc(Ce,ze,ve),Q=Ce,de=ze,le=ve)},setOp:function(Ce,ze,ve){(he!==Ce||Re!==ze||He!==ve)&&(n.stencilOp(Ce,ze,ve),he=Ce,Re=ze,He=ve)},setLocked:function(Ce){L=Ce},setClear:function(Ce){ae!==Ce&&(n.clearStencil(Ce),ae=Ce)},reset:function(){L=!1,ne=null,Q=null,de=null,le=null,he=null,Re=null,He=null,ae=null}}}const s=new t,a=new i,o=new r;let c={};const l=new WeakMap;let u={},m={},h={},p=new WeakMap,g=[],v=null,d=!1,f=null,x=null,w=null,E=null,R=null,C=null,_=null,T=new Be(0,0,0),V=0,F=!1,G=null,Y=null,y=null,b=null,U=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,I=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(D)[1]),B=I>=1):D.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),B=I>=2);let k=null,P={};const K=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),H=new ut().fromArray(K),J=new ut().fromArray(ee);function re(L,ne,Q,de){const le=new Uint8Array(4),he=n.createTexture();n.bindTexture(L,he),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<Q;Re++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ne+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return he}const _e={};_e[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(Zi),zt(!1),lt(To),oe(n.CULL_FACE),At(Mi);function oe(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Ae(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function it(L,ne){return h[L]!==ne?(n.bindFramebuffer(L,ne),h[L]=ne,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ne),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Pe(L,ne){let Q=g,de=!1;if(L){Q=p.get(ne),Q===void 0&&(Q=[],p.set(ne,Q));const le=L.textures;if(Q.length!==le.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Re=le.length;he<Re;he++)Q[he]=n.COLOR_ATTACHMENT0+he;Q.length=le.length,de=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,de=!0);de&&n.drawBuffers(Q)}function je(L){return v!==L?(n.useProgram(L),v=L,!0):!1}const tt={[Si]:n.FUNC_ADD,[_h]:n.FUNC_SUBTRACT,[xh]:n.FUNC_REVERSE_SUBTRACT};tt[vh]=n.MIN,tt[Mh]=n.MAX;const Ve={[Sh]:n.ZERO,[Eh]:n.ONE,[yh]:n.SRC_COLOR,[Co]:n.SRC_ALPHA,[Ch]:n.SRC_ALPHA_SATURATE,[wh]:n.DST_COLOR,[Th]:n.DST_ALPHA,[bh]:n.ONE_MINUS_SRC_COLOR,[Po]:n.ONE_MINUS_SRC_ALPHA,[Rh]:n.ONE_MINUS_DST_COLOR,[Ah]:n.ONE_MINUS_DST_ALPHA,[Ph]:n.CONSTANT_COLOR,[Lh]:n.ONE_MINUS_CONSTANT_COLOR,[Dh]:n.CONSTANT_ALPHA,[Ih]:n.ONE_MINUS_CONSTANT_ALPHA};function At(L,ne,Q,de,le,he,Re,He,ae,Ce){if(L===Mi){d===!0&&(Ae(n.BLEND),d=!1);return}if(d===!1&&(oe(n.BLEND),d=!0),L!==gh){if(L!==f||Ce!==F){if((x!==Si||R!==Si)&&(n.blendEquation(n.FUNC_ADD),x=Si,R=Si),Ce)switch(L){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ao:n.blendFunc(n.ONE,n.ONE);break;case wo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ro:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",L);break}else switch(L){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wo:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ro:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",L);break}w=null,E=null,C=null,_=null,T.set(0,0,0),V=0,f=L,F=Ce}return}le=le||ne,he=he||Q,Re=Re||de,(ne!==x||le!==R)&&(n.blendEquationSeparate(tt[ne],tt[le]),x=ne,R=le),(Q!==w||de!==E||he!==C||Re!==_)&&(n.blendFuncSeparate(Ve[Q],Ve[de],Ve[he],Ve[Re]),w=Q,E=de,C=he,_=Re),(He.equals(T)===!1||ae!==V)&&(n.blendColor(He.r,He.g,He.b,ae),T.copy(He),V=ae),f=L,F=!1}function xt(L,ne){L.side===Sn?Ae(n.CULL_FACE):oe(n.CULL_FACE);let Q=L.side===Ut;ne&&(Q=!Q),zt(Q),L.blending===Ki&&L.transparent===!1?At(Mi):At(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){G!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),G=L)}function lt(L){L!==fh?(oe(n.CULL_FACE),L!==Y&&(L===To?n.cullFace(n.BACK):L===ph?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),Y=L}function Mn(L){L!==y&&(B&&n.lineWidth(L),y=L)}function Et(L,ne,Q){L?(oe(n.POLYGON_OFFSET_FILL),(b!==ne||U!==Q)&&(b=ne,U=Q,a.getReversed()&&(ne=-ne,Q=-Q),n.polygonOffset(ne,Q))):Ae(n.POLYGON_OFFSET_FILL)}function $t(L){L?oe(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function Kt(L){L===void 0&&(L=n.TEXTURE0+O-1),k!==L&&(n.activeTexture(L),k=L)}function Zt(L,ne,Q){Q===void 0&&(k===null?Q=n.TEXTURE0+O-1:Q=k);let de=P[Q];de===void 0&&(de={type:void 0,texture:void 0},P[Q]=de),(de.type!==L||de.texture!==ne)&&(k!==Q&&(n.activeTexture(Q),k=Q),n.bindTexture(L,ne||_e[L]),de.type=L,de.texture=ne)}function z(){const L=P[k];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Jt(){try{n.compressedTexImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function at(){try{n.compressedTexImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ot(){try{n.texSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function ge(){try{n.texSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function vt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function Le(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function Ne(){try{n.texStorage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function A(){try{n.texStorage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function M(){try{n.texImage2D(...arguments)}catch(L){Ke("WebGLState:",L)}}function q(){try{n.texImage3D(...arguments)}catch(L){Ke("WebGLState:",L)}}function se(L){return m[L]!==void 0?m[L]:n.getParameter(L)}function ie(L,ne){m[L]!==ne&&(n.pixelStorei(L,ne),m[L]=ne)}function ce(L){H.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),H.copy(L))}function pe(L){J.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function j(L,ne){let Q=l.get(ne);Q===void 0&&(Q=new WeakMap,l.set(ne,Q));let de=Q.get(L);de===void 0&&(de=n.getUniformBlockIndex(ne,L.name),n.uniformBlockBinding(ne,de,de),Q.set(L,de))}function te(L,ne,Q){const le=l.get(ne).get(L);c[le]!==Q&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,Q),c[le]=Q)}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},m={},k=null,P={},h={},c={},p=new WeakMap,g=[],v=null,d=!1,f=null,x=null,w=null,E=null,R=null,C=null,_=null,T=new Be(0,0,0),V=0,F=!1,G=null,Y=null,y=null,b=null,U=null,H.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Ae,bindFramebuffer:it,drawBuffers:Pe,useProgram:je,setBlending:At,setMaterial:xt,setFlipSided:zt,setCullFace:lt,setLineWidth:Mn,setPolygonOffset:Et,setScissorTest:$t,activeTexture:Kt,bindTexture:Zt,unbindTexture:z,compressedTexImage2D:Jt,compressedTexImage3D:at,texImage2D:M,texImage3D:q,pixelStorei:ie,getParameter:se,updateUBOMapping:j,uniformBlockBinding:te,texStorage2D:Ne,texStorage3D:A,texSubImage2D:ot,texSubImage3D:ge,compressedTexSubImage2D:vt,compressedTexSubImage3D:Le,scissor:ce,viewport:pe,reset:ue}}function tg(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap,m=new Set;let h;const p=new WeakMap,g=new Set,v=new FinalizationRegistry(A=>g.delete(A));let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,M){return d?new OffscreenCanvas(A,M):Ir("canvas")}function x(A,M,q){let se=1;const ie=Ne(A);if((ie.width>q||ie.height>q)&&(se=q/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ce=Math.floor(se*ie.width),pe=Math.floor(se*ie.height);h===void 0&&(h=f(ce,pe));const j=M?f(ce,pe):h;return j.width=ce,j.height=pe,j.getContext("2d").drawImage(A,0,0,ce,pe),De("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ce+"x"+pe+")."),j}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function w(A){return A.generateMipmaps}function E(A){n.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(A,M,q,se,ie,ce=!1){if(A!==null){if(n[A]!==void 0)return n[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;se&&(pe=e.get("EXT_texture_norm16"),pe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===n.RED&&(q===n.FLOAT&&(j=n.R32F),q===n.HALF_FLOAT&&(j=n.R16F),q===n.UNSIGNED_BYTE&&(j=n.R8),q===n.UNSIGNED_SHORT&&pe&&(j=pe.R16_EXT),q===n.SHORT&&pe&&(j=pe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.R8UI),q===n.UNSIGNED_SHORT&&(j=n.R16UI),q===n.UNSIGNED_INT&&(j=n.R32UI),q===n.BYTE&&(j=n.R8I),q===n.SHORT&&(j=n.R16I),q===n.INT&&(j=n.R32I)),M===n.RG&&(q===n.FLOAT&&(j=n.RG32F),q===n.HALF_FLOAT&&(j=n.RG16F),q===n.UNSIGNED_BYTE&&(j=n.RG8),q===n.UNSIGNED_SHORT&&pe&&(j=pe.RG16_EXT),q===n.SHORT&&pe&&(j=pe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.RG8UI),q===n.UNSIGNED_SHORT&&(j=n.RG16UI),q===n.UNSIGNED_INT&&(j=n.RG32UI),q===n.BYTE&&(j=n.RG8I),q===n.SHORT&&(j=n.RG16I),q===n.INT&&(j=n.RG32I)),M===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.RGB8UI),q===n.UNSIGNED_SHORT&&(j=n.RGB16UI),q===n.UNSIGNED_INT&&(j=n.RGB32UI),q===n.BYTE&&(j=n.RGB8I),q===n.SHORT&&(j=n.RGB16I),q===n.INT&&(j=n.RGB32I)),M===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),q===n.UNSIGNED_INT&&(j=n.RGBA32UI),q===n.BYTE&&(j=n.RGBA8I),q===n.SHORT&&(j=n.RGBA16I),q===n.INT&&(j=n.RGBA32I)),M===n.RGB&&(q===n.UNSIGNED_SHORT&&pe&&(j=pe.RGB16_EXT),q===n.SHORT&&pe&&(j=pe.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),M===n.RGBA){const te=ce?Dr:qe.getTransfer(ie);q===n.FLOAT&&(j=n.RGBA32F),q===n.HALF_FLOAT&&(j=n.RGBA16F),q===n.UNSIGNED_BYTE&&(j=te===Qe?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&pe&&(j=pe.RGBA16_EXT),q===n.SHORT&&pe&&(j=pe.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(A,M){let q;return A?M===null||M===ln||M===yi?q=n.DEPTH24_STENCIL8:M===cn?q=n.DEPTH32F_STENCIL8:M===Qi&&(q=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ln||M===yi?q=n.DEPTH_COMPONENT24:M===cn?q=n.DEPTH_COMPONENT32F:M===Qi&&(q=n.DEPTH_COMPONENT16),q}function T(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==Tt&&A.minFilter!==Ft?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function V(A){const M=new WeakRef(A);i.get(A).__ref=M,g.add(M),v.register(A,M,M)}function F(A){const M=i.get(A).__ref;M!==void 0&&(g.delete(M),v.unregister(M))}function G(A){y(A.target)}function Y(A){b(A.target)}function y(A){A.removeEventListener("dispose",G),F(A),O(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&m.delete(A)}function b(A){A.removeEventListener("dispose",Y),F(A),I(A)}function U(){for(const A of g){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?b(M):y(M))}g.clear(),m.clear()}function O(A){const M=i.get(A);if(M.__webglInit===void 0)return;const q=A.source,se=p.get(q);if(se){const ie=se[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(A),Object.keys(se).length===0&&p.delete(q)}i.remove(A)}function B(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const q=A.source,se=p.get(q);delete se[M.__cacheKey],a.memory.textures--}function I(A){const M=i.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const q=A.depthTexture;if(q&&q.renderTarget===A&&y(q),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let ce=0;ce<M.__webglFramebuffer[ie].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[ie][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)n.deleteFramebuffer(M.__webglFramebuffer[ie]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const se=A.textures;for(let ie=0,ce=se.length;ie<ce;ie++){const pe=i.get(se[ie]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(se[ie])}i.remove(A)}let D=0;function k(){D=0}function P(){return D}function K(A){D=A}function ee(){const A=D;return A>=r.maxTextures&&De("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function J(A,M){const q=i.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){const se=A.image;if(se===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(q,A,M);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+M)}function re(A,M){const q=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){xt(q,A,M);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+M)}function _e(A,M){const q=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){xt(q,A,M);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+M)}function oe(A,M){const q=i.get(A);if(A.version>0&&q.__version!==A.version){zt(q,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+M)}const Ae={[Hs]:n.REPEAT,[yn]:n.CLAMP_TO_EDGE,[ks]:n.MIRRORED_REPEAT},it={[Tt]:n.NEAREST,[Fh]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[Vs]:n.LINEAR_MIPMAP_NEAREST,[Fn]:n.LINEAR_MIPMAP_LINEAR},Pe={[Gh]:n.NEVER,[$o]:n.ALWAYS,[Hh]:n.LESS,[qo]:n.LEQUAL,[kh]:n.EQUAL,[Yo]:n.GEQUAL,[Vh]:n.GREATER,[Wh]:n.NOTEQUAL};function je(A,M){if(M.type===cn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ft||M.magFilter===Vs||M.magFilter===br||M.magFilter===Fn||M.minFilter===Ft||M.minFilter===Vs||M.minFilter===br||M.minFilter===Fn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Ae[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Ae[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Ae[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,it[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tt||M.minFilter!==br&&M.minFilter!==Fn||M.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function tt(A,M){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",G),V(M));const se=M.source;let ie=p.get(se);ie===void 0&&(ie={},p.set(se,ie));const ce=H(M);if(ce!==A.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ie[ce].usedTimes++;const pe=ie[A.__cacheKey];pe!==void 0&&(ie[A.__cacheKey].usedTimes--,pe.usedTimes===0&&B(M)),A.__cacheKey=ce,A.__webglTexture=ie[ce].texture}return q}function Ve(A,M,q){return Math.floor(Math.floor(A/q)/M)}function At(A,M,q,se){const ce=A.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,q,se,M.data);else{ce.sort((L,ne)=>L.start-ne.start);let pe=0;for(let L=1;L<ce.length;L++){const ne=ce[pe],Q=ce[L],de=ne.start+ne.count,le=Ve(Q.start,M.width,4),he=Ve(ne.start,M.width,4);Q.start<=de+1&&le===he&&Ve(Q.start+Q.count-1,M.width,4)===le?ne.count=Math.max(ne.count,Q.start+Q.count-ne.start):(++pe,ce[pe]=Q)}ce.length=pe+1;const j=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let L=0,ne=ce.length;L<ne;L++){const Q=ce[L],de=Math.floor(Q.start/4),le=Math.ceil(Q.count/4),he=de%M.width,Re=Math.floor(de/M.width),He=le,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(n.TEXTURE_2D,0,he,Re,He,ae,q,se,M.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function xt(A,M,q){let se=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=n.TEXTURE_3D);const ie=tt(A,M),ce=M.source;t.bindTexture(se,A.__webglTexture,n.TEXTURE0+q);const pe=i.get(ce);if(ce.version!==pe.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ae=qe.getPrimaries(qe.workingColorSpace),Ce=M.colorSpace===zn?null:qe.getPrimaries(M.colorSpace),ze=M.colorSpace===zn||ae===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let te=x(M.image,!1,r.maxTextureSize);te=Le(M,te);const ue=s.convert(M.format,M.colorSpace),L=s.convert(M.type);let ne=C(M.internalFormat,ue,L,M.normalized,M.colorSpace,M.isVideoTexture);je(se,M);let Q;const de=M.mipmaps,le=M.isVideoTexture!==!0,he=pe.__version===void 0||ie===!0,Re=ce.dataReady,He=T(M,te);if(M.isDepthTexture)ne=_(M.format===Bn,M.type),he&&(le?t.texStorage2D(n.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ne,te.width,te.height,0,ue,L,null));else if(M.isDataTexture)if(de.length>0){le&&he&&t.texStorage2D(n.TEXTURE_2D,He,ne,de[0].width,de[0].height);for(let ae=0,Ce=de.length;ae<Ce;ae++)Q=de[ae],le?Re&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Q.width,Q.height,ue,L,Q.data):t.texImage2D(n.TEXTURE_2D,ae,ne,Q.width,Q.height,0,ue,L,Q.data);M.generateMipmaps=!1}else le?(he&&t.texStorage2D(n.TEXTURE_2D,He,ne,te.width,te.height),Re&&At(M,te,ue,L)):t.texImage2D(n.TEXTURE_2D,0,ne,te.width,te.height,0,ue,L,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,ne,de[0].width,de[0].height,te.depth);for(let ae=0,Ce=de.length;ae<Ce;ae++)if(Q=de[ae],M.format!==un)if(ue!==null)if(le){if(Re)if(M.layerUpdates.size>0){const ze=Gl(Q.width,Q.height,M.format,M.type);for(const ve of M.layerUpdates){const et=Q.data.subarray(ve*ze/Q.data.BYTES_PER_ELEMENT,(ve+1)*ze/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,ve,Q.width,Q.height,1,ue,et)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Q.width,Q.height,te.depth,ue,Q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ne,Q.width,Q.height,te.depth,0,Q.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Q.width,Q.height,te.depth,ue,L,Q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ne,Q.width,Q.height,te.depth,0,ue,L,Q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{le&&he&&t.texStorage2D(n.TEXTURE_2D,He,ne,de[0].width,de[0].height);for(let ae=0,Ce=de.length;ae<Ce;ae++)Q=de[ae],M.format!==un?ue!==null?le?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Q.width,Q.height,ue,Q.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ne,Q.width,Q.height,0,Q.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Re&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Q.width,Q.height,ue,L,Q.data):t.texImage2D(n.TEXTURE_2D,ae,ne,Q.width,Q.height,0,ue,L,Q.data)}else if(M.isDataArrayTexture)if(le){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,ne,te.width,te.height,te.depth),Re)if(M.layerUpdates.size>0){const ae=Gl(te.width,te.height,M.format,M.type);for(const Ce of M.layerUpdates){const ze=te.data.subarray(Ce*ae/te.data.BYTES_PER_ELEMENT,(Ce+1)*ae/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,te.width,te.height,1,ue,L,ze)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,L,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,ue,L,te.data);else if(M.isData3DTexture)le?(he&&t.texStorage3D(n.TEXTURE_3D,He,ne,te.width,te.height,te.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,L,te.data)):t.texImage3D(n.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,ue,L,te.data);else if(M.isFramebufferTexture){if(he)if(le)t.texStorage2D(n.TEXTURE_2D,He,ne,te.width,te.height);else{let ae=te.width,Ce=te.height;for(let ze=0;ze<He;ze++)t.texImage2D(n.TEXTURE_2D,ze,ne,ae,Ce,0,ue,L,null),ae>>=1,Ce>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),te.parentNode!==ae){ae.appendChild(te),m.add(M),ae.onpaint=Ce=>{const ze=Ce.changedElements;for(const ve of m)ze.includes(ve.image)&&(ve.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const ze=n.RGBA,ve=n.RGBA,et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,ve,et,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(le&&he){const ae=Ne(de[0]);t.texStorage2D(n.TEXTURE_2D,He,ne,ae.width,ae.height)}for(let ae=0,Ce=de.length;ae<Ce;ae++)Q=de[ae],le?Re&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ue,L,Q):t.texImage2D(n.TEXTURE_2D,ae,ne,ue,L,Q);M.generateMipmaps=!1}else if(le){if(he){const ae=Ne(te);t.texStorage2D(n.TEXTURE_2D,He,ne,ae.width,ae.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,L,te)}else t.texImage2D(n.TEXTURE_2D,0,ne,ue,L,te);w(M)&&M.mipmapsAutoUpdate===!0&&E(se),pe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function zt(A,M,q){if(M.image.length!==6)return;const se=tt(A,M),ie=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+q);const ce=i.get(ie);if(ie.version!==ce.__version||se===!0){t.activeTexture(n.TEXTURE0+q);const pe=qe.getPrimaries(qe.workingColorSpace),j=M.colorSpace===zn?null:qe.getPrimaries(M.colorSpace),te=M.colorSpace===zn||pe===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let ve=0;ve<6;ve++)!ue&&!L?ne[ve]=x(M.image[ve],!0,r.maxCubemapSize):ne[ve]=L?M.image[ve].image:M.image[ve],ne[ve]=Le(M,ne[ve]);const Q=ne[0],de=s.convert(M.format,M.colorSpace),le=s.convert(M.type);let he=C(M.internalFormat,de,le,M.normalized,M.colorSpace);const Re=M.isVideoTexture!==!0,He=ce.__version===void 0||se===!0,ae=ie.dataReady;let Ce=T(M,Q);je(n.TEXTURE_CUBE_MAP,M);let ze;if(M.isDepthTexture){if(he=_(M.format===Bn,M.type),He)if(Re)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,Q.width,Q.height);else for(let ve=0;ve<6;ve++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,Q.width,Q.height,0,de,le,null)}else if(ue){Re&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,he,Q.width,Q.height);for(let ve=0;ve<6;ve++){ze=ne[ve].mipmaps;for(let et=0;et<ze.length;et++){const yt=ze[et];M.format!==un?de!==null?Re?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et,0,0,yt.width,yt.height,de,yt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et,he,yt.width,yt.height,0,yt.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et,0,0,yt.width,yt.height,de,le,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et,he,yt.width,yt.height,0,de,le,yt.data)}}}else{if(ze=M.mipmaps,Re&&He){ze.length>0&&Ce++;const ve=Ne(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,he,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(L){Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ne[ve].width,ne[ve].height,de,le,ne[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,ne[ve].width,ne[ve].height,0,de,le,ne[ve].data);for(let et=0;et<ze.length;et++){const Qn=ze[et].image[ve].image;Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et+1,0,0,Qn.width,Qn.height,de,le,Qn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et+1,he,Qn.width,Qn.height,0,de,le,Qn.data)}}else{Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de,le,ne[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,he,de,le,ne[ve]);for(let et=0;et<ze.length;et++){const yt=ze[et];Re?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et+1,0,0,de,le,yt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et+1,he,de,le,yt.image[ve])}}}w(M)&&M.mipmapsAutoUpdate===!0&&E(n.TEXTURE_CUBE_MAP),ce.__version=ie.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function lt(A,M,q,se,ie,ce){const pe=s.convert(q.format,q.colorSpace),j=s.convert(q.type),te=C(q.internalFormat,pe,j,q.normalized,q.colorSpace),ue=i.get(M),L=i.get(q);if(L.__renderTarget=M,!ue.__hasExternalTextures){const ne=Math.max(1,M.width>>ce),Q=Math.max(1,M.height>>ce);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,ce,te,ne,Q,M.depth,0,pe,j,null):t.texImage2D(ie,ce,te,ne,Q,0,pe,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ie,L.__webglTexture,0,ot(M)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ie,L.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Mn(A,M,q){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){const se=M.depthTexture,ie=se&&se.isDepthTexture?se.type:null,ce=_(M.stencilBuffer,ie),pe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot(M),ce,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot(M),ce,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ce,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,A)}else{const se=M.textures;for(let ie=0;ie<se.length;ie++){const ce=se[ie],pe=s.convert(ce.format,ce.colorSpace),j=s.convert(ce.type),te=C(ce.internalFormat,pe,j,ce.normalized,ce.colorSpace);ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot(M),te,M.width,M.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot(M),te,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,te,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(A,M,q){const se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(M.depthTexture);ie.__renderTarget=M;const ce=se?M.depthTexture.image[0]:M.depthTexture.image;(!ie.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),se?oe(M.depthTexture,0):J(M.depthTexture,0);const pe=ie.__webglTexture,j=ot(M),te=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,ue=M.depthTexture.format===Bn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===On)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,te,pe,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,ue,te,pe,0);else if(M.depthTexture.format===Bn)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,te,pe,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,ue,te,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(A){const M=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const se=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ie)};se.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=se}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let se=0;se<6;se++)Et(M.__webglFramebuffer[se],A,se);else A.texture.mipmaps.length>0?Et(M.__webglFramebuffer[0],A,0):Et(M.__webglFramebuffer,A,0);else if(q){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=n.createRenderbuffer(),Mn(M.__webglDepthbuffer[se],A,!1);else{const ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ce)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Mn(M.__webglDepthbuffer,A,!1);else{const ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(A,M,q){const se=i.get(A);M!==void 0&&lt(se.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&$t(A)}function Zt(A){const M=A.texture,q=i.get(A),se=i.get(M);A.addEventListener("dispose",Y),V(A);const ie=A.textures,ce=A.isWebGLCubeRenderTarget===!0,pe=ie.length>1;if(pe||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=M.version,a.memory.textures++),ce){q.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps.length>0){q.__webglFramebuffer[j]=[];for(let te=0;te<M.mipmaps.length;te++)q.__webglFramebuffer[j][te]=n.createFramebuffer()}else q.__webglFramebuffer[j]=n.createFramebuffer()}else{if(M.mipmaps.length>0){q.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)q.__webglFramebuffer[j]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(pe)for(let j=0,te=ie.length;j<te;j++){const ue=i.get(ie[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ge(A)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let j=0;j<ie.length;j++){const te=ie[j];q.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[j]);const ue=s.convert(te.format,te.colorSpace),L=s.convert(te.type),ne=C(te.internalFormat,ue,L,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),Q=ot(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,ne,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,q.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Mn(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),je(n.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)lt(q.__webglFramebuffer[j][te],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else lt(q.__webglFramebuffer[j],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);w(M)?E(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let j=0,te=ie.length;j<te;j++){const ue=ie[j],L=i.get(ue);let ne=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,L.__webglTexture),je(ne,ue),lt(q.__webglFramebuffer,A,ue,n.COLOR_ATTACHMENT0+j,ne,0),w(ue)&&E(ne)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,se.__webglTexture),je(j,M),M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)lt(q.__webglFramebuffer[te],A,M,n.COLOR_ATTACHMENT0,j,te);else lt(q.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,j,0);w(M)?E(j):M.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&$t(A)}function z(A){const M=A.textures;for(let q=0,se=M.length;q<se;q++){const ie=M[q];if(w(ie)&&ie.mipmapsAutoUpdate===!0){const ce=R(A),pe=i.get(ie).__webglTexture;t.bindTexture(ce,pe),E(ce),t.unbindTexture()}}}const Jt=[];function at(A){if(A.samples>0){if(ge(A)===!1){const M=A.textures,q=A.width,se=A.height;let ie=n.COLOR_BUFFER_BIT;const ce=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(A),j=M.length>1;if(j)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const L=i.get(M[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,q,se,0,0,q,se,ie,n.NEAREST),c===!0&&(Jt.length=0,Jt.push(n.COLOR_ATTACHMENT0+ue),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Jt.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const L=i.get(M[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ot(A){return Math.min(r.maxSamples,A.samples)}function ge(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(A){const M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Le(A,M){const q=A.colorSpace,se=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==Lr&&q!==zn&&(qe.getTransfer(q)===Qe?(se!==un||ie!==Gt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",q)),M}function Ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=P,this.setTextureUnits=K,this.setTexture2D=J,this.setTexture2DArray=re,this.setTexture3D=_e,this.setTextureCube=oe,this.rebindTextures=Kt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ge,this.dispose=U}function ng(n,e){function t(i,r=zn){let s;const a=qe.getTransfer(r);if(i===Gt)return n.UNSIGNED_BYTE;if(i===Xs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qs)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ho)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ko)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===zo)return n.BYTE;if(i===Go)return n.SHORT;if(i===Qi)return n.UNSIGNED_SHORT;if(i===Ws)return n.INT;if(i===ln)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===hn)return n.HALF_FLOAT;if(i===Vo)return n.ALPHA;if(i===Wo)return n.RGB;if(i===un)return n.RGBA;if(i===On)return n.DEPTH_COMPONENT;if(i===Bn)return n.DEPTH_STENCIL;if(i===Xo)return n.RED;if(i===Ys)return n.RED_INTEGER;if(i===ti)return n.RG;if(i===$s)return n.RG_INTEGER;if(i===Ks)return n.RGBA_INTEGER;if(i===Tr||i===Ar||i===wr||i===Rr)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zs||i===Js||i===Qs||i===js)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Js)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===js)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ea||i===ta||i===na||i===ia||i===ra||i===Cr||i===sa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ea||i===ta)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===na)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ia)return s.COMPRESSED_R11_EAC;if(i===ra)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Cr)return s.COMPRESSED_RG11_EAC;if(i===sa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===aa||i===oa||i===la||i===ca||i===ha||i===ua||i===da||i===fa||i===pa||i===ma||i===ga||i===_a||i===xa||i===va)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===aa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===la)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ca)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ha)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ua)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===da)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ma)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ga)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_a)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xa)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===va)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ma||i===Sa||i===Ea)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ma)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ya||i===ba||i===Pr||i===Ta)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ya)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ta)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new oi({vertexShader:ig,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ag extends Gn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,m=null,h=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",d=new sg,f={},x=t.getContextAttributes();let w=null,E=null;const R=[],C=[],_=new Ue;let T=null,V=null;const F=new rn;F.viewport=new ut;const G=new rn;G.viewport=new ut;const Y=[F,G],y=new Ku;let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=R[H];return J===void 0&&(J=new Ba,R[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=R[H];return J===void 0&&(J=new Ba,R[H]=J),J.getGripSpace()},this.getHand=function(H){let J=R[H];return J===void 0&&(J=new Ba,R[H]=J),J.getHandSpace()};function O(H){const J=C.indexOf(H.inputSource);if(J===-1)return;const re=R[J];re!==void 0&&(re.update(H.inputSource,H.frame,l||a),re.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",I);for(let H=0;H<R.length;H++){const J=C[H];J!==null&&(C[H]=null,R[H].disconnect(J))}b=null,U=null,d.reset();for(const H in f)delete f[H];if(e.setRenderTarget(w),p=null,h=null,m=null,r=null,E=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),V!==null){const H=V.camera;H.fov=V.fov,H.zoom=V.zoom,H.updateProjectionMatrix(),V=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",B),r.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,_e=null,oe=null;x.depth&&(oe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=x.stencil?Bn:On,_e=x.stencil?yi:ln);const Ae={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new dn(h.textureWidth,h.textureHeight,{format:un,type:Gt,depthTexture:new Oi(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new dn(p.framebufferWidth,p.framebufferHeight,{format:un,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function I(H){for(let J=0;J<H.removed.length;J++){const re=H.removed[J],_e=C.indexOf(re);_e>=0&&(C[_e]=null,R[_e].disconnect(re))}for(let J=0;J<H.added.length;J++){const re=H.added[J];let _e=C.indexOf(re);if(_e===-1){for(let Ae=0;Ae<R.length;Ae++)if(Ae>=C.length){C.push(re),_e=Ae;break}else if(C[Ae]===null){C[Ae]=re,_e=Ae;break}if(_e===-1)break}const oe=R[_e];oe&&oe.connect(re)}}function D(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let J=H.near,re=H.far;d.texture!==null&&(d.depthNear>0&&(J=d.depthNear),d.depthFar>0&&(re=d.depthFar)),y.near=G.near=F.near=J,y.far=G.far=F.far=re,(b!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,U=y.far),y.layers.mask=H.layers.mask|6,F.layers.mask=y.layers.mask&-5,G.layers.mask=y.layers.mask&-3;const _e=H.parent,oe=y.cameras;D(y,_e);for(let Ae=0;Ae<oe.length;Ae++)D(oe[Ae],_e);y.projectionMatrix.copy(F.projectionMatrix),y.projectionMatrixInverse.copy(F.projectionMatrixInverse),V===null&&H.isPerspectiveCamera&&(V={camera:H,fov:H.fov,zoom:H.zoom}),k(H,y,_e)};function k(H,J,re){re===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(re.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=tr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(H){c=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(y)},this.getCameraTexture=function(H){return f[H]};let P=null;function K(H,J){if(u=J.getViewerPose(l||a),g=J,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let _e=!1;re.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let Pe=0;Pe<re.length;Pe++){const je=re[Pe];let tt=null;if(p!==null)tt=p.getViewport(je);else{const At=m.getViewSubImage(h,je);tt=At.viewport,Pe===0&&(e.setRenderTargetTextures(E,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(E))}let Ve=Y[Pe];Ve===void 0&&(Ve=new rn,Ve.layers.enable(Pe),Ve.viewport=new ut,Y[Pe]=Ve),Ve.matrix.fromArray(je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(tt.x,tt.y,tt.width,tt.height),Pe===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(Ve)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){m=i.getBinding();const Pe=m.getDepthInformation(re[0]);Pe&&Pe.isValid&&Pe.texture&&d.init(Pe,r.renderState)}if(oe&&oe.includes("camera-access")&&v){e.state.unbindTexture(),m=i.getBinding();for(let Pe=0;Pe<re.length;Pe++){const je=re[Pe].camera;if(je){let tt=f[je];tt||(tt=new wl,f[je]=tt);const Ve=m.getCameraImage(je);tt.sourceTexture=Ve}}}}for(let re=0;re<R.length;re++){const _e=C[re],oe=R[re];_e!==null&&oe!==void 0&&oe.update(_e,J,l||a)}P&&P(H,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const ee=new Hl;ee.setAnimationLoop(K),this.setAnimationLoop=function(H){P=H},this.dispose=function(){}}}const og=new st,xc=new Oe;xc.set(-1,0,0,0,1,0,0,0,1);function lg(n,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,Cl(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,x,w,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(d,f):f.isMeshLambertMaterial?(s(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(d,f),m(d,f)):f.isMeshPhongMaterial?(s(d,f),u(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(d,f),h(d,f),f.isMeshPhysicalMaterial&&p(d,f,E)):f.isMeshMatcapMaterial?(s(d,f),g(d,f)):f.isMeshDepthMaterial?s(d,f):f.isMeshDistanceMaterial?(s(d,f),v(d,f)):f.isMeshNormalMaterial?s(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?c(d,f,x,w):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Ut&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Ut&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const x=e.get(f),w=x.envMap,E=x.envMapRotation;w&&(d.envMap.value=w,d.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(E)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(xc),d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,x,w){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*x,d.scale.value=w*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function m(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function p(d,f,x){d.ior.value=f.ior,f.diffuseRoughness>0&&(d.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.retroreflectivity>0&&(d.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function v(d,f){const x=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cg(n,e,t,i){let r={},s={};function a(x,w){const E=w.program;i.uniformBlockBinding(x,E,r[x.id])}function o(x,w){let E=r[x.id];E===void 0&&(g(x),E=c(x),r[x.id]=E,x.addEventListener("dispose",d));const R=w.program;i.updateUBOMapping(x,R);const C=e.render.frame;s[x.id]!==C&&(l(x),s[x.id]=C)}function c(x){const w=n.createBuffer(),E=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function l(x){const w=r[x.id],E=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,_=E.length;C<_;C++){const T=E[C];if(Array.isArray(T))for(let V=0,F=T.length;V<F;V++)u(T[V],C,V,R);else u(T,C,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(x,w,E,R){if(h(x,w,E,R)===!0){const C=x.__offset,_=x.value;if(Array.isArray(_)){let T=0;for(let V=0;V<_.length;V++){const F=_[V],G=v(F,!0);m(F,x.__data,T),T+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,C,x.__data)}}function m(x,w,E){typeof x=="number"||typeof x=="boolean"?w[E]=x:x.isMatrix3?(w[E]=x.elements[0],w[E+1]=x.elements[1],w[E+2]=x.elements[2],w[E+3]=0,w[E+4]=x.elements[3],w[E+5]=x.elements[4],w[E+6]=x.elements[5],w[E+7]=0,w[E+8]=x.elements[6],w[E+9]=x.elements[7],w[E+10]=x.elements[8],w[E+11]=0):ArrayBuffer.isView(x)?w.set(x.subarray(0,w.length-E),E):x.toArray(w,E)}function h(x,w,E,R){const C=x.value,_=w+"_"+E;if(Array.isArray(C)){R[_]===void 0&&(R[_]=[]);const T=R[_];let V=!1;for(let F=0;F<C.length;F++)p(C[F],T,F)===!0&&(V=!0);return V}return p(C,R,_)}function p(x,w,E){if(w[E]===void 0)return typeof x=="number"||typeof x=="boolean"?w[E]=x:ArrayBuffer.isView(x)?w[E]=x.slice():w[E]=x.clone(),!0;{const R=w[E];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(x){const w=x.uniforms;let E=0;const R=16;for(let _=0,T=w.length;_<T;_++){const V=Array.isArray(w[_])?w[_]:[w[_]];for(let F=0,G=V.length;F<G;F++){const Y=V[F],y=Array.isArray(Y.value)?Y.value:[Y.value],b=Array.isArray(w[_])||Array.isArray(Y.value);let U=E;for(let B=0,I=y.length;B<I;B++){const D=y[B],k=v(D,b),P=E%R,K=P%k.boundary,ee=P+K;E+=K,ee!==0&&R-ee<k.storage&&(E+=R-ee),B===0&&(U=E),E+=k.storage}const O=Y.type==="int"?Int32Array:Y.type==="uint"?Uint32Array:Float32Array;Y.__data=new O((E-U)/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U}}const C=E%R;return C>0&&(E+=R-C),x.__size=E,x.__cache={},this}function v(x,w){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=16,E.storage=48):x.isMatrix4?(E.boundary=16,E.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):De("WebGLRenderer: Unsupported uniform value type.",x),w===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function d(x){const w=x.target;w.removeEventListener("dispose",d),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function f(){for(const x in r)n.deleteBuffer(r[x]);r={},s={}}return{bind:a,update:o,dispose:f}}const hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gn=null;function ug(){return gn===null&&(gn=new Iu(hg,16,16,ti,hn),gn.name="DFG_LUT",gn.minFilter=Ft,gn.magFilter=Ft,gn.wrapS=yn,gn.wrapT=yn,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}class dg{constructor(e={}){const{canvas:t=Yh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Gt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=p,d=new Set([Ks,$s,Ys]),f=new Set([Gt,ln,Qi,yi,Xs,qs]),x=new Uint32Array(4),w=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let R=null,C=null;const _=[],T=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let G=!1,Y=null,y=null,b=null,U=null;this._outputColorSpace=Vt;let O=0,B=0,I=null,D=-1,k=null;const P=new ut,K=new ut;let ee=null;const H=new Be(0);let J=0,re=t.width,_e=t.height,oe=1,Ae=null,it=null;const Pe=new ut(0,0,re,_e),je=new ut(0,0,re,_e);let tt=!1;const Ve=new lr,At=new ja;let xt=!1,zt=!1;const lt=new st,Mn=new W,Et=new ut,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Zt(){return I===null?oe:1}let z=i;function Jt(S,N){return t.getContext(S,N)}let at,ot,ge,vt,Le,Ne,A,M,q,se,ie,ce,pe,j,te,ue,L,ne,Q,de,le,he,Re;try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ps}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){const N="webgl2";if(z=Jt(N,S),z===null)throw Jt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(S){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ke("WebGLRenderer: "+S.message),S}function He(){at=new mp(z),at.init(),le=new ng(z,at),ot=new rp(z,at,e,le),ge=new eg(z,at),ot.reversedDepthBuffer&&h&&ge.buffers.depth.setReversed(!0),y=z.createFramebuffer(),b=z.createFramebuffer(),U=z.createFramebuffer(),vt=new xp(z),Le=new Gm,Ne=new tg(z,at,ge,Le,ot,le,vt),A=new pp(F),M=new ju(z),he=new np(z,M),q=new gp(z,M,vt,he),se=new Mp(z,q,M,he,vt),ne=new vp(z,ot,Ne),te=new sp(Le),ie=new zm(F,A,at,ot,he,te),ce=new lg(F,Le),pe=new km,j=new $m(at),L=new tp(F,A,ge,se,g,c),ue=new jm(F,se,ot),Re=new cg(z,vt,ot,ge),Q=new ip(z,at,vt),de=new _p(z,at,vt),vt.programs=ie.programs,F.capabilities=ot,F.extensions=at,F.properties=Le,F.renderLists=pe,F.shadowMap=ue,F.state=ge,F.info=vt}v!==Gt&&(V=new Ep(v,t.width,t.height,o,r,s));const ae=new ag(F,z);this.xr=ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=at.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=at.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(S){S!==void 0&&(oe=S,this.setSize(re,_e,!1))},this.getSize=function(S){return S.set(re,_e)},this.setSize=function(S,N,Z=!0){if(ae.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}re=S,_e=N,t.width=Math.floor(S*oe),t.height=Math.floor(N*oe),Z===!0&&(t.style.width=S+"px",t.style.height=N+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(re*oe,_e*oe).floor()},this.setDrawingBufferSize=function(S,N,Z){re=S,_e=N,oe=Z,t.width=Math.floor(S*Z),t.height=Math.floor(N*Z),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(v===Gt){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Pe)},this.setViewport=function(S,N,Z,X){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,N,Z,X),ge.viewport(P.copy(Pe).multiplyScalar(Zt()).round())},this.getScissor=function(S){return S.copy(je)},this.setScissor=function(S,N,Z,X){S.isVector4?je.set(S.x,S.y,S.z,S.w):je.set(S,N,Z,X),ge.scissor(K.copy(je).multiplyScalar(Zt()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){ge.setScissorTest(tt=S)},this.setOpaqueSort=function(S){Ae=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,Z=!0){let X=0;if(S){let $=!1;if(I!==null){const me=I.texture.format;$=d.has(me)}if($){const me=I.texture.type,Se=f.has(me),fe=L.getClearColor(),Me=L.getClearAlpha(),we=fe.r,Fe=fe.g,We=fe.b;Se?(x[0]=we,x[1]=Fe,x[2]=We,x[3]=Me,z.clearBufferuiv(z.COLOR,0,x)):(w[0]=we,w[1]=Fe,w[2]=We,w[3]=Me,z.clearBufferiv(z.COLOR,0,w))}else X|=z.COLOR_BUFFER_BIT}N&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),Y=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),L.dispose(),pe.dispose(),j.dispose(),Ne.dispose(),Le.dispose(),A.dispose(),se.dispose(),q.dispose(),he.dispose(),Re.dispose(),ie.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ih),ae.removeEventListener("sessionend",rh),mi.stop()};function Ce(S){S.preventDefault(),Jo("WebGLRenderer: Context Lost."),G=!0}function ze(){Jo("WebGLRenderer: Context Restored."),G=!1;const S=vt.autoReset,N=ue.enabled,Z=ue.autoUpdate,X=ue.needsUpdate,$=ue.type;He(),vt.autoReset=S,ue.enabled=N,ue.autoUpdate=Z,ue.needsUpdate=X,ue.type=$}function ve(S){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function et(S){const N=S.target;N.removeEventListener("dispose",et),yt(N)}function yt(S){Qn(S),Le.remove(S)}function Qn(S){const N=Le.get(S).programs;N!==void 0&&(N.forEach(function(Z){ie.releaseProgram(Z)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,Z,X,$,me){N===null&&(N=$t);const Se=$.isMesh&&$.matrixWorld.determinantAffine()<0,fe=E_(S,N,Z,X,$);ge.setMaterial(X,Se);let Me=Z.index,we=1;if(X.wireframe===!0){if(Me=q.getWireframeAttribute(Z),Me===void 0)return;we=2}const Fe=Z.drawRange,We=Z.attributes.position;let Ee=Fe.start*we,Xe=(Fe.start+Fe.count)*we;me!==null&&(Ee=Math.max(Ee,me.start*we),Xe=Math.min(Xe,(me.start+me.count)*we)),Me!==null?(Ee=Math.max(Ee,0),Xe=Math.min(Xe,Me.count)):We!=null&&(Ee=Math.max(Ee,0),Xe=Math.min(Xe,We.count));const pt=Xe-Ee;if(pt<0||pt===1/0)return;he.setup($,X,fe,Z,Me);let rt,nt=Q;if(Me!==null&&(rt=M.get(Me),nt=de,nt.setIndex(rt)),$.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*Zt()),nt.setMode(z.LINES)):nt.setMode(z.TRIANGLES);else if($.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),ge.setLineWidth(Pt*Zt()),$.isLineSegments?nt.setMode(z.LINES):$.isLineLoop?nt.setMode(z.LINE_LOOP):nt.setMode(z.LINE_STRIP)}else $.isPoints?nt.setMode(z.POINTS):$.isSprite&&nt.setMode(z.TRIANGLES);if($.isBatchedMesh)if(at.get("WEBGL_multi_draw"))nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Pt=$._multiDrawStarts,ye=$._multiDrawCounts,Nt=$._multiDrawCount,Je=Me?M.get(Me).bytesPerElement:1,gi=Le.get(X).currentProgram.getUniforms();for(let Lt=0;Lt<Nt;Lt++)gi.setValue(z,"_gl_DrawID",Lt),nt.render(Pt[Lt]/Je,ye[Lt])}else if($.isInstancedMesh)nt.renderInstances(Ee,pt,$.count);else if(Z.isInstancedBufferGeometry){const Pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ye=Math.min(Z.instanceCount,Pt);nt.renderInstances(Ee,pt,ye)}else nt.render(Ee,pt)};function nh(S,N,Z,X){Y!==null&&S.isNodeMaterial&&Y.setObject(X,S),xt===!0&&te.setState(S,Z,!1),S.transparent===!0&&S.side===Sn&&S.forceSinglePass===!1?(S.side=Ut,S.needsUpdate=!0,Er(S,N,X),S.side=ei,S.needsUpdate=!0,Er(S,N,X),S.side=Sn):Er(S,N,X)}this.compile=function(S,N,Z=null){Z===null&&(Z=S),Y!==null&&Y.renderStart(S,N,Z),C=j.get(Z),C.init(N),T.push(C),Z.traverseVisible(function($){$.isLight&&$.layers.test(N.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),S!==Z&&S.traverseVisible(function($){$.isLight&&$.layers.test(N.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),C.setupLights(),Y!==null&&Y.updateLights(C.state.lightsArray),zt=this.localClippingEnabled,xt=te.init(this.clippingPlanes,zt),xt===!0&&te.setGlobalState(this.clippingPlanes,N),Y!==null&&ue.render(C.state.shadowsArray,Z,N);const X=new Set;return S.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const me=$.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const fe=me[Se];nh(fe,Z,N,$),X.add(fe)}else nh(me,Z,N,$),X.add(me)}),C=T.pop(),Y!==null&&Y.renderEnd(),X},this.compileAsync=function(S,N,Z=null){const X=this.compile(S,N,Z);return new Promise($=>{function me(){if(X.forEach(function(Se){const Me=Le.get(Se).currentProgram;(Me===void 0||Me.isReady())&&X.delete(Se)}),X.size===0){$(S);return}setTimeout(me,10)}at.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Eo=null;function M_(S){Eo&&Eo(S)}function ih(){mi.stop()}function rh(){mi.start()}const mi=new Hl;mi.setAnimationLoop(M_),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(S){Eo=S,ae.setAnimationLoop(S),S===null?mi.stop():mi.start()},ae.addEventListener("sessionstart",ih),ae.addEventListener("sessionend",rh),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Y!==null&&Y.renderStart(S,N);const Z=ae.enabled===!0&&ae.isPresenting===!0,X=V!==null&&(I===null||Z)&&V.begin(F,I);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(F,S,N,I),C=j.get(S,T.length),C.init(N),C.state.textureUnits=Ne.getTextureUnits(),T.push(C),lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?At.setFromArrayCamera(N):Ve.setFromProjectionMatrix(lt,Qt,N.reversedDepth),zt=this.localClippingEnabled,xt=te.init(this.clippingPlanes,zt),R=pe.get(S,_.length),R.init(),_.push(R),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const Se=F.xr.getDepthSensingMesh();Se!==null&&yo(Se,N,-1/0,F.sortObjects)}yo(S,N,0,F.sortObjects),R.finish(),Y!==null&&Y.updateLights(C.state.lightsArray),F.sortObjects===!0&&R.sort(Ae,it),Kt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Kt&&L.addToRenderList(R,S),this.info.autoReset===!0&&this.info.reset(),xt===!0&&te.beginShadows();const $=C.state.shadowsArray;if(ue.render($,S,N),xt===!0&&te.endShadows(),(X&&V.hasRenderPass())===!1){const Se=R.opaque,fe=R.transmissive;if(C.setupLights(),N.isArrayCamera){const Me=N.cameras;if(fe.length>0)for(let we=0,Fe=Me.length;we<Fe;we++){const We=Me[we];ah(Se,fe,S,We)}Kt&&L.render(S);for(let we=0,Fe=Me.length;we<Fe;we++){const We=Me[we];sh(R,S,We,We.viewport)}}else fe.length>0&&ah(Se,fe,S,N),Kt&&L.render(S),sh(R,S,N)}I!==null&&B===0&&(Ne.updateMultisampleRenderTarget(I),Ne.updateRenderTargetMipmap(I)),X&&V.end(F),S.isScene===!0&&S.onAfterRender(F,S,N),he.resetDefaultState(),D=-1,k=null,T.pop(),T.length>0?(C=T[T.length-1],Ne.setTextureUnits(C.state.textureUnits),xt===!0&&te.setGlobalState(F.clippingPlanes,C.state.camera)):C=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,Y!==null&&Y.renderEnd()};function yo(S,N,Z,X){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)C.pushLight(S),S.castShadow&&C.pushShadow(S);else if(S.isSprite){const Se=N.isArrayCamera?At:Ve;if(!S.frustumCulled||S.intersectsFrustum(Se)){X&&Et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(lt);const fe=se.update(S),Me=S.material;Me.visible&&R.push(S,fe,Me,Z,Et.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){const Se=N.isArrayCamera?At:Ve;if(!S.frustumCulled||S.intersectsFrustum(Se)){const fe=se.update(S),Me=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Et.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Et.copy(fe.boundingSphere.center)),Et.applyMatrix4(S.matrixWorld).applyMatrix4(lt)),Array.isArray(Me)){const we=fe.groups;for(let Fe=0,We=we.length;Fe<We;Fe++){const Ee=we[Fe],Xe=Me[Ee.materialIndex];Xe&&Xe.visible&&R.push(S,fe,Xe,Z,Et.z,Ee,N)}}else Me.visible&&R.push(S,fe,Me,Z,Et.z,null,N)}}}const me=S.children;for(let Se=0,fe=me.length;Se<fe;Se++)yo(me[Se],N,Z,X)}function sh(S,N,Z,X){const{opaque:$,transmissive:me,transparent:Se}=S;C.setupLightsView(Z),xt===!0&&te.setGlobalState(F.clippingPlanes,Z),X&&ge.viewport(P.copy(X)),$.length>0&&Rs($,N,Z),me.length>0&&Rs(me,N,Z),Se.length>0&&Rs(Se,N,Z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ah(S,N,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[X.id]===void 0){const Ee=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[X.id]=new dn(1,1,{generateMipmaps:!0,type:Ee?hn:Gt,minFilter:Fn,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const me=C.state.transmissionRenderTarget[X.id],Se=X.viewport||P;me.setSize(Se.z*F.transmissionResolutionScale,Se.w*F.transmissionResolutionScale);const fe=F.getRenderTarget(),Me=F.getActiveCubeFace(),we=F.getActiveMipmapLevel();F.setRenderTarget(me),F.getClearColor(H),J=F.getClearAlpha(),J<1&&F.setClearColor(16777215,.5),F.clear(),Kt&&L.render(Z);const Fe=F.toneMapping;F.toneMapping=En;const We=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),C.setupLightsView(X),xt===!0&&te.setGlobalState(F.clippingPlanes,X),Rs(S,Z,X),Ne.updateMultisampleRenderTarget(me),Ne.updateRenderTargetMipmap(me),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Xe=0,pt=N.length;Xe<pt;Xe++){const rt=N[Xe],{object:nt,geometry:Pt,material:ye,group:Nt}=rt;if(ye.side===Sn&&nt.layers.test(X.layers)){const Je=ye.side;ye.side=Ut,ye.needsUpdate=!0,oh(nt,Z,X,Pt,ye,Nt),ye.side=Je,ye.needsUpdate=!0,Ee=!0}}Ee===!0&&(Ne.updateMultisampleRenderTarget(me),Ne.updateRenderTargetMipmap(me))}F.setRenderTarget(fe,Me,we),F.setClearColor(H,J),We!==void 0&&(X.viewport=We),F.toneMapping=Fe}function Rs(S,N,Z){const X=N.isScene===!0?N.overrideMaterial:null;for(let $=0,me=S.length;$<me;$++){const Se=S[$],{object:fe,geometry:Me,group:we}=Se;let Fe=Se.material;Fe.allowOverride===!0&&X!==null&&(Fe=X),fe.layers.test(Z.layers)&&oh(fe,N,Z,Me,Fe,we)}}function oh(S,N,Z,X,$,me){Y!==null&&$.isNodeMaterial&&Y.setObject(S,$),S.onBeforeRender(F,N,Z,X,$,me),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(F,N,Z,X,S,me),$.transparent===!0&&$.side===Sn&&$.forceSinglePass===!1?($.side=Ut,$.needsUpdate=!0,F.renderBufferDirect(Z,N,X,$,S,me),$.side=ei,$.needsUpdate=!0,F.renderBufferDirect(Z,N,X,$,S,me),$.side=Sn):F.renderBufferDirect(Z,N,X,$,S,me),S.onAfterRender(F,N,Z,X,$,me)}function lh(S){let N=0;for(const Z of S)Z.texture!==null&&N++;return N}function Er(S,N,Z){N.isScene!==!0&&(N=$t);const X=Le.get(S),$=C.state.lights,me=C.state.shadowsArray,Se=$.state.version,fe=ie.getParameters(S,$.state,me,N,Z,C.state.lightProbeGridArray),Me=ie.getProgramCacheKey(fe);let we=X.programs;X.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,X.fog=N.fog;const Fe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;X.envMap=A.get(S.envMap||X.environment,Fe),X.envMapRotation=X.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",et),we=new Map,X.programs=we,X.programVariants=new Map);let We=we.get(Me);if(We!==void 0){if(X.currentProgram===We&&X.lightsStateVersion===Se)return hh(S,fe),We}else fe.uniforms=ie.getUniforms(S),Y!==null&&S.isNodeMaterial&&Y.build(S,Z,fe),S.onBeforeCompile(fe,F),We=ie.acquireProgram(fe,Me),we.set(Me,We),X.uniforms=fe.uniforms;const Ee=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=te.uniform),hh(S,fe),X.needsLights=b_(S),X.lightsStateVersion=Se,X.needsLights&&(Ee.ambientLightColor.value=$.state.ambient,Ee.lightProbe.value=$.state.probe,Ee.sunLights.value=$.state.sun,Ee.sunLightShadows.value=$.state.sunShadow,Ee.directionalLights.value=$.state.directional,Ee.directionalLightShadows.value=$.state.directionalShadow,Ee.spotLights.value=$.state.spot,Ee.spotLightShadows.value=$.state.spotShadow,Ee.rectAreaLights.value=$.state.rectArea,Ee.ltc_1.value=$.state.rectAreaLTC1,Ee.ltc_2.value=$.state.rectAreaLTC2,Ee.pointLights.value=$.state.point,Ee.pointLightShadows.value=$.state.pointShadow,Ee.hemisphereLights.value=$.state.hemi,Ee.sunShadowMatrix.value=$.state.sunShadowMatrix,Ee.sunShadowCascade.value=$.state.sunShadowCascade,Ee.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ee.spotLightMatrix.value=$.state.spotLightMatrix,Ee.spotLightMap.value=$.state.spotLightMap,Ee.pointShadowMatrix.value=$.state.pointShadowMatrix),X.numLightProbeGrids=lh(C.state.lightProbeGridArray),X.currentProgram=We,X.uniformsList=null,We}function S_(S,N,Z,X,$){const me=Le.get(S),Se=me.currentProgram.id+","+X+","+$;let fe=me.programVariants.get(Se);return fe===void 0?(fe=Er(S,N,Z),me.programVariants.set(Se,fe)):(me.currentProgram=fe,me.uniformsList=null,me.outputColorSpace=X,me.toneMapping=$),fe}function ch(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=ds.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function hh(S,N){const Z=Le.get(S);Z.outputColorSpace=N.outputColorSpace,Z.batching=N.batching,Z.batchingColor=N.batchingColor,Z.instancing=N.instancing,Z.instancingColor=N.instancingColor,Z.instancingMorph=N.instancingMorph,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function E_(S,N,Z,X,$){N.isScene!==!0&&(N=$t),Ne.resetTextureUnits();const me=N.fog,Se=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?N.environment:null,fe=I===null?F.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qe.workingColorSpace,Me=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,we=A.get(X.envMap||Se,Me),Fe=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,We=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ee=!!Z.morphAttributes.position,Xe=!!Z.morphAttributes.normal,pt=!!Z.morphAttributes.color;let rt=En;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(rt=F.toneMapping);const nt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pt=nt!==void 0?nt.length:0,ye=Le.get(X),Nt=C.state.lights;if(xt===!0&&(zt===!0||S!==k)){const ct=S===k&&X.id===D;te.setState(X,S,ct)}let Je=!1,gi=!1;X.version===ye.__version?ye.needsLights&&ye.lightsStateVersion!==Nt.state.version||$.isBatchedMesh&&ye.batching===!1||!$.isBatchedMesh&&ye.batching===!0||$.isBatchedMesh&&ye.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&ye.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&ye.instancing===!1||!$.isInstancedMesh&&ye.instancing===!0||$.isSkinnedMesh&&ye.skinning===!1||!$.isSkinnedMesh&&ye.skinning===!0||$.isInstancedMesh&&ye.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ye.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ye.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ye.instancingMorph===!1&&$.morphTexture!==null||ye.envMap!==we||X.fog===!0&&ye.fog!==me||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==te.numPlanes||ye.numIntersection!==te.numIntersection)||ye.vertexAlphas!==Fe||ye.vertexTangents!==We||ye.morphTargets!==Ee||ye.morphNormals!==Xe||ye.morphColors!==pt||ye.morphTargetsCount!==Pt||ye.numLightProbeGrids!==lh(C.state.lightProbeGridArray)?Je=!0:(ye.outputColorSpace!==fe||ye.toneMapping!==rt)&&(gi=!0):(Je=!0,ye.__version=X.version);let Lt=ye.currentProgram;(Je===!0||gi===!0)&&(Lt=gi===!0?S_(X,N,$,fe,rt):Er(X,N,$),Y&&X.isNodeMaterial&&Y.onUpdateProgram(X,Lt,ye));let Cs=!1,jn=!1,_i=!1;const $e=Lt.getUniforms(),wt=ye.uniforms;if(ge.useProgram(Lt.program)&&(Cs=!0,jn=!0,_i=!0),X.id!==D&&(D=X.id,jn=!0),Cs||k!==S){ge.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),$e.setValue(z,"projectionMatrix",S.projectionMatrix),$e.setValue(z,"viewMatrix",S.matrixWorldInverse);const bt=$e.map.cameraPosition;bt!==void 0&&bt.setValue(z,Mn.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&$e.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&$e.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,jn=!0,_i=!0)}if(ye.needsLights&&(Nt.state.sunShadowMap.length>0&&$e.setValue(z,"sunShadowMap",Nt.state.sunShadowMap,Ne),Nt.state.directionalShadowMap.length>0&&$e.setValue(z,"directionalShadowMap",Nt.state.directionalShadowMap,Ne),Nt.state.spotShadowMap.length>0&&$e.setValue(z,"spotShadowMap",Nt.state.spotShadowMap,Ne),Nt.state.pointShadowMap.length>0&&$e.setValue(z,"pointShadowMap",Nt.state.pointShadowMap,Ne)),$.isSkinnedMesh){$e.setOptional(z,$,"bindMatrix"),$e.setOptional(z,$,"bindMatrixInverse");const ct=$.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),$e.setValue(z,"boneTexture",ct.boneTexture,Ne))}$.isBatchedMesh&&($e.setOptional(z,$,"batchingTexture"),$e.setValue(z,"batchingTexture",$._matricesTexture,Ne),$e.setOptional(z,$,"batchingIdTexture"),$e.setValue(z,"batchingIdTexture",$._indirectTexture,Ne),$e.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&$e.setValue(z,"batchingColorTexture",$._colorsTexture,Ne));const on=Z.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&ne.update($,Z,Lt),(jn||ye.receiveShadow!==$.receiveShadow)&&(ye.receiveShadow=$.receiveShadow,$e.setValue(z,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&N.environment!==null&&(wt.envMapIntensity.value=N.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=ug()),jn){if($e.setValue(z,"toneMappingExposure",F.toneMappingExposure),ye.needsLights&&y_(wt,_i),me&&X.fog===!0&&ce.refreshFogUniforms(wt,me),ce.refreshMaterialUniforms(wt,X,oe,_e,C.state.transmissionRenderTarget[S.id]),ye.needsLights&&ye.numLightProbeGrids>0){const ct=E;let bt=0;for(const Un of C.state.lightProbeGridArray)Un.texture!==null&&(ct.textures[bt]=Un.texture,ct.min[bt]=Un.boundingBox.min,ct.max[bt]=Un.boundingBox.max,ct.resolution[bt]=Un.resolution,bt++);for(const Un in ct)ct[Un].length=bt;wt.probesSH.value=ct.textures,wt.probesMin.value=ct.min,wt.probesMax.value=ct.max,wt.probesResolution.value=ct.resolution}ds.upload(z,ch(ye),wt,Ne)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ds.upload(z,ch(ye),wt,Ne),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&$e.setValue(z,"center",$.center),$e.setValue(z,"modelViewMatrix",$.modelViewMatrix),$e.setValue(z,"normalMatrix",$.normalMatrix),$e.setValue(z,"modelMatrix",$.matrixWorld),X.uniformsGroups!==void 0){const ct=X.uniformsGroups;for(let bt=0,Un=ct.length;bt<Un;bt++){const dh=ct[bt];Re.update(dh,Lt),Re.bind(dh,Lt)}}return Lt}function y_(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function b_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,N,Z){const X=Le.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Le.get(S.texture).__webglTexture=N,Le.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const Z=Le.get(S);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,Z=0){I=S,O=N,B=Z;let X=null,$=!1,me=!1;if(S){const fe=Le.get(S);if(fe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(z.FRAMEBUFFER,fe.__webglFramebuffer),P.copy(S.viewport),K.copy(S.scissor),ee=S.scissorTest,ge.viewport(P),ge.scissor(K),ge.setScissorTest(ee),D=-1;return}else if(fe.__webglFramebuffer===void 0)Ne.setupRenderTarget(S);else if(fe.__hasExternalTextures)Ne.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Fe=S.depthTexture;if(fe.__boundDepthTexture!==Fe){if(Fe!==null&&Le.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);const we=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[N])?X=we[N][Z]:X=we[N],$=!0):S.samples>0&&Ne.useMultisampledRTT(S)===!1?X=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?X=we[Z]:X=we,P.copy(S.viewport),K.copy(S.scissor),ee=S.scissorTest}else P.copy(Pe).multiplyScalar(oe).floor(),K.copy(je).multiplyScalar(oe).floor(),ee=tt;if(Z!==0&&(X=y),ge.bindFramebuffer(z.FRAMEBUFFER,X)&&ge.drawBuffers(S,X),ge.viewport(P),ge.scissor(K),ge.setScissorTest(ee),$){const fe=Le.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,Z)}else if(me){const fe=N;for(let Me=0;Me<S.textures.length;Me++){const we=Le.get(S.textures[Me]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Me,we.__webglTexture,Z,fe)}}else if(S!==null&&Z!==0){const fe=Le.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fe.__webglTexture,Z)}D=-1};function uh(S){const N=Le.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=ot.textureFormatReadable(S.format),N.__typeReadable=ot.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,Z,X,$,me,Se,fe=0){if(!(S&&S.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me){ge.bindFramebuffer(z.FRAMEBUFFER,Me);try{const we=S.textures[fe],Fe=we.format,We=we.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+fe);const Ee=uh(we);if(Ee.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-X&&Z>=0&&Z<=S.height-$&&z.readPixels(N,Z,X,$,le.convert(Fe),le.convert(We),me)}finally{const we=I!==null?Le.get(I).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,N,Z,X,$,me,Se,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me)if(N>=0&&N<=S.width-X&&Z>=0&&Z<=S.height-$){ge.bindFramebuffer(z.FRAMEBUFFER,Me);const we=S.textures[fe],Fe=we.format,We=we.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+fe);const Ee=uh(we);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.bufferData(z.PIXEL_PACK_BUFFER,me.byteLength,z.STREAM_READ),z.readPixels(N,Z,X,$,le.convert(Fe),le.convert(We),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const pt=I!==null?Le.get(I).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,pt);const rt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await $h(z,rt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,me),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Xe),z.deleteSync(rt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,Z=0){const X=Math.pow(2,-Z),$=Math.floor(S.image.width*X),me=Math.floor(S.image.height*X),Se=N!==null?N.x:0,fe=N!==null?N.y:0;Ne.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Se,fe,$,me),ge.unbindTexture()},this.copyTextureToTexture=function(S,N,Z=null,X=null,$=0,me=0){let Se,fe,Me,we,Fe,We,Ee,Xe,pt;const rt=S.isCompressedTexture?S.mipmaps[me]:S.image;if(Z!==null)Se=Z.max.x-Z.min.x,fe=Z.max.y-Z.min.y,Me=Z.isBox3?Z.max.z-Z.min.z:1,we=Z.min.x,Fe=Z.min.y,We=Z.isBox3?Z.min.z:0;else{const $e=Math.pow(2,-$);Se=Math.floor(rt.width*$e),fe=Math.floor(rt.height*$e),S.isDataArrayTexture?Me=rt.depth:S.isData3DTexture?Me=Math.floor(rt.depth*$e):Me=1,we=0,Fe=0,We=0}X!==null?(Ee=X.x,Xe=X.y,pt=X.z):(Ee=0,Xe=0,pt=0);const nt=le.convert(N.format),Pt=le.convert(N.type);let ye;N.isData3DTexture?(Ne.setTexture3D(N,0),ye=z.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ne.setTexture2DArray(N,0),ye=z.TEXTURE_2D_ARRAY):(Ne.setTexture2D(N,0),ye=z.TEXTURE_2D),ge.activeTexture(z.TEXTURE0),ge.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,N.flipY),ge.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ge.pixelStorei(z.UNPACK_ALIGNMENT,N.unpackAlignment);const Nt=ge.getParameter(z.UNPACK_ROW_LENGTH),Je=ge.getParameter(z.UNPACK_IMAGE_HEIGHT),gi=ge.getParameter(z.UNPACK_SKIP_PIXELS),Lt=ge.getParameter(z.UNPACK_SKIP_ROWS),Cs=ge.getParameter(z.UNPACK_SKIP_IMAGES);ge.pixelStorei(z.UNPACK_ROW_LENGTH,rt.width),ge.pixelStorei(z.UNPACK_IMAGE_HEIGHT,rt.height),ge.pixelStorei(z.UNPACK_SKIP_PIXELS,we),ge.pixelStorei(z.UNPACK_SKIP_ROWS,Fe),ge.pixelStorei(z.UNPACK_SKIP_IMAGES,We);const jn=S.isDataArrayTexture||S.isData3DTexture,_i=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const $e=Le.get(S),wt=Le.get(N),on=Le.get($e.__renderTarget),ct=Le.get(wt.__renderTarget);ge.bindFramebuffer(z.READ_FRAMEBUFFER,on.__webglFramebuffer),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let bt=0;bt<Me;bt++)jn&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.get(S).__webglTexture,$,We+bt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.get(N).__webglTexture,me,pt+bt)),z.blitFramebuffer(we,Fe,we+Se,Fe+fe,Ee,Xe,Ee+Se,Xe+fe,z.DEPTH_BUFFER_BIT,z.NEAREST);ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||S.isRenderTargetTexture||Le.has(S)){const $e=Le.get(S),wt=Le.get(N);ge.bindFramebuffer(z.READ_FRAMEBUFFER,b),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let on=0;on<Me;on++)jn?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$e.__webglTexture,$,We+on):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$e.__webglTexture,$),_i?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.__webglTexture,me,pt+on):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wt.__webglTexture,me),$!==0?z.blitFramebuffer(we,Fe,we+Se,Fe+fe,Ee,Xe,Ee+Se,Xe+fe,z.COLOR_BUFFER_BIT,z.NEAREST):_i?z.copyTexSubImage3D(ye,me,Ee,Xe,pt+on,we,Fe,Se,fe):z.copyTexSubImage2D(ye,me,Ee,Xe,we,Fe,Se,fe);ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _i?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(ye,me,Ee,Xe,pt,Se,fe,Me,nt,Pt,rt.data):N.isCompressedArrayTexture?z.compressedTexSubImage3D(ye,me,Ee,Xe,pt,Se,fe,Me,nt,rt.data):z.texSubImage3D(ye,me,Ee,Xe,pt,Se,fe,Me,nt,Pt,rt):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,me,Ee,Xe,Se,fe,nt,Pt,rt.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,me,Ee,Xe,rt.width,rt.height,nt,rt.data):z.texSubImage2D(z.TEXTURE_2D,me,Ee,Xe,Se,fe,nt,Pt,rt);ge.pixelStorei(z.UNPACK_ROW_LENGTH,Nt),ge.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Je),ge.pixelStorei(z.UNPACK_SKIP_PIXELS,gi),ge.pixelStorei(z.UNPACK_SKIP_ROWS,Lt),ge.pixelStorei(z.UNPACK_SKIP_IMAGES,Cs),me===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&z.generateMipmap(ye),ge.unbindTexture()},this.initRenderTarget=function(S){Le.get(S).__webglFramebuffer===void 0&&Ne.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ne.setTextureCube(S,0):S.isData3DTexture?Ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ne.setTexture2DArray(S,0):Ne.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){O=0,B=0,I=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const vc={type:"change"},lo={type:"start"},Mc={type:"end"},ps=new qr,Sc=new Cn,fg=Math.cos(70*Pa.DEG2RAD),_t=new W,Ot=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},co=1e-6;class pg extends Ju{constructor(e,t=null){super(e,t),this.state=Ze.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Hn,this._lastTargetPosition=new W,this._quat=new Hn().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zl,this._sphericalDelta=new zl,this._scale=1,this._panOffset=new W,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new W,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gg.bind(this),this._onPointerDown=mg.bind(this),this._onPointerUp=_g.bind(this),this._onContextMenu=bg.bind(this),this._onMouseWheel=Mg.bind(this),this._onKeyDown=Sg.bind(this),this._onTouchStart=Eg.bind(this),this._onTouchMove=yg.bind(this),this._onMouseDown=xg.bind(this),this._onMouseMove=vg.bind(this),this._interceptControlDown=Tg.bind(this),this._interceptControlUp=Ag.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ze.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vc),this.update(),this.state=Ze.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;_t.copy(t).sub(this.target),_t.applyQuaternion(this._quat),this._spherical.setFromVector3(_t),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ot:i>Math.PI&&(i-=Ot),r<-Math.PI?r+=Ot:r>Math.PI&&(r-=Ot),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(_t.setFromSpherical(this._spherical),_t.applyQuaternion(this._quatInverse),t.copy(this.target).add(_t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=_t.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new W(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=_t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ps.origin.copy(this.object.position),ps.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ps.direction))<fg?this.object.lookAt(this.target):(Sc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ps.intersectPlane(Sc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>co||8*(1-this._lastQuaternion.dot(this.object.quaternion))>co||this._lastTargetPosition.distanceToSquared(this.target)>co?(this.dispatchEvent(vc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ot/60*this.autoRotateSpeed*e:Ot/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_t.setFromMatrixColumn(t,0),_t.multiplyScalar(-e),this._panOffset.add(_t)}_panUp(e,t){this.screenSpacePanning===!0?_t.setFromMatrixColumn(t,1):(_t.setFromMatrixColumn(t,0),_t.crossVectors(this.object.up,_t)),_t.multiplyScalar(e),this._panOffset.add(_t)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;_t.copy(r).sub(this.target);let s=_t.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function mg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _g(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mc),this.state=Ze.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function xg(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ze.DOLLY;break;case xi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}break;case xi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(lo)}function vg(n){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Mg(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(n.preventDefault(),this.dispatchEvent(lo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Mc))}function Sg(n){this.enabled!==!1&&this._handleKeyDown(n)}function Eg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1){this.state=Ze.NONE;break}this._handleTouchStartRotate(n),this.state=Ze.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1){this.state=Ze.NONE;break}this._handleTouchStartPan(n),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ze.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(lo)}function yg(n){switch(this._trackPointer(n),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ze.NONE}}function bg(n){this.enabled!==!1&&n.preventDefault()}function Tg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ag(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ye=(n=>(n[n.Sea=0]="Sea",n[n.Plain=1]="Plain",n[n.Hills=2]="Hills",n[n.Mountain=3]="Mountain",n[n.Lake=4]="Lake",n))(Ye||{});const Kn=1e4,wg=["sea","plain","hills","mountain","lake"];function Ec(n){return wg[n]}class Rg{seaLevel=0;hillsLevel=0;mountainLevel=0;top=Kn;plainTopMeters=500;hillsTopMeters=1500;peakMeters=6e3;seaDepthMeters=4e3;meters(e){if(e<this.seaLevel)return-Math.trunc((this.seaLevel-e)*this.seaDepthMeters/Math.max(this.seaLevel,1));if(e<this.hillsLevel)return yc(e,this.seaLevel,this.hillsLevel,0,this.plainTopMeters);if(e<this.mountainLevel)return yc(e,this.hillsLevel,this.mountainLevel,this.plainTopMeters,this.hillsTopMeters);const t=Math.max(1,this.top-this.mountainLevel),i=Math.min(e-this.mountainLevel,t);return this.hillsTopMeters+Math.trunc((this.peakMeters-this.hillsTopMeters)*i*i/(t*t))}}function yc(n,e,t,i,r){return t<=e?i:i+Math.trunc((r-i)*(n-e)/(t-e))}function Cg(n,e,t,i,r,s){return!(e<n.tempMin||e>=n.tempMax||t<n.moistMin||t>=n.moistMax||n.needsWater&&!r||n.needsVolcanic&&!s||n.landforms!==null&&n.landforms.indexOf(i)<0)}function Pg(n,e,t,i,r,s){for(let a=0;a<n.biomes.length;a++)if(Cg(n.biomes[a],e,t,i,r,s))return a;return n.biomes.length-1}function qt(n,e,t,i={}){return{id:n,name:e,color:t,tempMin:i.tempMin??-2147483648,tempMax:i.tempMax??2147483647,moistMin:i.moistMin??0,moistMax:i.moistMax??1001,landforms:i.landforms??null,needsWater:i.needsWater??!1,needsVolcanic:i.needsVolcanic??!1}}function Lg(){const n=[2,3];return{id:"earthlike",name:"地球に似た組",biomes:[qt("volcano","火山","#6B3B32",{needsVolcanic:!0}),qt("ice","氷雪","#EEF2F5",{tempMax:-100}),qt("tundra","ツンドラ","#9AA597",{tempMax:-20}),qt("wetland","湿地","#5E7F55",{tempMin:50,moistMin:720,landforms:[1],needsWater:!0}),qt("wasteland","荒れ地","#8C7A5E",{moistMax:300,landforms:n}),qt("desert","砂漠","#D9C27E",{tempMin:120,moistMax:150}),qt("steppe","乾燥草原","#B8B46A",{moistMax:330}),qt("taiga","針葉樹林","#2F5A4A",{tempMax:80}),qt("jungle","密林","#1F6B2A",{tempMin:220,moistMin:600}),qt("savanna","サバンナ","#C2A74E",{tempMin:200,moistMin:330,moistMax:600}),qt("forest","温帯の森","#35733D",{moistMin:560}),qt("grassland","草原","#8DB85A")]}}function bc(n){return Lg()}class Dg{a=[];b=[];get size(){return this.a.length}less(e,t){return this.a[e]<this.a[t]||this.a[e]===this.a[t]&&this.b[e]<this.b[t]}swap(e,t){const i=this.a[e];this.a[e]=this.a[t],this.a[t]=i;const r=this.b[e];this.b[e]=this.b[t],this.b[t]=r}push(e,t){this.a.push(e),this.b.push(t);let i=this.a.length-1;for(;i>0;){const r=i-1>>1;if(!this.less(i,r))break;this.swap(i,r),i=r}}pop(){const e=[this.a[0],this.b[0]],t=this.a.length-1;this.swap(0,t),this.a.pop(),this.b.pop();let i=0;const r=this.a.length;for(;;){const s=2*i+1,a=s+1;let o=i;if(s<r&&this.less(s,o)&&(o=s),a<r&&this.less(a,o)&&(o=a),o===i)break;this.swap(i,o),i=o}return e}}function Yt(n){const e=Math.floor(n),t=n-e;return t>.5?e+1:t<.5||e%2===0?e:e+1}function ki(n,e){const t=n%e;return t<0?t+e:t}const ho=2147483647,li=.8660254037844386,ms=1.0745699318235422,Vi=.5773502691896258,Ig=[0,1,1,0,-1,-1],Ng=[1,0,-1,-1,-1,0],Ug=[1,1,0,-1,0,1];function Fg(n){switch(n){case 0:return[.5,Vi*.5];case 1:return[0,Vi];case 2:return[-.5,Vi*.5];case 3:return[-.5,-Vi*.5];case 4:return[0,-Vi];default:return[.5,-Vi*.5]}}function Tc(n,e){return n-(e-(e&1)>>1)}function Ac(n,e){return Math.trunc((Math.abs(n)+Math.abs(e)+Math.abs(n+e))/2)}function Og(n,e){return n=ki(n,e),n*2>e?n-e:n}function Bg(n,e){return n%=e,n<0&&(n+=e),n*2>e?n-e:n}class pr{constructor(e,t,i,r,s,a){this.seed=e,this.width=t,this.height=i,this.topology=r,this.sphere=s,this.tile=a;const o=t*i;this.elevation=new Int32Array(o),this.moisture=new Int32Array(o),this.temperature=new Int32Array(o),this.landform=new Uint8Array(o),this.biome=new Int32Array(o),this.volcanic=new Uint8Array(o),this.insideCount=o}seed;width;height;topology;sphere;tile;seaLevel=0;biomes;altitude;tileMeters=125e3;riverFlow=6e3;greatRiverFlow=2e4;elevation;moisture;temperature;landform;biome;volcanic;riverTo=null;flow=null;insideCount;static plane(e,t,i,r,s){return new pr(e,t,i,r,null,s)}static sphereGrid(e,t){return new pr(e,t.count,1,"sphere",t,"hex")}get isSphere(){return this.sphere!==null}get isHexPlane(){return this.tile==="hex"&&this.sphere===null}get wrapsX(){return this.topology==="cylinder"}get isFlat(){return this.topology==="plane"}get periodX(){return this.width}get periodY(){return this.isHexPlane?this.height*li:this.height}get neighborSlots(){return this.tile==="hex"?6:8}centerX(e,t){return this.isHexPlane?e+.5+.5*(t&1):e+.5}centerY(e){return this.isHexPlane?(e+.5)*li:e+.5}index(e,t){if(this.wrapsX)e=ki(e,this.width);else if(e<0||e>=this.width)return-1;return t<0||t>=this.height?-1:t*this.width+e}neighbor(e,t,i){return this.index(e%this.width+t,Math.trunc(e/this.width)+i)}neighborAt(e,t){if(this.sphere!==null)return t<this.sphere.neighborCount(e)?this.sphere.neighbor(e,t):-1;if(this.isHexPlane){const s=Math.trunc(e/this.width);return this.index(e%this.width+((s&1)===0?Ng[t]:Ug[t]),s+Ig[t])}const i=t===0||t===4||t===6?1:t===1||t===5||t===7?-1:0,r=t===2||t===4||t===5?1:t===3||t===6||t===7?-1:0;return this.neighbor(e,i,r)}distance(e,t){if(this.sphere!==null)return this.sphere.distance(e,t);const i=this.width;return this.isHexPlane?this.hexDistance(e%i,Math.trunc(e/i),t%i,Math.trunc(t/i)):Math.max(Math.abs(this.deltaXInt(e%i,t%i)),Math.abs(Math.trunc(t/i)-Math.trunc(e/i)))}hexDistance(e,t,i,r){const s=Tc(i,r)-Tc(e,t),a=r-t;if(!this.wrapsX)return Ac(s,a);let o=Number.MAX_SAFE_INTEGER;const c=Yt(-(s+a*.5)/this.width);for(let l=c-1;l<=c+1;l++)o=Math.min(o,Ac(s+l*this.width,a));return o}deltaXInt(e,t){return this.wrapsX?Og(t-e,this.width):t-e}deltaX(e){return this.wrapsX?Bg(e,this.periodX):e}deltaY(e){return e}onEdge(e,t){return this.sphere!==null?!1:!this.wrapsX&&(e===0||e===this.width-1)||t===0||t===this.height-1}isWater(e){const t=this.landform[e];return t===Ye.Sea||t===Ye.Lake}river(e){if(this.flow===null||this.isWater(e))return 0;const t=this.flow[e];return t>=this.greatRiverFlow?2:t>=this.riverFlow?1:0}nearWater(e){for(let t=0;t<this.neighborSlots;t++){const i=this.neighborAt(e,t);if(!(i<0)&&this.isWater(i))return!0}return!1}reclassify(){const e=this.width*this.height;for(let t=0;t<e;t++){const i=this.landform[t];if(i===Ye.Sea||i===Ye.Lake){this.biome[t]=-1;continue}const r=Math.trunc(this.moisture[t]*1e3/Kn);this.biome[t]=Pg(this.biomes,this.temperature[t],r,i,this.nearWater(t)||this.river(t)===2,this.volcanic[t]===1)}}}class gs{state;constructor(e){this.state=e>>>0}nextUInt(){this.state=this.state+1831565813>>>0;let e=this.state;return e=Math.imul(e^e>>>15,e|1)>>>0,e=(e^e+Math.imul(e^e>>>7,e|61)>>>0)>>>0,(e^e>>>14)>>>0}nextDouble(){return this.nextUInt()/4294967296}}function _s(n,e,t){let i=(Math.imul(n,2376512323)^Math.imul(e,3625334849)^Math.imul(t,3407524639))>>>0;return i=(i^i>>>16)>>>0,i=Math.imul(i,2146121005)>>>0,i=(i^i>>>15)>>>0,i=Math.imul(i,2221713035)>>>0,i=(i^i>>>16)>>>0,i/4294967296}function xs(n,e,t,i){let r=(Math.imul(n,2376512323)^Math.imul(e,3625334849)^Math.imul(t,2654435761)^Math.imul(i,3407524639))>>>0;return r=(r^r>>>16)>>>0,r=Math.imul(r,2146121005)>>>0,r=(r^r>>>15)>>>0,r=Math.imul(r,2221713035)>>>0,r=(r^r>>>16)>>>0,r/4294967296}function mr(n){return n*n*n*(n*(n*6-15)+10)}function wc(n,e,t,i=0,r=0){let s=Math.floor(n),a=Math.floor(e);const o=n-s,c=e-a,l=mr(o),u=mr(c);let m=s+1,h=a+1;i>0&&(s=ki(s,i),m=ki(m,i)),r>0&&(a=ki(a,r),h=ki(h,r));const p=_s(s,a,t),g=_s(m,a,t),v=_s(s,h,t),d=_s(m,h,t),f=p+(g-p)*l,x=v+(d-v)*l;return f+(x-f)*u}function zg(n,e,t,i){const r=Math.floor(n),s=Math.floor(e),a=Math.floor(t),o=mr(n-r),c=mr(e-s),l=mr(t-a),u=p=>{const g=xs(r,s,p,i),v=xs(r+1,s,p,i),d=xs(r,s+1,p,i),f=xs(r+1,s+1,p,i),x=g+(v-g)*o,w=d+(f-d)*o;return x+(w-x)*c},m=u(a),h=u(a+1);return m+(h-m)*l}class _n{constructor(e,t,i,r){this.persistence=i,this.lacunarity=r;for(let s=0;s<t;s++)this.salts.push(e.nextUInt()),this.offX.push(e.nextDouble()*1024),this.offY.push(e.nextDouble()*1024)}persistence;lacunarity;salts=[];offX=[];offY=[];sample(e,t){let i=1,r=1,s=0,a=0;for(let o=0;o<this.salts.length;o++)s+=i*wc(e*r+this.offX[o],t*r+this.offY[o],this.salts[o]),a+=i,i*=this.persistence,r*=this.lacunarity;return s/a}samplePeriodic(e,t,i,r){let s=1,a=1,o=0,c=0;for(let l=0;l<this.salts.length;l++){const u=i>0?Math.max(1,Yt(i*a)):0,m=r>0?Math.max(1,Yt(r*a)):0,h=u>0?u/i:a,p=m>0?m/r:a;o+=s*wc(e*h+this.offX[l],t*p+this.offY[l],this.salts[l],u,m),c+=s,s*=this.persistence,a*=this.lacunarity}return o/c}}class xn{constructor(e,t,i,r){this.persistence=i,this.lacunarity=r;for(let s=0;s<t;s++)this.salts.push(e.nextUInt()),this.offX.push(e.nextDouble()*1024),this.offY.push(e.nextDouble()*1024),this.offZ.push(e.nextDouble()*1024)}persistence;lacunarity;salts=[];offX=[];offY=[];offZ=[];sample(e,t,i){let r=1,s=1,a=0,o=0;for(let c=0;c<this.salts.length;c++)a+=r*zg(e*s+this.offX[c],t*s+this.offY[c],i*s+this.offZ[c],this.salts[c]),o+=r,r*=this.persistence,s*=this.lacunarity;return a/o}}const Gg=[1,.5,-.5,-1,-.5,.5],Hg=[0,li,li,0,-li,-li],Rc=[1,-1,0,0],Cc=[0,0,1,-1];function Ln(n,e){const t=n/e,i=1/(1+t*t);return i*i}function kg(n,e){const t=n.width,i=n.height,r=t*i,s=n.isHexPlane,a=s?1/ms:1,o=s?ms:1,c=new gs((n.seed^1592635660)>>>0),l=new _n(c,3,.5,2),u=new _n(c,3,.5,2),m=new _n(c,3,.5,2),h=new _n(c,2,.5,2),p=new _n(c,2,.5,2),g=new _n(c,2,.5,2),v=(P,K,ee,H)=>{const J=n.deltaX(P-ee),re=n.deltaY(K-H);return J*J+re*re},d=Math.max(2,Ss(e.plateCount,n)),f=zc(n,e),x=[],w=Math.sqrt(n.insideCount*(s?li:1)/d)*.6;for(let P=0;P<d;P++){let K=null;for(let _e=0;_e<20;_e++){const oe={x:c.nextDouble()*n.periodX,y:c.nextDouble()*n.periodY,vx:0,vy:0,continental:!1,group:-1,base:0,area:0};let Ae=Number.MAX_VALUE;for(const it of x)Ae=Math.min(Ae,Math.sqrt(v(oe.x,oe.y,it.x,it.y)));if(K=oe,Ae>=w)break}let ee=c.nextDouble()*2-1,H=c.nextDouble()*2-1,J=Math.sqrt(ee*ee+H*H);J<1e-6&&(ee=1,H=0,J=1);const re=.5+c.nextDouble()*.5;K.vx=ee/J*re,K.vy=H/J*re,x.push(K)}const E=new Int32Array(r);for(let P=0;P<i;P++)for(let K=0;K<t;K++){const ee=n.centerX(K,P)+(In(l,n,4*f,K,P)*2-1)*(e.plateWarp*a),H=n.centerY(P)+(In(u,n,4*f,K,P)*2-1)*(e.plateWarp*a);let J=0,re=Number.MAX_VALUE;for(let _e=0;_e<d;_e++){const oe=v(ee,H,x[_e].x,x[_e].y);oe<re&&(re=oe,J=_e)}E[P*t+K]=J,x[J].area++}const R=s?6:4,C=(P,K)=>s?n.neighborAt(P,K):n.neighbor(P,Rc[K],Cc[K]),_=[];for(let P=0;P<d;P++)_.push(new Array(d).fill(!1));for(let P=0;P<r;P++)for(let K=0;K<R;K++){const ee=C(P,K);ee>=0&&E[ee]!==E[P]&&(_[E[P]][E[ee]]=!0)}const T=Math.max(1,Math.min(e.continents,d));Lc(x.length,T,e,n.insideCount,c,x,_,(P,K)=>v(x[P].x,x[P].y,x[K].x,x[K].y));for(const P of x)P.base=P.continental?.55+(c.nextDouble()-.5)*.1:.05+(c.nextDouble()-.5)*.1;const V=new _n(c,2,.5,2),F=[],G=Ss(e.hotspots,n);for(let P=0;P<G;P++){let K=-1;for(let J=0;J<50&&K<0;J++){const re=Math.trunc(Math.min(r-1,c.nextDouble()*r));x[E[re]].continental||(K=re)}if(K<0)continue;const ee=x[E[K]],H=Math.sqrt(ee.vx*ee.vx+ee.vy*ee.vy);for(let J=0;J<4;J++)F.push({x:n.centerX(K%t,Math.trunc(K/t))-ee.vx/H*(1.6*a)*J,y:n.centerY(Math.trunc(K/t))-ee.vy/H*(1.6*a)*J,h:.6*(1-.18*J)})}const Y=new Float64Array(r),y=new Int32Array(r),b=new Uint8Array(r);for(let P=0;P<i;P++)for(let K=0;K<t;K++){const ee=P*t+K,H=E[ee];let J=0,re=0;for(let _e=0;_e<R;_e++){const oe=C(ee,_e);if(oe<0)continue;const Ae=E[oe];Ae!==H&&(s?re+=(x[H].vx-x[Ae].vx)*Gg[_e]+(x[H].vy-x[Ae].vy)*Hg[_e]:re+=(x[H].vx-x[Ae].vx)*Rc[_e]+(x[H].vy-x[Ae].vy)*Cc[_e],J++,y[ee]=Ae)}J>0&&(b[ee]=1,Y[ee]=re/J)}const U=2147483647,O=new Int32Array(r),B=new Int32Array(r),I=[];for(let P=0;P<r;P++)b[P]?(O[P]=0,B[P]=P,I.push(P)):O[P]=U;for(let P=0;P<I.length;P++){const K=I[P];if(s){for(let ee=0;ee<6;ee++){const H=n.neighborAt(K,ee);H<0||E[H]!==E[K]||O[H]!==U||(O[H]=O[K]+1,B[H]=B[K],I.push(H))}continue}for(let ee=-1;ee<=1;ee++)for(let H=-1;H<=1;H++){if(H===0&&ee===0)continue;const J=n.neighbor(K,H,ee);J<0||E[J]!==E[K]||O[J]!==U||(O[J]=O[K]+1,B[J]=B[K],I.push(J))}}const D=new Int32Array(r);I.length=0;for(let P=0;P<r;P++)x[E[P]].continental?(D[P]=0,I.push(P)):D[P]=U;for(let P=0;P<I.length;P++){const K=I[P];if(s){for(let ee=0;ee<6;ee++){const H=n.neighborAt(K,ee);H<0||D[H]!==U||(D[H]=D[K]+1,I.push(H))}continue}for(let ee=-1;ee<=1;ee++)for(let H=-1;H<=1;H++){const J=n.neighbor(K,H,ee);J<0||D[J]!==U||(D[J]=D[K]+1,I.push(J))}}const k=new Float64Array(r);for(let P=0;P<i;P++)for(let K=0;K<t;K++){const ee=P*t+K,H=x[E[ee]];let J=H.base;if(O[ee]!==U&&(J=Pc(J,H,x[y[B[ee]]],Y[B[ee]],s?O[ee]*o:O[ee],e)),H.continental){const re=1-Math.abs(In(p,n,5*f,K,P)*2-1),_e=Math.max(0,In(g,n,2*f,K,P)-.5)*2;J+=e.oldMountains*re*re*re*_e}if(!H.continental){for(const re of F)J+=re.h*Ln(Math.sqrt(v(n.centerX(K,P),n.centerY(P),re.x,re.y))*o,.7);D[ee]<=3&&(J+=e.shelfIslands*Math.max(0,In(V,n,12*f,K,P)-.5)*2*(1-(D[ee]-1)/3))}if(J+=(In(m,n,e.detailFrequency*f,K,P)-.5)*e.detailAmplitude,J+=(In(h,n,2*f,K,P)-.5)*.2,n.isFlat&&e.edgeSeaTiles>0){let re,_e;if(s){const oe=n.centerX(K,P),Ae=n.centerY(P),it=t+.5,Pe=n.periodY;re=Math.max(Math.abs(2*oe/it-1),Math.abs(2*Ae/Pe-1)),_e=Math.min(Math.min(oe,it-oe),Math.min(Ae,Pe-Ae))*o}else{const oe=2*(K+.5)/t-1,Ae=2*(P+.5)/i-1;re=Math.max(Math.abs(oe),Math.abs(Ae)),_e=Math.min(Math.min(K+.5,t-K-.5),Math.min(P+.5,i-P-.5))}J-=e.edgeFalloff*re*re*re,_e<e.edgeSeaTiles&&(J-=e.edgeSeaDepth*(1-_e/e.edgeSeaTiles))}k[ee]=J}return k}function Pc(n,e,t,i,r,s){const a=s.ridgeWidth,o=t.continental;return e.continental&&o&&t.group!==e.group?n-=s.continentGap*Ln(r,a):i>0?e.continental&&o?n+=.55*i*Ln(r,a):e.continental?n+=.45*i*Ln(Math.max(0,r-1),a):o?n-=.15*i*Ln(r,a):n+=.35*i*Ln(r,a*.7):e.continental?n+=.15*i*Ln(r,a):n+=.08*-i*Ln(r,a),n}function Lc(n,e,t,i,r,s,a,o){const c=[Math.trunc(Math.min(n-1,r.nextDouble()*n))];for(;c.length<e;){let v=-1,d=-1;for(let f=0;f<n;f++){if(c.includes(f))continue;let x=Number.MAX_VALUE;for(const w of c)x=Math.min(x,o(f,w));x*=.75+r.nextDouble()*.5,x>d&&(d=x,v=f)}c.push(v)}const l=Math.trunc((1-t.seaRatio)*i);let u=0;const m=new Array(e).fill(0),h=new Array(e).fill(!1);for(let v=0;v<e;v++){const d=s[c[v]];d.continental=!0,d.group=v,m[v]=d.area,u+=d.area,h[v]=!0}const p=[],g=[];for(;u<l;){let v=-1;for(let x=0;x<e;x++)h[x]&&(v<0||m[x]<m[v])&&(v=x);if(v<0)break;p.length=0,g.length=0;for(let x=0;x<n;x++){if(s[x].continental)continue;let w=!1,E=!1;for(let R=0;R<n;R++)!a[x][R]||!s[R].continental||(s[R].group===v?w=!0:E=!0);w&&(p.push(x),E||g.push(x))}const d=g.length>0?g:p;if(d.length===0){h[v]=!1;continue}const f=d[Math.min(d.length-1,Math.trunc(r.nextDouble()*d.length))];s[f].continental=!0,s[f].group=v,m[v]+=s[f].area,u+=s[f].area}}function vs(n,e){const t=n.width*n.height,i=new Uint8Array(t),r=n.tile==="hex"?n.neighborSlots:4;for(let s=0;s<t;s++){if(i[s]||n.landform[s]!==Ye.Lake)continue;const a=[s];i[s]=1;for(let o=0;o<a.length;o++){const c=a[o];for(let l=0;l<r;l++){const u=n.neighborAt(c,l);u<0||i[u]||n.landform[u]!==Ye.Lake||(i[u]=1,a.push(u))}}if(!(a.length<e))for(const o of a)n.landform[o]=Ye.Sea}}function Vg(n,e,t,i){const r=n.width,s=n.height,a=r*s,o=new Float64Array(a),c=n.wrapsX?2:1;for(let u=0;u<s;u++){const m=Gc(n,e,u),h=m>=.3&&m<.65,p=h?0:r-1,g=h?1:-1;let v=n.isWater(u*r+p)?1:.6,d=t[u*r+p];for(let f=0,x=p;f<r*c;f++,x+=g){const w=(x%r+r)%r,E=u*r+w,R=f>=r*(c-1);if(n.isWater(E))v+=(1-v)*.5,R&&(o[E]=1);else{const C=Math.max(0,t[E]-d),_=Math.min(v,v*(.1+C*1.5));R&&(o[E]=v*(.6+Math.min(1,C*4))),v-=_}d=t[E]}}const l=new Float64Array(a);for(let u=0;u<s;u++)for(let m=0;m<r;m++){const h=u*r+m;if(n.isHexPlane){let v=o[h]*2,d=2;for(let f=1;f<6;f++){if(f===3)continue;const x=n.neighborAt(h,f);x<0||(v+=o[x]*.75,d+=.75)}l[h]=v/d*.75+i[h]*.25;continue}let p=0,g=0;for(let v=-1;v<=1;v++){const d=n.neighbor(h,0,v);d<0||(p+=o[d]*(v===0?2:1),g+=v===0?2:1)}l[h]=g>0?p/g*.75+i[h]*.25:0}return l}class be{constructor(e,t,i){this.x=e,this.y=t,this.z=i}x;y;z;add(e){return new be(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new be(this.x-e.x,this.y-e.y,this.z-e.z)}mul(e){return new be(this.x*e,this.y*e,this.z*e)}neg(){return new be(-this.x,-this.y,-this.z)}static dot(e,t){return e.x*t.x+e.y*t.y+e.z*t.z}static cross(e,t){return new be(e.y*t.z-e.z*t.y,e.z*t.x-e.x*t.z,e.x*t.y-e.y*t.x)}get length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}normalized(){const e=this.length;return e>0?this.mul(1/e):this}}class Dn{static DEFAULT_RELAX=16;static MAX_FREQUENCY=400;static RELAX_STRENGTH=.25;static GNOMONIC=-.2;frequency;count;northPole;southPole;meanSpacing;center;nb;deg;corner;tri;cornerPos;area;stepCos;constructor(e,t=Dn.DEFAULT_RELAX){if(e<2||e>Dn.MAX_FREQUENCY)throw new RangeError(`分割数は 2〜${Dn.MAX_FREQUENCY}`);this.frequency=e;const i=10*e*e+2;this.count=i;const r=(1+Math.sqrt(5))/2,s=new Array(12);let a=0;for(const y of[1,-1])for(const b of[1,-1])s[a]=new be(0,y,b*r).normalized(),s[a+4]=new be(y,b*r,0).normalized(),s[a+8]=new be(y*r,0,b).normalized(),a++;const o=[];for(let y=0;y<12;y++)o.push(new Array(12).fill(-1));let c=0;for(let y=0;y<12;y++)for(let b=0;b<12;b++)o[y][b]=y<b&&be.dot(s[y],s[b])>0?c++:-1;for(let y=0;y<12;y++)for(let b=0;b<y;b++)o[y][b]=o[b][y];const l=[];for(let y=0;y<12;y++)for(let b=y+1;b<12;b++)for(let U=b+1;U<12;U++)o[y][b]>=0&&o[b][U]>=0&&o[y][U]>=0&&l.push(be.dot(be.cross(s[b].sub(s[y]),s[U].sub(s[y])),s[y].add(s[b]).add(s[U]))>0?[y,b,U]:[y,U,b]);this.center=new Array(i);const u=new Uint8Array(i);this.nb=new Int32Array(i*6).fill(-1),this.deg=new Uint8Array(i);const m=12,h=12+30*(e-1),p=(e-1)*(e-2)/2,g=[1,-1,1,-1,0,0],v=[-1,1,0,0,1,-1],d=[0,0,-1,1,-1,1],f=Dn.GNOMONIC;for(let y=0;y<l.length;y++){const b=l[y][0],U=l[y][1],O=l[y][2],B=(D,k,P)=>m+o[D][k]*(e-1)+(D<k?P:e-P)-1,I=(D,k,P)=>D===e?b:k===e?U:P===e?O:P===0?B(b,U,k):k===0?B(b,O,P):D===0?B(U,O,P):h+y*p+(k-1)*(e-1)-(k-1)*k/2+(P-1);for(let D=0;D<=e;D++)for(let k=0;k<=e-D;k++){const P=e-D-k,K=I(P,D,k);if(!u[K]){u[K]=1;let ee;if(K<12)ee=s[K];else if(P===0||D===0||k===0){const H=k===0||D===0?b:U,J=k===0?U:O,re=k===0?D:k,_e=Math.min(H,J),oe=Math.max(H,J);ee=ci(s[_e],s[oe],(H<J?re:e-re)/e)}else ee=this.interior(s[b],s[U],s[O],P,D,k);K>=12&&(ee=ee.mul(1-f).add(s[b].mul(P).add(s[U].mul(D)).add(s[O].mul(k)).normalized().mul(f)).normalized()),this.center[K]=ee}for(let ee=0;ee<6;ee++){const H=P+g[ee],J=D+v[ee],re=k+d[ee];H<0||J<0||re<0||H>e||J>e||re>e||this.addNeighbor(K,I(H,J,re))}}}const x=new Float64Array(6);for(let y=0;y<i;y++){const b=this.center[y],U=be.cross(b,Math.abs(b.x)<.9?new be(1,0,0):new be(0,1,0)).normalized(),O=be.cross(b,U),B=this.deg[y];for(let I=0;I<B;I++){const D=this.center[this.nb[y*6+I]].sub(b);x[I]=Wi(be.dot(D,O),be.dot(D,U))}for(let I=1;I<B;I++)for(let D=I;D>0&&x[D]<x[D-1];D--){const k=x[D];x[D]=x[D-1],x[D-1]=k;const P=this.nb[y*6+D];this.nb[y*6+D]=this.nb[y*6+D-1],this.nb[y*6+D-1]=P}}this.corner=new Int32Array(i*6);const w=[],E=new Map;for(let y=0;y<i;y++){const b=this.deg[y];for(let U=0;U<6;U++){if(U>=b){this.corner[y*6+U]=-1;continue}let O=y,B=this.nb[y*6+U],I=this.nb[y*6+(U+1)%b];if(O>B){const P=O;O=B,B=P}if(B>I){const P=B;B=I,I=P}if(O>B){const P=O;O=B,B=P}const D=O+","+B+","+I;let k=E.get(D);k===void 0&&(k=E.size,E.set(D,k),w.push(O,B,I)),this.corner[y*6+U]=k}}this.tri=w,this.cornerPos=new Array(E.size),this.area=new Float64Array(i);const R=new Array(i),C=4*Math.PI/i;for(let y=0;y<t;y++){this.placeCorners(),this.computeAreas();for(let b=0;b<i;b++)R[b]=new be(0,0,0);for(let b=0;b<i;b++){const U=Dn.RELAX_STRENGTH*(C-this.area[b])/C;for(let O=0;O<this.deg[b];O++){const B=this.nb[b*6+O];R[B]=R[B].add(this.center[B].sub(this.center[b]).mul(U))}}for(let b=0;b<i;b++)this.center[b]=this.center[b].add(R[b]).normalized()}const _=s[l[0][0]].add(s[l[0][1]]).add(s[l[0][2]]).normalized();let T=0;for(let y=1;y<i;y++)be.dot(this.center[y],_)>be.dot(this.center[T],_)&&(T=y);this.rotate(this.center[T]);let V=0;for(let y=1;y<i;y++)this.center[y].z<this.center[V].z&&(V=y);this.northPole=T,this.southPole=V,this.placeCorners(),this.computeAreas();let F=0,G=0;for(let y=0;y<i;y++)for(let b=0;b<this.deg[y];b++){const U=this.nb[y*6+b];U>y&&(F+=this.angle(y,U),G++)}this.meanSpacing=F/G;const Y=Math.trunc(Math.PI/this.meanSpacing+.5);this.stepCos=new Float64Array(Y);for(let y=0;y<Y;y++)this.stepCos[y]=Ms(Math.PI/2-(y+.5)*this.meanSpacing)}centerOf(e){return this.center[e]}neighborCount(e){return this.deg[e]}neighbor(e,t){return this.nb[e*6+t]}isPentagon(e){return this.deg[e]===5}get cornerCount(){return this.cornerPos.length}corners(e){const t=new Array(this.deg[e]);for(let i=0;i<t.length;i++)t[i]=this.cornerPos[this.corner[e*6+i]];return t}areaOf(e){return this.area[e]}latitude(e){const t=this.center[e];return Wi(t.z,Math.sqrt(t.x*t.x+t.y*t.y))*(180/Math.PI)}longitude(e){const t=this.center[e];return Wi(t.y,t.x)*(180/Math.PI)}angle(e,t){return Dc(this.center[e],this.center[t])}distance(e,t){if(e===t)return 0;const i=be.dot(this.center[e],this.center[t]);let r=0,s=this.stepCos.length;for(;r<s;){const a=r+s>>1;i<=this.stepCos[a]?r=a+1:s=a}return r}computeAreas(){for(let e=0;e<this.count;e++){const t=this.deg[e];let i=0;for(let r=0;r<t;r++)i+=Wg(this.center[e],this.cornerPos[this.corner[e*6+r]],this.cornerPos[this.corner[e*6+(r+1)%t]]);this.area[e]=i}}addNeighbor(e,t){const i=this.deg[e];for(let r=0;r<i;r++)if(this.nb[e*6+r]===t)return;if(i===6)throw new Error("隣が 6 を超えた");this.nb[e*6+i]=t,this.deg[e]=i+1}placeCorners(){const e=this.tri;for(let t=0;t<this.cornerPos.length;t++)this.cornerPos[t]=this.center[e[t*3]].add(this.center[e[t*3+1]]).add(this.center[e[t*3+2]]).normalized()}rotate(e){const t=new be(0,0,1),i=be.cross(e,t),r=i.length,s=be.dot(e,t);if(r<1e-15)return;const a=i.mul(1/r);for(let o=0;o<this.count;o++){const c=this.center[o];this.center[o]=c.mul(s).add(be.cross(a,c).mul(r)).add(a.mul(be.dot(a,c)*(1-s))).normalized()}}interior(e,t,i,r,s,a){const o=this.frequency,c=be.cross(ci(e,t,(o-r)/o),ci(e,i,(o-r)/o)),l=be.cross(ci(t,i,(o-s)/o),ci(t,e,(o-s)/o)),u=be.cross(ci(i,e,(o-a)/o),ci(i,t,(o-a)/o)),m=e.add(t).add(i);return uo(c,l,m).add(uo(l,u,m)).add(uo(u,c,m)).normalized()}}function uo(n,e,t){const i=be.cross(n,e).normalized();return be.dot(i,t)<0?i.neg():i}function Dc(n,e){return Wi(be.cross(n,e).length,be.dot(n,e))}function ci(n,e,t){const i=Wi(be.cross(n,e).length,be.dot(n,e)),r=Ms(i);return n.mul(Ms((1-t)*i)).add(e.mul(Ms(t*i))).mul(1/r)}function Wg(n,e,t){const i=Math.abs(be.dot(n,be.cross(e,t))),r=1+be.dot(n,e)+be.dot(e,t)+be.dot(t,n);return 2*Wi(i,r)}function Ms(n){const e=n*n;let t=n,i=0;for(let r=1;r<40;r+=2)i+=t,t*=-e/((r+1)*(r+2));return i}function gr(n){if(n<0)return-gr(-n);if(n>1)return Math.PI/2-gr(1/n);for(let r=0;r<2;r++)n/=1+Math.sqrt(1+n*n);const e=n*n;let t=n,i=0;for(let r=1;r<40;r+=2)i+=t/r,t*=-e;return 4*i}function Wi(n,e){return e>0?gr(n/e):e<0?n>=0?gr(n/e)+Math.PI:gr(n/e)-Math.PI:n>0?Math.PI/2:n<0?-Math.PI/2:0}function fo(){return{topology:"cylinder",cellShape:"square",width:24,height:16,sphereDivisions:18,octaves:4,moistureFrequency:3.5,persistence:.5,lacunarity:2,edgeFalloff:.3,edgeSeaTiles:5,edgeSeaDepth:2,plateCount:14,plateWarp:5,ridgeWidth:1.6,oldMountains:.25,detailFrequency:9,detailAmplitude:.32,inlandSeaTiles:24,continents:3,continentGap:.6,hotspots:3,shelfIslands:.6,seaRatio:.35,mountainRatio:.15,hillsRatio:.2,rainLevel:0,temperatureGradient:"Poles",coldTemperature:-8,warmTemperature:32,lapseRatePerKm:6.5,temperatureNoise:3,temperatureFrequency:2.5,temperatureLevel:0,temperatureStep:4,volcanoRatio:.06,biomeSet:"earthlike",tileKilometers:125,plainTopMeters:500,hillsTopMeters:1500,peakMeters:6e3,seaDepthMeters:4e3,rainMin:150,rainPerMoist:2,evapBase:250,evapPerDegree:25,evapMin:100,riverFlow:6e3,greatRiverFlow:2e4,lakeDepth:300,sphereLakeDepth:1e3}}function po(n={}){return{...fo(),...n}}function Ic(n){if(n.topology==="sphere"){if(n.cellShape!=="hex")throw new RangeError('球はヘクスだけ（cellShape = "hex"）');if(!Number.isInteger(n.sphereDivisions)||n.sphereDivisions<2||n.sphereDivisions>Dn.MAX_FREQUENCY)throw new RangeError(`sphereDivisions は 2〜${Dn.MAX_FREQUENCY} の整数`);return}if(!Number.isInteger(n.width)||!Number.isInteger(n.height)||n.width<3||n.height<3)throw new RangeError("width と height は 3 以上の整数")}const Nc=new Set(["width","height","sphereDivisions","octaves","plateCount","inlandSeaTiles","continents","hotspots","rainLevel","temperatureLevel","tileKilometers","plainTopMeters","hillsTopMeters","peakMeters","seaDepthMeters","rainMin","evapBase","evapPerDegree","evapMin","riverFlow","greatRiverFlow","lakeDepth","sphereLakeDepth"]);function mo(n){const e=[],t=r=>{e.push([r,n[r]])};t("topology"),t("cellShape"),n.topology==="sphere"?t("sphereDivisions"):(t("width"),t("height"));const i=["octaves","moistureFrequency","persistence","lacunarity","edgeFalloff","edgeSeaTiles","edgeSeaDepth","plateCount","plateWarp","ridgeWidth","oldMountains","detailFrequency","detailAmplitude","inlandSeaTiles","continents","continentGap","hotspots","shelfIslands","seaRatio","mountainRatio","hillsRatio","rainLevel","temperatureGradient","coldTemperature","warmTemperature","lapseRatePerKm","temperatureNoise","temperatureFrequency","temperatureLevel","temperatureStep","volcanoRatio","biomeSet","tileKilometers","plainTopMeters","hillsTopMeters","peakMeters","seaDepthMeters","rainMin","rainPerMoist","evapBase","evapPerDegree","evapMin","riverFlow","greatRiverFlow","lakeDepth","sphereLakeDepth"];for(const r of i)t(r);return e}function Xg(n){const e=fo();for(const[t,i]of Object.entries(n))t in e&&(e[t]=i);return e}function qg(n,e){const t=new Dn(e.sphereDivisions),i=pr.sphereGrid(n,t),r=t.count,s=new gs(n),a=new xn(s,e.octaves,e.persistence,e.lacunarity),o=new xn(s,3,.5,2),c=s.nextUInt(),l=Yg(t,e)/6e3,u=new Float64Array(r);for(let x=0;x<r;x++)u[x]=vn(a,t,x,e.moistureFrequency*l);const m=Kg(i,t,e,l),h=Xi(m),p=Xi(u);i.elevation.set(h),i.moisture.set(p),i.seaLevel=go(h,e.seaRatio);const g=[];for(let x=0;x<r;x++)h[x]>=i.seaLevel&&g.push(x);const v=Es(g,h,1-e.mountainRatio),d=Es(g,h,1-e.mountainRatio-e.hillsRatio);for(let x=0;x<r;x++)i.landform[x]=h[x]<i.seaLevel?Ye.Lake:h[x]>=v?Ye.Mountain:h[x]>=d?Ye.Hills:Ye.Plain;i.tileMeters=e.tileKilometers*1e3,i.altitude=Fc(i.seaLevel,d,v,e),vs(i,e.inlandSeaTiles);const f=Xi(Zg(i,t,e,m,u));Oc(f,e.rainLevel),i.moisture.set(f);for(let x=0;x<r;x++){let w=e.coldTemperature+(e.warmTemperature-e.coldTemperature)*Uc(e,t.latitude(x))+e.temperatureStep*e.temperatureLevel;w-=e.lapseRatePerKm*Math.max(0,i.altitude.meters(h[x]))/1e3,w+=e.temperatureNoise*(vn(o,t,x,e.temperatureFrequency*l)*2-1),i.temperature[x]=Yt(w*10)}return Bc(i,c,e.volcanoRatio),kc(i,e,e.sphereLakeDepth),vs(i,e.inlandSeaTiles),i.biomes=bc(e.biomeSet),i.reclassify(),i}function Yg(n,e){return e.tileKilometers*Math.sqrt(n.count/(4*Math.PI))}function vn(n,e,t,i){const r=e.centerOf(t);return n.sample(r.x*i,r.y*i,r.z*i)}function Uc(n,e){const t=(e+90)/180;return n.temperatureGradient==="None"?.5:n.temperatureGradient==="NorthCold"?1-t:n.temperatureGradient==="SouthCold"?t:1-Math.abs(2*t-1)}function hi(n,e){return n.sub(e.mul(be.dot(n,e)))}function $g(n){for(;;){const e=new be(n.nextDouble()*2-1,n.nextDouble()*2-1,n.nextDouble()*2-1),t=be.dot(e,e);if(t>1e-6&&t<=1)return e.normalized()}}function Kg(n,e,t,i){const r=e.count,s=e.meanSpacing,a=new gs((n.seed^1592635660)>>>0),o=new xn(a,3,.5,2),c=new xn(a,3,.5,2),l=new xn(a,3,.5,2),u=new xn(a,3,.5,2),m=new xn(a,2,.5,2),h=new xn(a,2,.5,2),p=new xn(a,2,.5,2),g=(I,D)=>Dc(I,D)/s,v=Math.max(2,Ss(t.plateCount,n)),d=[],f=Math.sqrt(r/v)*.6;for(let I=0;I<v;I++){let D=null;for(let P=0;P<20;P++){const K={c:$g(a),v:new be(0,0,0),continental:!1,group:-1,base:0,area:0};let ee=Number.MAX_VALUE;for(const H of d)ee=Math.min(ee,g(K.c,H.c));if(D=K,ee>=f)break}let k=hi(new be(a.nextDouble()*2-1,a.nextDouble()*2-1,a.nextDouble()*2-1),D.c);k.length<1e-6&&(k=hi(Math.abs(D.c.x)<.9?new be(1,0,0):new be(0,1,0),D.c)),D.v=k.normalized().mul(.5+a.nextDouble()*.5),d.push(D)}const x=(I,D)=>hi(d[I].v,e.centerOf(D)),w=new Int32Array(r);for(let I=0;I<r;I++){const D=e.centerOf(I),k=new be(vn(o,e,I,4*i)*2-1,vn(c,e,I,4*i)*2-1,vn(l,e,I,4*i)*2-1),P=D.add(hi(k,D).mul(t.plateWarp*s)).normalized();let K=0,ee=-Number.MAX_VALUE;for(let H=0;H<v;H++){const J=be.dot(P,d[H].c);J>ee&&(ee=J,K=H)}w[I]=K,d[K].area++}const E=[];for(let I=0;I<v;I++)E.push(new Array(v).fill(!1));for(let I=0;I<r;I++)for(let D=0;D<e.neighborCount(I);D++){const k=e.neighbor(I,D);w[k]!==w[I]&&(E[w[I]][w[k]]=!0)}const R=Math.max(1,Math.min(t.continents,v));Lc(v,R,t,r,a,d,E,(I,D)=>{const k=g(d[I].c,d[D].c);return k*k});for(const I of d)I.base=I.continental?.55+(a.nextDouble()-.5)*.1:.05+(a.nextDouble()-.5)*.1;const C=new xn(a,2,.5,2),_=[],T=Ss(t.hotspots,n);for(let I=0;I<T;I++){let D=-1;for(let K=0;K<50&&D<0;K++){const ee=Math.trunc(Math.min(r-1,a.nextDouble()*r));d[w[ee]].continental||(D=ee)}if(D<0)continue;const k=e.centerOf(D),P=x(w[D],D).normalized().neg();for(let K=0;K<4;K++)_.push({p:k.add(P.mul(1.6*K*s)).normalized(),h:.6*(1-.18*K)})}const V=new Float64Array(r),F=new Int32Array(r),G=new Uint8Array(r);for(let I=0;I<r;I++){const D=w[I];let k=0,P=0;const K=e.centerOf(I);for(let ee=0;ee<e.neighborCount(I);ee++){const H=e.neighbor(I,ee),J=w[H];if(J===D)continue;const re=hi(e.centerOf(H).sub(K),K).normalized();P+=be.dot(x(D,I).sub(x(J,I)),re),k++,F[I]=J}k>0&&(G[I]=1,V[I]=P/k)}const Y=2147483647,y=new Int32Array(r),b=new Int32Array(r),U=[];for(let I=0;I<r;I++)G[I]?(y[I]=0,b[I]=I,U.push(I)):y[I]=Y;for(let I=0;I<U.length;I++){const D=U[I];for(let k=0;k<e.neighborCount(D);k++){const P=e.neighbor(D,k);w[P]!==w[D]||y[P]!==Y||(y[P]=y[D]+1,b[P]=b[D],U.push(P))}}const O=new Int32Array(r);U.length=0;for(let I=0;I<r;I++)d[w[I]].continental?(O[I]=0,U.push(I)):O[I]=Y;for(let I=0;I<U.length;I++){const D=U[I];for(let k=0;k<e.neighborCount(D);k++){const P=e.neighbor(D,k);O[P]===Y&&(O[P]=O[D]+1,U.push(P))}}const B=new Float64Array(r);for(let I=0;I<r;I++){const D=d[w[I]];let k=D.base;if(y[I]!==Y&&(k=Pc(k,D,d[F[b[I]]],V[b[I]],y[I],t)),D.continental){const P=1-Math.abs(vn(h,e,I,5*i)*2-1),K=Math.max(0,vn(p,e,I,2*i)-.5)*2;k+=t.oldMountains*P*P*P*K}else{const P=e.centerOf(I);for(const K of _)k+=K.h*Ln(g(P,K.p),.7);O[I]<=3&&(k+=t.shelfIslands*Math.max(0,vn(C,e,I,12*i)-.5)*2*(1-(O[I]-1)/3))}k+=(vn(u,e,I,t.detailFrequency*i)-.5)*t.detailAmplitude,k+=(vn(m,e,I,2*i)-.5)*.2,B[I]=k}return B}function Zg(n,e,t,i,r){const s=e.count,a=new be(0,0,1),o=new Int32Array(s),c=new Float64Array(s);for(let p=0;p<s;p++){const g=e.centerOf(p),v=Uc(t,e.latitude(p)),d=v>=.3&&v<.65,f=be.cross(a,g),x=e.longitude(p);if(c[p]=d?x:-x,f.length<1e-9){o[p]=e.neighbor(p,0);continue}const w=d?f.neg():f;let E=-1,R=-Number.MAX_VALUE;for(let C=0;C<e.neighborCount(p);C++){const _=e.neighbor(p,C),T=be.dot(e.centerOf(_).sub(g),w);T>R&&(R=T,E=_)}o[p]=E}const l=new Array(s);for(let p=0;p<s;p++)l[p]=p;l.sort((p,g)=>c[p]!==c[g]?c[p]<c[g]?-1:1:p-g);const u=new Float64Array(s).fill(.6),m=new Float64Array(s);for(let p=0;p<2;p++)for(const g of l){const v=o[g];let d=u[v];if(n.isWater(g))d+=(1-d)*.5,p===1&&(m[g]=1);else{const f=Math.max(0,i[g]-i[v]),x=Math.min(d,d*(.1+f*1.5));p===1&&(m[g]=d*(.6+Math.min(1,f*4))),d-=x}u[g]=d}const h=new Float64Array(s);for(let p=0;p<s;p++){const g=e.centerOf(p);let v=hi(a,g);const d=v.length<1e-9;v=v.normalized();let f=2*m[p],x=2;for(let w=0;w<e.neighborCount(p);w++){const E=e.neighbor(p,w),R=d?0:be.dot(hi(e.centerOf(E).sub(g),g).normalized(),v),C=d?.5:R*R;f+=m[E]*C,x+=C}h[p]=f/x*.75+r[p]*.25}return h}function Jg(n,e){if(Ic(e),n=n>>>0,e.topology==="sphere")return qg(n,e);const t=pr.plane(n,e.width,e.height,e.topology,e.cellShape),i=e.width,r=e.width*e.height,s=new gs(n);new _n(s,e.octaves,e.persistence,e.lacunarity);const a=new _n(s,e.octaves,e.persistence,e.lacunarity),o=new _n(s,3,.5,2),c=s.nextUInt(),l=zc(t,e),u=new Float64Array(r);for(let E=0;E<e.height;E++)for(let R=0;R<e.width;R++)u[E*i+R]=In(a,t,e.moistureFrequency*l,R,E);const m=kg(t,e),h=Xi(m),p=Xi(u);t.elevation.set(h),t.moisture.set(p),t.seaLevel=go(h,e.seaRatio);const g=[];for(let E=0;E<r;E++)h[E]>=t.seaLevel&&g.push(E);const v=Es(g,h,1-e.mountainRatio),d=Es(g,h,1-e.mountainRatio-e.hillsRatio);for(let E=0;E<r;E++)t.landform[E]=h[E]<t.seaLevel?Ye.Lake:h[E]>=v?Ye.Mountain:h[E]>=d?Ye.Hills:Ye.Plain;t.tileMeters=e.tileKilometers*1e3,t.altitude=Fc(t.seaLevel,d,v,e);const f=[],x=E=>{E<0||t.landform[E]!==Ye.Lake||(t.landform[E]=Ye.Sea,f.push(E))};for(let E=0;E<e.height;E++)for(let R=0;R<e.width;R++)t.onEdge(R,E)&&x(E*i+R);for(let E=0;E<f.length;E++){const R=f[E];if(t.isHexPlane){for(let C=0;C<6;C++)x(t.neighborAt(R,C));continue}x(t.neighbor(R,1,0)),x(t.neighbor(R,-1,0)),x(t.neighbor(R,0,1)),x(t.neighbor(R,0,-1))}vs(t,e.inlandSeaTiles);const w=Xi(Vg(t,e,m,u));Oc(w,e.rainLevel),t.moisture.set(w);for(let E=0;E<e.height;E++)for(let R=0;R<e.width;R++){const C=E*i+R;let _=e.coldTemperature+(e.warmTemperature-e.coldTemperature)*Gc(t,e,E)+e.temperatureStep*e.temperatureLevel;_-=e.lapseRatePerKm*Math.max(0,t.altitude.meters(h[C]))/1e3,_+=e.temperatureNoise*(In(o,t,e.temperatureFrequency*l,R,E)*2-1),t.temperature[C]=Yt(_*10)}return Bc(t,c,e.volcanoRatio),kc(t,e,e.lakeDepth),vs(t,e.inlandSeaTiles),t.biomes=bc(e.biomeSet),t.reclassify(),t}function Fc(n,e,t,i){const r=new Rg;return r.seaLevel=n,r.hillsLevel=Math.max(e,n),r.mountainLevel=Math.max(t,n),r.plainTopMeters=i.plainTopMeters,r.hillsTopMeters=i.hillsTopMeters,r.peakMeters=i.peakMeters,r.seaDepthMeters=i.seaDepthMeters,r}function Oc(n,e){if(e===0)return;const t=Qg(e);for(let i=0;i<n.length;i++)n[i]=Yt(Kn*Math.pow(n[i]/Kn,t))}function Qg(n){return n<=-2?2.2:n===-1?1.4:n===0?1:n===1?.78:.62}function Bc(n,e,t){const i=Yt(t*1e4);for(let r=0;r<n.landform.length;r++)n.landform[r]===Ye.Mountain&&(n.volcanic[r]=jg(r,e)%1e4<i?1:0)}function In(n,e,t,i,r){const s=1/Math.max(e.periodX,e.periodY),a=e.centerX(i,r)*s,o=e.centerY(r)*s;if(!e.wrapsX)return n.sample(a*t,o*t);const c=Math.max(1,Yt(t*e.periodX*s)),l=c/(e.periodX*s);return n.samplePeriodic(a*l,o*l,c,0)}function zc(n,e){return n.isHexPlane?Math.max(n.periodX,n.periodY)*ms*e.tileKilometers/6e3:Math.max(n.width,n.height)*e.tileKilometers/6e3}function Ss(n,e){return Yt(n*e.insideCount/1536)}function Gc(n,e,t){if(e.temperatureGradient==="None")return .5;const i=n.height>1?t/(n.height-1):.5;return e.temperatureGradient==="NorthCold"?1-i:e.temperatureGradient==="SouthCold"?i:1-Math.abs(2*i-1)}function jg(n,e){let t=(Math.imul(n,2654435761)^e)>>>0;return t=(t^t>>>16)>>>0,t=Math.imul(t,2246822507)>>>0,t=(t^t>>>13)>>>0,t=Math.imul(t,3266489909)>>>0,(t^t>>>16)>>>0}function e_(n){return n.tile==="hex"?n.neighborSlots:8}function Hc(n,e,t){if(n.tile==="hex")return n.neighborAt(e,t);const i=t<4?t:t+1;return n.neighbor(e,i%3-1,Math.trunc(i/3)-1)}function kc(n,e,t){const i=n.width*n.height,r=new Int32Array(i).fill(-1),s=new Uint8Array(i),a=[],o=new Int32Array(i),c=new Dg;for(let h=0;h<i;h++){const p=h%n.width,g=Math.trunc(h/n.width);(n.landform[h]===Ye.Sea||n.onEdge(p,g))&&(s[h]=1,o[h]=n.elevation[h],c.push(o[h],h))}if(c.size===0){let h=0;for(let p=1;p<i;p++)n.elevation[p]<n.elevation[h]&&(h=p);s[h]=1,o[h]=n.elevation[h],c.push(o[h],h)}const l=e_(n);for(;c.size>0;){const[h,p]=c.pop();n.landform[p]!==Ye.Sea&&a.push(p);for(let g=0;g<l;g++){const v=Hc(n,p,g);v<0||s[v]||(s[v]=1,o[v]=Math.max(n.elevation[v],h),r[v]=p,c.push(o[v],v))}}const u=new Int32Array(i),m=new Int32Array(i).fill(-1);for(let h=0;h<a.length;h++)m[a[h]]=h;Vc(n,e,a,r,u);for(let h=0;h<2;h++){for(let p=0;p<a.length;p++){const g=a[p];let v=r[g],d=v<0?-1:m[v]<0?Number.MAX_VALUE:u[v];for(let f=0;f<l;f++){const x=Hc(n,g,f);if(x<0||x===g||o[x]>o[g]||m[x]>=0&&m[x]>=p)continue;const w=m[x]<0?Number.MAX_VALUE:u[x];(w>d||w===d&&x<v)&&(v=x,d=w)}r[g]=v}Vc(n,e,a,r,u)}for(let h=0;h<i;h++)n.isWater(h)||o[h]-n.elevation[h]<t||u[h]<=0||(n.landform[h]=Ye.Lake);n.riverFlow=e.riverFlow,n.greatRiverFlow=e.greatRiverFlow,n.riverTo=r,n.flow=u}function Vc(n,e,t,i,r){const s=new Float64Array(r.length);for(let a=t.length-1;a>=0;a--){const o=t[a],c=e.rainMin+Yt(n.moisture[o]*1e3/Kn*e.rainPerMoist),l=Math.max(e.evapMin,e.evapBase+e.evapPerDegree*Yt(n.temperature[o]/10)),u=Math.max(0,s[o]+c-l);r[o]=Math.min(ho,u),i[o]>=0&&(s[i[o]]+=u)}}function Xi(n){const e=n.length,t=new Array(e);for(let r=0;r<e;r++)t[r]=r;t.sort((r,s)=>n[r]!==n[s]?n[r]<n[s]?-1:1:r-s);const i=new Int32Array(e);for(let r=0;r<e;r++)i[t[r]]=e>1?Math.trunc(r*Kn/(e-1)):0;return i}function go(n,e){const t=Int32Array.from(n).sort(),i=Yt(e*t.length);return i>=t.length?ho:t[Math.max(i,0)]}function Es(n,e,t){if(n.length===0)return ho;const i=new Int32Array(n.length);for(let r=0;r<i.length;r++)i[r]=e[n[r]];return go(i,t)}class Wc{topology;cellShape;seed;settings;width;height;divisions;periodX;neighborSpacing;neighborSpacingMeters;static HEIGHT_MAX=Kn;seaLevel;biomes;altitude;riverFlow;greatRiverFlow;cellCount;nbStart;nb;sides;centers;cornerList;grid;constructor(e,t){this.grid=e,this.settings={...t},this.topology=t.topology,this.cellShape=t.cellShape,this.seed=e.seed;const i=e.width*e.height;this.cellCount=i,this.divisions=e.sphere!==null?e.sphere.frequency:0,this.width=e.sphere!==null?0:e.width,this.height=e.sphere!==null?0:e.height,this.periodX=e.wrapsX?e.periodX:0,this.neighborSpacing=e.sphere!==null?e.sphere.meanSpacing:1;const r=t.tileKilometers*1e3;this.neighborSpacingMeters=e.sphere!==null?r*Math.sqrt(e.sphere.count/(4*Math.PI))*e.sphere.meanSpacing:e.isHexPlane?r*ms:r,this.seaLevel=e.seaLevel,this.biomes=e.biomes,this.altitude=e.altitude,this.riverFlow=e.riverFlow,this.greatRiverFlow=e.greatRiverFlow,this.nbStart=new Int32Array(i+1);const s=[];for(let a=0;a<i;a++){this.nbStart[a]=s.length;for(let o=0;o<e.neighborSlots;o++){const c=e.neighborAt(a,o);if(c<0||c===a)continue;let l=!1;for(let u=this.nbStart[a];u<s.length;u++)if(s[u]===c){l=!0;break}l||s.push(c)}}this.nbStart[i]=s.length,this.nb=Int32Array.from(s),this.sides=new Uint8Array(i),this.centers=new Array(i),this.cornerList=new Array(i);for(let a=0;a<i;a++){const o=a%e.width,c=Math.trunc(a/e.width);if(e.sphere!==null)this.sides[a]=e.sphere.neighborCount(a),this.centers[a]=e.sphere.centerOf(a),this.cornerList[a]=e.sphere.corners(a);else if(e.isHexPlane){this.sides[a]=6;const l=e.centerX(o,c),u=e.centerY(c);this.centers[a]=new be(l,u,0);const m=[];for(let h=0;h<6;h++){const[p,g]=Fg(h);m.push(new be(l+p,u+g,0))}this.cornerList[a]=m}else this.sides[a]=4,this.centers[a]=new be(o+.5,c+.5,0),this.cornerList[a]=[new be(o,c,0),new be(o+1,c,0),new be(o+1,c+1,0),new be(o,c+1,0)]}}neighborCount(e){return this.nbStart[e+1]-this.nbStart[e]}neighbor(e,t){return this.nb[this.nbStart[e]+t]}neighbors(e){return Array.from(this.nb.subarray(this.nbStart[e],this.nbStart[e+1]))}areNeighbors(e,t){for(let i=this.nbStart[e];i<this.nbStart[e+1];i++)if(this.nb[i]===t)return!0;return!1}distance(e,t){return this.grid.distance(e,t)}sidesOf(e){return this.sides[e]}isPentagon(e){return this.topology==="sphere"&&this.sides[e]===5}center(e){return this.centers[e]}corners(e){return this.cornerList[e]}gridCoord(e){return this.topology==="sphere"?[-1,-1]:[e%this.width,Math.trunc(e/this.width)]}cellAt(e,t){return this.topology==="sphere"?-1:this.grid.index(e,t)}elevation(e){return this.grid.elevation[e]}elevationMeters(e){return this.altitude.meters(this.grid.elevation[e])}temperature10(e){return this.grid.temperature[e]}temperatureC(e){return this.grid.temperature[e]/10}moisture(e){return this.grid.moisture[e]}landform(e){return this.grid.landform[e]}isWater(e){return this.grid.isWater(e)}volcanic(e){return this.grid.volcanic[e]===1}biomeIndex(e){return this.grid.biome[e]}biome(e){const t=this.grid.biome[e];return t>=0?this.biomes.biomes[t]:null}biomeId(e){const t=this.grid.biome[e];return t>=0?this.biomes.biomes[t].id:null}riverTo(e){return this.grid.riverTo!==null?this.grid.riverTo[e]:-1}flow(e){return this.grid.flow!==null?this.grid.flow[e]:0}river(e){return this.grid.river(e)}get pentagonCount(){let e=0;for(let t=0;t<this.cellCount;t++)this.isPentagon(t)&&e++;return e}biomeCounts(){const e=this.biomes.biomes.length,t=new Array(e+2).fill(0);for(let r=0;r<this.cellCount;r++){const s=this.grid.biome[r];t[s>=0?s:this.grid.landform[r]===Ye.Sea?e:e+1]++}const i=this.biomes.biomes.map((r,s)=>[r.id,t[s]]);return i.push(["sea",t[e]],["lake",t[e+1]]),i}}function _o(n,e){const t={...n};return new Wc(Jg(e>>>0,t),t)}const xo=1;function qi(n){if(!Number.isFinite(n))throw new RangeError("JSON に書けない数: "+n);if(n===0)return"0.0";const[e,t]=n.toExponential().split("e"),i=e.startsWith("-"),r=e.replace("-","").replace(".",""),s=parseInt(t,10),a=r.length<=15?15:r.length;let o;if(s>-5&&s<a)if(s>=0){const c=r.length>s+1?r.slice(0,s+1):r.padEnd(s+1,"0"),l=r.length>s+1?r.slice(s+1):"";o=c+"."+(l===""?"0":l)}else o="0."+"0".repeat(-s-1)+r;else{const c=r.length>1?r[0]+"."+r.slice(1):r,l=Math.abs(s);o=c+"e"+(s<0?"-":"+")+(l<10?"0"+l:String(l))}return i?"-"+o:o}function sn(n){let e='"';for(const t of n){const i=t.charCodeAt(0);t==='"'?e+='\\"':t==="\\"?e+="\\\\":t===`
`?e+="\\n":t==="\r"?e+="\\r":t==="	"?e+="\\t":i<32?e+="\\u"+i.toString(16).padStart(4,"0"):e+=t}return e+'"'}function Xc(n){return"["+qi(n.x)+", "+qi(n.y)+", "+qi(n.z)+"]"}function t_(n){const e=[];e.push(`{
`),e.push('  "formatVersion": '+xo+`,
`),e.push('  "topology": '+sn(n.topology)+`,
`),e.push('  "cellShape": '+sn(n.cellShape)+`,
`),e.push('  "seed": '+n.seed+`,
`),e.push('  "parameters": {'),mo(n.settings).forEach(([i,r],s)=>{const a=typeof r=="string"?sn(r):Nc.has(i)?String(r):qi(r);e.push((s>0?", ":" ")+sn(i)+": "+a)}),e.push(` },
`),e.push('  "cellCount": '+n.cellCount+`,
`),e.push('  "coordinates": '+sn(n.topology==="sphere"?"unitSphere":n.cellShape==="hex"?"hexSpacing":"cellUnit")+`,
`),e.push('  "wrapX": '+(n.periodX>0?qi(n.periodX):"null")+`,
`),e.push('  "heightMax": '+Wc.HEIGHT_MAX+`,
`),e.push('  "seaLevel": '+n.seaLevel+`,
`),e.push('  "biomeSet": '+sn(n.biomes.id)+`,
`),e.push('  "biomes": ['),n.biomes.biomes.forEach((i,r)=>{e.push((r>0?", ":"")+'{ "id": '+sn(i.id)+', "name": '+sn(i.name)+', "color": '+sn(i.color)+" }")}),e.push(`],
`),e.push(`  "cells": [
`);for(let i=0;i<n.cellCount;i++){let r='    { "id": '+i;r+=', "center": '+Xc(n.center(i)),r+=', "sides": '+n.sidesOf(i),r+=', "neighbors": ['+n.neighbors(i).join(", ")+"]",r+=', "elevation": '+n.elevation(i),r+=', "temperature": '+qi(n.temperatureC(i)),r+=', "moisture": '+n.moisture(i);const s=n.biomeId(i);if(r+=', "biome": '+(s!==null?sn(s):"null"),r+=', "landform": '+sn(Ec(n.landform(i))),r+=', "elevationMeters": '+n.elevationMeters(i),r+=', "volcanic": '+(n.volcanic(i)?"true":"false"),r+=', "river": '+n.river(i),r+=', "riverTo": '+n.riverTo(i),r+=', "flow": '+n.flow(i),n.topology!=="sphere"){const[a,o]=n.gridCoord(i);r+=', "grid": ['+a+", "+o+"]"}r+=', "corners": ['+n.corners(i).map(Xc).join(", ")+"] }",i<n.cellCount-1&&(r+=","),e.push(r+`
`)}return e.push(`  ]
`),e.push(`}
`),e.join("")}const n_={width:[3,400],height:[3,300],sphereDivisions:[2,100]},qc={sea:Ye.Sea,plain:Ye.Plain,hills:Ye.Hills,mountain:Ye.Mountain,lake:Ye.Lake};function dt(n){throw new Error(n)}function _r(n){return typeof n=="number"&&Number.isInteger(n)}function i_(n){let e;try{e=JSON.parse(n)}catch(y){dt("JSON として読めません（"+(y instanceof Error?y.message:String(y))+"）")}(e===null||typeof e!="object"||Array.isArray(e))&&dt("地図の JSON ではありません"),e.formatVersion!==xo&&dt(`formatVersion が ${xo} ではありません（${String(e.formatVersion)}）`);const t=e.topology,i=e.cellShape,r=e.seed;t!=="plane"&&t!=="cylinder"&&t!=="sphere"&&dt(`topology が正しくありません（${String(t)}）`),i!=="square"&&i!=="hex"&&dt(`cellShape が正しくありません（${String(i)}）`),t==="sphere"&&i!=="hex"&&dt("球の cellShape は hex だけです"),(!_r(r)||r<0||r>4294967295)&&dt(`seed が正しくありません（${String(r)}）`);const s=e.parameters;(s===null||typeof s!="object"||Array.isArray(s))&&dt("parameters がありません");const a=fo();for(const[y,b]of Object.entries(s))y in a&&((typeof b!=typeof a[y]||typeof b=="number"&&!Number.isFinite(b))&&dt(`parameters の ${y} が正しくありません（${JSON.stringify(b)}）`),Nc.has(y)&&!Number.isInteger(b)&&dt(`parameters の ${y} は整数にしてください（${JSON.stringify(b)}）`));const o={...Xg(s),topology:t,cellShape:i};try{Ic(o)}catch(y){dt("parameters が正しくありません："+(y instanceof Error?y.message:String(y)))}const c=t==="sphere"?["sphereDivisions"]:["width","height"];for(const y of c){const b=o[y],[U,O]=n_[y];(!_r(b)||b<U||b>O)&&dt(`${y} がデモで扱える範囲（${U}〜${O}）の外です（${String(b)}）`)}let l;try{l=_o(o,r)}catch(y){dt("この設定では地図を作れません："+(y instanceof Error?y.message:String(y)))}const u=l.cellCount,m=e.cells;Array.isArray(m)||dt("cells がありません"),e.cellCount!==void 0&&e.cellCount!==u&&dt(`cellCount が設定から作った地図（${u}）と違います（${String(e.cellCount)}）`),m.length!==u&&dt(`セルの数が設定から作った地図（${u}）と違います（${m.length}）`);for(let y=0;y<u;y++){const b=m[y];if((b===null||typeof b!="object")&&dt(`セル ${y} が正しくありません`),b.id!==void 0&&b.id!==y&&dt(`セル ${y} の id が ${String(b.id)} です（並びは id の順にしてください）`),b.neighbors!==void 0){const U=b.neighbors,O=l.neighbors(y);(!Array.isArray(U)||U.length!==O.length||[...U].sort((B,I)=>B-I).join()!==[...O].sort((B,I)=>B-I).join())&&dt(`セル ${y} の隣が、設定から作った地図と違います（別の版で書き出したか、形を書き換えた JSON は読み込めません）`)}}const h=new Map(l.biomes.biomes.map((y,b)=>[y.id,b])),p=new Int32Array(u),g=new Float64Array(u),v=new Float64Array(u),d=new Int32Array(u),f=new Uint8Array(u),x=new Int16Array(u),w=new Uint8Array(u),E=new Uint8Array(u),R=new Int32Array(u),C=new Float64Array(u);let _=0,T=0;for(let y=0;y<u;y++){const b=m[y],U=I=>dt(`セル ${y} の ${I} が正しくありません（${JSON.stringify(b[I])}）`),O=I=>b[I]!==void 0;p[y]=O("elevation")?_r(b.elevation)&&b.elevation>=0&&b.elevation<=Kn?b.elevation:U("elevation"):l.elevation(y),g[y]=O("elevationMeters")?typeof b.elevationMeters=="number"&&Number.isFinite(b.elevationMeters)?b.elevationMeters:U("elevationMeters"):l.altitude.meters(p[y]),v[y]=O("temperature")?typeof b.temperature=="number"&&Number.isFinite(b.temperature)?b.temperature*10:U("temperature"):l.temperature10(y),d[y]=O("moisture")?_r(b.moisture)?b.moisture:U("moisture"):l.moisture(y),f[y]=O("landform")?typeof b.landform=="string"&&b.landform in qc?qc[b.landform]:U("landform"):l.landform(y),x[y]=O("biome")?b.biome===null?-1:typeof b.biome=="string"&&h.has(b.biome)?h.get(b.biome):dt(`セル ${y} の biome「${String(b.biome)}」は、バイオームの組「${l.biomes.id}」にありません`):l.biomeIndex(y),w[y]=O("volcanic")?typeof b.volcanic=="boolean"?b.volcanic?1:0:U("volcanic"):l.volcanic(y)?1:0,E[y]=O("river")?b.river===0||b.river===1||b.river===2?b.river:U("river"):l.river(y),R[y]=O("riverTo")?_r(b.riverTo)&&b.riverTo>=-1&&b.riverTo<u?b.riverTo:U("riverTo"):l.riverTo(y),C[y]=O("flow")?typeof b.flow=="number"&&Number.isFinite(b.flow)&&b.flow>=0?b.flow:U("flow"):l.flow(y),(f[y]===Ye.Sea||f[y]===Ye.Lake)!==x[y]<0&&T++,(p[y]!==l.elevation(y)||g[y]!==l.elevationMeters(y)||v[y]!==l.temperature10(y)||d[y]!==l.moisture(y)||f[y]!==l.landform(y)||x[y]!==l.biomeIndex(y)||w[y]!==(l.volcanic(y)?1:0)||E[y]!==l.river(y)||R[y]!==l.riverTo(y)||C[y]!==l.flow(y))&&_++}const V=y=>f[y]===Ye.Sea||f[y]===Ye.Lake,F=Object.assign(Object.create(l),{elevation:y=>p[y],elevationMeters:y=>g[y],temperature10:y=>v[y],temperatureC:y=>v[y]/10,moisture:y=>d[y],landform:y=>f[y],isWater:V,volcanic:y=>w[y]===1,biomeIndex:y=>x[y],biome:y=>x[y]>=0?l.biomes.biomes[x[y]]:null,biomeId:y=>x[y]>=0?l.biomes.biomes[x[y]].id:null,river:y=>E[y],riverTo:y=>R[y],flow:y=>C[y],biomeCounts:()=>{const y=l.biomes.biomes.length,b=new Array(y+2).fill(0);for(let O=0;O<u;O++)b[x[O]>=0?x[O]:f[O]===Ye.Sea?y:y+1]++;const U=l.biomes.biomes.map((O,B)=>[O.id,b[B]]);return U.push(["sea",b[y]],["lake",b[y+1]]),U}}),G=po({topology:t,cellShape:i,width:o.width,height:o.height,sphereDivisions:o.sphereDivisions}),Y=JSON.stringify(mo(o))!==JSON.stringify(mo(G));return{map:F,editedCells:_,inconsistentCells:T,customParameters:Y}}const r_={planeScale:1,sphereRadius:20,wrapCylinder:!1,heightScale:10,edgeDarken:.12,wallDarken:.35},s_=new Be("#2C5A8A"),a_=new Be("#1D3F6A"),o_=new Be("#4C8CC0"),Yc=new Map;function l_(n,e){const t=n.landform(e);if(t===Ye.Lake)return o_;if(t===Ye.Sea){const s=n.seaLevel>0?Math.min(1,Math.max(0,(n.seaLevel-n.elevation(e))/n.seaLevel)):0;return s_.clone().lerp(a_,s)}const i=n.biome(e)?.color??"#808080";let r=Yc.get(i);return r||(r=new Be(i),Yc.set(i,r)),r}function $c(n,e,t){return t.heightScale<=0||n.isWater(e)?0:Math.max(0,n.elevationMeters(e))/n.neighborSpacingMeters*t.heightScale}function ui(n,e,t,i,r=new W){if(n.topology==="sphere"){const s=i.sphereRadius*(1+t*n.neighborSpacing);return r.set(e.x*s,e.z*s,-e.y*s)}if(n.topology==="cylinder"&&i.wrapCylinder){const s=n.periodX/(2*Math.PI)+t,a=2*Math.PI*e.x/n.periodX;return r.set(s*Math.sin(a),e.y,s*Math.cos(a)).multiplyScalar(i.planeScale)}return r.set(e.x,t,-e.y).multiplyScalar(i.planeScale)}function c_(n,e,t){return n.topology==="sphere"?e.clone().normalize():n.topology==="cylinder"&&t.wrapCylinder?new W(e.x,0,e.z).normalize():new W(0,1,0)}function h_(n,e){if(n.topology==="sphere")return{center:new W,radius:e.sphereRadius,round:!0};const t=n.cellShape==="hex"?n.height*.8660254:n.height,i=n.cellShape==="hex"?n.width+.5:n.width;if(n.topology==="cylinder"&&e.wrapCylinder){const r=n.periodX/(2*Math.PI);return{center:new W(0,t/2,0).multiplyScalar(e.planeScale),radius:Math.max(r,t/2)*e.planeScale,round:!0}}return{center:new W(i/2,0,-t/2).multiplyScalar(e.planeScale),radius:Math.max(i,t)/2*e.planeScale,round:!1}}function u_(n,e,t,i){const r=n.center(e),s=t.x+i.x-r.x,a=t.y+i.y-r.y,o=t.z+i.z-r.z;let c=-1,l=Number.MAX_VALUE;for(let m=0;m<n.neighborCount(e);m++){const h=n.neighbor(e,m),p=n.center(h);let g=p.x-s;n.periodX>0&&(g%=n.periodX,g>n.periodX/2?g-=n.periodX:g<-n.periodX/2&&(g+=n.periodX));const v=p.y-a,d=p.z-o,f=g*g+v*v+d*d;f<l&&(l=f,c=h)}const u=n.neighborSpacing*.5;return l<u*u?c:-1}function d_(n,e){const t=n.cellCount,i=new Float64Array(t);for(let v=0;v<t;v++)i[v]=$c(n,v,e);const r=[],s=[],a=[],o=[],c=new W,l=new W,u=new W,m=new W,h=(v,d)=>(r.push(v.x,v.y,v.z),s.push(d.r,d.g,d.b),r.length/3-1),p=(v,d,f,x,w)=>{l.fromArray(r,v*3),u.fromArray(r,d*3),m.fromArray(r,f*3),u.sub(l).cross(m.sub(l)).dot(x)<0?a.push(v,f,d):a.push(v,d,f),o.push(w)};for(let v=0;v<t;v++){const d=n.corners(v),f=l_(n,v),x=f.clone().multiplyScalar(1-e.edgeDarken),w=f.clone().multiplyScalar(1-e.wallDarken),E=i[v],R=ui(n,n.center(v),E,e,new W),C=c_(n,R,e),_=h(R,f),T=r.length/3;for(const V of d)h(ui(n,V,E,e,c),x);for(let V=0;V<d.length;V++)p(_,T+V,T+(V+1)%d.length,C,v);if(!(E<=0))for(let V=0;V<d.length;V++){const F=d[V],G=d[(V+1)%d.length],Y=u_(n,v,F,G),y=Y>=0?i[Y]:0;if(y>=E)continue;const b=ui(n,F,E,e,new W),U=ui(n,G,E,e,new W),O=b.clone().add(U).multiplyScalar(.5).sub(R),B=h(b,w);h(U,w),h(ui(n,G,y,e,c),w),h(ui(n,F,y,e,c),w),p(B,B+1,B+2,O,v),p(B,B+2,B+3,O,v)}}const g=new fn;return g.setAttribute("position",new Wt(r,3)),g.setAttribute("color",new Wt(s,3)),g.setIndex(a),g.computeVertexNormals(),g.computeBoundingSphere(),{geometry:g,triCell:Int32Array.from(o)}}function f_(n,e,t){const i=$c(n,e,t)+.04;return n.corners(e).map(r=>ui(n,r,i,t,new W))}const xr=[{label:"平面・矩形",topology:"plane",cellShape:"square"},{label:"平面・ヘクス",topology:"plane",cellShape:"hex"},{label:"円筒・矩形",topology:"cylinder",cellShape:"square"},{label:"円筒・ヘクス",topology:"cylinder",cellShape:"hex"},{label:"球・ヘクス",topology:"sphere",cellShape:"hex"}],Kc={sea:"海",lake:"湖",plain:"平地",hills:"丘陵",mountain:"山"},ht=n=>document.getElementById(n),Te={combos:ht("combos"),seed:ht("seed"),random:ht("random"),width:ht("width"),height:ht("height"),divisions:ht("divisions"),sizePlane:ht("sizePlane"),sizeSphere:ht("sizeSphere"),sphereCells:ht("sphereCells"),generate:ht("generate"),exportBtn:ht("export"),status:ht("status"),importBtn:ht("import"),importFile:ht("importFile"),wrapRow:ht("wrapRow"),wrap:ht("wrap"),scale:ht("scale"),scaleOut:ht("scaleOut"),resetView:ht("resetView"),cellInfo:ht("cellInfo"),legend:ht("legend"),view:ht("view")};let di=3,Ie=null,Zc=new Int32Array(0);const an={...r_};let fi=-1;const Nn=new dg({antialias:!0});Nn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Te.view.appendChild(Nn.domElement);const Zn=new bu;Zn.background=new Be("#12151c");const Bt=new rn(40,1,.1,5e3);Zn.add(Bt),Zn.add(new Xu(16777215,4477030,1.4));const ys=new $u(16777215,1.6);ys.position.set(.4,.9,.6),Bt.add(ys),Bt.add(ys.target),ys.target.position.set(0,0,-1);const pi=new pg(Bt,Nn.domElement);pi.enableDamping=!0;const p_=new ku({vertexColors:!0,flatShading:!0});let Jn=null,Yi=null;function Jc(){const n=Te.view.clientWidth,e=Te.view.clientHeight;Nn.setSize(n,e,!1),Bt.aspect=n/Math.max(e,1),Bt.updateProjectionMatrix()}new ResizeObserver(Jc).observe(Te.view),Nn.setAnimationLoop(()=>{pi.update(),Nn.render(Zn,Bt)});function m_(){const n=xr[di];return po({topology:n.topology,cellShape:n.cellShape,width:Math.trunc(Number(Te.width.value)),height:Math.trunc(Number(Te.height.value)),sphereDivisions:Math.trunc(Number(Te.divisions.value))})}function g_(){const n=Math.trunc(Number(Te.seed.value));return Number.isFinite(n)?Math.min(4294967295,Math.max(0,n))>>>0:0}function vr(){Te.status.textContent="生成中…",Te.generate.disabled=!0,setTimeout(()=>{try{const n=performance.now();Ie=_o(m_(),g_());const e=performance.now();fi=Sr>=0&&Sr<Ie.cellCount?Sr:-1,Sr=-1,bs(),Ts(),vo(),ws(),Te.status.textContent=`${Ie.cellCount.toLocaleString()} セル（生成 ${(e-n).toFixed(0)} ms、描画の準備 ${(performance.now()-e).toFixed(0)} ms）`}catch(n){Te.status.textContent="設定が正しくない："+(n instanceof Error?n.message:String(n))}finally{Te.generate.disabled=!1}},20)}function bs(){if(Jn&&(Zn.remove(Jn),Jn.geometry.dispose(),Jn=null),!Ie)return;const n=d_(Ie,an);Zc=n.triCell,Jn=new Yn(n.geometry,p_),Zn.add(Jn),Qc()}function Ts(){if(!Ie)return;const{center:n,radius:e,round:t}=h_(Ie,an);pi.target.copy(n);const i=e*(t?3.2:2.9),r=Pa.degToRad(t?15:50);Bt.position.set(n.x,n.y+Math.sin(r)*i,n.z+Math.cos(r)*i),Bt.near=Math.max(.05,i*.005),Bt.far=i*20+100,Bt.updateProjectionMatrix(),pi.update()}function Qc(){if(Yi&&(Zn.remove(Yi),Yi.geometry.dispose(),Yi=null),!Ie||fi<0)return;const n=new fn().setFromPoints(f_(Ie,fi,an));Yi=new Fu(n,new El({color:16769126})),Zn.add(Yi)}function vo(){if(!Ie||fi<0){Te.cellInfo.textContent="クリックで選ぶ",Te.cellInfo.classList.remove("selected");return}const n=fi,e=Ie.biome(n),t=Ec(Ie.landform(n)),i=Ie.topology==="sphere"?Ie.isPentagon(n)?"五角形":"六角形":`列 ${Ie.gridCoord(n)[0]}・行 ${Ie.gridCoord(n)[1]}`,r=[Ie.volcanic(n)?"火山":"",Ie.river(n)===2?"大河":Ie.river(n)===1?"川":""].filter(Boolean).join("・");Te.cellInfo.textContent=`セル ${n}（${i}）
バイオーム：${e?`${e.name}（${e.id}）`:Kc[t]}
起伏：${Kc[t]}${r?"・"+r:""}
標高：${Ie.elevationMeters(n).toLocaleString()} m（順位 ${Ie.elevation(n)}）
気温：${Ie.temperatureC(n).toFixed(1)} ℃　湿度：${(Ie.moisture(n)/100).toFixed(1)} %
隣：${Ie.neighbors(n).join(", ")}`,Te.cellInfo.classList.add("selected")}function __(){if(!Ie)return;const n=new Blob([t_(Ie)],{type:"application/json"}),e=URL.createObjectURL(n),t=document.createElement("a");t.href=e,t.download=`map_${Ie.topology}_${Ie.cellShape}_${Ie.seed}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),Te.status.textContent=`書き出した：${t.download}`}async function jc(n){Te.status.textContent=`読み込み中…（${n.name}）`;let e;try{e=await n.text()}catch(t){Te.status.textContent="読み込めなかった："+(t instanceof Error?t.message:String(t));return}setTimeout(()=>{try{const t=i_(e);Ie=t.map,di=xr.findIndex(r=>r.topology===Ie.topology&&r.cellShape===Ie.cellShape),Te.seed.value=String(Ie.seed),Ie.topology==="sphere"?Te.divisions.value=String(Ie.divisions):(Te.width.value=String(Ie.width),Te.height.value=String(Ie.height)),Mo(),As(),fi=-1,bs(),Ts(),vo(),ws();const i=[t.editedCells>0?`書き換えられた値：${t.editedCells.toLocaleString()} セル`:"書き換えなし",t.inconsistentCells>0?`起伏とバイオームが合わないセル：${t.inconsistentCells.toLocaleString()}（起伏に従って表示）`:"",t.editedCells>0||t.customParameters?"書き換えや独自の設定は URL と「生成」には残らない":""].filter(Boolean);Te.status.textContent=`読み込んだ：${n.name}（${Ie.cellCount.toLocaleString()} セル）
${i.join(`
`)}`}catch(t){Te.status.textContent="読み込めなかった："+(t instanceof Error?t.message:String(t))}},20)}function Mo(){Te.combos.replaceChildren(...xr.map((n,e)=>{const t=document.createElement("button");return t.type="button",t.textContent=n.label,t.setAttribute("role","radio"),t.setAttribute("aria-checked",String(e===di)),t.addEventListener("click",()=>{di=e,Mo(),As(),vr()}),t}))}function As(){const n=xr[di];Te.sizePlane.hidden=n.topology==="sphere",Te.sizeSphere.hidden=n.topology!=="sphere",Te.wrapRow.hidden=n.topology!=="cylinder";const e=Math.trunc(Number(Te.divisions.value));Te.sphereCells.textContent=e>=2?`${(10*e*e+2).toLocaleString()} セル`:""}function x_(){const e=_o(po({topology:"plane",width:3,height:3}),1).biomes.biomes.map(t=>[t.name,t.color]);e.push(["海","#"+new Be("#2C5A8A").getHexString()],["湖","#4C8CC0"]),Te.legend.replaceChildren(...e.map(([t,i])=>{const r=document.createElement("li"),s=document.createElement("span");return s.className="sw",s.style.background=i,r.append(s,t),r}))}function eh(n){an.heightScale=n,Te.scale.value=String(n),Te.scaleOut.textContent=n.toFixed(1),bs(),ws()}Te.generate.addEventListener("click",vr),Te.exportBtn.addEventListener("click",__),Te.importBtn.addEventListener("click",()=>Te.importFile.click()),Te.importFile.addEventListener("change",()=>{const n=Te.importFile.files?.[0];Te.importFile.value="",n&&jc(n)}),window.addEventListener("dragover",n=>{n.dataTransfer?.types.includes("Files")&&n.preventDefault()}),window.addEventListener("drop",n=>{const e=n.dataTransfer?.files[0];e&&(n.preventDefault(),jc(e))}),Te.random.addEventListener("click",()=>{Te.seed.value=String(Math.floor(Math.random()*4294967296)),vr()}),Te.divisions.addEventListener("input",As);for(const n of[Te.seed,Te.width,Te.height,Te.divisions])n.addEventListener("keydown",e=>{e.key==="Enter"&&vr()});Te.wrap.addEventListener("change",()=>{an.wrapCylinder=Te.wrap.checked,bs(),Ts(),ws()}),Te.scale.addEventListener("input",()=>eh(Number(Te.scale.value))),document.querySelectorAll("[data-scale]").forEach(n=>n.addEventListener("click",()=>eh(Number(n.dataset.scale)))),Te.resetView.addEventListener("click",Ts);const th=new Zu;let Mr=null;Nn.domElement.addEventListener("pointerdown",n=>{Mr=[n.clientX,n.clientY]}),Nn.domElement.addEventListener("pointerup",n=>{if(!Mr||!Jn||!Ie)return;const e=Math.hypot(n.clientX-Mr[0],n.clientY-Mr[1]);if(Mr=null,e>4)return;const t=Nn.domElement.getBoundingClientRect(),i=new Ue((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1);th.setFromCamera(i,Bt);const r=th.intersectObject(Jn)[0];fi=r&&r.faceIndex!=null?Zc[r.faceIndex]:-1,Qc(),vo()});let Sr=-1,So=0;function v_(){const n=new URLSearchParams(location.search),e=r=>n.has(r)&&Number.isFinite(Number(n.get(r)))?Number(n.get(r)):null,t=e("combo");t!==null&&t>=0&&t<xr.length&&(di=Math.trunc(t)),e("seed")!==null&&(Te.seed.value=String(e("seed"))),e("w")!==null&&(Te.width.value=String(e("w"))),e("h")!==null&&(Te.height.value=String(e("h"))),e("m")!==null&&(Te.divisions.value=String(e("m")));const i=e("scale");i!==null&&(an.heightScale=Math.min(30,Math.max(0,i)),Te.scale.value=String(an.heightScale),Te.scaleOut.textContent=an.heightScale.toFixed(1)),n.get("wrap")==="1"&&(an.wrapCylinder=!0,Te.wrap.checked=!0),Sr=e("select")??-1,So=e("yaw")??0}function ws(){if(!Ie)return;const n=new URLSearchParams;n.set("combo",String(di)),n.set("seed",String(Ie.seed)),Ie.topology==="sphere"?n.set("m",String(Ie.divisions)):(n.set("w",String(Ie.width)),n.set("h",String(Ie.height))),n.set("scale",String(an.heightScale)),an.wrapCylinder&&Ie.topology==="cylinder"&&n.set("wrap","1");try{history.replaceState(null,"","?"+n.toString())}catch{}}v_(),Mo(),As(),x_(),Jc(),vr(),So!==0&&setTimeout(()=>{const n=Bt.position.clone().sub(pi.target);n.applyAxisAngle(new W(0,1,0),Pa.degToRad(So)),Bt.position.copy(pi.target).add(n),pi.update()},60)})();
