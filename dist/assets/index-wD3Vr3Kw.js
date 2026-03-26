(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const p of n)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(n){const p={};return n.integrity&&(p.integrity=n.integrity),n.referrerPolicy&&(p.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?p.credentials="include":n.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(n){if(n.ep)return;n.ep=!0;const p=i(n);fetch(n.href,p)}})();const ar=70,De=160,Fe=120;class nr{constructor(r,i){this.width=r,this.height=i,this.x=Math.random()*r,this.y=Math.random()*i,this.vx=(Math.random()-.5)*.4,this.vy=(Math.random()-.5)*.4,this.baseRadius=1.5+Math.random()*2,this.pulsePhase=Math.random()*Math.PI*2,this.pulseSpeed=.015+Math.random()*.025,this.isHub=Math.random()<.12,this.isHub&&(this.baseRadius*=2)}update(r){this.pulsePhase+=this.pulseSpeed;const i=this.x-r.x,a=this.y-r.y,n=Math.hypot(i,a);if(n<Fe&&n>0){const h=((Fe-n)/Fe)**2*3;this.vx+=i/n*h*.08,this.vy+=a/n*h*.08}this.vx*=.975,this.vy*=.975;const p=Math.hypot(this.vx,this.vy);p>1.5&&(this.vx=this.vx/p*1.5,this.vy=this.vy/p*1.5),this.x+=this.vx,this.y+=this.vy,this.x<0&&(this.x=this.width),this.x>this.width&&(this.x=0),this.y<0&&(this.y=this.height),this.y>this.height&&(this.y=0)}draw(r,i){const a=.5+.5*Math.sin(this.pulsePhase),n=this.baseRadius*(1+a*.6),p=(this.isHub?.7:.4)+a*.4,h=i?`rgba(176, 141, 87, ${p})`:this.isHub?`rgba(180, 100, 255, ${p})`:`rgba(0, 242, 255, ${p})`,C=i?`rgba(176, 141, 87, ${a*.12})`:this.isHub?`rgba(130, 0, 255, ${a*.1})`:`rgba(0, 242, 255, ${a*.1})`;r.beginPath(),r.arc(this.x,this.y,n*5,0,Math.PI*2),r.fillStyle=C,r.fill(),r.beginPath(),r.arc(this.x,this.y,n,0,Math.PI*2),r.fillStyle=h,r.fill()}}class ir{constructor(r,i,a,n,p){this.x1=r,this.y1=i,this.x2=a,this.y2=n,this.progress=0,this.speed=.02+Math.random()*.03,this.isLight=p,this.alive=!0}update(){this.progress+=this.speed,this.progress>=1&&(this.alive=!1)}draw(r){const i=this.x1+(this.x2-this.x1)*this.progress,a=this.y1+(this.y2-this.y1)*this.progress,n=1-this.progress;r.beginPath(),r.arc(i,a,3,0,Math.PI*2),r.fillStyle=this.isLight?`rgba(212, 160, 23, ${n})`:`rgba(255, 255, 255, ${n})`,r.fill()}}function sr(t){const r=t.getContext("2d");let i=0,a=0,n=[],p=[],h=null;const C={x:-9999,y:-9999};let k=0;function l(){i=t.width=window.innerWidth,a=t.height=window.innerHeight,n=Array.from({length:ar},()=>new nr(i,a))}function I(M){if(k--,k>0)return;k=30+Math.floor(Math.random()*60);const S=[...n].sort(()=>Math.random()-.5);for(let B=0;B<S.length-1;B++){const O=S[B],J=S[B+1];if(Math.hypot(O.x-J.x,O.y-J.y)<De){p.push(new ir(O.x,O.y,J.x,J.y,M));return}}}function T(M,S,B,O){const J=(1-B/De)*(O?.25:.35),$=r.createLinearGradient(M.x,M.y,S.x,S.y),Y=O?`rgba(176,141,87,${J*1.5})`:M.isHub?`rgba(150,50,255,${J*1.5})`:`rgba(0,242,255,${J*1.5})`,Z=O?`rgba(122,106,83,${J})`:S.isHub?`rgba(150,50,255,${J})`:`rgba(0,200,220,${J})`;$.addColorStop(0,Y),$.addColorStop(1,Z),r.beginPath(),r.moveTo(M.x,M.y),r.lineTo(S.x,S.y),r.strokeStyle=$,r.lineWidth=O?.6:.8,r.stroke()}function z(){const M=document.documentElement.classList.contains("light-mode");r.clearRect(0,0,i,a);for(let S=0;S<n.length;S++){n[S].update(C);for(let B=S+1;B<n.length;B++){const O=n[S].x-n[B].x,J=n[S].y-n[B].y,$=Math.hypot(O,J);$<De&&T(n[S],n[B],$,M)}}n.forEach(S=>S.draw(r,M)),I(M),p=p.filter(S=>S.alive),p.forEach(S=>{S.update(),S.draw(r)}),h=requestAnimationFrame(z)}function G(){cancelAnimationFrame(h),window.removeEventListener("resize",l),window.removeEventListener("mousemove",R)}function R(M){C.x=M.clientX,C.y=M.clientY}return window.addEventListener("resize",l),window.addEventListener("mousemove",R),l(),z(),{destroy:G}}function lr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var je,at;function dr(){if(at)return je;at=1;function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(o=>{const d=e[o],v=typeof d;(v==="object"||v==="function")&&!Object.isFrozen(d)&&t(d)}),e}class r{constructor(o){o.data===void 0&&(o.data={}),this.data=o.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...o){const d=Object.create(null);for(const v in e)d[v]=e[v];return o.forEach(function(v){for(const L in v)d[L]=v[L]}),d}const n="</span>",p=e=>!!e.scope,h=(e,{prefix:o})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const d=e.split(".");return[`${o}${d.shift()}`,...d.map((v,L)=>`${v}${"_".repeat(L+1)}`)].join(" ")}return`${o}${e}`};class C{constructor(o,d){this.buffer="",this.classPrefix=d.classPrefix,o.walk(this)}addText(o){this.buffer+=i(o)}openNode(o){if(!p(o))return;const d=h(o.scope,{prefix:this.classPrefix});this.span(d)}closeNode(o){p(o)&&(this.buffer+=n)}value(){return this.buffer}span(o){this.buffer+=`<span class="${o}">`}}const k=(e={})=>{const o={children:[]};return Object.assign(o,e),o};class l{constructor(){this.rootNode=k(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(o){this.top.children.push(o)}openNode(o){const d=k({scope:o});this.add(d),this.stack.push(d)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(o){return this.constructor._walk(o,this.rootNode)}static _walk(o,d){return typeof d=="string"?o.addText(d):d.children&&(o.openNode(d),d.children.forEach(v=>this._walk(o,v)),o.closeNode(d)),o}static _collapse(o){typeof o!="string"&&o.children&&(o.children.every(d=>typeof d=="string")?o.children=[o.children.join("")]:o.children.forEach(d=>{l._collapse(d)}))}}class I extends l{constructor(o){super(),this.options=o}addText(o){o!==""&&this.add(o)}startScope(o){this.openNode(o)}endScope(){this.closeNode()}__addSublanguage(o,d){const v=o.root;d&&(v.scope=`language:${d}`),this.add(v)}toHTML(){return new C(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function T(e){return e?typeof e=="string"?e:e.source:null}function z(e){return M("(?=",e,")")}function G(e){return M("(?:",e,")*")}function R(e){return M("(?:",e,")?")}function M(...e){return e.map(d=>T(d)).join("")}function S(e){const o=e[e.length-1];return typeof o=="object"&&o.constructor===Object?(e.splice(e.length-1,1),o):{}}function B(...e){return"("+(S(e).capture?"":"?:")+e.map(v=>T(v)).join("|")+")"}function O(e){return new RegExp(e.toString()+"|").exec("").length-1}function J(e,o){const d=e&&e.exec(o);return d&&d.index===0}const $=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Y(e,{joinWith:o}){let d=0;return e.map(v=>{d+=1;const L=d;let N=T(v),g="";for(;N.length>0;){const m=$.exec(N);if(!m){g+=N;break}g+=N.substring(0,m.index),N=N.substring(m.index+m[0].length),m[0][0]==="\\"&&m[1]?g+="\\"+String(Number(m[1])+L):(g+=m[0],m[0]==="("&&d++)}return g}).map(v=>`(${v})`).join(o)}const Z=/\b\B/,ue="[a-zA-Z]\\w*",le="[a-zA-Z_]\\w*",he="\\b\\d+(\\.\\d+)?",be="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",fe="\\b(0b[01]+)",Te="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ae=(e={})=>{const o=/^#![ ]*\//;return e.binary&&(e.begin=M(o,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:o,end:/$/,relevance:0,"on:begin":(d,v)=>{d.index!==0&&v.ignoreMatch()}},e)},ae={begin:"\\\\[\\s\\S]",relevance:0},Be={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ae]},ve={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ae]},_e={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},U=function(e,o,d={}){const v=a({scope:"comment",begin:e,end:o,contains:[]},d);v.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const L=B("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return v.contains.push({begin:M(/[ ]+/,"(",L,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),v},te=U("//","$"),ne=U("/\\*","\\*/"),de=U("#","$"),ge={scope:"number",begin:he,relevance:0},xe={scope:"number",begin:be,relevance:0},ut={scope:"number",begin:fe,relevance:0},ht={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ae,{begin:/\[/,end:/\]/,relevance:0,contains:[ae]}]},bt={scope:"title",begin:ue,relevance:0},ft={scope:"title",begin:le,relevance:0},vt={begin:"\\.\\s*"+le,relevance:0};var ke=Object.freeze({__proto__:null,APOS_STRING_MODE:Be,BACKSLASH_ESCAPE:ae,BINARY_NUMBER_MODE:ut,BINARY_NUMBER_RE:fe,COMMENT:U,C_BLOCK_COMMENT_MODE:ne,C_LINE_COMMENT_MODE:te,C_NUMBER_MODE:xe,C_NUMBER_RE:be,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(o,d)=>{d.data._beginMatch=o[1]},"on:end":(o,d)=>{d.data._beginMatch!==o[1]&&d.ignoreMatch()}})},HASH_COMMENT_MODE:de,IDENT_RE:ue,MATCH_NOTHING_RE:Z,METHOD_GUARD:vt,NUMBER_MODE:ge,NUMBER_RE:he,PHRASAL_WORDS_MODE:_e,QUOTE_STRING_MODE:ve,REGEXP_MODE:ht,RE_STARTERS_RE:Te,SHEBANG:Ae,TITLE_MODE:bt,UNDERSCORE_IDENT_RE:le,UNDERSCORE_TITLE_MODE:ft});function xt(e,o){e.input[e.index-1]==="."&&o.ignoreMatch()}function kt(e,o){e.className!==void 0&&(e.scope=e.className,delete e.className)}function wt(e,o){o&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=xt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Ct(e,o){Array.isArray(e.illegal)&&(e.illegal=B(...e.illegal))}function St(e,o){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Et(e,o){e.relevance===void 0&&(e.relevance=1)}const Mt=(e,o)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const d=Object.assign({},e);Object.keys(e).forEach(v=>{delete e[v]}),e.keywords=d.keywords,e.begin=M(d.beforeMatch,z(d.begin)),e.starts={relevance:0,contains:[Object.assign(d,{endsParent:!0})]},e.relevance=0,delete d.beforeMatch},It=["of","and","for","in","not","or","if","then","parent","list","value"],Tt="keyword";function Ue(e,o,d=Tt){const v=Object.create(null);return typeof e=="string"?L(d,e.split(" ")):Array.isArray(e)?L(d,e):Object.keys(e).forEach(function(N){Object.assign(v,Ue(e[N],o,N))}),v;function L(N,g){o&&(g=g.map(m=>m.toLowerCase())),g.forEach(function(m){const f=m.split("|");v[f[0]]=[N,At(f[0],f[1])]})}}function At(e,o){return o?Number(o):Bt(e)?0:1}function Bt(e){return It.includes(e.toLowerCase())}const He={},ie=e=>{console.error(e)},Ge=(e,...o)=>{console.log(`WARN: ${e}`,...o)},ce=(e,o)=>{He[`${e}/${o}`]||(console.log(`Deprecated as of ${e}. ${o}`),He[`${e}/${o}`]=!0)},we=new Error;function We(e,o,{key:d}){let v=0;const L=e[d],N={},g={};for(let m=1;m<=o.length;m++)g[m+v]=L[m],N[m+v]=!0,v+=O(o[m-1]);e[d]=g,e[d]._emit=N,e[d]._multi=!0}function _t(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ie("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),we;if(typeof e.beginScope!="object"||e.beginScope===null)throw ie("beginScope must be object"),we;We(e,e.begin,{key:"beginScope"}),e.begin=Y(e.begin,{joinWith:""})}}function Pt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ie("skip, excludeEnd, returnEnd not compatible with endScope: {}"),we;if(typeof e.endScope!="object"||e.endScope===null)throw ie("endScope must be object"),we;We(e,e.end,{key:"endScope"}),e.end=Y(e.end,{joinWith:""})}}function zt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Lt(e){zt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),_t(e),Pt(e)}function Nt(e){function o(g,m){return new RegExp(T(g),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(m?"g":""))}class d{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(m,f){f.position=this.position++,this.matchIndexes[this.matchAt]=f,this.regexes.push([f,m]),this.matchAt+=O(m)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const m=this.regexes.map(f=>f[1]);this.matcherRe=o(Y(m,{joinWith:"|"}),!0),this.lastIndex=0}exec(m){this.matcherRe.lastIndex=this.lastIndex;const f=this.matcherRe.exec(m);if(!f)return null;const j=f.findIndex((ye,ze)=>ze>0&&ye!==void 0),D=this.matchIndexes[j];return f.splice(0,j),Object.assign(f,D)}}class v{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(m){if(this.multiRegexes[m])return this.multiRegexes[m];const f=new d;return this.rules.slice(m).forEach(([j,D])=>f.addRule(j,D)),f.compile(),this.multiRegexes[m]=f,f}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(m,f){this.rules.push([m,f]),f.type==="begin"&&this.count++}exec(m){const f=this.getMatcher(this.regexIndex);f.lastIndex=this.lastIndex;let j=f.exec(m);if(this.resumingScanAtSamePosition()&&!(j&&j.index===this.lastIndex)){const D=this.getMatcher(0);D.lastIndex=this.lastIndex+1,j=D.exec(m)}return j&&(this.regexIndex+=j.position+1,this.regexIndex===this.count&&this.considerAll()),j}}function L(g){const m=new v;return g.contains.forEach(f=>m.addRule(f.begin,{rule:f,type:"begin"})),g.terminatorEnd&&m.addRule(g.terminatorEnd,{type:"end"}),g.illegal&&m.addRule(g.illegal,{type:"illegal"}),m}function N(g,m){const f=g;if(g.isCompiled)return f;[kt,St,Lt,Mt].forEach(D=>D(g,m)),e.compilerExtensions.forEach(D=>D(g,m)),g.__beforeBegin=null,[wt,Ct,Et].forEach(D=>D(g,m)),g.isCompiled=!0;let j=null;return typeof g.keywords=="object"&&g.keywords.$pattern&&(g.keywords=Object.assign({},g.keywords),j=g.keywords.$pattern,delete g.keywords.$pattern),j=j||/\w+/,g.keywords&&(g.keywords=Ue(g.keywords,e.case_insensitive)),f.keywordPatternRe=o(j,!0),m&&(g.begin||(g.begin=/\B|\b/),f.beginRe=o(f.begin),!g.end&&!g.endsWithParent&&(g.end=/\B|\b/),g.end&&(f.endRe=o(f.end)),f.terminatorEnd=T(f.end)||"",g.endsWithParent&&m.terminatorEnd&&(f.terminatorEnd+=(g.end?"|":"")+m.terminatorEnd)),g.illegal&&(f.illegalRe=o(g.illegal)),g.contains||(g.contains=[]),g.contains=[].concat(...g.contains.map(function(D){return Rt(D==="self"?g:D)})),g.contains.forEach(function(D){N(D,f)}),g.starts&&N(g.starts,m),f.matcher=L(f),f}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),N(e)}function $e(e){return e?e.endsWithParent||$e(e.starts):!1}function Rt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(o){return a(e,{variants:null},o)})),e.cachedVariants?e.cachedVariants:$e(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}var Ot="11.11.1";class Jt extends Error{constructor(o,d){super(o),this.name="HTMLInjectionError",this.html=d}}const Pe=i,qe=a,Ye=Symbol("nomatch"),Dt=7,Ke=function(e){const o=Object.create(null),d=Object.create(null),v=[];let L=!0;const N="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]};let m={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:I};function f(s){return m.noHighlightRe.test(s)}function j(s){let u=s.className+" ";u+=s.parentNode?s.parentNode.className:"";const E=m.languageDetectRe.exec(u);if(E){const _=re(E[1]);return _||(Ge(N.replace("{}",E[1])),Ge("Falling back to no-highlight mode for this block.",s)),_?E[1]:"no-highlight"}return u.split(/\s+/).find(_=>f(_)||re(_))}function D(s,u,E){let _="",F="";typeof u=="object"?(_=s,E=u.ignoreIllegals,F=u.language):(ce("10.7.0","highlight(lang, code, ...args) has been deprecated."),ce("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),F=s,_=u),E===void 0&&(E=!0);const K={code:_,language:F};Se("before:highlight",K);const oe=K.result?K.result:ye(K.language,K.code,E);return oe.code=K.code,Se("after:highlight",oe),oe}function ye(s,u,E,_){const F=Object.create(null);function K(c,y){return c.keywords[y]}function oe(){if(!x.keywords){H.addText(P);return}let c=0;x.keywordPatternRe.lastIndex=0;let y=x.keywordPatternRe.exec(P),w="";for(;y;){w+=P.substring(c,y.index);const A=X.case_insensitive?y[0].toLowerCase():y[0],W=K(x,A);if(W){const[Q,rr]=W;if(H.addText(w),w="",F[A]=(F[A]||0)+1,F[A]<=Dt&&(Ie+=rr),Q.startsWith("_"))w+=y[0];else{const or=X.classNameAliases[Q]||Q;V(y[0],or)}}else w+=y[0];c=x.keywordPatternRe.lastIndex,y=x.keywordPatternRe.exec(P)}w+=P.substring(c),H.addText(w)}function Ee(){if(P==="")return;let c=null;if(typeof x.subLanguage=="string"){if(!o[x.subLanguage]){H.addText(P);return}c=ye(x.subLanguage,P,!0,ot[x.subLanguage]),ot[x.subLanguage]=c._top}else c=Le(P,x.subLanguage.length?x.subLanguage:null);x.relevance>0&&(Ie+=c.relevance),H.__addSublanguage(c._emitter,c.language)}function q(){x.subLanguage!=null?Ee():oe(),P=""}function V(c,y){c!==""&&(H.startScope(y),H.addText(c),H.endScope())}function Qe(c,y){let w=1;const A=y.length-1;for(;w<=A;){if(!c._emit[w]){w++;continue}const W=X.classNameAliases[c[w]]||c[w],Q=y[w];W?V(Q,W):(P=Q,oe(),P=""),w++}}function et(c,y){return c.scope&&typeof c.scope=="string"&&H.openNode(X.classNameAliases[c.scope]||c.scope),c.beginScope&&(c.beginScope._wrap?(V(P,X.classNameAliases[c.beginScope._wrap]||c.beginScope._wrap),P=""):c.beginScope._multi&&(Qe(c.beginScope,y),P="")),x=Object.create(c,{parent:{value:x}}),x}function tt(c,y,w){let A=J(c.endRe,w);if(A){if(c["on:end"]){const W=new r(c);c["on:end"](y,W),W.isMatchIgnored&&(A=!1)}if(A){for(;c.endsParent&&c.parent;)c=c.parent;return c}}if(c.endsWithParent)return tt(c.parent,y,w)}function Xt(c){return x.matcher.regexIndex===0?(P+=c[0],1):(Je=!0,0)}function Zt(c){const y=c[0],w=c.rule,A=new r(w),W=[w.__beforeBegin,w["on:begin"]];for(const Q of W)if(Q&&(Q(c,A),A.isMatchIgnored))return Xt(y);return w.skip?P+=y:(w.excludeBegin&&(P+=y),q(),!w.returnBegin&&!w.excludeBegin&&(P=y)),et(w,c),w.returnBegin?0:y.length}function Qt(c){const y=c[0],w=u.substring(c.index),A=tt(x,c,w);if(!A)return Ye;const W=x;x.endScope&&x.endScope._wrap?(q(),V(y,x.endScope._wrap)):x.endScope&&x.endScope._multi?(q(),Qe(x.endScope,c)):W.skip?P+=y:(W.returnEnd||W.excludeEnd||(P+=y),q(),W.excludeEnd&&(P=y));do x.scope&&H.closeNode(),!x.skip&&!x.subLanguage&&(Ie+=x.relevance),x=x.parent;while(x!==A.parent);return A.starts&&et(A.starts,c),W.returnEnd?0:y.length}function er(){const c=[];for(let y=x;y!==X;y=y.parent)y.scope&&c.unshift(y.scope);c.forEach(y=>H.openNode(y))}let Me={};function rt(c,y){const w=y&&y[0];if(P+=c,w==null)return q(),0;if(Me.type==="begin"&&y.type==="end"&&Me.index===y.index&&w===""){if(P+=u.slice(y.index,y.index+1),!L){const A=new Error(`0 width match regex (${s})`);throw A.languageName=s,A.badRule=Me.rule,A}return 1}if(Me=y,y.type==="begin")return Zt(y);if(y.type==="illegal"&&!E){const A=new Error('Illegal lexeme "'+w+'" for mode "'+(x.scope||"<unnamed>")+'"');throw A.mode=x,A}else if(y.type==="end"){const A=Qt(y);if(A!==Ye)return A}if(y.type==="illegal"&&w==="")return P+=`
`,1;if(Oe>1e5&&Oe>y.index*3)throw new Error("potential infinite loop, way more iterations than matches");return P+=w,w.length}const X=re(s);if(!X)throw ie(N.replace("{}",s)),new Error('Unknown language: "'+s+'"');const tr=Nt(X);let Re="",x=_||tr;const ot={},H=new m.__emitter(m);er();let P="",Ie=0,se=0,Oe=0,Je=!1;try{if(X.__emitTokens)X.__emitTokens(u,H);else{for(x.matcher.considerAll();;){Oe++,Je?Je=!1:x.matcher.considerAll(),x.matcher.lastIndex=se;const c=x.matcher.exec(u);if(!c)break;const y=u.substring(se,c.index),w=rt(y,c);se=c.index+w}rt(u.substring(se))}return H.finalize(),Re=H.toHTML(),{language:s,value:Re,relevance:Ie,illegal:!1,_emitter:H,_top:x}}catch(c){if(c.message&&c.message.includes("Illegal"))return{language:s,value:Pe(u),illegal:!0,relevance:0,_illegalBy:{message:c.message,index:se,context:u.slice(se-100,se+100),mode:c.mode,resultSoFar:Re},_emitter:H};if(L)return{language:s,value:Pe(u),illegal:!1,relevance:0,errorRaised:c,_emitter:H,_top:x};throw c}}function ze(s){const u={value:Pe(s),illegal:!1,relevance:0,_top:g,_emitter:new m.__emitter(m)};return u._emitter.addText(s),u}function Le(s,u){u=u||m.languages||Object.keys(o);const E=ze(s),_=u.filter(re).filter(Ze).map(q=>ye(q,s,!1));_.unshift(E);const F=_.sort((q,V)=>{if(q.relevance!==V.relevance)return V.relevance-q.relevance;if(q.language&&V.language){if(re(q.language).supersetOf===V.language)return 1;if(re(V.language).supersetOf===q.language)return-1}return 0}),[K,oe]=F,Ee=K;return Ee.secondBest=oe,Ee}function Ft(s,u,E){const _=u&&d[u]||E;s.classList.add("hljs"),s.classList.add(`language-${_}`)}function Ne(s){let u=null;const E=j(s);if(f(E))return;if(Se("before:highlightElement",{el:s,language:E}),s.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",s);return}if(s.children.length>0&&(m.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),m.throwUnescapedHTML))throw new Jt("One of your code blocks includes unescaped HTML.",s.innerHTML);u=s;const _=u.textContent,F=E?D(_,{language:E,ignoreIllegals:!0}):Le(_);s.innerHTML=F.value,s.dataset.highlighted="yes",Ft(s,E,F.language),s.result={language:F.language,re:F.relevance,relevance:F.relevance},F.secondBest&&(s.secondBest={language:F.secondBest.language,relevance:F.secondBest.relevance}),Se("after:highlightElement",{el:s,result:F,text:_})}function jt(s){m=qe(m,s)}const Ut=()=>{Ce(),ce("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ht(){Ce(),ce("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ve=!1;function Ce(){function s(){Ce()}if(document.readyState==="loading"){Ve||window.addEventListener("DOMContentLoaded",s,!1),Ve=!0;return}document.querySelectorAll(m.cssSelector).forEach(Ne)}function Gt(s,u){let E=null;try{E=u(e)}catch(_){if(ie("Language definition for '{}' could not be registered.".replace("{}",s)),L)ie(_);else throw _;E=g}E.name||(E.name=s),o[s]=E,E.rawDefinition=u.bind(null,e),E.aliases&&Xe(E.aliases,{languageName:s})}function Wt(s){delete o[s];for(const u of Object.keys(d))d[u]===s&&delete d[u]}function $t(){return Object.keys(o)}function re(s){return s=(s||"").toLowerCase(),o[s]||o[d[s]]}function Xe(s,{languageName:u}){typeof s=="string"&&(s=[s]),s.forEach(E=>{d[E.toLowerCase()]=u})}function Ze(s){const u=re(s);return u&&!u.disableAutodetect}function qt(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=u=>{s["before:highlightBlock"](Object.assign({block:u.el},u))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=u=>{s["after:highlightBlock"](Object.assign({block:u.el},u))})}function Yt(s){qt(s),v.push(s)}function Kt(s){const u=v.indexOf(s);u!==-1&&v.splice(u,1)}function Se(s,u){const E=s;v.forEach(function(_){_[E]&&_[E](u)})}function Vt(s){return ce("10.7.0","highlightBlock will be removed entirely in v12.0"),ce("10.7.0","Please use highlightElement now."),Ne(s)}Object.assign(e,{highlight:D,highlightAuto:Le,highlightAll:Ce,highlightElement:Ne,highlightBlock:Vt,configure:jt,initHighlighting:Ut,initHighlightingOnLoad:Ht,registerLanguage:Gt,unregisterLanguage:Wt,listLanguages:$t,getLanguage:re,registerAliases:Xe,autoDetection:Ze,inherit:qe,addPlugin:Yt,removePlugin:Kt}),e.debugMode=function(){L=!1},e.safeMode=function(){L=!0},e.versionString=Ot,e.regex={concat:M,lookahead:z,either:B,optional:R,anyNumberOfTimes:G};for(const s in ke)typeof ke[s]=="object"&&t(ke[s]);return Object.assign(e,ke),e},pe=Ke({});return pe.newInstance=()=>Ke({}),je=pe,pe.HighlightJS=pe,pe.default=pe,je}var cr=dr();const ee=lr(cr);function pt(t){const r=t.regex,i={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[i]}]};Object.assign(i,{className:"variable",variants:[{begin:r.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const n={className:"subst",begin:/\$\(/,end:/\)/,contains:[t.BACKSLASH_ESCAPE]},p=t.inherit(t.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),h={begin:/<<-?\s*(?=\w+)/,starts:{contains:[t.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},C={className:"string",begin:/"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,i,n]};n.contains.push(C);const k={match:/\\"/},l={className:"string",begin:/'/,end:/'/},I={match:/\\'/},T={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},t.NUMBER_MODE,i]},z=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],G=t.SHEBANG({binary:`(${z.join("|")})`,relevance:10}),R={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[t.inherit(t.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},M=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],S=["true","false"],B={match:/(\/[a-z._-]+)+/},O=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],J=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],$=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],Y=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:M,literal:S,built_in:[...O,...J,"set","shopt",...$,...Y]},contains:[G,t.SHEBANG(),R,T,p,h,B,C,k,l,I,i]}}function pr(t){const r=t.regex,i=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),a=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],C={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:a,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},k={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:C,illegal:/#/},I={begin:/\{\{/,relevance:0},T={className:"string",contains:[t.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,k],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,k],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[t.BACKSLASH_ESCAPE,k,I,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,k,I,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[t.BACKSLASH_ESCAPE,I,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[t.BACKSLASH_ESCAPE,I,l]},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE]},z="[0-9](_?[0-9])*",G=`(\\b(${z}))?\\.(${z})|\\b(${z})\\.`,R=`\\b|${a.join("|")}`,M={className:"number",relevance:0,variants:[{begin:`(\\b(${z})|(${G}))[eE][+-]?(${z})[jJ]?(?=${R})`},{begin:`(${G})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${R})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${R})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${R})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${R})`},{begin:`\\b(${z})[jJ](?=${R})`}]},S={className:"comment",begin:r.lookahead(/# type:/),end:/$/,keywords:C,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},B={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:["self",k,M,T,t.HASH_COMMENT_MODE]}]};return l.contains=[T,M,k],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:C,illegal:/(<\/|\?)|=>/,contains:[k,M,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},T,S,t.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,i],scope:{1:"keyword",3:"title.function"},contains:[B]},{variants:[{match:[/\bclass/,/\s+/,i,/\s*/,/\(\s*/,i,/\s*\)/]},{match:[/\bclass/,/\s+/,i]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[M,B,T]}]}}function mr(t){const r={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},i={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],n={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[r,i,t.QUOTE_STRING_MODE,n,t.C_NUMBER_MODE,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function gr(t){const r="true false yes no null",i="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},n={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},p={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},h={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[t.BACKSLASH_ESCAPE,n]},C=t.inherit(h,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),z={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},G={end:",",endsWithParent:!0,excludeEnd:!0,keywords:r,relevance:0},R={begin:/\{/,end:/\}/,contains:[G],illegal:"\\n",relevance:0},M={begin:"\\[",end:"\\]",contains:[G],illegal:"\\n",relevance:0},S=[a,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+i},{className:"type",begin:"!<"+i+">"},{className:"type",begin:"!"+i},{className:"type",begin:"!!"+i},{className:"meta",begin:"&"+t.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+t.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},t.HASH_COMMENT_MODE,{beginKeywords:r,keywords:{literal:r}},z,{className:"number",begin:t.C_NUMBER_RE+"\\b",relevance:0},R,M,p,h],B=[...S];return B.pop(),B.push(C),G.contains=B,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:S}}const nt="[A-Za-z$_][0-9A-Za-z$_]*",yr=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],ur=["true","false","null","undefined","NaN","Infinity"],mt=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gt=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],yt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],hr=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],br=[].concat(yt,mt,gt);function fr(t){const r=t.regex,i=(U,{after:te})=>{const ne="</"+U[0].slice(1);return U.input.indexOf(ne,te)!==-1},a=nt,n={begin:"<>",end:"</>"},p=/<[A-Za-z0-9\\._:-]+\s*\/>/,h={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(U,te)=>{const ne=U[0].length+U.index,de=U.input[ne];if(de==="<"||de===","){te.ignoreMatch();return}de===">"&&(i(U,{after:ne})||te.ignoreMatch());let ge;const xe=U.input.substring(ne);if(ge=xe.match(/^\s*=/)){te.ignoreMatch();return}if((ge=xe.match(/^\s+extends\s+/))&&ge.index===0){te.ignoreMatch();return}}},C={$pattern:nt,keyword:yr,literal:ur,built_in:br,"variable.language":hr},k="[0-9](_?[0-9])*",l=`\\.(${k})`,I="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",T={className:"number",variants:[{begin:`(\\b(${I})((${l})|\\.)?|(${l}))[eE][+-]?(${k})\\b`},{begin:`\\b(${I})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},z={className:"subst",begin:"\\$\\{",end:"\\}",keywords:C,contains:[]},G={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,z],subLanguage:"xml"}},R={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,z],subLanguage:"css"}},M={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,z],subLanguage:"graphql"}},S={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,z]},O={className:"comment",variants:[t.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]},J=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,G,R,M,S,{match:/\$\d+/},T];z.contains=J.concat({begin:/\{/,end:/\}/,keywords:C,contains:["self"].concat(J)});const $=[].concat(O,z.contains),Y=$.concat([{begin:/(\s*)\(/,end:/\)/,keywords:C,contains:["self"].concat($)}]),Z={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:Y},ue={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,r.concat(a,"(",r.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},le={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...mt,...gt]}},he={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},be={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Z],illegal:/%/},fe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Te(U){return r.concat("(?!",U.join("|"),")")}const Ae={match:r.concat(/\b/,Te([...yt,"super","import"].map(U=>`${U}\\s*\\(`)),a,r.lookahead(/\s*\(/)),className:"title.function",relevance:0},ae={begin:r.concat(/\./,r.lookahead(r.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Be={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Z]},ve="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",_e={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(ve)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Z]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:C,exports:{PARAMS_CONTAINS:Y,CLASS_REFERENCE:le},illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",relevance:5}),he,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,G,R,M,S,O,{match:/\$\d+/},T,le,{scope:"attr",match:a+r.lookahead(":"),relevance:0},_e,{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[O,t.REGEXP_MODE,{className:"function",begin:ve,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:Y}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:n.begin,end:n.end},{match:p},{begin:h.begin,"on:begin":h.isTrulyOpeningTag,end:h.end}],subLanguage:"xml",contains:[{begin:h.begin,end:h.end,skip:!0,contains:["self"]}]}]},be,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Z,t.inherit(t.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ae,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Z]},Ae,fe,ue,Be,{match:/\$[(.]/}]}}function vr(t){const r=t.regex,i=r.concat(/[\p{L}_]/u,r.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,n={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},p={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},h=t.inherit(p,{begin:/\(/,end:/\)/}),C=t.inherit(t.APOS_STRING_MODE,{className:"string"}),k=t.inherit(t.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[p,k,C,h,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[p,h,k,C]}]}]},t.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},n,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[k]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:r.concat(/</,r.lookahead(r.concat(i,r.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:i,relevance:0,starts:l}]},{className:"tag",begin:r.concat(/<\//,r.lookahead(r.concat(i,/>/))),contains:[{className:"name",begin:i,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}ee.registerLanguage("bash",pt);ee.registerLanguage("shell",pt);ee.registerLanguage("python",pr);ee.registerLanguage("json",mr);ee.registerLanguage("yaml",gr);ee.registerLanguage("javascript",fr);ee.registerLanguage("html",vr);const it=["display: block","padding: 1rem","border: 1px solid var(--border-color)","border-radius: 8px","font-family: 'JetBrains Mono', monospace","font-size: 0.85rem","white-space: pre-wrap","line-height: 1.5","overflow-x: hidden","margin: 0.5rem 0","box-shadow: inset 0 2px 4px rgba(0,0,0,0.15)"].join("; "),st={block:`${it}; background: var(--syntax-bg); color: var(--syntax-text)`,terminal:`${it}; background: var(--surface-dark); color: var(--code-green)`};let lt=!1;function xr(){if(lt)return;lt=!0;const t=document.createElement("style");t.textContent=`

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

  `,document.head.appendChild(t)}function dt(t){t&&(xr(),t.querySelectorAll("pre").forEach(r=>{const i=r.style.color||"",a=r.style.background||"",p=(r.textContent||"").trimStart()[0],h=i.includes("code-green")||a.includes("surface-dark")||p==="❯"||p==="$";if((h?st.terminal:st.block).split(";").forEach(k=>{const[l,...I]=k.split(":");if(!l)return;const T=l.trim(),z=T.replace(/-([a-z])/g,(G,R)=>R.toUpperCase());T==="font-size"&&r.style.fontSize||T==="line-height"&&r.style.lineHeight||(r.style[z]=I.join(":").trim())}),!h){const k=r.querySelector("code")||r;k.classList.contains("hljs")||ee.highlightElement(k)}}),t.querySelectorAll("code").forEach(r=>{if(r.closest("pre"))return;const a=(r.style.background||"").includes("surface-dark");r.style.fontSize="0.85rem",r.style.fontFamily="'JetBrains Mono', monospace",r.style.lineHeight="1.5",!a&&!r.classList.contains("hljs")&&(r.style.background="var(--syntax-bg)",r.style.color="var(--syntax-text)",ee.highlightElement(r))}),t.querySelectorAll("pre").forEach(r=>{r.style.fontSize||(r.style.fontSize="0.85rem"),r.style.lineHeight||(r.style.lineHeight="1.5")}))}const kr={vite:"^7.3.1"},wr={"highlight.js":"^11.11.1",three:"^0.183.2"},ct={devDependencies:kr,dependencies:wr},Cr={id:"claude-skills-tutorial",title:"Claude Skills",category:"",tags:[""],tabs:[{label:"Overview",content:`
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

<p style="line-height:1.75;">If you find yourself explaining the same thing to Claude repeatedly, that's a skill waiting to be written.</p>

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
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/sickn33/antigravity-awesome-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">antigravity-awesome-skills</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/affaan-m/everything-claude-code" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">everything-claude-code</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/ComposioHQ/awesome-claude-skills" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">awesome-claude-skills</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/obra/superpowers" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">superpowers</a></li>
      <li style="margin-bottom: 0.25rem;"><a href="https://github.com/PleasePrompto/notebooklm-skill" target="_blank" style="color: var(--accent-primary); text-decoration: underline;">notebooklm-skill</a></li>
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
`}],interactiveType:"custom"},Sr={id:"claude-mcp",title:"Claude MCP",category:"",tags:[""],tabs:[{label:"Overview",content:`
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
`}],interactiveType:"custom"},Er={id:"claude-code-uiux-21st-dev",title:"Claude UI Stack",category:"Tutorial",tags:["Claude Code","UI/UX","21st.dev"],tabs:[{label:"Overview",content:`
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
`}],interactiveType:"custom"},Mr={id:"build-webapp-ai",title:"Build Web App with AI",category:"",tags:[""],description:`
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
`,interactiveType:"custom"},Ir={id:"ai-engineering",title:"AI Engineering",category:"",tags:[""],tabs:[{label:"Overview",content:`
<p style="margin-bottom:0.75rem; line-height:1.75;">AI Engineering refers to the process of building applications on top of foundation models.</p>
<p style="margin-bottom:1rem; line-height:1.75;">The model as a service makes it easier to leverage AI to build applications. Models are exposed via APIs that receive user queries and return model outputs.
Without these APIs, using an AI model required the infrastructure to host and serve this model. These APIs give you access to powerful models via single API calls.</p>

`},{label:"Fundamental Building Blocks",content:`

This page is currently under development. Please check back soon.

`}],interactiveType:"custom"},Tr={id:"build-app-skill-mcp",title:"Agent Skills + MCP",category:"Tutorial",tags:["Agentic","Firebase","GitHub"],tabs:[{label:"Overview",content:`
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


`}],interactiveType:"custom"},Ar={id:"claude-extension",title:"Claude Extension",category:"",tags:[],tabs:[{label:"Features",content:`
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
      `}],interactiveType:"custom"},Br={id:"claude-commands",title:"Claude Commands",description:`
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
  `,interactiveType:"custom"},_r={id:"claude-subagents",title:"Claude Subagents",tabs:[{label:"Overview",content:`
        <p style="margin-bottom:1rem; line-height:1.75;">Subagents are specialized AI assistants that handle specific types of tasks. Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions. When Claude encounters a task that matches a subagent’s description, it delegates to that subagent, which works independently and returns results.</p>
        <p style="margin-bottom:1.5rem; font-style: italic; color: var(--text-secondary); line-height:1.6;">
          Note: If you need multiple agents working in parallel and communicating with each other, see agent teams instead. Subagents work within a single session; agent teams coordinate across separate sessions.
        </p>
        <p>Claude uses each subagent’s description to decide when to delegate tasks. When you create a subagent, write a clear description so Claude knows when to use it.</p>
      `},{label:"Built-in",content:`
        <p>Claude Code includes several built-in subagents that are optimized for common engineering workflows:</p>

        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">1) Explore</strong>
          <p>A fast, read-only agent optimized for searching and analyzing codebases.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Tools:</strong> Read-only tools (no Write/Edit access)</li>
              <li><strong>Purpose:</strong> File discovery, code search, codebase exploration</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Claude delegates to Explore when it needs to search or understand a codebase without making changes. This keeps exploration results out of your main session context.</p>
          <p style="font-size: 0.9rem; font-style: italic; opacity: 0.8;">Available thoroughness levels: quick, medium, or very thorough.</p>
        </div>
        <div style="margin-top: 1.5rem;">
          <strong style="display:block; margin-bottom:0.5rem; font-size:1.1rem; color: var(--accent-primary);">2) Plan</strong>
          <p>A research-focused agent used during plan mode to gather context before presenting a plan.</p>
          <div style="padding: 0.75rem 1rem; background: var(--surface-color); border-radius: 4px; margin: 0.75rem 0;">
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Tools:</strong> Read-only tools</li>
              <li><strong>Purpose:</strong> Codebase research for planning</li>
            </ul>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.5;">Used when Claude needs to understand your codebase during a planning phase. This prevents infinite nesting (subagents cannot spawn other subagents) while still gathering necessary context.</p>
        </div>

        <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <strong style="display:block; margin-bottom:1.5rem; font-size:1.2rem; color: var(--accent-primary);">Viewing Subagents</strong>
          
          <div style="margin-bottom: 2rem;">
            <strong style="display:block; margin-bottom:0.75rem; font-size: 1rem; color: var(--text-primary);">Option 1: The <code>/agents</code> command (recommended)</strong>
            <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.75rem;">Use the <code>/agents</code> slash command inside an interactive session to browse all available subagents in a searchable menu.</p>
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
            <p style="margin-bottom: 1rem;">The general-purpose subagent handles complex file creations in isolated contexts:</p>
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
          <code style="display: block; padding: 1rem; background: var(--syntax-bg); border: 1px solid var(--border-color); border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--syntax-text); white-space: pre-wrap; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 1rem;">Use the code-improver agent to suggest improvements in this project</code>
          <p style="font-size: 0.95rem; line-height: 1.6;">Claude delegates to your new subagent, which scans the codebase and returns improvement suggestions.</p>
        </div>

        <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
          <p style="margin-bottom: 1rem; line-height: 1.6; color: var(--text-secondary);">You now have a subagent you can use in any project on your machine to analyze codebases and suggest improvements.</p>
          <p style="line-height: 1.6; color: var(--text-secondary); font-size: 0.9rem;">You can also create subagents manually as Markdown files, define them via CLI flags, or distribute them through plugins. The following sections cover all configuration options.</p>
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
            <p style="margin-bottom: 1rem; line-height: 1.6;">One of the most effective uses for subagents is isolating operations that produce large amounts of output. Running tests, fetching documentation, or processing log files can consume significant context. By delegating these to a subagent, the verbose output stays in the subagent’s context while only the relevant summary returns to your main conversation.</p>
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
      `}],interactiveType:"custom"},Pr={id:"claude-plugins",title:"Claude Plugins",category:"Tutorial",tags:["Plugins","Marketplace","Claude Code"],tabs:[{label:"Overview",content:`
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
`}],interactiveType:"custom"},me=[Ar,Br,_r,Pr,Cr,Sr,Er,Tr,Mr,Ir],b={isActive:!1,isLocked:!1,isMinimized:!1,timer:{duration:1500,remaining:1500,interval:null,isRunning:!1},stats:{streak:0,cardsToday:0,focusMinutes:0,lastStudyDate:null}},zr={activeConcept:null,resetContentScroll(){const t=document.getElementById("content-area");t&&(t.scrollTop=0);const r=document.querySelector(".tutorial-tab-content");r&&(r.scrollTop=0)},init(){this.renderSidebar(),this.setupEventListeners(),this.initTheme(),this.initStudyMode(),this.initTechStackModal();const t=window.location.hash.substring(1);t&&me.some(r=>r.id===t)?this.selectConcept(t):this.renderWelcome(),sr(document.getElementById("constellation-bg"))},renderWelcome(){document.getElementById("constellation-bg").style.display="";const t=this.getConceptOfTheDay(),r=document.getElementById("content-area");r.classList.remove("content-area--tabbed"),r.innerHTML=`
      <div class="cotd-ticker">
        <span class="cotd-label">Skill of the Day</span>
        <div class="ticker-track">
          <span class="ticker-text">${t.title}</span>
        </div>
      </div>
      <div class="welcome-card">
        <h2>Welcome to Knowledge Lab</h2>
        <p>Select a tutorial from the sidebar to begin your interactive learning journey.</p>
      </div>
    `,r.querySelector(".cotd-ticker").addEventListener("click",()=>{this.selectConcept(t.id)});const i=r.querySelector(".ticker-text"),a=r.querySelector(".ticker-track").offsetWidth;i.style.setProperty("--start-x",a+"px")},getConceptOfTheDay(){const t=Math.floor(Date.now()/864e5);return me[t%me.length]},initTheme(){localStorage.getItem("theme")==="light"&&(document.documentElement.classList.add("light-mode"),document.querySelector("#theme-toggle .icon").textContent="☀️"),localStorage.getItem("sidebar")==="collapsed"&&document.getElementById("app").classList.add("sidebar-collapsed")},renderSidebar(){const t=document.getElementById("concept-list");t.innerHTML=me.map(r=>`
      <li class="nav-item" data-id="${r.id}">${r.title}</li>
    `).join("")},isMobile(){return window.innerWidth<=640},closeMobileSidebar(){document.getElementById("app").classList.remove("sidebar-open")},setupEventListeners(){document.getElementById("concept-list").addEventListener("click",t=>{if(t.target.classList.contains("nav-item")){const r=t.target.dataset.id;this.isMobile()&&this.closeMobileSidebar(),this.selectConcept(r)}}),document.getElementById("sidebar-toggle").addEventListener("click",()=>{const t=document.getElementById("app");if(this.isMobile())t.classList.toggle("sidebar-open");else{const r=t.classList.toggle("sidebar-collapsed");localStorage.setItem("sidebar",r?"collapsed":"open")}}),document.getElementById("app").addEventListener("click",t=>{this.isMobile()&&t.target===document.getElementById("app")&&this.closeMobileSidebar()}),document.getElementById("theme-toggle").addEventListener("click",()=>{const t=document.documentElement.classList.toggle("light-mode"),r=document.querySelector("#theme-toggle .icon");r.textContent=t?"☀️":"🌙",localStorage.setItem("theme",t?"light":"dark")}),document.getElementById("home-link").addEventListener("click",()=>{this.activeConcept=null,document.querySelectorAll(".nav-item").forEach(t=>t.classList.remove("active")),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search),this.isMobile()&&this.closeMobileSidebar(),this.renderWelcome()}),document.getElementById("concept-search").addEventListener("input",t=>{const r=t.target.value.toLowerCase();document.querySelectorAll(".nav-item").forEach(a=>{const n=a.textContent.toLowerCase();a.style.display=n.includes(r)?"block":"none"})}),window.addEventListener("hashchange",()=>{const t=window.location.hash.substring(1);t&&me.some(r=>r.id===t)?(!this.activeConcept||this.activeConcept.id!==t)&&this.selectConcept(t):t||(this.activeConcept=null,document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active")),this.renderWelcome())}),window.addEventListener("message",async t=>{if(t.origin!==window.location.origin||t.data?.type!=="knowledgeLabFlowchartFullscreenToggle")return;const r=document.querySelector(".flowchart-embed");if(r)try{document.fullscreenElement===r?await document.exitFullscreen():document.fullscreenElement||await r.requestFullscreen()}catch(i){console.error("Flowchart fullscreen toggle failed:",i)}finally{r.querySelector("iframe")?.contentWindow?.postMessage({type:"knowledgeLabFlowchartFullscreenState",isFullscreen:document.fullscreenElement===r},window.location.origin)}}),document.addEventListener("fullscreenchange",()=>{const t=document.querySelector(".flowchart-embed");t?.querySelector("iframe")?.contentWindow?.postMessage({type:"knowledgeLabFlowchartFullscreenState",isFullscreen:document.fullscreenElement===t},window.location.origin)})},selectConcept(t){const r=me.find(a=>a.id===t);if(!r)return;window.location.hash!==`#${t}`&&(window.location.hash=t),document.getElementById("constellation-bg").style.display="none",this.activeConcept=r,document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active"));const i=document.querySelector(`[data-id="${t}"]`);i&&i.classList.add("active"),this.renderConcept(r),this.resetContentScroll()},renderConcept(t){const r=document.getElementById("content-area");if(t.tabs&&t.tabs.length>0){r.classList.add("content-area--tabbed");const i=t.tabs.map((n,p)=>`<button class="tutorial-tab-btn${p===0?" active":""}" data-tab="${p}">${n.label}</button>`).join(""),a=t.tabs.map((n,p)=>`<div class="tutorial-tab-panel${p===0?" active":""}" data-panel="${p}">
          <div class="concept-content" id="concept-description-${p}">
            ${n.content}
          </div>
        </div>`).join("");r.innerHTML=`
        <article class="concept-card concept-card--tabs">
          <nav class="tutorial-tabs" role="tablist">${i}</nav>
          <div class="tutorial-tab-content">${a}</div>
        </article>
      `,this.initTabs(),t.tabs.forEach((n,p)=>{const h=document.getElementById(`concept-description-${p}`);h&&(dt(h),this.attachCopyButtonsTo(h))})}else{r.classList.remove("content-area--tabbed");const i=t.description||"Add your description here...",a=i.trim().startsWith("<")?i:i.split(`

`).map(n=>`<p>${n}</p>`).join("");r.innerHTML=`
        <article class="concept-card">
          <h2 class="concept-title">${t.title}</h2>
          ${t.category||t.tags&&t.tags.length>0?`
          <div class="concept-meta">
            ${t.category?`<span class="tag">${t.category}</span>`:""}
            ${t.tags?t.tags.map(n=>`<span class="tag">${n}</span>`).join(""):""}
          </div>`:""}
          <div class="concept-content" id="concept-description">
            ${a}
          </div>
        </article>
      `,dt(document.getElementById("concept-description")),this.attachCopyButtons()}},initTabs(){const t=document.querySelectorAll(".tutorial-tab-btn"),r=document.querySelectorAll(".tutorial-tab-panel"),i=a=>{t.forEach(n=>n.classList.remove("active")),r.forEach(n=>n.classList.remove("active")),t[a].classList.add("active"),r[a].classList.add("active"),t[a].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.resetContentScroll()};t.forEach(a=>{a.addEventListener("click",()=>i(Number(a.dataset.tab)))}),document.querySelectorAll("[data-goto-tab]").forEach(a=>{a.addEventListener("click",n=>{n.preventDefault(),i(Number(a.dataset.gotoTab))})}),document.querySelectorAll("[data-goto-concept]").forEach(a=>{a.addEventListener("click",n=>{n.preventDefault(),typeof this.selectConcept=="function"&&this.selectConcept(a.dataset.gotoConcept)})})},attachCopyButtons(){const t=document.getElementById("concept-description");t&&this.attachCopyButtonsTo(t)},attachCopyButtonsTo(t){if(!t)return;const r=t.querySelectorAll("pre, code"),i=new Set;r.forEach(a=>{if(a.closest(".code-wrapper"))return;let n=null;if(a.tagName==="PRE")n=a;else{const l=a;if(!(l.style.display==="block"||l.parentNode&&l.parentNode.tagName==="PRE"||l.textContent.includes(`
`)))return;n=l.parentNode&&l.parentNode.tagName==="PRE"?l.parentNode:l}if(!n||i.has(n)||n.parentNode&&n.parentNode.classList?.contains("code-wrapper"))return;i.add(n);const p=document.createElement("div");p.className="code-wrapper",n.parentNode.insertBefore(p,n),p.appendChild(n);const h=document.createElement("button");h.className="copy-btn",h.setAttribute("title","Copy to clipboard");const C='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',k='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';h.innerHTML=C,p.appendChild(h),h.addEventListener("click",()=>{const I=n.textContent.replace(/^❯\s+/,"");navigator.clipboard.writeText(I).then(()=>{h.innerHTML=k,h.classList.add("copied"),setTimeout(()=>{h.innerHTML=C,h.classList.remove("copied")},2e3)})})})},initTechStackModal(){const t=document.getElementById("tech-stack-btn"),r=document.getElementById("tech-stack-overlay"),i=document.getElementById("close-tech-stack"),a=document.getElementById("tech-stack-list");if(!t||!r||!i||!a)return;const n={...ct.dependencies||{},...ct.devDependencies||{}},p=[{name:"Vanilla JavaScript",desc:"Core application logic, ECMAScript modules, DOM manipulation, and dynamic rendering.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M14.5 9h-5l-.5-5h7l-.5 5zm-5 4h5l-.5 4.5-2 1.5-2-1.5-.2-2h2.2l.1 1.2 1 .8 1-.8.2-1.2h-3.8z"></path></svg>'},{name:"Vanilla CSS3 & HTML5",desc:"Custom glassmorphism styling, responsive grid layout, and semantic structure.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 3 17 21 12 23 7 21 5 3"></polygon><path d="M15 9h-6l-.5-4h7.5l-.5 4zm-6 4h6l-.5 4.5-2.5 1.5-2.5-1.5-.2-2h2.2l.1 1.2 1.2.8 1.2-.8.2-1.2h-4.6z"></path></svg>'},{name:"HTML5 Canvas API",desc:"Custom performant animations including the Neural Constellation and Zen Flow backgrounds.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.268-.652-.053-.877.215-.225.542-.31 1.051-.31h2.438c2.66 0 4.853-2.192 4.853-4.853C21.5 6.756 17.244 2 12 2z"></path></svg>'}];n.vite&&p.push({name:"Vite ("+n.vite.replace(/[\^\~]/,"")+")",desc:"Next-generation frontend tooling providing ultra-fast builds and Hot Module Replacement.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'}),p.push({name:"GitHub Pages",desc:"Automated CI/CD deployment via GitHub Actions pipeline using the deployed build.",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'}),a.innerHTML=p.map(k=>`
      <li class="tech-stack-item">
        <div class="tech-stack-icon-wrapper">
          ${k.icon}
        </div>
        <div class="tech-stack-info">
          <span class="tech-stack-name">${k.name}</span>
          <span class="tech-stack-desc">${k.desc}</span>
        </div>
      </li>
    `).join("");const h=()=>{r.classList.remove("hidden"),r.offsetWidth,r.classList.add("active")},C=()=>{r.classList.remove("active"),setTimeout(()=>{r.classList.contains("active")||r.classList.add("hidden")},300)};t.addEventListener("click",h),i.addEventListener("click",C),r.addEventListener("click",k=>{k.target===r&&C()})},initStudyMode(){this.loadStudyStats(),this.updateStudyMetrics(),this.initZenFlow(),document.getElementById("study-mode-btn").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("exit-study").addEventListener("click",()=>{this.toggleStudyMode()}),document.getElementById("timer-toggle").addEventListener("click",()=>{this.toggleTimer()}),document.getElementById("timer-reset").addEventListener("click",()=>{this.resetTimer()}),document.querySelectorAll(".preset-btn").forEach(t=>{t.addEventListener("click",r=>{const i=parseInt(r.target.dataset.time);this.setTimerDuration(i)})}),document.getElementById("minimize-study").addEventListener("click",()=>{this.minimizeStudy()}),document.getElementById("expand-study").addEventListener("click",()=>{this.expandStudy()}),document.getElementById("mini-stop-btn").addEventListener("click",()=>{this.expandStudy(),this.toggleStudyMode()}),document.getElementById("lock-screen-btn").addEventListener("click",()=>{this.lockScreen()}),document.getElementById("unlock-screen-btn").addEventListener("click",()=>{this.unlockScreen()})},loadStudyStats(){const t=localStorage.getItem("studyStats");t&&(b.stats=JSON.parse(t),this.updateStreak())},saveStudyStats(){localStorage.setItem("studyStats",JSON.stringify(b.stats))},updateStreak(){const t=new Date().toDateString(),r=b.stats.lastStudyDate;if(r){const i=new Date(r),a=new Date;a.setDate(a.getDate()-1),i.toDateString()===a.toDateString()||i.toDateString()!==t&&(b.stats.streak=0)}},updateStudyMetrics(){const t=document.getElementById("study-streak"),r=document.getElementById("study-cards"),i=document.getElementById("study-minutes");t&&(t.textContent=b.stats.streak),r&&(r.textContent=b.stats.cardsToday),i&&(i.textContent=b.stats.focusMinutes)},toggleStudyMode(){b.isActive=!b.isActive;const t=document.getElementById("study-mode-overlay"),r=document.querySelector(".zen-flow-bg");if(b.isActive){if(b.isMinimized){this.expandStudy();return}t.classList.remove("hidden"),t.classList.add("active"),r.style.opacity="1",this.updateStreak(),this.saveStudyStats()}else this.expandStudy(),t.classList.remove("active"),r.style.opacity="0",this.resetTimer(),setTimeout(()=>{t.classList.add("hidden")},500)},setTimerDuration(t){b.timer.duration=t*60,b.timer.remaining=t*60,document.querySelectorAll(".preset-btn").forEach(r=>{r.classList.toggle("active",parseInt(r.dataset.time)===t)}),this.updateTimerDisplay()},toggleTimer(){b.timer.isRunning?this.pauseTimer():this.startTimer()},startTimer(){b.timer.isRunning=!0,document.getElementById("timer-toggle").textContent="Pause",document.querySelector(".timer-wrapper").classList.add("active"),document.getElementById("lock-screen-btn").classList.remove("hidden"),b.timer.interval=setInterval(()=>{b.timer.remaining--,this.updateTimerDisplay(),b.timer.remaining<=0&&this.completeTimer()},1e3)},pauseTimer(){b.timer.isRunning=!1,document.getElementById("timer-toggle").textContent="Resume",document.querySelector(".timer-wrapper").classList.remove("active"),document.getElementById("lock-screen-btn").classList.add("hidden"),clearInterval(b.timer.interval),b.isLocked&&this.unlockScreen()},resetTimer(){this.pauseTimer(),b.timer.remaining=b.timer.duration,document.getElementById("timer-toggle").textContent="Start Focus",document.getElementById("timer-status").textContent="Ready to focus",document.getElementById("lock-screen-btn").classList.add("hidden"),this.updateTimerDisplay()},completeTimer(){this.pauseTimer(),document.getElementById("timer-status").textContent="Focus complete! Great work!",b.stats.focusMinutes+=Math.floor(b.timer.duration/60),this.updateStreakDate(),this.saveStudyStats(),this.updateStudyMetrics(),"Notification"in window&&Notification.permission==="granted"&&new Notification("Focus Session Complete",{body:"Great job! Take a break.",icon:"/vite.svg"})},updateTimerDisplay(){const t=Math.floor(b.timer.remaining/60),r=b.timer.remaining%60,i=`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`;document.getElementById("timer-minutes").textContent=t.toString().padStart(2,"0"),document.getElementById("timer-seconds").textContent=r.toString().padStart(2,"0"),document.getElementById("mini-timer-display").textContent=i;const a=b.timer.remaining/b.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${a}%`;const n=b.timer.remaining/b.timer.duration,h=2*Math.PI*130*(1-n);document.getElementById("timer-progress").style.strokeDashoffset=h,b.timer.isRunning?document.getElementById("timer-status").textContent="Stay focused...":document.getElementById("timer-status").textContent="Ready to focus"},minimizeStudy(){b.isMinimized=!0;const t=document.getElementById("study-mode-overlay"),r=document.querySelector(".zen-flow-bg");t.classList.remove("active"),r.style.opacity="0",setTimeout(()=>t.classList.add("hidden"),500),document.getElementById("mini-timer").classList.remove("hidden");const i=Math.floor(b.timer.remaining/60),a=b.timer.remaining%60;document.getElementById("mini-timer-display").textContent=`${i.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`;const n=b.timer.remaining/b.timer.duration*100;document.getElementById("mini-timer-progress").style.width=`${n}%`},expandStudy(){if(b.isMinimized=!1,document.getElementById("mini-timer").classList.add("hidden"),b.isActive){const t=document.getElementById("study-mode-overlay"),r=document.querySelector(".zen-flow-bg");t.classList.remove("hidden"),t.classList.add("active"),r.style.opacity="1"}},lockScreen(){b.isLocked=!0,document.getElementById("study-mode-overlay").classList.add("study-locked"),document.getElementById("unlock-screen-overlay").classList.remove("hidden")},unlockScreen(){b.isLocked=!1,document.getElementById("study-mode-overlay").classList.remove("study-locked"),document.getElementById("unlock-screen-overlay").classList.add("hidden")},updateStreakDate(){const t=new Date().toDateString(),r=b.stats.lastStudyDate;if(r!==t){const i=new Date;i.setDate(i.getDate()-1),r===i.toDateString()?b.stats.streak++:b.stats.streak=1,b.stats.lastStudyDate=t}},initZenFlow(){const t=document.getElementById("zen-flow-canvas"),r=t.getContext("2d");let i,a,n=[];const p=()=>{i=t.width=window.innerWidth,a=t.height=window.innerHeight,h()},h=()=>{n=[];const k=30;for(let l=0;l<k;l++)n.push({x:Math.random()*i,y:Math.random()*a,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,radius:Math.random()*80+40,hue:Math.random()*60+170,alpha:Math.random()*.1+.05,pulse:Math.random()*Math.PI*2})},C=()=>{if(!b.isActive){requestAnimationFrame(C);return}r.clearRect(0,0,i,a);const k=document.documentElement.classList.contains("light-mode");if(n.forEach(l=>{l.x+=l.vx,l.y+=l.vy,l.x<-l.radius&&(l.x=i+l.radius),l.x>i+l.radius&&(l.x=-l.radius),l.y<-l.radius&&(l.y=a+l.radius),l.y>a+l.radius&&(l.y=-l.radius),l.pulse+=.02;const I=r.createRadialGradient(l.x,l.y,0,l.x,l.y,l.radius),T=l.radius*(1+Math.sin(l.pulse)*.1);k?(I.addColorStop(0,`hsla(40, 30%, 70%, ${l.alpha*.5})`),I.addColorStop(.5,`hsla(40, 20%, 80%, ${l.alpha*.2})`),I.addColorStop(1,"transparent")):(I.addColorStop(0,`hsla(${l.hue}, 70%, 50%, ${l.alpha})`),I.addColorStop(.5,`hsla(${l.hue}, 70%, 50%, ${l.alpha*.3})`),I.addColorStop(1,"transparent")),r.beginPath(),r.arc(l.x,l.y,T,0,Math.PI*2),r.fillStyle=I,r.fill()}),b.timer.isRunning){const l=Date.now()/1e3,I=150+Math.sin(l*.5)*20,T=r.createRadialGradient(i/2,a/2,0,i/2,a/2,I);k?(T.addColorStop(0,"hsla(40, 30%, 75%, 0.05)"),T.addColorStop(1,"transparent")):(T.addColorStop(0,"hsla(180, 70%, 50%, 0.03)"),T.addColorStop(1,"transparent")),r.beginPath(),r.arc(i/2,a/2,I,0,Math.PI*2),r.fillStyle=T,r.fill()}requestAnimationFrame(C)};window.addEventListener("resize",p),p(),C()}};document.addEventListener("DOMContentLoaded",()=>zr.init());
