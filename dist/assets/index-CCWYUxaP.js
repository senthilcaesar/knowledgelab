(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const m of i)if(m.type==="childList")for(const u of m.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const m={};return i.integrity&&(m.integrity=i.integrity),i.referrerPolicy&&(m.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?m.credentials="include":i.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function a(i){if(i.ep)return;i.ep=!0;const m=n(i);fetch(i.href,m)}})();const at=70,Ue=160,Oe=120;class it{constructor(t,n){this.width=t,this.height=n,this.x=Math.random()*t,this.y=Math.random()*n,this.vx=(Math.random()-.5)*.4,this.vy=(Math.random()-.5)*.4,this.baseRadius=1.5+Math.random()*2,this.pulsePhase=Math.random()*Math.PI*2,this.pulseSpeed=.015+Math.random()*.025,this.isHub=Math.random()<.12,this.isHub&&(this.baseRadius*=2)}update(t){this.pulsePhase+=this.pulseSpeed;const n=this.x-t.x,a=this.y-t.y,i=Math.hypot(n,a);if(i<Oe&&i>0){const u=((Oe-i)/Oe)**2*3;this.vx+=n/i*u*.08,this.vy+=a/i*u*.08}this.vx*=.975,this.vy*=.975;const m=Math.hypot(this.vx,this.vy);m>1.5&&(this.vx=this.vx/m*1.5,this.vy=this.vy/m*1.5),this.x+=this.vx,this.y+=this.vy,this.x<0&&(this.x=this.width),this.x>this.width&&(this.x=0),this.y<0&&(this.y=this.height),this.y>this.height&&(this.y=0)}draw(t,n){const a=.5+.5*Math.sin(this.pulsePhase),i=this.baseRadius*(1+a*.6),m=(this.isHub?.7:.4)+a*.4,u=n?`rgba(176, 141, 87, ${m})`:this.isHub?`rgba(180, 100, 255, ${m})`:`rgba(0, 242, 255, ${m})`,C=n?`rgba(176, 141, 87, ${a*.12})`:this.isHub?`rgba(130, 0, 255, ${a*.1})`:`rgba(0, 242, 255, ${a*.1})`;t.beginPath(),t.arc(this.x,this.y,i*5,0,Math.PI*2),t.fillStyle=C,t.fill(),t.beginPath(),t.arc(this.x,this.y,i,0,Math.PI*2),t.fillStyle=u,t.fill()}}class nt{constructor(t,n,a,i,m){this.x1=t,this.y1=n,this.x2=a,this.y2=i,this.progress=0,this.speed=.02+Math.random()*.03,this.isLight=m,this.alive=!0}update(){this.progress+=this.speed,this.progress>=1&&(this.alive=!1)}draw(t){const n=this.x1+(this.x2-this.x1)*this.progress,a=this.y1+(this.y2-this.y1)*this.progress,i=1-this.progress;t.beginPath(),t.arc(n,a,3,0,Math.PI*2),t.fillStyle=this.isLight?`rgba(212, 160, 23, ${i})`:`rgba(255, 255, 255, ${i})`,t.fill()}}function st(r){const t=r.getContext("2d");let n=0,a=0,i=[],m=[],u=null;const C={x:-9999,y:-9999};let k=0;function l(){n=r.width=window.innerWidth,a=r.height=window.innerHeight,i=Array.from({length:at},()=>new it(n,a))}function T(A){if(k--,k>0)return;k=30+Math.floor(Math.random()*60);const S=[...i].sort(()=>Math.random()-.5);for(let I=0;I<S.length-1;I++){const j=S[I],N=S[I+1];if(Math.hypot(j.x-N.x,j.y-N.y)<Ue){m.push(new nt(j.x,j.y,N.x,N.y,A));return}}}function M(A,S,I,j){const N=(1-I/Ue)*(j?.25:.35),q=t.createLinearGradient(A.x,A.y,S.x,S.y),$=j?`rgba(176,141,87,${N*1.5})`:A.isHub?`rgba(150,50,255,${N*1.5})`:`rgba(0,242,255,${N*1.5})`,X=j?`rgba(122,106,83,${N})`:S.isHub?`rgba(150,50,255,${N})`:`rgba(0,200,220,${N})`;q.addColorStop(0,$),q.addColorStop(1,X),t.beginPath(),t.moveTo(A.x,A.y),t.lineTo(S.x,S.y),t.strokeStyle=q,t.lineWidth=j?.6:.8,t.stroke()}function L(){const A=document.documentElement.classList.contains("light-mode");t.clearRect(0,0,n,a);for(let S=0;S<i.length;S++){i[S].update(C);for(let I=S+1;I<i.length;I++){const j=i[S].x-i[I].x,N=i[S].y-i[I].y,q=Math.hypot(j,N);q<Ue&&M(i[S],i[I],q,A)}}i.forEach(S=>S.draw(t,A)),T(A),m=m.filter(S=>S.alive),m.forEach(S=>{S.update(),S.draw(t)}),u=requestAnimationFrame(L)}function H(){cancelAnimationFrame(u),window.removeEventListener("resize",l),window.removeEventListener("mousemove",D)}function D(A){C.x=A.clientX,C.y=A.clientY}return window.addEventListener("resize",l),window.addEventListener("mousemove",D),l(),L(),{destroy:H}}function lt(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Je,ar;function dt(){if(ar)return Je;ar=1;function r(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(o=>{const d=e[o],f=typeof d;(f==="object"||f==="function")&&!Object.isFrozen(d)&&r(d)}),e}class t{constructor(o){o.data===void 0&&(o.data={}),this.data=o.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...o){const d=Object.create(null);for(const f in e)d[f]=e[f];return o.forEach(function(f){for(const R in f)d[R]=f[R]}),d}const i="</span>",m=e=>!!e.scope,u=(e,{prefix:o})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const d=e.split(".");return[`${o}${d.shift()}`,...d.map((f,R)=>`${f}${"_".repeat(R+1)}`)].join(" ")}return`${o}${e}`};class C{constructor(o,d){this.buffer="",this.classPrefix=d.classPrefix,o.walk(this)}addText(o){this.buffer+=n(o)}openNode(o){if(!m(o))return;const d=u(o.scope,{prefix:this.classPrefix});this.span(d)}closeNode(o){m(o)&&(this.buffer+=i)}value(){return this.buffer}span(o){this.buffer+=`<span class="${o}">`}}const k=(e={})=>{const o={children:[]};return Object.assign(o,e),o};class l{constructor(){this.rootNode=k(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(o){this.top.children.push(o)}openNode(o){const d=k({scope:o});this.add(d),this.stack.push(d)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(o){return this.constructor._walk(o,this.rootNode)}static _walk(o,d){return typeof d=="string"?o.addText(d):d.children&&(o.openNode(d),d.children.forEach(f=>this._walk(o,f)),o.closeNode(d)),o}static _collapse(o){typeof o!="string"&&o.children&&(o.children.every(d=>typeof d=="string")?o.children=[o.children.join("")]:o.children.forEach(d=>{l._collapse(d)}))}}class T extends l{constructor(o){super(),this.options=o}addText(o){o!==""&&this.add(o)}startScope(o){this.openNode(o)}endScope(){this.closeNode()}__addSublanguage(o,d){const f=o.root;d&&(f.scope=`language:${d}`),this.add(f)}toHTML(){return new C(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function M(e){return e?typeof e=="string"?e:e.source:null}function L(e){return A("(?=",e,")")}function H(e){return A("(?:",e,")*")}function D(e){return A("(?:",e,")?")}function A(...e){return e.map(d=>M(d)).join("")}function S(e){const o=e[e.length-1];return typeof o=="object"&&o.constructor===Object?(e.splice(e.length-1,1),o):{}}function I(...e){return"("+(S(e).capture?"":"?:")+e.map(f=>M(f)).join("|")+")"}function j(e){return new RegExp(e.toString()+"|").exec("").length-1}function N(e,o){const d=e&&e.exec(o);return d&&d.index===0}const q=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function $(e,{joinWith:o}){let d=0;return e.map(f=>{d+=1;const R=d;let _=M(f),g="";for(;_.length>0;){const p=q.exec(_);if(!p){g+=_;break}g+=_.substring(0,p.index),_=_.substring(p.index+p[0].length),p[0][0]==="\\"&&p[1]?g+="\\"+String(Number(p[1])+R):(g+=p[0],p[0]==="("&&d++)}return g}).map(f=>`(${f})`).join(o)}const X=/\b\B/,he="[a-zA-Z]\\w*",le="[a-zA-Z_]\\w*",ue="\\b\\d+(\\.\\d+)?",be="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ve="\\b(0b[01]+)",Me="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",ze=(e={})=>{const o=/^#![ ]*\//;return e.binary&&(e.begin=A(o,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:o,end:/$/,relevance:0,"on:begin":(d,f)=>{d.index!==0&&f.ignoreMatch()}},e)},ae={begin:"\\\\[\\s\\S]",relevance:0},Ie={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ae]},fe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ae]},Pe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},F=function(e,o,d={}){const f=a({scope:"comment",begin:e,end:o,contains:[]},d);f.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const R=I("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return f.contains.push({begin:A(/[ ]+/,"(",R,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),f},re=F("//","$"),ie=F("/\\*","\\*/"),de=F("#","$"),ge={scope:"number",begin:ue,relevance:0},xe={scope:"number",begin:be,relevance:0},hr={scope:"number",begin:ve,relevance:0},ur={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ae,{begin:/\[/,end:/\]/,relevance:0,contains:[ae]}]},br={scope:"title",begin:he,relevance:0},vr={scope:"title",begin:le,relevance:0},fr={begin:"\\.\\s*"+le,relevance:0};var ke=Object.freeze({__proto__:null,APOS_STRING_MODE:Ie,BACKSLASH_ESCAPE:ae,BINARY_NUMBER_MODE:hr,BINARY_NUMBER_RE:ve,COMMENT:F,C_BLOCK_COMMENT_MODE:ie,C_LINE_COMMENT_MODE:re,C_NUMBER_MODE:xe,C_NUMBER_RE:be,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(o,d)=>{d.data._beginMatch=o[1]},"on:end":(o,d)=>{d.data._beginMatch!==o[1]&&d.ignoreMatch()}})},HASH_COMMENT_MODE:de,IDENT_RE:he,MATCH_NOTHING_RE:X,METHOD_GUARD:fr,NUMBER_MODE:ge,NUMBER_RE:ue,PHRASAL_WORDS_MODE:Pe,QUOTE_STRING_MODE:fe,REGEXP_MODE:ur,RE_STARTERS_RE:Me,SHEBANG:ze,TITLE_MODE:br,UNDERSCORE_IDENT_RE:le,UNDERSCORE_TITLE_MODE:vr});function xr(e,o){e.input[e.index-1]==="."&&o.ignoreMatch()}function kr(e,o){e.className!==void 0&&(e.scope=e.className,delete e.className)}function wr(e,o){o&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=xr,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Cr(e,o){Array.isArray(e.illegal)&&(e.illegal=I(...e.illegal))}function Sr(e,o){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Er(e,o){e.relevance===void 0&&(e.relevance=1)}const Ar=(e,o)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const d=Object.assign({},e);Object.keys(e).forEach(f=>{delete e[f]}),e.keywords=d.keywords,e.begin=A(d.beforeMatch,L(d.begin)),e.starts={relevance:0,contains:[Object.assign(d,{endsParent:!0})]},e.relevance=0,delete d.beforeMatch},Tr=["of","and","for","in","not","or","if","then","parent","list","value"],Mr="keyword";function Fe(e,o,d=Mr){const f=Object.create(null);return typeof e=="string"?R(d,e.split(" ")):Array.isArray(e)?R(d,e):Object.keys(e).forEach(function(_){Object.assign(f,Fe(e[_],o,_))}),f;function R(_,g){o&&(g=g.map(p=>p.toLowerCase())),g.forEach(function(p){const v=p.split("|");f[v[0]]=[_,zr(v[0],v[1])]})}}function zr(e,o){return o?Number(o):Ir(e)?0:1}function Ir(e){return Tr.includes(e.toLowerCase())}const We={},ne=e=>{console.error(e)},He=(e,...o)=>{console.log(`WARN: ${e}`,...o)},ce=(e,o)=>{We[`${e}/${o}`]||(console.log(`Deprecated as of ${e}. ${o}`),We[`${e}/${o}`]=!0)},we=new Error;function Ge(e,o,{key:d}){let f=0;const R=e[d],_={},g={};for(let p=1;p<=o.length;p++)g[p+f]=R[p],_[p+f]=!0,f+=j(o[p-1]);e[d]=g,e[d]._emit=_,e[d]._multi=!0}function Pr(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ne("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),we;if(typeof e.beginScope!="object"||e.beginScope===null)throw ne("beginScope must be object"),we;Ge(e,e.begin,{key:"beginScope"}),e.begin=$(e.begin,{joinWith:""})}}function Br(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ne("skip, excludeEnd, returnEnd not compatible with endScope: {}"),we;if(typeof e.endScope!="object"||e.endScope===null)throw ne("endScope must be object"),we;Ge(e,e.end,{key:"endScope"}),e.end=$(e.end,{joinWith:""})}}function Lr(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Rr(e){Lr(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Pr(e),Br(e)}function _r(e){function o(g,p){return new RegExp(M(g),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(p?"g":""))}class d{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(p,v){v.position=this.position++,this.matchIndexes[this.matchAt]=v,this.regexes.push([v,p]),this.matchAt+=j(p)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const p=this.regexes.map(v=>v[1]);this.matcherRe=o($(p,{joinWith:"|"}),!0),this.lastIndex=0}exec(p){this.matcherRe.lastIndex=this.lastIndex;const v=this.matcherRe.exec(p);if(!v)return null;const J=v.findIndex((ye,Le)=>Le>0&&ye!==void 0),U=this.matchIndexes[J];return v.splice(0,J),Object.assign(v,U)}}class f{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(p){if(this.multiRegexes[p])return this.multiRegexes[p];const v=new d;return this.rules.slice(p).forEach(([J,U])=>v.addRule(J,U)),v.compile(),this.multiRegexes[p]=v,v}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(p,v){this.rules.push([p,v]),v.type==="begin"&&this.count++}exec(p){const v=this.getMatcher(this.regexIndex);v.lastIndex=this.lastIndex;let J=v.exec(p);if(this.resumingScanAtSamePosition()&&!(J&&J.index===this.lastIndex)){const U=this.getMatcher(0);U.lastIndex=this.lastIndex+1,J=U.exec(p)}return J&&(this.regexIndex+=J.position+1,this.regexIndex===this.count&&this.considerAll()),J}}function R(g){const p=new f;return g.contains.forEach(v=>p.addRule(v.begin,{rule:v,type:"begin"})),g.terminatorEnd&&p.addRule(g.terminatorEnd,{type:"end"}),g.illegal&&p.addRule(g.illegal,{type:"illegal"}),p}function _(g,p){const v=g;if(g.isCompiled)return v;[kr,Sr,Rr,Ar].forEach(U=>U(g,p)),e.compilerExtensions.forEach(U=>U(g,p)),g.__beforeBegin=null,[wr,Cr,Er].forEach(U=>U(g,p)),g.isCompiled=!0;let J=null;return typeof g.keywords=="object"&&g.keywords.$pattern&&(g.keywords=Object.assign({},g.keywords),J=g.keywords.$pattern,delete g.keywords.$pattern),J=J||/\w+/,g.keywords&&(g.keywords=Fe(g.keywords,e.case_insensitive)),v.keywordPatternRe=o(J,!0),p&&(g.begin||(g.begin=/\B|\b/),v.beginRe=o(v.begin),!g.end&&!g.endsWithParent&&(g.end=/\B|\b/),g.end&&(v.endRe=o(v.end)),v.terminatorEnd=M(v.end)||"",g.endsWithParent&&p.terminatorEnd&&(v.terminatorEnd+=(g.end?"|":"")+p.terminatorEnd)),g.illegal&&(v.illegalRe=o(g.illegal)),g.contains||(g.contains=[]),g.contains=[].concat(...g.contains.map(function(U){return Dr(U==="self"?g:U)})),g.contains.forEach(function(U){_(U,v)}),g.starts&&_(g.starts,p),v.matcher=R(v),v}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),_(e)}function qe(e){return e?e.endsWithParent||qe(e.starts):!1}function Dr(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(o){return a(e,{variants:null},o)})),e.cachedVariants?e.cachedVariants:qe(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var jr="11.11.1";class Nr extends Error{constructor(o,d){super(o),this.name="HTMLInjectionError",this.html=d}}const Be=n,Ye=a,$e=Symbol("nomatch"),Ur=7,Ke=function(e){const o=Object.create(null),d=Object.create(null),f=[];let R=!0;const _="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]};let p={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:T};function v(s){return p.noHighlightRe.test(s)}function J(s){let h=s.className+" ";h+=s.parentNode?s.parentNode.className:"";const E=p.languageDetectRe.exec(h);if(E){const P=te(E[1]);return P||(He(_.replace("{}",E[1])),He("Falling back to no-highlight mode for this block.",s)),P?E[1]:"no-highlight"}return h.split(/\s+/).find(P=>v(P)||te(P))}function U(s,h,E){let P="",O="";typeof h=="object"?(P=s,E=h.ignoreIllegals,O=h.language):(ce("10.7.0","highlight(lang, code, ...args) has been deprecated."),ce("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),O=s,P=h),E===void 0&&(E=!0);const K={code:P,language:O};Se("before:highlight",K);const oe=K.result?K.result:ye(K.language,K.code,E);return oe.code=K.code,Se("after:highlight",oe),oe}function ye(s,h,E,P){const O=Object.create(null);function K(c,y){return c.keywords[y]}function oe(){if(!x.keywords){W.addText(B);return}let c=0;x.keywordPatternRe.lastIndex=0;let y=x.keywordPatternRe.exec(B),w="";for(;y;){w+=B.substring(c,y.index);const z=Q.case_insensitive?y[0].toLowerCase():y[0],G=K(x,z);if(G){const[Z,tt]=G;if(W.addText(w),w="",O[z]=(O[z]||0)+1,O[z]<=Ur&&(Te+=tt),Z.startsWith("_"))w+=y[0];else{const ot=Q.classNameAliases[Z]||Z;V(y[0],ot)}}else w+=y[0];c=x.keywordPatternRe.lastIndex,y=x.keywordPatternRe.exec(B)}w+=B.substring(c),W.addText(w)}function Ee(){if(B==="")return;let c=null;if(typeof x.subLanguage=="string"){if(!o[x.subLanguage]){W.addText(B);return}c=ye(x.subLanguage,B,!0,or[x.subLanguage]),or[x.subLanguage]=c._top}else c=Re(B,x.subLanguage.length?x.subLanguage:null);x.relevance>0&&(Te+=c.relevance),W.__addSublanguage(c._emitter,c.language)}function Y(){x.subLanguage!=null?Ee():oe(),B=""}function V(c,y){c!==""&&(W.startScope(y),W.addText(c),W.endScope())}function Ze(c,y){let w=1;const z=y.length-1;for(;w<=z;){if(!c._emit[w]){w++;continue}const G=Q.classNameAliases[c[w]]||c[w],Z=y[w];G?V(Z,G):(B=Z,oe(),B=""),w++}}function er(c,y){return c.scope&&typeof c.scope=="string"&&W.openNode(Q.classNameAliases[c.scope]||c.scope),c.beginScope&&(c.beginScope._wrap?(V(B,Q.classNameAliases[c.beginScope._wrap]||c.beginScope._wrap),B=""):c.beginScope._multi&&(Ze(c.beginScope,y),B="")),x=Object.create(c,{parent:{value:x}}),x}function rr(c,y,w){let z=N(c.endRe,w);if(z){if(c["on:end"]){const G=new t(c);c["on:end"](y,G),G.isMatchIgnored&&(z=!1)}if(z){for(;c.endsParent&&c.parent;)c=c.parent;return c}}if(c.endsWithParent)return rr(c.parent,y,w)}function Qr(c){return x.matcher.regexIndex===0?(B+=c[0],1):(Ne=!0,0)}function Xr(c){const y=c[0],w=c.rule,z=new t(w),G=[w.__beforeBegin,w["on:begin"]];for(const Z of G)if(Z&&(Z(c,z),z.isMatchIgnored))return Qr(y);return w.skip?B+=y:(w.excludeBegin&&(B+=y),Y(),!w.returnBegin&&!w.excludeBegin&&(B=y)),er(w,c),w.returnBegin?0:y.length}function Zr(c){const y=c[0],w=h.substring(c.index),z=rr(x,c,w);if(!z)return $e;const G=x;x.endScope&&x.endScope._wrap?(Y(),V(y,x.endScope._wrap)):x.endScope&&x.endScope._multi?(Y(),Ze(x.endScope,c)):G.skip?B+=y:(G.returnEnd||G.excludeEnd||(B+=y),Y(),G.excludeEnd&&(B=y));do x.scope&&W.closeNode(),!x.skip&&!x.subLanguage&&(Te+=x.relevance),x=x.parent;while(x!==z.parent);return z.starts&&er(z.starts,c),G.returnEnd?0:y.length}function et(){const c=[];for(let y=x;y!==Q;y=y.parent)y.scope&&c.unshift(y.scope);c.forEach(y=>W.openNode(y))}let Ae={};function tr(c,y){const w=y&&y[0];if(B+=c,w==null)return Y(),0;if(Ae.type==="begin"&&y.type==="end"&&Ae.index===y.index&&w===""){if(B+=h.slice(y.index,y.index+1),!R){const z=new Error(`0 width match regex (${s})`);throw z.languageName=s,z.badRule=Ae.rule,z}return 1}if(Ae=y,y.type==="begin")return Xr(y);if(y.type==="illegal"&&!E){const z=new Error('Illegal lexeme "'+w+'" for mode "'+(x.scope||"<unnamed>")+'"');throw z.mode=x,z}else if(y.type==="end"){const z=Zr(y);if(z!==$e)return z}if(y.type==="illegal"&&w==="")return B+=`
`,1;if(je>1e5&&je>y.index*3)throw new Error("potential infinite loop, way more iterations than matches");return B+=w,w.length}const Q=te(s);if(!Q)throw ne(_.replace("{}",s)),new Error('Unknown language: "'+s+'"');const rt=_r(Q);let De="",x=P||rt;const or={},W=new p.__emitter(p);et();let B="",Te=0,se=0,je=0,Ne=!1;try{if(Q.__emitTokens)Q.__emitTokens(h,W);else{for(x.matcher.considerAll();;){je++,Ne?Ne=!1:x.matcher.considerAll(),x.matcher.lastIndex=se;const c=x.matcher.exec(h);if(!c)break;const y=h.substring(se,c.index),w=tr(y,c);se=c.index+w}tr(h.substring(se))}return W.finalize(),De=W.toHTML(),{language:s,value:De,relevance:Te,illegal:!1,_emitter:W,_top:x}}catch(c){if(c.message&&c.message.includes("Illegal"))return{language:s,value:Be(h),illegal:!0,relevance:0,_illegalBy:{message:c.message,index:se,context:h.slice(se-100,se+100),mode:c.mode,resultSoFar:De},_emitter:W};if(R)return{language:s,value:Be(h),illegal:!1,relevance:0,errorRaised:c,_emitter:W,_top:x};throw c}}function Le(s){const h={value:Be(s),illegal:!1,relevance:0,_top:g,_emitter:new p.__emitter(p)};return h._emitter.addText(s),h}function Re(s,h){h=h||p.languages||Object.keys(o);const E=Le(s),P=h.filter(te).filter(Xe).map(Y=>ye(Y,s,!1));P.unshift(E);const O=P.sort((Y,V)=>{if(Y.relevance!==V.relevance)return V.relevance-Y.relevance;if(Y.language&&V.language){if(te(Y.language).supersetOf===V.language)return 1;if(te(V.language).supersetOf===Y.language)return-1}return 0}),[K,oe]=O,Ee=K;return Ee.secondBest=oe,Ee}function Or(s,h,E){const P=h&&d[h]||E;s.classList.add("hljs"),s.classList.add(`language-${P}`)}function _e(s){let h=null;const E=J(s);if(v(E))return;if(Se("before:highlightElement",{el:s,language:E}),s.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",s);return}if(s.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),p.throwUnescapedHTML))throw new Nr("One of your code blocks includes unescaped HTML.",s.innerHTML);h=s;const P=h.textContent,O=E?U(P,{language:E,ignoreIllegals:!0}):Re(P);s.innerHTML=O.value,s.dataset.highlighted="yes",Or(s,E,O.language),s.result={language:O.language,re:O.relevance,relevance:O.relevance},O.secondBest&&(s.secondBest={language:O.secondBest.language,relevance:O.secondBest.relevance}),Se("after:highlightElement",{el:s,result:O,text:P})}function Jr(s){p=Ye(p,s)}const Fr=()=>{Ce(),ce("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Wr(){Ce(),ce("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ve=!1;function Ce(){function s(){Ce()}if(document.readyState==="loading"){Ve||window.addEventListener("DOMContentLoaded",s,!1),Ve=!0;return}document.querySelectorAll(p.cssSelector).forEach(_e)}function Hr(s,h){let E=null;try{E=h(e)}catch(P){if(ne("Language definition for '{}' could not be registered.".replace("{}",s)),R)ne(P);else throw P;E=g}E.name||(E.name=s),o[s]=E,E.rawDefinition=h.bind(null,e),E.aliases&&Qe(E.aliases,{languageName:s})}function Gr(s){delete o[s];for(const h of Object.keys(d))d[h]===s&&delete d[h]}function qr(){return Object.keys(o)}function te(s){return s=(s||"").toLowerCase(),o[s]||o[d[s]]}function Qe(s,{languageName:h}){typeof s=="string"&&(s=[s]),s.forEach(E=>{d[E.toLowerCase()]=h})}function Xe(s){const h=te(s);return h&&!h.disableAutodetect}function Yr(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=h=>{s["before:highlightBlock"](Object.assign({block:h.el},h))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=h=>{s["after:highlightBlock"](Object.assign({block:h.el},h))})}function $r(s){Yr(s),f.push(s)}function Kr(s){const h=f.indexOf(s);h!==-1&&f.splice(h,1)}function Se(s,h){const E=s;f.forEach(function(P){P[E]&&P[E](h)})}function Vr(s){return ce("10.7.0","highlightBlock will be removed entirely in v12.0"),ce("10.7.0","Please use highlightElement now."),_e(s)}Object.assign(e,{highlight:U,highlightAuto:Re,highlightAll:Ce,highlightElement:_e,highlightBlock:Vr,configure:Jr,initHighlighting:Fr,initHighlightingOnLoad:Wr,registerLanguage:Hr,unregisterLanguage:Gr,listLanguages:qr,getLanguage:te,registerAliases:Qe,autoDetection:Xe,inherit:Ye,addPlugin:$r,removePlugin:Kr}),e.debugMode=function(){R=!1},e.safeMode=function(){R=!0},e.versionString=jr,e.regex={concat:A,lookahead:L,either:I,optional:D,anyNumberOfTimes:H};for(const s in ke)typeof ke[s]=="object"&&r(ke[s]);return Object.assign(e,ke),e},me=Ke({});return me.newInstance=()=>Ke({}),Je=me,me.HighlightJS=me,me.default=me,Je}var ct=dt();const ee=lt(ct);function mr(r){const t=r.regex,n={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const i={className:"subst",begin:/\$\(/,end:/\)/,contains:[r.BACKSLASH_ESCAPE]},m=r.inherit(r.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),u={begin:/<<-?\s*(?=\w+)/,starts:{contains:[r.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},C={className:"string",begin:/"/,end:/"/,contains:[r.BACKSLASH_ESCAPE,n,i]};i.contains.push(C);const k={match:/\\"/},l={className:"string",begin:/'/,end:/'/},T={match:/\\'/},M={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},r.NUMBER_MODE,n]},L=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],H=r.SHEBANG({binary:`(${L.join("|")})`,relevance:10}),D={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[r.inherit(r.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},A=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],S=["true","false"],I={match:/(\/[a-z._-]+)+/},j=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],N=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],q=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],$=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:A,literal:S,built_in:[...j,...N,"set","shopt",...q,...$]},contains:[H,r.SHEBANG(),D,M,m,u,I,C,k,l,T,n]}}function mt(r){const t=r.regex,n=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),a=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],C={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:a,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},k={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:C,illegal:/#/},T={begin:/\{\{/,relevance:0},M={className:"string",contains:[r.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[r.BACKSLASH_ESCAPE,k],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[r.BACKSLASH_ESCAPE,k],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[r.BACKSLASH_ESCAPE,k,T,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[r.BACKSLASH_ESCAPE,k,T,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[r.BACKSLASH_ESCAPE,T,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[r.BACKSLASH_ESCAPE,T,l]},r.APOS_STRING_MODE,r.QUOTE_STRING_MODE]},L="[0-9](_?[0-9])*",H=`(\\b(${L}))?\\.(${L})|\\b(${L})\\.`,D=`\\b|${a.join("|")}`,A={className:"number",relevance:0,variants:[{begin:`(\\b(${L})|(${H}))[eE][+-]?(${L})[jJ]?(?=${D})`},{begin:`(${H})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${D})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${D})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${D})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${D})`},{begin:`\\b(${L})[jJ](?=${D})`}]},S={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:C,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},I={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:["self",k,A,M,r.HASH_COMMENT_MODE]}]};return l.contains=[M,A,k],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:C,illegal:/(<\/|\?)|=>/,contains:[k,A,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},M,S,r.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,n],scope:{1:"keyword",3:"title.function"},contains:[I]},{variants:[{match:[/\bclass/,/\s+/,n,/\s*/,/\(\s*/,n,/\s*\)/]},{match:[/\bclass/,/\s+/,n]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[A,I,M]}]}}function pt(r){const t={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},n={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],i={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[t,n,r.QUOTE_STRING_MODE,i,r.C_NUMBER_MODE,r.C_LINE_COMMENT_MODE,r.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function gt(r){const t="true false yes no null",n="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},i={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},m={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},u={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[r.BACKSLASH_ESCAPE,i]},C=r.inherit(u,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),L={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},H={end:",",endsWithParent:!0,excludeEnd:!0,keywords:t,relevance:0},D={begin:/\{/,end:/\}/,contains:[H],illegal:"\\n",relevance:0},A={begin:"\\[",end:"\\]",contains:[H],illegal:"\\n",relevance:0},S=[a,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+n},{className:"type",begin:"!<"+n+">"},{className:"type",begin:"!"+n},{className:"type",begin:"!!"+n},{className:"meta",begin:"&"+r.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+r.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},r.HASH_COMMENT_MODE,{beginKeywords:t,keywords:{literal:t}},L,{className:"number",begin:r.C_NUMBER_RE+"\\b",relevance:0},D,A,m,u],I=[...S];return I.pop(),I.push(C),H.contains=I,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:S}}const ir="[A-Za-z$_][0-9A-Za-z$_]*",yt=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],ht=["true","false","null","undefined","NaN","Infinity"],pr=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gr=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],yr=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ut=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],bt=[].concat(yr,pr,gr);function vt(r){const t=r.regex,n=(F,{after:re})=>{const ie="</"+F[0].slice(1);return F.input.indexOf(ie,re)!==-1},a=ir,i={begin:"<>",end:"</>"},m=/<[A-Za-z0-9\\._:-]+\s*\/>/,u={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(F,re)=>{const ie=F[0].length+F.index,de=F.input[ie];if(de==="<"||de===","){re.ignoreMatch();return}de===">"&&(n(F,{after:ie})||re.ignoreMatch());let ge;const xe=F.input.substring(ie);if(ge=xe.match(/^\s*=/)){re.ignoreMatch();return}if((ge=xe.match(/^\s+extends\s+/))&&ge.index===0){re.ignoreMatch();return}}},C={$pattern:ir,keyword:yt,literal:ht,built_in:bt,"variable.language":ut},k="[0-9](_?[0-9])*",l=`\\.(${k})`,T="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",M={className:"number",variants:[{begin:`(\\b(${T})((${l})|\\.)?|(${l}))[eE][+-]?(${k})\\b`},{begin:`\\b(${T})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},L={className:"subst",begin:"\\$\\{",end:"\\}",keywords:C,contains:[]},H={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,L],subLanguage:"xml"}},D={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,L],subLanguage:"css"}},A={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,L],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[r.BACKSLASH_ESCAPE,L]},j={className:"comment",variants:[r.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),r.C_BLOCK_COMMENT_MODE,r.C_LINE_COMMENT_MODE]},N=[r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,H,D,A,S,{match:/\$\d+/},M];L.contains=N.concat({begin:/\{/,end:/\}/,keywords:C,contains:["self"].concat(N)});const q=[].concat(j,L.contains),$=q.concat([{begin:/(\s*)\(/,end:/\)/,keywords:C,contains:["self"].concat(q)}]),X={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:$},he={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},le={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...pr,...gr]}},ue={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},be={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[X],illegal:/%/},ve={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Me(F){return t.concat("(?!",F.join("|"),")")}const ze={match:t.concat(/\b/,Me([...yr,"super","import"].map(F=>`${F}\\s*\\(`)),a,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},ae={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Ie={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},X]},fe="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+r.UNDERSCORE_IDENT_RE+")\\s*=>",Pe={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(fe)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[X]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:C,exports:{PARAMS_CONTAINS:$,CLASS_REFERENCE:le},illegal:/#(?![$_A-z])/,contains:[r.SHEBANG({label:"shebang",binary:"node",relevance:5}),ue,r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,H,D,A,S,j,{match:/\$\d+/},M,le,{scope:"attr",match:a+t.lookahead(":"),relevance:0},Pe,{begin:"("+r.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[j,r.REGEXP_MODE,{className:"function",begin:fe,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:r.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:$}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:m},{begin:u.begin,"on:begin":u.isTrulyOpeningTag,end:u.end}],subLanguage:"xml",contains:[{begin:u.begin,end:u.end,skip:!0,contains:["self"]}]}]},be,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+r.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[X,r.inherit(r.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ae,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[X]},ze,ve,he,Ie,{match:/\$[(.]/}]}}function ft(r){const t=r.regex,n=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,i={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},m={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},u=r.inherit(m,{begin:/\(/,end:/\)/}),C=r.inherit(r.APOS_STRING_MODE,{className:"string"}),k=r.inherit(r.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[m,k,C,u,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[m,u,k,C]}]}]},r.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[k]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(n,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:l}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}ee.registerLanguage("bash",mr);ee.registerLanguage("shell",mr);ee.registerLanguage("python",mt);ee.registerLanguage("json",pt);ee.registerLanguage("yaml",gt);ee.registerLanguage("javascript",vt);ee.registerLanguage("html",ft);const nr=["display: block","padding: 1rem","border: 1px solid var(--border-color)","border-radius: 8px","font-family: 'JetBrains Mono', monospace","font-size: 0.85rem","white-space: pre-wrap","line-height: 1.5","overflow-x: hidden","margin: 0.5rem 0","box-shadow: inset 0 2px 4px rgba(0,0,0,0.15)"].join("; "),sr={block:`${nr}; background: var(--syntax-bg); color: var(--syntax-text)`,terminal:`${nr}; background: var(--surface-dark); color: var(--code-green)`};let lr=!1;function xt(){if(lr)return;lr=!0;const r=document.createElement("style");r.textContent=`

    /* keyword — pink-red #f92672
       Vim: Keyword Conditional Statement Operator Type Tag Define PreProc rubyControl */
    .hljs-keyword,
    .hljs-operator,
    .hljs-selector-tag,
    .hljs-type,
    .hljs-deletion,
    .hljs-meta .hljs-keyword {
      color: var(--syntax-keyword);
      font-weight: bold;
    }

    /* string — yellow #e6db74
       Vim: String Label shQuote yamlDocumentHeader rubyStringDelimiter */
    .hljs-string,
    .hljs-addition,
    .hljs-regexp,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-attr {
      color: var(--syntax-string);
    }

    /* constant / number — purple #ae81ff
       Vim: Boolean Character Number Float SpecialChar rubySymbol htmlSpecialChar cssColor */
    .hljs-number,
    .hljs-literal,
    .hljs-link,
    .hljs-symbol,
    .hljs-template-variable {
      color: var(--syntax-constant);
    }

    /* comment — warm grey #75715e, italic
       Vim: Comment SpecialComment NonText Folded SpecialKey */
    .hljs-comment,
    .hljs-meta,
    .hljs-quote {
      color: var(--syntax-comment);
      font-style: italic;
    }

    /* function name — green #a6e22e
       Vim: Function helpCommand htmlTag htmlEndTag rubyFunction cssPseudoClassId cssClassName */
    .hljs-title,
    .hljs-section,
    .hljs-selector-class {
      color: var(--syntax-function);
    }

    /* identifier / built-in — cyan #66d9ef, italic
       Vim: Identifier StorageClass javaScriptFunction shDerefSimple
            rubyConstant rubyRailsMethod cssCommonAttr diffFile diffLine */
    .hljs-built_in,
    .hljs-variable,
    .hljs-name {
      color: var(--syntax-identifier);
      font-style: italic;
    }

    /* params / decorators — orange #fd971f, italic
       Vim: rubyBlockParameter cssURL elixirAlias */
    .hljs-params {
      color: var(--syntax-params);
      font-style: italic;
    }

    /* Keep our bg/text CSS vars in control, not hljs defaults */
    .hljs {
      background: transparent !important;
      color: var(--syntax-text) !important;
    }

  `,document.head.appendChild(r)}function dr(r){r&&(xt(),r.querySelectorAll("pre").forEach(t=>{const n=t.style.color||"",a=t.style.background||"",m=(t.textContent||"").trimStart()[0],u=n.includes("code-green")||a.includes("surface-dark")||m==="❯"||m==="$";if((u?sr.terminal:sr.block).split(";").forEach(k=>{const[l,...T]=k.split(":");if(!l)return;const M=l.trim(),L=M.replace(/-([a-z])/g,(H,D)=>D.toUpperCase());M==="font-size"&&t.style.fontSize||M==="line-height"&&t.style.lineHeight||(t.style[L]=T.join(":").trim())}),!u){const k=t.querySelector("code")||t;k.classList.contains("hljs")||ee.highlightElement(k)}}),r.querySelectorAll("code").forEach(t=>{if(t.closest("pre"))return;const a=(t.style.background||"").includes("surface-dark");t.style.fontSize="0.85rem",t.style.fontFamily="'JetBrains Mono', monospace",t.style.lineHeight="1.5",!a&&!t.classList.contains("hljs")&&(t.style.background="var(--syntax-bg)",t.style.color="var(--syntax-text)",ee.highlightElement(t))}),r.querySelectorAll("pre").forEach(t=>{t.style.fontSize||(t.style.fontSize="0.85rem"),t.style.lineHeight||(t.style.lineHeight="1.5")}))}const kt={vite:"^7.3.1"},wt={"highlight.js":"^11.11.1",three:"^0.183.2"},cr={devDependencies:kt,dependencies:wt},Ct={id:"claude-code-configuration",title:"Claude Code Configuration",category:"",tags:[""],tabs:[{label:"Overview",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">A Complete Beginner's Guide to Claude Code Configuration</strong>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">What is Claude Code, really?</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Claude Code is an AI coding assistant that lives in your terminal. You type instructions in plain English, and it reads your code, edits files, runs commands, and helps you build things — all without you leaving the command line.</p>

<p style="margin-bottom:1rem; line-height:1.75;">But here is the thing that makes Claude Code different from a simple chatbot: it has a memory system. You can teach it about your project once, set rules for how it should behave, and give it shortcuts for your most common tasks. It will remember all of that across every session, for every developer on your team.</p>

<p style="margin-bottom:1rem; line-height:1.75;">That memory system is built from a handful of plain text files. Understanding those files is the key to getting genuinely useful work out of Claude Code.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The problem Claude Code solves</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Every time you start a new Claude Code session, it begins with a completely blank slate. It does not remember that you prefer Google-style docstrings. It does not know your database runs on port 5433. It does not know that your team uses a specific branch naming convention, or that there is a tricky workaround in your authentication module.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Without any configuration, you end up repeating yourself constantly — explaining the same context at the start of every conversation, re-establishing your preferences, reminding Claude not to touch certain files. This gets old very fast.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The configuration files solve this by encoding everything Claude needs to know once, upfront. From that point on, every session starts with Claude already briefed on your project.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The two kinds of configuration</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Before looking at individual files, it helps to understand that Claude Code has two fundamentally different things it needs to know:</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>What Claude should know</strong> — context about your project, your coding conventions, your architecture, your team's rules. This is documentation you write for Claude the same way you'd write documentation for a new teammate.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>What Claude is allowed to do</strong> — permissions, tool access, environment variables, which commands it can run without asking. This is the safety layer that controls Claude's behaviour at runtime.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The first kind lives in Markdown files (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.md</code>). The second kind lives in JSON files (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.json</code>). Once you understand that split, the whole system clicks into place.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Where the files live</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Claude Code uses files in three locations. Together they form a layered system where more specific settings override broader ones.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Inside your project</strong> — files that are specific to this codebase and shared with your team via version control. This is where most of your configuration lives.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>In your home directory</strong> (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/</code>) — files that apply to every project you work on, across your whole machine. Good for personal preferences that follow you everywhere.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>On your machine only</strong> — certain files are intentionally never committed to git. They contain your personal notes, your local environment details, and anything else that should not be imposed on teammates.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The diagram below shows exactly where each file lives and how the layers relate.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The Complete File Map</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre; line-height: 1.6;"><code>your-project/
│
├── CLAUDE.md                        ← Team project context (committed)
├── CLAUDE.local.md                  ← Your personal notes (gitignored)
│
└── .claude/
    ├── settings.json                ← Team tool permissions &amp; config (committed)
    ├── settings.local.json          ← Your personal settings (gitignored)
    │
    ├── rules/
    │   ├── code-style.md            ← Global rule, loads every session
    │   ├── testing.md               ← paths: tests/**/*.py
    │   ├── git.md                   ← Global rule, loads every session
    │   └── api/
    │       └── endpoints.md         ← paths: app/routers/**/*.py
    │
    ├── commands/
    │   ├── review.md                ← /review
    │   ├── test-gen.md              ← /test-gen
    │   ├── commit.md                ← /commit
    │   └── debug.md                 ← /debug
    │
    ├── agents/                      ← Specialized subagents
    │   └── code-reviewer.md
    │
    └── .mcp.json                    ← External tool integrations

~/.claude/                           ← Global (applies to ALL projects)
    ├── CLAUDE.md                    ← Personal preferences &amp; style
    ├── settings.json                ← Global model &amp; tool defaults
    ├── commands/                    ← Commands available in every project
    └── skills/                      ← Skills available in every project</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The six configuration files, explained plainly</strong>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">CLAUDE.md</code> — the project briefing</strong>
<p style="margin-bottom:1rem; line-height:1.75;">This is the most important file. It is a plain Markdown document that Claude reads automatically at the start of every session. Think of it as the briefing document you would write for a new developer joining the team — except Claude reads it every single time, so it never forgets.</p>

<p style="margin-bottom:1rem; line-height:1.75;">You put things in here that would cause mistakes if Claude didn't know them: your build commands, your architecture decisions, your naming conventions, which files are off-limits. Anything you find yourself explaining at the start of every conversation belongs here.</p>

<p style="margin-bottom:1rem; line-height:1.75;">It lives in your project root and is committed to git, so the whole team benefits. It is written in plain English — no special syntax required.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">CLAUDE.local.md</code> — your personal notes</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Same format as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>, but never committed to git. It sits alongside <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> in your project root and is invisible to your teammates.</p>

<p style="margin-bottom:1rem; line-height:1.75;">This is where you put things that are specific to your machine: your local server port, the path to your virtual environment, your sandbox API URL, whatever feature you are currently working on. Because it is gitignored by default, you can write freely without worrying about polluting the shared project context.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">settings.json</code> — the permission layer</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Where <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> tells Claude what to know, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> tells Claude what it is allowed to do. This JSON file controls which tools Claude can run without asking for your approval, which commands are blocked entirely, what environment variables to set at startup, and which AI model to use.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The most important section is <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">permissions</code>. You can allow certain commands to run silently (like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">pytest</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">git</code>) and explicitly deny others (like reading your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.env</code> file). This is the file that makes Claude safe to use on a real codebase.</p>

<p style="margin-bottom:1rem; line-height:1.75;">It is committed to git so your team shares the same baseline permissions.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">settings.local.json</code> — your personal permission overrides</strong>
<p style="margin-bottom:1rem; line-height:1.75;">The personal counterpart to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code>. Also gitignored. Use it for permission tweaks that only make sense on your machine — like allowing Claude to access a local docs directory that only you have, or bypassing permission prompts during a focused debugging session you're running solo.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">.claude/rules/*.md</code> — modular, scoped instructions</strong>
<p style="margin-bottom:1rem; line-height:1.75;">As your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> grows, you will want to break it into separate files — one for code style, one for testing conventions, one for API design rules. The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/</code> directory is where those go.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Each file is a plain Markdown document covering one topic. The real power is path scoping: you can add YAML frontmatter to a rules file so it only loads when Claude is working with certain files. Your API rules only appear when Claude touches your router files. Your test conventions only appear when Claude touches files in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">tests/</code>. This keeps Claude's context lean and focused.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);"><code style="color: var(--code-text);">.claude/commands/*.md</code> — slash command shortcuts</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Any prompt you type more than once a week probably belongs here. Create a Markdown file, write your prompt inside it, save it as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">review.md</code>, and from that point on you can type <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/review</code> to run it instantly.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">How it all loads together</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">When you start a Claude Code session in a project, this is the order in which everything loads:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>1. ~/.claude/CLAUDE.md          your global personal defaults
2. ~/.claude/settings.json      your global tool preferences
3. CLAUDE.md                    the team's project briefing
4. .claude/settings.json        the team's permission rules
5. .claude/rules/*.md           modular rule files (global ones)
6. CLAUDE.local.md              your personal project notes
7. .claude/settings.local.json  your personal permission overrides

   + path-scoped rules load on demand as Claude opens matching files
   + commands load on demand when you type /command-name</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Everything from steps 1–7 is in Claude's context before you type your first message. Commands and path-scoped rules join the context as needed during the session.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">How to get started in five minutes</strong>
<p style="margin-bottom:1rem; line-height:1.75;">You do not need to create any of this manually. Run this single command inside your project's claude terminal:</p>

<pre style="
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background: var(--syntax-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin: 0.25rem 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--syntax-text);
  white-space: pre;
  line-height: 1.2;
"><code>/init</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Claude will examine your codebase — reading your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">package.json</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">pyproject.toml</code>, scanning your directory structure, detecting your test framework — and generate a starter <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> that reflects what it finds. From there, you edit it like any other text file and build up the other pieces as you discover you need them.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;">A good order to build things up:</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>1</strong> — let <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> create your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>. Edit it to add anything it missed. Add your personal local notes to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>2</strong> — set up <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> with permissions. Allow the commands you use constantly (like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">pytest</code>). Deny access to your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.env</code> file.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>3</strong> — create your first custom command for whatever task you repeat most. Probably <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/commit</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/review</code>.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>When <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> grows past 150 lines</strong> — start moving sections into <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/*.md</code> files. Add <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths:</code> frontmatter to the ones that only apply to specific parts of your codebase.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The one thing to remember</strong>
<p style="margin-bottom:1rem; line-height:1.75;">All of these files are plain text. There is no special tooling, no build step, no compiler. A Markdown file is a Markdown file. A JSON file is a JSON file. You can open any of them in your editor right now and start writing.</p>

<p style="margin-bottom:1rem; line-height:1.75;">The sophistication is in how Claude reads them — not in how you write them. Write clearly, be specific, and Claude will follow what you write. That is the whole system.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<p style="margin-bottom:1rem; line-height:1.75;">Here's the full overview of how everything fits together.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>



<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">What Each File Does (One-Line Summary)</strong>
<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 640px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">File</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Controls</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Committed?</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Scope</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">CLAUDE.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">What Claude <em>knows</em> about the project</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">CLAUDE.local.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Your personal context, WIP notes, local URLs</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">❌ No</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/settings.json</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Permissions, tools, model, env vars</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/settings.local.json</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Your personal permission overrides</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">❌ No</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/rules/*.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Modular instructions, optionally path-scoped</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/commands/*.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Reusable <code style="color: var(--code-text);">/slash</code> command shortcuts</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/agents/*.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Specialized subagent definitions</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/.mcp.json</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">MCP server integrations (GitHub, Postgres…)</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">✅ Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project team</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">~/.claude/CLAUDE.md</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Personal style defaults for all projects</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">N/A</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">~/.claude/settings.json</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Global model &amp; tool preferences</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">N/A</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">~/.claude/commands/</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Personal commands in every project</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">N/A</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Just you</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">How They Layer Together</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Every Claude Code session loads files in this order — later layers have higher priority:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>1. Managed policy CLAUDE.md        (org-wide, if your team uses it)
2. ~/.claude/CLAUDE.md             (your global personal defaults)
3. ~/.claude/settings.json         (your global tool settings)
4. project CLAUDE.md               (team project context)
5. .claude/settings.json           (team permission rules)
6. .claude/rules/*.md              (modular team rules)
7. CLAUDE.local.md                 (your personal project notes)
8. .claude/settings.local.json     (your personal permission overrides)</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Slash commands and agents load on demand, not at startup.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The Mental Model: Three Layers of Ownership</strong>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>What the whole team shares</strong> (committed to git):<br><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> + <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> + <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/*.md</code> + <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/*.md</code></p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>What only you see</strong> (gitignored):<br><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> + <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.local.json</code></p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>What follows you across all projects</strong> (in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/</code>):<br>Your global <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code>, and personal <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/</code></p>

<p style="margin-bottom:1rem; line-height:1.75;">Think of it as: the team sets the rules, you add your personal layer on top, and your global defaults underpin everything.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The "What Goes Where" Decision Rule</strong>
<ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><strong>Does it affect the whole team?</strong> → <code style="color: var(--code-text);">CLAUDE.md</code> or <code style="color: var(--code-text);">rules/*.md</code></li>
  <li><strong>Is it a permission or tool setting?</strong> → <code style="color: var(--code-text);">settings.json</code></li>
  <li><strong>Is it your personal machine/local setup?</strong> → <code style="color: var(--code-text);">CLAUDE.local.md</code> or <code style="color: var(--code-text);">settings.local.json</code></li>
  <li><strong>Do you type it more than twice per week?</strong> → <code style="color: var(--code-text);">commands/*.md</code></li>
  <li><strong>Does it only matter for certain file types?</strong> → <code style="color: var(--code-text);">rules/*.md</code> with <code style="color: var(--code-text);">paths:</code> frontmatter</li>
  <li><strong>Do you want it in every project you work on?</strong> → <code style="color: var(--code-text);">~/.claude/</code> (global files)</li>
</ul>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">Next: CLAUDE.md <span>→</span></a>
</div>
`},{label:"CLAUDE.md",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What is <code style="color: var(--code-text);">CLAUDE.md</code>?</strong>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> is a plain markdown file that Claude Code reads at the start of every session. Whatever you put in it gets injected into the model's context automatically — no prompting required. Think of it as a standing brief: every time you open a session in a project, Claude already knows your preferred code style, how the project is structured, which commands to run, and any rules you've set for how it should behave.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Why is it needed?</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Claude starts every session with no memory of the last one. It doesn't know your code style preferences. It doesn't know how to run your tests. It doesn't know that your team uses a specific branch naming convention or that there's a quirky workaround in your authentication module. You end up repeating yourself. Or worse, you forget to mention something important and spend time fixing code that didn't follow your conventions. <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> fixes that — Claude reads it automatically, so your preferences persist across sessions.</p>

<p style="margin-bottom:1rem; line-height:1.75;">In short: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> controls <strong>how Claude behaves</strong> (permissions, tools, env). <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> controls <strong>what Claude knows</strong> (your project, your rules, your context).</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 1 — The File Hierarchy (Where to Put It)</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">There are two levels:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">~/.claude/CLAUDE.md</code> — your personal <strong>global preferences</strong>, applied to every project</li>
  <li><code style="color: var(--code-text);">&lt;project-root&gt;/CLAUDE.md</code> — <strong>project-specific</strong> context, committed to the repo and shared with your team</li>
</ul>

<p style="margin-bottom:1rem; line-height:1.75;">Keeping these separate means you maintain your global file once and update project files as those projects evolve. Team members who open the same repository get the same project context automatically.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Rule of thumb:</strong> Put personal preferences (your coding style, communication preferences) in the global file. Put everything project-specific in the project file.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 2 — How to Generate Your First One</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">The fastest way to get started is the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> command. Run it inside your project:</p>

<pre style="
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background: var(--syntax-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin: 0.25rem 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--syntax-text);
  white-space: pre;
  line-height: 1.2;
"><code>cd your-project-folder</code></pre>

<pre style="
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background: var(--syntax-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin: 0.25rem 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--syntax-text);
  white-space: pre;
  line-height: 1.2;
"><code>claude</code></pre>

<pre style="
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background: var(--syntax-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin: 0.25rem 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--syntax-text);
  white-space: pre;
  line-height: 1.2;
"><code>/init</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Claude examines your codebase — reading package files, existing documentation, configuration files, and code structure — then generates a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> tailored to your project. The generated file typically includes build commands, test instructions, key directories, and coding conventions it detected. Think of <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> as a starting point, not a finished product. The generated <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> captures obvious patterns but may miss nuances specific to your workflow. Review what Claude produces and refine it based on your team's actual practices.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 3 — What Goes Inside</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Write instructions that would cause mistakes if missing. Everything else is noise.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>Include:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Build, test, and lint commands (exact invocations, not just tool names)</li>
  <li>Architecture decisions that affect how code should be written or organized</li>
  <li>Coding conventions specific to your project (naming patterns, file structure rules)</li>
  <li>Environment setup requirements (required env vars, expected services)</li>
  <li>Common pitfalls or patterns Claude should know to avoid</li>
  <li>Monorepo structure and which packages own which responsibilities</li>
</ul>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>Omit:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Things Claude already knows (standard Python syntax, common library APIs)</li>
  <li>Obvious reminders like "write clean code" or "add comments"</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 4 — A Complete Example for a Python Project</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Here's what a well-structured <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> looks like for a Python backend project:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Project: My FastAPI Service

This is a Python FastAPI service for managing customer invoices.
Uses PostgreSQL for storage and Redis for caching.

## Common Commands

### Run the app
uvicorn app.main:app --reload

### Run tests
pytest tests/ -v
pytest tests/test_api.py::test_specific_case -v   # single test

### Lint &amp; format
ruff check . --fix
black .

### Type check
mypy app/

### Database migrations
alembic upgrade head
alembic revision --autogenerate -m "description"

## Architecture

- \`app/\` — main application code
- \`app/routers/\` — FastAPI route handlers (one file per domain)
- \`app/services/\` — business logic; never access DB directly
- \`app/models/\` — SQLAlchemy ORM models
- \`app/schemas/\` — Pydantic schemas for request/response validation
- \`tests/\` — pytest tests mirroring the app/ structure

Routers call services. Services call models. Never skip layers.

## Coding Conventions

- Use type hints on all functions
- Pydantic v2 style (model_config, not class Config)
- Prefer named exceptions over generic Exception
- All services must be async
- Use \`snake_case\` for variables/functions, \`PascalCase\` for classes

## Important Rules

- NEVER modify files under \`alembic/versions/\` directly
- Always run \`mypy app/\` before considering a change complete
- Do not add third-party libraries without asking first
- \`.env\` file is gitignored — never commit secrets

## Current Focus

Working on the invoice PDF export feature in \`app/services/export.py\`.</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 5 — The <code style="color: var(--code-text);">@include</code> Feature (Advanced)</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Memory files can include other files using <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">@</code> notation. Included files are processed recursively and inserted before the file that references them:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre; line-height: 1.6;"><code># CLAUDE.md
@./docs/architecture.md
@~/shared/style-guide.md</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">This is great for Python projects — you can keep your architecture docs in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">docs/</code> and just reference them rather than copying content into <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Tips &amp; Tricks</strong>
<ol style="margin: 0 0 1rem 1.4rem; color: var(--text-secondary); line-height: 1.85;">
  <li><strong>Be specific, not vague</strong> — "Functions should be under 40 lines; if longer, extract helper functions" is something Claude can act on. "Write good code" does nothing.</li>
  <li><strong>Keep it short</strong> — The file counts toward Claude's context window, so length matters. A bloated <code style="color: var(--code-text);">CLAUDE.md</code> that runs thousands of tokens long will eat into the space available for actual conversation, code review, and reasoning. The goal is signal density: every line should earn its place. Aim for under 500 words.</li>
  <li><strong>Use emphasis for critical rules</strong> — For rules that absolutely must be followed, phrases like "IMPORTANT: Never modify the migrations folder directly" or "YOU MUST run tests before committing" can help draw attention. Use it sparingly — if everything is marked IMPORTANT, nothing is.</li>
  <li><strong>Add a "Current Focus" section</strong> — Add a "Current Focus" section and update it regularly to steer Claude toward what's relevant right now. This is particularly useful when working on a long feature over multiple sessions.</li>
  <li><strong>Document domain-specific terms</strong> — Claude Code excels at understanding general programming principles, but it might lack context for your business domain. Project-specific jargon, obscure entity names, and acronyms can confuse the agent. Documenting domain-specific terms helps AI agents navigate the codebase and edit the correct files.</li>
  <li><strong>Never put secrets in <code style="color: var(--code-text);">CLAUDE.md</code></strong> — Don't include sensitive information, API keys, credentials, or database connection strings — especially if you commit to version control. Since <code style="color: var(--code-text);">CLAUDE.md</code> becomes part of Claude's system prompt, treat it as documentation that could be shared publicly.</li>
  <li><strong>Evolve it as you work</strong> — The most valuable updates often come from code reviews. When a PR reveals a convention that wasn't documented, or a reviewer catches a pattern violation, that's a signal to update <code style="color: var(--code-text);">CLAUDE.md</code>.</li>
  <li><strong>Don't duplicate your README</strong> — If something is already in your README or a <code style="color: var(--code-text);">/docs</code> folder, don't copy it into <code style="color: var(--code-text);">CLAUDE.md</code>. Either reference the file or trust that Claude can read it when needed.</li>
</ol>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Quick Comparison: <code style="color: var(--code-text);">CLAUDE.md</code> vs <code style="color: var(--code-text);">settings.json</code></strong>
<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 520px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">CLAUDE.md</code></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">settings.json</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Format</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Markdown (human-readable)</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">JSON</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Purpose</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">What Claude <em>knows</em></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">How Claude <em>behaves</em></td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Controls</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project context, conventions, commands</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Permissions, tools, env vars, model</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Audience</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Claude + your teammates</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Claude Code runtime</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Commit to repo?</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project version yes, local version no</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:0; line-height:1.75;">The two files work together — <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> tells Claude about <em>your world</em>, and <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> tells Claude Code what it's <em>allowed to do</em>.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous"><span>←</span> Previous: Overview</a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">Next: settings.json <span>→</span></a>
</div>
`},{label:"settings.json",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What is <code style="color: var(--code-text);">settings.json</code>?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">While <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> handles instructions and context, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> gives you <em>programmatic control</em> over Claude's behavior — managing permissions, environment variables, and advanced features that go beyond simple instructions.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;">Think of it like this:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">CLAUDE.md</code> → <em>what</em> you tell Claude to do (instructions in plain English)</li>
  <li><code style="color: var(--code-text);">settings.json</code> → <em>how</em> Claude is allowed to behave (rules, tools, environment)</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Why is it needed?</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Every time you start a new Claude Code session, you're essentially starting from scratch. Without global instructions, you'll find yourself repeatedly explaining your coding standards or re-establishing project context. Global settings solve this by creating persistent configuration that applies across all sessions.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 1 — The Three Files (Configuration Hierarchy)</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Claude Code reads settings from three JSON files at different scopes:</p>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">~/.claude/settings.json</code> — <strong>global</strong>, your personal baseline for all projects</li>
  <li><code style="color: var(--code-text);">&lt;project-root&gt;/.claude/settings.json</code> — <strong>project</strong>, team-shared settings (commit to repo)</li>
  <li><code style="color: var(--code-text);">&lt;project-root&gt;/.claude/settings.local.json</code> — <strong>local</strong>, personal overrides (add to <code style="color: var(--code-text);">.gitignore</code>)</li>
</ul>

<p style="margin-bottom:1rem; line-height:1.75;">Values merge with local taking priority — local overrides project, project overrides global.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>Rule of thumb for beginners:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Start with <code style="color: var(--code-text);">~/.claude/settings.json</code> for your personal defaults</li>
  <li>Use <code style="color: var(--code-text);">.claude/settings.json</code> in each project for team-shared rules</li>
  <li>Use <code style="color: var(--code-text);">.claude/settings.local.json</code> for secrets and personal tweaks you don't want committed</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 2 — The Most Important Setting: Permissions</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Permissions control which tools and commands Claude Code can execute — this is arguably the most important setting for both productivity and security.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test *)",
      "Read(~/.zshrc)"
    ],
    "deny": [
      "Bash(curl *)",
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  }
}</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Commands in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">allow</code> run without confirmation prompts, while those in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">deny</code> are completely blocked. You can use wildcards (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">*</code>) for pattern matching.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;">For a Python project, you'd typically allow:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "permissions": {
    "allow": [
      "Bash(python *)",
      "Bash(pytest *)",
      "Bash(pip install *)",
      "Bash(git *)",
      "Read(**)",
      "Write(**)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  }
}</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 3 — Model Selection</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Control which AI model Claude Code uses and how deeply it reasons:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "model": "claude-sonnet-4-6",
  "effortLevel": "high",
  "alwaysThinkingEnabled": true
}</code></pre>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">effortLevel</code>: <code style="color: var(--code-text);">low</code> (quick responses), <code style="color: var(--code-text);">medium</code> (standard), or <code style="color: var(--code-text);">high</code> (deep reasoning)</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 4 — Environment Variables</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Any environment variable can be configured in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> under the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">env</code> key to apply it to every session or roll it out to your team.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "env": {
    "PYTHONPATH": "/your/project/src",
    "ENVIRONMENT": "development",
    "LOG_LEVEL": "DEBUG"
  }
}</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">This is great for Python projects — you won't need to export <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">PYTHONPATH</code> manually every time.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 5 — MCP Servers (Extend Claude with Tools)</strong>
<p style="margin-bottom:1rem; line-height:1.75;">MCP servers extend Claude Code with external tools. Configure them in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> to auto-start when Claude launches:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/me/docs"]
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/mydb"
      }
    }
  }
}</code></pre>
<p style="margin-bottom:1rem; line-height:1.75;">Servers start automatically when Claude Code launches and stop when it exits.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 6 — Attribution &amp; Git Settings</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Control how Claude Code attributes its contributions to commits and pull requests:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "attribution": {
    "commits": true,
    "pullRequests": true
  }
}</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">A Complete Starter Config for a Python Developer</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Here's a practical <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/settings.json</code> to get you started:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "model": "claude-sonnet-4-6",
  "effortLevel": "medium",
  "permissions": {
    "allow": [
      "Bash(python *)",
      "Bash(pytest *)",
      "Bash(pip *)",
      "Bash(git *)",
      "Bash(ruff *)",
      "Bash(black *)",
      "Read(**)",
      "Write(**)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  },
  "env": {
    "PYTHONPATH": "./src",
    "LOG_LEVEL": "DEBUG"
  },
  "attribution": {
    "commits": true,
    "pullRequests": false
  }
}</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Tips &amp; Tricks</strong>
<ol style="margin: 0 0 1rem 1.4rem; color: var(--text-secondary); line-height: 1.85;">
  <li><strong>Don't commit secrets</strong> — always put API keys in <code style="color: var(--code-text);">.claude/settings.local.json</code> and add it to <code style="color: var(--code-text);">.gitignore</code></li>
  <li><strong>Use wildcards smartly</strong> — <code style="color: var(--code-text);">Bash(pytest *)</code> lets Claude run any pytest variant without prompting you every time</li>
  <li><strong>Deny your <code style="color: var(--code-text);">.env</code> files</strong> — always deny access to <code style="color: var(--code-text);">.env</code> files and any directories containing secrets or credentials as a security best practice</li>
  <li><strong>Check your merged config</strong> — use <code style="color: var(--code-text);">/status</code> inside Claude Code to see each configuration layer (managed, user, project) along with its origin. If a settings file contains errors, <code style="color: var(--code-text);">/status</code> reports the issue so you can fix it.</li>
  <li><strong>Arrays replace, objects merge</strong> — settings merge with a last-writer-wins strategy at the field level: arrays are replaced (not appended), objects are deep-merged. So if your project <code style="color: var(--code-text);">settings.json</code> has a <code style="color: var(--code-text);">permissions.allow</code> array, it replaces — not adds to — your global one.</li>
  <li><strong>Restart after changes</strong> — if you manually modify <code style="color: var(--code-text);">settings.json</code> and changes don't take effect, close all Claude Code windows, open a new terminal window, and run <code style="color: var(--code-text);">claude</code> again.</li>
</ol>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<p style="margin-bottom:0; line-height:1.75;">The most impactful thing you can do as a beginner is set up your <strong>permissions</strong> correctly and define your <strong>env variables</strong> — those two alone will save you a lot of repetitive prompting during Python development.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous"><span>←</span> Previous: CLAUDE.md</a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">Next: commands/*.md <span>→</span></a>
</div>
`},{label:"commands/*.md",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What Are Custom Commands?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Custom commands are your own reusable shortcuts — stored as Markdown files — that you can trigger instantly by typing <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/command-name</code> in Claude Code. Instead of typing out a long, repetitive prompt every session, you write it once in a file and call it with a single slash.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Think of them as custom spells for your most common development tasks.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">⚠️ Important: Commands → Skills (The Modern Way)</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Before diving in, here's something every beginner needs to know upfront:</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Custom commands have been merged into skills.</strong> A file at <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/deploy.md</code> and a skill at <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/skills/deploy/SKILL.md</code> both create <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/deploy</code> and work the same way. Your existing <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/</code> files keep working. Skills add optional features: a directory for supporting files, frontmatter to control whether you or Claude invokes them, and the ability for Claude to load them automatically when relevant.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>What this means for you as a beginner:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">.claude/commands/*.md</code> still works perfectly — use it, it's simpler</li>
  <li><code style="color: var(--code-text);">.claude/skills/&lt;name&gt;/SKILL.md</code> is the modern approach with more features</li>
  <li>This guide covers both, starting with the simpler commands format</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 1 — Where Commands Live (The Two Locations)</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Project commands are stored in a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/</code> directory right inside your project's repository. The great thing about this is that they get checked into version control, so anyone who clones the repo gets the same set of standard commands.</p>

<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 420px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Location</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Path</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Scope</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Personal</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">~/.claude/commands/</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">All your projects</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Project</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">.claude/commands/</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">This project only (commit to repo)</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 2 — How to Create Your First Command</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">It's just three steps:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># 1. Create the commands directory
mkdir -p .claude/commands

# 2. Create a markdown file — the filename IS the command name
touch .claude/commands/review.md

# 3. Write your prompt inside it (plain English)</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">The filename becomes the slash command name — <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commit.md</code> becomes <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/commit</code>.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Then inside Claude Code, just type <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/review</code> and it runs.</p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 3 — Anatomy of a Command File</strong>
<p style="margin-bottom:1rem; line-height:1.75;">A command file has two parts: optional <strong>frontmatter</strong> (metadata) and the <strong>prompt body</strong>.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Simplest possible command (no frontmatter)</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>Review this Python file for:
1. PEP 8 style violations
2. Missing type hints
3. Functions over 20 lines
4. Bare \`except:\` clauses
5. Any obvious logic errors

Be concise. List issues with line numbers.</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Save as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/review.md</code> → use as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/review</code></p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Command with frontmatter</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Review Python code for style, types, and quality issues
allowed-tools: Read, Grep
argument-hint: [filename or leave blank for current file]
---

Review $ARGUMENTS for:
1. PEP 8 style violations  
2. Missing type hints
3. Functions over 20 lines
4. Bare \`except:\` clauses
5. Any obvious logic errors

Be concise. List issues with line numbers.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Frontmatter fields explained</strong>
<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 480px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Field</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Purpose</th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">description</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Shown in autocomplete when you type <code style="color: var(--code-text);">/</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">"Run full test suite"</code></td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">allowed-tools</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Tools Claude can use without asking</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">Read, Bash, Grep</code></td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">argument-hint</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Hint shown after the command name</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">[filename]</code></td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">model</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Override the model for this command</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><code style="color: var(--code-text);">claude-opus-4-6</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 4 — Using <code style="color: var(--code-text);">$ARGUMENTS</code></strong>
<p style="margin-bottom:1rem; line-height:1.75;">You can use the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">$ARGUMENTS</code> string to place user-supplied arguments into the prompt.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Run a specific pytest test by name
allowed-tools: Bash(pytest *)
argument-hint: [test name or file path]
---

Run the following test and show me the full output including any tracebacks:

pytest $ARGUMENTS -v -s</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Usage: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/run-test tests/test_api.py::test_login</code></p>

<p style="margin-bottom:0.75rem; line-height:1.75;">You can also use multiple positional arguments with <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">$1</code>, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">$2</code>:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
argument-hint: [source_file] [target_module]
description: Move a Python function to another module
---

Move the function or class from $1 into $2.
Update all imports across the codebase.
Run mypy after to confirm no type errors were introduced.</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 5 — Running Bash Commands Inside a Command File</strong>
<p style="margin-bottom:1rem; line-height:1.75;">You can embed shell commands that get executed when the command runs using backtick syntax with <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">!</code>:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Smart git commit with conventional message
allowed-tools: Bash(git *)
---

Here is the current diff:

&lt;diff&gt;
!\`git diff --cached\`
&lt;/diff&gt;

Write a conventional commit message (feat/fix/chore/docs/refactor/test)
following this format:
  type(scope): short description

Then run \`git commit -m "&lt;your message&gt;"\`.</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Save as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/commit.md</code> → use as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/commit</code></p>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 6 — Practical Python Examples</strong>
<p style="margin-bottom:1rem; line-height:1.75;">Here are ready-to-use commands for Python development. Create these in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/</code>:</p>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="color: var(--code-text);">review.md</code></strong> — Code review</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Review Python file for quality, style, and correctness
allowed-tools: Read, Grep
argument-hint: [filename]
---

Review $ARGUMENTS (or the current file if no argument given).

Check for:
- Missing type hints on functions/methods
- Bare \`except:\` without exception type
- Functions longer than 30 lines (suggest splitting)
- Unused imports
- Hardcoded values that should be constants or env vars
- Missing docstrings on public functions
- PEP 8 violations

Format output as a bulleted list with line numbers.</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="color: var(--code-text);">test-gen.md</code></strong> — Generate tests</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Generate pytest tests for a Python file or function
allowed-tools: Read, Write, Bash(pytest *)
argument-hint: [filename or function name]
---

Generate comprehensive pytest tests for: $ARGUMENTS

Requirements:
- Use pytest fixtures where appropriate
- Cover happy path, edge cases, and error cases
- Use \`pytest.mark.parametrize\` for multiple input scenarios
- Mock external dependencies with \`unittest.mock\`
- Follow the existing test structure in tests/
- Run the generated tests and fix any failures</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="color: var(--code-text);">docstring.md</code></strong> — Add docstrings</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Add Google-style docstrings to all undocumented functions
allowed-tools: Read, Write, Grep
argument-hint: [file or directory]
---

Add Google-style docstrings to all public functions and classes
in $ARGUMENTS that are missing them.

Format:
"""Summary line.

Args:
    param_name (type): Description.

Returns:
    type: Description.

Raises:
    ExceptionType: When this happens.
"""

Do not modify existing docstrings. Only add where missing.</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="color: var(--code-text);">debug.md</code></strong> — Debug an error</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
description: Debug an error by tracing it through the codebase
allowed-tools: Read, Grep, Bash(python *), Bash(pytest *)
argument-hint: [paste error message or describe the bug]
---

Debug this issue: $ARGUMENTS

Steps:
1. Identify the root cause by tracing the error through relevant files
2. Explain what is going wrong and why
3. Propose a fix
4. Implement the fix
5. Run the relevant test to confirm it is resolved</code></pre>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 7 — Personal Global Commands</strong>
<p style="margin-bottom:1rem; line-height:1.75;">For commands you want in <strong>every</strong> project, put them in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/commands/</code>:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>mkdir -p ~/.claude/commands</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">Good candidates for your global commands:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><code style="color: var(--code-text);">/standup</code> — summarize what changed in git today</li>
  <li><code style="color: var(--code-text);">/explain</code> — explain any code with an analogy</li>
  <li><code style="color: var(--code-text);">/refactor</code> — general refactoring prompt</li>
  <li><code style="color: var(--code-text);">/commit</code> — smart commit message generator</li>
</ul>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Tips &amp; Tricks</strong>
<ol style="margin: 0 0 1rem 1.4rem; color: var(--text-secondary); line-height: 1.85;">
  <li><strong>Tab autocomplete works</strong> — Slash commands appear in autocomplete when you type <code style="color: var(--code-text);">/</code>. The <code style="color: var(--code-text);">description</code> frontmatter is what shows up there, so write it clearly.</li>
  <li><strong>Chain commands into shell aliases</strong> — You can skip the interactive prompt entirely with <code style="color: var(--code-text);">claude -p</code>. Add aliases to your <code style="color: var(--code-text);">.zshrc</code> or <code style="color: var(--code-text);">.bashrc</code>:</li>
</ol>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>alias clint="claude -p '/lint'"
alias ccommit="claude -p '/commit'"</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Now <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">ccommit</code> runs your commit command without opening the interactive session.</p>

<ol start="3" style="margin: 0 0 1rem 1.4rem; color: var(--text-secondary); line-height: 1.85;">
  <li><strong>Use <code style="color: var(--code-text);">!</code> to inject live shell output</strong> — Embedding <code style="color: var(--code-text);">!</code>backtick<code style="color: var(--code-text);">command</code>backtick<code style="color: var(--code-text);"></code> inside your prompt runs a shell command and injects its output into the context before Claude sees the prompt. Great for injecting <code style="color: var(--code-text);">git diff</code>, <code style="color: var(--code-text);">pytest</code> output, or environment info.</li>
  <li><strong>Keep command files focused</strong> — One command, one job. If a command does three unrelated things, split it into three files.</li>
  <li><strong>Check available commands anytime</strong> — The <code style="color: var(--code-text);">/help</code> command shows all available slash commands, including your custom commands from <code style="color: var(--code-text);">.claude/commands/</code> and <code style="color: var(--code-text);">~/.claude/commands/</code> directories.</li>
  <li><strong>Evolve commands from real friction</strong> — The best commands come from noticing what you type repeatedly. When you write the same long prompt three times in a week, that's a command waiting to be made.</li>
</ol>

<div style="height:1px; background: var(--border-color); margin: 1.25rem 0;"></div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Quick Comparison: Commands vs CLAUDE.md vs settings.json</strong>
<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse: collapse; min-width: 560px; border: 1px solid var(--border-color);">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">commands/*.md</code></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">CLAUDE.md</code></th>
        <th style="padding: 0.75rem; border: 1px solid var(--border-color); text-align:left;"><code style="color: var(--code-text);">settings.json</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>What it is</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Reusable prompt shortcuts</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Persistent project context</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Runtime configuration</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>You trigger it</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Manually with <code style="color: var(--code-text);">/name</code></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Automatic every session</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Automatic always</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Best for</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Repetitive multi-step tasks</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Conventions, architecture</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Permissions, tools, env</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Format</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Markdown + optional frontmatter</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Plain markdown</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">JSON</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);"><strong>Commit to repo?</strong></td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Yes (project commands)</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Yes</td>
        <td style="padding: 0.75rem; border: 1px solid var(--border-color);">Project yes, local no</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:0; line-height:1.75;">The three files work as a team: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> controls what Claude <em>can</em> do, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> tells Claude what it <em>should know</em>, and <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/*.md</code> gives you instant <em>shortcuts</em> for your most common workflows.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous"><span>←</span> Previous: settings.json</a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">Next: rules/*.md <span>→</span></a>
</div>
`},{label:"rules/*.md",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What Is <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code>?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> directory is a modular alternative to monolithic <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> files. Instead of cramming everything into one file, you organize instructions into multiple markdown files that Claude loads as project memory. Every <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.md</code> file in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> automatically becomes part of your project context — no configuration needed.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Think of it as the evolution of <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>. Once your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> grows too long, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> is how you split it up intelligently.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Why Is It Needed?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The problem: your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> file has grown unwieldy. React patterns mixed with API guidelines mixed with testing rules. Everything loads every session, even when you're only working on database migrations.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Claude's context window isn't flat. Different sources of information receive different priority levels. When everything is marked important, Claude struggles to determine what's actually relevant to the current task. The result: instructions get ignored, context becomes noisy, and Claude's behavior becomes unpredictable. <strong>High priority everywhere = priority nowhere.</strong></p>

<p style="margin-bottom:1rem; line-height:1.75;">Rules files solve this by letting you scope instructions to only the files where they're relevant.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">How It Compares to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code></strong>

<p style="margin-bottom:1rem; line-height:1.75;">Rules without <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths</code> frontmatter are loaded at launch with the same priority as <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/CLAUDE.md</code>. Rules can be scoped to specific files using YAML frontmatter with the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths</code> field. These conditional rules only apply when Claude is working with files matching the specified patterns.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Rules load into context every session or when matching files are opened. For task-specific instructions that don't need to be in context all the time, use skills instead, which only load when you invoke them or when Claude determines they're relevant to your prompt.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />


<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 1 — Set Up the Directory</strong>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); line-height: 1.6;"><code>mkdir -p .claude/rules</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">That's it. Every <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.md</code> file you put there is automatically picked up by Claude Code.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Place markdown files in your project's <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> directory. Each file should cover one topic, with a descriptive filename like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">testing.md</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">api-design.md</code>. All <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.md</code> files are discovered recursively, so you can organize rules into subdirectories like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">frontend/</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">backend/</code>.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">A well-organized Python project might look like this:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); line-height: 1.6;"><code>your-project/
├── CLAUDE.md                    ← short, always-true project overview
└── .claude/
    └── rules/
        ├── code-style.md        ← Python style and formatting rules
        ├── testing.md           ← pytest conventions
        ├── security.md          ← security checklist
        ├── git.md               ← commit and branch conventions
        └── api/
            └── endpoints.md     ← FastAPI-specific rules</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 2 — Global Rules (No Frontmatter)</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The simplest kind — a plain markdown file with no YAML header. It loads every session for every file, just like <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code>.</p>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/code-style.md</code></strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Python Code Style

- Use type hints on all function signatures
- Max function length: 30 lines. Longer = extract a helper.
- Prefer named exceptions over bare \`except:\`
- Use \`snake_case\` for functions/variables, \`PascalCase\` for classes
- All public functions and classes must have Google-style docstrings
- Use \`black\` for formatting, \`ruff\` for linting
- No \`print()\` in production code — use \`logging\`</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/git.md</code></strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Git Conventions

- Branch names: \`feat/\`, \`fix/\`, \`chore/\`, \`docs/\` prefixes
- Commit format: \`type(scope): short description\` (Conventional Commits)
- Never commit directly to \`main\` — always use a branch
- Run \`pytest\` and \`mypy\` before committing
- NEVER modify files under \`alembic/versions/\` directly</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 3 — Path-Scoped Rules (The Superpower)</strong>

<p style="margin-bottom:1rem; line-height:1.75;">This is where <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> becomes genuinely powerful. Add a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths:</code> field in YAML frontmatter and the rule only loads when Claude is working on matching files.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Rules without frontmatter apply unconditionally.</p>

<p style="margin-bottom:1rem; line-height:1.75;">For Python, you could create <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/testing.md</code> that only applies when Claude is editing files in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">tests/</code>, keeping your testing rules separate from your general rules.</p>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/testing.md</code></strong> — only applies when editing test files:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
paths:
  - "tests/**/*.py"
  - "test_*.py"
  - "*_test.py"
---

# pytest Conventions

- Use fixtures for anything used in more than one test
- Use \`pytest.mark.parametrize\` for multiple input scenarios
- Mock all external services with \`unittest.mock\` or \`pytest-mock\`
- Every test must have a docstring explaining what it verifies
- Test filenames mirror the source file: \`app/services/auth.py\` → \`tests/services/test_auth.py\`
- Never use real DB connections in unit tests — use SQLite in-memory or mocks</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/migrations.md</code></strong> — only applies when working with Alembic:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
paths:
  - "alembic/**/*.py"
  - "alembic/versions/**"
---

# Alembic Migration Rules

- NEVER modify existing migration files — always create a new one
- Always include both \`upgrade()\` and \`downgrade()\` functions
- Run \`alembic check\` after generating to verify consistency
- Migration filenames must be descriptive: use \`--message\` flag
- Always test the downgrade path before merging</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 4 — Using Glob Patterns Correctly</strong>

<p style="margin-bottom:1rem; line-height:1.75;">A common mistake: unquoted glob patterns starting with <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">*</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">{</code> are reserved indicators in YAML and will silently fail. Always quote your patterns.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># ❌ WRONG — unquoted patterns will silently fail
---
paths:
  - **/*.py
  - {src,lib}/**
---

# ✅ CORRECT — always quote glob patterns
---
paths:
  - "**/*.py"
  - "{src,lib}/**"
---</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Common patterns and what they match:</p>

<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse:collapse; font-size:0.82rem;">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;">Pattern</th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;">Matches</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">"src/api/**/*.py"</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All Python files in src/api and subdirectories</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">"*.test.py"</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All test files in any directory</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">"src/models/*.py"</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Only direct children of models (not nested)</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">"**/*.css"</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All CSS files anywhere in the project</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:1rem; line-height:1.75;">You can specify multiple patterns and use brace expansion to match multiple extensions in one pattern:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
paths:
  - "src/**/*.{ts,tsx}"
  - "lib/**/*.ts"
  - "tests/**/*.test.ts"
---</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 5 — Know the Current Limitation</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Path-scoped rules defined in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> with a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths:</code> frontmatter are only injected into context when Claude <strong>reads</strong> a file matching the pattern. They are not injected when Claude <strong>writes or creates</strong> a file matching the same pattern. This means rules targeting file creation conventions are silently ignored when a new file is created, because Claude never sees the rule at the time of writing.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Workaround for new file creation:</strong> As a practical fix, put your most critical "file creation" rules (e.g., required headers, boilerplate structure) into a global rule file without <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">paths:</code> frontmatter, so they're always in context regardless of whether Claude is reading or writing.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 6 — Sharing Rules Across Projects</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> directory supports symlinks, allowing you to maintain a single source of rules shared across multiple projects:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Symlink a shared rules directory
ln -s ~/shared-claude-rules .claude/rules/shared

# Symlink individual rule files
ln -s ~/company-standards/security.md .claude/rules/security.md</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Symlinks are resolved and their contents load normally. Circular symlinks are detected and handled gracefully.</p>

<p style="margin-bottom:1rem; line-height:1.75;">This is great for teams — maintain one canonical rules repository and symlink it into each project.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">A Complete Python Project Setup</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">Here's a full rules structure for a FastAPI + pytest Python project:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); line-height: 1.6;"><code>.claude/
└── rules/
    ├── code-style.md        ← global (no paths), loads always
    ├── git.md               ← global, loads always
    ├── security.md          ← global, loads always
    ├── testing.md           ← paths: tests/**/*.py
    ├── api/
    │   └── endpoints.md     ← paths: app/routers/**/*.py
    └── db/
        └── migrations.md    ← paths: alembic/**/*.py</code></pre>

<p style="margin-bottom:0.25rem; line-height:1.75;"><strong><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/security.md</code></strong> (global — always loaded):</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Security Rules

- Never log passwords, tokens, or PII
- Always validate and sanitize user inputs before DB operations
- Use parameterized queries — never f-string SQL
- Secrets must come from environment variables, never hardcoded
- NEVER commit \`.env\` files or API keys
- Rate-limit all public endpoints</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Tips &amp; Tricks</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>1. Verify what's actually loaded</strong> — Run <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/memory</code> inside Claude Code to see which rules files are currently in context. This is your debugging tool when rules don't seem to be applying.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>2. Keep each rule file under 50 lines</strong> — Target under 200 lines per <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> file. Longer files consume more context and reduce adherence. If your instructions are growing large, split them using <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code> files. Apply the same discipline to each rules file.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>3. One topic per file</strong> — name files after what they govern: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">testing.md</code>, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">security.md</code>, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">api-design.md</code>. Never mix concerns in one rules file.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>4. Path-scoped rules are loaded on Read</strong> — because of the current limitation with Write, don't rely on path-scoped rules alone to enforce new-file conventions. Back them up with a global rule for the most critical requirements.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>5. Don't duplicate your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code></strong> — Use <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> for what applies everywhere: routing logic, quality standards, coordination protocols. Keep it lean — everything here competes for high-priority attention. Use rules for what applies to specific areas: API patterns for API files, test requirements for test files.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Full Comparison: All Four Config Files</strong>

<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse:collapse; font-size:0.82rem;">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">settings.json</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">CLAUDE.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">commands/*.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">rules/*.md</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Controls</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Permissions, tools, env</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Project context &amp; conventions</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Reusable prompt shortcuts</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Modular, scoped instructions</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Loaded</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Always (runtime)</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">On-demand (you type <code style="color:var(--code-text);">/cmd</code>)</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session or on file match</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Path-scoped?</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">No</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">No</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">No</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">✅ Yes</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Best for</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Security &amp; tool access</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Short always-true project facts</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Repetitive multi-step tasks</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Growing rule sets per domain</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Commit to repo?</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Project yes, local no</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Yes</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:1rem; line-height:1.75;">The four files work as a layered system: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> is the enforcement layer, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> is the project briefing, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/</code> are your workflow shortcuts, and <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/</code> is your scalable, organized instruction library.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous"><span>←</span> Previous: commands/*.md</a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">Next: CLAUDE.local.md <span>→</span></a>
</div>
`},{label:"CLAUDE.local.md",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What Is <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>?</strong>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is your <strong>personal, private instruction file</strong> for a specific project. It lives alongside <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> in your project root but is never committed to version control — it exists only on your machine, for your eyes only.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Local instructions</strong> live at <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">./CLAUDE.local.md</code> — personal project-specific preferences you add to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code>. Typical use cases: your sandbox URLs, preferred test data, personal notes about the codebase.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Think of it this way:</p>
<ul style="margin:0 0 1rem 1.5rem; color:var(--text-secondary); line-height:1.8;">
  <li><code style="color:var(--code-text);">CLAUDE.md</code> is the <strong>team contract</strong> — shared with everyone via git</li>
  <li><code style="color:var(--code-text);">CLAUDE.local.md</code> is your <strong>personal sticky note</strong> on that contract — visible only to you</li>
</ul>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Why Is It Needed?</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Every developer on a team has slightly different local setups. You might be running a local database on a different port than your colleague, using a different Python virtual environment path, pointing at a sandbox API instead of staging, or have personal debugging habits you don't want to impose on the whole team.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is gitignored by default, meaning changes to it stay local to your machine and never affect what teammates see.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Without <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>, you'd have two bad options: either clutter the shared <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> with your personal quirks, or repeat your personal context to Claude at the start of every session. <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is the clean solution for both.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 1 — Create the File and Gitignore It</strong>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># In your project root
touch CLAUDE.local.md</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Then make sure it's gitignored. Claude Code gitignores it by default, but verify by checking your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code>:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Confirm it's excluded from git
echo "CLAUDE.local.md" &gt;&gt; .gitignore</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">You can verify it's not being tracked:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>git status  # CLAUDE.local.md should NOT appear here</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 2 — The Loading Order (How It Fits In)</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">The full loading order, from lowest to highest priority, is:</p>
<ul style="margin:0 0 1rem 1.5rem; color:var(--text-secondary); line-height:1.8;">
  <li><code style="color:var(--code-text);">CLAUDE.md</code>, <code style="color:var(--code-text);">.claude/CLAUDE.md</code>, and <code style="color:var(--code-text);">.claude/rules/*.md</code> in each directory from the filesystem root down to your current directory — files closer to your CWD are higher priority</li>
  <li><code style="color:var(--code-text);">CLAUDE.local.md</code> in each directory from root to CWD — same traversal order, but gitignored by default</li>
</ul>

<p style="margin-bottom:1rem; line-height:1.75;">All of these load together at session start. <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> doesn't <em>override</em> <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> — both are in context simultaneously. If they conflict, Claude uses the more specific instruction.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">The full picture:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>Loaded every session (lowest → highest priority):
  1. ~/.claude/CLAUDE.md         ← your global personal defaults
  2. CLAUDE.md                   ← team-shared project context
  3. .claude/rules/*.md          ← modular team rules
  4. CLAUDE.local.md             ← YOUR personal project overrides ✅</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 3 — What to Put In It</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The golden rule: <strong>anything you wouldn't want a teammate to see or be affected by.</strong></p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Here's a breakdown by category:</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Local Environment Details</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Local Environment

- Python venv: \`source ~/.venvs/myproject/bin/activate\`
- Local DB runs on port 5433 (not the default 5432)
- Redis is on port 6380 on my machine
- I use \`python -m pytest\` not bare \`pytest\` (PATH issue with my setup)</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Personal Sandbox / Dev URLs</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Dev URLs

- Local API: http://localhost:8001
- Local frontend: http://localhost:3001
- My personal staging environment: https://senthil-staging.myapp.io
- DO NOT use https://staging.myapp.io — that's the shared one</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Personal Test Data</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Test Fixtures

- Use user ID \`usr_test_senthil_001\` for integration tests
- Test database: \`myproject_dev_senthil\` (NOT myproject_dev — that's shared)
- Stripe test card: 4242... (last 4: 4242)
- My test webhook secret is in ~/.secrets/stripe_test_webhook</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Work-in-Progress Notes</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## Current Focus

Working on the invoice PDF export feature. The relevant files are:
- app/services/export.py (main logic)
- app/templates/invoice.html (Jinja2 template)
- tests/test_export.py (currently failing — that's OK, WIP)

The tricky part: we're using WeasyPrint but my local install
needs \`brew install pango\` first. Docs don't mention this.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Personal Debugging Preferences</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Debugging Style

- I prefer verbose logging during development — set LOG_LEVEL=DEBUG
- When debugging, always add \`breakpoint()\` rather than print statements
- I use \`ipdb\` not \`pdb\` — it's installed in my venv
- For DB queries, always print the generated SQL first so I can see it</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Machine-Specific Paths</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>## My Machine Paths

- Shared company docs: ~/Documents/company-wiki/
- Design assets: ~/Dropbox/Projects/myproject/assets/
- Reference the backend API repo at: ~/code/myproject-api/</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 4 — A Complete Example for a Python Developer</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Here's a realistic <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> for a FastAPI project:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># My Local Setup Notes

## Environment

- Activate venv: \`source ~/.venvs/fastapi-proj/bin/activate\`
- I use Python 3.12.3 — \`python3.12\` not \`python\`
- Local postgres runs on port 5433 (my laptop has two PG versions)
- DATABASE_URL for local: \`postgresql://senthil:@localhost:5433/myproject_local\`

## My Dev URLs

- API: http://localhost:8001 (I run on 8001 to avoid clash with another project)
- Docs: http://localhost:8001/docs

## Current Task

Implementing the \`/reports/export\` endpoint (GitHub issue #142).
Key files I'm currently editing:
- app/routers/reports.py
- app/services/report_export.py (new file, doesn't exist yet)

## Personal Notes

- The \`auth\` module has a known issue on my machine with token refresh.
  Ignore it for now — it's being fixed in PR #138 (not merged yet).
- When running alembic, always use:
  \`alembic -x env=local upgrade head\`
  (the -x env=local flag selects my local .env file)

## Test Data

- My test user: \`test_senthil@example.com\` / \`test1234\`
- My test workspace ID: \`ws_01JA2KTEST_LOCAL\`

## DO NOT

- Don't run \`docker-compose up\` — I run services natively
- Don't use the shared staging DB for testing</code></pre>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Step 5 — The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">#</code> Shortcut (Quick Additions During a Session)</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The fastest way to add a memory during a session is by starting your input with the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">#</code> character. Claude will prompt you to select which memory file (<code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>) to store it in.</p>

<p style="margin-bottom:1rem; line-height:1.75;">So if you discover something mid-session — like a tricky workaround — you can just type:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># On my machine, always use python3.12 not python</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Claude will ask whether to save it to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>. Pick <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> for anything personal.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">⚠️ One Important Note: Deprecation Warning</strong>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> has been deprecated in favor of using imports, which work better across multiple git worktrees.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">What this means in practice:</p>
<ul style="margin:0 0 1rem 1.5rem; color:var(--text-secondary); line-height:1.8;">
  <li>It still <strong>works</strong> and is still widely used</li>
  <li>The modern equivalent is using <code style="color:var(--code-text);">@imports</code> inside <code style="color:var(--code-text);">CLAUDE.md</code> to pull in a local file that's gitignored</li>
  <li>If you use git worktrees heavily, the import approach is more robust</li>
</ul>

<p style="margin-bottom:0.5rem; line-height:1.75;">The <strong>import-based alternative</strong> looks like this:</p>

<p style="margin-bottom:0.25rem; line-height:1.75;">In your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> (committed):</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>@./CLAUDE.local.md</code></pre>

<p style="margin-bottom:1rem; line-height:1.75;">Then <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is added to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code> and contains all your personal notes as before. The result is functionally identical — the difference is that the import approach composes more predictably when you have multiple worktrees of the same repo.</p>

<p style="margin-bottom:1rem; line-height:1.75;">For most solo developers and small teams, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> placed directly in the project root is perfectly fine and simpler to understand.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Tips &amp; Tricks</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>1. Treat it as a living document</strong> — update it whenever you discover something specific to your machine. It compounds in value over time.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>2. Never put real secrets in it</strong> — even though it's gitignored, <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is still a plaintext file on disk. Reference environment variable <em>names</em> only, not their values. Use <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.env</code> files for actual secrets.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>3. Use it for "current focus"</strong> — a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">## Current Task</code> section that you update each time you sit down to work is incredibly effective. Claude immediately knows what you're working on without you having to explain it.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><strong>4. Verify with <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/memory</code></strong> — run <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/memory</code> inside Claude Code to see all loaded memory files including <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code>. This is your debugging tool if things aren't loading as expected.</p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>5. Keep it short</strong> — the same context window rules apply here. Aim for under 100 lines. If it's growing large, you're probably putting things in it that belong in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/rules/</code>.</p>

<hr style="border:0; border-top:1px solid var(--border-color); margin:1.5rem 0;" />

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Full Comparison: All Five Config Files</strong>

<div style="overflow-x:auto; margin-bottom:1rem;">
  <table style="width:100%; border-collapse:collapse; font-size:0.82rem;">
    <thead>
      <tr style="background: var(--surface-color);">
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">settings.json</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">CLAUDE.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">rules/*.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">commands/*.md</code></th>
        <th style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary); text-align:left;"><code style="color:var(--code-text);">CLAUDE.local.md</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Controls</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Permissions, tools, env</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team project context</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Modular scoped rules</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Reusable shortcuts</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal local context</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Committed to git?</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Project yes, local no</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">✅ Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">✅ Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">✅ Yes</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">❌ Never</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Who sees it?</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Team</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Only you</td>
      </tr>
      <tr style="background: var(--surface-color);">
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Loaded</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Always (runtime)</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session / file match</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">On-demand</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Every session</td>
      </tr>
      <tr>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);"><strong>Best for</strong></td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Security &amp; tool access</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Architecture, conventions</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Domain-specific rules</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Repetitive tasks</td>
        <td style="padding:0.6rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Your sandbox, WIP notes, local paths</td>
      </tr>
    </tbody>
  </table>
</div>

<p style="margin-bottom:1rem; line-height:1.75;"><code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code> is the private complement to everything else in the system — it's where <em>your</em> reality lives, separate from the team's shared contract.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous"><span>←</span> Previous: rules/*.md</a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">Next: Quick Reference <span>→</span></a>
</div>
`},{label:"Quick Reference",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">🧭 Quick Reference Card</strong>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Which file do I edit?</strong>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Use this table whenever you want to configure Claude Code:</p>
<div style="overflow-x: auto; margin-bottom: 1.25rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.82rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">#</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">I want to…</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">→ Edit this file</th>
  </tr></thead>
  <tbody>
    ${[["1","Give Claude permanent project instructions all teammates share","CLAUDE.md (project root)"],["2","Give Claude my personal preferences for every project","~/.claude/CLAUDE.md (home folder)"],["3","Store personal notes for this project — not for teammates","CLAUDE.local.md (project root, gitignored)"],["4","Allow or block specific terminal commands / file reads",".claude/settings.json"],["5","Make personal permission overrides just for my machine",".claude/settings.local.json"],["6","Create a reusable shortcut I can type as a /command",".claude/commands/<name>.md"],["7","Split a growing CLAUDE.md into organised topic files",".claude/rules/<topic>.md"],["8","Apply rules only when editing a specific type of file",".claude/rules/<topic>.md (with paths: frontmatter)"]].map(([r,t,n],a)=>`
    <tr${a%2===1?' style="background:var(--surface-color);"':""}>
      <td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--accent-primary); font-weight:600; text-align:center;">${r}</td>
      <td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">${t}</td>
      <td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">${n}</td>
    </tr>`).join("")}
  </tbody>
</table>
</div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Files at a glance</strong>
<div style="overflow-x: auto; margin-bottom: 1.25rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.82rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">File</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">Auto-loaded?</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">Shared?</th>
    <th style="padding:0.5rem 0.7rem; border:1px solid var(--border-color); color:var(--text-primary);">Purpose</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">CLAUDE.md</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Team</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Permanent project instructions</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">CLAUDE.local.md</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">🔒 Just you</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal notes for this project</td></tr>
    <tr><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">.claude/settings.json</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Team</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Allow / deny permissions &amp; config</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">.claude/settings.local.json</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">🔒 Just you</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal permission overrides</td></tr>
    <tr><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">.claude/commands/*.md</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">❌ On demand</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Team</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Custom /slash commands</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.78rem; color:var(--code-text);">.claude/rules/*.md</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Yes (or on demand)</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); text-align:center;">✅ Team</td><td style="padding:0.4rem 0.7rem; border:1px solid var(--border-color); color:var(--text-secondary);">Topic-specific modular rules</td></tr>
  </tbody>
</table>
</div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Useful commands inside Claude Code</strong>
<div style="overflow-x: auto; margin-bottom: 1.25rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.82rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">Command</th>
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">What it does</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);">/init</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Generate a starter CLAUDE.md for your project automatically</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);">/memory</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Show all loaded instruction files; toggle auto memory</td></tr>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);">/config</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Open the settings interface</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);">/status</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Show which settings files are active</td></tr>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--accent-primary);"># your text</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Quickly add a note to the most relevant CLAUDE.md</td></tr>
  </tbody>
</table>
</div>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem;">
  <p style="margin:0; font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">🧭 <strong>Still not sure?</strong> Start with CLAUDE.md. It covers 90% of day-to-day needs. Add the other files only as your project grows.</p>
</div>

<p style="margin-top: 0.75rem; font-size:0.85rem; color: var(--text-secondary);">
  Official docs:
  <a href="https://code.claude.com/docs/en/memory" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Memory</a> |
  <a href="https://code.claude.com/docs/en/settings" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Settings</a>
</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="5" class="tutorial-nav-link previous"><span>←</span> Previous: CLAUDE.local.md</a>
  <a href="#" data-goto-tab="7" class="tutorial-nav-link">Next: Visual Outline <span>→</span></a>
</div>
`},{label:"Visual Outline",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Visual Outline</strong>

<p style="margin-bottom:1rem; line-height:1.75;">An interactive flowchart showing the relationships between all the config files.</p>

<div style="width: 100%; height: 650px; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem; background: var(--surface-color);">
  <iframe src="/knowledgelab/claude-code-config-flowchart.html" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="6" class="tutorial-nav-link previous"><span>←</span> Previous: Quick Reference</a>
</div>
`}],interactiveType:"custom"},St={id:"claude-skills-tutorial",title:"Claude Skills",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;">Whether you're a complete beginner looking to build your first website, or an experienced developer looking to speed up your workflow, getting started with Claude Skills is easier than you think. In this simple guide, we'll watch Claude Skills in action as it guides us through building a website, taking our input at each step. Let's go!</p>

<p style="margin-bottom:1rem; line-height:1.75;">A skill is a set of instructions — packaged as a simple folder — that teaches Claude how to handle specific tasks or workflows.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Skills are powerful when you have repeatable workflows: generating frontend designs from specs, conducting research with consistent methodology or creating documents that follow your team's style guide. For more details on Skills check out the <a href="#" data-goto-tab="6" style="color: var(--accent-primary); text-decoration: underline;">resources section</a>.</p>
<p style="line-height:1.75;">Instead of repeating instructions every time you ask Claude to review a pull request or write a commit message, you write a skill once and Claude applies it whenever the task comes up.</p>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Step 1 – Setup <span>→</span>
  </a>
</div>
`},{label:"Step 1 – Setup",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 1 – Download & Install the Skills Repo]</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">To kick things off, clone the Claude Skills repo and copy the skill folders into <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/skills</code>:</p>

<p style="margin: 0.5rem 0; line-height:1.75;">If the directory does not exist yet, create it first:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text);"><code>mkdir -p ~/.claude/skills</code></pre>

<p style="margin: 0.5rem 0; line-height:1.75;">Then run:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap;"><code>git clone https://github.com/anthropics/skills.git
cp -R skills/* ~/.claude/skills/</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Each skill lives in a <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">SKILL.md</code> file with a name and description in its frontmatter. Claude uses the description to match skills to requests.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Here's what a skill's frontmatter looks like: The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">  name</code> identifies your skill and the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">description</code> tell Claude when to use it.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">A good description answers two questions:</p>
<ul style="margin: 0 0 0.5rem 1.5rem; color: var(--text-secondary); line-height: 1.5; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">
  <li style="margin-bottom: 0.25rem;">What does this skill do?</li>
  <li style="margin-bottom: 0.25rem;">When should Claude use it?</li>
</ul>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/gitskill.png" alt="Git Skill Frontmatter" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">Personal skills go in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude/skills</code> and follow you across all projects. Project skills go in <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/skills</code> inside a repository and are shared with anyone who clones it.</p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/claude-skills.png" alt="Terminal Skills Placement" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.5rem; line-height:1.75;">Skills load on demand — unlike <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> (which loads into every conversation) or <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">slash commands</code> (which require explicit invocation).</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">You can think of <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.md</code> as providing the cumulative knowledge that makes the agent genuinely useful from the very first interaction.</p>

<p style="margin-bottom:1rem; line-height:1.75; font-weight: 600; color: var(--accent-primary);">If you find yourself explaining the same thing to Claude repeatedly, that's a skill waiting to be written.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Step 2 – Launch Claude <span>→</span>
  </a>
</div>
`},{label:"Step 2 – Launch Claude",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 2 – Launch Claude in Your Terminal]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">If you are new to Claude Code, please install it by following the instructions at <a href="https://code.claude.com/docs/en/quickstart" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://code.claude.com/docs/en/quickstart</a>.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Usually, you can launch it by simply typing <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">claude</code> in your terminal. For this tutorial, however, I am launching Claude using an open source free model via Ollama with this command:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text);"><code>ollama launch claude --model glm-4.7:cloud</code></pre>

<p style="margin: 0.5rem 0; line-height:1.75;"><em>Note: Since I am practicing and learning to use Claude Code, I don't want to pay for an Anthropic API key yet. Because of this, I will be launching Claude using an open source free model via Ollama!</em></p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/skill1.png" alt="Terminal Skills Execution" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 1
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Step 3 – Call a Skill <span>→</span>
  </a>
</div>
`},{label:"Step 3 – Call a Skill",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 3 – Call the Skill]</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;">To know what skills are available, just ask Claude in the terminal:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text);"><code>What skills are available?</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">There are two ways to call a skill:</p>

<p style="margin: 0.75rem 0 0.25rem; font-weight: 600; color: var(--text-primary);">① Slash command — call it explicitly by name</p>
<p style="margin: 0 0 0.5rem; line-height:1.75; color: var(--text-secondary);">Type the skill's name prefixed with a <code style="padding: 0.15rem 0.35rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/</code> and Claude invokes it immediately:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text);"><code>/frontend-design</code></pre>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/skill2.png" alt="Natural Language Skills" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap; line-height: 1.5;"><code>❯ /frontend-design

I'll help you create a distinctive, production-grade frontend interface. To get started, please tell me:
   
  1. What would you like to build? (a component, page, dashboard, landing page, application interface, etc.)
  2. What's the purpose and audience? (e.g., portfolio site, admin dashboard, e-commerce checkout, creative agency homepage)
  3. Any technical constraints? (framework preference - React/Vue/vanilla HTML/CSS, accessibility requirements, performance considerations)
  4. Is there a specific aesthetic direction you prefer? (or should I propose something bold and unique?)</code></pre>
<p style="margin: 0 0 0.25rem; font-weight: 600; color: var(--text-primary);">② Natural language — just describe what you want</p>
<p style="margin: 0 0 0.5rem; line-height:1.75; color: var(--text-secondary);">No slash needed. Claude reads your request and automatically matches it to the right skill:</p>
<p style="margin: 0 0 0.75rem; line-height:1.75;"><em>"push the recent changes to GitHub"</em> — Claude picks up the git-push skill and handles it end to end.</p>

<p style="margin: 0.5rem 0; line-height:1.75;">When Claude matches a skill to your request, you'll see it load in the terminal:</p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/callskill.png" alt="Skill Loading in Terminal" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.75rem; line-height:1.75; color: var(--text-primary); font-weight: 600; display: flex; align-items: center; gap: 0.5rem; font-size: 1.15rem;">
    <span>💡</span> When Claude Code starts, it scans four locations for skills:
  </p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.5; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">
    <li style="margin-bottom: 0.25rem;">Enterprise (managed settings) - managed-settings.json</li>
    <li style="margin-bottom: 0.25rem;">Personal (your home directory) - ~/.claude/skills</li>
    <li style="margin-bottom: 0.25rem;">Project (your project directory) - .claude/skills</li>
    <li style="margin-bottom: 0;">Plugins (installed plugins) - .claude-plugin/plugin.json</li>
  </ul>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 2
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Step 4 – Create a Skill <span>→</span>
  </a>
</div>
`},{label:"Step 4 – Create a skill",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 4 – Create Your Own Skill]</strong>
<p style="margin-bottom:0.75rem; line-height:1.75;">Building your first skill is the best way to understand how Claude thinks. Let's create a <strong>Python Code Reviewer</strong> skill.</p>

<strong style="display:block; margin-top: 1.5rem; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 1 — Create the directory structure</strong>
<p style="margin-bottom:0.5rem;">Run this in your terminal to create the skill folder:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text);"><code>mkdir -p ~/.claude/skills/py-review</code></pre>

<strong style="display:block; margin-top: 1.5rem; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 2 — Create the SKILL.md file</strong>
<p style="margin-bottom:0.5rem;">Create the manifest file with instructions for Claude:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5;"><code>cat > ~/.claude/skills/py-review/SKILL.md << 'EOF'
---
name: py-review
description: Reviews Python code for style, bugs, and best practices
---
You are reviewing Python code. For any file or snippet provided via $ARGUMENTS:
1. Check for PEP 8 style violations
2. Identify potential bugs (off-by-one, mutable defaults, etc.)
3. Suggest more Pythonic rewrites if applicable
4. Check for missing type hints
5. Report: LGTM / Minor issues / Major issues
Be concise — use a bullet per issue, not paragraphs.
EOF</code></pre>

<strong style="display:block; margin-top: 1.5rem; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">Step 3 — Test it inside Claude Code</strong>
<p style="margin-bottom:0.5rem;">Launch Claude and call your new skill explicitly:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap;"><code>claude  # open Claude Code
# then type:
/py-review utils/parser.py</code></pre>

<div style="padding: 1rem; background: rgba(0, 242, 255, 0.05); border: 1px solid rgba(0, 242, 255, 0.1); border-radius: 8px; margin: 1.5rem 0;">
  <p style="margin:0; line-height:1.6;">Claude will now read <code style="color: var(--code-text);">utils/parser.py</code> and give you a structured review.</p>
</div>

<p style="margin-top: 1rem; line-height:1.75;">
  <strong>Pro tip:</strong> Add a <code style="color: var(--code-text);">scripts/</code> subfolder in your skill directory for Python helper scripts. Claude will run them externally — only the output enters the context window, not the script itself.
</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 3
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Step 5 – Find Skills <span>→</span>
  </a>
</div>
`},{label:"Step 5 – Find Skills",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[STEP 5 – Where to Find Skills]</strong>

<p style="margin: 0.5rem 0; line-height:1.75;">You can find more skills to use with Claude Code in the following places:</p>

<ul style="margin: 0.5rem 0 1rem 2rem; color: var(--text-secondary); line-height: 1.6;">
  <li style="margin-bottom: 0.5rem;"><strong>Anthropic official:</strong> <a href="https://github.com/anthropics/skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://github.com/anthropics/skills</a></li>
  <li style="margin-bottom: 0.5rem;"><strong>Community marketplaces:</strong>
    <ol style="margin: 0.5rem 0 0 1.5rem;">
      <li style="margin-bottom: 0.25rem;"><a href="https://skillsmp.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">skillsmp.com</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://skills.sh/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">skills.sh</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://agent37.com/skills/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">agent37.com</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://skillhub.club/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">skillhub.club</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://www.uupm.cc/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">UI UX Pro Max</a></li>
    </ol>
  </li>
  <li style="margin-bottom: 0.5rem;"><strong>GitHub Community Repos:</strong>
    <ul style="margin: 0.5rem 0 0 1.5rem; list-style-type: disc;">
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/sickn33/antigravity-awesome-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Antigravity Awesome Skills</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/affaan-m/everything-claude-code" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Everything Claude Code</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/ComposioHQ/awesome-claude-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Awesome Claude Skills</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/hesreallyhim/awesome-claude-code" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Awesome Claude Code</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/obra/superpowers" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Superpowers</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/PleasePrompto/notebooklm-skill" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">NotebookLM Skills</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/kepano/obsidian-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Obsidian Skills</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/gsd-build/get-shit-done" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Get Shit done</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/addyosmani/agent-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Agent Skills</a></li>
    </ul>
  </li>
</ul>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 4
  </a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">
    Next: Resources <span>→</span>
  </a>
</div>
`},{label:"Resources",content:`
<strong id="resources" style="display:block; margin-bottom:0.75rem; font-size:1rem;">Resources</strong>

<p style="margin-top: 0.25rem; text-align: left;">
  <a href="https://anthropic.skilljar.com/introduction-to-agent-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Introduction to agent skills</a>
</p>

<p style="margin-top: 0.25rem; text-align: left;">
  <a href="https://agentskills.io/home" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">An Open Standard for AI Agent Skills</a>
</p>
<p style="margin-top: 0.5rem; text-align: left;">
  <a href="https://share.google/9HXMh2Ezc32YiJrVy" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">The Complete Guide to Building Skills for Claude</a>
</p>
<p style="margin-top: 0.25rem; text-align: left;">
  <a href="https://claude.com/blog/improving-frontend-design-through-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Best practices for building richer, more customized frontend design with Claude and Skills</a>
</p>
`}],interactiveType:"custom"},Et={id:"claude-mcp",title:"Claude MCP",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;">The Model Context Protocol (<a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">MCP</a>) is an open standard that enables Claude to interact with external tools and data sources. This modular architecture allows you to extend Claude's capabilities with specialized services.</p>

<p style="margin-bottom:0.75rem; line-height:1.75;">In this section, we will configure Claude to connect to <strong>three</strong> powerful MCP servers:</p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;"><strong>21st.dev Magic:</strong> Create modern, production-ready UI components.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Supadata:</strong> Advanced web and video scraping capabilities.</li>
  <li style="margin-bottom: 0.5rem;"><strong>Stitch:</strong> Generates UIs for mobile and web applications.</li>
</ul>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: 21st.dev Magic <span>→</span>
  </a>
</div>
`},{label:"21st.dev Magic",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">21st.dev Magic</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">A tool that helps developers create beautiful, modern UI components instantly through natural language descriptions.</p>

<div style="margin: 1rem 0; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px;">
  <p style="margin-bottom:0.5rem;"><strong>Official Link (Get your API key here):</strong></p>
  <a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://21st.dev/magic</a>
</div>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Installation Command:</strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">claude mcp add magic --scope user --env API_KEY="YOUR_API_KEY" -- npx -y @21st-dev/magic@latest</pre>
<p style="margin-top: 0.5rem; margin-bottom: 0.5rem; line-height: 1.75; color: var(--text-secondary);">After installation, you can verify your configuration by reading the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude.json</code> file in your home directory. It should contain the following MCP server entries:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">{
  "mcpServers": {
    "magic": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@21st-dev/magic@latest"
      ],
      "env": {
        "API_KEY": "ab1115bb368968***************c8b2867599589"
      }
    }
  }
}</pre>

<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Once installed, try the following example prompt. In the below image, you can see the 21st.dev MCP server is invoked.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">create a modern navigation bar with responsive design</pre>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/21stdev.png" alt="21st.dev Magic Interface" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Supadata <span>→</span>
  </a>
</div>
`},{label:"Supadata",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Supadata MCP</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">The Supadata MCP server enables powerful web and video scraping capabilities directly within AI development environments like Claude. This open-source integration allows AI models to extract transcripts, scrape web pages, and crawl entire websites to gather context.</p>

<div style="margin: 1rem 0; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px;">
  <p style="margin-bottom:0.5rem;"><strong>Official Link (Get your API key here):</strong></p>
  <a href="https://supadata.ai/" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://supadata.ai/</a>
</div>

<p style="margin-top:1rem; margin-bottom:1rem; line-height:1.75;"><strong>Installation Command:</strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">claude mcp add supadata --scope user --env SUPADATA_API_KEY="YOUR_API_KEY" -- npx -y @supadata/mcp</pre>

<p style="margin-top:1rem; margin-bottom:0.5rem; line-height: 1.75; color: var(--text-secondary);">Alternatively, you can manually add the configuration by opening your <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude.json</code> file and adding the following entry:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">{
  "mcpServers": {
    "supadata": {
      "command": "npx",
      "args": [
        "-y",
        "@supadata/mcp"
      ],
      "env": {
        "SUPADATA_API_KEY": "sd_2816a*************360eb7a803"
      }
    }
  }
}</pre>

<p style="margin-top:1rem; margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Once the installation is complete, try pasting a YouTube video URL like the one below in your Claude terminal. You will see the Supadata tool automatically invoked to extract the transcript:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">https://youtu.be/Dp6u0pel-Rs</pre>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0; align-items: center;">
  <img src="/knowledgelab/images/supa1.png" alt="Supadata Step 1" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
  <img src="/knowledgelab/images/supa2.png" alt="Supadata Step 2" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
  <img src="/knowledgelab/images/supa3.png" alt="Supadata Step 3" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-top:1rem; margin-bottom:0.5rem;"><strong>Documentation & Integration:</strong></p>
<a href="https://docs.supadata.ai/integrations/mcp" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://docs.supadata.ai/integrations/mcp</a>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: 21st.dev Magic
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Stitch <span>→</span>
  </a>
</div>
`},{label:"Stitch",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Stitch MCP</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Stitch helps you generate polished UI concepts and app flows that you can bring directly into your Claude workflow.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">First, go to the Stitch website and get your API key:</p>
<p style="margin: 0 0 1rem; line-height:1.75;"><a href="https://stitch.withgoogle.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://stitch.withgoogle.com/</a></p>

<p style="margin-bottom:1rem; line-height:1.75;"><strong>Installation Command:</strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">claude mcp add stitch --transport http https://stitch.googleapis.com/mcp --header "X-Goog-Api-Key: AQ.Ab8***********R_TsknDvKmw" -s user</pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">Once Stitch is connected, you can use it from Claude to explore and generate app ideas. For example, try a prompt like this in your Claude terminal:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">Design a modern reading-list web app for saving articles and YouTube links. Create a clean dashboard, an add-link form, a category filter, and a mobile-friendly layout. Make it feel polished and production-ready.</pre>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is especially useful when you want Claude to help generate the overall look and structure of a web app before you start refining the code.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Supadata
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Tool Reference <span>→</span>
  </a>
</div>
`},{label:"Tool Reference",content:`
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Lists all configured MCP servers in your Claude Code setup (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude.json</code>)</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">claude mcp list</pre>

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Terminal Output]</strong>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'Fira Code', 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; font-size: 0.85rem;">
⏺ Bash(claude mcp list)
  ⎿ Checking MCP server health...

     supadata: npx -y @supadata/mcp - ✓ Connected
     magic: npx -y @21st-dev/magic@latest - ✓ Connected

⏺ MCP Servers (2 connected):

  ┌──────────┬───────────────────────────────┬─────────────┐
  │  Server  │            Command            │   Status    │
  ├──────────┼───────────────────────────────┼─────────────┤
  │ supadata │ npx -y @supadata/mcp          │ ✓ Connected │
  ├──────────┼───────────────────────────────┼─────────────┤
  │ magic    │ npx -y @21st-dev/magic@latest │ ✓ Connected │
  └──────────┴───────────────────────────────┴─────────────┘

  Available Tools

  supadata — Web content extraction:
  - supadata_transcript — Extract transcripts from YouTube, TikTok, Instagram, Twitter, or video files
  - supadata_check_transcript_status — Check transcript job progress
  - supadata_scrape — Scrape web pages to Markdown
  - supadata_map — Crawl website to discover all URLs
  - supadata_crawl — Batch crawl website to extract content from all pages
  - supadata_check_crawl_status — Check crawl job progress

  magic — 21st.dev UI components:
  - 21st_magic_component_builder — Build new UI components from library
  - 21st_magic_component_inspiration — Browse UI component examples
  - 21st_magic_component_refiner — Redesign/improve existing UI components
  - logo_search — Search for company logos in JSX/TSX/SVG formats</pre>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Stitch
  </a>
</div>
`}],interactiveType:"custom"},At={id:"claude-code-uiux-21st-dev",title:"Claude UI Stack",category:"Tutorial",tags:["Claude Code","UI/UX","21st.dev"],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;">This setup helps you create <strong>production-quality websites</strong> by combining three powerful ingredients:</p>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.35rem;"><strong>Claude Code</strong> for structure, implementation, and execution</li>
  <li style="margin-bottom: 0.35rem;"><strong><a href="https://www.uupm.cc/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">UI/UX Pro Max</a></strong> skill for stronger taste and visual direction</li>
  <li style="margin-bottom: 0.35rem;"><strong><a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">21st.dev</a></strong> for polished, production-ready components</li>
</ul>

<p style="margin-bottom:1rem; line-height:1.75;">Claude Code <em>may</em> pick some of these up implicitly, but explicitly adding them usually leads to much stronger results.</p>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Install Claude Code <span>→</span>
  </a>
</div>
`},{label:"Install Claude Code",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[First: Install Claude Code]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Begin by installing Claude Code from the official quickstart page:</p>

<p style="margin: 0.25rem 0 0.75rem; line-height:1.75;">
  <a href="https://code.claude.com/docs/en/quickstart" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://code.claude.com/docs/en/quickstart</a>
</p>

<ol style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.85;">
  <li style="margin-bottom: 0.35rem;">Open the quickstart page and copy the install command shown for your operating system.</li>
  <li style="margin-bottom: 0.35rem;">Paste that install command into your regular terminal and press Enter.</li>
  <li style="margin-bottom: 0.35rem;">Wait until the installation finishes completely.</li>
  <li style="margin-bottom: 0.35rem;">Once installation is complete, launch Claude Code from your terminal.</li>
</ol>

<p style="margin-bottom:0.5rem; line-height:1.75;">After installation, use these commands:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">claude

# Optional: verify that the CLI is installed correctly
claude --help</pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">If Claude Code opens successfully, you are ready to move on to the next step.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Install UI/UX + 21st.dev <span>→</span>
  </a>
</div>
`},{label:"Install UI/UX + 21st.dev",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Next: Add UI/UX Pro Max and 21st.dev]</strong>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>1. Install the <a href="https://www.uupm.cc/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">UI/UX Pro</a> skill:</strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill</pre>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>2. Connect 21st.dev MCP:</strong></p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Before you run the command below, get your 21st.dev Magic API key here:</p>
<p style="margin: 0 0 1rem; line-height:1.75;"><a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://21st.dev/magic</a></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">claude mcp add magic --scope user --env API_KEY="34********84c1624bd4be49e2f309ffd5fb4e" -- npx -y @21st-dev/magic@latest</pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">To confirm both are installed, run these checks:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">claude plugin list
claude mcp list</pre>
<p style="margin-bottom:0.75rem; line-height:1.75;">You should see <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">ui-ux-pro-max</code> in the plugin list and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">magic</code> in the MCP list.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">Claude Code may detect and use these automatically, but explicitly installing and referencing them tends to produce much stronger results.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Install Claude Code
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Prompt Template <span>→</span>
  </a>
</div>
`},{label:"Prompt Template",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Prompt Template]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Use this prompt when generating your site:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">Build a modern, high-end website for [DESCRIBE YOUR PRODUCT].

Requirements:
- Use UI/UX Pro Max design system for layout, spacing, and structure
- Use 21st.dev components and assets for UI elements
- Prioritize clean, production-level design (not generic AI styling)
- Include subtle animations/interactions where appropriate
- Ensure mobile responsive

Pages:
- Landing page
- [Other pages if needed]

Style:
- [Minimal / futuristic / SaaS / etc.]

Make it feel like a top-tier product (Stripe / Linear / Apple-level quality).</pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Notes</p>
  <ul style="margin: 0 0 0 1.25rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.35rem;">Claude Code may use these tools automatically.</li>
    <li style="margin-bottom: 0.35rem;"><strong>Explicitly mentioning them usually gives significantly better results.</strong></li>
    <li style="margin-bottom: 0;">The real unlock is combining generation, taste, and real components.</li>
  </ul>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Install UI/UX + 21st.dev
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Resources <span>→</span>
  </a>
</div>
`},{label:"Resources",content:`
<div style="background: #0d0d12; border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; font-family: 'JetBrains Mono', monospace; box-shadow: 0 20px 40px rgba(0,0,0,0.4); margin: 1rem 0 2rem;">
  <!-- Terminal Header -->
  <div style="background: rgba(255,255,255,0.05); padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color);">
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #ff5f56;"></div>
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #ffbd2e;"></div>
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #27c93f;"></div>
    <span style="margin-left: 0.5rem; font-size: 0.75rem; color: var(--text-secondary); opacity: 0.8;">zsh — build-ui</span>
  </div>
  
  <!-- Terminal Body -->
  <div style="padding: 1.5rem; line-height: 1.6;">
    <div style="margin-bottom: 1.5rem;">
      <p style="color: #ae81ff; margin-bottom: 0.5rem; font-weight: bold;">[01] AWESOME DESIGN.md</p>
      <p style="color: #a0a0b0; font-size: 0.9rem; margin-bottom: 0.5rem;">Design system inspirations from popular websites. Drop one into your project and let coding agents build matching UI.</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #27c93f;">➜</span> 
        <a href="https://getdesign.md/" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-size: 0.85rem; word-break: break-all;">https://getdesign.md/</a>
      </div>
    </div>
    
    <div style="margin-bottom: 1.5rem;">
      <p style="color: #ae81ff; margin-bottom: 0.5rem; font-weight: bold;">[02] What is DESIGN.md?</p>
      <p style="color: #a0a0b0; font-size: 0.9rem; margin-bottom: 0.5rem;">A design system document that AI agents read to generate consistent UI across your project.</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #27c93f;">➜</span> 
        <a href="https://stitch.withgoogle.com/docs/design-md/overview" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-size: 0.85rem; word-break: break-all;">https://stitch.withgoogle.com/docs/design-md/overview</a>
      </div>
    </div>
    
    <div>
      <span style="color: #27c93f;">➜</span> <span style="color: #00f2ff;">~</span> 
      <span style="display: inline-block; width: 8px; height: 18px; background: var(--accent-primary); vertical-align: middle; margin-left: 4px; animation: terminal-blink 1s step-end infinite;"></span>
    </div>
  </div>
</div>

<style>
@keyframes terminal-blink {
  50% { opacity: 0; }
}
</style>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Prompt Template
  </a>
</div>
`}],interactiveType:"custom"},Tt={id:"build-webapp-ai",title:"Build Web App with AI",category:"",tags:[""],description:`
Build your own Notebook Web App using AI coding — no prior coding experience required.

In this tutorial, you’ll learn how to build and launch the app step-by-step using three tools:

<ol style="margin: 1rem 0 1.5rem 2rem; color: var(--text-secondary);">
  <li style="margin-bottom: 0.5rem;"><strong>GitHub</strong></li>
  <li style="margin-bottom: 0.5rem;"><strong>Antigravity</strong></li>
  <li style="margin-bottom: 0.5rem;"><strong>Firebase</strong></li>
</ol>

We will cover setup, configuration, and deployment so you can publish your app online.

Access the prompts and configuration files here:
<a href="https://github.com/amudhamnaturals/flashcards/blob/main/prompt.md" target="_blank" style="color: var(--accent-primary); text-decoration: underline; word-break: break-all;">https://github.com/amudhamnaturals/flashcards/blob/main/prompt.md</a>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/PpvoOyYAMZs" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Build Web App with AI Tutorial"></iframe>
</div>
`,interactiveType:"custom"},Mt={id:"ai-engineering",title:"AI Engineering",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:0.75rem; line-height:1.75;">AI Engineering refers to the process of building applications on top of foundation models.</p>
<p style="margin-bottom:1rem; line-height:1.75;">The model as a service makes it easier to leverage AI to build applications. Models are exposed via APIs that receive user queries and return model outputs.
Without these APIs, using an AI model required the infrastructure to host and serve this model. These APIs give you access to powerful models via single API calls.</p>

`},{label:"Fundamental Building Blocks",content:`

This page is currently under development. Please check back soon.

`}],interactiveType:"custom"},zt={id:"build-app-skill-mcp",title:"Agent Skills + MCP",category:"Tutorial",tags:["Agentic","Firebase","GitHub"],tabs:[{label:"Overview",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Build a URL Tracker App with AI Agents Skills &amp; MCP</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Have you ever saved a bunch of URLs to read later — articles, docs, videos — and then a few days later wondered <em>"where did that link go?"</em> You scroll through tabs, dig through your notes app, check your browser history… and still can't find it.</p>

<p style="margin-bottom:1rem; line-height:1.75;">We're going to <strong>solve that problem ourselves</strong> by building <strong>ZenShelf</strong> — a personal URL tracker app where you can save links with descriptions, track their status, assign categories and priorities, and have all the data safely stored in <strong>Google Cloud (Firebase Firestore)</strong>. No more lost links.</p>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary); font-style: italic;">Below is a preview of what we'll build. The exact design may look different — that's the beauty of AI: it'll surprise you with its own creative take.</p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/zenshelf-preview1.png" alt="ZenShelf App Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">What We'll Use to Build It</strong>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This tutorial combines three complementary tools that each play a distinct role:</p>

<div style="display: flex; flex-direction: column; gap: 0.75rem; margin: 0.5rem 0 1rem;">

  <div style="flex: 1; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--accent-primary); opacity: 0.02; pointer-events: none;"></div>
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Claude Code + <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-size: 0.9em; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">frontend-design</code> skill</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">The AI coding agent that develops the app UI. The <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">frontend-design</code> skill — installed to <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills</code> — instructs Claude to produce distinctive, production-grade interfaces instead of generic AI-slop designs.</p>
  </div>

  <div style="flex: 1; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--accent-secondary); opacity: 0.02; pointer-events: none;"></div>
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Google Antigravity (AI Coding Agent)</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">Handles the broader coding tasks and is connected to the <strong>Firebase MCP</strong> — which lets it create a real Firebase project, configure Firestore to store URLs data, and set up cloud security rules, all through natural language. No Firebase console wrestling required.</p>
  </div>

  <div style="flex: 1; padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--accent-secondary); opacity: 0.02; pointer-events: none;"></div>
    <p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary);">Gemini CLI</p>
    <p style="margin: 0; line-height: 1.65; color: var(--text-secondary); font-size: 0.95rem;">Used to install the <strong>Firebase extension</strong> and the <strong>Superpowers extension</strong> — composable skill bundles that get automatically invoked during app development to handle deployments, git workflows, and more.</p>
  </div>

</div>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary); font-style: regular;">By the end of this tutorial, you'll have a fully functional ZenShelf app running in the cloud — and a repeatable workflow for shipping any idea using AI agents, skills, and MCP servers.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-concept="claude-skills-tutorial" class="tutorial-nav-link previous">
    <span>←</span> Previous: Claude Skills
  </a>
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Step 1 – Setup <span>→</span>
  </a>
</div>

`},{label:"1. Setup",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[One-Time Setup — Tools &amp; Configuration]</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Complete these four steps once and you'll have everything in place to build, design, and deploy apps using AI agents, skills, and MCP servers. This is a one-time setup that is well worth your time, as you can reuse these same configurations to develop and deploy apps for all your future projects.</p>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Prerequisites</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Make sure the following are installed before continuing:</p>
<ul style="margin: 0 0 0.5rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.35rem;"><strong>Node.js</strong> v18 or higher — <a href="https://nodejs.org/en/download" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">nodejs.org</a></li>
  <li style="margin-bottom: 0.35rem;"><strong>Git</strong> — <a href="https://git-scm.com" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">git-scm.com</a></li>
  <li style="margin-bottom: 0.35rem;"><strong>A Google Account</strong> (for Firebase)</li>
  <li style="margin-bottom: 0.35rem;"><strong>Google Antigravity</strong> — <a href="https://antigravity.google/download" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">antigravity.google</a></li>
  <li style="margin-bottom: 0.35rem;"><strong>Claude Code</strong> — <a href="https://code.claude.com/docs/en/quickstart" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">code.claude.com</a></li>
</ul>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">0 — Download & Install the Claude Skills Repo</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">To kick things off, clone the Claude Skills repo and copy the skill folders into <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills</code>:</p>

<p style="margin: 0.5rem 0; line-height:1.75;">If the directory does not exist yet, create it first:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">mkdir -p ~/.claude/skills</pre>

<p style="margin: 0.5rem 0; line-height:1.75;">Then run:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">git clone https://github.com/anthropics/skills.git
cp -R skills/* ~/.claude/skills/</pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Each skill lives in a <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> file with a name and description in its frontmatter. Claude uses the description to match skills to requests.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">Here's what a skill's frontmatter looks like: The <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code> identifies your skill and the <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code> tell Claude when to use it.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">A good description answers two questions:</p>
<ul style="margin: 0 0 0.5rem 1.5rem; color: var(--text-secondary); line-height: 1.6; font-family: monospace; font-size: 1.05rem;">
  <li style="margin-bottom: 0.25rem;">What does this skill do?</li>
  <li style="margin-bottom: 0.25rem;">When should Claude use it?</li>
</ul>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/gitskill.png" alt="Git Skill Frontmatter" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">Personal skills go in <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills</code> and follow you across all projects. Project skills go in <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.claude/skills</code> inside a repository and are shared with anyone who clones it.</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">You can find more skills to use with Claude Code and Gemini at <a href="https://senthilcaesar.github.io/knowledgelab/#claude-skills-tutorial" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Skills Library</a> <strong style="color: var(--accent-primary); font-family: 'Fira Code', monospace; background: rgba(0, 242, 255, 0.1); padding: 0.1rem 0.4rem; border-radius: 4px; border: 1px solid rgba(0, 242, 255, 0.2); font-size: 0.85rem; vertical-align: middle; margin-left: 0.25rem;">Step 4 - Find Skills</strong></p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/claude-skills.png" alt="Terminal Skills Placement" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border-color); object-fit: cover;">
</div>

<p style="margin-bottom:0.5rem; line-height:1.75;">Skills load on demand — unlike <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">CLAUDE.md</code> (which loads into every conversation) or <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">slash commands</code> (which require explicit invocation).</p>


<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">1 — Install Gemini CLI &amp; Extensions</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">The <a href="https://geminicli.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Gemini CLI</a> brings terminal-based AI to your fingertips. Install it and add two extensions that power our workflow:</p>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Install globally with npm:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">npm install -g @google/gemini-cli</pre>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Or install with Homebrew (macOS/Linux):</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">brew install gemini-cli</pre>

<p style="margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">Then install the extensions:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"># Install the Firebase extension for Gemini CLI
gemini extensions install https://github.com/gemini-cli-extensions/firebase/

# Install the Superpowers extension for Gemini CLI
gemini extensions install https://github.com/obra/superpowers</pre>

<p style="margin-top:0.75rem; margin-bottom:0.25rem; line-height:1.75; color: var(--text-secondary);">The Firebase extension is updated frequently, so you should regularly update the installed version:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1.25rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">gemini extensions update firebase</pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.25rem; font-weight: 600; color: var(--text-primary);">💡 What is Superpowers?</p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">Superpowers is a complete software development workflow for your coding agents, built on top of a set of composable "skills" and initial instructions that make sure your agent uses them automatically — git pushes, code reviews, docs, and more.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">2 — Configure MCP Servers in Antigravity</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">The Model Context Protocol (MCP) gives your AI agent "hands" to manage cloud infrastructure and UI designs. Open <strong>Antigravity</strong>, go to <strong>Settings → Antigravity settings → Customizations → Add MCP servers</strong>, then install the following from the MCP Store:</p>

<div style="display: grid; gap: 0.5rem; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin: 0.5rem 0 1rem;">
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">StitchMCP</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Advanced UI generation</p>
  </div>
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">cloudrun</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Containerized deployments</p>
  </div>
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">firebase-mcp-server</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Firebase Project Management</p>
  </div>
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">github-mcp-server</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Repo management &amp; CI/CD</p>
  </div>
  <div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px;">
    <p style="margin: 0 0 0.2rem; font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">magic</p>
    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Premium UI components</p>
  </div>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">⚠️ Manual step required — set the Claude Skills path in Antigravity</p>
  <p style="margin-bottom: 0.75rem; line-height: 1.75; color: var(--text-secondary);">Antigravity needs to know where your Claude skills live. Open <strong>Antigravity</strong>, go to <strong>Settings → Antigravity settings → Customizations → Skills custom path</strong>, and set the path to:</p>
  <pre style="display: block; padding: 0.75rem 1rem; background: var(--syntax-bg); border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); border: 1px solid var(--border-color);">~/.claude/skills</pre>
</div>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">

<img src="/knowledgelab/images/anti-mcp.png" alt="ZenShelf App Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">⚠️ Manual step required — add the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: monospace; color: var(--syntax-text);">magic</code> MCP server</p>
  <p style="margin-bottom: 0.75rem; line-height: 1.75; color: var(--text-secondary);">The <strong>21st.dev Magic</strong> server must be added manually. Open the file below and add the entry shown:</p>
  <pre style="display: block; padding: 0.6rem 0.9rem; background: var(--syntax-bg); border-radius: 6px; margin-bottom: 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); border: 1px solid var(--border-color);">~/.gemini/antigravity/mcp_config.json</pre>
  <p style="margin-bottom: 0.4rem; line-height: 1.75; color: var(--text-secondary);">Add this entry inside the top-level object:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border-radius: 8px; margin-bottom: 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; border: 1px solid var(--border-color); line-height: 1.5;">"magic": {
  "type": "stdio",
  "command": "npx",
  "args": [
    "-y",
    "@21st-dev/magic@latest"
  ],
  "env": {
    "API_KEY": "YOUR_API_KEY_HERE"
  }
}</pre>
  <p style="margin: 0; line-height: 1.75; color: var(--text-secondary);">Replace <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">YOUR_API_KEY_HERE</code> with your personal API key. Get your key at <a href="https://21st.dev/magic" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">21st.dev/magic</a>.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">


<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">3 — Install &amp; Authenticate Firebase CLI</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">The Firebase CLI is the foundation for all cloud operations. Run these in your terminal:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"># Install the Firebase tools globally
npm install -g firebase-tools

# Log in to your Google Account
firebase login</pre>

<p style="margin: 0.75rem 0 0.25rem; line-height:1.75; color: var(--text-secondary);">Verify the login succeeded:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">firebase projects:list</pre>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">4 — Add Firebase Agent Skills</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Skills give the AI the expertise to write correct Firebase code — security rules, Firestore schema, Firestore database, auth setup, and deployment scripts. You can read more in the <a href="https://firebase.google.com/docs/ai-assistance/agent-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Firebase agent skills documentation</a>:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;">npx skills add firebase/agent-skills</pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 0.75rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 Pro Tip: Inspect your skills</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.6;">You can always view your installed Gemini and Antigravity skills at these paths:</p>
  <ul style="margin: 0.4rem 0 0 1.25rem; color: var(--text-secondary); line-height: 1.6; font-family: monospace; font-size: 0.85rem;">
    <li>/Users/senthilpalanivelu/.gemini/skills</li>
    <li>/Users/senthilpalanivelu/.gemini/antigravity/skills</li>
  </ul>
</div>








<p style="margin: 0.75rem 0 0.25rem; line-height:1.75; color: var(--text-secondary);">When you run this command, you'll see an interactive installer like the one below. Select all 11 skills and choose <strong>Antigravity</strong> + <strong>Claude Code</strong> as the agents, with <strong>Global</strong> scope and <strong>Symlink</strong> install method:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;">███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝

<span style="color: var(--syntax-keyword);">◇  Source:</span> https://github.com/firebase/agent-skills.git
<span style="color: var(--syntax-keyword);">◇  Repository cloned</span>
<span style="color: var(--syntax-keyword);">◇  Found 11 skills</span>
<span style="color: var(--syntax-keyword);">◇  Select skills to install (space to toggle)</span>
   developing-genkit-dart, developing-genkit-js, firebase-ai-logic,
   firebase-app-hosting-basics, firebase-auth-basics, firebase-basics,
   firebase-data-connect, firebase-firestore-enterprise-native-mode,
   firebase-firestore-standard, firebase-hosting-basics, firebase-local-env-setup

<span style="color: var(--syntax-keyword);">◇  Which agents do you want to install to?</span>
   Amp, Cline, Codex, Cursor, Gemini CLI, GitHub Copilot, Kimi Code CLI,
   OpenCode, Warp, <span style="color: var(--syntax-string); font-weight: bold;">Antigravity, Claude Code</span>

<span style="color: var(--syntax-keyword);">◇  Installation scope</span>  <span style="color: var(--syntax-string);">Global</span>
<span style="color: var(--syntax-keyword);">◇  Installation method</span> <span style="color: var(--syntax-string);">Symlink (Recommended)</span>

<span style="color: var(--syntax-keyword);">◇  Installation Summary</span>
   ~/.agents/skills/firebase-basics          → Antigravity, Claude Code
   ~/.agents/skills/firebase-auth-basics     → Antigravity, Claude Code
   ~/.agents/skills/firebase-firestore-standard → Antigravity, Claude Code
   ~/.agents/skills/firebase-hosting-basics  → Antigravity, Claude Code
   <span style="color: var(--syntax-comment);">... and 7 more</span>

<span style="color: var(--syntax-keyword);">◇  Proceed with installation?</span>  Yes

<span style="color: var(--syntax-function);">◇  Installation complete — 11 skills installed</span>
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-basics                           symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-auth-basics                      symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-firestore-standard               symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-app-hosting-basics               symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-firestore-enterprise-native-mode symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-local-env-setup                  symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-hosting-basics                   symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-data-connect                     symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/firebase-ai-logic                         symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/developing-genkit-js                      symlinked: Antigravity, Claude Code
<span style="color: var(--syntax-function);">✓</span> ~/.agents/skills/developing-genkit-dart                    symlinked: Antigravity, Claude Code

<span style="color: var(--syntax-comment);">└  Done!  Review skills before use; they run with full agent permissions.</span></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; margin: 1.5rem 0;">
  <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">💡 Skills vs. Extensions: What's the difference?</p>
  <p style="margin-bottom: 0.75rem; line-height: 1.75; color: var(--text-secondary);">You might notice we use <code>gemini extensions</code> in Step 1 and <code>npx skills</code> in Step 4. Here's the distinction:</p>
  <ul style="margin: 0 0 0.75rem 1.25rem; color: var(--text-secondary); line-height: 1.75;">
    <li><strong>Extensions</strong> (<code>gemini extensions install</code>) are <strong>Gemini-specific</strong>. They are all-in-one bundles that add new slash commands and tools directly to the Gemini terminal CLI.</li>
    <li><strong>Skills</strong> (<code>npx skills add</code>) are the primary way to add expertise to <strong>Antigravity</strong> and <strong>Claude Code</strong>. They are universal and provide the instruction sets that teach these agents how to code correctly.</li>
  </ul>
  <p style="margin: 0; line-height: 1.75; color: var(--text-secondary);">Think of <strong>Extensions</strong> as giving your agent "new tools," while <strong>Skills</strong> give your agent "the instruction manual" on how to use them effectively.</p>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">

  <p style="margin-bottom: 0.35rem; font-weight: 600; color: var(--text-primary);">You're ready — head to Step 2</p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">With Gemini CLI, MCP servers, Firebase CLI, and the agent skills all in place, proceed to the <strong>Build</strong> tab to start scaffolding ZenShelf.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Step 2 – Build <span>→</span>
  </a>
</div>
`},{label:"2. Build",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[3-Stage Development]</strong>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">First — Create the Project Folder</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">In your terminal, create and enter the project directory:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">mkdir url-content-tracker
cd url-content-tracker</pre>
<p style="margin-bottom:1.25rem; line-height:1.75; color: var(--text-secondary);">Then open this folder in <strong style="color: var(--text-primary);">Antigravity</strong>. This folder will contain the entire app.</p>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Before you start — invoke the frontend-design skill</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This skill guides the agent to produce production-grade, visually stunning interfaces. Here's how to use it:</p>


<ol style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.9;">
  <li style="margin-bottom: 0.5rem;">Open <strong style="color: var(--text-primary);">Antigravity</strong> and navigate to your project folder.</li>
  <li style="margin-bottom: 0.5rem;">Open the <strong style="color: var(--text-primary);">Agent panel</strong> on the right side of the screen.</li>
  <li style="margin-bottom: 0.5rem;">In the chat window, type <code style="padding: 0.15rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/</code> and search for <code style="padding: 0.15rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">frontend-design</code>.</li>
  <li style="margin-bottom: 0.5rem;">Select the <strong style="color: var(--text-primary);">frontend-design</strong> skill — it loads from <code style="padding: 0.15rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills</code> that you configured in Setup.</li>
  <li style="margin-bottom: 0.5rem;">Once selected, enter the prompt below and press <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 4px; font-size: 0.85rem; font-family: monospace;">Enter</kbd>:</li>
</ol>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">Help me plan build an URL tracker app where users can save links, descriptions, status (Pending, In Progress, Read, Archived), categories, and priority levels. The user should be able to perform create, read, update and delete operations.
Include a search bar.</pre>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1rem 0; align-items: center;">
  <img src="/knowledgelab/images/anti1.png" alt="Antigravity Agent Panel" style="max-width: 100%; border-radius: 10px; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.25); object-fit: cover;">
  <img src="/knowledgelab/images/anti2.png" alt="Antigravity frontend-design skill" style="max-width: 100%; border-radius: 10px; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.25); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 What happens next</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Gemini Flash will work on creating an <strong style="color: var(--text-primary);">implementation plan</strong> for the app. Review it, then click <strong style="color: var(--text-primary);">Proceed</strong> to let the AI write all the code.</p>
</div>

<div style="margin: 1rem 0; text-align: center;">
  <img src="/knowledgelab/images/plan.png" alt="Gemini implementation plan" style="max-width: 100%; border-radius: 10px; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.25); object-fit: cover;">
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Preview the app locally</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">Once the AI has finished writing all the code, open your terminal, navigate to the project folder, and run:</p>
  <pre style="display: block; padding: 0.75rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); margin-bottom: 0.75rem; font-size: 0.85rem; line-height: 1.5;">npm run dev</pre>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">This starts a local development server and compiles the app. It will print a local URL (e.g. <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">http://localhost:5173</code>) in the terminal — copy that URL and open it in your browser to see the app live.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Bonus — Add a Light / Dark Mode Toggle</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Now that the app is developed, let's add some UI polish. The first one is a <strong style="color: var(--text-primary);">light mode / dark mode toggle</strong>. Paste the prompt below into the Antigravity chat:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">I like the design but I think it would greatly benefit from a dark mode toggle. Can you please add one to the top right corner of the app? In the light mode I want to use the sun emoji and in the dark mode I want to use the moon emoji. The app will auto update as you make changes.</pre>


<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Full Test — Kick the tyres!</p>
  <p style="margin: 0 0 0.6rem; color: var(--text-secondary); line-height: 1.75;">Now put the whole app through its paces. Check that every feature works as intended:</p>
  <ul style="margin: 0 0 0.75rem 1.25rem; color: var(--text-secondary); line-height: 1.9;">
    <li><strong style="color: var(--text-primary);">Add link</strong> — create a few entries with different statuses, categories, and priorities</li>
    <li><strong style="color: var(--text-primary);">Edit</strong> — update a saved entry and confirm the changes persist</li>
    <li><strong style="color: var(--text-primary);">Delete</strong> — remove an entry and verify it disappears from the list</li>
    <li><strong style="color: var(--text-primary);">Search</strong> — type in the search bar and check that results filter correctly</li>
    <li><strong style="color: var(--text-primary);">Dark / Light toggle</strong> — switch modes and make sure the UI responds cleanly</li>
  </ul>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;"><strong style="color: var(--text-primary);">Found a bug?</strong> Just describe it in plain English to Antigravity — <em>e.g. "When I click the delete button, a confirmation dialog should appear before the card is removed. The dialog should have a clear title like 'Delete this link?', a short warning message, and two buttons — a red 'Delete' button to confirm and a grey 'Cancel' button to dismiss. It should appear centered on screen with a dark overlay behind it."</em>. The more context and detail you give, the quicker the AI can pinpoint and fix it.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 1
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Step 3 – Cloud <span>→</span>
  </a>
</div>

`},{label:"3. Cloud",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Firebase Integration via MCP]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Now that the app is built and tested locally, it's time to connect it to the cloud. We'll ask the AI to create a Firebase project and store our URL link data in Firestore by invoking the <strong style="color: var(--text-primary);">Firebase MCP server</strong> — no manual Firebase Console clicks needed.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.25rem;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 What the Firebase MCP does</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">The Firebase MCP server gives Antigravity direct access to your Firebase account. When you run the prompt below, the AI will create the project, enable Firestore, configure authentication, and write security rules — all without you leaving your editor.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Prompt 1 — Simple & straightforward</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Start with this prompt. It should work well by invoking the Firebase MCP server and let the AI handle everything automatically:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 0.75rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">Now please upgrade it to use Firebase for cloud storage and Google Sign-In for login. Each user's notes should be private and automatically synced across all their devices. Keep the same design and features — just add the Firebase and Google Sign-In functionality on top.</pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.5rem;">
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">⚠️ If you encounter any issue with <strong style="color: var(--text-primary);">Firestore project setup</strong>, don't worry — use <strong style="color: var(--text-primary);">Prompt 2</strong> below instead. It gives the AI explicit step-by-step MCP instructions to resolve it.</p>
</div>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Prompt 2 — Detailed MCP fallback</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Use this if Prompt 1 runs into issues. It walks the AI through each Firebase MCP step explicitly:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.25rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">/firebase_init. Use the Firebase MCP tools to create a new project called 'ZenShelf Tracker'. Create a Firestore database in the '(default)' instance (region: us-east1). Integrate Google Sign-In so each user has their own private workspace. Replace local storage with Cloud Firestore for real-time synchronization. Implement Security Rules so users can ONLY access their own data. Finally, use the 'Agent Skills' to ensure the code follows Firebase best practices for React 19.

Follow these steps:

1) Check API Status: Ensure firestore.googleapis.com is enabled for the project. If not, use gcloud or the Google Cloud Console to enable it before proceeding.

2) Create Instance: Create a Firestore Native database named (default) in the us-east1 region.

3) Sync Environment: Update the Firebase CLI/MCP environment to target [PROJECT_ID] explicitly.

4) Initialize Files: Create a firebase.json pointing to a firestore.rules file.
   Create firestore.rules with a base rules_version = '2' and user-scoped match blocks (avoid using ?? syntax).

5) Deploy: Run firebase deploy --only firestore to release the rules.

6) SDK Config: Provide the full Web SDK config object and update the local firebase.js file.</pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.25rem;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">What Antigravity will set up for you</p>
  <ul style="margin: 0.4rem 0 0 1.25rem; color: var(--text-secondary); line-height: 1.9;">
    <li>A new Firebase project named <strong style="color: var(--text-primary);">ZenShelf Tracker</strong></li>
    <li>A Firestore database in <strong style="color: var(--text-primary);">us-east1</strong> for storing URL entries</li>
    <li><strong style="color: var(--text-primary);">Google Sign-In</strong> so every user gets a private workspace</li>
    <li>Firestore <strong style="color: var(--text-primary);">Security Rules</strong> that restrict each user to their own data</li>
    <li>Code updated to follow <strong style="color: var(--text-primary);">Firebase best practices for React 19</strong></li>
  </ul>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0;">
  <p style="margin: 0 0 0.6rem; font-weight: 600; color: var(--text-primary);">After the MCP finishes</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">After MCP completes the setup, we need to enable Google Sign-In authentication for the app. Open the <strong style="color: var(--text-primary);"><a href="https://console.firebase.google.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">Firebase Console</a></strong>, select your project, and follow these steps:</p>
  <ol style="margin: 0 0 0.75rem 1.25rem; color: var(--text-secondary); line-height: 1.9;">
    <li>Go to <strong style="color: var(--text-primary);">Security → Authentication</strong></li>
    <li>Click <strong style="color: var(--text-primary);">Get started</strong></li>
    <li>Select the <strong style="color: var(--text-primary);">Sign-in method</strong> tab</li>
    <li>Click <strong style="color: var(--text-primary);">Google</strong></li>
    <li>Toggle it to <strong style="color: var(--text-primary);">Enabled</strong> and click <strong style="color: var(--text-primary);">Save</strong></li>
  </ol>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Now when you reload the app with <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">npm run dev</code>, you will see a <strong style="color: var(--text-primary);">Sign-in Screen</strong> asking you to authenticate with your Google account. Once signed in, your URL data will sync to Firestore in real time.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 2
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Step 4 – Deploy <span>→</span>
  </a>
</div>
`},{label:"4. Deploy",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Deploy to GitHub Pages]</strong>

<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary);">Now that the app is complete and Firebase-integrated, let's publish it to the web using <strong style="color: var(--text-primary);">GitHub Pages</strong> — free, fast hosting straight from your repository.</p>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 1 — Create a GitHub Repository</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Go to <a href="https://github.com/" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">github.com</a> and create a new repository named <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">url-content-tracker</code>. Leave it public and don't add a README.</p>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 2 — Enable GitHub Pages</p>
<p style="margin-bottom:0.4rem; line-height:1.75; color: var(--text-secondary);">In your new repository, go to <strong style="color: var(--text-primary);">Settings → Pages</strong> and set the source to <strong style="color: var(--text-primary);">Deploy from a GitHub Actions</strong> workflow.</p>

<hr style="border: none; border-top: 1px solid var(--border-color); margin: 1.25rem 0;">

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 3 — Push the Code to GitHub</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">In your terminal, run the following to upload the app to your repository:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">git init
git remote add origin https://github.com/&lt;your-username&gt;/url-content-tracker.git
git add . && git commit -m "initial release" && git push -u origin main</pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.25rem;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">💡 What triggers the deployment</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">Once you push, the <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.yml</code> workflow file located in <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.github/workflows/</code> will automatically run and build + deploy the app to GitHub Pages.</p>
  <p style="margin: 0 0 0.5rem; color: var(--text-secondary); line-height: 1.75;"><strong style="color: var(--text-primary);">Don't see a <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.yml</code> file?</strong> Ask Antigravity to create one using this prompt:</p>
  <pre style="display: block; padding: 0.85rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">I have a react app that builds to the dist folder. I want to deploy it on GitHub Pages using GitHub Actions. What additional files (workflow files, configuration, etc.) are required to enable automatic deployment?</pre>
</div>

<p style="margin-bottom:0.35rem; font-weight: 700; color: var(--text-primary); font-size: 1rem;">Step 4 — Check the Actions Tab</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Go to your repository on GitHub and click the <strong style="color: var(--text-primary);">Actions</strong> tab. You'll see the workflow running. Wait for it to show a green ✅ checkmark.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Important Firebase step</p>
  <p style="margin: 0 0 0.75rem; color: var(--text-secondary); line-height: 1.75;">After the GitHub Actions deployment completes, go to your project in <strong style="color: var(--text-primary);">Google Firebase</strong>, then open <strong style="color: var(--text-primary);">Security → Authentication → Settings → Authorized domains</strong>.</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Click <strong style="color: var(--text-primary);">Add domain</strong>, enter <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">&lt;your-github-username&gt;.github.io</code>, save it as an authorized domain in Firebase, and then visit your app.</p>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1.25rem 0 0;">
  <p style="margin: 0 0 0.4rem; font-weight: 600; color: var(--text-primary);">Your app is live!</p>
  <p style="margin: 0; color: var(--text-secondary); line-height: 1.75;">Visit your app at:<br><a href="#" style="color: var(--accent-primary); text-decoration: underline; font-family: monospace;">https://&lt;your-username&gt;.github.io/url-content-tracker</a></p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 3
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Bonus <span>→</span>
  </a>
</div>
`},{label:"Bonus",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Bonus — Showcase Your Tech Stack]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Want to show off the technologies powering your app? Use the prompt below to ask Antigravity to add a professional 'Tech Stack' modal to your navigation bar. It will dynamically read your <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">package.json</code> and display a beautiful, themed dialog with icons and descriptions.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">Please add a 'Tech Stack' button to the main Header/Navigation component of this project.

Requirements:

1. Placement: Place the button in the top navigation bar, ideally next to the theme toggle or user settings. It should blend in with the existing UI aesthetics (e.g., using a ghost, text, or outline variant).

2. Icon: Include a code-related icon (like &lt;Code /&gt; or &lt;/&gt;) inside the button next to the 'Tech Stack' label.

3. Interactivity: When clicked, the button should open a centered Modal/Dialog component. The background behind the modal should be slightly dimmed or blurred to focus the user's attention.

4. Modal Styling: The modal should match the application's current theme (supporting both light and dark mode automatically). It should have rounded corners, a subtle drop shadow, and a close ('X') button in the top right.

5. Modal Content:
- Header: Set the title to 'Project Tech Stack'.
- Introductory Text: Add a short description at the top: 'This app is built using the following technologies:'.
- List of Technologies: Display a stacked vertical layout. Each item in the list should represent a core technology used in this project.
- List Item Layout: For each technology, display:
  - An appropriate icon or logo on the left (with a subtle colored background box or tint if possible).
  - The name of the technology in a bold font.
  - A brief, one-sentence description of what that technology handles in the app (e.g., 'Fast, modern, component-driven UI framework').

6. Implementation: Please dynamically read the project's dependency file (like package.json) to accurately list the primary frontend framework, CSS/UI library, animation library, and any hosting/deployment pipelines currently configured. Build this using the UI components and icons already available in the project.</pre>

<div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.25rem 0; align-items: center;">
  <img src="/knowledgelab/images/tech-stack.png" alt="Tech Stack Modal Preview" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 8px 32px rgba(0,0,0,0.3); object-fit: cover;">
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 4
  </a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">
    Next: Resources <span>→</span>
  </a>
</div>


`},{label:"Resources",content:`<div style="background: #0d0d12; border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; font-family: 'JetBrains Mono', monospace; box-shadow: 0 20px 40px rgba(0,0,0,0.4); margin: 0;">
  <!-- Terminal Header -->
  <div style="background: rgba(255,255,255,0.05); padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--border-color);">
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #ff5f56;"></div>
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #ffbd2e;"></div>
    <div style="width: 10px; height: 10px; border-radius: 50%; background: #27c93f;"></div>
    <span style="margin-left: 0.5rem; font-size: 0.75rem; color: var(--text-secondary); opacity: 0.8;">zsh — build-ui</span>
  </div>
  
  <!-- Terminal Body -->
  <div style="padding: 1.5rem 1.5rem 0.75rem; line-height: 1.6;">
    <div style="margin-bottom: 1.5rem;">
      <p style="color: #ae81ff; margin-bottom: 0.5rem; font-weight: bold;">[01] AI Agent Skills for Firebase</p>
      <p style="color: #a0a0b0; font-size: 0.9rem; margin-bottom: 0.5rem;">Learn how to add Firebase expertise to your AI agents (Antigravity, Claude Code, etc.).</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #27c93f;">➜</span> 
        <a href="https://firebase.google.com/docs/ai-assistance/agent-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-size: 0.85rem; word-break: break-all;">https://firebase.google.com/docs/ai-assistance/agent-skills</a>
      </div>
    </div>
    
    <div style="margin-bottom: 1.5rem;">
      <p style="color: #ae81ff; margin-bottom: 0.5rem; font-weight: bold;">[02] Firebase MCP Server</p>
      <p style="color: #a0a0b0; font-size: 0.9rem; margin-bottom: 0.5rem;">Official Model Context Protocol server for managing Firebase projects.</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #27c93f;">➜</span> 
        <a href="https://firebase.google.com/docs/ai-assistance/mcp-server" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-size: 0.85rem; word-break: break-all;">https://firebase.google.com/docs/ai-assistance/mcp-server</a>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <p style="color: #ae81ff; margin-bottom: 0.5rem; font-weight: bold;">[03] Gemini CLI Firebase Extension</p>
      <p style="color: #a0a0b0; font-size: 0.9rem; margin-bottom: 0.5rem;">Integrate Firebase project management directly into your Gemini CLI.</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #27c93f;">➜</span> 
        <a href="https://firebase.google.com/docs/ai-assistance/gcli-extension" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-size: 0.85rem; word-break: break-all;">https://firebase.google.com/docs/ai-assistance/gcli-extension</a>
      </div>
    </div>

    <div style="margin-bottom: 0;">
      <p style="color: #ae81ff; margin-bottom: 0.5rem; font-weight: bold;">[04] Blog: AI Agent Skills for Firebase</p>
      <p style="color: #a0a0b0; font-size: 0.9rem; margin-bottom: 0.5rem;">The official announcement and vision for AI-powered Firebase development.</p>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: #27c93f;">➜</span> 
        <a href="https://firebase.blog/posts/2026/02/ai-agent-skills-for-firebase" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-size: 0.85rem; word-break: break-all;">https://firebase.blog/posts/2026/02/ai-agent-skills-for-firebase</a>
      </div>
    </div>
    <div style="margin-top: 0.75rem;">
      <span style="color: #27c93f;">➜</span> <span style="color: #00f2ff;">~</span> 
      <span style="display: inline-block; width: 8px; height: 18px; background: var(--accent-primary); vertical-align: middle; margin-left: 4px; animation: terminal-blink 1s step-end infinite;"></span>
    </div>
  </div>
</div>

<style>
@keyframes terminal-blink {
  50% { opacity: 0; }
}
</style>

`}],interactiveType:"custom"},It={id:"claude-extension",title:"Claude Extension",category:"",tags:[],tabs:[{label:"Features",content:`
<style>
.cc-table-wrap { width:100%; margin-top:1.5rem; border-radius:12px; overflow: visible; }
.cc-table { width:100%; border-collapse:collapse; font-size:0.85rem; font-family:'Outfit', sans-serif; line-height:1.5; table-layout:auto; letter-spacing:0.01em; }
.cc-table th { padding:12px 12px;text-align:left;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;font-size:0.75rem;color:var(--text-secondary);border-bottom:1px solid var(--border-color);background:rgba(0,0,0,0.2) }
.cc-table td { padding:24px 12px;border-bottom:1px solid var(--border-color);vertical-align:top;color:var(--text-primary); }
.cc-table td p { margin: 0; padding: 0; line-height: 1.5; }
.cc-table td code { 
  vertical-align: top; 
  display: inline-block;
  padding: 0.15rem 0.4rem; 
  background: var(--syntax-bg); 
  border: 1px solid var(--border-color); 
  border-radius: 4px; 
  font-family: 'JetBrains Mono', monospace; 
  font-size: 0.85rem; 
  color: var(--accent-primary); 
  white-space: pre-wrap; 
  word-break: break-word; 
  overflow-wrap: break-word;
  line-height: 1.5;
  box-sizing: border-box;
}
.cc-table tr:last-child td { border-bottom:none }
.cc-table tr:hover td { background:var(--surface-hover) }
.badge { display:inline-block;padding:0 10px;border-radius:6px;font-size:0.8rem;font-weight:700;white-space:nowrap; border: 1px solid var(--border-color); letter-spacing: 0.02em; line-height: 24px; vertical-align: top; margin: 0; box-sizing: border-box; }
.doc-links { display:grid; gap: 4px; }
.doc-links a { font-size:0.85rem;color:var(--accent-primary);text-decoration:none;white-space:nowrap; transition: 0.2s ease; }
.doc-links a:hover { text-decoration:underline; opacity: 0.8; }
.doc-label { font-size:0.75rem;color:var(--text-secondary);display:block;margin:0;font-weight:700;letter-spacing:0.02em;padding:0;text-transform:uppercase; line-height: 26px; vertical-align: top; }

@media (max-width: 1024px) {
  .cc-table-wrap {
    overflow: visible;
  }

  .cc-table,
  .cc-table thead,
  .cc-table tbody,
  .cc-table tr,
  .cc-table th,
  .cc-table td {
    display: block;
  }

  .cc-table thead {
    display: none;
  }

  .cc-table tr {
    margin-bottom: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.12);
  }

  .cc-table td {
    padding: 0.9rem 1rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .cc-table td:last-child {
    border-bottom: none;
  }

  .cc-table td::before {
    content: attr(data-label);
    display: block;
    margin-bottom: 0.45rem;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--text-secondary);
  }

  .cc-table td p,
  .doc-label,
  .badge,
  .cc-table td code {
    height: auto;
    line-height: 1.5;
  }

  .doc-links {
    gap: 0.3rem;
  }

  .doc-links a {
    white-space: normal;
  }
}

:root.light-mode .cc-table th { background: rgba(0,0,0,0.03); }
:root.light-mode .badge { border-color: rgba(67, 52, 34, 0.2); }
</style>

<div class="cc-table-wrap">
<table class="cc-table">
<thead>
<tr>
<th>Feature</th>
<th>One-liner</th>
<th>What it stores</th>
<th>How to invoke</th>
<th>Best used for</th>
<th>Official docs</th>
</tr>
</thead>
<tbody>
<tr>
<td data-label="Feature"><span class="badge">Skills</span></td>
<td data-label="One-liner"><p>Teaches Claude how to handle specific tasks or workflows</p></td>
<td data-label="What it stores"><p>Instructions, scripts, reference files in a folder</p></td>
<td data-label="How to invoke"><p><code>/skill-name</code></p></td>
<td data-label="Best used for"><p>Codifying repeatable workflows: code review, deployments, doc generation</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://code.claude.com/docs/en/skills" target="_blank">Skills →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Commands</span></td>
<td data-label="One-liner"><p>Prompt shortcuts</p></td>
<td data-label="What it stores"><p>Single markdown file with prompt template</p></td>
<td data-label="How to invoke"><p><code>/command-name</code></p></td>
<td data-label="Best used for"><p>Quick prompt templates: /fix-bug, /explain-code, /summarize</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/slash-commands" target="_blank">Slash commands →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">MCP</span></td>
<td data-label="One-liner"><p>USB-C for AI — connects Claude to real data</p></td>
<td data-label="What it stores"><p>External tool definitions (21st.dev, Supadata, Stitch..)</p></td>
<td data-label="How to invoke"><p>Claude picks tools automatically</p></td>
<td data-label="Best used for"><p>Querying live databases, creating PRs, reading Slack, anything with real external state</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/mcp" target="_blank">MCP overview →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Hooks</span></td>
<td data-label="One-liner"><p>Scripts that fire automatically at lifecycle events</p></td>
<td data-label="What it stores"><p>Shell commands tied to events (PostToolUse etc.)</p></td>
<td data-label="How to invoke"><p>Never manually — fires automatically on event</p></td>
<td data-label="Best used for"><p>Auto-linting, blocking dangerous commands, desktop notifications, test gates</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/hooks-guide" target="_blank">Hooks guide →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Plugins</span></td>
<td data-label="One-liner"><p>Installable bundles containing all of the above (Skills, Commands, MCPs, Hooks)</p></td>
<td data-label="What it stores"><p>plugin.json manifest + skills/ agents/ hooks/ MCPs</p></td>
<td data-label="How to invoke"><p>All components auto-activate on install</p></td>
<td data-label="Best used for"><p>Sharing team setups, open-source toolkits, org-wide standards</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Discover</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/plugins" target="_blank">Find &amp; install plugins →</a>
    <span class="doc-label">Build</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/create-plugins" target="_blank">Create plugins →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Subagents</span></td>
<td data-label="One-liner"><p>Isolated mini-agents with their own context window</p></td>
<td data-label="What it stores"><p>Agent system prompt + tool/model config in YAML</p></td>
<td data-label="How to invoke"><p>Natural language or <code>/agents</code> menu</p></td>
<td data-label="Best used for"><p>Delegating heavy subtasks without polluting main session context</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/sub-agents" target="_blank">Subagents →</a>
  </div>
</td>
</tr>
<tr>
<td data-label="Feature"><span class="badge">Agent teams</span></td>
<td data-label="One-liner"><p>Multiple Claude sessions that collaborate and cross-check</p></td>
<td data-label="What it stores"><p>Defined through prompts; teams.json for fine-tuning</p></td>
<td data-label="How to invoke"><p>Prompt-driven; keyboard shortcuts to manage</p></td>
<td data-label="Best used for"><p>Large parallel work: security + perf + tests reviewing the same module</p></td>
<td data-label="Official docs">
  <div class="doc-links">
    <span class="doc-label">Guide</span>
    <a href="https://docs.anthropic.com/en/docs/claude-code/agent-teams" target="_blank">Agent teams →</a>
  </div>
</td>
</tr>
</tbody>
</table>
</div>
      `},{label:"Decision Flow",content:`
<div class="flowchart-embed" style="width: 100%; height: calc(100vh - 160px); min-height: 700px; overflow: hidden; background: var(--syntax-bg); border-radius: 12px; border: 1px solid var(--border-color);">
  <iframe src="/knowledgelab/flowchart.html" style="width: 100%; height: 100%; border: none;" title="Decision Flowchart" allow="fullscreen" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
</div>
      `}],interactiveType:"custom"},Pt={id:"claude-commands",title:"Claude Commands",description:`
<p style="margin-bottom:1rem; line-height:1.75;">Claude Commands (also called slash commands) are a feature of Claude Code. Think of them like custom keyboard shortcuts or macros, but for your AI workflow.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Instead of typing out a long, detailed instruction every time you want Claude to do something repetitive, you save that instruction as a simple Markdown file and call it up with a quick <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/command-name</code>.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style: italic; opacity: 0.8;"><strong>Real-world analogy:</strong> Imagine you always ask a new intern the same 5-step process to review code before every commit. Instead of explaining it every single time, you write it down once in a document and just say "follow the checklist." That document is a slash command.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Two Types of Commands</strong>
  <p style="margin-bottom:0.75rem;">Commands come in two main flavors:</p>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong style="color: var(--accent-secondary);">Built-in</strong> — Standard tools that ship with Claude Code for managing your session (like <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/clear</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/help</code>, etc.)</li>
    <li><strong style="color: var(--accent-secondary);">Custom</strong> — Commands you build yourself for your own repetitive workflows</li>
  </ul>
</div>

<p style="margin-bottom:1.5rem; line-height:1.75;">Commands can be stored in <strong>globally</strong> (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/commands/</code>) to work across all your projects, or inside a <strong>specific project's</strong> <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.claude/commands/</code> folder to share with teammates.</p>
<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 1 — Create a project-level command</strong>
  <p style="margin-bottom:0.5rem;">First, create the command directory:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">mkdir -p .claude/commands</pre>

  <p style="margin-top: 1rem; margin-bottom:0.5rem;">Then, create the command file:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">cat > .claude/commands/explain.md << 'EOF'
Explain the following code in simple English. Assume the reader knows the basics 
of the programming language but is new to this codebase. Show a one-paragraph summary, 
then a bullet list of what each major section does.

Code to explain:
$ARGUMENTS
EOF</pre>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 2 — Use it</strong>
  <p style="margin-bottom:0.5rem;">Typing the slash followed by the command name in Claude code:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.9rem;">/explain src/utils/logger.js</pre>
</div>

<div style="margin-top: 2rem;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Why Is This Useful?</strong>
  <p style="margin-bottom:1rem; line-height:1.75;">The real power is how slash commands turn a clunky, multi-step process into one quick action. Some popular uses include:</p>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/commit</code> — Claude analyzes your changes and writes a proper commit message</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/test</code> — runs your test suite and auto-fixes failures</li>
    <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/pr</code> — generates a pull request description from your recent commits</li>
  </ul>
</div>
<div style="height: 10rem;"></div>
  `,interactiveType:"custom"},Bt={id:"claude-subagents",title:"Claude Subagents",tabs:[{label:"Overview",content:`
        <p style="margin-bottom:1rem; line-height:1.75;">A subagent is an isolated Claude instance with its own context window. It takes a task, does the work, and returns only the result. Subagents are self-contained agents that operate with their own context windows. When Claude spawns a subagent, that assistant works independently to read files, explore code, or make changes. When it completes its task, the subagent returns only the relevant results to the main conversation.</p>
        
        <p style="margin-bottom:1rem; line-height:1.75;">Each subagent starts fresh, unburdened by the history of the conversation or invoked skills. Multiple subagents can run in parallel, and each can have different permissions: a research subagent might have read-only access, while an implementation subagent gets full editing capabilities.</p>

        <p style="margin-bottom:1.5rem; font-style: italic; color: var(--text-secondary); line-height:1.6;">
          Note: If you need multiple agents working in parallel and communicating with each other, see agent teams instead. Subagents work within a single session; agent teams coordinate across separate sessions.
        </p>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">When should you use subagents?</strong>
          <p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--text-secondary);">Certain categories of work benefit clearly from subagent delegation. Learning to recognize them makes the feature far more effective.</p>

          <div style="margin-bottom: 1.5rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Research-heavy tasks</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">When understanding how something works is a prerequisite to changing it, a subagent can explore the codebase and return a summary rather than dumping dozens of files into the conversation.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> Gathering context requires reading dozens of files.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> The main conversation stays clean, and synthesized findings arrive instead of raw content.</p>
          </div>

          <div style="margin-bottom: 1.5rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Multiple independent tasks</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">When fixing errors across several files, updating patterns in multiple components, or making changes that don't depend on each other, parallel subagents complete the task faster.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> Sub-tasks have no dependencies between them.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> Three subagents working simultaneously generally finish the task in less time.</p>
          </div>

          <div style="margin-bottom: 1.5rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Fresh perspective needed</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">When a task benefits from an unbiased look — like auditing code the main conversation just wrote — a subagent starts fresh, free from any assumptions baked into the current context.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> You want a second pair of eyes on work already done.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> Catches issues the main conversation might rationalize away.</p>
          </div>

           <div style="margin-bottom: 2rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Pipeline workflows</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">When a task has distinct phases (i.e., design, then implement, then test), each stage benefits from focused attention.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> Sequential stages with clear handoffs.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> Each subagent concentrates on its phase, without context from other stages creating noise.</p>
          </div>

          <div style="margin: 1.5rem 0; padding: 1rem 1.25rem; background: rgba(0, 242, 255, 0.05); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0;">
            <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
              <strong style="color: var(--accent-primary);">Pro-tip:</strong> When a task requires exploring ten or more files, or involves three or more independent pieces of work, that's a strong signal to direct Claude toward subagents.
            </p>
          </div>

          <div style="margin-bottom: 2rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Verification before committing</strong>
            <p style="margin-bottom: 0.75rem; line-height: 1.6; font-size: 0.95rem;">Before finalizing changes, an independent subagent can verify the implementation isn't overfitting to tests or missing edge cases.</p>
            <p style="margin-bottom: 0.35rem; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The signal:</strong> A second opinion is warranted before committing code.</p>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);"><strong style="color: var(--text-primary);">The benefit:</strong> Catches issues that familiarity with the code might obscure.</p>
          </div>
        </div>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">How is it Different From Everything Else?</strong>
          <p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--text-secondary);">Here's the mental model for all the pieces:</p>
          
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">CLAUDE.md</code> &mdash; Establish project context and conventions that Claude always knows
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">Slash Commands</code> &mdash; Create explicit shortcuts for workflows you want to trigger on demand
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">Subagents</code> &mdash; Offload parallel or isolated work to specialized agents
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">Hooks</code> &mdash; Enforce rules and automate repetitive actions at key lifecycle events
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">MCP</code> &mdash; Connect external systems and make their capabilities available as commands
            </li>
            <li style="margin-bottom: 1rem; line-height: 1.6;">
              <code style="color: var(--accent-primary); font-weight: bold;">Skills</code> &mdash; Define automatic behaviors that activate based on task context
            </li>
          </ul>
        </div>
      `},{label:"Invocation",content:`
        <div style="margin-bottom: 2.5rem;">
          <h2 style="margin-bottom: 1.5rem; color: var(--accent-primary); font-size: 1.4rem;">How to direct subagent usage</h2>
          <p style="margin-bottom: 1.5rem; line-height: 1.75;">Several methods exist for invoking subagents, ranging from simple conversation to automated workflows. The right starting point depends on the workflow, and sophistication can be layered on as patterns emerge.</p>
        </div>

        <div style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--text-primary); font-size: 1.2rem;">Conversational invocation</h3>
          <p style="margin-bottom: 1rem; line-height: 1.75;">The most flexible approach is simply asking Claude to use subagents in conversation. This works across all Claude Code interfaces: terminal, VS Code, JetBrains, the web, and desktop applications.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Natural language patterns that reliably invoke subagents include:</p>

          <ul style="margin: 0 0 1.5rem 0; padding-left: 1.5rem; line-height: 2;">
            <li style="margin-bottom: 0.5rem; color: var(--text-secondary); font-style: italic;">"Use a subagent to explore how authentication works in this codebase"</li>
            <li style="margin-bottom: 0.5rem; color: var(--text-secondary); font-style: italic;">"Have a separate agent review this code for security issues"</li>
            <li style="margin-bottom: 0.5rem; color: var(--text-secondary); font-style: italic;">"Research this in parallel. Check the API routes, database models, and frontend components simultaneously"</li>
            <li style="color: var(--text-secondary); font-style: italic;">"Spin up subagents to fix these TypeScript errors across the different packages"</li>
          </ul>

          <p style="margin-bottom: 1.5rem; line-height: 1.75;">Being explicit matters. Specify the scope, request parallel execution when tasks are independent, and describe the desired output.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">Here's an effective prompt structure:</p>

          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">Use subagents to explore this codebase in parallel:

1. Find all API endpoints and summarize their purposes
2. Identify the database schema and relationships
3. Map out the authentication flow

Return a summary of each, not the full file contents.</code>

          <p style="margin-bottom: 1.5rem; line-height: 1.75;">This prompt works because it clearly defines three independent tasks, explicitly requests parallel execution, and specifies the output format. Claude understands the intent and spawns appropriate subagents.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">Tips for effective conversational invocation include:</p>

          <ul style="margin: 0 0 1.5rem 0; padding-left: 1.5rem; line-height: 1.8; list-style: none;">
            <li style="margin-bottom: 1rem; padding-left: 0.5rem; border-left: 3px solid var(--accent-primary);">
              <strong style="color: var(--text-primary);">Scope tasks clearly.</strong> <span style="color: var(--text-secondary);">"Explore how payments work" beats "explore everything."</span>
            </li>
            <li style="margin-bottom: 1rem; padding-left: 0.5rem; border-left: 3px solid var(--accent-primary);">
              <strong style="color: var(--text-primary);">Request parallelization explicitly.</strong> <span style="color: var(--text-secondary);">Say "these can run in parallel" or "work on all three simultaneously."</span>
            </li>
            <li style="margin-bottom: 1rem; padding-left: 0.5rem; border-left: 3px solid var(--accent-primary);">
              <strong style="color: var(--text-primary);">Specify what should be returned.</strong> <span style="color: var(--text-secondary);">Summaries, specific findings, or recommendations. Naming the output format helps Claude deliver it.</span>
            </li>
            <li style="margin-bottom: 0; padding-left: 0.5rem; border-left: 3px solid var(--accent-primary);">
              <strong style="color: var(--text-primary);">Ask for fresh context when unbiased analysis matters.</strong> <span style="color: var(--text-secondary);">"Use a subagent that does not see our previous discussion" ensures clean evaluation.</span>
            </li>
          </ul>

          <div style="margin-top: 2rem; padding: 1rem 1.25rem; background: rgba(0, 242, 255, 0.05); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0;">
            <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
              <strong style="color: var(--accent-primary);">Pro-tip:</strong> When a subagent is taking a while, <code>Ctrl+B</code> sends it to the background. The conversation can continue while it runs, and results surface automatically when it finishes. The <code>/tasks</code> command shows anything running in the background.
            </p>
          </div>
        </div>

        <div style="margin-top: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">CLAUDE.md instructions</h3>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Custom subagents define who the specialists are. CLAUDE.md files define the rules for when Claude should reach for them. If every code review should go through a read-only subagent, or every architecture question should trigger a research pass first, CLAUDE.md is where that policy lives. Claude reads it at the start of every conversation, so the behavior stays consistent across sessions and teammates without anyone needing to remember to ask.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">CLAUDE.md is a good fit for subagent instructions when:</p>
          <ul style="margin: 0 0 1.5rem 1.5rem; line-height: 1.75; color: var(--text-secondary);">
            <li style="margin-bottom: 0.4rem;">Code reviews should always use read-only subagents</li>
            <li style="margin-bottom: 0.4rem;">The project has specific research patterns Claude should follow</li>
            <li style="margin-bottom: 0.4rem;">Consistent behavior is needed across team members and sessions</li>
          </ul>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Here's an example of a simple CLAUDE.md file that triggers a subagent given specific conditions:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">## Code review standards

When asked to review code, ALWAYS use a subagent with READ-ONLY access
(Glob, Grep, Read only). The review should ALWAYS check for:
- Security vulnerabilities
- Performance issues
- Adherence to project patterns in /docs/architecture.md

Return findings as a prioritized list with file:line references.</code>

          <p style="margin-bottom: 1rem; line-height: 1.75;">With the above CLAUDE.md file, every code review request automatically uses the defined pattern, eliminating the need to specify it each time.</p>

          <p style="margin-bottom: 2rem; line-height: 1.75; color: var(--text-secondary); font-size: 0.95rem;">For more on CLAUDE.md files, see Customizing Claude Code for your codebase: setting up a CLAUDE.md file and our Claude Code CLAUDE.md file docs.</p>
        </div>

        <div style="margin-top: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">Skills</h3>
          <p style="margin-bottom: 1rem; line-height: 1.75;">For complex multi-step workflows that run repeatedly, skills provide a reusable interface. Define a skill once in <code>.claude/skills/</code>, then invoke it with <code>/skill-name</code> or let Claude load it automatically when a task matches its description.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">Skills differ from CLAUDE.md files in scope. CLAUDE.md files are always loaded and shapes every interaction. A skill is loaded on demand, either because it was invoked explicitly or because Claude matched the current task to the skill's description field. That makes skills the right place for workflows that should be available but not applied to every prompt.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Skills fit well when:</p>
          <ul style="margin: 0 0 1.5rem 1.5rem; line-height: 1.75; color: var(--text-secondary);">
            <li style="margin-bottom: 0.4rem;">Certain actions get run regularly</li>
            <li style="margin-bottom: 0.4rem;">Different team members need access to the same complex operation</li>
            <li style="margin-bottom: 0.4rem;">Standardizing how certain tasks are performed across the team matters</li>
          </ul>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Here's an example of a deep-review skill for comprehensive code review:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;"># .claude/skills/deep-review/SKILL.md

---
name: deep-review
description: Comprehensive code review that checks security,
  performance, and style in parallel. Use when reviewing staged
  changes before a commit or PR.
---

Run three parallel subagent reviews on the staged changes:

1. Security review - check for vulnerabilities, injection risks,
   authentication issues, and sensitive data exposure
2. Performance review - check for N+1 queries, unnecessary iterations,
   memory leaks, and blocking operations
3. Style review - check for consistency with project patterns
   documented in /docs/style-guide.md

Synthesize findings into a single summary with priority-ranked issues.
Each issue should include the file, line number, and recommended fix.</code>

          <p style="margin-bottom: 1rem; line-height: 1.75;">In the code snippet above, <code>/deep-review</code> triggers a three-part subagent analysis on demand. Because the description mentions reviewing staged changes before commits, Claude can also reach for this skill automatically when that context comes up.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">A skill is a directory, not a single file. Alongside SKILL.md, it can hold templates Claude fills in, example outputs showing the expected format, or scripts Claude executes as part of the workflow. The legacy <code>.claude/commands/format</code> was a single flat file, so everything had to live in the prompt itself.</p>

          <p style="margin-bottom: 2rem; line-height: 1.75; color: var(--text-secondary); font-size: 0.95rem;">For more on using skills with Claude Code, see our Claude Code skills docs.</p>
        </div>

        <div style="margin-top: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">Hooks</h3>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks are user-defined shell commands, HTTP endpoints, or LLM prompts that execute automatically at specific points in Claude Code's lifecycle. Hooks can automate subagent workflows based on events. Hooks trigger on specific actions and run subagent tasks without manual invocation.</p>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Hooks are the right tool when:</p>
          <ul style="margin: 0 0 1.5rem 1.5rem; line-height: 1.75; color: var(--text-secondary);">
            <li style="margin-bottom: 0.4rem;">Every commit should be reviewed automatically before it's created</li>
            <li style="margin-bottom: 0.4rem;">Security checks should run without anyone remembering to ask</li>
            <li style="margin-bottom: 0.4rem;">CI-like quality gates belong in the local development process</li>
          </ul>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Here is an example of a Stop hook that blocks Claude from ending its turn until a test is passed:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/check-tests.sh"
          }
        ]
      }
    ]
  }
}</code>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">And the script at <code>.claude/hooks/check-tests.sh</code>:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">#!/bin/bash
INPUT=$(cat)
STOP_HOOK_ACTIVE=$(echo "$INPUT" | jq -r '.stop_hook_active // false')

# Don't loop forever — if we already blocked once this turn, let it through
if [ "$STOP_HOOK_ACTIVE" = "true" ]; then
  exit 0
fi

if ! npm test --silent > /dev/null 2>&1; then
  jq -n '{
    decision: "block",
    reason: "Tests are failing. Run \`npm test\` to see the failures and fix them before finishing."
  }'
  exit 0
fi

exit 0</code>

          <p style="margin-bottom: 1rem; line-height: 1.75;">When Claude finishes its turn, the Stop event fires. The script runs the test suite—if tests fail, it returns JSON with <code>decision: "block"</code> and a reason. Claude Code reads that, doesn't let Claude stop, and feeds the reason back into the conversation as instruction to keep working. The <code>stop_hook_active</code> guard at the top prevents infinite loops: if Claude is already continuing because of a previous stop-hook block, the script lets it exit.</p>

          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks represent the most automated approach to subagent orchestration. Conversational invocation or CLAUDE.md instructions are the better starting point; hooks come later, as workflows mature.</p>

          <p style="margin-bottom: 0; line-height: 1.75; color: var(--text-secondary); font-size: 0.95rem;">
            For complete hooks configuration, see
            <a href="https://claude.com/blog/how-to-configure-hooks" target="_blank" rel="noopener noreferrer">
              Claude Code power user customization: how to configure hooks
            </a>
            or
            <a href="https://code.claude.com/docs/en/hooks" target="_blank" rel="noopener noreferrer">
            our Claude Code hooks docs.
            </a>
          </p>

        </div>
      `},{label:"Scenario",content:`
        <div style="margin-bottom: 2.5rem;">
          <h2 style="margin-bottom: 1.5rem; color: var(--accent-primary); font-size: 1.4rem;">The Scenario</h2>
          <p style="margin-bottom: 1.5rem; line-height: 1.6;">You're an <strong>investigative journalist</strong> at the NYT or WSJ. Your editor walks over and says:</p>
          
          <blockquote style="margin: 0 0 2rem 0; padding: 1.25rem 1.5rem; background: var(--surface-color); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0; font-style: italic; line-height: 1.6; color: var(--text-primary);">
            "I need a full investigative piece on the surge in corporate bankruptcies this year &mdash; background research, court document analysis, expert source quotes, a competitor comparison on how we've covered it differently from the other paper, and a polished first draft ready for my desk by 4pm."
          </blockquote>

          <p style="margin-bottom: 2rem; line-height: 1.6;">Five distinct jobs. Let's break each one down.</p>

          <div style="margin: 2rem 0; display: flex; justify-content: center; background: rgba(0,0,0,0.2); border-radius: 12px; padding: 1rem;">
            <img src="/knowledgelab/images/subagent.png" alt="Claude Subagent Mental Model" style="width: 100%; max-width: 800px; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
          </div>
        </div>

        <div style="margin-bottom: 3rem;">
          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 1 &mdash; Background Research Sweep</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> Dig through hundreds of news articles, SEC filings, court records, and economic data from the past 18 months to build a factual foundation &mdash; key numbers, timelines, companies involved.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-primary); font-weight: bold;">Subagent</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> Imagine your intern spending three hours photocopying records and spreading 400 pages across your desk while you're trying to think about the story's angle. That's what happens in the main conversation. Instead, you send them to the archive room. They come back with a two-page brief: <em>"Here are the 12 biggest bankruptcies, the spike started in Q2, and here are the three root causes cited most often."</em> Your desk never got messy.</p>
          </div>

          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 2 &mdash; Court Document Analysis</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> Read through dense legal filings from 8 different bankruptcy cases &mdash; hundreds of pages of exhibits, creditor lists, and judge rulings &mdash; and extract only what's newsworthy.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-primary); font-weight: bold;">Subagent, running at the same time as Subtask 1</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> This is the same logic as the archive room, just a different room. Legal documents are noisy, repetitive, and long. You don't want to watch Claude read through boilerplate legalese line by line &mdash; you want the three sentences that matter. A separate colleague handles this simultaneously while the first is in the archive. Both report back at the same time. You've saved hours.</p>
          </div>

          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 3 &mdash; Competitor Coverage Comparison (NYT vs WSJ)</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> Pull recent articles from both papers on this topic, map out which angles each took, which sources each cited, and identify the gap your story can fill.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-primary); font-weight: bold;">Subagent, also in parallel</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> This is pure reading and comparing &mdash; mechanical work a researcher does, not you. You just need the conclusion: <em>"WSJ focused on retail sector bankruptcies; NYT covered the macro picture; neither has talked to a bankruptcy judge directly."</em> That one sentence tells you exactly what your story's edge is. The subagent read 30 articles to get you there. You read none of them.</p>
          </div>
        </div>

        <div style="margin-bottom: 3rem; border-top: 1px solid var(--border-color); padding-top: 3rem;">
          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(255, 0, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 4 &mdash; Drafting Expert Source Quotes</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> You have three economists and a bankruptcy judge lined up. Claude helps you draft the questions, then shape their responses into tight, attributed quotes that fit the story's narrative.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-magenta); font-weight: bold;">Main conversation</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> This is collaborative craft. You might say mid-draft: <em>"That quote is too academic &mdash; make it land harder"</em> or <em>"Actually, move the judge's quote to the lede."</em> This isn't a research job &mdash; it's a writing conversation between you and Claude. You want to see every sentence appear, react to it, and steer it. This belongs on your desk.</p>
          </div>

          <div style="margin-bottom: 2rem; padding: 1.5rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(255, 0, 255, 0.02);">
            <header style="margin-bottom: 1rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-primary);">Subtask 5 &mdash; Writing the First Draft</h3>
            </header>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>What needs to happen:</strong> Take all the assembled research and write the full 1,200-word article &mdash; lede, nut graf, supporting sections, kicker &mdash; in the publication's house style.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem;"><strong>Use subagent or main?</strong> &rarr; <span style="color: var(--accent-magenta); font-weight: bold;">Main conversation</span></p>
            <p style="margin-bottom: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);"><strong>Why in plain English:</strong> A first draft is not a research task. It's an act of judgment &mdash; choosing which fact leads, which source gets the second paragraph, what the story's emotional core is. You want to read it as it's being written, catch when Claude picks the wrong angle, and redirect in real time. This is the most important thing you're doing today. It stays on your desk.</p>
          </div>
        </div>

        <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
          <h3 style="margin-bottom: 1.5rem; color: var(--text-primary); font-size: 1.2rem;">The Journalist's Decision Table</h3>
          <div style="overflow-x: auto; margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
              <thead>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Task</th>
                  <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Where</th>
                  <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Research sweep (400+ sources)</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-primary); font-weight: bold;">Subagent</span></td>
                  <td style="padding: 1rem;">You want the summary, not the raw pile</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Court document analysis</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-primary); font-weight: bold;">Subagent</span></td>
                  <td style="padding: 1rem;">Dense, mechanical, run in parallel</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Competitor coverage comparison</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-primary); font-weight: bold;">Subagent</span></td>
                  <td style="padding: 1rem;">Pure reading work &mdash; just give me the gap</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Shaping expert quotes</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-magenta); font-weight: bold;">Main conversation</span></td>
                  <td style="padding: 1rem;">Iterative, craft-driven, needs your eye</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem;">Writing the first draft</td>
                  <td style="padding: 1rem;"><span style="color: var(--accent-magenta); font-weight: bold;">Main conversation</span></td>
                  <td style="padding: 1rem;">Too important &mdash; you guide every paragraph</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="padding: 1.5rem; background: rgba(0, 242, 255, 0.05); border: 1px solid var(--border-color); border-radius: 12px; text-align: center;">
            <h4 style="margin-bottom: 0.75rem; color: var(--accent-primary);">The Journalist's Golden Rule</h4>
            <p style="margin: 0; line-height: 1.6; font-size: 1.1rem; color: var(--text-primary);">
              If the task is about <strong>finding and filtering information</strong> &rarr; subagent. If the task is about <strong>judgment, voice, and craft</strong> &rarr; main conversation.
            </p>
            <p style="margin-top: 1rem; font-size: 0.95rem; color: var(--text-secondary); font-style: italic;">
              Research is the back office. Writing is the desk. Great journalism needs both &mdash; but they should never be in the same room at the same time.
            </p>
          </div>
        </div>
      `},{label:"Built-in",content:`
        <p>Claude Code includes several built-in subagents that are optimized for common engineering workflows:</p>

        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">1. Explore</strong>
          <p>A fast, read-only agent optimized for searching and analyzing codebases.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Tools:</strong> Read-only tools (no Write/Edit access)</li>
              <li><strong>Purpose:</strong> File discovery, code search, codebase exploration</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Claude delegates to Explore when it needs to search or understand a codebase without making changes. This keeps exploration results out of your main session context.</p>
        </div>
        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">2. Plan</strong>
          <p>A research-focused agent used during plan mode to gather context before presenting a plan.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Tools:</strong> Read-only tools</li>
              <li><strong>Purpose:</strong> Codebase research for planning</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Used when Claude needs to understand your codebase during a planning phase.</p>
        </div>

        <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Viewing Subagents</strong>
          
          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size: 1rem; color: var(--text-primary);">Option 1: The <code>/agents</code> command (recommended)</strong>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem;">Use the <code>/agents</code> slash command inside an interactive session to browse all available subagents.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">/agents</code>
          </div>

          <div>
            <strong style="display:block; margin-bottom:0.75rem; font-size: 1rem; color: var(--text-primary);">Option 2: The <code>claude agents</code> CLI command</strong>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem;">To list all configured subagents from the command line <em>without</em> starting an interactive session, run <code>claude agents</code>.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">claude agents</code>
          </div>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <h3 style="margin-bottom: 1.5rem; color: var(--accent-primary); font-size: 1.3rem;">Scenario: Adding a "Dark Mode Toggle" feature</h3>
          <p style="margin-bottom: 2rem; color: var(--text-secondary);">A real-world walkthrough of adding dark mode support to a React + Vite app using subagents.</p>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 1 — Explore: Understand the structure</strong>
            <p style="margin-bottom: 0.75rem;">Type this in your session:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> I want to add a dark mode toggle to this React + Tailwind app. Explore the codebase first.</code>
            <p style="line-height: 1.6;">Claude automatically delegates to the <strong>Explore</strong> subagent, which scans read-only:</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
              <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
                <li><code>vite.config.ts</code> — checks build setup</li>
                <li><code>tailwind.config.ts</code> — checks if <code>darkMode: 'class'</code> is set</li>
                <li><code>src/components/</code> — finds existing layout components</li>
                <li><code>src/App.tsx</code> — checks current theme integration</li>
              </ul>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-secondary);">It returns a concise summary, keeping your context clean.</p>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 2 — Plan: Design the implementation</strong>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> /plan Add a dark mode toggle button to the Navbar component with Tailwind dark: classes and localStorage persistence</code>
            <p style="margin-bottom: 0.75rem;">The <strong>Plan</strong> subagent researches and returns a structured plan:</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
              <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8;">
                <li>Update <code>tailwind.config.ts</code> → set <code>darkMode: 'class'</code></li>
                <li>Create <code>src/hooks/useDarkMode.ts</code> → toggle + sync</li>
                <li>Update <code>src/components/Navbar.tsx</code> → add toggle button</li>
                <li>Update <code>index.html</code> → prevent unstyled flash</li>
                <li>Update <code>.github/workflows/ci.yml</code> → add build check</li>
              </ol>
            </div>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 3 — Execute: Final Implementation</strong>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> Implement the dark mode plan we just approved</code>
            <p style="margin-bottom: 1rem;">Claude delegates this task to a General-purpose subagent. A capable agent for complex, multi-step tasks that require both exploration and action:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); font-size: 0.85rem; margin-bottom: 1rem;">// src/hooks/useDarkMode.ts
export function useDarkMode() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  return [dark, setDark] as const;
}</code>
            <p style="font-size: 0.95rem; line-height: 1.6;">CI/CD pipelines and complex configurations are handled automatically based on your project stack.</p>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Step 4 — Verify: Final Checks</strong>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">> Explore and confirm the dark: Tailwind classes are consistent</code>
            <p style="line-height: 1.6;"><strong>Explore</strong> conducts a targeted grep across <code>src/</code> to ensure visual consistency without touching files.</p>
          </div>

          <div style="margin-top: 3rem;">
            <strong style="display:block; margin-bottom:1rem; font-size:1.1rem; color: var(--text-primary);">Division of Work Summary</strong>
            <div style="max-width: 100%;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; border: 1px solid var(--border-color);">
                <thead>
                  <tr style="background: rgba(255, 255, 255, 0.05); border-bottom: 2px solid var(--border-color);">
                    <th style="text-align: left; padding: 1rem; color: var(--accent-primary);">Subagent</th>
                    <th style="text-align: left; padding: 1rem; color: var(--accent-primary);">Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 1rem; font-weight: bold;">Explore</td>
                    <td style="padding: 1rem; color: var(--text-secondary);">Analyzed tailwind/vite config and component tree.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 1rem; font-weight: bold;">Plan</td>
                    <td style="padding: 1rem; color: var(--text-secondary);">Produced the design and step-by-step technical plan.</td>
                  </tr>
                  <tr>
                    <td style="padding: 1rem; font-weight: bold;">General-purpose</td>
                    <td style="padding: 1rem; color: var(--text-secondary);">Implemented the hook, updated Navbar and CI workflows.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style="margin-top: 1.5rem; font-style: italic; color: var(--text-secondary); font-size: 0.9rem;">Claude routes to the right subagent automatically — no manual configuration needed for built-ins.</p>
          </div>
        </div>
      `},{label:"Create your own",content:`
        <p style="margin-bottom: 1.25rem; line-height: 1.75;">Custom subagents live as markdown files in <code>.claude/agents/</code> (project-level, shared with the team) or <code>~/.claude/agents/</code> (user-level, available across all projects). Each one gets its own system prompt, tool permissions, and optionally its own model.</p>

        <p style="margin-bottom: 2rem; line-height: 1.75;">Subagents are defined in Markdown files with YAML frontmatter. You can create them easily using the <code>/agents</code> command.</p>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">1) Open the subagents interface</strong>
          <p style="margin-bottom: 0.75rem;">In Claude Code, run:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">/agents</code>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">2) Choose a location</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Select <strong>Create new agent</strong>, then choose <strong>Personal</strong>. This saves the subagent to <code>~/.claude/agents/</code> so it’s available in all your projects.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">3) Generate with Claude</strong>
          <p style="margin-bottom: 1rem;">Select <strong>Generate with Claude</strong>. When prompted, describe the subagent:</p>
          <div style="padding: 1rem; background: var(--surface-color); border: 1px dashed var(--accent-primary); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; font-style: italic; color: var(--text-secondary);">
            "A code improvement agent that scans files and suggests improvements for readability, performance, and best practices. It should explain each issue, show the current code, and provide an improved version."
          </div>
          <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-tertiary);">Claude generates the identifier, description, and system prompt for you.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">4) Select tools</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">For a read-only reviewer, deselect everything except <strong>Read-only tools</strong>. If you keep all tools selected, the subagent inherits all tools available to the main conversation.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">5) Select model</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Choose which model the subagent uses. For this example agent, select <strong>Sonnet</strong>, which balances capability and speed for analyzing code patterns.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">6) Choose a color</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Pick a background color for the subagent. This helps you identify which subagent is running in the UI.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">7) Configure memory</strong>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">Select <strong>User scope</strong> to give the subagent a persistent memory directory at <code>~/.claude/agent-memory/</code>. The subagent uses this to accumulate insights across conversations. Select <strong>None</strong> if you don’t want the subagent to persist learnings.</p>
        </div>

        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">8) Save and try it out</strong>
          <p style="margin-bottom: 1rem;">Review the configuration summary. Press <code>s</code> or <code>Enter</code> to save. The subagent is available immediately. Try it:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">Use the code-improver agent to suggest improvements for the file "index.html"</code>
          
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">⏺ code-improver(Review index.html for improvements)
  ⎿  Done (3 tool uses · 18.2k tokens · 1m 38s)
  (ctrl+o to expand)

⏺ The code-improver agent completed its review of index.html. Here's a summary:

  Key Findings

  Total Issues Found: 12
  - High Priority: 6 (Accessibility, SEO, Icons, Landmarks, Forms, Modals)
  - Medium Priority: 3 (Timer accessibility, Modal overlays, Element clarity)
  - Low Priority: 3 (DOCTYPE case, Quote consistency, Data attributes)

  Top Recommendations

  1. Accessibility — Add ARIA labels, roles, and states throughout (e.g., aria-label, role="dialog", aria-expanded)
  2. Icon Consistency — Replace Unicode emojis (🌙, ⏱️ , ✕) with inline SVGs for consistent rendering
  3. SEO Meta Tags — Add meta description, Open Graph tags, and Twitter Card meta tags
  4. Landmark Roles — Add role="main", role="navigation", role="banner" for screen reader navigation
  5. Modal Accessibility — Add role="dialog", aria-modal="true", and proper focus management

  CSS Additions Needed

  The review also suggests adding these CSS classes:
  .sr-only { /* Screen reader only text */ }
  .skip-link { /* Keyboard skip navigation */ }

  The code is structurally sound but needs accessibility improvements to meet WCAG 2.1 AA standards. Would you like me to implement any of these suggestions?</code>
          <p style="font-size: 0.95rem; line-height: 1.6;">Claude delegates to your new subagent, which scans the specific file and returns a detailed summary of findings and recommendations.</p>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">You now have a subagent you can use in any project on your machine to analyze codebases and suggest improvements.</p>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.9rem;">You can also create subagents manually as Markdown files, define them via CLI flags, or distribute them through plugins. The next sections covers few of the configuration options.</p>
        </div>

        <div style="margin-top: 2rem; padding: 1rem 1.25rem; background: rgba(0, 242, 255, 0.05); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
            <strong style="color: var(--accent-primary);">Pro-tip:</strong> The <code>description</code> field is what Claude uses to decide when to delegate. Be specific about the trigger conditions, not just the capability. <em>"Reviews code for security issues before commits"</em> routes better than <em>"security expert."</em>
          </p>
        </div>

        <p style="margin-top: 1.25rem; line-height: 1.75; font-size: 0.95rem; color: var(--text-secondary);">
          For the full configuration reference, including permission modes and how project and user subagents interact, see
          <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary); text-decoration: none; border-bottom: 1px solid currentColor;">Claude Code subagents docs</a>.
        </p>
      `},{label:"Config",content:`
        <div style="margin-top: 0.5rem;">
          <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">1. Choose the subagent scope</h3>
          <p style="margin-bottom: 1.5rem; line-height: 1.6;">Subagents are Markdown files with YAML frontmatter. Store them in different locations depending on scope. When multiple subagents share the same name, the higher-priority location wins.</p>
          
          <div style="margin-bottom: 2rem; max-width: 100%;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; border: 1px solid var(--border-color);">
              <thead>
                <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Location</th>
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Scope</th>
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Priority</th>
                  <th style="text-align: left; padding: 0.75rem; color: var(--accent-primary);">Creation</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">--agents CLI flag</td>
                  <td style="padding: 0.75rem;">Current session</td>
                  <td style="padding: 0.75rem;">1 (highest)</td>
                  <td style="padding: 0.75rem;">JSON via CLI</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">.claude/agents/</td>
                  <td style="padding: 0.75rem;">Current project</td>
                  <td style="padding: 0.75rem;">2</td>
                  <td style="padding: 0.75rem;">Interactive/Manual</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem; font-family: monospace;">~/.claude/agents/</td>
                  <td style="padding: 0.75rem;">All projects</td>
                  <td style="padding: 0.75rem;">3</td>
                  <td style="padding: 0.75rem;">Interactive/Manual</td>
                </tr>
                <tr>
                  <td style="padding: 0.75rem; font-family: monospace;">Plugin directory</td>
                  <td style="padding: 0.75rem;">Plugin enabled</td>
                  <td style="padding: 0.75rem;">4 (lowest)</td>
                  <td style="padding: 0.75rem;">Installed plugin</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="margin-bottom: 2rem;">
            <p style="margin-bottom: 1rem; line-height: 1.6;"><strong style="color: var(--text-primary);">Project subagents (.claude/agents/)</strong> are ideal for subagents specific to a codebase. Check them into version control so your team can use and improve them collaboratively.</p>
            <p style="margin-bottom: 2.5rem; line-height: 1.6;"><strong style="color: var(--text-primary);">User subagents (~/.claude/agents/)</strong> are personal subagents available in all your projects.</p>
          </div>

          <div style="margin-bottom: 2rem;">
            <h4 style="margin-bottom: 1rem; color: var(--accent-primary);">CLI-defined subagents</h4>
            <p style="margin-bottom: 1rem; line-height: 1.6;">CLI-defined subagents are passed as JSON when launching Claude Code. They exist only for that session and aren’t saved to disk, making them useful for quick testing or automation scripts. You can define multiple subagents in a single <code>--agents</code> call:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">claude --agents '{
  "code-reviewer": {
    "description": "Expert code reviewer. Use proactively after code changes.",
    "prompt": "You are a senior code reviewer. Focus on code quality, security, and best practices.",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  },
  "debugger": {
    "description": "Debugging specialist for errors and test failures.",
    "prompt": "You are an expert debugger. Analyze errors, identify root causes, and provide fixes."
  }
}'</code>
            <p style="margin-top: 1.5rem; line-height: 1.6;">The <code>--agents</code> flag accepts JSON with the same frontmatter fields as file-based subagents: <code>description</code>, <code>prompt</code>, <code>tools</code>, <code>disallowedTools</code>, <code>model</code>, <code>permissionMode</code>, <code>mcpServers</code>, <code>hooks</code>, <code>maxTurns</code>, <code>skills</code>, <code>initialPrompt</code>, <code>memory</code>, <code>effort</code>, <code>background</code>, and <code>isolation</code>. Use <code>prompt</code> for the system prompt, equivalent to the markdown body in file-based subagents.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">2. Create subagent manually</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Subagent files use YAML frontmatter for configuration, followed by the system prompt in Markdown. Subagents are loaded at session start. If you create a subagent by manually adding a file, restart your session or use <code>/agents</code> to load it immediately.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and provide
specific, actionable feedback on quality, security, and best practices.</code>

            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 1rem 0;">
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
                <li><strong style="color: var(--text-primary);">name:</strong> Unique identifier used to invoke the agent.</li>
                <li><strong style="color: var(--text-primary);">description:</strong> Crucial for Claude's routing; explain exactly when this agent should be used.</li>
                <li><strong style="color: var(--text-primary);">model:</strong> The specific Claude model to use for this agent.</li>
                <li><strong style="color: var(--text-primary);">tools:</strong> List of tools the agent can access (e.g., Read, Bash, Search).</li>
              </ul>
            </div>

            <div style="margin-top: 1.5rem;">
              <p style="margin-bottom: 0.75rem; color: var(--accent-primary); font-weight: bold;">Choose a model</p>
              <p style="margin-bottom: 0.75rem; line-height: 1.6;">The model field controls which AI model the subagent uses:</p>
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
                <li><strong style="color: var(--text-primary);">Model alias:</strong> Use one of the available aliases: <code>sonnet</code>, <code>opus</code>, or <code>haiku</code></li>
                <li><strong style="color: var(--text-primary);">Full model ID:</strong> Use a full model ID such as <code>claude-opus-4-6</code> or <code>claude-sonnet-4-6</code>.</li>
                <li><strong style="color: var(--text-primary);">inherit:</strong> Use the same model as the main conversation</li>
                <li><strong style="color: var(--text-primary);">Omitted:</strong> If not specified, defaults to <code>inherit</code>.</li>
              </ul>
            </div>

            <p style="margin-top: 1.5rem; line-height: 1.6;">The frontmatter defines the subagent’s metadata and configuration. The body becomes the system prompt that guides the subagent’s behavior. Subagents receive only this system prompt (plus basic environment details like working directory), not the full Claude Code system prompt.</p>

            <div style="margin-top: 1.5rem;">
              <h4 style="margin-bottom: 0.75rem; color: var(--accent-primary);">Plugin subagents</h4>
              <p style="line-height: 1.6; color: var(--text-secondary);">Plugin subagents come from plugins you’ve installed. They appear in <code>/agents</code> alongside your custom subagents. See the plugin components reference for details on creating plugin subagents.</p>
            </div>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">3. Control subagent capabilities</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">You can control what subagents can do through tool access, permission modes, and conditional rules.</p>
            
            <div style="margin-top: 1rem;">
              <h4 style="margin-bottom: 0.5rem; color: var(--accent-primary);">Available tools</h4>
              <p style="margin-bottom: 0.75rem; line-height: 1.6; color: var(--text-secondary);">Subagents can use any of Claude Code’s internal tools. By default, subagents inherit all tools from the main conversation, including MCP tools.</p>
              
              <p style="margin-bottom: 0.75rem; line-height: 1.6;">To restrict tools, use either the <code>tools</code> field (allowlist) or the <code>disallowedTools</code> field (denylist). This example uses <code>tools</code> to exclusively allow Read, Grep, Glob, and Bash:</p>
              <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: safe-researcher
description: Research agent with restricted capabilities
tools: Read, Grep, Glob, Bash
---</code>

              <p style="margin-top: 1.25rem; margin-bottom: 0.75rem; line-height: 1.6;">This example uses <code>disallowedTools</code> to inherit every tool from the main conversation except Write and Edit:</p>
              <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: no-writes
description: Inherits every tool except file writes
disallowedTools: Write, Edit
---</code>
              <p style="margin-top: 1rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">If both are set, <code>disallowedTools</code> is applied first, then <code>tools</code> is resolved against the remaining pool. A tool listed in both is removed.</p>
            </div>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">4. Scope MCP servers to a subagent</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Use the <code>mcpServers</code> field to give a subagent access to MCP servers that aren’t available in the main conversation. Inline servers defined here are connected when the subagent starts and disconnected when it finishes. String references share the parent session’s connection.</p>
            
            <p style="margin-bottom: 1rem; line-height: 1.6;">Each entry in the list is either an inline server definition or a string referencing an MCP server already configured in your session:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: browser-tester
description: Tests features in a real browser using Playwright
mcpServers:
  # Inline definition: scoped to this subagent only
  - playwright:
      type: stdio
      command: npx
      args: ["-y", "@playwright/mcp@latest"]
  # Reference by name: reuses an already-configured server
  - github
---</code>
            <p style="margin-top: 1rem; line-height: 1.6; color: var(--text-secondary);">To keep an MCP server out of the main conversation entirely and avoid its tool descriptions consuming context there, define it inline here rather than in <code>.mcp.json</code>. The subagent gets the tools; the parent conversation does not.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">5. Preload skills into subagents</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Use the <code>skills</code> field to inject skill content into a subagent’s context at startup. This gives the subagent domain knowledge without requiring it to discover and load skills during execution.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: api-developer
description: Implement API endpoints following team conventions
skills:
  - api-conventions
  - error-handling-patterns
---</code>
            <p style="margin-top: 1rem; line-height: 1.6; color: var(--text-secondary);">The full content of each skill is injected into the subagent’s context, not just made available for invocation. Subagents don’t inherit skills from the parent conversation; you must list them explicitly.</p>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
            <h3 style="margin-bottom: 1rem; color: var(--accent-primary); font-size: 1.2rem;">6. Enable persistent memory</h3>
            <p style="margin-bottom: 1rem; line-height: 1.6;">The <code>memory</code> field gives the subagent a persistent directory that survives across conversations. Use this to build up knowledge over time, such as codebase patterns and architectural decisions.</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: code-reviewer
description: Reviews code for quality and best practices
memory: user
---</code>

            <div style="margin: 1.5rem 0; max-width: 100%;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; border: 1px solid var(--border-color);">
                <thead>
                  <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
                    <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Scope</th>
                    <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Location</th>
                    <th style="padding: 0.75rem; text-align: left; color: var(--accent-primary);">Use when...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.75rem; font-family: monospace;">user</td>
                    <td style="padding: 0.75rem; font-size: 0.8rem;">~/.claude/agent-memory/&lt;name&gt;/</td>
                    <td style="padding: 0.75rem;">Learn across all projects</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.75rem; font-family: monospace;">project</td>
                    <td style="padding: 0.75rem; font-size: 0.8rem;">.claude/agent-memory/&lt;name&gt;/</td>
                    <td style="padding: 0.75rem;">Shareable via version control</td>
                  </tr>
                  <tr>
                    <td style="padding: 0.75rem; font-family: monospace;">local</td>
                    <td style="padding: 0.75rem; font-size: 0.8rem;">.claude/agent-memory-local/&lt;name&gt;/</td>
                    <td style="padding: 0.75rem;">Project-specific, not shared</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="padding: 1rem; background: var(--surface-color); border-radius: 4px; margin-top: 1.5rem;">
              <h4 style="margin-bottom: 0.75rem; color: var(--accent-primary);">Memory mechanics</h4>
              <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.8; font-size: 0.9rem; color: var(--text-secondary);">
                <li>Automated context: Includes the first 200 lines of <code>MEMORY.md</code> at startup.</li>
                <li>Self-management: <code>Read</code>, <code>Write</code>, and <code>Edit</code> tools are auto-enabled for memory management.</li>
                <li>Proactive learning: Instruct your agent to update its memory in its markdown prompt.</li>
              </ul>
            </div>

            <div style="margin-top: 2rem; padding: 1.25rem; background: rgba(0, 242, 255, 0.03); border: 1px solid rgba(0, 242, 255, 0.1); border-radius: 8px;">
              <p style="margin: 0; line-height: 1.6; font-size: 0.95rem; color: var(--text-secondary);">
                There are many more customizable subagent configurations available. For more details on advanced settings, check out the official documentation: 
                <a href="https://code.claude.com/docs/en/sub-agents#configure-subagents" target="_blank" style="color: var(--accent-primary); text-decoration: none; font-weight: bold; border-bottom: 1px dashed var(--accent-primary);">Configure Subagents</a>.
              </p>
            </div>
          </div>
        </div>
      `},{label:"Working with Subagents",content:`
        <div style="margin-bottom: 2.5rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Understand automatic delegation</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">Claude automatically delegates tasks based on the task description in your request, the description field in subagent configurations, and current context. To encourage proactive delegation, include phrases like <code style="padding: 0.15rem 0.35rem; background: var(--surface-color); border-radius: 4px; color: var(--accent-primary);">“use proactively”</code> in your subagent’s description field.</p>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Invoke subagents explicitly</strong>
          <p style="margin-bottom: 2rem; line-height: 1.6; color: var(--text-secondary);">When automatic delegation isn’t enough, you can request a subagent yourself using three main patterns:</p>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Option 1: Natural language</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Simply name the subagent in your prompt; Claude decides whether a subagent call is the most efficient way to proceed. There’s no special syntax required:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">Use the test-runner subagent to fix failing tests
Have the code-reviewer subagent look at my recent changes</code>
          </div>

          <div style="margin-bottom: 2.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Option 2: @-mention (Guaranteed invocation)</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Type <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px;">@</code> and pick the subagent or team from the typeahead. This ensures the correct context window and toolset are used:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">@agent sonnet look at the auth changes
@agent code-reviewer analyze this module</code>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">Your full message still goes to Claude, which writes the subagent’s task prompt based on what you asked. The @-mention controls which specialized context Claude invokes, not what prompt it receives.</p>
            <p style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; font-size: 0.9rem; color: var(--text-tertiary); line-height: 1.5;">Subagents provided by an enabled plugin appear in the typeahead as <code style="color: var(--accent-primary);">&lt;plugin-name&gt;:&lt;agent-name&gt;</code>. You can also type mentions manually: <code style="color: var(--accent-magenta);">@agent &lt;name&gt;</code> for agents, or <code style="color: var(--accent-magenta);">@agent &lt;team-name&gt;</code> for agent teams.</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Option 3: Session-wide (CLI flag)</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">Pass <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-keyword);">--agent &lt;name&gt;</code> to start a session where the main thread itself takes on that subagent’s system prompt, tool restrictions, and model:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">claude --agent code-reviewer</code>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">The subagent’s system prompt replaces the default Claude Code system prompt entirely. CLAUDE.md files and project memory still load normally. The agent name appears as <code style="color: var(--accent-primary);">@&lt;name&gt;</code> in the startup header so you can confirm it’s active.</p>
          </div>

          <div style="margin-top: 2rem;">
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem;">For quick access to your configured subagents, you can also use the <code style="padding: 0.2rem 0.4rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-keyword);">/agents</code> command to see a searchable list and select one to start a session.</p>
          </div>
        </div>

        <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Common patterns</strong>
          
          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Isolate high-volume operations</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">One of the most effective uses for subagents is isolating operations that produce large amounts of output. By delegating these to a subagent, the verbose output stays in the subagent’s context while only the relevant summary returns to your main conversation.</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-left: 3px solid var(--accent-primary); border-radius: 0 4px 4px 0; font-style: italic; font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
              "Use a subagent to run the test suite and report only the failing tests with their error messages"
            </div>
          </div>

          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Run parallel research</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">For independent investigations, spawn multiple subagents to work simultaneously:</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-left: 3px solid var(--accent-primary); border-radius: 0 4px 4px 0; font-style: italic; font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">
              "Research the authentication, database, and API modules in parallel using separate subagents"
            </div>
            <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">Each subagent explores its area independently, then Claude synthesizes the findings. This works best when the research paths don’t depend on each other. When subagents complete, their results return to your main conversation. Running many subagents that each return detailed results can consume significant context.</p>
            <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">For tasks that need sustained parallelism or exceed your context window, agent teams give each worker its own independent context.</p>
          </div>

          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--text-primary);">Chain subagents</strong>
            <p style="margin-bottom: 1rem; line-height: 1.6;">For multi-step workflows, ask Claude to use subagents in sequence. Each subagent completes its task and returns results to Claude, which then passes relevant context to the next subagent.</p>
            <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-left: 3px solid var(--accent-primary); border-radius: 0 4px 4px 0; font-style: italic; font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
              "Use the code-reviewer subagent to find performance issues, then use the optimizer subagent to fix them"
            </div>
          </div>

          <div style="margin-top: 3.5rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
            <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Choose between subagents and main conversation</strong>
            
            <p style="margin-bottom: 2rem; padding: 1rem 1.25rem; background: var(--surface-color); border-left: 4px solid var(--accent-primary); border-radius: 0 8px 8px 0; font-style: italic; line-height: 1.6; color: var(--text-secondary); font-size: 1rem;">
              "Think of your main conversation as your desk &mdash; the space where you do your main work and think clearly. A subagent is like sending a colleague to another room to do some research or grunt work. They go away, do the job, and come back with only the answer you need. Your desk stays clean the whole time."
            </p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
              <div style="padding: 1.25rem; background: rgba(0, 242, 255, 0.03); border: 1px solid rgba(0, 242, 255, 0.1); border-radius: 8px;">
                <h4 style="margin-bottom: 0.75rem; color: var(--text-primary); font-size: 1rem;">Use the main conversation when:</h4>
                <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">
                  <li style="margin-bottom: 0.5rem;">The task needs frequent back-and-forth or iterative refinement</li>
                  <li style="margin-bottom: 0.5rem;">Multiple phases share significant context (planning &rarr; implementation &rarr; testing)</li>
                  <li style="margin-bottom: 0.5rem;">You’re making a quick, targeted change</li>
                  <li>Latency matters (subagents start fresh and may need time to gather context)</li>
                </ul>
              </div>
              <div style="padding: 1.25rem; background: rgba(112, 0, 255, 0.03); border: 1px solid rgba(112, 0, 255, 0.1); border-radius: 8px;">
                <h4 style="margin-bottom: 0.75rem; color: var(--text-primary); font-size: 1rem;">Use subagents when:</h4>
                <ul style="margin: 0; padding-left: 1.2rem; line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary);">
                  <li style="margin-bottom: 0.5rem;">The task produces verbose output you don’t need in your main context</li>
                  <li style="margin-bottom: 0.5rem;">You want to enforce specific tool restrictions or permissions</li>
                  <li style="margin-bottom: 0.5rem;">The work is self-contained and can return a summary</li>
                  <li>You need to isolate environment variables or process state</li>
                </ul>
              </div>
            </div>

            <div style="padding: 1rem; background: var(--surface-color); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
              <p style="margin-bottom: 0.75rem;">Consider <strong style="color: var(--accent-primary);">Skills</strong> instead when you want reusable prompts or workflows that run in the main conversation context rather than isolated subagent context.</p>
              <p>For a quick question about something already in your conversation, use <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px;">/btw</code> instead of a subagent. It sees your full context but has no tool access, and the answer is discarded rather than added to history.</p>
            </div>
          </div>
        </div>
      `},{label:"Example",content:`
        <div style="margin-bottom: 3rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Documentation writer</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A complete example of a <code>doc-writer</code> subagent specialized for Python documentation:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: doc-writer
description: Writes Sphinx/Google-style documentation for Python modules
tools: Read
---
You write clear, accurate Python documentation. Given a module path via the task:

1. Read all .py files in the module
2. Generate module-level docstring
3. Generate class and function docstrings in Google style
4. Write a usage example section

Output ready-to-paste Python docstrings.</code>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Code reviewer</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A read-only subagent that reviews code without modifying it. This example shows how to design a focused subagent with limited tool access (no <code>Edit</code> or <code>Write</code>) and a detailed prompt that specifies exactly what to look for and how to format output.</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: code-reviewer
description: Expert code review specialist. Proactively reviews code for quality, security, and maintainability. Use immediately after writing or modifying code.
tools: Read, Grep, Glob, Bash
model: inherit
---

You are a senior code reviewer ensuring high standards of code quality and security.

When invoked:
1. Run git diff to see recent changes
2. Focus on modified files
3. Begin review immediately

Review checklist:
- Code is clear and readable
- Functions and variables are well-named
- No duplicated code
- Proper error handling
- No exposed secrets or API keys
- Input validation implemented
- Good test coverage
- Performance considerations addressed

Provide feedback organized by priority:
- Critical issues (must fix)
- Warnings (should fix)
- Suggestions (consider improving)

Include specific examples of how to fix issues.</code>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Debugger</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A subagent that can both analyze and fix issues. Unlike the code reviewer, this one includes <code>Edit</code> because fixing bugs requires modifying code. The prompt provides a clear workflow from diagnosis to verification.</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: debugger
description: Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when encountering any issues.
tools: Read, Edit, Bash, Grep, Glob
---

You are an expert debugger specializing in root cause analysis.

When invoked:
1. Capture error message and stack trace
2. Identify reproduction steps
3. Isolate the failure location
4. Implement minimal fix
5. Verify solution works

Debugging process:
- Analyze error messages and logs
- Check recent code changes
- Form and test hypotheses
- Add strategic debug logging
- Inspect variable states

For each issue, provide:
- Root cause explanation
- Evidence supporting the diagnosis
- Specific code fix
- Testing approach
- Prevention recommendations

Focus on fixing the underlying issue, not the symptoms.</code>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Data scientist</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A domain-specific subagent for data analysis work. This example shows how to create subagents for specialized workflows outside of typical coding tasks. It explicitly sets <code>model: sonnet</code> for more capable analysis.</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: data-scientist
description: Data analysis expert for SQL queries, BigQuery operations, and data insights. Use proactively for data analysis tasks and queries.
tools: Bash, Read, Write
model: sonnet
---

You are a data scientist specializing in SQL and BigQuery analysis.

When invoked:
1. Understand the data analysis requirement
2. Write efficient SQL queries
3. Use BigQuery command line tools (bq) when appropriate
4. Analyze and summarize results
5. Present findings clearly

Key practices:
- Write optimized SQL queries with proper filters
- Use appropriate aggregations and joins
- Include comments explaining complex logic
- Format results for readability
- Provide data-driven recommendations

For each analysis:
- Explain the query approach
- Document any assumptions
- Highlight key findings
- Suggest next steps based on data

Always ensure queries are efficient and cost-effective.</code>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Database query validator</strong>
          <p style="margin-bottom: 1rem; line-height: 1.6;">A subagent that allows Bash access but validates commands to permit only read-only SQL queries. This example shows how to use <code>PreToolUse</code> hooks for conditional validation when you need finer control than the <code>tools</code> field provides.</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">---
name: db-reader
description: Execute read-only database queries. Use when analyzing data or generating reports.
tools: Bash
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/validate-readonly-query.sh"
---

You are a database analyst with read-only access. Execute SELECT queries to answer questions about the data.

When asked to analyze data:
1. Identify which tables contain the relevant data
2. Write efficient SELECT queries with appropriate filters
3. Present results clearly with context

You cannot modify data. If asked to INSERT, UPDATE, DELETE, or modify schema, explain that you only have read access.</code>
          <p style="margin-top: 1.5rem; margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">Claude Code passes hook input as JSON via stdin to hook commands. The validation script reads this JSON, extracts the command being executed, and checks it against a list of SQL write operations. If a write operation is detected, the script exits with code 2 to block execution and returns an error message to Claude via stderr.</p>
          <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">Create the validation script anywhere in your project. The path must match the <code>command</code> field in your hook configuration:</p>
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">#!/bin/bash
# Blocks SQL write operations, allows SELECT queries

# Read JSON input from stdin
INPUT=$(cat)

# Extract the command field from tool_input using jq
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

if [ -z "$COMMAND" ]; then
  exit 0
fi

# Block write operations (case-insensitive)
if echo "$COMMAND" | grep -iE '\b(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|TRUNCATE|REPLACE|MERGE)\b' > /dev/null; then
  echo "Blocked: Write operations not allowed. Use SELECT queries only." >&2
  exit 2
fi

exit 0</code>
          <p style="margin-top: 1rem; margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">Make the script executable:</p>
          <code style="display: block; padding: 0.75rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5;">chmod +x ./scripts/validate-readonly-query.sh</code>
          <p style="margin-top: 1rem; line-height: 1.6; color: var(--text-tertiary); font-size: 0.9rem;">The hook receives JSON via stdin with the Bash command in <code>tool_input.command</code>. Exit code 2 blocks the operation and feeds the error message back to Claude. See <a href="#" style="color: var(--accent-primary);">Hooks</a> for details on exit codes and <a href="#" style="color: var(--accent-primary);">Hook input</a> for the complete input schema.</p>
        </div>
      `},{label:"Practical patterns",content:`
        <div style="margin-bottom: 0.5rem;">
          <p style="margin-bottom: 2rem; line-height: 1.75;">The following patterns demonstrate subagent direction applied to common scenarios.</p>

          <div style="margin-bottom: 3rem;">
            <h3 style="margin-bottom: 0.75rem; color: var(--accent-primary); font-size: 1.2rem;">Research before implementing</h3>
            <p style="margin-bottom: 1rem; line-height: 1.75;">When adding a feature to unfamiliar code, delegating research to a subagent first keeps the implementation discussion informed rather than exploratory, for example:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.25rem;">Before I implement user notifications, use a subagent to research:
- How are emails currently sent in this codebase?
- What notification patterns already exist?
- Where should new notification logic live based on the current architecture?

Summarize findings, then we'll plan the implementation together.</code>
            <p style="line-height: 1.75; color: var(--text-secondary);">A synthesized summary arrives instead of twenty files of raw context, and the implementation discussion starts from a solid foundation.</p>
          </div>

          <div style="margin-bottom: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <h3 style="margin-bottom: 0.75rem; color: var(--accent-primary); font-size: 1.2rem;">Parallel modifications</h3>
            <p style="margin-bottom: 1rem; line-height: 1.75;">When the same pattern needs updating across multiple files, parallel subagents finish faster and maintain focus, for example:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.25rem;">Use parallel subagents to update the error handling in these files:
- src/api/users.ts
- src/api/orders.ts
- src/api/products.ts

Each should follow the pattern established in src/api/auth.ts.
Work on all three simultaneously.</code>
            <p style="line-height: 1.75; color: var(--text-secondary);">Three subagents working in parallel complete in roughly the time one would take. Each focuses on its file without context from the others creating confusion or inconsistency.</p>
          </div>

          <div style="margin-bottom: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <h3 style="margin-bottom: 0.75rem; color: var(--accent-primary); font-size: 1.2rem;">Independent review</h3>
            <p style="margin-bottom: 1rem; line-height: 1.75;">After implementing something complex, verification from a subagent that hasn't been influenced by the implementation journey catches what familiarity obscures, for example:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.25rem;">Use a fresh subagent with read-only access to review my implementation of the payment flow. It should not see our previous discussion. I want an unbiased review.

Check for: security vulnerabilities, unhandled edge cases, and error handling gaps. Be critical.</code>
            <p style="line-height: 1.75; color: var(--text-secondary);">The review subagent evaluates the code without knowing what tradeoffs were considered, what approaches were rejected, or what assumptions were made. This outside perspective surfaces issues the main conversation might miss.</p>
          </div>

          <div style="padding-top: 2rem; border-top: 1px solid var(--border-color);">
            <h3 style="margin-bottom: 0.75rem; color: var(--accent-primary); font-size: 1.2rem;">Pipeline workflow</h3>
            <p style="margin-bottom: 1rem; line-height: 1.75;">For multi-stage tasks, chaining subagents with explicit handoffs between phases keeps each stage focused, for example:</p>
            <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1.25rem;">Let's build this feature as a pipeline:

1. First subagent: Design the API contract and write it to docs/api-spec.md
2. Second subagent: Implement the backend endpoints based on that spec
3. Third subagent: Write integration tests for the implementation

Each stage should complete before the next begins. Use the output
files as the handoff mechanism between stages.</code>
            <p style="line-height: 1.75; color: var(--text-secondary);">Using a pipeline workflow, each stage in the task receives focused context. The design subagent isn't distracted by implementation concerns, the implementation subagent works from a clean spec, and the testing subagent evaluates the result independently.</p>
          </div>
        </div>
      `}],interactiveType:"custom"},Lt={id:"claude-hooks",title:"Claude Hooks",tabs:[{label:"Overview",content:`
        <p style="margin-bottom:1rem; line-height:1.75;">Even a smooth Claude Code workflow accumulates friction points over time. Every time Claude writes a file, Prettier needs to run manually. Every time it runs npm test, the same permission prompt appears. Every session starts with pasting the same boilerplate project context into the first message.</p>

        <p style="margin-bottom:1rem; line-height:1.75;">The good news? <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank" style="color: var(--accent-primary);">Hooks</a> eliminate these friction points. They act as triggers you can configure to fire before or after certain actions, allowing you to inject custom logic, scripts, and commands directly into Claude's operations.</p>

        <p style="margin-bottom:2rem; line-height:1.75;">This article covers advanced configuration for developers already familiar with Claude Code basics. By the end of this article, you'll understand the eight hook types, when to use each one, how to configure them, and how to debug them when things go wrong.</p>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">What is a hook?</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">A hook is a custom shell command that you create to execute automatically when a targeted event occurs in your Claude Code session, such as when Claude is about to write a file or when you submit a prompt. You can designate hooks for a huge range of things: intercepting actions before they execute, injecting agent context, automating approvals, or blocking operations before they happen.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks are configured in your settings files using a JSON structure with event names, matchers (to filter which tools trigger the hook), and the commands to run. They execute in your local environment with your user permissions, receiving information about the triggering event via stdin and communicating back through exit codes and stdout. This gives you precise control over Claude Code behavior without modifying the tool itself.</p>
        </div>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Why use hooks in Claude Code?</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks solve three categories of problems.</p>

          <div style="margin-bottom: 1.25rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Eliminate repetitive manual steps</strong>
            <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">Instead of running your formatter after every file change, a PostToolUse hook handles it automatically. Instead of approving npm test for the hundredth time, a PermissionRequest hook auto-approves it.</p>
          </div>

          <div style="margin-bottom: 1.25rem; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Enforce project-specific rules automatically</strong>
            <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">You can block dangerous commands before they execute, validate file paths before writes, or ensure naming conventions are followed. These guardrails run every time, not only when you remember to check.</p>
          </div>

          <div style="margin-bottom: 0; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: 12px; background: rgba(0, 242, 255, 0.02);">
            <strong style="display:block; margin-bottom:0.5rem; font-size:1rem; color: var(--text-primary);">Inject dynamic context without manual effort</strong>
            <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">A SessionStart hook can feed Claude your current git status and TODO list. A UserPromptSubmit hook can append your sprint priorities to every request. Claude stays informed without you repeating yourself.</p>
          </div>
        </div>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Hook reference</strong>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; line-height: 1.6;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.65rem 1rem; color: var(--accent-primary); font-weight: 700; white-space: nowrap;">Hook</th>
                  <th style="text-align: left; padding: 0.65rem 1rem; color: var(--accent-primary); font-weight: 700;">When it fires</th>
                  <th style="text-align: left; padding: 0.65rem 1rem; color: var(--accent-primary); font-weight: 700;">Common uses</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PreToolUse</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Before a tool executes</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Block dangerous commands, validate file paths, auto-approve safe operations</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PermissionRequest</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Before a permission dialog appears</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Auto-approve test commands, block access to sensitive files</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PostToolUse</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">After a tool completes</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Run formatters, trigger linters, log file changes</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">PreCompact</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Before context compaction</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Back up transcripts, preserve important decisions</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">SessionStart</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When a session begins or resumes</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Inject git status, load TODO lists, set environment context</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color); background: rgba(0,242,255,0.02);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">Stop</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When Claude finishes responding</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Verify task completion, run tests, generate summaries</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">SubagentStop</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When a subagent completes</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Validate subagent output, trigger follow-up actions</td>
                </tr>
                <tr>
                  <td style="padding: 0.65rem 1rem; white-space: nowrap; font-family: monospace; color: var(--text-primary);">UserPromptSubmit</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">When you submit a prompt</td>
                  <td style="padding: 0.65rem 1rem; color: var(--text-secondary);">Inject sprint context, validate requests, add dynamic context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `},{label:"Hook Types",content:`
        <p style="margin-bottom:1.5rem; line-height:1.75;">Claude Code provides eight hook events that cover the full lifecycle of a session, from startup through tool execution to completion. Each fires at a specific moment, giving you precise control over when your automation runs. Choosing the right hook depends on what you want to accomplish.</p>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">PreToolUse</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">This is the most commonly used hook, firing after Claude chooses a tool to use but before the tool actually executes. Your script can inspect the planned action and approve it, block it, request user confirmation, or modify the parameters, using a matcher to filter which tools trigger this hook.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">This PreToolUse hook example evaluates file writes before they execute. Claude reviews the planned action against the specified criteria and can approve, block, or flag concerns based on the prompt logic.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/validate-file-path.sh"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use PreToolUse:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Blocking dangerous Bash commands like rm -rf or force pushes</li>
            <li>Auto-approving safe, repetitive operations to reduce prompt fatigue</li>
            <li>Validating file paths before writes to prevent accidental overwrites</li>
            <li>Modifying tool inputs to inject project-specific defaults</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">PermissionRequest</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">This hook fires when Claude would normally show a permission dialog. This hook intercepts the moment before you would see a confirmation prompt, letting your script decide whether to allow, deny, or still ask the user.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PermissionRequest": [
      {
        "matcher": "Bash(npm test*)",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/validate-test-command.sh"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">This example auto-approves any Bash command starting with npm test. The matcher pattern can include arguments for finer control.</p>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use PermissionRequest:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Auto-approving test commands you run dozens of times per session</li>
            <li>Blocking write access to production configuration files</li>
            <li>Allowing read operations on specific directories without prompts</li>
            <li>Denying any command that matches a dangerous pattern</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">PostToolUse</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires immediately after a tool completes successfully. Your script receives information about what happened, including the tool output, using matchers to filter which tools trigger it.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">This example of PostToolUse runs Prettier on any file Claude writes or edits. The pipe syntax in the matcher means it triggers for both Write and Edit tools.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "prettier --write \\"$CLAUDE_TOOL_INPUT_FILE_PATH\\""
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use PostToolUse:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Running Prettier, Black, or gofmt after every file write to enforce formatting</li>
            <li>Logging all file modifications to an audit trail</li>
            <li>Triggering linters and showing warnings after code changes</li>
            <li>Sending notifications when certain operations complete</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">PreCompact</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires before Claude compacts the conversation context to free up space. Compaction summarizes older parts of the conversation, which means some details get lost. This hook gives you a chance to preserve information before that happens.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">This PreCompact example backs up the transcript before automatic compaction. The matcher can be "auto" or "manual" so you can distinguish between automatic compaction and user-triggered compaction events.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PreCompact": [
      {
        "matcher": "auto",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/backup-transcript.sh"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use PreCompact:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Backing up the full transcript to a file before summarization</li>
            <li>Extracting and saving important decisions or code snippets</li>
            <li>Logging session milestones for later review</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">SessionStart</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires when Claude Code starts a new session or resumes an existing one. Whatever your script outputs gets added to the conversation context, so Claude starts with that information already loaded.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "git status --short &amp;&amp; echo '---' &amp;&amp; cat TODO.md"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">Every session starts with Claude knowing your current git status and TODO list. Stdout automatically becomes context.</p>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use SessionStart:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Feeding Claude your current git branch and recent commits</li>
            <li>Loading the contents of your TODO list or sprint backlog</li>
            <li>Injecting environment-specific configuration details</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">Stop</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires when Claude finishes responding and would normally wait for your next input. Your script can inspect what Claude produced and decide whether the task is truly complete.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">The script can return JSON with "continue": true to make Claude continue working, which is useful for multi-step workflows:</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Review whether the task is complete. If all requirements are met, respond with 'complete'. If work remains, respond with 'continue' and specify what still needs to be done."
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use Stop:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Forcing Claude to continue until all items in a checklist are done</li>
            <li>Verifying that tests pass before considering a task complete</li>
            <li>Triggering summary generation at the end of a session</li>
            <li>Checking that generated code compiles before stopping</li>
          </ul>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">SubagentStop</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">This hook fires whenever a subagent created via the Task tool finishes. Works the same way as Stop, but triggers specifically when a subagent completes its action (rather than the main agent). The configuration of SubagentStop mirrors the Stop hook structure:</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "SubagentStop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Evaluate the subagent's output. Verify the task was completed correctly and the results meet quality standards. If the output is satisfactory, respond with 'accept'. If issues exist, respond with 'reject' and explain what needs to be fixed."
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use SubagentStop:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Validating that subagent output meets quality criteria</li>
            <li>Triggering follow-up actions based on subagent results</li>
            <li>Logging subagent activity for debugging or auditing</li>
          </ul>
        </div>

        <div style="margin-bottom: 0; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:0.75rem; font-size:1.15rem; color: var(--accent-primary);">UserPromptSubmit</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Fires when you submit a prompt, before Claude processes it. Whatever your script outputs via stdout gets added to Claude's context along with your prompt, which makes UserPromptSubmit useful for dynamically injecting information that Claude should consider.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">In this example, every time you submit a prompt, Claude receives the contents of your sprint context file. This keeps Claude informed about current priorities without you needing to restate them.</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "cat ./current-sprint-context.md"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.9rem;">When to use UserPromptSubmit:</p>
          <ul style="margin: 0 0 0 1.25rem; line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">
            <li>Injecting current sprint context or project priorities with every prompt</li>
            <li>Validating prompts before they reach Claude</li>
            <li>Blocking certain types of requests based on content</li>
            <li>Adding dynamic context like recent error logs or test results</li>
          </ul>
        </div>
      `},{label:"Configuration",content:`
        <div style="margin-bottom: 2rem;">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Configuration and file locations</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks live in JSON settings files at three levels. Project-level hooks go in .claude/settings.json within your repository, making them shareable with your team. User-level hooks go in ~/.claude/settings.json and apply across all your projects. Local project hooks go in .claude/settings.local.json for personal configuration you don't want to commit.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Project-level settings take precedence over user-level settings. There are also enterprise-managed policy settings available for organizational control. For complete details, see the Claude Code settings information.</p>

          <div style="background: rgba(0, 242, 255, 0.06); border: 1px solid var(--accent-primary); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1.5rem;">
            <strong style="color: var(--accent-primary); font-size: 0.9rem;">💡 Pro tip</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">This is the same file where you can set granular permissions for Claude actions, at the project, user, or local levels. For example, you can explicitly allow Claude to read all files in a directory so that you don't have to approve it every time, or block any modification of sensitive files.</p>
          </div>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Matcher syntax</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Matchers are how you filter which tools can trigger your hook. They only apply to PreToolUse, PostToolUse, and PermissionRequest hooks.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.6;">Simple string matching works exactly as you'd expect: "Write" matches only the Write tool.</p>
          <p style="margin-bottom: 0.5rem; line-height: 1.6;">For example:</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "your-command-here"
          }
        ]
      }
    ]
  }
}</code></pre>
          <p style="margin-bottom: 1rem; line-height: 1.75;">The pipe syntax lets you match multiple tools: "Write|Edit" triggers for either, whereas wildcards match everything: "*" or an empty string matches all tools.</p>

          <div style="background: rgba(255, 193, 7, 0.06); border: 1px solid rgba(255, 193, 7, 0.4); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1.5rem;">
            <strong style="color: #f5c842; font-size: 0.9rem;">⚠️ Note</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">Matchers are case sensitive, so "bash" won't be matched to the Bash tool.</p>
          </div>

          <p style="margin-bottom: 1rem; line-height: 1.75;">For finer control, argument patterns like "Bash(npm test*)" can match specific command arguments. MCP tool patterns follow the format "mcp__memory__.*" for Model Context Protocol tools.</p>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">What hooks receive</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">All hooks receive JSON via stdin containing session information and event-specific data. Common fields include: session_id, transcript_path, cwd, permission_mode, and hook_event_name.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Additionally, tool-related hooks also receive tool_name and tool_input. This data lets your scripts make informed decisions about how to respond.</p>
        </div>

        <div style="margin-bottom: 0; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">How hooks respond</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Exit codes determine the basic outcome. Exit code 0 means success, and stdout either gets processed for JSON or added to context. Exit code 2 means a blocking error: stderr becomes the error message and the action gets prevented.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Other exit codes indicate non-blocking errors, with stderr shown in verbose mode.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Beyond exit codes, hooks can return structured JSON for more control. Fields include: decision (approve, block, allow, or deny), reason (explanation shown to Claude), continue (for Stop hooks to force continuation), and updatedInput (to modify tool parameters before execution).</p>
        </div>
      `},{label:"Security & Debugging",content:`
        <div style="margin-bottom: 2rem;">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Environment and execution</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks have access to environment variables, including: CLAUDE_PROJECT_DIR for the project root path, CLAUDE_CODE_REMOTE which is true for web environments, and CLAUDE_ENV_FILE for SessionStart hooks to persist variables. Standard environment variables from your shell are also accessible.</p>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Also of note: Hooks have a 60-second default timeout, configurable per hook. When multiple hooks match an event, they run in parallel. Identical commands are automatically deduplicated.</p>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Security considerations</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Hooks execute arbitrary shell commands with your user permissions. Claude Code includes a safeguard: direct edits to hook configuration files require review in the /hooks menu before taking effect. This prevents malicious code from silently adding hooks to your configuration.</p>
          <p style="margin-bottom: 1.25rem; line-height: 1.75;">However, if you configure and approve hooks, they will execute at your permission levels.</p>

          <div style="background: rgba(0, 242, 255, 0.06); border: 1px solid var(--accent-primary); border-radius: 10px; padding: 1.1rem 1.25rem; margin-bottom: 1.5rem;">
            <strong style="color: var(--accent-primary); font-size: 0.9rem;">💡 Pro tip</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">Before you run any commands in an environment, consider the risks. If you're going to run commands with hooks, consider good practices like: validating and sanitizing inputs from stdin, quoting shell variables to prevent injection, using absolute paths for scripts, and avoiding processing sensitive files like .env or credentials.</p>
          </div>
        </div>

        <div style="margin-bottom: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Debugging and testing</strong>
          <p style="margin-bottom: 1rem; line-height: 1.75;">Claude Code logs everything to transcript files, which provides visibility into tool calls and responses without any setup. Every hook receives a transcript_path field pointing to a JSONL file containing the full session history. You can use a SessionStart hook to log where each transcript lives:</p>

          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '"Session: " + .transcript_path' >> ~/.claude/sessions.log"
          }
        ]
      }
    ]
  }
}</code></pre>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Then tail that transcript to watch Claude work in real time:</p>
          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1.25rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">tail -f /path/to/transcript.jsonl | jq</code></pre>

          <p style="margin-bottom: 1rem; line-height: 1.75;">For hook-specific debugging, add logging to your hook scripts. The transcript files will show what Claude did, but not why your hook took the action to approve or block something.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.75;">With a little extra effort you can add a small bash script that will wrap your tools and log the additional information. For example, log-wrapper.sh:</p>

          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">#!/bin/bash
LOG=~/.claude/hooks.log
INPUT=$(cat)
TOOL=$(echo "$INPUT" | jq -r '.tool_name // "n/a"')
EVENT=$(echo "$INPUT" | jq -r '.hook_event_name // "n/a"')
echo "=== $(date) | $EVENT | $TOOL ===" >> "$LOG"
echo "$INPUT" | "$1"
CODE=$?
echo "Exit: $CODE" >> "$LOG"
exit $CODE</code></pre>

          <p style="margin-bottom: 0.75rem; line-height: 1.75;">This small wrapper script captures stdin into a variable, logs the timestamp and tool name, then pipes the input to your actual tool.</p>
          <p style="margin-bottom: 0.75rem; line-height: 1.75;">Once you have log-wrapper.sh written, you would then prepend it to the tool call in the hook:</p>

          <pre style="background: var(--syntax-bg, #0d1117); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; overflow-x: auto; margin-bottom: 1rem; font-size: 0.85rem; line-height: 1.6;"><code style="color: var(--text-primary);">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "log-wrapper.sh your-tool-command.py"
          }
        ]
      }
    ]
  }
}</code></pre>

          <div style="background: rgba(0, 242, 255, 0.06); border: 1px solid var(--accent-primary); border-radius: 10px; padding: 1.1rem 1.25rem;">
            <strong style="color: var(--accent-primary); font-size: 0.9rem;">💡 Pro tip</strong>
            <p style="margin: 0.5rem 0 0; line-height: 1.6; font-size: 0.95rem;">For more debugging tips, check out the <a href="https://code.claude.com/docs/en/debugging" target="_blank" style="color: var(--accent-primary);">Claude Code debugging documentation</a>.</p>
          </div>
        </div>
      `},{label:"Building your own",content:`
        <p style="margin-bottom:1.5rem; line-height:1.75;">Start with one simple hook that solves an actual friction point in your workflow. The PostToolUse formatter hook is a good first choice since the feedback is immediate and visible. Once that works, expand based on what you learn.</p>

        <p style="margin-bottom:1.5rem; line-height:1.75;">For complete reference documentation including all available fields and advanced patterns, see the <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank" style="color: var(--accent-primary);">official hooks documentation</a>.</p>

        <p style="margin-bottom:2rem; line-height:1.75;">Hooks let you shape Claude Code to match your workflow rather than adapting your workflow to the tool. When you invest in configuring hooks, it pays off every session.</p>

        <div style="padding-top: 2rem; border-top: 1px solid var(--border-color);">
          <strong style="display:block; margin-bottom:1rem; font-size:1.2rem; color: var(--accent-primary);">Hooks at a glance</strong>

          <div style="overflow-x: auto; margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color);">
                  <th style="text-align: left; padding: 0.75rem 1rem; color: var(--text-secondary); font-weight: 600; white-space: nowrap;">Hook</th>
                  <th style="text-align: left; padding: 0.75rem 1rem; color: var(--text-secondary); font-weight: 600;">When it fires</th>
                  <th style="text-align: left; padding: 0.75rem 1rem; color: var(--text-secondary); font-weight: 600;">Primary use</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">PreToolUse</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Before a tool executes</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Block, approve, or modify planned actions</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">PermissionRequest</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Before a permission dialog appears</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Auto-approve or deny permission requests</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">PostToolUse</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">After a tool completes</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Run formatters, linters, audit logs</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">PreCompact</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Before context compaction</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Back up transcripts, save decisions</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">SessionStart</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">When a session begins or resumes</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Inject git status, TODOs, environment info</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">Stop</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">When Claude finishes responding</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Verify task completion, force continuation</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">SubagentStop</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">When a subagent finishes</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Validate subagent output quality</td>
                </tr>
                <tr>
                  <td style="padding: 0.75rem 1rem; color: var(--accent-primary); font-weight: 600; white-space: nowrap;">UserPromptSubmit</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">When you submit a prompt</td>
                  <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Inject sprint context, validate prompts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style="margin-top: 1.5rem; line-height: 1.75; color: var(--text-secondary);">Start using hooks to customize your Claude Code workflows today. See the <a href="https://code.claude.com/docs/en/hooks-guide" target="_blank" style="color: var(--accent-primary);">official hooks documentation</a> for the full configuration reference.</p>
        </div>
      `}]},Rt={id:"claude-agents",title:"Claude Agents",category:"AI Tools",tags:["agents","multi-agent","orchestration","tutorial"],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;">Agent teams let you coordinate <strong>multiple Claude Code instances working together</strong>. One session acts as the team lead, coordinating work, assigning tasks, and synthesizing results. Teammates work independently, each in its own context window, and can communicate directly with each other.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    &#x1F5DE; Think of it like a newsroom
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">An <strong>editor-in-chief</strong> (the Team Lead) assigns three reporters to research different angles of a story <em>in parallel</em>. Each reporter works independently, then submits findings. The editor synthesizes everything into the final piece &mdash; simultaneously, not one at a time.</p>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-secondary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    &#x26A1; How this differs from Subagents
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">Unlike <a href="#" data-goto-concept="claude-subagents" style="color: var(--accent-primary); text-decoration: underline;">subagents</a> which run <em>inside</em> one session and only report back to the main agent, <strong>agent teammates are fully independent Claude Code sessions</strong> &mdash; each with its own context window, project files, and the ability to message other teammates directly. <strong>Agent teammates can communicate directly with each other</strong> and share a task list for coordination</p>
</div>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Prerequisites</h3>
<ul style="margin: 0 0 1.5rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;">Claude Code <strong>v2.1.32</strong> or later (<code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-text); font-family: monospace;">claude --version</code> to check)</li>
  <li style="margin-bottom: 0.25rem;">A terminal &mdash; macOS Terminal, iTerm2, or any Linux terminal</li>
  <li style="margin-bottom: 0.25rem;">Optional: <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-text); font-family: monospace;">tmux</code> for split-pane display (covered in Step 2)</li>
</ul>


<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">What You'll Build</h3>
<p style="margin-bottom:0.75rem; line-height:1.75;">A simple <strong>Research Team</strong> that works in parallel to analyze a topic from multiple angles. Perfect for learning because:</p>

<ul style="margin: 0 0 1.5rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;">✅ No coding required</li>
  <li style="margin-bottom: 0.25rem;">✅ Clear, measurable outputs</li>
  <li style="margin-bottom: 0.25rem;">✅ Easy to verify results</li>
  <li style="margin-bottom: 0.25rem;">✅ Demonstrates parallel coordination</li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">When to Use Agent Teams</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">&#x2705; Best For</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">&#x274C; Avoid When</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Research & review (parallel exploration)</td>
      <td style="padding: 0.75rem;">Sequential tasks with dependencies</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">New modules/features (separate files)</td>
      <td style="padding: 0.75rem;">Same-file edits (conflict risk)</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Debugging with competing hypotheses</td>
      <td style="padding: 0.75rem;">Routine tasks (token overhead)</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;">Cross-layer coordination (frontend/backend/tests)</td>
      <td style="padding: 0.75rem;">Work requiring frequent handoffs</td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Step 1 – Enable Agent Teams <span>→</span>
  </a>
</div>
`},{label:"Step 1 – Enable",content:`
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 1 — Enable Agent Teams</h2>

<p style="margin-bottom:1rem; line-height:1.75;">Agent teams are an <strong>experimental feature</strong> that must be enabled with an environment variable before you can use them. Without this flag, Claude Code will not offer team coordination — it will just run as a normal single session.</p>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.5rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">📋</span> Before you begin
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">You need <strong>Claude Code v2.1.32 or later</strong>. Run the command below to check your version. If it's older, run <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-text); font-family: monospace;">npm update -g @anthropic-ai/claude-code</code> to upgrade.</p>
</div>

<p style="margin-bottom:0.5rem; line-height:1.75;">Check your installed version:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.25rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>claude --version</code></pre>
<p style="margin-bottom:1.5rem; font-size:0.85rem; color: var(--text-secondary); font-style:italic;">Expected output: <code style="color: var(--syntax-text); background: var(--syntax-bg); padding: 0.1rem 0.3rem; border-radius:3px;">Claude Code 2.1.32</code> (or higher)</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Option A: settings.json <span style="font-size:0.8rem; color: var(--accent-primary); font-weight:400;">(Recommended — persists across sessions)</span></h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">Open or create your Claude Code global settings file:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code># macOS/Linux — open in nano text editor
nano ~/.claude/settings.json

# Or use VS Code
code ~/.claude/settings.json</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Add (or merge) this content into the file:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75; margin-top: 1.5rem;">Example real-world output:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>senthilpalanivelu@Senthils-MacBook-Pro-M4 ~/.claude$ pwd
/Users/senthilpalanivelu/.claude</code></pre>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>senthilpalanivelu@Senthils-MacBook-Pro-M4 ~/.claude$ cat settings.json 
{
  "enabledPlugins": {
    "commit-commands@claude-plugins-official": true,
    "ui-ux-pro-max@ui-ux-pro-max-skill": true,
    "everything-claude-code@everything-claude-code": true,
    "frontend-design@claude-plugins-official": true,
    "py-helper@py-helper-marketplace": true
  },
  "extraKnownMarketplaces": {
    "everything-claude-code": {
      "source": {
        "source": "github",
        "repo": "affaan-m/everything-claude-code"
      }
    },
    "ui-ux-pro-max-skill": {
      "source": {
        "source": "github",
        "repo": "nextlevelbuilder/ui-ux-pro-max-skill"
      }
    },
    "py-helper-marketplace": {
      "source": {
        "source": "directory",
        "path": "/Users/senthilpalanivelu/Downloads/my-claude-marketplace/py-helper-marketplace"
      }
    }
  },
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}</code></pre>


<p style="margin-bottom:1.5rem; font-size:0.85rem; color: var(--text-secondary); line-height:1.6;">Save and close. This flag is read every time Claude Code starts, so you only need to set it once.</p>


<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Option B: Shell environment variable <span style="font-size:0.8rem; color: var(--text-secondary); font-weight:400;">(Current terminal only)</span></h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">For a quick one-time test, export the variable in your current terminal:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">To make it permanent, add the same line to your shell profile and reload it:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>echo 'export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1' >> ~/.zshrc
source ~/.zshrc   # reload (use ~/.bashrc if on bash)</code></pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Step 2 – Display Modes <span>→</span>
  </a>
</div>
`},{label:"Step 2 – Display",content:`
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 2 — Choose Your Display Mode</h2>

<p style="margin-bottom:0.75rem; line-height:1.75;">Agent teams support two display modes for viewing and interacting with teammates:</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Mode Comparison</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Mode</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Description</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Best For</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600; color: var(--accent-primary);">In-Process</td>
      <td style="padding: 0.75rem;">All teammates run in your main terminal. Use <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">Shift+Down</code> to cycle through them.</td>
      <td style="padding: 0.75rem;">Any terminal, beginners, quick tasks</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; font-weight: 600; color: var(--accent-primary);">Split Panes</td>
      <td style="padding: 0.75rem;">Each teammate gets its own pane. See everyone at once.</td>
      <td style="padding: 0.75rem;">tmux or iTerm2 users, complex workflows</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Configuring Split Panes for Beginners</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">To see all your teammates working in parallel, you'll need a terminal multiplexer like <strong>tmux</strong>. Follow these simple steps:</p>

<ol style="margin: 0.5rem 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;">
    <strong>Install tmux:</strong> Ensure you have Homebrew installed, then run:
    <pre style="display: block; padding: 0.75rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>brew install tmux</code></pre>
  </li>
  <li style="margin-bottom: 0.5rem;">
    <strong>Start a tmux session:</strong> Before launching Claude Code, you must start a tmux session so it can manage your terminal panes.
    <pre style="display: block; padding: 0.75rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>tmux new -s claude-session</code></pre>
    <div style="padding: 0.75rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 3px solid var(--accent-primary); border-radius: 8px; margin: 0.5rem 0; font-size: 0.85rem; line-height: 1.5;">
      <strong>Mac / iTerm2 Users:</strong> Start tmux with native window integration for the best native-tab experience:<br>
      <code style="color: var(--code-green); font-family: 'JetBrains Mono', monospace; margin-top: 0.25rem; display: inline-block;">tmux -CC new -s claude-session</code>
    </div>
  </li>
  <li style="margin-bottom: 0.5rem;">
    <strong>Launch Claude Code:</strong> Tell Claude to use the split-pane mode.
    <pre style="display: block; padding: 0.75rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>claude --teammate-mode tmux</code></pre>
  </li>
</ol>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Make Split-Pane Mode the Default</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">If you want to make this the default behavior whenever you run Claude inside a tmux session, open or create your <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">~/.claude.json</code> file and add:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>{
  "teammateMode": "tmux"
}</code></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">💡</span> Pro Tip
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">
    Using <strong>split-pane mode</strong> inside tmux gives you the best visibility into what all your teammates are doing simultaneously. Just verify Claude is already running inside of a tmux session before summoning agent agents!
  </p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 1
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Step 3 – First Team <span>→</span>
  </a>
</div>
`},{label:"Step 3 – First Team",content:`
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 3 — Your First Agent Team</h2>

<p style="margin-bottom:0.75rem; line-height:1.75;">Let's create a <strong>Research Team</strong> that analyzes a topic from multiple perspectives in parallel.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Launch Claude Code</h3>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>cd ~/your-project-directory
claude</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Create Your First Team</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">Enter this prompt:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap; line-height: 1.5;"><code>I want to understand the concept of "human bias" from three
different perspectives. Create an agent team with 3 teammates:

1. "historian" - Research the history and origins of human bias
2. "psychologist" - Research the causes and mitigation techniques
3. "ethicist" - Research the societal and ethical implications

Each teammate should investigate their angle and report back. Have the
lead synthesize all findings into a summary.</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">What Happens Next</h3>

<ol style="margin: 0.5rem 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;"><strong>Claude creates a team</strong> with a shared task list</li>
  <li style="margin-bottom: 0.5rem;"><strong>Spawns 3 teammates</strong> (historian, technician, ethicist)</li>
  <li style="margin-bottom: 0.5rem;"><strong>Each teammate works independently</strong> on their assigned task</li>
  <li style="margin-bottom: 0.5rem;"><strong>The lead waits</strong> for all to complete</li>
  <li style="margin-bottom: 0.5rem;"><strong>The lead synthesizes</strong> all findings</li>
</ol>



<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">The Architecture</h3>

<div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; overflow-x: auto;">
  <pre style="margin: 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; line-height: 1.4; color: var(--text-secondary); white-space: pre;"><code style="color: var(--accent-primary);">┌────────────────────────────────────────────────────────────┐</code>
<code style="color: var(--accent-primary);">│</code><code style="color: var(--text-primary);">                       YOU (Team Lead)                      </code><code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code><code style="color: var(--text-secondary);">                 assigns tasks & synthesizes                </code><code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>                                                            <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--accent-secondary);">┌────────────┐      ┌────────────┐      ┌────────────┐</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-primary);">Historian</code>  <code style="color: var(--accent-secondary);">│</code>      <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-primary);">Technician</code> <code style="color: var(--accent-secondary);">│</code>      <code style="color: var(--accent-secondary);">│</code>  <code style="color: var(--text-primary);">Ethicist</code>  <code style="color: var(--accent-secondary);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-secondary);">(Teammate)</code> <code style="color: var(--accent-secondary);">│</code>      <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-secondary);">(Teammate)</code> <code style="color: var(--accent-secondary);">│</code>      <code style="color: var(--accent-secondary);">│</code> <code style="color: var(--text-secondary);">(Teammate)</code> <code style="color: var(--accent-secondary);">│</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>  <code style="color: var(--accent-secondary);">└────────────┘      └────────────┘      └────────────┘</code>    <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>         <code style="color: var(--text-secondary);">▲                  ▲                   ▲</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>         <code style="color: var(--text-secondary);">│                  │                   │</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>         <code style="color: var(--text-secondary);">└──────────┬───────┴─────────┬─────────┘</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>                    <code style="color: var(--text-secondary);">│                 │</code>                     <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">┌─────────┴─────────────────┴─────────┐</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">│</code>          <code style="color: var(--text-primary);">Shared Task List</code>           <code style="color: var(--code-green);">│</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">│</code>  <code style="color: var(--text-secondary);">• Task 1: Pending</code>                  <code style="color: var(--code-green);">│</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">│</code>  <code style="color: var(--text-secondary);">• Task 2: In Progress</code>              <code style="color: var(--code-green);">│</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">│</code>  <code style="color: var(--text-secondary);">• Task 3: Completed</code>                <code style="color: var(--code-green);">│</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">│</code>          <code style="color: var(--code-green);">└─────────────────────────────────────┘</code>           <code style="color: var(--accent-primary);">│</code>
<code style="color: var(--accent-primary);">└────────────────────────────────────────────────────────────┘</code></pre>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 2
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Step 4 – Interact <span>→</span>
  </a>
</div>
`},{label:"Step 4 – Interact",content:`
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 4 — Interact with Your Team</h2>

<p style="margin-bottom:0.75rem; line-height:1.75;">Once your team is running, you can monitor progress and interact with individual teammates.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Split-Pane Mode (Recommended with tmux)</h3>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--code-green); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--code-green);">✨</span> Automatic Layout
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">
    You don't need to manually configure windows! When you launch Claude inside a tmux session with <code style="padding: 0.2rem 0.4rem; background: var(--surface-dark); border-radius: 4px; font-family: monospace; color: var(--code-text);">split-pane</code> mode, Claude will <strong>automatically</strong> slice your terminal window into side-by-side or stacked panels so you can watch all 3 agents (and the team leader) working in parallel.
  </p>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">To navigate between these panes, you use tmux's <strong>Prefix Key</strong>. By default, this is <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; border: 1px solid var(--border-color);">Ctrl+B</kbd>. You press and release this prefix combo, then press a shortcut key.</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Action</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Shortcut / Command</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><strong>Move to an Agent's Pane</strong></td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+B</kbd> then <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Arrow Key</kbd><br><small style="color: var(--text-secondary); opacity: 0.8;">(Or just click on the pane with your mouse if mouse mode is on!)</small></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><strong>Zoom into One Agent (Full Screen)</strong></td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+B</kbd> then <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Z</kbd><br><small style="color: var(--text-secondary); opacity: 0.8;">(Press again to unzoom and see the whole team)</small></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><strong>Cycle Layout Arrangements</strong></td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+B</kbd> then <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Spacebar</kbd></td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;"><strong>Interact with an Agent</strong></td>
      <td style="padding: 0.75rem;">Once your cursor is in their pane, simply type your message to redirect them or ask for a status update.</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">In-Process Mode (Standard Terminal)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Action</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">How To</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Cycle through teammates</td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Shift+Down</kbd></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">View teammate's session</td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Enter</kbd></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Interrupt current turn</td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Escape</kbd></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Toggle task list</td>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+T</kbd></td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;">Send a message</td>
      <td style="padding: 0.75rem;">Just type and send</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Talking to Teammates Directly</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">You can message any teammate to give additional instructions:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Ask the historian teammate to focus specifically on
stereotype and anchoring bias in the last decade.</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Or switch to that teammate and type directly:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Add a section about researchers early work on implicit bias and
discriminatory behavior and how it influenced current practices.</code></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">💡</span> Key Insight
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">
    Each teammate is a <strong>full, independent Claude Code session</strong> with its own context window. They load project context (CLAUDE.md, MCP servers, skills) but <strong>don't inherit the lead's conversation history</strong>.
  </p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 3
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Step 5 – Tasks <span>→</span>
  </a>
</div>
`},{label:"Step 5 – Tasks",content:`
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 5 — Manage Tasks</h2>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.5rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    &#x1F4CB; What is the Shared Task List?
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">Think of it like a Kanban board that every teammate can see. Tasks move from <strong>Pending &rarr; In Progress &rarr; Completed</strong>. Teammates self-assign unclaimed tasks when they finish their current work &mdash; no manual hand-off needed.</p>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">The shared task list coordinates work across the team. Tasks have three states: <strong>pending</strong>, <strong>in progress</strong>, and <strong>completed</strong>.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">How Task Assignment Works</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Lead assigns:</strong> Tell the lead which task to give to which teammate</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Assign the security review task to the reviewer teammate</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Self-claim:</strong> After finishing a task, a teammate picks up the next unassigned, unblocked task</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Creating Task Dependencies</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">You can specify that some tasks must complete before others:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Create an agent team to build a REST API. The work has dependencies:

1. First, "architect" teammate designs the API schema
2. Then, "backend" teammate implements endpoints (depends on architect)
3. Finally, "tester" teammate writes integration tests (depends on backend)

Create the team and set up the task dependencies.</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">How Dependencies Work</h3>
<div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; overflow-x: auto;">
  <pre style="margin: 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); white-space: pre;"><code style="color: var(--text-primary);">Task 1: Design API</code> <code style="color: var(--accent-primary);">──────────────►</code> <code style="color: var(--code-green);">Completed</code>
                                    <code style="color: var(--accent-primary);">│</code>
                                    <code style="color: var(--accent-primary);">▼</code>
<code style="color: var(--text-primary);">Task 2: Implement</code> <code style="color: var(--text-secondary);">(blocked)</code> <code style="color: var(--accent-primary);">─────►</code> <code style="color: var(--accent-secondary);">In Progress</code>
                                    <code style="color: var(--accent-primary);">│</code>
                                    <code style="color: var(--accent-primary);">▼</code>
<code style="color: var(--text-primary);">Task 3: Write tests</code> <code style="color: var(--text-secondary);">(blocked)</code> <code style="color: var(--accent-primary);">────►</code> <code style="color: var(--text-secondary);">Pending</code></pre>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">When Task 1 completes, Task 2 automatically unblocks. When Task 2 completes, Task 3 unblocks.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Practical Example: Parallel Code Review</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">A common use case is having multiple reviewers work independently:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Create an agent team to review the codebase. Spawn three reviewers:

1. "security-reviewer" - Focus on security vulnerabilities, input
   validation, authentication issues
2. "performance-reviewer" - Focus on algorithmic complexity, memory
   usage, database queries
3. "test-reviewer" - Focus on test coverage, edge cases, test quality

Each should review independently and report findings. The lead should
compile a prioritized action list.</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">Each reviewer works from the same codebase but applies a different filter. The lead synthesizes findings after all finish.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 4
  </a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">
    Next: Step 6 – Plan Approval <span>→</span>
  </a>
</div>
`},{label:"Step 6 – Approval",content:`
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 6 — Approval Mode</h2>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 0 0 1.5rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    &#x1F6E1; Why use Plan Approval?
  </p>
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">By default, teammates can read <em>and</em> write files. Approval mode makes a teammate <strong>read-only first</strong>: it proposes what it plans to do, and only proceeds once you say &ldquo;yes.&rdquo; Use this for risky changes so you stay in control.</p>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">For complex or risky tasks, you can require teammates to <strong>plan before implementing</strong>. The teammate works in read-only plan mode until the lead approves.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Requesting Plan Approval</h3>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Spawn an "architect" teammate to refactor the authentication module.
Require plan approval before they make any changes.</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">The Approval Flow</h3>
<div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; font-family: 'JetBrains Mono', monospace;">
  <div style="border: 2px solid rgba(176, 141, 87, 0.75); padding: 0.9rem 1.1rem 1.5rem; position: relative;">
    <div style="text-align: center; font-size: 1.05rem; font-weight: 700; color: var(--text-primary); letter-spacing: 0.01em; margin-bottom: 0.9rem;">TEAMMATE (Read-Only)</div>

    <div style="border: 2px solid rgba(67, 52, 34, 0.14); padding: 1rem 1.15rem; margin: 0 auto; max-width: 92%; background: rgba(255,255,255,0.02);">
      <div style="font-size: 1.02rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.55rem;">PLAN MODE</div>
      <ul style="margin: 0; padding-left: 1.3rem; color: var(--text-secondary); line-height: 1.6;">
        <li>Analyzes the code</li>
        <li>Proposes approach</li>
        <li>Creates implementation plan</li>
      </ul>
    </div>
  </div>

  <div style="text-align: center; color: rgba(176, 141, 87, 0.9); margin: 0.75rem 0 1rem; line-height: 1;">
    <div style="font-size: 1.2rem;">│</div>
    <div style="font-size: 1.2rem;">▼</div>
    <div style="margin-top: 0.35rem; font-size: 0.98rem; font-weight: 500; color: var(--text-primary);">Plan Approval Request</div>
    <div style="margin-top: 0.35rem; font-size: 1.2rem;">│</div>
    <div style="font-size: 1.2rem;">▼</div>
  </div>

  <div style="border: 2px solid rgba(176, 141, 87, 0.75); padding: 0.9rem 1.1rem 1.35rem;">
    <div style="text-align: center; font-size: 1.05rem; font-weight: 700; color: var(--text-primary); letter-spacing: 0.01em; margin-bottom: 0.9rem;">TEAM LEAD (YOU)</div>

    <div style="border: 2px solid rgba(67, 52, 34, 0.14); padding: 1rem 1.15rem; margin: 0 auto 1rem; max-width: 92%; background: rgba(255,255,255,0.02);">
      <div style="font-size: 1.02rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.55rem;">REVIEWING PLAN</div>
      <ul style="margin: 0; padding-left: 1.3rem; color: var(--text-secondary); line-height: 1.6;">
        <li>Checks for risks</li>
        <li>Validates approach</li>
      </ul>
    </div>

    <div style="display: grid; grid-template-columns: repeat(2, minmax(180px, 1fr)); gap: 1.5rem; align-items: start;">
      <div style="text-align: center;">
        <div style="color: #4f8f4f; font-weight: 700; margin-bottom: 0.4rem;">APPROVE</div>
        <div style="color: rgba(176, 141, 87, 0.9); font-size: 1.15rem; line-height: 1;">│</div>
        <div style="color: rgba(176, 141, 87, 0.9); font-size: 1.15rem; line-height: 1;">▼</div>
        <div style="display: inline-block; margin-top: 0.5rem; padding: 0.8rem 1rem; border: 2px solid rgba(79, 143, 79, 0.8); color: var(--text-primary); text-align: left;">
          <div style="font-weight: 700; margin-bottom: 0.25rem;">IMPLEMENT</div>
          <div style="color: var(--text-secondary);">(Write Mode)</div>
        </div>
      </div>

      <div style="text-align: center;">
        <div style="color: #d96b6b; font-weight: 700; margin-bottom: 0.4rem;">REJECT</div>
        <div style="color: rgba(176, 141, 87, 0.9); font-size: 1.15rem; line-height: 1;">│</div>
        <div style="color: rgba(176, 141, 87, 0.9); font-size: 1.15rem; line-height: 1;">▼</div>
        <div style="display: inline-block; margin-top: 0.5rem; padding: 0.8rem 1rem; border: 2px solid rgba(217, 107, 107, 0.75); color: var(--text-primary); text-align: left;">
          <div style="font-weight: 700; margin-bottom: 0.25rem;">FEEDBACK</div>
          <div style="color: var(--text-secondary);">(Try Again)</div>
        </div>
      </div>
    </div>
  </div>
</div>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Controlling Approval Decisions</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">Give the lead criteria for approval:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Tell the lead to only approve plans that include test coverage
and don't modify the database schema.</code></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">💡</span> When to Use Plan Approval
  </p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.5;">
    <li style="margin-bottom: 0.25rem;">Refactoring critical systems</li>
    <li style="margin-bottom: 0.25rem;">Making database schema changes</li>
    <li style="margin-bottom: 0.25rem;">Modifying authentication/authorization</li>
    <li style="margin-bottom: 0.25rem;">Large-scale code reorganization</li>
    <li>Any change with significant blast radius</li>
  </ul>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="5" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 5
  </a>
  <a href="#" data-goto-tab="7" class="tutorial-nav-link">
    Next: Step 7 – Cleanup <span>→</span>
  </a>
</div>
`},{label:"Step 7 – Cleanup",content:`
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 7 — Cleanup</h2>

<p style="margin-bottom:0.75rem; line-height:1.75;">When you're done with your team, clean up properly to release resources.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Shutdown a Specific Teammate</h3>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Ask the researcher teammate to shut down</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">The lead sends a shutdown request. The teammate can approve (exit gracefully) or reject with an explanation.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Clean Up the Entire Team</h3>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Clean up the team</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">This removes shared team resources. <strong>All teammates must be shut down first</strong> or the cleanup will fail.</p>

<div style="padding: 1rem; background: rgba(255, 200, 50, 0.1); border: 1px solid rgba(255, 200, 50, 0.3); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.6; color: var(--text-primary);">
    <strong style="color: var(--accent-primary);">⚠️ Important:</strong> Always use the lead to clean up. Teammates should not run cleanup because their team context may not resolve correctly, potentially leaving resources in an inconsistent state.
  </p>
</div>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Cleanup Checklist</h3>
<ol style="margin: 0.5rem 0 1.5rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.4rem;">Tell each teammate to shut down: <em>"Ask the historian to shut down"</em></li>
  <li style="margin-bottom: 0.4rem;">Wait for each teammate to confirm they've exited</li>
  <li style="margin-bottom: 0.4rem;">Ask the lead to clean up the team: <em>"Clean up the team"</em></li>
  <li style="margin-bottom: 0.4rem;">Exit the lead session: type <code style="padding: 0.1rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--syntax-text); font-family: monospace;">/exit</code> or press <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+C</kbd></li>
</ol>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Token Costs</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">Agent teams use <strong>significantly more tokens</strong> than a single session. Each teammate has its own context window.</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Use Teams When</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Use Single Session When</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Parallel exploration adds real value</td>
      <td style="padding: 0.75rem;">Sequential tasks with dependencies</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;">Tasks are truly independent</td>
      <td style="padding: 0.75rem;">Same-file edits needed</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;">Coordination overhead is worth it</td>
      <td style="padding: 0.75rem;">Routine tasks (token cost matters)</td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="6" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 6
  </a>
  <a href="#" data-goto-tab="8" class="tutorial-nav-link">
    Next: Step 8 – Troubleshoot <span>→</span>
  </a>
</div>
`},{label:"Step 8 – Troubleshoot",content:`
<h2 style="margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Step 8 — Troubleshoot</h2>

<p style="margin-bottom:1rem; line-height:1.75;">If something doesn't work as expected, the issue usually falls into one of the categories below. Each problem includes a plain-English explanation of <em>why</em> it happens and how to fix it.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Teammates Not Appearing</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> You asked for a team but don't see teammates.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solutions:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;">In in-process mode, teammates may already be running but not visible. Press <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Shift+Down</kbd> to cycle through active teammates.</li>
  <li style="margin-bottom: 0.25rem;">Check that the task was complex enough to warrant a team.</li>
  <li style="margin-bottom: 0.25rem;">If you requested split panes, verify tmux is installed: <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">which tmux</code></li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Too Many Permission Prompts</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> Teammates keep asking for permissions.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solution:</strong> Pre-approve common operations in your permission settings before spawning teammates.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Teammates Stopping on Errors</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> Teammate stops after encountering an error.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solutions:</strong></p>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;">Check their output using <kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Shift+Down</kbd></li>
  <li style="margin-bottom: 0.25rem;">Give them additional instructions directly</li>
  <li style="margin-bottom: 0.25rem;">Spawn a replacement teammate to continue the work</li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Lead Shuts Down Before Work Is Done</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> The lead decides the team is finished before all tasks are complete.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solution:</strong></p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Wait for your teammates to complete their tasks before proceeding</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Orphaned tmux Sessions</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Symptoms:</strong> tmux session persists after team ends.</p>

<p style="margin-bottom:0.5rem; line-height:1.75;"><strong>Solution:</strong></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>tmux ls
tmux kill-session -t &lt;session-name&gt;</code></pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="7" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 7
  </a>
  <a href="#" data-goto-tab="9" class="tutorial-nav-link">
    Next: Best Practices <span>→</span>
  </a>
</div>
`},{label:"Best Practices",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Best Practices for Agent Teams</strong>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">1. Give Teammates Enough Context</h3>

<p style="margin-bottom:0.5rem; line-height:1.75;">Teammates load project context automatically (CLAUDE.md, MCP servers, skills) but <strong>don't inherit the lead's conversation history</strong>. Include task-specific details in the spawn prompt:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>Spawn a security reviewer teammate with the prompt: "Review the
authentication module at src/auth/ for security vulnerabilities. Focus
on token handling, session management, and input validation. The app
uses JWT tokens stored in httpOnly cookies. Report any issues with
severity ratings."</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">2. Choose an Appropriate Team Size</h3>

<ul style="margin: 0.5rem 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.25rem;"><strong>Start with 3-5 teammates</strong> — balances parallelism with coordination</li>
  <li style="margin-bottom: 0.25rem;"><strong>5-6 tasks per teammate</strong> keeps everyone productive without context switching</li>
  <li style="margin-bottom: 0.25rem;"><strong>More teammates ≠ faster work</strong> — coordination overhead increases</li>
  <li style="margin-bottom: 0.25rem;">Three focused teammates often outperform five scattered ones</li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">3. Size Tasks Appropriately</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Size</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Problem</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600; color: #c65a5a;">Too Small</td>
      <td style="padding: 0.75rem;">Coordination overhead exceeds the benefit</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600; color: #a67c38;">Too Large</td>
      <td style="padding: 0.75rem;">Teammates work too long without check-ins, increasing risk of wasted effort</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; font-weight: 600; color: #4f8f4f;">Just Right</td>
      <td style="padding: 0.75rem;">Self-contained units producing a clear deliverable (function, test file, review)</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">4. Avoid File Conflicts</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">Two teammates editing the same file leads to overwrites. Break work so each teammate owns a different set of files.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">5. Monitor and Steer</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">Check in on teammates' progress, redirect approaches that aren't working, and synthesize findings as they come in. Letting a team run unattended too long increases wasted effort.</p>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">6. Start with Research and Review</h3>

<p style="margin-bottom:0.75rem; line-height:1.75;">If you're new to agent teams, start with tasks that have clear boundaries and don't require writing code: reviewing a PR, researching a library, or investigating a bug. These show the value of parallel exploration without coordination challenges.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="8" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 8
  </a>
  <a href="#" data-goto-tab="10" class="tutorial-nav-link">
    Next: Quick Reference <span>→</span>
  </a>
</div>
`},{label:"Quick Reference",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Quick Reference Card</strong>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Essential Commands</h3>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); white-space: pre;"><code># Create a team
"Create an agent team with [N] teammates to [task description]"

# Assign specific roles
"Spawn teammates: one focused on [A], one on [B], one on [C]"

# Specify a model
"Create a team using Sonnet for each teammate"

# Require plan approval
"Require plan approval before making changes"

# Talk to a teammate
"Ask the [name] teammate to [additional instruction]"

# Shut down a teammate
"Ask the [name] teammate to shut down"

# Clean up
"Clean up the team"</code></pre>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Keyboard Shortcuts (In-Process Mode)</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Key</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Action</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Shift+Down</kbd></td>
      <td style="padding: 0.75rem;">Cycle to next teammate</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Enter</kbd></td>
      <td style="padding: 0.75rem;">View teammate session</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Escape</kbd></td>
      <td style="padding: 0.75rem;">Interrupt current turn</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;"><kbd style="padding: 0.2rem 0.5rem; background: var(--surface-color); border-radius: 4px; font-family: monospace;">Ctrl+T</kbd></td>
      <td style="padding: 0.75rem;">Toggle task list</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Architecture Summary</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Component</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Role</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Team Lead</td>
      <td style="padding: 0.75rem;">Main session that creates the team, spawns teammates, coordinates work</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Teammates</td>
      <td style="padding: 0.75rem;">Independent Claude instances working on assigned tasks</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Task List</td>
      <td style="padding: 0.75rem;">Shared list of work items that teammates claim and complete</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; font-weight: 600;">Mailbox</td>
      <td style="padding: 0.75rem;">Messaging system for communication between agents</td>
    </tr>
  </tbody>
</table>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Where Files Are Stored</h3>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); line-height: 1.5; white-space: pre-wrap; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"><code>~/.claude/teams/{team-name}/config.json  # Team configuration
~/.claude/tasks/{team-name}/              # Task list directory</code></pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="9" class="tutorial-nav-link previous">
    <span>←</span> Previous: Best Practices
  </a>
  <a href="#" data-goto-tab="11" class="tutorial-nav-link">
    Next: Resources <span>→</span>
  </a>
</div>
`},{label:"Resources",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">Resources & Further Reading</strong>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Official Documentation</h3>

<ul style="margin: 0.5rem 0 1rem 0; color: var(--text-secondary); line-height: 1.75; list-style: none; padding: 0;">
  <li style="margin-bottom: 0.5rem;">
    <a href="https://code.claude.com/docs/en/agent-teams" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Agent Teams Documentation</a>
    <span style="display: block; margin-left: 1.5rem; font-size: 0.9rem;">Complete reference for orchestrating teams of Claude Code sessions</span>
  </li>
  <li style="margin-bottom: 0.5rem;">
    <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Subagents Documentation</a>
    <span style="display: block; margin-left: 1.5rem; font-size: 0.9rem;">Lightweight delegation within a single session</span>
  </li>
  <li style="margin-bottom: 0.5rem;">
    <a href="https://code.claude.com/docs/en/overview" target="_blank" style="color: var(--accent-primary); text-decoration: underline; font-weight: 600;">Claude Code Overview</a>
    <span style="display: block; margin-left: 1.5rem; font-size: 0.9rem;">Getting started with Claude Code</span>
  </li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Related Tutorials</h3>

<ul style="margin: 0.5rem 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li style="margin-bottom: 0.5rem;">
    <a href="#" data-goto-concept="claude-subagents" style="color: var(--accent-primary); text-decoration: underline;">Claude Subagents</a> — Learn about lightweight task delegation
  </li>
  <li style="margin-bottom: 0.5rem;">
    <a href="#" data-goto-concept="claude-skills-tutorial" style="color: var(--accent-primary); text-decoration: underline;">Claude Skills</a> — Create reusable instruction sets
  </li>
  <li style="margin-bottom: 0.5rem;">
    <a href="#" data-goto-concept="claude-mcp" style="color: var(--accent-primary); text-decoration: underline;">Claude MCP</a> — Extend Claude with external tools
  </li>
</ul>

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Key Concepts from This Tutorial</h3>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Concept</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Description</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Team Lead</td>
      <td style="padding: 0.75rem;">Main Claude session that coordinates the team</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Teammates</td>
      <td style="padding: 0.75rem;">Independent Claude instances with own context windows</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Task List</td>
      <td style="padding: 0.75rem;">Shared coordination mechanism (pending, in progress, completed)</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 600;">Plan Approval</td>
      <td style="padding: 0.75rem;">Teammate plans before implementing (for risky work)</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem; font-weight: 600;">In-Process vs Split Panes</td>
      <td style="padding: 0.75rem;">Two display modes for viewing teammates</td>
    </tr>
  </tbody>
</table>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin-bottom: 0.5rem; line-height:1.75; color: var(--text-primary); font-weight: 600;">
    <span style="color: var(--accent-primary);">🎓</span> Next Steps for Your Learning
  </p>
  <ol style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.25rem;">Try a parallel code review on your current project</li>
    <li style="margin-bottom: 0.25rem;">Experiment with task dependencies for multi-stage workflows</li>
    <li style="margin-bottom: 0.25rem;">Use plan approval for risky changes</li>
    <li style="margin-bottom: 0.25rem;">Compare agent teams with subagents to understand when each approach fits</li>
  </ol>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="10" class="tutorial-nav-link previous">
    <span>←</span> Previous: Quick Reference
  </a>
  <a href="#" data-goto-tab="0" class="tutorial-nav-link">
    Start Over: Overview <span>→</span>
  </a>
</div>
`}],interactiveType:"custom"},_t={id:"claude-plugins",title:"Claude Plugins",category:"Tutorial",tags:["Plugins","Marketplace","Claude Code"],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Claude Plugins</strong> are like app bundles — a single package that installs multiple commands, tools, and behaviors all at once.</p>

<p style="margin-bottom:1rem; line-height:1.75;">Plugins can bundle MCPs, skills, hooks, and commands into a single download. Instead of installing each piece separately, you get everything you need in one package.</p>

<p style="margin-bottom:1rem; line-height:1.75;">This tutorial walks you through building a complete Claude Code plugin from scratch.</p>

<div style="margin-top: 1.5rem; margin-bottom: 2rem;">
  <strong style="display:block; margin-bottom:1rem; font-size:1.05rem; color: var(--accent-primary);">What Can a Plugin Contain?</strong>
  <p style="margin-bottom:1rem; line-height:1.75;">A Claude plugin can include slash commands, MCPs, hooks, and skills — all packaged together and shared across projects or teams.</p>

  <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
    <thead>
      <tr style="background: rgba(0, 242, 255, 0.05);">
        <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">Ingredient</th>
        <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">What it does</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Skills</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Instructions that guide Claude on how to perform a task</td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>Commands</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Slash commands you can trigger manually, like <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/review</code></td>
      </tr>
      <tr>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>MCPs</strong></td>
        <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Connections to external tools, APIs, databases, and services</td>
      </tr>
      <tr>
        <td style="padding: 1rem;"><strong>Hooks</strong></td>
        <td style="padding: 1rem;">Automatic behaviors that run when specific events happen</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0 0 0.75rem; font-weight: 600; color: var(--text-primary);">What you will build</p>
  <p style="margin: 0 0 0.75rem; line-height:1.75; color: var(--text-secondary);"><strong>py-helper</strong> — a Python code review plugin that includes:</p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.35rem;"><strong>Skill:</strong> auto-review Python files</li>
    <li style="margin-bottom: 0.35rem;"><strong>Command:</strong> manually fix style issues</li>
    <li style="margin-bottom: 0.35rem;"><strong>Hook:</strong> run automatic safety checks</li>
    <li style="margin-bottom: 0;"><strong>MCP:</strong> connect Claude to Context7</li>
  </ul>
</div>

<p style="margin-bottom:0.75rem; line-height:1.75;">By the end, you will have a plugin that can review code, fix formatting, warn about secrets, and interact with Context7 for live Python documentation.</p>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: Prerequisites <span>→</span>
  </a>
</div>
`},{label:"1. Prerequisites",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Before You Start]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">You need two things installed before building any plugin.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 1 — Install Node.js</p>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">You can install Claude Code using npm. To use npm, install the LTS version from <a href="https://nodejs.org" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">nodejs.org</a>.</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">node --version
# You should see something like: v22.0.0</pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 2 — Install Claude Code</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Install Claude Code globally with npm:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">npm install -g @anthropic-ai/claude-code</pre>
<p style="margin-top: 1rem; margin-bottom: 0.5rem; line-height: 1.75; color: var(--text-secondary);">Verify the installation:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">claude --version</pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">You will also need a Claude API key or an authenticated Claude account. Claude Code will ask you to sign in the first time you run it.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Launch Claude</p>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Type <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">claude</code> in your terminal to get started:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.9rem; line-height: 1.5;">claude</pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Overview
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Folder Plan <span>→</span>
  </a>
</div>
`},{label:"2. Folder Plan",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[What We Are Building]</strong>

<p style="margin-bottom:1rem; line-height:1.75;">Before creating files, it helps to understand the complete plugin structure.</p>

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background: rgba(0, 242, 255, 0.05);">
      <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">Component</th>
      <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">Name</th>
      <th style="padding: 1rem; text-align: left; border-bottom: 1px solid var(--border-color); color: var(--accent-primary);">What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Skill</td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>py-review</strong></td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Automatically checks for bugs, PEP 8 style issues, missing type hints, and docstrings whenever you ask Claude to review, audit, or check a Python file. It runs automatically based on natural language. When you say something like "review this file" or "check my Python code," Claude detects the intent and triggers it without any special syntax. It's passive and context-aware. py-review is read-only — it finds and reports issues with line numbers and suggested fixes, but doesn't touch your files.</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Command</td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>py-fix</strong></td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">A manual slash command (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/py-helper:py-fix</code>) that instantly fixes style violations, adds missing docstrings, and applies type hints across the entire open file. It runs manually via an explicit slash command. You have to deliberately invoke it. It won't activate from conversation alone. py-fix is destructive (in the good sense) — it actually modifies the file and then summarizes what changed.</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Hook</td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);"><strong>hooks.json</strong></td>
      <td style="padding: 1rem; border-bottom: 1px solid var(--border-color);">Runs background safety checks: scans for hardcoded secrets keys, passwords <strong>before</strong> any file write, and performs an automatic syntax check <strong>after</strong> every edit.</td>
    </tr>
    <tr>
      <td style="padding: 1rem;">MCP</td>
      <td style="padding: 1rem;"><strong>context7</strong></td>
      <td style="padding: 1rem;">Context7 is a documentation lookup tool that plugs into Claude Code. When you ask Claude how to use a Python library, it fetches the real, up-to-date documentation directly from the library's source before answering — so you always get accurate, version-specific code instead of potentially outdated suggestions.</td>
    </tr>
  </tbody>
</table>

<p style="margin: 1rem 0 0.75rem; line-height:1.75;">Final folder structure:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.45; font-size: 0.9rem;">my-claude-marketplace/
└── py-helper-marketplace/
    ├── .claude-plugin/
    │   └── marketplace.json
    └── plugins/
        └── py-helper/
            ├── .claude-plugin/
            │   └── plugin.json
            ├── skills/
            │   └── py-review/
            │       └── SKILL.md
            ├── commands/
            │   └── py-fix.md
            ├── hooks/
            │   └── hooks.json
            └── .mcp.json</pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>Important:</strong> the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> plugin folder must live inside the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper-marketplace</code> folder under a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugins/</code> subfolder.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: Prerequisites
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Create Folders <span>→</span>
  </a>
</div>
`},{label:"3. Create Folders",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Create All Folders]</strong>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 1 — Create your Python project</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">This is where your actual Python code will live. Create the folder and enter it:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">mkdir my-python-project</code></pre>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cd my-python-project</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Create a test file:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">touch app.py</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">Open <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">app.py</code> and paste in this intentionally messy example:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-python">def add_numbers(a,b):
    x=a+b
    return x
 
def greet(name):
    print("Hello "+name)
 
result=add_numbers(5,10)
greet("Alice")</code></pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 2 — Create the marketplace and plugin folders</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Go back to your parent folder and create the plugin structure:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cd ..</code></pre>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">mkdir -p my-claude-marketplace/py-helper-marketplace/.claude-plugin
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands
mkdir -p my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks</code></pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Verify the folders</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">find my-claude-marketplace -type d</code></pre>

<p style="margin-bottom:0.75rem; line-height:1.75;">If your folder tree matches the intended layout, you are ready to create the files.</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Folder Plan
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: Marketplace + Plugin Files <span>→</span>
  </a>
</div>
`},{label:"4. Core Files",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Create the Core Files]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Run each block one at a time.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 1 — marketplace.json</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/.claude-plugin/marketplace.json << 'EOF'
{
  "name": "py-helper-marketplace",
  "owner": {
    "name": "Your Name"
  },
  "plugins": [
    {
      "name": "py-helper",
      "version": "1.0.0",
      "description": "Python coding toolkit with review, fix, and safety checks",
      "source": "./plugins/py-helper"
    }
  ]
}
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">marketplace.json</code> — Marketplace Registry File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the registry file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper-marketplace</code> — a Claude marketplace (a collection of one or more plugins). It serves as the top-level catalog that tells Claude what plugins are available within this marketplace, where to find them, and who owns the marketplace itself.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It defines four key pieces of information:</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code></strong> — the unique identifier for the marketplace (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper-marketplace</code>), distinguishing it from the individual plugins it contains</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">owner</code></strong> — credits the person or organization that maintains the marketplace</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugins</code></strong> — an array listing every plugin available in this marketplace, with each entry containing:
      <ul style="margin: 0.25rem 0 0.25rem 1rem;">
        <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code> — the plugin's identifier (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code>)</li>
        <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">version</code> — the version to load (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">1.0.0</code>)</li>
        <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code> — a short summary shown in listings</li>
        <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">source</code> — the <strong>relative path</strong> to the plugin folder (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">./plugins/py-helper</code>)</li>
      </ul>
    </li>
  </ul>
  
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">No logic or behavior is defined here — it is purely a directory and routing file.</p>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code>:</strong> while <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code> is the ID card for a single plugin, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">marketplace.json</code> is the index for the entire collection. It sits one level above and points <em>to</em> the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code> files beneath it.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 2 — plugin.json</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin/plugin.json << 'EOF'
{
  "name": "py-helper",
  "version": "1.0.0",
  "description": "Python coding toolkit with review, fix, and safety checks",
  "author": {
    "name": "Your Name"
  }
}
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code> — Plugin Manifest File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the manifest file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> Claude plugin. It serves as the plugin's identity card, providing essential metadata that the Claude marketplace and runtime use to recognize, register, and load the plugin as a valid package.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It defines four key pieces of information:</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code></strong> — the unique identifier (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code>), which also becomes the namespace prefix for all slash commands (e.g. <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/py-helper:py-fix</code>)</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">version</code></strong> — tracks the release version (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">1.0.0</code>) for updates and compatibility</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code></strong> — a human-readable summary of the plugin's purpose, displayed in the marketplace listing</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">author</code></strong> — credits the creator of the plugin</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">This file contains no logic or behavior of its own — it does not define any skills, commands, or code. It simply declares that the folder it lives in is a named, versioned, attributable plugin package. Think of it as the equivalent of a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">package.json</code> in Node.js or a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">pyproject.toml</code> in Python.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 3 — SKILL.md</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review/SKILL.md << 'EOF'
---
name: py-review
description: >
  Reviews Python code for quality issues. Auto-trigger when the user
  asks to review, check, audit, or improve a Python file.
---
 
When reviewing Python code, always check for:
 
1. **Bugs** — logic errors, off-by-one mistakes, unhandled exceptions
2. **Style** — PEP 8 violations (spacing, naming conventions)
3. **Type hints** — missing annotations on functions
4. **Docstrings** — missing documentation on classes and functions
 
For each issue, show:
- The line number
- What the problem is
- A corrected version of the code
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> — Skill Definition File for <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code></p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the skill definition file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code> skill within the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> plugin. It is a Markdown file with a YAML frontmatter header that together define both the <strong>identity</strong> and the <strong>behavior</strong> of the skill — making it the most functional of the three files, as it contains actual instructions that Claude executes.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It is split into two distinct sections:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Frontmatter (YAML header <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">---</code>)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">name</code></strong> — the skill's unique identifier (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code>), used to reference it within the plugin</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code></strong> — a natural language trigger definition that tells Claude <em>when</em> to automatically activate this skill. The phrase "auto-trigger when the user asks to review, check, audit, or improve a Python file" is what enables intent-based activation — no slash command needed.</li>
  </ul>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Body (Markdown instructions)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li>This is the actual prompt/behavior Claude follows when the skill fires. It instructs Claude to check for four specific categories of issues — bugs, PEP 8 style violations, missing type hints, and missing docstrings</li>
    <li>It also defines the <strong>output format</strong> Claude must follow for every issue found: the line number, a description of the problem, and a corrected version of the code</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from the other files:</strong> unlike <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">marketplace.json</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">plugin.json</code> which are purely metadata, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> contains executable instructions. It is both a configuration file (frontmatter) and a behavior file (body) in one, giving the plugin its actual intelligence and usefulness.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 4 — Verify these files</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Make sure these three critical files were created successfully and have the correct contents:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">cat my-claude-marketplace/py-helper-marketplace/.claude-plugin/marketplace.json
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin/plugin.json
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review/SKILL.md</pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Create Folders
  </a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">
    Next: Commands, Hooks, MCP <span>→</span>
  </a>
</div>
`},{label:"5. Commands + MCP",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Create the Remaining Files]</strong>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 4 — commands/py-fix.md</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands/py-fix.md << 'EOF'
---
description: "Automatically fix PEP 8 issues in a Python file"
---
 
Look at the Python file at $ARGUMENTS (or the currently open file if no path is provided) and:
 
1. Fix all PEP 8 style violations
2. Add missing type hints to all functions
3. Add docstrings to any functions that are missing them
4. Show a summary of every change you made and why
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix.md</code> — Command Definition File for <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix</code></p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the command definition file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix</code> slash command within the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> plugin. Like <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code>, it is a Markdown file with a YAML frontmatter header, combining identity and behavior in one file. However, unlike the skill, this file defines a <strong>manually triggered command</strong> rather than an auto-activating skill.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It is split into two distinct sections:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Frontmatter (YAML header <code style="color: var(--code-text);">---</code>)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">description</code></strong> — a short summary of what the command does ("Automatically fix PEP 8 issues in a Python file"), used for display purposes in the marketplace and command palette. Notably, there is <strong>no auto-trigger definition</strong> here — this command only fires when explicitly invoked via <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/py-helper:py-fix</code></li>
  </ul>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);">Body (Markdown instructions)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">$ARGUMENTS</code></strong> — a special placeholder that captures whatever the user types after the slash command (typically a file path). If nothing is provided, Claude falls back to the currently open file. This is what makes the command flexible and reusable across different files</li>
    <li>The instructions tell Claude to perform three <strong>destructive (file-modifying) actions</strong>: fix PEP 8 violations, add missing type hints, and add missing docstrings</li>
    <li>It also requires Claude to produce a <strong>change summary</strong> explaining every modification made and why</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code>:</strong> while <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> is read-only and report-based, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix.md</code> is action-based and modifies actual files. It also uses <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">$ARGUMENTS</code> for explicit file targeting. The absence of an auto-trigger means the user retains full control over when fixes are applied — appropriate given that this command directly alters code.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 5 — hooks/hooks.json</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks/hooks.json << 'EOF'
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Before writing this Python file, check: does it contain any hardcoded passwords, API keys, or secrets? If yes, warn the user and suggest using environment variables instead."
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "prompt",
            "prompt": "After editing this Python file, quickly check if any obvious syntax errors were introduced. If yes, point them out immediately."
          }
        ]
      }
    ]
  }
}
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">hooks.json</code> — Hooks Configuration File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the hooks configuration file for the <code style="color: var(--code-text);">py-helper</code> plugin. It defines <strong>automatic background checks</strong> that fire silently around file write and edit operations — before and after Claude touches a Python file. Unlike the skill and command files, hooks are not triggered by the user at all; they run invisibly as a safety layer wrapped around Claude's own tool usage.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It is organized around two lifecycle events:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">PreToolUse</code> (Before writing/editing)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">matcher</code></strong> — <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">"Write|Edit"</code> tells Claude to intercept any Write or Edit tool call before it executes</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">prompt</code></strong> — instructs Claude to scan the file for hardcoded passwords, API keys, or secrets <em>before</em> writing, and if found, warn the user and recommend environment variables instead</li>
    <li>This acts as a <strong>security gate</strong> — catching sensitive data leaks before they are committed to disk</li>
  </ul>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">PostToolUse</code> (After writing/editing)</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">matcher</code></strong> — same <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">"Write|Edit"</code> pattern, but fires <em>after</em> the tool call completes</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">prompt</code></strong> — instructs Claude to immediately check whether the edit introduced any obvious syntax errors, and flag them if so</li>
    <li>This acts as a <strong>quality gate</strong> — catching accidental breakage introduced during a fix or edit</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from the other files:</strong> <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">SKILL.md</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix.md</code> are user-facing and user-initiated. <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">hooks.json</code> is entirely <strong>system-facing and automatic</strong>. The user never calls it directly; it wraps around Claude's own actions to enforce security and correctness passively. Together with the skill and command, it completes the plugin's three-layer approach: review on request, fix on demand, and guard automatically.</p>
</div>
<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">File 6 — .mcp.json</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;"><code class="language-bash">cat > my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.mcp.json << 'EOF'
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
EOF</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.mcp.json</code> — MCP Server Configuration File</p>
  <p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">This is the MCP (Model Context Protocol) server configuration file for the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> plugin. It connects Claude to <a href="https://context7.com/" target="_blank" style="color: var(--accent-primary); text-decoration: none; font-weight: 700;">Context7</a>, an external real-time documentation server, giving the plugin access to up-to-date, version-specific library documentation pulled directly from source repositories. Unlike all the other files in this plugin, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.mcp.json</code> reaches <em>outside</em> the plugin itself and wires Claude into a live external service.</p>
  
  <p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">It contains a single configuration block:</p>
  
  <p style="margin-bottom:0.25rem; font-weight:700; color: var(--text-primary);"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">mcpServers</code></p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">context7</code></strong> — the name given to this MCP server connection, used to reference it internally</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">command</code></strong> — <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">npx</code> tells Claude to use Node's package runner to launch the server</li>
    <li><strong><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">args</code></strong> — <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">["-y", "@upstash/context7-mcp"]</code> automatically installs and runs the Context7 MCP package without requiring manual setup. The <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">-y</code> flag bypasses confirmation prompts, making it seamless on first use</li>
  </ul>
  
  <p style="margin-bottom:0.5rem; font-weight:700; color: var(--text-primary);">What Context7 actually does</p>
  <ul style="margin-bottom:1rem; padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.6;">
    <li>Solves a core problem in AI-assisted development: Claude's training data has a knowledge cutoff, meaning library documentation it knows may be outdated or version-mismatched</li>
    <li>Context7 fetches <strong>live documentation</strong> directly from source repositories at the moment it's needed, ensuring Claude suggests current API patterns, not deprecated ones</li>
    <li>For a Python toolkit plugin like <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code>, this is especially valuable — when reviewing or fixing code that uses third-party libraries, Claude can reference the actual current docs rather than relying on potentially stale training knowledge</li>
  </ul>
  
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);"><strong>How it differs from the other files:</strong> every other file in this plugin defines what Claude <em>does</em>. <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.mcp.json</code> defines what Claude <em>knows</em> — extending its context with real-time external knowledge. It is the plugin's connection to the outside world, making the difference between Claude guessing at library usage and Claude knowing it with certainty.</p>
</div>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Verify these files</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Make sure these three remaining logic files were created successfully and have the correct contents:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands/py-fix.md
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks/hooks.json
cat my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.mcp.json</pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Core Files
  </a>
  <a href="#" data-goto-tab="6" class="tutorial-nav-link">
    Next: Verify Files <span>→</span>
  </a>
</div>
`},{label:"6. Verify",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Verify Your Files]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Before installing the plugin, make sure every file is in the correct place.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">find my-claude-marketplace -type f</pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see these files:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.claude-plugin/plugin.json
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/skills/py-review/SKILL.md
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/commands/py-fix.md
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/hooks/hooks.json
my-claude-marketplace/py-helper-marketplace/plugins/py-helper/.mcp.json
my-claude-marketplace/py-helper-marketplace/.claude-plugin/marketplace.json</pre>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="5" class="tutorial-nav-link previous">
    <span>←</span> Previous: Commands + MCP
  </a>
  <a href="#" data-goto-tab="7" class="tutorial-nav-link">
    Next: Install the Plugin <span>→</span>
  </a>
</div>
`},{label:"7. Install",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Install the Plugin]</strong>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 1 — Go to your Python project</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Enter your project directory and launch Claude:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">cd my-python-project</pre>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">claude</pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 2 — Register your marketplace</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">Inside Claude Code, use the absolute path to your marketplace:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">/plugin marketplace add <span style="color: var(--accent-primary); font-weight: bold;">/absolute/path/to</span>/my-claude-marketplace/py-helper-marketplace</code></pre>
<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary); font-style: italic;">(Make sure to replace the highlighted <code style="color: var(--code-text);">/absolute/path/to</code> part with your actual absolute path.)</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">To get the absolute path, open another terminal tab and run:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">cd my-claude-marketplace/py-helper-marketplace && pwd</pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see a success message like this:</p>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ /plugin marketplace add /Users/senthilpalanivelu/Downloads/my-claude-marketplace/py-helper-marketplace                                                       
  ⎿  Successfully added marketplace: py-helper-marketplace</code>
  
<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Step 3 — Install and reload</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;">/plugin install py-helper@py-helper-marketplace</pre>

<p style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--text-secondary); font-size: 0.9rem; padding-left: 0.5rem; border-left: 2px solid var(--accent-primary);">
  Where:<br>
  <code style="color: var(--code-text);">py-helper</code> is the plugin you want to install<br>
  <code style="color: var(--code-text);">py-helper-marketplace</code> is the marketplace it comes from
</p>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see a confirmation message like this:</p>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;"> /plugin install py-helper@py-helper-marketplace                                                                                                            
  ⎿  ✓ Installed py-helper. Run /reload-plugins to activate..</code>

<p style="margin-bottom:0.5rem; line-height:1.75;">Then, reload your plugins to activate the changes:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">/reload-plugins</code></pre>
 
<p style="margin-bottom:0.5rem; line-height:1.75;">You can also list all active plugins to confirm <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-helper</code> is ready:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">/plugin</code></pre>

<p style="margin-bottom:0.5rem; line-height:1.75;">You should see <code style="color: var(--code-text);">py-helper</code> listed in your marketplaces:</p>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ /plugin                                                                                                                                          
                                                                                                                                                   
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  Plugins  Discover   Installed   <span style="background: var(--accent-primary); color: var(--bg-color); padding: 0 4px; border-radius: 2px; font-weight: bold;">Marketplaces</span>   Errors                                                                                            
                                                                                                                                                 
  Manage marketplaces                                                                                                                            
                                                                                                                                                   
  ❯ + Add Marketplace                                                                                                                              
                                                                                                                                                   
    ● claude-code-plugins                                                                                                                          
      anthropics/claude-code                                                                                                                       
      13 available • Updated 3/24/2026                                                                                                             
                                                                                                                                                   
    ● ✻ claude-plugins-official ✻                                                                                                                  
      anthropics/claude-plugins-official                                                                                                           
      118 available • 2 installed • Updated 3/24/2026                                                                                              
                                                                                                                                                   
    ● everything-claude-code                                                                                                                       
      affaan-m/everything-claude-code                                                                                                              
      1 available • 1 installed • Updated 3/17/2026                                                                                                
                                                                                                                                                   
    <span style="color: var(--accent-primary); font-weight: bold;">● py-helper-marketplace
      /Users/senthilpalanivelu/Downloads/my-claude-marketplace/py-helper-marketplace                                                                          
      1 available • 1 installed • Updated 3/24/2026</span>
                                                                                                                                                   
    ● ui-ux-pro-max-skill                                                                                                                          
      nextlevelbuilder/ui-ux-pro-max-skill                                                                                                         
      1 available • 1 installed • Updated 3/15/2026</code>
<p style="margin-top: 1.25rem; margin-bottom: 0.5rem; line-height: 1.75; font-weight: 500;">Now that you have installed the plugin, it's time to test it!</p>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="6" class="tutorial-nav-link previous">
    <span>←</span> Previous: Verify
  </a>
  <a href="#" data-goto-tab="8" class="tutorial-nav-link">
    Next: Test the Plugin <span>→</span>
  </a>
</div>
`},{label:"8. Test",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Test Each Component]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Now test all four parts of the plugin one by one inside Claude Code.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 1 — Skill</p>

<p style="margin-bottom:0.75rem; line-height:1.75;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code> operates on whatever code is in the conversation context.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">can you review app.py?</code></pre>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Claude should auto-apply the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-review</code> skill. You will see a <strong>Tool Use</strong> indicator in the terminal:</p>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;"> 🔧 py-helper: py-review(path: "app.py")</code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 2 — Command</p>
<p style="margin-bottom:0.75rem; line-height:1.75;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">py-fix</code> uses <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">$ARGUMENTS</code> — meaning it takes a file path as input, making it suitable for operating on files outside the current context.</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.85rem; line-height: 1.5;"><code class="language-bash">/py-helper:py-fix app.py</code></pre>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ /py-helper:py-fix app.py                                                                                                                         
                                                                                                                                                   
<span style="background: rgba(0, 255, 0, 0.15); border-radius: 4px; padding: 0 2px;">⏺ Skill(py-helper:py-fix)</span>                                                                                                                          
<span style="background: rgba(0, 255, 0, 0.15); border-radius: 4px; padding: 0 2px;">  ⎿  Successfully loaded skill</span>                                                                                                                     
                                                                                                                                                   
⏺ I have read app.py. Let me apply the fixes:                                                                                           
                                                                                                                                                   
⏺ Update(app.py)

⏺ Summary of Changes                          
                                                                                          
  PEP 8 Fixes                                                                                                                                      
                                                                                                                                                   
<div style="margin: 0.5rem 0 1rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--surface-dark); overflow-x: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <table style="width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--code-green); min-width: 800px; line-height: 1.4;">
    <thead>
      <tr style="border-bottom: 1px solid var(--border-color); background: rgba(255,255,255,0.03);">
        <th style="padding: 0.6rem 0.8rem; text-align: left; border-right: 1px dotted var(--border-color); color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem; width: 60px;">Line</th>
        <th style="padding: 0.6rem 0.8rem; text-align: left; border-right: 1px dotted var(--border-color); color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem; width: 180px;">Before</th>
        <th style="padding: 0.6rem 0.8rem; text-align: left; border-right: 1px dotted var(--border-color); color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem; width: 280px;">After</th>
        <th style="padding: 0.6rem 0.8rem; text-align: left; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.7rem;">Why</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">01</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--syntax-keyword); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">def add_numbers(a,b):</code></td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--code-green); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">def add_numbers(a: int, b: int):</code></td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">Added space after comma and type hints</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">02</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--syntax-keyword); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">x=a+b</code></td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--code-green); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">return a + b</code></td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">Added spaces around operators; removed unused variable <code style="color: var(--text-secondary); font-family: 'JetBrains Mono', monospace;">x</code></td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">03-04</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--syntax-keyword); white-space: nowrap;">Trailing whitespace</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--code-green); white-space: nowrap;">Removed</td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">PEP 8: no trailing whitespace</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">05</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--syntax-keyword); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">def greet(name):</code></td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--code-green); padding: 0; white-space: nowrap; font-family: 'JetBrains Mono', monospace;">def greet(name: str) -> None:</code></td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">Added type hints</td>
      </tr>
      <tr>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--text-secondary);">08-09</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); color: var(--syntax-keyword); white-space: nowrap;">Module-level code</td>
        <td style="padding: 0.6rem 0.8rem; border-right: 1px dotted var(--border-color); white-space: nowrap;"><code style="background: transparent; color: var(--code-green); padding: 0; white-space: nowrap;">if __name__ == "__main__":</code></td>
        <td style="padding: 0.6rem 0.8rem; color: var(--text-secondary);">Prevents execution on import</td>
      </tr>
    </tbody>
  </table>
</div>

                  
  Type Hints Added                                                                                                                                 
                  
  - add_numbers(a: int, b: int) -> int - Parameters and return type                                                                                
  - greet(name: str) -> None - Parameter and return type
                                                                                                                                                   
  Docstrings Added                                                                                                                                 
                                                                                                                                                   
  - add_numbers: "Add two numbers and return the result."                                                                                          
  - greet: "Print a greeting message to the console."
                                                                                                                                                   
  Additional Improvements                                                                                                                          
                                                                                                                                                   
  - Removed intermediate variable x in add_numbers (direct return is cleaner)                                                                      
  - Added proper blank line between functions (PEP 8 requires 2 blank lines)

  The updated code now follows Python best practices and is more maintainable, readable, and professional.</code>


<p style="margin-bottom:0.75rem; line-height:1.75;">The intended workflow is sequential: run <code style="color: var(--code-text);"> /py-review </code> first to understand the problems, then run <code style="color: var(--code-text);"> /py-fix app.py </code> when you're ready to apply the fixes.</p>


<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 3 — Hook</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">add password="abc123" to app.py</code>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ add password="abc123" to app.py                                                                                                                  
                                  
⏺ I'll add the password variable to app.py. Let me first check the current content of the file and then make the update.                           
                                                                                                                                                   
  Read 1 file (ctrl+o to expand)                                                                                                                   
           
⏺ Now I'll add the password variable to the file. I'll place it near the top of the file, after the imports (though there are no imports in this   
  file). I'll add it right after the module docstring (which doesn't exist yet) or at the beginning of the file.

⏺ Update(app.py)                                                                                                                                   
  ⎿  <span style="color: var(--syntax-keyword);">Error: PreToolUse:Edit hook error: Prompt hook condition was not met: The edit introduces a hardcoded password ('abc123') which is a security risk. Hardcoded secrets should be avoided and instead be loaded from environment variables or secure configuration management systems.</span>
                                                                                          
⏺ I understand the security concern. The hook is preventing me from adding a hardcoded password, which is actually a good security practice.
  Hardcoding passwords in source code is a security risk because:                                                                                  
   
  1. The password would be visible to anyone with access to the code                                                                               
  2. It would be difficult to change the password without modifying the code
  3. It could accidentally be committed to version control systems                                                                                 
                                                                                                                                                   
  Instead of adding the password directly to the file, I recommend one of these more secure approaches:                                            
                                                                                                                                                   
  1. Environment Variables: Store the password in an environment variable and read it in the code:                                                 
  import os       
  password = os.getenv('APP_PASSWORD', 'default_password')                                                                                         
  2. Configuration File: Store the password in a separate configuration file that is not committed to version control:                             
  import json                                                                                                                                      
  with open('config.json') as f:                                                                                                                   
      config = json.load(f)                                                                                                                        
      password = config.get('password')                                                                                                            
  3. Command Line Arguments: Pass the password as a command line argument when running the script.</span></code>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Test 4 — MCP Context7 Connection</p>
<p style="margin-bottom:0.5rem; line-height:1.75;">First, verify the MCP server is loaded</p>
<code style="display: block; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-text); white-space: pre-wrap;">/mcp</code>
<code style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: monospace; color: var(--code-green); white-space: pre-wrap;">❯ /mcp                                                                                                                                             
                                                                                                                                                   
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  Manage MCP servers                                                                                                                               
  4 servers                                                                                                                                        
                                                                                                                                                   
    User MCPs (/Users/senthilpalanivelu/.claude.json)                                                                                              
  ❯ magic · ✔ connected                                                                                                                            
    stitch · ✔ connected                                                                                                                           
    supadata · ✔ connected

    Built-in MCPs (always available)
    plugin:py-helper:context7 · ✔ connected

  https://code.claude.com/docs/en/mcp for help</code>

<p style="margin-top:1.5rem; margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1.1rem;">How to Use It</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">Just add <code style="color: var(--code-text);">use context7</code> to any Python question:</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background: var(--surface-color); border-bottom: 1px solid var(--border-color);">
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">What you say</th>
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">What Claude does</th>
    </tr>
  </thead>
  <tbody style="line-height:1.6; color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">how do I use pandas groupby? use context7</code></td>
      <td style="padding: 0.75rem;">Fetches live pandas docs and gives you current syntax</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">what's new in FastAPI 0.115? use context7</code></td>
      <td style="padding: 0.75rem;">Pulls the actual FastAPI changelog and summarises it</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">how do I use pytest fixtures? use context7</code></td>
      <td style="padding: 0.75rem;">Gets real pytest docs, not training data from months ago</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;"><code style="color: var(--code-text);">show me latest asyncio syntax use context7</code></td>
      <td style="padding: 0.75rem;">Fetches current Python asyncio docs</td>
    </tr>
  </tbody>
</table>

<p style="margin: 1.5rem 0; line-height:1.75; color: var(--text-secondary); font-style: italic;">Context7 is useful on literally every Python coding session — the moment you touch <code style="color: var(--code-text);">requests</code>, <code style="color: var(--code-text);">pandas</code>, <code style="color: var(--code-text);">FastAPI</code>, <code style="color: var(--code-text);">pytest</code> or any other library, it's working for you in the background.</p>

<p style="margin-top:2.5rem; margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">The Problem It Solves</p>
<p style="margin-bottom:0.75rem; line-height:1.75;">When you ask Claude (or any AI) how to use a Python library, Claude answers based on its <strong>training data</strong> — which has a cutoff date. Libraries like <code style="color: var(--code-text);">pandas</code>, <code style="color: var(--code-text);">FastAPI</code>, and <code style="color: var(--code-text);">pytest</code> update constantly. This means Claude might give you:</p>

<ul style="margin: 0.75rem 0 1.25rem 1.25rem; line-height:1.75; color: var(--text-secondary);">
  <li>A method that was <strong>renamed</strong> in the latest version</li>
  <li>A parameter that was <strong>removed</strong></li>
  <li>An old way of doing something that now has a <strong>better approach</strong></li>
  <li>Code that flat out <strong>doesn't work</strong> on your installed version</li>
</ul>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

<p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">What Context7 Does</p>
<p style="margin-bottom:1rem; line-height:1.75;">Context7 sits between you and Claude. Every time you ask about a library, it:</p>

<ol style="margin: 0.75rem 0 1.25rem 1.25rem; line-height:1.75; color: var(--text-secondary);">
  <li><strong>Looks up the real, live documentation</strong> directly from the library's source</li>
  <li><strong>Feeds it to Claude</strong> before Claude answers you</li>
  <li><strong>Claude then answers using current docs</strong> instead of potentially stale training data</li>
</ol>

<p style="margin-bottom:0.75rem; line-height:1.75; font-style: italic;">Think of it like giving Claude the ability to read the actual manual before answering — every single time.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

<p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">A Concrete Example</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-secondary); font-size:0.95rem;">Without Context7:</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1.25rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text-secondary); white-space: pre-wrap;"><code>You: how do I read a CSV in pandas?
Claude: Use pd.read_csv() with the parse_dates parameter...
        (might be based on pandas 1.x docs, but you're running 2.x)</code></pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:0.95rem;">With Context7:</p>
<pre style="display: block; padding: 1rem; background: var(--surface-dark); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>You: how do I read a CSV in pandas? use context7
⏺ I'll help you learn how to read a CSV file in pandas using the Context7 documentation service. Let me look up the relevant documentation for you.
                                                                                                                                                   
⏺ plugin:py-helper:context7 - resolve-library-id (MCP)(query: "How to read a CSV file in pandas", libraryName: "pandas")                           
  ⎿  Available Libraries:                                                                                                                          
                                                                                                                                                   
     - Title: pandas                                                                                                                               
     … +34 lines (ctrl+o to expand)                                                                                                                
                                                                                                                                                   
⏺ Now I'll query the documentation for reading CSV files in pandas:                                                                                
                                                                                                                                                   
⏺ <span style="background: rgba(176, 141, 87, 0.2); border-radius: 4px; padding: 0 2px;">plugin:py-helper:context7 - query-docs (MCP)</span>(libraryId: "/websites/pandas_pydata", query: "How to read a CSV file into a pandas DataFrame")      
  ⎿  ### Read CSV data into pandas DataFrame                                                                                                       
                                                                                                                                                   
     Source: https://pandas.pydata.org/docs/getting_started/intro_tutorials/09_timeseries                                                          
     … +49 lines (ctrl+o to expand)                                                                                                                
                                                                                                                                                   
⏺ Based on the documentation from Context7, here's how to read a CSV file in pandas:                                                               
                                                                                                                                                   
  Basic CSV Reading                                                                                                                                
                                                                                                                                                   
  The most common way to read a CSV file in pandas is using the pd.read_csv() function:                                                            
                                                                                                                                                   
  import pandas as pd                                                                                                                              
                                                                                                                                                   
  # Basic usage                                                                                                                                    
  df = pd.read_csv('filename.csv')                                                                                                                 
                                                                                                                                                   
  # Example with a specific file                                                                                                                   
  titanic = pd.read_csv("data/titanic.csv")                                                                                                        
                                                                                                                                                   
  Common Parameters                                                                                                                                
                                                                                                                                                   
  The read_csv() function has many useful parameters:                                                                                              
                  
  import pandas as pd                                                                                                                              
                                                                                                                                                   
  # Read CSV with specific options                                                                                                                 
  df = pd.read_csv(                                                                                                                                
      'filename.csv',                                                                                                                              
      index_col=0,           # Set first column as index                                                                                           
      parse_dates=True,       # Parse index column as dates                                                                                        
      sep=',',               # Specify separator (default is comma)                                                                                
      header=0,              # Row to use as column names                                                                                          
      usecols=['col1', 'col2']  # Only read specific columns                                                                                       
  )                                                                                                                                                
                                                                                                                                                   
  Simple Example                                                                                                                                   
                                                                                                                                                   
  Here's a complete example:                                                                                                                       
                  
  import pandas as pd                                                                                                                              
                                                                                                                                                   
  # Read a CSV file into a DataFrame                                                                                                               
  df = pd.read_csv('data.csv')                                                                                                                     
                                                                                                                                                   
  # Display the first few rows                                                                                                                     
  print(df.head())                                                                                                                                 
                                                                                                                                                   
  # Get basic info about the DataFrame                                                                                                             
  print(df.info())                                                                                                                                 
                                                                                                                                                   
  This is the standard way to load CSV data into pandas for analysis. The function automatically handles most CSV formatting, but you can customize its behavior with the various parameters when needed.</code></pre>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 2rem 0;">

<p style="margin-bottom:0.75rem; font-weight:700; color: var(--text-primary); font-size:1.15rem;">Why It Fits the py-helper Plugin Perfectly</p>
<p style="margin-bottom:1rem; line-height:1.75;">Our plugin is all about <strong>Python code quality</strong>. Context7 completes that picture:</p>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.95rem; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background: var(--surface-color); border-bottom: 2px solid var(--border-color);">
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">Plugin Component</th>
      <th style="padding: 0.75rem; text-align: left; color: var(--text-primary);">What it handles</th>
    </tr>
  </thead>
  <tbody style="line-height:1.6; color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--text-primary);">Skill (py-review)</td>
      <td style="padding: 0.75rem;">Finds bugs and style issues</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--text-primary);">Command (py-fix)</td>
      <td style="padding: 0.75rem;">Fixes PEP 8 violations</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--text-primary);">Hook</td>
      <td style="padding: 0.75rem;">Guards against secrets and syntax errors</td>
    </tr>
    <tr style="background: rgba(0, 242, 255, 0.05);">
      <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-primary);">MCP (Context7)</td>
      <td style="padding: 0.75rem; font-weight: 700; color: var(--accent-primary);">Ensures library usage is always up to date</td>
    </tr>
  </tbody>
</table>

<p style="margin-top: 1.25rem; margin-bottom: 1.5rem; line-height: 1.75; color: var(--text-secondary);">Without Context7, Claude could review and fix your code perfectly — but still suggest a library pattern that's outdated. With it, the entire plugin becomes <strong>version-aware</strong>.</p>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">If something is not working, the fastest fallback is usually <code style="font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/reload-plugins</code>.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="7" class="tutorial-nav-link previous">
    <span>←</span> Previous: Install
  </a>
  <a href="#" data-goto-tab="9" class="tutorial-nav-link">
    Next: Share With Your Team <span>→</span>
  </a>
</div>
`},{label:"9. Share",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Share With Your Team]</strong>

<p style="margin-bottom:0.75rem; line-height:1.75;">Once the plugin works locally, you can publish the marketplace and share it with your team.</p>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Push the marketplace to GitHub</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap;"><code>cd my-claude-marketplace/py-helper-marketplace
git init
git add .
git commit -m "Initial plugin"
git remote add origin https://github.com/yourname/py-helper.git
git push -u origin main</code></pre>

<p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1rem;">Teammates install it with two commands inside Claude Code</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap;"><code>/plugin marketplace add yourname/py-helper
/plugin install py-helper@py-helper-marketplace</code></pre>

<div style="padding: 1.25rem; background: rgba(0, 242, 255, 0.03); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0;">
  <p style="margin: 0 0 0.75rem; font-weight: 600; color: var(--text-primary);">You are done</p>
  <ul style="margin: 0 0 0 1.5rem; color: var(--text-secondary); line-height: 1.75;">
    <li style="margin-bottom: 0.35rem;">A skill that auto-reviews Python code</li>
    <li style="margin-bottom: 0.35rem;">A command that fixes style issues on demand</li>
    <li style="margin-bottom: 0.35rem;">Hooks that guard every file save</li>
    <li style="margin-bottom: 0;">An MCP connection to Context7 for live Python documentation</li>
  </ul>
</div>

<div style="padding: 1.5rem; background: linear-gradient(135deg, rgba(0, 242, 255, 0.1), rgba(112, 0, 255, 0.1)); border: 1px solid var(--accent-primary); border-radius: 12px; margin: 2rem 0; text-align: center;">
  <p style="margin: 0 0 0.5rem; font-size: 1.25rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.02em;">Congratulations!</p>
  <p style="margin: 0; line-height: 1.6; color: var(--text-secondary);">You've successfully built and shared your first high-quality Claude Plugin. Your Python development workflow is now powered by custom skills, automated style fixes, security-first hooks, and live documentation via MCP. <strong>Go build something amazing!</strong></p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="8" class="tutorial-nav-link previous">
    <span>←</span> Previous: Test
  </a>
  <a href="#" data-goto-tab="9" class="tutorial-nav-link">
    Next: Additional <span>→</span>
  </a>
</div>
`},{label:"10. Additional",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">[Maintenance & Troubleshooting]</strong>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-top: 4px solid var(--accent-secondary); border-radius: 8px; margin: 1.5rem 0;">
  <p style="margin-bottom:0.35rem; font-weight:700; color: var(--text-primary); font-size:1.1rem;">How to remove a Marketplace plugin from Claude</p>
  <p style="margin-bottom:0.5rem; line-height:1.75;">Inside Claude Code, first list what's registered:</p>
  <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-text); border-left: 2px solid var(--accent-secondary);">/plugin marketplace list</code>
  <pre style="display: block; padding: 1rem; background: var(--surface-dark); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--code-green); white-space: pre-wrap;"><code>❯ /plugin marketplace list                                                                                                                         
  ⎿  Configured marketplaces:                                                                                                                      
       • claude-plugins-official                                                                                                                   
       • claude-code-plugins
       • ui-ux-pro-max-skill
       • everything-claude-code
       • <span style="background: var(--surface-hover); border-radius: 4px; padding: 0 4px; color: var(--accent-primary); font-weight: bold;">py-helper-marketplace</span></code></pre>
  <p style="margin-bottom:0.5rem; line-height:1.75;">You can remove it by using the following command:</p>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); border-left: 2px solid var(--accent-secondary);"><code>/plugin marketplace remove py-helper-marketplace</code></pre>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="9" class="tutorial-nav-link previous">
    <span>←</span> Previous: Share
  </a>
</div>
`}],interactiveType:"custom"},Dt={id:"claude-designer-stack",title:"Claude Designer Stack",category:"Tutorial",tags:["Claude Code","Design","Skills"],tabs:[{label:"Overview",content:`
<h1 style="margin-bottom: 1rem; color: var(--text-primary);">Claude Code Designer Skills</h1>

<p style="margin-bottom: 0.5rem; line-height: 1.75;">This post covers six design-focused skills from Anthropic's official <a href="https://github.com/anthropics/skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">skills repository</a>. For each skill, we will cover:</p>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li><strong>What it does</strong>: Its core purpose and capabilities</li>
  <li><strong>How to install it</strong>: Setup instructions via CLI or marketplace</li>
  <li><strong>How to call it</strong>: Auto-triggering keywords and manual commands</li>
  <li><strong>Real example prompts</strong>: Practical ways to use it in your workflow</li>
</ul>

<p style="margin-bottom: 1rem; line-height: 1.75;">At the end, we'll see how all six can work together to design a complete site from scratch.</p>
`},{label:"What Are Skills?",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">What Are Claude Code Skills?</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;">A skill is simply a folder containing a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">SKILL.md</code> file with YAML frontmatter and markdown instructions. Claude reads it dynamically when the task matches the skill's description. Every skill lives under <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">~/.claude/skills/</code> (global) or <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">./.claude/skills/</code> (project-local).</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Key anatomy:</strong></p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">my-skill/
├── SKILL.md        ← required: metadata + instructions
├── scripts/        ← optional: helper code
├── references/     ← optional: extra docs
└── assets/         ← optional: templates, fonts, icons</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">To get a detailed understanding about Claude skills, check out my skills tutorial: <a href="https://senthilcaesar.github.io/knowledgelab/#claude-skills-tutorial" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary); text-decoration: underline;">Claude Skills Tutorial</a>.</p>
`},{label:"Installing",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Installing the Skills</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;">Five of the skills can be installed using the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">npx skills</code> CLI, pointing at Anthropic's public GitHub repository. Run these commands in your terminal:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">npx skills add https://github.com/anthropics/skills --skill frontend-design -a claude-code
npx skills add https://github.com/anthropics/skills --skill theme-factory -a claude-code
npx skills add https://github.com/anthropics/skills --skill brand-guidelines -a claude-code
npx skills add https://github.com/anthropics/skills --skill canvas-design -a claude-code
npx skills add https://github.com/anthropics/skills --skill skill-creator -a claude-code</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">You can also install them all at once in the Claude Code terminal using the plugin marketplace:</p>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">/plugin marketplace add anthropics/skills</pre>

`},{label:"1. frontend-design",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">1. frontend-design</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> Generates distinctive, production-ready frontend interfaces — components, landing pages, dashboards, React apps, HTML/CSS layouts — with a strong, intentional aesthetic point of view. It actively avoids the generic "AI slop" look (no purple gradients on white, no Inter/Roboto defaults, no cookie-cutter layouts).</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Just describe what you want to build. The skill triggers automatically on words like "build," "create a component," "landing page," "dashboard," "React app," "HTML layout," or "beautify this UI."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Build me a dark-themed SaaS landing page for a developer tool called Axiom"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Create a React dashboard component for real-time analytics with a brutalist aesthetic"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Design a product card component that feels luxury/high-end"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Make a personal portfolio page — go wild with the aesthetic, I want it memorable"</pre>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Explicit invocation</strong> — call the skill by name for guaranteed triggering:</p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use frontend-design to build me a landing page for Axiom"</pre>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Slash command with no arguments</strong> — run <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">/frontend-design</code> on its own in Claude Code and Claude will prompt you for the brief interactively:</p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">/frontend-design
→ "What would you like me to build? Tell me about the component,
   page, or application — including purpose, audience, and constraints."
→ You describe your project
→ Claude commits to an aesthetic direction and outputs the code</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">This is the closest thing to a guided walkthrough — useful if you're not sure how to frame your request. Once you answer, Claude makes all remaining design decisions itself (aesthetic direction, fonts, layout, animations) and generates the code without further questions.</p>
`},{label:"2. theme-factory",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">2. theme-factory</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> A toolkit for applying professional font and color themes to any artifact — slide decks, docs, reports, HTML landing pages, and more. It ships with <strong>10 pre-set curated themes</strong> (including "Ocean Depths," a professional maritime palette, and others), each with carefully selected color palettes and font pairings. It can also generate a brand-new custom theme on the fly from a brief description.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>The 10 built-in themes include:</strong> Ocean Depths, plus nine others covering professional, bold, minimalist, warm, and other aesthetic directions — all visible in the bundled <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">theme-showcase.pdf</code>.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>Custom theme generation:</strong> If none of the presets fit, describe what you want in plain language and the skill generates a new theme with matching fonts and colors, shows it for review, then applies it.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Triggers on words like "apply a theme," "style this," "make this look consistent," "theme my slides/doc/report," or "change the colors and fonts."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Apply a theme to this presentation — show me the options first"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Style my HTML landing page with the Ocean Depths theme"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Generate a custom dark theme for my report — think editorial magazine"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Apply consistent styling across all my slides using theme-factory"</pre>
`},{label:"3. brand-guidelines",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">3. brand-guidelines</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> Applies Anthropic's official brand colors, typography, and visual identity to any artifact. Use it when you need your output to carry Anthropic's look-and-feel — whether that's a doc, presentation, HTML page, or any design asset. It's a post-processing / styling layer that wraps around whatever you've already created.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;">Keywords that signal this skill: branding, corporate identity, visual identity, brand colors, typography, Anthropic brand, visual formatting, company design standards.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Trigger with phrases like "apply Anthropic's brand," "make this match our brand guidelines," "use the official brand colors," "style this with our visual identity," or "brand this doc."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Apply Anthropic's brand guidelines to this slide deck"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Restyle this HTML report using our official brand colors and typography"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Make this landing page match Anthropic's visual identity"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Post-process this artifact to align with brand guidelines"</pre>

<div style="padding: 1rem 1.1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 10px; margin: 1rem 0;">
  <p style="margin: 0; line-height: 1.75; color: var(--text-secondary);"><strong>Tip:</strong> This skill is most powerful as a finishing step — build first with <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code> or <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">theme-factory</code>, then apply <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code> as a final pass.</p>
</div>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<p style="margin-bottom: 0.5rem; line-height: 1.75; font-size: 1.25rem;"><strong>[brand-guideline skill example]</strong></p>
<p style="margin-bottom: 1rem; line-height: 1.75;">Your web app can look like it was built by Anthropic — in one prompt.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;">There's an official brand-guidelines skill that knows every Anthropic design token — the coral accent, the warm neutrals, the typography, the spacing system. All of it.</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Step 1 — Install the brand skill</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">npx skills add anthropics/skills --skill brand-guidelines -a claude-code</pre>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Step 2 — Open Claude Code in your project terminal</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">claude</pre>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Step 3 — Run this single prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">Restyle this web app's landing page to match Anthropic's visual identity. Use Anthropic's official brand guidelines colors, typography, and spacing. Preserve all existing functionality and layout structure — only change the visual styling.</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Claude reads the skill file, pulls the defined hex values and spacing rules — then rewrites your CSS.</p>
`},{label:"4. canvas-design",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">4. canvas-design</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> Creates beautiful, high-fidelity visual art as <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.png</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.pdf</code> files using a two-step design philosophy process. It's for static, visually-rich pieces: posters, art prints, infographics, identity materials, and any output that's 90% visual and 10% text.</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>The two-step workflow:</strong></p>

<p style="margin-bottom: 0.75rem; line-height: 1.75;"><strong>Step 1 — Design Philosophy Creation (.md file):</strong><br>
Claude doesn't jump straight to designing. It first authors a <em>visual manifesto</em> — a named aesthetic movement (e.g., "Brutalist Joy," "Chromatic Silence") with a 4–6 paragraph philosophy articulating how space, color, form, scale, and composition should behave. This becomes the creative DNA of the piece.</p>

<p style="margin-bottom: 0.75rem; line-height: 1.75;"><strong>Step 2 — Canvas Creation (.pdf or .png):</strong><br>
Using that philosophy as a guide, Claude creates the actual artwork — museum-quality, with repeating patterns, perfect shapes, sparse clinical typography, and expert craftsmanship. The SKILL.md explicitly instructs: <em>"Create work that looks like it took countless hours. Make it appear as though someone at the absolute top of their field labored over every detail."</em></p>

<p style="margin-bottom: 1rem; line-height: 1.75;">A built-in self-critique pass ("The user ALREADY said it isn't perfect enough — refine without adding more elements") ensures the final output is pristine.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Trigger with "create a poster," "design a piece of art," "make a visual," "I want something that looks like it could hang in a museum," or "design a static graphic."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Create a poster for a jazz festival — go for something abstract and art-deco"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Design a visual art piece inspired by the concept of machine learning"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Make a multi-page coffee table book spread about the ocean"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Create a minimalist brand identity poster — I want it to feel Bauhaus"</pre>
`},{label:"5. skill-creator",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">5. skill-creator</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>What it does:</strong> A meta-skill that guides you through creating, testing, iterating on, and packaging your own Claude Code skills. It covers the full lifecycle: intent capture → SKILL.md drafting → test case creation → qualitative review → quantitative benchmarking → iteration → description optimization → packaging as a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.skill</code> file.</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>The core loop:</strong></p>
<ol style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li>Understand what you want the skill to do</li>
  <li>Draft the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">SKILL.md</code></li>
  <li>Run the skill on test prompts</li>
  <li>Review outputs (with or without subagents)</li>
  <li>Refine based on feedback</li>
  <li>Optimize the skill description for better auto-triggering</li>
  <li>Package and distribute</li>
</ol>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>Key insight from the SKILL.md:</strong> The <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">description</code> field is the primary triggering mechanism — it's how Claude decides whether to invoke the skill. Well-crafted descriptions should be slightly "pushy," mentioning both what the skill does <em>and</em> when to use it, including synonyms and edge cases.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;"><strong>How to call it:</strong> Say "help me create a skill," "I want to turn this workflow into a skill," "improve my existing skill," or "run evals on my skill."</p>

<p style="margin-bottom: 0.5rem; line-height: 1.75;"><strong>Example prompts:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Help me create a skill for generating Python data pipeline code"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Turn this conversation into a Claude Code skill for writing PRDs"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"My skill isn't triggering reliably — help me optimize the description"</pre>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Run evaluations on my draft skill and help me improve it"</pre>
`},{label:"Combine All 5",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Combining All 6 Skills: Building "Prompt Shelf" from Scratch</h2>

<p style="margin-bottom: 1rem; line-height: 1.75;">Let's walk through a real-world example — <strong>Prompt Shelf</strong>, a web-based repository for storing, searching, and organizing AI prompts.</p>

<p style="margin-bottom: 1rem; line-height: 1.75;">Here's exactly how all six skills are invoked in sequence to go from blank canvas to production-ready app.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 1 — Define the Visual Philosophy (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">canvas-design</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">Before touching any code, establish the soul of the app. Prompt Shelf is a personal tool for knowledge workers — it should feel calm, organized, and intellectually focused. Use <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">canvas-design</code> to produce a visual manifesto and reference poster that captures that energy.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use canvas-design to create a visual philosophy and reference poster for "Prompt Shelf"
— a web app for organizing AI prompts. The aesthetic should feel like a well-curated
library: structured, editorial, with a quiet confidence. Think archival systems meets
modern developer tooling. Output a .md philosophy file and a .pdf poster."</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Canvas-design generates a named aesthetic movement — say, <strong>"Archival Precision"</strong> — with a 4–6 paragraph manifesto covering how space, color, typographic weight, and composition should behave throughout the app. The <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.pdf</code> poster becomes your visual north star for every subsequent decision: sidebar proportions, card density, color palette, font choices.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 2 — Lock In a Theme System (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">theme-factory</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">With the philosophy established, translate it into a concrete, reusable theme — exact CSS variables, color tokens, and font pairings that will flow consistently through every component.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use theme-factory to generate a custom theme for Prompt Shelf based on the
"Archival Precision" philosophy we just created. I need:
- A primary color palette (background, surface, border, text hierarchy)
- An accent color for active sidebar states and interactive elements
- A font pairing: one display font for headings, one monospace-adjacent font
  for prompt content, one clean sans for UI labels
- Output as CSS variables ready to drop into a :root {} block"</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Theme-factory either matches one of its 10 presets to your philosophy or generates a custom theme from scratch. The output is a named theme — e.g., <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">prompt-shelf-archival</code> — with a complete <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">:root {}</code> CSS variables block. These tokens (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">--color-bg</code>, <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">--color-surface</code>, etc.) will be the single source of truth referenced by every component the <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code> skill produces.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 3 — Build the Core Application (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">Now invoke the main build. Pass the full specification — architecture, tech stack, features, and the theme tokens from Phase 2 to <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code>.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use frontend-design to build "Prompt Shelf" — a React 19 + Vite 8 web app for
storing, searching, and organizing AI prompts.

Tech stack (strict):
- React 19 with the \`use\` API for data and improved Transitions
- Vite 8 as the build tool
- Lucide React for Sidebar and View Toggle icons
- Pure Vanilla CSS — CSS Grid for layout, CSS Variables for the design system

Apply the prompt-shelf-archival theme tokens from our theme-factory output.

Architecture requirements:
1. MainLayout component — CSS Grid defining sidebar + main content areas
2. Sidebar — persistent on desktop, collapsible on mobile; maps through categories
   (Coding, Research, Design, Career, Personal); shows active state
3. Data model — Title, Content, Category, Tags[]
4. Search — real-time keyword search bar synced with sidebar category filter
5. Layout toggle — Grid View (card-based) vs List View (compact rows) via Lucide icons
6. State management — combined filtering logic for category selection + search text

Sidebar CSS specifics: position: sticky, height: 100vh, hover states.

Make it production-grade and visually memorable — not generic."</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Frontend-design reads the Archival Precision philosophy (indirectly, via the theme tokens and the aesthetic context you've provided), commits to a bold direction, and produces the core components and application logic using clean, vanilla CSS.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 4 — Apply Brand Guidelines (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">With the app built, run a final brand pass to ensure everything — the app itself and its documentation — is visually consistent and on-brand.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Apply brand-guidelines to post-process the Prompt Shelf app and its docs.
Ensure the color usage, typography hierarchy, spacing rhythm, and component
styling all align with our visual identity standards. Flag anything that
deviates from the Archival Precision theme we established."</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code> does a systematic review to ensure consistency, correcting any deviations from the established hierarchy and interactive patterns.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-primary);">Phase 5 — Package the Workflow as a Reusable Skill (<code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code>)</h3>

<p style="margin-bottom: 1rem; line-height: 1.75;">Codify this repeatable, high-quality workflow so you can reproduce this entire pipeline with a single skill invocation in the future.</p>

<p style="margin-bottom: 0.35rem; line-height: 1.75;"><strong>Prompt:</strong></p>
<pre style="display: block; padding: 0.9rem 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">"Use skill-creator to turn our Prompt Shelf build workflow into a reusable
Claude Code skill called "prompt-app-builder".

The skill should:
- Start with a canvas-design philosophy step
- Generate a theme via theme-factory
- Scaffold a React 19 + Vite + Vanilla CSS app via frontend-design
- End with a brand-guidelines polish pass"</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code> packages the entire process into a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.skill</code> file, optimizing the description for reliable triggering.</p>

<hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;">

<h2 style="margin-bottom: 1rem; color: var(--text-primary);">The Full Flow at a Glance</h2>

<pre style="display: block; padding: 1.2rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 1rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); font-size: 0.9rem; line-height: 1.5;">canvas-design     →  Visual philosophy + reference poster (.md + .pdf)
      ↓
theme-factory     →  CSS variable tokens (palette + fonts)
      ↓
frontend-design   →  React 19 + Vite 8 app (MainLayout, Sidebar, Search, Cards)
      ↓
brand-guidelines  →  Final brand consistency pass
      ↓
skill-creator     →  Whole workflow packaged as "prompt-app-builder.skill"</pre>

<p style="margin-bottom: 1rem; line-height: 1.75;">Each skill hands off a concrete artifact to the next: the philosophy informs the theme, the theme feeds the frontend build, brand-guidelines polishes the result, and skill-creator makes the whole pipeline reproducible.</p>
`},{label:"Quick Reference",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Quick Reference: How to Call Each Skill</h2>

<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border-color);">
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Skill</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Auto-triggers on</th>
      <th style="text-align: left; padding: 0.75rem; color: var(--text-primary);">Manual override</th>
    </tr>
  </thead>
  <tbody style="color: var(--text-secondary);">
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code></td>
      <td style="padding: 0.75rem;">"build," "landing page," "component," "dashboard," "React," "UI"</td>
      <td style="padding: 0.75rem;">"Use frontend-design to..."</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">theme-factory</code></td>
      <td style="padding: 0.75rem;">"apply theme," "style this," "consistent colors/fonts"</td>
      <td style="padding: 0.75rem;">"Use theme-factory to..."</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code></td>
      <td style="padding: 0.75rem;">"brand colors," "visual identity," "Anthropic brand," "corporate styling"</td>
      <td style="padding: 0.75rem;">"Apply brand-guidelines to..."</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">canvas-design</code></td>
      <td style="padding: 0.75rem;">"poster," "art," "visual design," "static graphic," "museum quality"</td>
      <td style="padding: 0.75rem;">"Use canvas-design to..."</td>
    </tr>
    <tr>
      <td style="padding: 0.75rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code></td>
      <td style="padding: 0.75rem;">"create a skill," "build a skill," "improve my skill," "run evals"</td>
      <td style="padding: 0.75rem;">"Use skill-creator to..."</td>
    </tr>
  </tbody>
</table>
`},{label:"Notes",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Important Notes</h2>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li><strong>Skills are loaded dynamically</strong> — only the description is always in context. The full instructions load only when the skill triggers, keeping your context window clean.</li>
  <li><strong>Skill descriptions are the routing mechanism.</strong> If a skill isn't triggering automatically, you can always invoke it manually with <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">"Use [skill-name] to..."</code> or the slash command <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">/[skill-name]</code> in Claude Code.</li>
  <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">frontend-design</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">canvas-design</code> overlap but are distinct. Frontend-design outputs working code (HTML/CSS/JS/React). Canvas-design outputs <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.png</code> and <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">.pdf</code> art files — it's for static visuals, not interactive UIs.</li>
  <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">brand-guidelines</code> is a post-processor. Use it <em>after</em> building with other skills, not as a starting point.</li>
  <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code> works slightly differently in Claude.ai vs Claude Code. In Claude.ai, subagent-based parallel test execution isn't available, so tests run sequentially and quantitative benchmarking is skipped. In Claude Code, the full eval loop with <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">run_loop.py</code> and the description optimizer is available.</li>
</ul>
`},{label:"Resources",content:`
<h2 style="margin-bottom: 1rem; color: var(--text-primary);">Resources</h2>

<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.75;">
  <li><strong>Anthropic Skills Repo:</strong> <a href="https://github.com/anthropics/skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://github.com/anthropics/skills</a></li>
  <li><strong>What are Skills?</strong> <a href="https://support.claude.com/en/articles/12512176-what-are-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://support.claude.com/en/articles/12512176-what-are-skills</a></li>
  <li><strong>Using Skills in Claude:</strong> <a href="https://support.claude.com/en/articles/12512180-using-skills-in-claude" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://support.claude.com/en/articles/12512180-using-skills-in-claude</a></li>
  <li><strong>Creating Custom Skills:</strong> <a href="https://support.claude.com/en/articles/12512198-creating-custom-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://support.claude.com/en/articles/12512198-creating-custom-skills</a></li>
  <li><strong>Skills API Quickstart:</strong> <a href="https://docs.claude.com/en/api/skills-guide" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://docs.claude.com/en/api/skills-guide</a></li>
  <li><strong>Agent Skills Spec:</strong> <a href="https://agentskills.io" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">https://agentskills.io</a></li>
</ul>

<p style="margin-bottom: 1rem; line-height: 1.75;"><em>Skills are a living system — Anthropic is actively adding new ones. Check the repo regularly, and use <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; color: var(--accent-primary);">skill-creator</code> to build your own domain-specific workflows on top of these foundations.</em></p>
`}],interactiveType:"custom"},jt={description:`
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/github/spec-kit" target="_blank" style="display: inline-block; background: var(--accent-primary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ GitHub: github/spec-kit</a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Spec-Kit</strong> is an open-source toolkit created by GitHub that helps developers adopt <strong>Spec-Driven Development (SDD)</strong> — a methodology where detailed specifications become the primary driver of code, rather than ad-hoc "vibe coding" from scratch.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Core idea:</strong> Instead of jumping straight into code, you write a clear specification first. Then your AI coding agent reads that spec and builds the implementation predictably — reducing hallucinations and surprises.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">What Problem Does It Solve?</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">AI agents given vague prompts produce inconsistent and unpredictable code.</li>
    <li style="margin-bottom: 0.5rem;">Teams waste time re-explaining intent to AI tools repeatedly.</li>
    <li>Specs traditionally get discarded — Spec-Kit makes them <em>executable</em>.</li>
  </ul>
</div>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">The 5-Step Spec-Kit Workflow</strong>
  <ol style="margin-left: 1.25rem; line-height: 1.8;">
    <li style="margin-bottom: 0.5rem;"><strong>Install Specify CLI</strong> — the command-line tool that powers the workflow</li>
    <li style="margin-bottom: 0.5rem;"><strong>/speckit.constitution</strong> — Define your project's guiding principles (quality standards, testing rules, UX consistency)</li>
    <li style="margin-bottom: 0.5rem;"><strong>/speckit.specify</strong> — Describe <em>what</em> you want to build in plain language (focus on outcomes, not tech)</li>
    <li style="margin-bottom: 0.5rem;"><strong>/speckit.plan</strong> — Provide the technical stack and architecture decisions</li>
    <li><strong>/speckit.tasks → /speckit.implement</strong> — Break work into tasks and execute them</li>
  </ol>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Install the CLI</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Install via uv (recommended)
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git

# Or via pipx
pipx install git+https://github.com/github/spec-kit.git

# Verify
specify version</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Start a New Project</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Create a new project
specify init MyProject

# Or initialize in an existing project with GitHub Copilot integration
specify init . --integration copilot</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Build a Photo Album App</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">/speckit.specify Build an app to organize photos into albums,
grouped by date, with drag-and-drop reordering.

/speckit.plan Use Vite with vanilla HTML/CSS/JS.
SQLite for local metadata storage.

/speckit.tasks
/speckit.implement</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Features</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">⭐ <strong>91k+ GitHub stars</strong> — highly adopted in the AI dev community</li>
    <li style="margin-bottom: 0.5rem;">🤖 Integrates with Claude Code, GitHub Copilot, Cursor, and 20+ AI tools</li>
    <li style="margin-bottom: 0.5rem;">🧩 Community extensions for docs, code review, CI/CD, and Azure DevOps</li>
    <li style="margin-bottom: 0.5rem;">📋 Community presets for rapid project bootstrapping</li>
    <li>🔧 Extensions are categorized as: <em>docs, code, process, integration, visibility</em></li>
  </ul>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use It in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>New feature?</strong> Write a <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/speckit.specify</code> before touching any code.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Onboarding AI?</strong> Use the constitution to give the agent project context upfront.</li>
    <li style="margin-bottom: 0.5rem;"><strong>Large projects?</strong> Break work down with <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/speckit.tasks</code> so the AI works one step at a time.</li>
    <li><strong>Team collaboration?</strong> Commit the spec files alongside code — they serve as living documentation.</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `},Nt={description:`
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/Fission-AI/OpenSpec" target="_blank" style="display: inline-block; background: var(--accent-primary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ GitHub: Fission-AI/OpenSpec</a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>OpenSpec</strong> is a lightweight, open-source framework for <strong>Spec-Driven Development (SDD)</strong> designed specifically for AI coding assistants. Unlike rigid planning tools, OpenSpec is built on a philosophy of being <em>fluid, iterative, and easy</em> — and it works with 25+ AI tools you already use.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>The Problem:</strong> AI coding assistants are powerful but unpredictable when requirements live only in chat history. OpenSpec adds a lightweight spec layer so you agree on <em>what to build before any code is written</em>.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Core Workflow: Propose → Apply → Archive</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;">You: /opsx:propose add-dark-mode

AI: Created openspec/changes/add-dark-mode/
  ✓ proposal.md  — why we're doing this, what's changing
  ✓ specs/       — requirements and scenarios
  ✓ design.md    — technical approach
  ✓ tasks.md     — implementation checklist

You: /opsx:apply

AI: Implementing tasks...
  ✓ 1.1 Add theme context provider
  ✓ 1.2 Create toggle component
  ✓ 2.1 Add CSS variables
  ✓ 2.2 Wire up localStorage
  All tasks complete!

You: /opsx:archive

AI: Archived to openspec/changes/archive/2025-01-23-add-dark-mode/
  Specs updated. Ready for the next feature.</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Install OpenSpec</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Install globally
npm install -g @fission-ai/openspec@latest

# Navigate to your project and initialize
cd your-project
openspec init

# Tell your AI to start:
/opsx:propose &lt;what-you-want-to-build&gt;</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Slash Commands</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:propose</code> — Create a change folder with proposal, specs, design, and tasks</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:apply</code> — Execute all tasks in the implementation checklist</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:archive</code> — Archive the completed change, update living specs</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:new</code> — Start a new feature from scratch</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:verify</code> — Check implementation against the spec</li>
    <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:onboard</code> — Help AI understand your existing project</li>
  </ul>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">OpenSpec vs Spec-Kit Comparison</strong>
  <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
    <thead>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <th style="text-align: left; padding: 0.5rem; color: var(--accent-secondary);">Feature</th>
        <th style="text-align: left; padding: 0.5rem; color: var(--accent-secondary);">OpenSpec</th>
        <th style="text-align: left; padding: 0.5rem; color: var(--accent-secondary);">Spec-Kit (GitHub)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.5rem;">Setup</td>
        <td style="padding: 0.5rem;">npm install, no Python needed</td>
        <td style="padding: 0.5rem;">uv/pipx, Python-based</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.5rem;">Workflow</td>
        <td style="padding: 0.5rem;">Fluid, iterate anytime</td>
        <td style="padding: 0.5rem;">Structured phase gates</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.5rem;">Brownfield support</td>
        <td style="padding: 0.5rem;">✅ First-class</td>
        <td style="padding: 0.5rem;">Primarily greenfield</td>
      </tr>
      <tr>
        <td style="padding: 0.5rem;">Stars</td>
        <td style="padding: 0.5rem;">43k+</td>
        <td style="padding: 0.5rem;">91k+</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use It in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>Before any feature:</strong> Run <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">/opsx:propose</code> to create structured change artifacts</li>
    <li style="margin-bottom: 0.5rem;"><strong>During coding:</strong> AI reads <code>tasks.md</code> and works through checklist items predictably</li>
    <li style="margin-bottom: 0.5rem;"><strong>After completion:</strong> <code>/opsx:archive</code> archives the change and keeps specs as living docs</li>
    <li><strong>Best models:</strong> Works best with Opus 4.5 and GPT 5.2 for planning and implementation</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `},Ut={description:`
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/eyaltoledano/claude-task-master" target="_blank" style="display: inline-block; background: var(--accent-primary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ GitHub: eyaltoledano/claude-task-master</a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Claude Task Master</strong> is an AI-powered task management system you can drop into AI coding environments like <strong>Cursor, Lovable, Windsurf, Roo, and Claude Code</strong>. It brings structured project planning directly into your coding workflow — no external Jira or Notion needed.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Core idea:</strong> Parse a PRD, auto-generate a prioritized task list, and let your AI work through it systematically — tracking status, handling dependencies, and adapting when requirements change.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">What Can It Do?</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">📄 Parse a PRD and auto-generate a structured task list</li>
    <li style="margin-bottom: 0.5rem;">🔀 Break large tasks into sub-tasks automatically</li>
    <li style="margin-bottom: 0.5rem;">📊 Track task status: pending, in-progress, done, blocked</li>
    <li style="margin-bottom: 0.5rem;">🔄 Handle mid-project pivots by updating tasks and dependencies</li>
    <li>💬 Works via AI chat commands inside your IDE</li>
  </ul>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Install</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">npm install -g task-master-ai
cd your-project && task-master init</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Typical Workflow</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6; font-size: 0.85rem;"># Parse PRD to generate tasks
task-master parse-prd scripts/prd.txt

# See what to work on next
task-master next

# Expand a complex task into sub-tasks
task-master expand --id=5 --research

# Mark a task done
task-master set-status --id=3 --status=done

# Update tasks when requirements change
task-master update --from=6 --prompt="Use PostgreSQL instead of SQLite"</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Commands</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">task-master next</code> — AI picks the best next task</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">task-master show &lt;id&gt;</code> — Full details with context</li>
    <li style="margin-bottom: 0.5rem;"><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">task-master analyze-complexity</code> — Score task complexity</li>
    <li><code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">task-master validate-dependencies</code> — Fix circular deps</li>
  </ul>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use It in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>New project:</strong> Write a PRD → parse it → Task Master builds your backlog</li>
    <li style="margin-bottom: 0.5rem;"><strong>Daily coding:</strong> Ask AI "What's next?" — it handles context automatically</li>
    <li style="margin-bottom: 0.5rem;"><strong>Pivots:</strong> <code>update</code> command propagates changes across dependent tasks</li>
    <li><strong>Hard tasks:</strong> <code>expand --research</code> breaks them down with AI research</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `},Ot={description:`
<div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
  <a href="https://github.com/mattpocock/skills" target="_blank" style="display: inline-block; background: var(--accent-primary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ GitHub: mattpocock/skills</a>
  <a href="https://www.aihero.dev/ai-engineer-workshop-2026~dwnll" target="_blank" style="display: inline-block; background: var(--accent-secondary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ AI Engineer Workshop</a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Agent Skills</strong> by Matt Pocock is a curated collection of real-world <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">.claude</code> skills — markdown-based instruction files that extend what Claude Code can do. These are <em>production skills straight from his own <code>.claude</code> directory</em>, built for professional engineers who want to supercharge their AI-assisted workflow.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Who is Matt Pocock?</strong> He's a TypeScript educator and creator of Total TypeScript. His skills represent real patterns used in production — not tutorials, but battle-tested AI workflows.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">What Are Claude Skills?</strong>
  <p style="margin-bottom: 0.75rem; line-height: 1.6;">Skills are Markdown files placed in your <code style="padding: 0.15rem 0.35rem; background: var(--syntax-bg); border-radius: 4px; font-family: 'JetBrains Mono', monospace; color: var(--accent-primary);">~/.claude/skills/</code> directory. When Claude Code reads them, it can follow the specialized instructions they contain — turning complex workflows into repeatable, single-command actions.</p>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">Each skill has a <code>SKILL.md</code> with a YAML frontmatter (name, trigger, description)</li>
    <li style="margin-bottom: 0.5rem;">Claude reads the skill and follows its step-by-step instructions</li>
    <li>Skills can include helper scripts, templates, and example files</li>
  </ul>
</div>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Example Skills in the Collection</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>git-push</strong> — Stage all changes, write a commit message, and push to GitHub in one shot</li>
    <li style="margin-bottom: 0.5rem;"><strong>review</strong> — Pre-landing PR review for SQL safety, LLM trust boundary violations, and structural issues</li>
    <li style="margin-bottom: 0.5rem;"><strong>qa</strong> — Systematically QA test a web app, find bugs, fix them, and commit each fix atomically</li>
    <li style="margin-bottom: 0.5rem;"><strong>retro</strong> — Weekly engineering retrospective analyzing commit history, work patterns, and code quality</li>
    <li style="margin-bottom: 0.5rem;"><strong>ship</strong> — Full ship workflow: merge base branch, run tests, bump version, update changelog, create PR</li>
    <li><strong>tdd</strong> — Test-driven development with a red-green-refactor loop</li>
  </ul>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Install a Skill</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;"># Clone the repo
git clone https://github.com/mattpocock/skills.git

# Copy a skill to your global .claude directory
cp -r skills/git-push ~/.claude/skills/

# Or copy all skills at once
cp -r skills/* ~/.claude/skills/</pre>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Anatomy of a SKILL.md</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.9rem;">---
name: git-push
description: |
  Stage all changes, commit with a message,
  and push to GitHub. Use when user wants to
  commit and push code.
---

## Instructions

1. Run \`git status\` to see what changed
2. Stage all changes with \`git add -A\`
3. Write a concise commit message
4. Push to the current branch</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use It in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>Automate repetitive tasks:</strong> "Push this code" → Claude runs git-push skill automatically</li>
    <li style="margin-bottom: 0.5rem;"><strong>QA before shipping:</strong> Ask Claude to run the <em>qa</em> skill on your web app</li>
    <li style="margin-bottom: 0.5rem;"><strong>TDD workflow:</strong> Use the <em>tdd</em> skill to enforce red-green-refactor discipline</li>
    <li style="margin-bottom: 0.5rem;"><strong>Weekly retros:</strong> Run the <em>retro</em> skill to get a summary of your week's commits and patterns</li>
    <li><strong>Create your own:</strong> Model your custom skills on these examples for your unique team workflows</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `},Jt={description:`
<div style="margin-bottom: 1.5rem;">
  <a href="https://github.com/Piebald-AI/claude-code-system-prompts" target="_blank" style="display: inline-block; background: var(--accent-primary); color: var(--bg-color); padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; text-decoration: none;">→ GitHub: Piebald-AI/claude-code-system-prompts</a>
</div>
<p style="margin-bottom:1rem; line-height:1.75;"><strong>Claude Code System Prompts</strong> by Piebald-AI is the most comprehensive public collection of Claude Code's internal system prompts, tool descriptions, and sub-agent instructions. It captures every hidden prompt that shapes how Claude Code thinks and behaves — updated for each Claude Code release.</p>

<p style="margin-bottom:1.5rem; line-height:1.75; font-style:italic; opacity:0.8;"><strong>Why does this matter?</strong> Claude Code's behavior is governed by a layered set of system prompts you never normally see. Understanding them helps you write better CLAUDE.md files, craft more effective prompts, and debug unexpected AI behavior.</p>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">What's Inside the Repo?</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;">🔧 <strong>24 built-in tool descriptions</strong> — Exact prompts for Bash, WebFetch, Editor, Read, etc.</li>
    <li style="margin-bottom: 0.5rem;">🤖 <strong>Sub-agent prompts</strong> — Plan, Explore, and Task sub-agent system prompts</li>
    <li style="margin-bottom: 0.5rem;">📋 <strong>Utility prompts</strong> — CLAUDE.md format, compact summary, statusline, magic docs</li>
    <li style="margin-bottom: 0.5rem;">🔒 <strong>Security review prompt</strong> — How Claude evaluates security risks in bash commands</li>
    <li style="margin-bottom: 0.5rem;">🌐 <strong>WebFetch prompt</strong> — How Claude fetches and processes web content</li>
    <li>📝 <strong>Agent creation prompts</strong> — How Claude spins up sub-agents for complex tasks</li>
  </ul>
</div>

<div style="margin-bottom: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">The Layered Prompt Architecture</strong>
  <p style="margin-bottom: 0.75rem; line-height: 1.6;">Claude Code's behavior is determined by stacked prompt layers:</p>
  <ol style="margin-left: 1.25rem; line-height: 1.8;">
    <li style="margin-bottom: 0.5rem;"><strong>Base system prompt</strong> — Core identity, values, and safety guidelines</li>
    <li style="margin-bottom: 0.5rem;"><strong>Tool descriptions</strong> — Each tool (Bash, Read, Write, etc.) has its own mini-prompt</li>
    <li style="margin-bottom: 0.5rem;"><strong>CLAUDE.md</strong> — Your project-specific instructions injected at runtime</li>
    <li style="margin-bottom: 0.5rem;"><strong>Sub-agent prompts</strong> — Specialized prompts for Plan/Explore/Task agents</li>
    <li><strong>Compact/statusline prompts</strong> — Context management during long sessions</li>
  </ol>
</div>

<div style="margin-top: 1.5rem;">
  <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">Example: Bash Tool Description (simplified)</strong>
  <pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.4; font-size: 0.85rem;">Executes a bash command in a persistent shell session.
- State persists between commands (working dir, env vars)
- NEVER run interactive commands that require stdin
- Avoid commands that run indefinitely
- For destructive operations, use --dry-run first
- Prefer absolute paths to avoid ambiguity</pre>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">How to Use This Knowledge in Coding</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>Write better CLAUDE.md files:</strong> Knowing the base system prompt helps you write project instructions that work <em>with</em> Claude's defaults rather than fighting them</li>
    <li style="margin-bottom: 0.5rem;"><strong>Debug unexpected behavior:</strong> When Claude refuses a task or acts strangely, the system prompts reveal why</li>
    <li style="margin-bottom: 0.5rem;"><strong>Understand sub-agents:</strong> Knowing Plan vs. Task vs. Explore agent prompts helps you trigger the right mode for your workflow</li>
    <li style="margin-bottom: 0.5rem;"><strong>Security awareness:</strong> The security review prompt shows exactly what triggers Claude's caution on bash commands</li>
    <li><strong>Prompt engineering:</strong> Model your custom prompts and instructions on the patterns used in these official prompts</li>
  </ul>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px;">
  <strong style="display:block; margin-bottom:0.75rem; font-size:1.1rem; color: var(--accent-primary);">Key Insight: Sub-Agent Modes</strong>
  <ul style="margin-left: 1.25rem; line-height: 1.6;">
    <li style="margin-bottom: 0.5rem;"><strong>Plan sub-agent</strong> — Focuses on research and planning before touching any code; read-only mindset</li>
    <li style="margin-bottom: 0.5rem;"><strong>Explore sub-agent</strong> — Investigates codebase, existing patterns, dependencies before acting</li>
    <li><strong>Task sub-agent</strong> — The executor; writes code, runs commands, and implements changes</li>
  </ul>
</div>


<div style="height: 10rem;"></div>
  `},Ft={id:"ai-agent-workflows",title:"AI Agent Workflows",category:"Tutorial",tags:["SDD","AI","Agents","Spec-Driven"],tabs:[{label:"Spec-Kit",content:jt.description+`
<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">
    Next: OpenSpec <span>→</span>
  </a>
</div>
`},{label:"OpenSpec",content:Nt.description+`
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous">
    <span>←</span> Previous: Spec-Kit
  </a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">
    Next: Task Master <span>→</span>
  </a>
</div>
`},{label:"Task Master",content:Ut.description+`
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous">
    <span>←</span> Previous: OpenSpec
  </a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">
    Next: Agent Skills <span>→</span>
  </a>
</div>
`},{label:"Agent Skills",content:Ot.description+`
<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Task Master
  </a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">
    Next: System Prompts <span>→</span>
  </a>
</div>
`},{label:"System Prompts",content:Jt.description+`
<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous">
    <span>←</span> Previous: Agent Skills
  </a>
</div>
`}],interactiveType:"custom"},pe=[Ct,It,Pt,Bt,Lt,Rt,_t,St,Et,At,zt,Dt,Tt,Ft,Mt],b={isActive:!1,isLocked:!1,isMinimized:!1,timer:{duration:1500,remaining:1500,interval:null,isRunning:!1},stats:{streak:0,cardsToday:0,focusMinutes:0,lastStudyDate:null}},Wt={activeConcept:null,resetContentScroll(){const r=document.getElementById("content-area");r&&(r.scrollTop=0);const t=document.querySelector(".tutorial-tab-content");t&&(t.scrollTop=0)},init(){this.renderSidebar(),this.setupEventListeners(),this.initTheme(),this.initStudyMode(),this.initTechStackModal();const r=window.location.hash.substring(1);r&&pe.some(t=>t.id===r)?this.selectConcept(r):this.renderWelcome(),st(document.getElementById("constellation-bg"))},renderWelcome(){document.getElementById("constellation-bg").style.display="";const r=this.getConceptOfTheDay(),t=document.getElementById("content-area");t.classList.remove("content-area--tabbed"),t.innerHTML=`
      <div class="cotd-ticker">
        <span class="cotd-label">Skill of the Day</span>
        <div class="ticker-track">
          <span class="ticker-text">${r.title}</span>
        </div>
      </div>
      <div class="welcome-card">
        <h2>Welcome to Knowledge Lab</h2>
        <p>Select a tutorial from the sidebar to begin your interactive learning journey.</p>
      </div>
    `,t.querySelector(".cotd-ticker").addEventListener("click",()=>{this.selectConcept(r.id)});const n=t.querySelector(".ticker-text"),a=t.querySelector(".ticker-track").offsetWidth;n.style.setProperty("--start-x",a+"px")},getConceptOfTheDay(){const r=Math.floor(Date.now()/864e5);return pe[r%pe.length]},initTheme(){localStorage.getItem("theme")==="light"&&(document.documentElement.classList.add("light-mode"),document.querySelector("#theme-toggle .icon").textContent="☀️"),localStorage.getItem("sidebar")==="collapsed"&&document.getElementById("app").classList.add("sidebar-collapsed")},renderSidebar(){const r=document.getElementById("concept-list");r.innerHTML=pe.map(t=>`
      <li class="nav-item" data-id="${t.id}">${t.title}</li>
    `).join("")},isMobile(){return window.innerWidth<=640},closeMobileSidebar(){document.getElementById("app").classList.remove("sidebar-open")},setupEventListeners(){document.getElementById("concept-list").addEventListener("click",r=>{if(r.target.classList.contains("nav-item")){const t=r.target.dataset.id;this.isMobile()&&this.closeMobileSidebar(),this.selectConcept(t)}}),document.getElementById("sidebar-toggle").addEventListener("click",()=>{const r=document.getElementById("app");if(this.isMobile())r.classList.toggle("sidebar-open");else{const t=r.classList.toggle("sidebar-collapsed");localStorage.setItem("sidebar",t?"collapsed":"open")}}),document.getElementById("app").addEventListener("click",r=>{this.isMobile()&&r.target===document.getElementById("app")&&this.closeMobileSidebar()}),document.getElementById("theme-toggle").addEventListener("click",()=>{const r=document.documentElement.classList.toggle("light-mode"),t=document.querySelector("#theme-toggle .icon");t.textContent=r?"☀️":"🌙",localStorage.setItem("theme",r?"light":"dark")}),document.getElementById("home-link").addEventListener("click",()=>{this.activeConcept=null,document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active")),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search),this.isMobile()&&this.closeMobileSidebar(),this.renderWelcome()}),document.getElementById("concept-search").addEventListener("input",r=>{const t=r.target.value.toLowerCase();document.querySelectorAll(".nav-item").forEach(a=>{const i=a.textContent.toLowerCase();a.style.display=i.includes(t)?"block":"none"})}),window.addEventListener("hashchange",()=>{const r=window.location.hash.substring(1);r&&pe.some(t=>t.id===r)?(!this.activeConcept||this.activeConcept.id!==r)&&this.selectConcept(r):r||(this.activeConcept=null,document.querySelectorAll(".nav-item").forEach(t=>t.classList.remove("active")),this.renderWelcome())}),window.addEventListener("message",async r=>{if(r.origin!==window.location.origin||r.data?.type!=="knowledgeLabFlowchartFullscreenToggle")return;const t=document.querySelector(".flowchart-embed");if(t)try{document.fullscreenElement===t?await document.exitFullscreen():document.fullscreenElement||await t.requestFullscreen()}catch(n){console.error("Flowchart fullscreen toggle failed:",n)}finally{t.querySelector("iframe")?.contentWindow?.postMessage({type:"knowledgeLabFlowchartFullscreenState",isFullscreen:document.fullscreenElement===t},window.location.origin)}}),document.addEventListener("fullscreenchange",()=>{const r=document.querySelector(".flowchart-embed");r?.querySelector("iframe")?.contentWindow?.postMessage({type:"knowledgeLabFlowchartFullscreenState",isFullscreen:document.fullscreenElement===r},window.location.origin)})},selectConcept(r){const t=pe.find(a=>a.id===r);if(!t)return;window.location.hash!==`#${r}`&&(window.location.hash=r),document.getElementById("constellation-bg").style.display="none",this.activeConcept=t,document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active"));const n=document.querySelector(`[data-id="${r}"]`);n&&n.classList.add("active"),this.renderConcept(t),this.resetContentScroll()},renderConcept(r){const t=document.getElementById("content-area");if(r.tabs&&r.tabs.length>0){t.classList.add("content-area--tabbed");const n=r.tabs.map((i,m)=>`<button class="tutorial-tab-btn${m===0?" active":""}" data-tab="${m}">${i.label}</button>`).join(""),a=r.tabs.map((i,m)=>`<div class="tutorial-tab-panel${m===0?" active":""}" data-panel="${m}">
          <div class="concept-content" id="concept-description-${m}">
            ${i.content}
          </div>
        </div>`).join("");t.innerHTML=`
        <article class="concept-card concept-card--tabs">
          <nav class="tutorial-tabs" role="tablist">${n}</nav>
          <div class="tutorial-tab-content">${a}</div>
        </article>
      `,this.initTabs(),r.tabs.forEach((i,m)=>{const u=document.getElementById(`concept-description-${m}`);u&&(dr(u),this.attachCopyButtonsTo(u))})}else{t.classList.remove("content-area--tabbed");const n=r.description||"Add your description here...",a=n.trim().startsWith("<")?n:n.split(`

`).map(i=>`<p>${i}</p>`).join("");t.innerHTML=`
        <article class="concept-card">
          <h2 class="concept-title">${r.title}</h2>
          ${r.category||r.tags&&r.tags.length>0?`
          <div class="concept-meta">
            ${r.category?`<span class="tag">${r.category}</span>`:""}
            ${r.tags?r.tags.map(i=>`<span class="tag">${i}</span>`).join(""):""}
          </div>`:""}
          <div class="concept-content" id="concept-description">
            ${a}
          </div>
        </article>
      `,dr(document.getElementById("concept-description")),this.attachCopyButtons()}},initTabs(){const r=document.querySelectorAll(".tutorial-tab-btn"),t=document.querySelectorAll(".tutorial-tab-panel"),n=a=>{r.forEach(i=>i.classList.remove("active")),t.forEach(i=>i.classList.remove("active")),r[a].classList.add("active"),t[a].classList.add("active"),r[a].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.resetContentScroll()};r.forEach(a=>{a.addEventListener("click",()=>n(Number(a.dataset.tab)))}),document.querySelectorAll("[data-goto-tab]").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault(),n(Number(a.dataset.gotoTab))})}),document.querySelectorAll("[data-goto-concept]").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault(),typeof this.selectConcept=="function"&&this.selectConcept(a.dataset.gotoConcept)})})},attachCopyButtons(){const r=document.getElementById("concept-description");r&&this.attachCopyButtonsTo(r)},attachCopyButtonsTo(r){if(!r)return;const t=r.querySelectorAll("pre, code"),n=new Set;t.forEach(a=>{if(a.closest(".code-wrapper"))return;let i=null;if(a.tagName==="PRE")i=a;else{const l=a;if(!(l.style.display==="block"||l.parentNode&&l.parentNode.tagName==="PRE"||l.textContent.includes(`
`)))return;i=l.parentNode&&l.parentNode.tagName==="PRE"?l.parentNode:l}if(!i||n.has(i)||i.parentNode&&i.parentNode.classList?.contains("code-wrapper"))return;n.add(i);const m=document.createElement("div");m.className="code-wrapper",i.parentNode.insertBefore(m,i),m.appendChild(i);const u=document.createElement("button");u.className="copy-btn",u.setAttribute("title","Copy to clipboard");const C='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',k='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';u.innerHTML=C,m.appendChild(u),u.addEventListener("click",()=>{const T=i.textContent.replace(/^❯\s+/,"");navigator.clipboard.writeText(T).then(()=>{u.innerHTML=k,u.classList.add("copied"),setTimeout(()=>{u.innerHTML=C,u.classList.remove("copied")},2e3)})})})},initTechStackModal(){const r=document.getElementById("tech-stack-btn"),t=document.getElementById("tech-stack-overlay"),n=document.getElementById("close-tech-stack"),a=document.getElementById("tech-stack-list");if(!r||!t||!n||!a)return;const i={...cr.dependencies||{},...cr.devDependencies||{}},m=[{name:"Vanilla JavaScript",desc:"Core application logic, ECMAScript modules, DOM manipulation, and dynamic rendering.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M14.5 9h-5l-.5-5h7l-.5 5zm-5 4h5l-.5 4.5-2 1.5-2-1.5-.2-2h2.2l.1 1.2 1 .8 1-.8.2-1.2h-3.8z"></path></svg>'},{name:"Vanilla CSS3 & HTML5",desc:"Custom glassmorphism styling, responsive grid layout, and semantic structure.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M15 9h-6l-.5-4h7.5l-.5 4zm-6 4h6l-.5 4.5-2.5 1.5-2.5-1.5-.2-2h2.2l.1 1.2 1.2.8 1.2-.8.2-1.2h-4.6z"></path></svg>'},{name:"HTML5 Canvas API",desc:"Custom performant animations including the Neural Constellation and Zen Flow backgrounds.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.268-.652-.053-.877.215-.225.542-.31 1.051-.31h2.438c2.66 0 4.853-2.192 4.853-4.853C21.5 6.756 17.244 2 12 2z"></path></svg>'}];i.vite&&m.push({name:"Vite ("+i.vite.replace(/[\^\~]/,"")+")",desc:"Next-generation frontend tooling providing ultra-fast builds and Hot Module Replacement.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'}),m.push({name:"GitHub Pages",desc:"Automated CI/CD deployment via GitHub Actions pipeline using the deployed build.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'}),a.innerHTML=m.map(k=>`
      <li class="tech-stack-item">
        <div class="tech-stack-icon-wrapper">
          ${k.icon}
        </div>
        <div class="tech-stack-info">
          <span class="tech-stack-name">${k.name}</span>
          <span class="tech-stack-desc">${k.desc}</span>
        </div>
      </li>
    `).join("");const u=()=>{t.classList.remove("hidden"),t.offsetWidth,t.classList.add("active")},C=()=>{t.classList.remove("active"),setTimeout(()=>{t.classList.contains("active")||t.classList.add("hidden")},300)};r.addEventListener("click",u),n.addEventListener("click",C),t.addEventListener("click",k=>{k.target===t&&C()})},initStudyMode(){this.loadStudyStats(),this.updateStudyMetrics(),this.initZenFlow(),document.getElementById("study-mode-btn").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("exit-study").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("timer-toggle").addEventListener("click",()=>{this.toggleTimer()}),document.getElementById("timer-reset").addEventListener("click",()=>{this.resetTimer()}),document.querySelectorAll(".preset-btn").forEach(r=>{r.addEventListener("click",t=>{const n=parseInt(t.target.dataset.time);this.setTimerDuration(n)})}),document.getElementById("minimize-study").addEventListener("click",()=>{this.minimizeStudy()}),document.getElementById("expand-study").addEventListener("click",()=>{this.expandStudy()}),document.getElementById("mini-stop-btn").addEventListener("click",()=>{this.expandStudy(),this.toggleStudyMode()}),document.getElementById("lock-screen-btn").addEventListener("click",()=>{this.lockScreen()}),document.getElementById("unlock-screen-btn").addEventListener("click",()=>{this.unlockScreen()})},loadStudyStats(){const r=localStorage.getItem("studyStats");r&&(b.stats=JSON.parse(r),this.updateStreak())},saveStudyStats(){localStorage.setItem("studyStats",JSON.stringify(b.stats))},updateStreak(){const r=new Date().toDateString(),t=b.stats.lastStudyDate;if(t){const n=new Date(t),a=new Date;a.setDate(a.getDate()-1),n.toDateString()===a.toDateString()||n.toDateString()!==r&&(b.stats.streak=0)}},updateStudyMetrics(){const r=document.getElementById("study-streak"),t=document.getElementById("study-cards"),n=document.getElementById("study-minutes");r&&(r.textContent=b.stats.streak),t&&(t.textContent=b.stats.cardsToday),n&&(n.textContent=b.stats.focusMinutes)},toggleStudyMode(){b.isActive=!b.isActive;const r=document.getElementById("study-mode-overlay"),t=document.querySelector(".zen-flow-bg");if(b.isActive){if(b.isMinimized){this.expandStudy();return}r.classList.remove("hidden"),r.classList.add("active"),t.style.opacity="1",this.updateStreak(),this.saveStudyStats()}else this.expandStudy(),r.classList.remove("active"),t.style.opacity="0",this.resetTimer(),setTimeout(()=>{r.classList.add("hidden")},500)},setTimerDuration(r){b.timer.duration=r*60,b.timer.remaining=r*60,document.querySelectorAll(".preset-btn").forEach(t=>{t.classList.toggle("active",parseInt(t.dataset.time)===r)}),this.updateTimerDisplay()},toggleTimer(){b.timer.isRunning?this.pauseTimer():this.startTimer()},startTimer(){b.timer.isRunning=!0,document.getElementById("timer-toggle").textContent="Pause",document.querySelector(".timer-wrapper").classList.add("active"),document.getElementById("lock-screen-btn").classList.remove("hidden"),b.timer.interval=setInterval(()=>{b.timer.remaining--,this.updateTimerDisplay(),b.timer.remaining<=0&&this.completeTimer()},1e3)},pauseTimer(){b.timer.isRunning=!1,document.getElementById("timer-toggle").textContent="Resume",document.querySelector(".timer-wrapper").classList.remove("active"),document.getElementById("lock-screen-btn").classList.add("hidden"),clearInterval(b.timer.interval),b.isLocked&&this.unlockScreen()},resetTimer(){this.pauseTimer(),b.timer.remaining=b.timer.duration,document.getElementById("timer-toggle").textContent="Start Focus",document.getElementById("timer-status").textContent="Ready to focus",document.getElementById("lock-screen-btn").classList.add("hidden"),this.updateTimerDisplay()},completeTimer(){this.pauseTimer(),document.getElementById("timer-status").textContent="Focus complete! Great work!",b.stats.focusMinutes+=Math.floor(b.timer.duration/60),this.updateStreakDate(),this.saveStudyStats(),this.updateStudyMetrics(),"Notification"in window&&Notification.permission==="granted"&&new Notification("Focus Session Complete",{body:"Great job! Take a break.",icon:"/vite.svg"})},updateTimerDisplay(){const r=Math.floor(b.timer.remaining/60),t=b.timer.remaining%60,n=`${r.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;document.getElementById("timer-minutes").textContent=r.toString().padStart(2,"0"),document.getElementById("timer-seconds").textContent=t.toString().padStart(2,"0"),document.getElementById("mini-timer-display").textContent=n;const a=b.timer.remaining/b.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${a}%`;const i=b.timer.remaining/b.timer.duration,u=2*Math.PI*130*(1-i);document.getElementById("timer-progress").style.strokeDashoffset=u,b.timer.isRunning?document.getElementById("timer-status").textContent="Stay focused...":document.getElementById("timer-status").textContent="Ready to focus"},minimizeStudy(){b.isMinimized=!0;const r=document.getElementById("study-mode-overlay"),t=document.querySelector(".zen-flow-bg");r.classList.remove("active"),t.style.opacity="0",setTimeout(()=>r.classList.add("hidden"),500),document.getElementById("mini-timer").classList.remove("hidden");const n=Math.floor(b.timer.remaining/60),a=b.timer.remaining%60;document.getElementById("mini-timer-display").textContent=`${n.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`;const i=b.timer.remaining/b.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${i}%`},expandStudy(){if(b.isMinimized=!1,document.getElementById("mini-timer").classList.add("hidden"),b.isActive){const r=document.getElementById("study-mode-overlay"),t=document.querySelector(".zen-flow-bg");r.classList.remove("hidden"),r.classList.add("active"),t.style.opacity="1"}},lockScreen(){b.isLocked=!0,document.getElementById("study-mode-overlay").classList.add("study-locked"),document.getElementById("unlock-screen-overlay").classList.remove("hidden")},unlockScreen(){b.isLocked=!1,document.getElementById("study-mode-overlay").classList.remove("study-locked"),document.getElementById("unlock-screen-overlay").classList.add("hidden")},updateStreakDate(){const r=new Date().toDateString(),t=b.stats.lastStudyDate;if(t!==r){const n=new Date;n.setDate(n.getDate()-1),t===n.toDateString()?b.stats.streak++:b.stats.streak=1,b.stats.lastStudyDate=r}},initZenFlow(){const r=document.getElementById("zen-flow-canvas"),t=r.getContext("2d");let n,a,i=[];const m=()=>{n=r.width=window.innerWidth,a=r.height=window.innerHeight,u()},u=()=>{i=[];const k=30;for(let l=0;l<k;l++)i.push({x:Math.random()*n,y:Math.random()*a,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,radius:Math.random()*80+40,hue:Math.random()*60+170,alpha:Math.random()*.1+.05,pulse:Math.random()*Math.PI*2})},C=()=>{if(!b.isActive){requestAnimationFrame(C);return}t.clearRect(0,0,n,a);const k=document.documentElement.classList.contains("light-mode");if(i.forEach(l=>{l.x+=l.vx,l.y+=l.vy,l.x<-l.radius&&(l.x=n+l.radius),l.x>n+l.radius&&(l.x=-l.radius),l.y<-l.radius&&(l.y=a+l.radius),l.y>a+l.radius&&(l.y=-l.radius),l.pulse+=.02;const T=t.createRadialGradient(l.x,l.y,0,l.x,l.y,l.radius),M=l.radius*(1+Math.sin(l.pulse)*.1);k?(T.addColorStop(0,`hsla(40, 30%, 70%, ${l.alpha*.5})`),T.addColorStop(.5,`hsla(40, 20%, 80%, ${l.alpha*.2})`),T.addColorStop(1,"transparent")):(T.addColorStop(0,`hsla(${l.hue}, 70%, 50%, ${l.alpha})`),T.addColorStop(.5,`hsla(${l.hue}, 70%, 50%, ${l.alpha*.3})`),T.addColorStop(1,"transparent")),t.beginPath(),t.arc(l.x,l.y,M,0,Math.PI*2),t.fillStyle=T,t.fill()}),b.timer.isRunning){const l=Date.now()/1e3,T=150+Math.sin(l*.5)*20,M=t.createRadialGradient(n/2,a/2,0,n/2,a/2,T);k?(M.addColorStop(0,"hsla(40, 30%, 75%, 0.05)"),M.addColorStop(1,"transparent")):(M.addColorStop(0,"hsla(180, 70%, 50%, 0.03)"),M.addColorStop(1,"transparent")),t.beginPath(),t.arc(n/2,a/2,T,0,Math.PI*2),t.fillStyle=M,t.fill()}requestAnimationFrame(C)};window.addEventListener("resize",m),m(),C()}};document.addEventListener("DOMContentLoaded",()=>Wt.init());
