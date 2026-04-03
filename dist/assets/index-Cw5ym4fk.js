(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const m of i)if(m.type==="childList")for(const u of m.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const m={};return i.integrity&&(m.integrity=i.integrity),i.referrerPolicy&&(m.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?m.credentials="include":i.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function a(i){if(i.ep)return;i.ep=!0;const m=n(i);fetch(i.href,m)}})();const at=70,Je=160,je=120;class nt{constructor(t,n){this.width=t,this.height=n,this.x=Math.random()*t,this.y=Math.random()*n,this.vx=(Math.random()-.5)*.4,this.vy=(Math.random()-.5)*.4,this.baseRadius=1.5+Math.random()*2,this.pulsePhase=Math.random()*Math.PI*2,this.pulseSpeed=.015+Math.random()*.025,this.isHub=Math.random()<.12,this.isHub&&(this.baseRadius*=2)}update(t){this.pulsePhase+=this.pulseSpeed;const n=this.x-t.x,a=this.y-t.y,i=Math.hypot(n,a);if(i<je&&i>0){const u=((je-i)/je)**2*3;this.vx+=n/i*u*.08,this.vy+=a/i*u*.08}this.vx*=.975,this.vy*=.975;const m=Math.hypot(this.vx,this.vy);m>1.5&&(this.vx=this.vx/m*1.5,this.vy=this.vy/m*1.5),this.x+=this.vx,this.y+=this.vy,this.x<0&&(this.x=this.width),this.x>this.width&&(this.x=0),this.y<0&&(this.y=this.height),this.y>this.height&&(this.y=0)}draw(t,n){const a=.5+.5*Math.sin(this.pulsePhase),i=this.baseRadius*(1+a*.6),m=(this.isHub?.7:.4)+a*.4,u=n?`rgba(176, 141, 87, ${m})`:this.isHub?`rgba(180, 100, 255, ${m})`:`rgba(0, 242, 255, ${m})`,C=n?`rgba(176, 141, 87, ${a*.12})`:this.isHub?`rgba(130, 0, 255, ${a*.1})`:`rgba(0, 242, 255, ${a*.1})`;t.beginPath(),t.arc(this.x,this.y,i*5,0,Math.PI*2),t.fillStyle=C,t.fill(),t.beginPath(),t.arc(this.x,this.y,i,0,Math.PI*2),t.fillStyle=u,t.fill()}}class it{constructor(t,n,a,i,m){this.x1=t,this.y1=n,this.x2=a,this.y2=i,this.progress=0,this.speed=.02+Math.random()*.03,this.isLight=m,this.alive=!0}update(){this.progress+=this.speed,this.progress>=1&&(this.alive=!1)}draw(t){const n=this.x1+(this.x2-this.x1)*this.progress,a=this.y1+(this.y2-this.y1)*this.progress,i=1-this.progress;t.beginPath(),t.arc(n,a,3,0,Math.PI*2),t.fillStyle=this.isLight?`rgba(212, 160, 23, ${i})`:`rgba(255, 255, 255, ${i})`,t.fill()}}function st(r){const t=r.getContext("2d");let n=0,a=0,i=[],m=[],u=null;const C={x:-9999,y:-9999};let k=0;function l(){n=r.width=window.innerWidth,a=r.height=window.innerHeight,i=Array.from({length:at},()=>new nt(n,a))}function A(M){if(k--,k>0)return;k=30+Math.floor(Math.random()*60);const S=[...i].sort(()=>Math.random()-.5);for(let z=0;z<S.length-1;z++){const O=S[z],D=S[z+1];if(Math.hypot(O.x-D.x,O.y-D.y)<Je){m.push(new it(O.x,O.y,D.x,D.y,M));return}}}function T(M,S,z,O){const D=(1-z/Je)*(O?.25:.35),q=t.createLinearGradient(M.x,M.y,S.x,S.y),$=O?`rgba(176,141,87,${D*1.5})`:M.isHub?`rgba(150,50,255,${D*1.5})`:`rgba(0,242,255,${D*1.5})`,Q=O?`rgba(122,106,83,${D})`:S.isHub?`rgba(150,50,255,${D})`:`rgba(0,200,220,${D})`;q.addColorStop(0,$),q.addColorStop(1,Q),t.beginPath(),t.moveTo(M.x,M.y),t.lineTo(S.x,S.y),t.strokeStyle=q,t.lineWidth=O?.6:.8,t.stroke()}function L(){const M=document.documentElement.classList.contains("light-mode");t.clearRect(0,0,n,a);for(let S=0;S<i.length;S++){i[S].update(C);for(let z=S+1;z<i.length;z++){const O=i[S].x-i[z].x,D=i[S].y-i[z].y,q=Math.hypot(O,D);q<Je&&T(i[S],i[z],q,M)}}i.forEach(S=>S.draw(t,M)),A(M),m=m.filter(S=>S.alive),m.forEach(S=>{S.update(),S.draw(t)}),u=requestAnimationFrame(L)}function H(){cancelAnimationFrame(u),window.removeEventListener("resize",l),window.removeEventListener("mousemove",N)}function N(M){C.x=M.clientX,C.y=M.clientY}return window.addEventListener("resize",l),window.addEventListener("mousemove",N),l(),L(),{destroy:H}}function lt(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ue,ar;function dt(){if(ar)return Ue;ar=1;function r(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(o=>{const d=e[o],f=typeof d;(f==="object"||f==="function")&&!Object.isFrozen(d)&&r(d)}),e}class t{constructor(o){o.data===void 0&&(o.data={}),this.data=o.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...o){const d=Object.create(null);for(const f in e)d[f]=e[f];return o.forEach(function(f){for(const _ in f)d[_]=f[_]}),d}const i="</span>",m=e=>!!e.scope,u=(e,{prefix:o})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const d=e.split(".");return[`${o}${d.shift()}`,...d.map((f,_)=>`${f}${"_".repeat(_+1)}`)].join(" ")}return`${o}${e}`};class C{constructor(o,d){this.buffer="",this.classPrefix=d.classPrefix,o.walk(this)}addText(o){this.buffer+=n(o)}openNode(o){if(!m(o))return;const d=u(o.scope,{prefix:this.classPrefix});this.span(d)}closeNode(o){m(o)&&(this.buffer+=i)}value(){return this.buffer}span(o){this.buffer+=`<span class="${o}">`}}const k=(e={})=>{const o={children:[]};return Object.assign(o,e),o};class l{constructor(){this.rootNode=k(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(o){this.top.children.push(o)}openNode(o){const d=k({scope:o});this.add(d),this.stack.push(d)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(o){return this.constructor._walk(o,this.rootNode)}static _walk(o,d){return typeof d=="string"?o.addText(d):d.children&&(o.openNode(d),d.children.forEach(f=>this._walk(o,f)),o.closeNode(d)),o}static _collapse(o){typeof o!="string"&&o.children&&(o.children.every(d=>typeof d=="string")?o.children=[o.children.join("")]:o.children.forEach(d=>{l._collapse(d)}))}}class A extends l{constructor(o){super(),this.options=o}addText(o){o!==""&&this.add(o)}startScope(o){this.openNode(o)}endScope(){this.closeNode()}__addSublanguage(o,d){const f=o.root;d&&(f.scope=`language:${d}`),this.add(f)}toHTML(){return new C(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function T(e){return e?typeof e=="string"?e:e.source:null}function L(e){return M("(?=",e,")")}function H(e){return M("(?:",e,")*")}function N(e){return M("(?:",e,")?")}function M(...e){return e.map(d=>T(d)).join("")}function S(e){const o=e[e.length-1];return typeof o=="object"&&o.constructor===Object?(e.splice(e.length-1,1),o):{}}function z(...e){return"("+(S(e).capture?"":"?:")+e.map(f=>T(f)).join("|")+")"}function O(e){return new RegExp(e.toString()+"|").exec("").length-1}function D(e,o){const d=e&&e.exec(o);return d&&d.index===0}const q=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function $(e,{joinWith:o}){let d=0;return e.map(f=>{d+=1;const _=d;let R=T(f),g="";for(;R.length>0;){const p=q.exec(R);if(!p){g+=R;break}g+=R.substring(0,p.index),R=R.substring(p.index+p[0].length),p[0][0]==="\\"&&p[1]?g+="\\"+String(Number(p[1])+_):(g+=p[0],p[0]==="("&&d++)}return g}).map(f=>`(${f})`).join(o)}const Q=/\b\B/,he="[a-zA-Z]\\w*",le="[a-zA-Z_]\\w*",ue="\\b\\d+(\\.\\d+)?",be="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ve="\\b(0b[01]+)",Te="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ie=(e={})=>{const o=/^#![ ]*\//;return e.binary&&(e.begin=M(o,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:o,end:/$/,relevance:0,"on:begin":(d,f)=>{d.index!==0&&f.ignoreMatch()}},e)},ae={begin:"\\\\[\\s\\S]",relevance:0},ze={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ae]},fe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ae]},Be={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},F=function(e,o,d={}){const f=a({scope:"comment",begin:e,end:o,contains:[]},d);f.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const _=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return f.contains.push({begin:M(/[ ]+/,"(",_,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),f},re=F("//","$"),ne=F("/\\*","\\*/"),de=F("#","$"),ge={scope:"number",begin:ue,relevance:0},xe={scope:"number",begin:be,relevance:0},hr={scope:"number",begin:ve,relevance:0},ur={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ae,{begin:/\[/,end:/\]/,relevance:0,contains:[ae]}]},br={scope:"title",begin:he,relevance:0},vr={scope:"title",begin:le,relevance:0},fr={begin:"\\.\\s*"+le,relevance:0};var ke=Object.freeze({__proto__:null,APOS_STRING_MODE:ze,BACKSLASH_ESCAPE:ae,BINARY_NUMBER_MODE:hr,BINARY_NUMBER_RE:ve,COMMENT:F,C_BLOCK_COMMENT_MODE:ne,C_LINE_COMMENT_MODE:re,C_NUMBER_MODE:xe,C_NUMBER_RE:be,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(o,d)=>{d.data._beginMatch=o[1]},"on:end":(o,d)=>{d.data._beginMatch!==o[1]&&d.ignoreMatch()}})},HASH_COMMENT_MODE:de,IDENT_RE:he,MATCH_NOTHING_RE:Q,METHOD_GUARD:fr,NUMBER_MODE:ge,NUMBER_RE:ue,PHRASAL_WORDS_MODE:Be,QUOTE_STRING_MODE:fe,REGEXP_MODE:ur,RE_STARTERS_RE:Te,SHEBANG:Ie,TITLE_MODE:br,UNDERSCORE_IDENT_RE:le,UNDERSCORE_TITLE_MODE:vr});function xr(e,o){e.input[e.index-1]==="."&&o.ignoreMatch()}function kr(e,o){e.className!==void 0&&(e.scope=e.className,delete e.className)}function wr(e,o){o&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=xr,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Cr(e,o){Array.isArray(e.illegal)&&(e.illegal=z(...e.illegal))}function Sr(e,o){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Er(e,o){e.relevance===void 0&&(e.relevance=1)}const Mr=(e,o)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const d=Object.assign({},e);Object.keys(e).forEach(f=>{delete e[f]}),e.keywords=d.keywords,e.begin=M(d.beforeMatch,L(d.begin)),e.starts={relevance:0,contains:[Object.assign(d,{endsParent:!0})]},e.relevance=0,delete d.beforeMatch},Ar=["of","and","for","in","not","or","if","then","parent","list","value"],Tr="keyword";function Fe(e,o,d=Tr){const f=Object.create(null);return typeof e=="string"?_(d,e.split(" ")):Array.isArray(e)?_(d,e):Object.keys(e).forEach(function(R){Object.assign(f,Fe(e[R],o,R))}),f;function _(R,g){o&&(g=g.map(p=>p.toLowerCase())),g.forEach(function(p){const v=p.split("|");f[v[0]]=[R,Ir(v[0],v[1])]})}}function Ir(e,o){return o?Number(o):zr(e)?0:1}function zr(e){return Ar.includes(e.toLowerCase())}const We={},ie=e=>{console.error(e)},He=(e,...o)=>{console.log(`WARN: ${e}`,...o)},ce=(e,o)=>{We[`${e}/${o}`]||(console.log(`Deprecated as of ${e}. ${o}`),We[`${e}/${o}`]=!0)},we=new Error;function Ge(e,o,{key:d}){let f=0;const _=e[d],R={},g={};for(let p=1;p<=o.length;p++)g[p+f]=_[p],R[p+f]=!0,f+=O(o[p-1]);e[d]=g,e[d]._emit=R,e[d]._multi=!0}function Br(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ie("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),we;if(typeof e.beginScope!="object"||e.beginScope===null)throw ie("beginScope must be object"),we;Ge(e,e.begin,{key:"beginScope"}),e.begin=$(e.begin,{joinWith:""})}}function Pr(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ie("skip, excludeEnd, returnEnd not compatible with endScope: {}"),we;if(typeof e.endScope!="object"||e.endScope===null)throw ie("endScope must be object"),we;Ge(e,e.end,{key:"endScope"}),e.end=$(e.end,{joinWith:""})}}function Lr(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function _r(e){Lr(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Br(e),Pr(e)}function Rr(e){function o(g,p){return new RegExp(T(g),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(p?"g":""))}class d{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(p,v){v.position=this.position++,this.matchIndexes[this.matchAt]=v,this.regexes.push([v,p]),this.matchAt+=O(p)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const p=this.regexes.map(v=>v[1]);this.matcherRe=o($(p,{joinWith:"|"}),!0),this.lastIndex=0}exec(p){this.matcherRe.lastIndex=this.lastIndex;const v=this.matcherRe.exec(p);if(!v)return null;const U=v.findIndex((ye,Le)=>Le>0&&ye!==void 0),J=this.matchIndexes[U];return v.splice(0,U),Object.assign(v,J)}}class f{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(p){if(this.multiRegexes[p])return this.multiRegexes[p];const v=new d;return this.rules.slice(p).forEach(([U,J])=>v.addRule(U,J)),v.compile(),this.multiRegexes[p]=v,v}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(p,v){this.rules.push([p,v]),v.type==="begin"&&this.count++}exec(p){const v=this.getMatcher(this.regexIndex);v.lastIndex=this.lastIndex;let U=v.exec(p);if(this.resumingScanAtSamePosition()&&!(U&&U.index===this.lastIndex)){const J=this.getMatcher(0);J.lastIndex=this.lastIndex+1,U=J.exec(p)}return U&&(this.regexIndex+=U.position+1,this.regexIndex===this.count&&this.considerAll()),U}}function _(g){const p=new f;return g.contains.forEach(v=>p.addRule(v.begin,{rule:v,type:"begin"})),g.terminatorEnd&&p.addRule(g.terminatorEnd,{type:"end"}),g.illegal&&p.addRule(g.illegal,{type:"illegal"}),p}function R(g,p){const v=g;if(g.isCompiled)return v;[kr,Sr,_r,Mr].forEach(J=>J(g,p)),e.compilerExtensions.forEach(J=>J(g,p)),g.__beforeBegin=null,[wr,Cr,Er].forEach(J=>J(g,p)),g.isCompiled=!0;let U=null;return typeof g.keywords=="object"&&g.keywords.$pattern&&(g.keywords=Object.assign({},g.keywords),U=g.keywords.$pattern,delete g.keywords.$pattern),U=U||/\w+/,g.keywords&&(g.keywords=Fe(g.keywords,e.case_insensitive)),v.keywordPatternRe=o(U,!0),p&&(g.begin||(g.begin=/\B|\b/),v.beginRe=o(v.begin),!g.end&&!g.endsWithParent&&(g.end=/\B|\b/),g.end&&(v.endRe=o(v.end)),v.terminatorEnd=T(v.end)||"",g.endsWithParent&&p.terminatorEnd&&(v.terminatorEnd+=(g.end?"|":"")+p.terminatorEnd)),g.illegal&&(v.illegalRe=o(g.illegal)),g.contains||(g.contains=[]),g.contains=[].concat(...g.contains.map(function(J){return Nr(J==="self"?g:J)})),g.contains.forEach(function(J){R(J,v)}),g.starts&&R(g.starts,p),v.matcher=_(v),v}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),R(e)}function qe(e){return e?e.endsWithParent||qe(e.starts):!1}function Nr(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(o){return a(e,{variants:null},o)})),e.cachedVariants?e.cachedVariants:qe(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var Or="11.11.1";class Dr extends Error{constructor(o,d){super(o),this.name="HTMLInjectionError",this.html=d}}const Pe=n,Ye=a,$e=Symbol("nomatch"),Jr=7,Ke=function(e){const o=Object.create(null),d=Object.create(null),f=[];let _=!0;const R="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]};let p={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:A};function v(s){return p.noHighlightRe.test(s)}function U(s){let h=s.className+" ";h+=s.parentNode?s.parentNode.className:"";const E=p.languageDetectRe.exec(h);if(E){const B=te(E[1]);return B||(He(R.replace("{}",E[1])),He("Falling back to no-highlight mode for this block.",s)),B?E[1]:"no-highlight"}return h.split(/\s+/).find(B=>v(B)||te(B))}function J(s,h,E){let B="",j="";typeof h=="object"?(B=s,E=h.ignoreIllegals,j=h.language):(ce("10.7.0","highlight(lang, code, ...args) has been deprecated."),ce("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),j=s,B=h),E===void 0&&(E=!0);const K={code:B,language:j};Se("before:highlight",K);const oe=K.result?K.result:ye(K.language,K.code,E);return oe.code=K.code,Se("after:highlight",oe),oe}function ye(s,h,E,B){const j=Object.create(null);function K(c,y){return c.keywords[y]}function oe(){if(!x.keywords){W.addText(P);return}let c=0;x.keywordPatternRe.lastIndex=0;let y=x.keywordPatternRe.exec(P),w="";for(;y;){w+=P.substring(c,y.index);const I=X.case_insensitive?y[0].toLowerCase():y[0],G=K(x,I);if(G){const[Z,tt]=G;if(W.addText(w),w="",j[I]=(j[I]||0)+1,j[I]<=Jr&&(Ae+=tt),Z.startsWith("_"))w+=y[0];else{const ot=X.classNameAliases[Z]||Z;V(y[0],ot)}}else w+=y[0];c=x.keywordPatternRe.lastIndex,y=x.keywordPatternRe.exec(P)}w+=P.substring(c),W.addText(w)}function Ee(){if(P==="")return;let c=null;if(typeof x.subLanguage=="string"){if(!o[x.subLanguage]){W.addText(P);return}c=ye(x.subLanguage,P,!0,or[x.subLanguage]),or[x.subLanguage]=c._top}else c=_e(P,x.subLanguage.length?x.subLanguage:null);x.relevance>0&&(Ae+=c.relevance),W.__addSublanguage(c._emitter,c.language)}function Y(){x.subLanguage!=null?Ee():oe(),P=""}function V(c,y){c!==""&&(W.startScope(y),W.addText(c),W.endScope())}function Ze(c,y){let w=1;const I=y.length-1;for(;w<=I;){if(!c._emit[w]){w++;continue}const G=X.classNameAliases[c[w]]||c[w],Z=y[w];G?V(Z,G):(P=Z,oe(),P=""),w++}}function er(c,y){return c.scope&&typeof c.scope=="string"&&W.openNode(X.classNameAliases[c.scope]||c.scope),c.beginScope&&(c.beginScope._wrap?(V(P,X.classNameAliases[c.beginScope._wrap]||c.beginScope._wrap),P=""):c.beginScope._multi&&(Ze(c.beginScope,y),P="")),x=Object.create(c,{parent:{value:x}}),x}function rr(c,y,w){let I=D(c.endRe,w);if(I){if(c["on:end"]){const G=new t(c);c["on:end"](y,G),G.isMatchIgnored&&(I=!1)}if(I){for(;c.endsParent&&c.parent;)c=c.parent;return c}}if(c.endsWithParent)return rr(c.parent,y,w)}function Xr(c){return x.matcher.regexIndex===0?(P+=c[0],1):(De=!0,0)}function Qr(c){const y=c[0],w=c.rule,I=new t(w),G=[w.__beforeBegin,w["on:begin"]];for(const Z of G)if(Z&&(Z(c,I),I.isMatchIgnored))return Xr(y);return w.skip?P+=y:(w.excludeBegin&&(P+=y),Y(),!w.returnBegin&&!w.excludeBegin&&(P=y)),er(w,c),w.returnBegin?0:y.length}function Zr(c){const y=c[0],w=h.substring(c.index),I=rr(x,c,w);if(!I)return $e;const G=x;x.endScope&&x.endScope._wrap?(Y(),V(y,x.endScope._wrap)):x.endScope&&x.endScope._multi?(Y(),Ze(x.endScope,c)):G.skip?P+=y:(G.returnEnd||G.excludeEnd||(P+=y),Y(),G.excludeEnd&&(P=y));do x.scope&&W.closeNode(),!x.skip&&!x.subLanguage&&(Ae+=x.relevance),x=x.parent;while(x!==I.parent);return I.starts&&er(I.starts,c),G.returnEnd?0:y.length}function et(){const c=[];for(let y=x;y!==X;y=y.parent)y.scope&&c.unshift(y.scope);c.forEach(y=>W.openNode(y))}let Me={};function tr(c,y){const w=y&&y[0];if(P+=c,w==null)return Y(),0;if(Me.type==="begin"&&y.type==="end"&&Me.index===y.index&&w===""){if(P+=h.slice(y.index,y.index+1),!_){const I=new Error(`0 width match regex (${s})`);throw I.languageName=s,I.badRule=Me.rule,I}return 1}if(Me=y,y.type==="begin")return Qr(y);if(y.type==="illegal"&&!E){const I=new Error('Illegal lexeme "'+w+'" for mode "'+(x.scope||"<unnamed>")+'"');throw I.mode=x,I}else if(y.type==="end"){const I=Zr(y);if(I!==$e)return I}if(y.type==="illegal"&&w==="")return P+=`
`,1;if(Oe>1e5&&Oe>y.index*3)throw new Error("potential infinite loop, way more iterations than matches");return P+=w,w.length}const X=te(s);if(!X)throw ie(R.replace("{}",s)),new Error('Unknown language: "'+s+'"');const rt=Rr(X);let Ne="",x=B||rt;const or={},W=new p.__emitter(p);et();let P="",Ae=0,se=0,Oe=0,De=!1;try{if(X.__emitTokens)X.__emitTokens(h,W);else{for(x.matcher.considerAll();;){Oe++,De?De=!1:x.matcher.considerAll(),x.matcher.lastIndex=se;const c=x.matcher.exec(h);if(!c)break;const y=h.substring(se,c.index),w=tr(y,c);se=c.index+w}tr(h.substring(se))}return W.finalize(),Ne=W.toHTML(),{language:s,value:Ne,relevance:Ae,illegal:!1,_emitter:W,_top:x}}catch(c){if(c.message&&c.message.includes("Illegal"))return{language:s,value:Pe(h),illegal:!0,relevance:0,_illegalBy:{message:c.message,index:se,context:h.slice(se-100,se+100),mode:c.mode,resultSoFar:Ne},_emitter:W};if(_)return{language:s,value:Pe(h),illegal:!1,relevance:0,errorRaised:c,_emitter:W,_top:x};throw c}}function Le(s){const h={value:Pe(s),illegal:!1,relevance:0,_top:g,_emitter:new p.__emitter(p)};return h._emitter.addText(s),h}function _e(s,h){h=h||p.languages||Object.keys(o);const E=Le(s),B=h.filter(te).filter(Qe).map(Y=>ye(Y,s,!1));B.unshift(E);const j=B.sort((Y,V)=>{if(Y.relevance!==V.relevance)return V.relevance-Y.relevance;if(Y.language&&V.language){if(te(Y.language).supersetOf===V.language)return 1;if(te(V.language).supersetOf===Y.language)return-1}return 0}),[K,oe]=j,Ee=K;return Ee.secondBest=oe,Ee}function jr(s,h,E){const B=h&&d[h]||E;s.classList.add("hljs"),s.classList.add(`language-${B}`)}function Re(s){let h=null;const E=U(s);if(v(E))return;if(Se("before:highlightElement",{el:s,language:E}),s.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",s);return}if(s.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),p.throwUnescapedHTML))throw new Dr("One of your code blocks includes unescaped HTML.",s.innerHTML);h=s;const B=h.textContent,j=E?J(B,{language:E,ignoreIllegals:!0}):_e(B);s.innerHTML=j.value,s.dataset.highlighted="yes",jr(s,E,j.language),s.result={language:j.language,re:j.relevance,relevance:j.relevance},j.secondBest&&(s.secondBest={language:j.secondBest.language,relevance:j.secondBest.relevance}),Se("after:highlightElement",{el:s,result:j,text:B})}function Ur(s){p=Ye(p,s)}const Fr=()=>{Ce(),ce("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Wr(){Ce(),ce("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ve=!1;function Ce(){function s(){Ce()}if(document.readyState==="loading"){Ve||window.addEventListener("DOMContentLoaded",s,!1),Ve=!0;return}document.querySelectorAll(p.cssSelector).forEach(Re)}function Hr(s,h){let E=null;try{E=h(e)}catch(B){if(ie("Language definition for '{}' could not be registered.".replace("{}",s)),_)ie(B);else throw B;E=g}E.name||(E.name=s),o[s]=E,E.rawDefinition=h.bind(null,e),E.aliases&&Xe(E.aliases,{languageName:s})}function Gr(s){delete o[s];for(const h of Object.keys(d))d[h]===s&&delete d[h]}function qr(){return Object.keys(o)}function te(s){return s=(s||"").toLowerCase(),o[s]||o[d[s]]}function Xe(s,{languageName:h}){typeof s=="string"&&(s=[s]),s.forEach(E=>{d[E.toLowerCase()]=h})}function Qe(s){const h=te(s);return h&&!h.disableAutodetect}function Yr(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=h=>{s["before:highlightBlock"](Object.assign({block:h.el},h))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=h=>{s["after:highlightBlock"](Object.assign({block:h.el},h))})}function $r(s){Yr(s),f.push(s)}function Kr(s){const h=f.indexOf(s);h!==-1&&f.splice(h,1)}function Se(s,h){const E=s;f.forEach(function(B){B[E]&&B[E](h)})}function Vr(s){return ce("10.7.0","highlightBlock will be removed entirely in v12.0"),ce("10.7.0","Please use highlightElement now."),Re(s)}Object.assign(e,{highlight:J,highlightAuto:_e,highlightAll:Ce,highlightElement:Re,highlightBlock:Vr,configure:Ur,initHighlighting:Fr,initHighlightingOnLoad:Wr,registerLanguage:Hr,unregisterLanguage:Gr,listLanguages:qr,getLanguage:te,registerAliases:Xe,autoDetection:Qe,inherit:Ye,addPlugin:$r,removePlugin:Kr}),e.debugMode=function(){_=!1},e.safeMode=function(){_=!0},e.versionString=Or,e.regex={concat:M,lookahead:L,either:z,optional:N,anyNumberOfTimes:H};for(const s in ke)typeof ke[s]=="object"&&r(ke[s]);return Object.assign(e,ke),e},me=Ke({});return me.newInstance=()=>Ke({}),Ue=me,me.HighlightJS=me,me.default=me,Ue}var ct=dt();const ee=lt(ct);function mr(r){const t=r.regex,n={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const i={className:"subst",begin:/\$\(/,end:/\)/,contains:[r.BACKSLASH_ESCAPE]},m=r.inherit(r.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),u={begin:/<<-?\s*(?=\w+)/,starts:{contains:[r.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},C={className:"string",begin:/"/,end:/"/,contains:[r.BACKSLASH_ESCAPE,n,i]};i.contains.push(C);const k={match:/\\"/},l={className:"string",begin:/'/,end:/'/},A={match:/\\'/},T={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},r.NUMBER_MODE,n]},L=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],H=r.SHEBANG({binary:`(${L.join("|")})`,relevance:10}),N={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[r.inherit(r.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},M=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],S=["true","false"],z={match:/(\/[a-z._-]+)+/},O=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],D=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],q=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],$=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:M,literal:S,built_in:[...O,...D,"set","shopt",...q,...$]},contains:[H,r.SHEBANG(),N,T,m,u,z,C,k,l,A,n]}}function mt(r){const t=r.regex,n=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),a=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],C={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:a,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},k={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:C,illegal:/#/},A={begin:/\{\{/,relevance:0},T={className:"string",contains:[r.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[r.BACKSLASH_ESCAPE,k],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[r.BACKSLASH_ESCAPE,k],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[r.BACKSLASH_ESCAPE,k,A,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[r.BACKSLASH_ESCAPE,k,A,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[r.BACKSLASH_ESCAPE,A,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[r.BACKSLASH_ESCAPE,A,l]},r.APOS_STRING_MODE,r.QUOTE_STRING_MODE]},L="[0-9](_?[0-9])*",H=`(\\b(${L}))?\\.(${L})|\\b(${L})\\.`,N=`\\b|${a.join("|")}`,M={className:"number",relevance:0,variants:[{begin:`(\\b(${L})|(${H}))[eE][+-]?(${L})[jJ]?(?=${N})`},{begin:`(${H})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${N})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${N})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${N})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${N})`},{begin:`\\b(${L})[jJ](?=${N})`}]},S={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:C,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},z={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:["self",k,M,T,r.HASH_COMMENT_MODE]}]};return l.contains=[T,M,k],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:C,illegal:/(<\/|\?)|=>/,contains:[k,M,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},T,S,r.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,n],scope:{1:"keyword",3:"title.function"},contains:[z]},{variants:[{match:[/\bclass/,/\s+/,n,/\s*/,/\(\s*/,n,/\s*\)/]},{match:[/\bclass/,/\s+/,n]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[M,z,T]}]}}function pt(r){const t={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},n={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],i={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[t,n,r.QUOTE_STRING_MODE,i,r.C_NUMBER_MODE,r.C_LINE_COMMENT_MODE,r.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function gt(r){const t="true false yes no null",n="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},i={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},m={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},u={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[r.BACKSLASH_ESCAPE,i]},C=r.inherit(u,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),L={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},H={end:",",endsWithParent:!0,excludeEnd:!0,keywords:t,relevance:0},N={begin:/\{/,end:/\}/,contains:[H],illegal:"\\n",relevance:0},M={begin:"\\[",end:"\\]",contains:[H],illegal:"\\n",relevance:0},S=[a,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+n},{className:"type",begin:"!<"+n+">"},{className:"type",begin:"!"+n},{className:"type",begin:"!!"+n},{className:"meta",begin:"&"+r.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+r.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},r.HASH_COMMENT_MODE,{beginKeywords:t,keywords:{literal:t}},L,{className:"number",begin:r.C_NUMBER_RE+"\\b",relevance:0},N,M,m,u],z=[...S];return z.pop(),z.push(C),H.contains=z,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:S}}const nr="[A-Za-z$_][0-9A-Za-z$_]*",yt=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],ht=["true","false","null","undefined","NaN","Infinity"],pr=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gr=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],yr=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ut=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],bt=[].concat(yr,pr,gr);function vt(r){const t=r.regex,n=(F,{after:re})=>{const ne="</"+F[0].slice(1);return F.input.indexOf(ne,re)!==-1},a=nr,i={begin:"<>",end:"</>"},m=/<[A-Za-z0-9\\._:-]+\s*\/>/,u={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(F,re)=>{const ne=F[0].length+F.index,de=F.input[ne];if(de==="<"||de===","){re.ignoreMatch();return}de===">"&&(n(F,{after:ne})||re.ignoreMatch());let ge;const xe=F.input.substring(ne);if(ge=xe.match(/^\s*=/)){re.ignoreMatch();return}if((ge=xe.match(/^\s+extends\s+/))&&ge.index===0){re.ignoreMatch();return}}},C={$pattern:nr,keyword:yt,literal:ht,built_in:bt,"variable.language":ut},k="[0-9](_?[0-9])*",l=`\\.(${k})`,A="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",T={className:"number",variants:[{begin:`(\\b(${A})((${l})|\\.)?|(${l}))[eE][+-]?(${k})\\b`},{begin:`\\b(${A})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},L={className:"subst",begin:"\\$\\{",end:"\\}",keywords:C,contains:[]},H={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,L],subLanguage:"xml"}},N={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,L],subLanguage:"css"}},M={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,L],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[r.BACKSLASH_ESCAPE,L]},O={className:"comment",variants:[r.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),r.C_BLOCK_COMMENT_MODE,r.C_LINE_COMMENT_MODE]},D=[r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,H,N,M,S,{match:/\$\d+/},T];L.contains=D.concat({begin:/\{/,end:/\}/,keywords:C,contains:["self"].concat(D)});const q=[].concat(O,L.contains),$=q.concat([{begin:/(\s*)\(/,end:/\)/,keywords:C,contains:["self"].concat(q)}]),Q={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:$},he={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,t.concat(a,"(",t.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},le={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...pr,...gr]}},ue={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},be={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Q],illegal:/%/},ve={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Te(F){return t.concat("(?!",F.join("|"),")")}const Ie={match:t.concat(/\b/,Te([...yr,"super","import"].map(F=>`${F}\\s*\\(`)),a,t.lookahead(/\s*\(/)),className:"title.function",relevance:0},ae={begin:t.concat(/\./,t.lookahead(t.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ze={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Q]},fe="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+r.UNDERSCORE_IDENT_RE+")\\s*=>",Be={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(fe)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Q]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:C,exports:{PARAMS_CONTAINS:$,CLASS_REFERENCE:le},illegal:/#(?![$_A-z])/,contains:[r.SHEBANG({label:"shebang",binary:"node",relevance:5}),ue,r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,H,N,M,S,O,{match:/\$\d+/},T,le,{scope:"attr",match:a+t.lookahead(":"),relevance:0},Be,{begin:"("+r.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[O,r.REGEXP_MODE,{className:"function",begin:fe,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:r.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:$}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:m},{begin:u.begin,"on:begin":u.isTrulyOpeningTag,end:u.end}],subLanguage:"xml",contains:[{begin:u.begin,end:u.end,skip:!0,contains:["self"]}]}]},be,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+r.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Q,r.inherit(r.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ae,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Q]},Ie,ve,he,ze,{match:/\$[(.]/}]}}function ft(r){const t=r.regex,n=t.concat(/[\p{L}_]/u,t.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,i={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},m={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},u=r.inherit(m,{begin:/\(/,end:/\)/}),C=r.inherit(r.APOS_STRING_MODE,{className:"string"}),k=r.inherit(r.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[m,k,C,u,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[m,u,k,C]}]}]},r.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[k]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(n,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:l}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}ee.registerLanguage("bash",mr);ee.registerLanguage("shell",mr);ee.registerLanguage("python",mt);ee.registerLanguage("json",pt);ee.registerLanguage("yaml",gt);ee.registerLanguage("javascript",vt);ee.registerLanguage("html",ft);const ir=["display: block","padding: 1rem","border: 1px solid var(--border-color)","border-radius: 8px","font-family: 'JetBrains Mono', monospace","font-size: 0.85rem","white-space: pre-wrap","line-height: 1.5","overflow-x: hidden","margin: 0.5rem 0","box-shadow: inset 0 2px 4px rgba(0,0,0,0.15)"].join("; "),sr={block:`${ir}; background: var(--syntax-bg); color: var(--syntax-text)`,terminal:`${ir}; background: var(--surface-dark); color: var(--code-green)`};let lr=!1;function xt(){if(lr)return;lr=!0;const r=document.createElement("style");r.textContent=`

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

  `,document.head.appendChild(r)}function dr(r){r&&(xt(),r.querySelectorAll("pre").forEach(t=>{const n=t.style.color||"",a=t.style.background||"",m=(t.textContent||"").trimStart()[0],u=n.includes("code-green")||a.includes("surface-dark")||m==="❯"||m==="$";if((u?sr.terminal:sr.block).split(";").forEach(k=>{const[l,...A]=k.split(":");if(!l)return;const T=l.trim(),L=T.replace(/-([a-z])/g,(H,N)=>N.toUpperCase());T==="font-size"&&t.style.fontSize||T==="line-height"&&t.style.lineHeight||(t.style[L]=A.join(":").trim())}),!u){const k=t.querySelector("code")||t;k.classList.contains("hljs")||ee.highlightElement(k)}}),r.querySelectorAll("code").forEach(t=>{if(t.closest("pre"))return;const a=(t.style.background||"").includes("surface-dark");t.style.fontSize="0.85rem",t.style.fontFamily="'JetBrains Mono', monospace",t.style.lineHeight="1.5",!a&&!t.classList.contains("hljs")&&(t.style.background="var(--syntax-bg)",t.style.color="var(--syntax-text)",ee.highlightElement(t))}),r.querySelectorAll("pre").forEach(t=>{t.style.fontSize||(t.style.fontSize="0.85rem"),t.style.lineHeight||(t.style.lineHeight="1.5")}))}const kt={vite:"^7.3.1"},wt={"highlight.js":"^11.11.1",three:"^0.183.2"},cr={devDependencies:kt,dependencies:wt},Ct={id:"claude-folder",title:"The .claude Folder",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:1rem; line-height:1.75;">When you use Claude Code inside a project, it creates a hidden folder called <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude</code> inside your project directory. Think of this folder as Claude's "brain" for your project. Everything in it tells Claude how to behave, what it is allowed to do, and what shortcuts you have set up.</p>

<p style="margin-bottom:1rem; line-height:1.75;">You do not have to create this folder yourself. Claude Code creates it for you the first time you run <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> inside a project. But once it exists, you can edit every file in it using any text editor — no coding required.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.95rem; color: var(--accent-primary);">The Folder Layout at a Glance</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre; line-height: 1.6;"><code>your-project/
├── CLAUDE.md          ← Claude's instructions for this project
├── CLAUDE.local.md    ← Your personal notes (not shared with team)
└── .claude/
    ├── settings.json  ← Permission rules &amp; technical config
    ├── commands/      ← Your custom shortcut commands
    │   └── review.md  ← e.g. /project:review
    └── rules/         ← Modular topic-specific guidelines
        ├── code-style.md
        └── testing.md

# Plus, globally (applies to ALL your projects):
~/.claude/
├── CLAUDE.md          ← Your personal preferences everywhere
└── settings.json      ← Your global permission defaults</code></pre>

<div style="padding: 1.25rem; background: var(--surface-color); border: 1px solid var(--border-color); border-left: 4px solid var(--accent-primary); border-radius: 12px; margin: 1rem 0;">
  <p style="margin: 0; line-height:1.75; color: var(--text-secondary);">💡 <strong>Key idea:</strong> CLAUDE.md files are like a permanent sticky note. Every time a new session starts, Claude reads them — so your instructions never need to be retyped.</p>
</div>

<div style="margin-top: 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.75rem;">
  ${[["📄","CLAUDE.md","Permanent instruction manual"],["⚙️","settings.json","Permission rulebook"],["⚡","commands/*.md","Custom slash shortcuts"],["📋","rules/*.md","Topic-specific guidelines"],["🔒","CLAUDE.local.md","Your private notes"]].map(([r,t,n])=>`
  <div style="padding: 0.9rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 10px; text-align: center;">
    <div style="font-size: 1.5rem; margin-bottom: 0.4rem;">${r}</div>
    <div style="font-family: monospace; font-size: 0.78rem; color: var(--accent-primary); margin-bottom: 0.25rem;">${t}</div>
    <div style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4;">${n}</div>
  </div>`).join("")}
</div>

<div style="margin-top: 2rem; display: flex; justify-content: flex-end; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link">Next: CLAUDE.md <span>→</span></a>
</div>
`},{label:"CLAUDE.md",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">📄 CLAUDE.md — The Permanent Instruction Manual</strong>

<p style="margin-bottom:1rem; line-height:1.75;">CLAUDE.md is the most important file in your project's .claude setup. It is a plain text file written in Markdown — a simple formatting language — where you write instructions that Claude reads at the beginning of <strong>every session</strong>. You never have to paste the same instructions into the chat again; they are always there.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">When it is loaded</strong>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Automatically at the start of every new Claude Code session. Claude also re-loads it after the <code style="padding: 0.15rem 0.35rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/compact</code> command. The file is loaded <em>in full</em> — not summarised — so every instruction you write is always in front of Claude.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Where to put it</strong>
<div style="overflow-x: auto; margin-bottom: 1rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.85rem;">
  <thead>
    <tr style="background: var(--surface-color);">
      <th style="padding: 0.6rem 0.8rem; text-align:left; border: 1px solid var(--border-color); color: var(--text-primary);">Location</th>
      <th style="padding: 0.6rem 0.8rem; text-align:left; border: 1px solid var(--border-color); color: var(--text-primary);">Who sees it</th>
      <th style="padding: 0.6rem 0.8rem; text-align:left; border: 1px solid var(--border-color); color: var(--text-primary);">Best for</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); font-family: monospace; font-size: 0.8rem; color: var(--code-text);">./CLAUDE.md</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Your whole team (checked into git)</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Coding standards, project commands, architecture notes</td>
    </tr>
    <tr style="background: var(--surface-color);">
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); font-family: monospace; font-size: 0.8rem; color: var(--code-text);">~/.claude/CLAUDE.md</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Only you, across all projects</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Personal style preferences, favourite shortcuts</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); font-family: monospace; font-size: 0.8rem; color: var(--code-text);">./CLAUDE.local.md</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Only you, in this project</td>
      <td style="padding: 0.5rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-secondary);">Your sandbox URLs, personal test data</td>
    </tr>
  </tbody>
</table>
</div>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example CLAUDE.md for a Python project</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># My Python API Project

## Stack
Python 3.11 + FastAPI + PostgreSQL + pytest

## Commands
- Run server: uvicorn main:app --reload
- Run tests: pytest -v
- Lint: ruff check .

## Style rules
- Type-hint every function parameter and return value.
- Prefer async functions for all database calls.
- Never commit credentials — use .env for secrets.</code></pre>

<strong style="display:block; margin-top:1.25rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Pro tips</strong>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Keep the file <strong>under 200 lines</strong>. Longer files reduce how well Claude follows instructions.</li>
  <li>Be specific: <em>"Use 2-space indentation"</em> is better than <em>"format code nicely"</em>.</li>
  <li>Run <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/memory</code> inside a session to check which CLAUDE.md files are currently loaded.</li>
  <li>Use <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/init</code> to auto-generate a starter CLAUDE.md from your existing project.</li>
</ul>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="0" class="tutorial-nav-link previous"><span>←</span> Previous: Overview</a>
  <a href="#" data-goto-tab="2" class="tutorial-nav-link">Next: settings.json <span>→</span></a>
</div>
`},{label:"settings.json",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">⚙️ .claude/settings.json — The Permission Rulebook</strong>

<p style="margin-bottom:1rem; line-height:1.75;">While CLAUDE.md is about <em>instructions</em> (the "what" and "why"), <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">settings.json</code> is about <em>technical permissions</em> — the "how". This JSON file tells Claude Code which tools it can use freely, which require your permission each time, and which are completely off-limits.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Settings hierarchy (who overrides whom)</strong>
<div style="overflow-x: auto; margin-bottom: 1rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.85rem;">
  <thead>
    <tr style="background: var(--surface-color);">
      <th style="padding: 0.6rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-primary);">Priority</th>
      <th style="padding: 0.6rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-primary);">File location</th>
      <th style="padding: 0.6rem 0.8rem; border: 1px solid var(--border-color); color: var(--text-primary);">Scope</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--accent-primary); font-weight:600;">1 — Highest</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Managed settings (IT-deployed)</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Whole organisation — cannot be overridden</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">2</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">.claude/settings.local.json</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Just you, in this project</td></tr>
    <tr><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">3</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">.claude/settings.json</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Your whole team in this project</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">4 — Lowest</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">~/.claude/settings.json</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Just you, across all projects</td></tr>
  </tbody>
</table>
</div>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">permissions — allow and deny lists</strong>
<p style="margin-bottom:0.5rem; color: var(--text-secondary); line-height:1.75;">The most important section. You list which terminal commands and file operations Claude is allowed to run without asking, and which it must never do.</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "permissions": {
    "allow": [
      "Bash(python manage.py test *)",  // always allow running tests
      "Bash(git status)",
      "Bash(git diff *)",
      "Read(./src/**)"                  // always allow reading src folder
    ],
    "deny": [
      "Read(./.env)",                   // NEVER read the .env secrets file
      "Read(./.env.*)",
      "Bash(rm -rf *)",                 // NEVER delete files recursively
      "Bash(curl *)"                    // NEVER make network requests
    ]
  }
}</code></pre>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">hooks — run code automatically</strong>
<p style="margin-bottom:0.5rem; color: var(--text-secondary); line-height:1.75;">Hooks let you run a terminal command whenever Claude does something. For example, automatically format a file after Claude edits it.</p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>{
  "hooks": [{
    "matcher": "Edit",
    "hooks": [{
      "type": "command",
      "command": "python -m black \\"$CLAUDE_FILE_PATHS\\""
    }]
  }]
}</code></pre>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">model — choose which AI model to use</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text);"><code>{ "model": "claude-sonnet-4-6" }</code></pre>

<div style="padding: 1rem; background: rgba(255,100,100,0.07); border: 1px solid rgba(255,100,100,0.2); border-left: 4px solid #f87171; border-radius: 10px; margin: 1rem 0;">
  <p style="margin:0; line-height:1.75; font-size:0.9rem;">🔒 <strong>Security tip:</strong> Always add your <code style="color:var(--code-text);">.env</code> file to the deny list. This prevents Claude from accidentally reading API keys or database passwords.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="1" class="tutorial-nav-link previous"><span>←</span> Previous: CLAUDE.md</a>
  <a href="#" data-goto-tab="3" class="tutorial-nav-link">Next: commands/*.md <span>→</span></a>
</div>
`},{label:"commands/*.md",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">⚡ .claude/commands/*.md — Custom Slash Commands</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">commands/</code> folder lets you create your own slash commands — shortcuts you can type in the Claude Code chat that instantly run a pre-written prompt. Instead of typing the same code review instructions every time, you create a file <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/review.md</code> and then type <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/project:review</code> to run it instantly.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">When it is invoked</strong>
<p style="margin-bottom:0.75rem; line-height:1.75; color: var(--text-secondary);">Only when you <strong>explicitly type</strong> the slash command in the chat. Unlike CLAUDE.md (which loads automatically), command files sit quietly until you call them.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">How to create a command</strong>
<ol style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Create the folder: <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude/commands/</code></li>
  <li>Create a file with the command name as the filename (e.g. <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">review.md</code>)</li>
  <li>Write your instructions in plain English inside the file</li>
  <li>Use <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">/project:review</code> in the chat to run it</li>
</ol>

<div style="padding: 0.75rem 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
  📌 <strong>Naming rule:</strong> The file name becomes the command name. <code style="color:var(--code-text);">review.md</code> → <code style="color:var(--accent-primary);">/project:review</code> &nbsp;|&nbsp; <code style="color:var(--code-text);">fix-bug.md</code> → <code style="color:var(--accent-primary);">/project:fix-bug</code>
</div>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 1 — Code review command</strong>
<p style="margin-bottom:0.25rem; font-size:0.82rem; color:var(--text-secondary);">File: <code style="color:var(--code-text);">.claude/commands/review.md</code></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>Review the code I've selected and check for:
- Any obvious bugs or logic errors
- Missing error handling (try/except blocks)
- Functions that are too long (over 30 lines)
- Any variable names that are unclear

Give me a brief summary, then list issues by priority.
Be concise — no need to re-explain correct parts.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 2 — Fix a GitHub issue (using $ARGUMENTS)</strong>
<p style="margin-bottom:0.5rem; line-height:1.75; color: var(--text-secondary);">Place <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">$ARGUMENTS</code> in your file. Whatever the user types after the command name gets inserted there.</p>
<p style="margin-bottom:0.25rem; font-size:0.82rem; color:var(--text-secondary);">File: <code style="color:var(--code-text);">.claude/commands/fix-issue.md</code></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>Fix GitHub issue #$ARGUMENTS following our project conventions.
Steps: read the issue, find relevant code, implement the fix,
add tests, and summarise what you changed and why.</code></pre>
<p style="margin-bottom:1rem; font-size:0.85rem; color:var(--text-secondary);">Use: type <code style="color:var(--accent-primary);">/project:fix-issue 42</code> — Claude will fix issue #42.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 3 — Git commit (with frontmatter)</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
allowed-tools: Bash(git status:*), Bash(git diff *), Bash(git commit *)
description: Create a meaningful git commit
---

Look at the current git status and diff, then write a clear,
descriptive commit message following the Conventional Commits format.
Then commit the staged changes.</code></pre>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem;">
  <p style="margin:0; font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">🌍 <strong>Global commands:</strong> Commands placed in <code style="color:var(--code-text);">~/.claude/commands/</code> are available across every project, not just the current one.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous"><span>←</span> Previous: settings.json</a>
  <a href="#" data-goto-tab="4" class="tutorial-nav-link">Next: rules/*.md <span>→</span></a>
</div>
`},{label:"rules/*.md",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">📋 .claude/rules/*.md — Modular Topic-Specific Guidelines</strong>

<p style="margin-bottom:1rem; line-height:1.75;">The <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">rules/</code> folder is a more organised way to write instructions than cramming everything into a single CLAUDE.md file. Instead of one long file, you create separate, focused files — one per topic. Rules files are loaded the same way as CLAUDE.md — <strong>automatically at the start of every session.</strong></p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">When rules files are loaded</strong>
<ul style="margin: 0 0 1rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li><strong>Rules without a path filter:</strong> loaded at session start, every time, just like CLAUDE.md.</li>
  <li><strong>Rules with a <code style="color:var(--code-text);">paths:</code> filter:</strong> loaded only when Claude opens a file matching the specified pattern. This saves context space in large projects.</li>
</ul>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example structure</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); line-height: 1.6;"><code>.claude/
└── rules/
    ├── code-style.md  ← loaded every session
    ├── testing.md     ← loaded every session
    └── api-rules.md   ← loaded only when editing API files</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 1 — Code style rules (always loaded)</strong>
<p style="margin-bottom:0.25rem; font-size:0.82rem; color:var(--text-secondary);">File: <code style="color:var(--code-text);">.claude/rules/code-style.md</code></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># Code Style Rules
- Always use 4-space indentation (PEP 8).
- Maximum line length: 88 characters.
- Write a one-line docstring for every function.
- Name variables clearly — avoid abbreviations like 'x' or 'tmp'.
- Group imports: stdlib first, then third-party, then local.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example 2 — API rules (only loaded for API files)</strong>
<p style="margin-bottom:0.25rem; font-size:0.82rem; color:var(--text-secondary);">File: <code style="color:var(--code-text);">.claude/rules/api-rules.md</code></p>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code>---
paths:
  - "src/api/**/*.py"
---

# API Development Rules
These rules apply only when editing files inside src/api/.
- Every endpoint must validate its input before processing.
- Return consistent error responses: {error: string, code: int}
- Always check authentication before accessing user data.
- Log every request with its status code.</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Path filtering patterns</strong>
<div style="overflow-x: auto; margin-bottom: 1rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.82rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">Pattern</th>
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">Which files it matches</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">**/*.py</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All Python files, anywhere in the project</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">src/**/*</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">All files inside the src/ folder</td></tr>
    <tr><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">*.md</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Markdown files in the project root only</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; color:var(--code-text);">src/api/**/*.py</td><td style="padding:0.4rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Python files specifically inside src/api/</td></tr>
  </tbody>
</table>
</div>

<div style="padding: 1rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem;">
  <p style="margin:0; font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">✅ <strong>When to use rules/ vs CLAUDE.md:</strong> Use CLAUDE.md for a high-level project overview. Use rules/ when your instructions grow long enough to need organisation — for example, separate files per team, per language, or per feature area.</p>
</div>

<div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="3" class="tutorial-nav-link previous"><span>←</span> Previous: commands/*.md</a>
  <a href="#" data-goto-tab="5" class="tutorial-nav-link">Next: CLAUDE.local.md <span>→</span></a>
</div>
`},{label:"CLAUDE.local.md",content:`
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">🔒 CLAUDE.local.md — Your Private Notes</strong>

<p style="margin-bottom:1rem; line-height:1.75;">CLAUDE.local.md is your personal version of CLAUDE.md for the current project. It works identically to CLAUDE.md — Claude reads it automatically at session start — but it lives alongside CLAUDE.md in the project root and is meant to be added to <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code> so it is <strong>never committed</strong> to the repository.</p>

<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary);">Use it for anything that applies only to you: your local machine paths, your personal development server URLs, your preferred debug flags, or instructions that are just for your workflow — not your teammates.</p>

<strong style="display:block; margin-top:1rem; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">When it is loaded</strong>
<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary);">Automatically at session start, alongside CLAUDE.md. If both files exist and their instructions conflict, <strong>CLAUDE.local.md is read last</strong> — so your personal notes take precedence over the shared instructions at the same directory level.</p>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">How to set it up</strong>
<ol style="margin: 0 0 0.75rem 1.5rem; color: var(--text-secondary); line-height: 1.8;">
  <li>Create the file in your project root: <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">CLAUDE.local.md</code></li>
  <li>Add it to <code style="padding: 0.1rem 0.3rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.gitignore</code> so it is never pushed to the repository</li>
  <li>Write your personal notes inside it in plain Markdown</li>
</ol>

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># .gitignore
CLAUDE.local.md           # add this line
.claude/settings.local.json</code></pre>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">Example CLAUDE.local.md</strong>
<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.25rem 0 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.6;"><code># My personal dev setup

## Local URLs
- Backend API: http://localhost:8000
- Frontend: http://localhost:5173
- Admin panel: http://localhost:8000/admin

## My preferences
- Always show full stack traces when there's an error.
- I'm on macOS — use 'open' to open URLs, not 'xdg-open'.
- My Python virtualenv is at: ~/venvs/myproject/</code></pre>

<div style="padding: 1rem; background: rgba(255,100,100,0.07); border: 1px solid rgba(255,100,100,0.2); border-left: 4px solid #f87171; border-radius: 10px; margin: 0.75rem 0 1rem;">
  <p style="margin:0; line-height:1.75; font-size:0.9rem;">🔐 <strong>Privacy reminder:</strong> CLAUDE.local.md is for personal convenience. Don't put real production passwords here — use a proper secrets manager. This file is purely for your local dev notes.</p>
</div>

<strong style="display:block; margin-bottom:0.5rem; font-size:0.9rem; color: var(--accent-primary);">CLAUDE.local.md vs settings.local.json</strong>
<div style="overflow-x: auto; margin-bottom: 1rem;">
<table style="width:100%; border-collapse: collapse; font-size: 0.85rem;">
  <thead><tr style="background: var(--surface-color);">
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">File</th>
    <th style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-primary);">What to put in it</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">CLAUDE.local.md</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal instructions, local URLs, your preferred workflow notes</td></tr>
    <tr style="background:var(--surface-color);"><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); font-family:monospace; font-size:0.8rem; color:var(--code-text);">.claude/settings.local.json</td><td style="padding:0.5rem 0.8rem; border:1px solid var(--border-color); color:var(--text-secondary);">Personal permission overrides (allow/deny rules specific to your machine)</td></tr>
  </tbody>
</table>
</div>
<p style="margin-bottom:1rem; line-height:1.75; color: var(--text-secondary);">Both files are gitignored automatically — neither is shared with the team.</p>

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
<strong style="display:block; margin-bottom:0.75rem; font-size:1rem;">🗺️ Visual Outline</strong>

<p style="margin-bottom:1rem; line-height:1.75;">An interactive flowchart showing the relationships between all the config files in the <code style="padding: 0.2rem 0.4rem; background: var(--surface-color); border-radius: 4px; font-family: monospace; color: var(--code-text);">.claude</code> folder.</p>

<div style="width: 100%; height: 650px; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; margin-bottom: 1.5rem; background: var(--surface-color);">
  <iframe src="./claude-folder-flowchart.html" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
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
`}],interactiveType:"custom"},Mt={id:"claude-code-uiux-21st-dev",title:"Claude UI Stack",category:"Tutorial",tags:["Claude Code","UI/UX","21st.dev"],tabs:[{label:"Overview",content:`
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

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="2" class="tutorial-nav-link previous">
    <span>←</span> Previous: Install UI/UX + 21st.dev
  </a>
</div>
`}],interactiveType:"custom"},At={id:"build-webapp-ai",title:"Build Web App with AI",category:"",tags:[""],description:`
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
`,interactiveType:"custom"},Tt={id:"ai-engineering",title:"AI Engineering",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:0.75rem; line-height:1.75;">AI Engineering refers to the process of building applications on top of foundation models.</p>
<p style="margin-bottom:1rem; line-height:1.75;">The model as a service makes it easier to leverage AI to build applications. Models are exposed via APIs that receive user queries and return model outputs.
Without these APIs, using an AI model required the infrastructure to host and serve this model. These APIs give you access to powerful models via single API calls.</p>

`},{label:"Fundamental Building Blocks",content:`

This page is currently under development. Please check back soon.

`}],interactiveType:"custom"},It={id:"build-app-skill-mcp",title:"Agent Skills + MCP",category:"Tutorial",tags:["Agentic","Firebase","GitHub"],tabs:[{label:"Overview",content:`
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

<div style="margin-top: 2rem; display: flex; justify-content: flex-start; border-top: 1px solid var(--border-color); padding-top: 1rem;">
  <a href="#" data-goto-tab="4" class="tutorial-nav-link previous">
    <span>←</span> Previous: Step 4
  </a>
</div>


`}],interactiveType:"custom"},zt={id:"claude-extension",title:"Claude Extension",category:"",tags:[],tabs:[{label:"Features",content:`
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
      `}],interactiveType:"custom"},Bt={id:"claude-commands",title:"Claude Commands",description:`
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
  `,interactiveType:"custom"},Pt={id:"claude-subagents",title:"Claude Subagents",tabs:[{label:"Overview",content:`
        <p style="margin-bottom:1rem; line-height:1.75;">Subagents are specialized AI assistants that handle specific types of tasks. Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions. They handle discrete tasks independently and return results to the main agent. When Claude encounters a task that matches a subagent’s description, it delegates to that subagent, which works independently and returns results.</p>
        <p style="margin-bottom:1.5rem; font-style: italic; color: var(--text-secondary); line-height:1.6;">
          Note: If you need multiple agents working in parallel and communicating with each other, see agent teams instead. Subagents work within a single session; agent teams coordinate across separate sessions.
        </p>
        <p>Claude uses each subagent’s description to decide when to delegate tasks. When you create a subagent, write a clear description so Claude knows when to use it. The key word is isolation. A subagent is an isolated Claude instance that works on a task independently and returns only the results to your main conversation. Use subagents when you need parallel execution or want to isolate heavy computational work. Best for: preventing context pollution, specialized deep dives.</p>

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
      `}],interactiveType:"custom"},Lt={id:"claude-agents",title:"Claude Agents",category:"AI Tools",tags:["agents","multi-agent","orchestration","tutorial"],tabs:[{label:"Overview",content:`
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
`}],interactiveType:"custom"},Rt={id:"claude-designer-stack",title:"Claude Designer Stack",category:"Tutorial",tags:["Claude Code","Design","Skills"],tabs:[{label:"Overview",content:`
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

<pre style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; margin: 0.5rem 0 1rem; font-family: 'JetBrains Mono', monospace; color: var(--syntax-text); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.5;">npx skills add https://github.com/anthropics/skills --skills frontend-design
npx skills add https://github.com/anthropics/skills --skills theme-factory
npx skills add https://github.com/anthropics/skills --skills brand-guidelines
npx skills add https://github.com/anthropics/skills --skills canvas-design
npx skills add https://github.com/anthropics/skills --skills skill-creator</pre>

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
`}],interactiveType:"custom"},pe=[Ct,zt,Bt,Pt,Lt,_t,St,Et,Mt,It,Rt,At,Tt],b={isActive:!1,isLocked:!1,isMinimized:!1,timer:{duration:1500,remaining:1500,interval:null,isRunning:!1},stats:{streak:0,cardsToday:0,focusMinutes:0,lastStudyDate:null}},Nt={activeConcept:null,resetContentScroll(){const r=document.getElementById("content-area");r&&(r.scrollTop=0);const t=document.querySelector(".tutorial-tab-content");t&&(t.scrollTop=0)},init(){this.renderSidebar(),this.setupEventListeners(),this.initTheme(),this.initStudyMode(),this.initTechStackModal();const r=window.location.hash.substring(1);r&&pe.some(t=>t.id===r)?this.selectConcept(r):this.renderWelcome(),st(document.getElementById("constellation-bg"))},renderWelcome(){document.getElementById("constellation-bg").style.display="";const r=this.getConceptOfTheDay(),t=document.getElementById("content-area");t.classList.remove("content-area--tabbed"),t.innerHTML=`
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
`)))return;i=l.parentNode&&l.parentNode.tagName==="PRE"?l.parentNode:l}if(!i||n.has(i)||i.parentNode&&i.parentNode.classList?.contains("code-wrapper"))return;n.add(i);const m=document.createElement("div");m.className="code-wrapper",i.parentNode.insertBefore(m,i),m.appendChild(i);const u=document.createElement("button");u.className="copy-btn",u.setAttribute("title","Copy to clipboard");const C='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',k='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';u.innerHTML=C,m.appendChild(u),u.addEventListener("click",()=>{const A=i.textContent.replace(/^❯\s+/,"");navigator.clipboard.writeText(A).then(()=>{u.innerHTML=k,u.classList.add("copied"),setTimeout(()=>{u.innerHTML=C,u.classList.remove("copied")},2e3)})})})},initTechStackModal(){const r=document.getElementById("tech-stack-btn"),t=document.getElementById("tech-stack-overlay"),n=document.getElementById("close-tech-stack"),a=document.getElementById("tech-stack-list");if(!r||!t||!n||!a)return;const i={...cr.dependencies||{},...cr.devDependencies||{}},m=[{name:"Vanilla JavaScript",desc:"Core application logic, ECMAScript modules, DOM manipulation, and dynamic rendering.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M14.5 9h-5l-.5-5h7l-.5 5zm-5 4h5l-.5 4.5-2 1.5-2-1.5-.2-2h2.2l.1 1.2 1 .8 1-.8.2-1.2h-3.8z"></path></svg>'},{name:"Vanilla CSS3 & HTML5",desc:"Custom glassmorphism styling, responsive grid layout, and semantic structure.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M15 9h-6l-.5-4h7.5l-.5 4zm-6 4h6l-.5 4.5-2.5 1.5-2.5-1.5-.2-2h2.2l.1 1.2 1.2.8 1.2-.8.2-1.2h-4.6z"></path></svg>'},{name:"HTML5 Canvas API",desc:"Custom performant animations including the Neural Constellation and Zen Flow backgrounds.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.268-.652-.053-.877.215-.225.542-.31 1.051-.31h2.438c2.66 0 4.853-2.192 4.853-4.853C21.5 6.756 17.244 2 12 2z"></path></svg>'}];i.vite&&m.push({name:"Vite ("+i.vite.replace(/[\^\~]/,"")+")",desc:"Next-generation frontend tooling providing ultra-fast builds and Hot Module Replacement.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'}),m.push({name:"GitHub Pages",desc:"Automated CI/CD deployment via GitHub Actions pipeline using the deployed build.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'}),a.innerHTML=m.map(k=>`
      <li class="tech-stack-item">
        <div class="tech-stack-icon-wrapper">
          ${k.icon}
        </div>
        <div class="tech-stack-info">
          <span class="tech-stack-name">${k.name}</span>
          <span class="tech-stack-desc">${k.desc}</span>
        </div>
      </li>
    `).join("");const u=()=>{t.classList.remove("hidden"),t.offsetWidth,t.classList.add("active")},C=()=>{t.classList.remove("active"),setTimeout(()=>{t.classList.contains("active")||t.classList.add("hidden")},300)};r.addEventListener("click",u),n.addEventListener("click",C),t.addEventListener("click",k=>{k.target===t&&C()})},initStudyMode(){this.loadStudyStats(),this.updateStudyMetrics(),this.initZenFlow(),document.getElementById("study-mode-btn").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("exit-study").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("timer-toggle").addEventListener("click",()=>{this.toggleTimer()}),document.getElementById("timer-reset").addEventListener("click",()=>{this.resetTimer()}),document.querySelectorAll(".preset-btn").forEach(r=>{r.addEventListener("click",t=>{const n=parseInt(t.target.dataset.time);this.setTimerDuration(n)})}),document.getElementById("minimize-study").addEventListener("click",()=>{this.minimizeStudy()}),document.getElementById("expand-study").addEventListener("click",()=>{this.expandStudy()}),document.getElementById("mini-stop-btn").addEventListener("click",()=>{this.expandStudy(),this.toggleStudyMode()}),document.getElementById("lock-screen-btn").addEventListener("click",()=>{this.lockScreen()}),document.getElementById("unlock-screen-btn").addEventListener("click",()=>{this.unlockScreen()})},loadStudyStats(){const r=localStorage.getItem("studyStats");r&&(b.stats=JSON.parse(r),this.updateStreak())},saveStudyStats(){localStorage.setItem("studyStats",JSON.stringify(b.stats))},updateStreak(){const r=new Date().toDateString(),t=b.stats.lastStudyDate;if(t){const n=new Date(t),a=new Date;a.setDate(a.getDate()-1),n.toDateString()===a.toDateString()||n.toDateString()!==r&&(b.stats.streak=0)}},updateStudyMetrics(){const r=document.getElementById("study-streak"),t=document.getElementById("study-cards"),n=document.getElementById("study-minutes");r&&(r.textContent=b.stats.streak),t&&(t.textContent=b.stats.cardsToday),n&&(n.textContent=b.stats.focusMinutes)},toggleStudyMode(){b.isActive=!b.isActive;const r=document.getElementById("study-mode-overlay"),t=document.querySelector(".zen-flow-bg");if(b.isActive){if(b.isMinimized){this.expandStudy();return}r.classList.remove("hidden"),r.classList.add("active"),t.style.opacity="1",this.updateStreak(),this.saveStudyStats()}else this.expandStudy(),r.classList.remove("active"),t.style.opacity="0",this.resetTimer(),setTimeout(()=>{r.classList.add("hidden")},500)},setTimerDuration(r){b.timer.duration=r*60,b.timer.remaining=r*60,document.querySelectorAll(".preset-btn").forEach(t=>{t.classList.toggle("active",parseInt(t.dataset.time)===r)}),this.updateTimerDisplay()},toggleTimer(){b.timer.isRunning?this.pauseTimer():this.startTimer()},startTimer(){b.timer.isRunning=!0,document.getElementById("timer-toggle").textContent="Pause",document.querySelector(".timer-wrapper").classList.add("active"),document.getElementById("lock-screen-btn").classList.remove("hidden"),b.timer.interval=setInterval(()=>{b.timer.remaining--,this.updateTimerDisplay(),b.timer.remaining<=0&&this.completeTimer()},1e3)},pauseTimer(){b.timer.isRunning=!1,document.getElementById("timer-toggle").textContent="Resume",document.querySelector(".timer-wrapper").classList.remove("active"),document.getElementById("lock-screen-btn").classList.add("hidden"),clearInterval(b.timer.interval),b.isLocked&&this.unlockScreen()},resetTimer(){this.pauseTimer(),b.timer.remaining=b.timer.duration,document.getElementById("timer-toggle").textContent="Start Focus",document.getElementById("timer-status").textContent="Ready to focus",document.getElementById("lock-screen-btn").classList.add("hidden"),this.updateTimerDisplay()},completeTimer(){this.pauseTimer(),document.getElementById("timer-status").textContent="Focus complete! Great work!",b.stats.focusMinutes+=Math.floor(b.timer.duration/60),this.updateStreakDate(),this.saveStudyStats(),this.updateStudyMetrics(),"Notification"in window&&Notification.permission==="granted"&&new Notification("Focus Session Complete",{body:"Great job! Take a break.",icon:"/vite.svg"})},updateTimerDisplay(){const r=Math.floor(b.timer.remaining/60),t=b.timer.remaining%60,n=`${r.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;document.getElementById("timer-minutes").textContent=r.toString().padStart(2,"0"),document.getElementById("timer-seconds").textContent=t.toString().padStart(2,"0"),document.getElementById("mini-timer-display").textContent=n;const a=b.timer.remaining/b.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${a}%`;const i=b.timer.remaining/b.timer.duration,u=2*Math.PI*130*(1-i);document.getElementById("timer-progress").style.strokeDashoffset=u,b.timer.isRunning?document.getElementById("timer-status").textContent="Stay focused...":document.getElementById("timer-status").textContent="Ready to focus"},minimizeStudy(){b.isMinimized=!0;const r=document.getElementById("study-mode-overlay"),t=document.querySelector(".zen-flow-bg");r.classList.remove("active"),t.style.opacity="0",setTimeout(()=>r.classList.add("hidden"),500),document.getElementById("mini-timer").classList.remove("hidden");const n=Math.floor(b.timer.remaining/60),a=b.timer.remaining%60;document.getElementById("mini-timer-display").textContent=`${n.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`;const i=b.timer.remaining/b.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${i}%`},expandStudy(){if(b.isMinimized=!1,document.getElementById("mini-timer").classList.add("hidden"),b.isActive){const r=document.getElementById("study-mode-overlay"),t=document.querySelector(".zen-flow-bg");r.classList.remove("hidden"),r.classList.add("active"),t.style.opacity="1"}},lockScreen(){b.isLocked=!0,document.getElementById("study-mode-overlay").classList.add("study-locked"),document.getElementById("unlock-screen-overlay").classList.remove("hidden")},unlockScreen(){b.isLocked=!1,document.getElementById("study-mode-overlay").classList.remove("study-locked"),document.getElementById("unlock-screen-overlay").classList.add("hidden")},updateStreakDate(){const r=new Date().toDateString(),t=b.stats.lastStudyDate;if(t!==r){const n=new Date;n.setDate(n.getDate()-1),t===n.toDateString()?b.stats.streak++:b.stats.streak=1,b.stats.lastStudyDate=r}},initZenFlow(){const r=document.getElementById("zen-flow-canvas"),t=r.getContext("2d");let n,a,i=[];const m=()=>{n=r.width=window.innerWidth,a=r.height=window.innerHeight,u()},u=()=>{i=[];const k=30;for(let l=0;l<k;l++)i.push({x:Math.random()*n,y:Math.random()*a,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,radius:Math.random()*80+40,hue:Math.random()*60+170,alpha:Math.random()*.1+.05,pulse:Math.random()*Math.PI*2})},C=()=>{if(!b.isActive){requestAnimationFrame(C);return}t.clearRect(0,0,n,a);const k=document.documentElement.classList.contains("light-mode");if(i.forEach(l=>{l.x+=l.vx,l.y+=l.vy,l.x<-l.radius&&(l.x=n+l.radius),l.x>n+l.radius&&(l.x=-l.radius),l.y<-l.radius&&(l.y=a+l.radius),l.y>a+l.radius&&(l.y=-l.radius),l.pulse+=.02;const A=t.createRadialGradient(l.x,l.y,0,l.x,l.y,l.radius),T=l.radius*(1+Math.sin(l.pulse)*.1);k?(A.addColorStop(0,`hsla(40, 30%, 70%, ${l.alpha*.5})`),A.addColorStop(.5,`hsla(40, 20%, 80%, ${l.alpha*.2})`),A.addColorStop(1,"transparent")):(A.addColorStop(0,`hsla(${l.hue}, 70%, 50%, ${l.alpha})`),A.addColorStop(.5,`hsla(${l.hue}, 70%, 50%, ${l.alpha*.3})`),A.addColorStop(1,"transparent")),t.beginPath(),t.arc(l.x,l.y,T,0,Math.PI*2),t.fillStyle=A,t.fill()}),b.timer.isRunning){const l=Date.now()/1e3,A=150+Math.sin(l*.5)*20,T=t.createRadialGradient(n/2,a/2,0,n/2,a/2,A);k?(T.addColorStop(0,"hsla(40, 30%, 75%, 0.05)"),T.addColorStop(1,"transparent")):(T.addColorStop(0,"hsla(180, 70%, 50%, 0.03)"),T.addColorStop(1,"transparent")),t.beginPath(),t.arc(n/2,a/2,A,0,Math.PI*2),t.fillStyle=T,t.fill()}requestAnimationFrame(C)};window.addEventListener("resize",m),m(),C()}};document.addEventListener("DOMContentLoaded",()=>Nt.init());
