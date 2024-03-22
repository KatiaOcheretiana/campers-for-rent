import{u as b,g as M,l as Ie,j as l,b as Re,s as F}from"./index-CfgrrXL2.js";import{F as Me,a as Pe,b as Ve,c as Ue}from"./formik.esm-vi2fSFZ-.js";const qe=b.div`
  width: 430px;
`,Ze=b.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,_=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${M.blockFeatures};

  & p {
    font-weight: 500;
    line-height: 1.25;
  }

  & svg {
    width: 20px;
    height: 20px;
    fill: #101828;
    stroke-width: 1.5px;
  }
`,Le=b.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  position: relative;
  margin-bottom: 48px;
  margin-top: 44px;

  &::after {
    position: absolute;
    content: '';
    background-color: rgba(16, 24, 40, 0.2);
    height: 1px;
    width: 100%;
    bottom: -24px;
    left: 0;
  }
`,Be=b.table`
  width: 100%;
`,z=b.tr`
  display: flex;
  justify-content: space-between;
`,w=b.td`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  &:first-letter {
    text-transform: uppercase;
  }

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;function C(s){this._maxSize=s,this.clear()}C.prototype.clear=function(){this._size=0,this._values=Object.create(null)};C.prototype.get=function(s){return this._values[s]};C.prototype.set=function(s,e){return this._size>=this._maxSize&&this.clear(),s in this._values||this._size++,this._values[s]=e};var Ge=/[^.^\]^[]+|(?=\[\]|\.\.)/g,$e=/^\d+$/,Ye=/^\d/,He=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Xe=/^\s*(['"]?)(.*?)(\1)\s*$/,ae=512,ge=new C(ae),be=new C(ae),ye=new C(ae),A={Cache:C,split:te,normalizePath:W,setter:function(s){var e=W(s);return be.get(s)||be.set(s,function(r,n){for(var i=0,a=e.length,u=r;i<a-1;){var o=e[i];if(o==="__proto__"||o==="constructor"||o==="prototype")return r;u=u[e[i++]]}u[e[i]]=n})},getter:function(s,e){var t=W(s);return ye.get(s)||ye.set(s,function(n){for(var i=0,a=t.length;i<a;)if(n!=null||!e)n=n[t[i++]];else return;return n})},join:function(s){return s.reduce(function(e,t){return e+(le(t)||$e.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(s,e,t){Ke(Array.isArray(s)?s:te(s),e,t)}};function W(s){return ge.get(s)||ge.set(s,te(s).map(function(e){return e.replace(Xe,"$2")}))}function te(s){return s.match(Ge)||[""]}function Ke(s,e,t){var r=s.length,n,i,a,u;for(i=0;i<r;i++)n=s[i],n&&(Qe(n)&&(n='"'+n+'"'),u=le(n),a=!u&&/^\d+$/.test(n),e.call(t,n,u,a,i,s))}function le(s){return typeof s=="string"&&s&&["'",'"'].indexOf(s.charAt(0))!==-1}function We(s){return s.match(Ye)&&!s.match($e)}function Je(s){return He.test(s)}function Qe(s){return!le(s)&&(We(s)||Je(s))}const et=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,G=s=>s.match(et)||[],Y=s=>s[0].toUpperCase()+s.slice(1),ue=(s,e)=>G(s).join(e).toLowerCase(),je=s=>G(s).reduce((e,t)=>`${e}${e?t[0].toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()}`,""),tt=s=>Y(je(s)),rt=s=>ue(s,"_"),st=s=>ue(s,"-"),nt=s=>Y(ue(s," ")),it=s=>G(s).map(Y).join(" ");var J={words:G,upperFirst:Y,camelCase:je,pascalCase:tt,snakeCase:rt,kebabCase:st,sentenceCase:nt,titleCase:it},oe={exports:{}};oe.exports=function(s){return Ee(at(s),s)};oe.exports.array=Ee;function Ee(s,e){var t=s.length,r=new Array(t),n={},i=t,a=lt(e),u=ut(s);for(e.forEach(function(c){if(!u.has(c[0])||!u.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)n[i]||o(s[i],i,new Set);return r;function o(c,f,d){if(d.has(c)){var h;try{h=", node was:"+JSON.stringify(c)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!u.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!n[f]){n[f]=!0;var m=a.get(c)||new Set;if(m=Array.from(m),f=m.length){d.add(c);do{var v=m[--f];o(v,u.get(v),d)}while(f);d.delete(c)}r[--t]=c}}}function at(s){for(var e=new Set,t=0,r=s.length;t<r;t++){var n=s[t];e.add(n[0]),e.add(n[1])}return Array.from(e)}function lt(s){for(var e=new Map,t=0,r=s.length;t<r;t++){var n=s[t];e.has(n[0])||e.set(n[0],new Set),e.has(n[1])||e.set(n[1],new Set),e.get(n[0]).add(n[1])}return e}function ut(s){for(var e=new Map,t=0,r=s.length;t<r;t++)e.set(s[t],t);return e}var ot=oe.exports;const ct=Ie(ot),ft=Object.prototype.toString,dt=Error.prototype.toString,ht=RegExp.prototype.toString,pt=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",mt=/^Symbol\((.*)\)(.*)$/;function xt(s){return s!=+s?"NaN":s===0&&1/s<0?"-0":""+s}function we(s,e=!1){if(s==null||s===!0||s===!1)return""+s;const t=typeof s;if(t==="number")return xt(s);if(t==="string")return e?`"${s}"`:s;if(t==="function")return"[Function "+(s.name||"anonymous")+"]";if(t==="symbol")return pt.call(s).replace(mt,"Symbol($1)");const r=ft.call(s).slice(8,-1);return r==="Date"?isNaN(s.getTime())?""+s:s.toISOString(s):r==="Error"||s instanceof Error?"["+dt.call(s)+"]":r==="RegExp"?ht.call(s):null}function S(s,e){let t=we(s,e);return t!==null?t:JSON.stringify(s,function(r,n){let i=we(this[r],e);return i!==null?i:n},2)}function ke(s){return s==null?[]:[].concat(s)}let Se,Oe,Te,gt=/\$\{\s*(\w+)\s*\}/g;Se=Symbol.toStringTag;class ve{constructor(e,t,r,n){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Se]="Error",this.name="ValidationError",this.value=t,this.path=r,this.type=n,this.errors=[],this.inner=[],ke(e).forEach(i=>{if(g.isError(i)){this.errors.push(...i.errors);const a=i.inner.length?i.inner:[i];this.inner.push(...a)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Oe=Symbol.hasInstance;Te=Symbol.toStringTag;class g extends Error{static formatError(e,t){const r=t.label||t.path||"this";return r!==t.path&&(t=Object.assign({},t,{path:r})),typeof e=="string"?e.replace(gt,(n,i)=>S(t[i])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,r,n,i){const a=new ve(e,t,r,n);if(i)return a;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Te]="Error",this.name=a.name,this.message=a.message,this.type=a.type,this.value=a.value,this.path=a.path,this.errors=a.errors,this.inner=a.inner,Error.captureStackTrace&&Error.captureStackTrace(this,g)}static[Oe](e){return ve[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let $={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:s,type:e,value:t,originalValue:r})=>{const n=r!=null&&r!==t?` (cast from the value \`${S(r,!0)}\`).`:".";return e!=="mixed"?`${s} must be a \`${e}\` type, but the final value was: \`${S(t,!0)}\``+n:`${s} must match the configured type. The validated value was: \`${S(t,!0)}\``+n}},x={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},bt={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},re={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},yt={isValue:"${path} field must be ${value}"},se={noUnknown:"${path} field has unspecified keys: ${unknown}"},wt={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},vt={notType:s=>{const{path:e,value:t,spec:r}=s,n=r.types.length;if(Array.isArray(t)){if(t.length<n)return`${e} tuple value has too few items, expected a length of ${n} but got ${t.length} for value: \`${S(t,!0)}\``;if(t.length>n)return`${e} tuple value has too many items, expected a length of ${n} but got ${t.length} for value: \`${S(t,!0)}\``}return g.formatError($.notType,s)}};Object.assign(Object.create(null),{mixed:$,string:x,number:bt,date:re,object:se,array:wt,boolean:yt,tuple:vt});const ce=s=>s&&s.__isYupSchema__;class L{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:n,otherwise:i}=t,a=typeof r=="function"?r:(...u)=>u.every(o=>o===r);return new L(e,(u,o)=>{var c;let f=a(...u)?n:i;return(c=f==null?void 0:f(o))!=null?c:o})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let r=this.refs.map(i=>i.getValue(t==null?void 0:t.value,t==null?void 0:t.parent,t==null?void 0:t.context)),n=this.fn(r,e,t);if(n===void 0||n===e)return e;if(!ce(n))throw new TypeError("conditions must return a schema object");return n.resolve(t)}}const q={context:"$",value:"."};class N{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===q.context,this.isValue=this.key[0]===q.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?q.context:this.isValue?q.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&A.getter(this.path,!0),this.map=t.map}getValue(e,t,r){let n=this.isContext?r:this.isValue?e:t;return this.getter&&(n=this.getter(n||{})),this.map&&(n=this.map(n)),n}cast(e,t){return this.getValue(e,t==null?void 0:t.parent,t==null?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}N.prototype.__isYupRef=!0;const D=s=>s==null;function I(s){function e({value:t,path:r="",options:n,originalValue:i,schema:a},u,o){const{name:c,test:f,params:d,message:h,skipAbsent:m}=s;let{parent:v,context:y,abortEarly:k=a.spec.abortEarly,disableStackTrace:V=a.spec.disableStackTrace}=n;function O(p){return N.isRef(p)?p.getValue(t,v,y):p}function de(p={}){const T=Object.assign({value:t,originalValue:i,label:a.spec.label,path:p.path||r,spec:a.spec,disableStackTrace:p.disableStackTrace||V},d,p.params);for(const xe of Object.keys(T))T[xe]=O(T[xe]);const me=new g(g.formatError(p.message||h,T),t,T.path,p.type||c,T.disableStackTrace);return me.params=T,me}const H=k?u:o;let X={path:r,parent:v,type:c,from:n.from,createError:de,resolve:O,options:n,originalValue:i,schema:a};const K=p=>{g.isError(p)?H(p):p?o(null):H(de())},he=p=>{g.isError(p)?H(p):u(p)};if(m&&D(t))return K(!0);let U;try{var pe;if(U=f.call(X,t,X),typeof((pe=U)==null?void 0:pe.then)=="function"){if(n.sync)throw new Error(`Validation test of type: "${X.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(U).then(K,he)}}catch(p){he(p);return}K(U)}return e.OPTIONS=s,e}function Ft(s,e,t,r=t){let n,i,a;return e?(A.forEach(e,(u,o,c)=>{let f=o?u.slice(1,u.length-1):u;s=s.resolve({context:r,parent:n,value:t});let d=s.type==="tuple",h=c?parseInt(f,10):0;if(s.innerType||d){if(d&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(t&&h>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);n=t,t=t&&t[h],s=d?s.spec.types[h]:s.innerType}if(!c){if(!s.fields||!s.fields[f])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${s.type}")`);n=t,t=t&&t[f],s=s.fields[f]}i=f,a=o?"["+u+"]":"."+u}),{schema:s,parent:n,parentPath:i}):{parent:n,parentPath:e,schema:s}}class B extends Set{describe(){const e=[];for(const t of this.values())e.push(N.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const r of this.values())t.push(e(r));return t}clone(){return new B(this.values())}merge(e,t){const r=this.clone();return e.forEach(n=>r.add(n)),t.forEach(n=>r.delete(n)),r}}function R(s,e=new Map){if(ce(s)||!s||typeof s!="object")return s;if(e.has(s))return e.get(s);let t;if(s instanceof Date)t=new Date(s.getTime()),e.set(s,t);else if(s instanceof RegExp)t=new RegExp(s),e.set(s,t);else if(Array.isArray(s)){t=new Array(s.length),e.set(s,t);for(let r=0;r<s.length;r++)t[r]=R(s[r],e)}else if(s instanceof Map){t=new Map,e.set(s,t);for(const[r,n]of s.entries())t.set(r,R(n,e))}else if(s instanceof Set){t=new Set,e.set(s,t);for(const r of s)t.add(R(r,e))}else if(s instanceof Object){t={},e.set(s,t);for(const[r,n]of Object.entries(s))t[r]=R(n,e)}else throw Error(`Unable to clone ${s}`);return t}class j{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new B,this._blacklist=new B,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError($.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=R(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=t,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,r=e.clone();const n=Object.assign({},t.spec,r.spec);return r.spec=n,r.internalTests=Object.assign({},t.internalTests,r.internalTests),r._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),r.tests=t.tests,r.exclusiveTests=t.exclusiveTests,r.withMutation(i=>{e.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...t.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let r=t.conditions;t=t.clone(),t.conditions=[],t=r.reduce((n,i)=>i.resolve(n,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,r,n,i;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(n=e.recursive)!=null?n:this.spec.recursive,disableStackTrace:(i=e.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(e,t={}){let r=this.resolve(Object.assign({value:e},t)),n=t.assert==="ignore-optionality",i=r._cast(e,t);if(t.assert!==!1&&!r.isType(i)){if(n&&D(i))return i;let a=S(e),u=S(i);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(u!==a?`result of cast: ${u}`:""))}return i}_cast(e,t){let r=e===void 0?e:this.transforms.reduce((n,i)=>i.call(this,n,e,this),e);return r===void 0&&(r=this.getDefault(t)),r}_validate(e,t={},r,n){let{path:i,originalValue:a=e,strict:u=this.spec.strict}=t,o=e;u||(o=this._cast(o,Object.assign({assert:!1},t)));let c=[];for(let f of Object.values(this.internalTests))f&&c.push(f);this.runTests({path:i,value:o,originalValue:a,options:t,tests:c},r,f=>{if(f.length)return n(f,o);this.runTests({path:i,value:o,originalValue:a,options:t,tests:this.tests},r,n)})}runTests(e,t,r){let n=!1,{tests:i,value:a,originalValue:u,path:o,options:c}=e,f=y=>{n||(n=!0,t(y,a))},d=y=>{n||(n=!0,r(y,a))},h=i.length,m=[];if(!h)return d([]);let v={value:a,originalValue:u,path:o,options:c,schema:this};for(let y=0;y<i.length;y++){const k=i[y];k(v,f,function(O){O&&(Array.isArray(O)?m.push(...O):m.push(O)),--h<=0&&d(m)})}}asNestedTest({key:e,index:t,parent:r,parentPath:n,originalParent:i,options:a}){const u=e??t;if(u==null)throw TypeError("Must include `key` or `index` for nested validations");const o=typeof u=="number";let c=r[u];const f=Object.assign({},a,{strict:!0,parent:r,value:c,originalValue:i[u],key:void 0,[o?"index":"key"]:u,path:o||u.includes(".")?`${n||""}[${o?u:`"${u}"`}]`:(n?`${n}.`:"")+e});return(d,h,m)=>this.resolve(f)._validate(c,f,h,m)}validate(e,t){var r;let n=this.resolve(Object.assign({},t,{value:e})),i=(r=t==null?void 0:t.disableStackTrace)!=null?r:n.spec.disableStackTrace;return new Promise((a,u)=>n._validate(e,t,(o,c)=>{g.isError(o)&&(o.value=c),u(o)},(o,c)=>{o.length?u(new g(o,c,void 0,void 0,i)):a(c)}))}validateSync(e,t){var r;let n=this.resolve(Object.assign({},t,{value:e})),i,a=(r=t==null?void 0:t.disableStackTrace)!=null?r:n.spec.disableStackTrace;return n._validate(e,Object.assign({},t,{sync:!0}),(u,o)=>{throw g.isError(u)&&(u.value=o),u},(u,o)=>{if(u.length)throw new g(u,e,void 0,void 0,a);i=o}),i}isValid(e,t){return this.validate(e,t).then(()=>!0,r=>{if(g.isError(r))return!1;throw r})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(r){if(g.isError(r))return!1;throw r}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):R(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const r=this.clone({nullable:e});return r.internalTests.nullable=I({message:t,name:"nullable",test(n){return n===null?this.schema.spec.nullable:!0}}),r}optionality(e,t){const r=this.clone({optional:e});return r.internalTests.optionality=I({message:t,name:"optionality",test(n){return n===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=$.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=$.notNull){return this.nullability(!1,e)}required(e=$.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=$.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),n=I(t),i=t.exclusive||t.name&&r.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(r.exclusiveTests[t.name]=!!t.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===t.name&&(i||a.OPTIONS.test===n.OPTIONS.test))),r.tests.push(n),r}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let r=this.clone(),n=ke(e).map(i=>new N(i));return n.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof t=="function"?new L(n,t):L.fromOptions(n,t)),r}typeError(e){let t=this.clone();return t.internalTests.typeError=I({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=$.oneOf){let r=this.clone();return e.forEach(n=>{r._whitelist.add(n),r._blacklist.delete(n)}),r.internalTests.whiteList=I({message:t,name:"oneOf",skipAbsent:!0,test(n){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(n)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(e,t=$.notOneOf){let r=this.clone();return e.forEach(n=>{r._blacklist.add(n),r._whitelist.delete(n)}),r.internalTests.blacklist=I({message:t,name:"notOneOf",test(n){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(n)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:r,meta:n,optional:i,nullable:a}=t.spec;return{meta:n,label:r,optional:i,nullable:a,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(o=>({name:o.OPTIONS.name,params:o.OPTIONS.params})).filter((o,c,f)=>f.findIndex(d=>d.name===o.name)===c)}}}j.prototype.__isYupSchema__=!0;for(const s of["validate","validateSync"])j.prototype[`${s}At`]=function(e,t,r={}){const{parent:n,parentPath:i,schema:a}=Ft(this,e,t,r.context);return a[s](n&&n[i],Object.assign({},r,{parent:n,path:e}))};for(const s of["equals","is"])j.prototype[s]=j.prototype.oneOf;for(const s of["not","nope"])j.prototype[s]=j.prototype.notOneOf;const _t=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function $t(s){const e=ne(s);if(!e)return Date.parse?Date.parse(s):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let t=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(t=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(t=0-t)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+t,e.second,e.millisecond)}function ne(s){var e,t;const r=_t.exec(s);return r?{year:E(r[1]),month:E(r[2],1)-1,day:E(r[3],1),hour:E(r[4]),minute:E(r[5]),second:E(r[6]),millisecond:r[7]?E(r[7].substring(0,3)):0,precision:(e=(t=r[7])==null?void 0:t.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:E(r[10]),minuteOffset:E(r[11])}:null}function E(s,e=0){return Number(s)||e}let jt=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Et=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,kt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,St="^\\d{4}-\\d{2}-\\d{2}",Ot="\\d{2}:\\d{2}:\\d{2}",Tt="(([+-]\\d{2}(:?\\d{2})?)|Z)",Dt=new RegExp(`${St}T${Ot}(\\.\\d+)?${Tt}$`),At=s=>D(s)||s===s.trim(),Ct={}.toString();function ie(){return new De}class De extends j{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,t,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const n=e!=null&&e.toString?e.toString():e;return n===Ct?e:n})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||$.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(t=>t.OPTIONS.name!=="required"),e))}length(e,t=x.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,t=x.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,t=x.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,t){let r=!1,n,i;return t&&(typeof t=="object"?{excludeEmptyString:r=!1,message:n,name:i}=t:n=t),this.test({name:i||"matches",message:n||x.matches,params:{regex:e},skipAbsent:!0,test:a=>a===""&&r||a.search(e)!==-1})}email(e=x.email){return this.matches(jt,{name:"email",message:e,excludeEmptyString:!0})}url(e=x.url){return this.matches(Et,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=x.uuid){return this.matches(kt,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t="",r,n;return e&&(typeof e=="object"?{message:t="",allowOffset:r=!1,precision:n=void 0}=e:t=e),this.matches(Dt,{name:"datetime",message:t||x.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:t||x.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:i=>{if(!i||r)return!0;const a=ne(i);return a?!!a.z:!1}}).test({name:"datetime_precision",message:t||x.datetime_precision,params:{precision:n},skipAbsent:!0,test:i=>{if(!i||n==null)return!0;const a=ne(i);return a?a.precision===n:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=x.trim){return this.transform(t=>t!=null?t.trim():t).test({message:e,name:"trim",test:At})}lowercase(e=x.lowercase){return this.transform(t=>D(t)?t:t.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>D(t)||t===t.toLowerCase()})}uppercase(e=x.uppercase){return this.transform(t=>D(t)?t:t.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>D(t)||t===t.toUpperCase()})}}ie.prototype=De.prototype;let Ae=new Date(""),Nt=s=>Object.prototype.toString.call(s)==="[object Date]";function fe(){return new P}class P extends j{constructor(){super({type:"date",check(e){return Nt(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=$t(e),isNaN(e)?P.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let r;if(N.isRef(e))r=e;else{let n=this.cast(e);if(!this._typeCheck(n))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);r=n}return r}min(e,t=re.min){let r=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(n){return n>=this.resolve(r)}})}max(e,t=re.max){let r=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(n){return n<=this.resolve(r)}})}}P.INVALID_DATE=Ae;fe.prototype=P.prototype;fe.INVALID_DATE=Ae;function zt(s,e=[]){let t=[],r=new Set,n=new Set(e.map(([a,u])=>`${a}-${u}`));function i(a,u){let o=A.split(a)[0];r.add(o),n.has(`${u}-${o}`)||t.push([u,o])}for(const a of Object.keys(s)){let u=s[a];r.add(a),N.isRef(u)&&u.isSibling?i(u.path,a):ce(u)&&"deps"in u&&u.deps.forEach(o=>i(o,a))}return ct.array(Array.from(r),t).reverse()}function Fe(s,e){let t=1/0;return s.some((r,n)=>{var i;if((i=e.path)!=null&&i.includes(r))return t=n,!0}),t}function Ce(s){return(e,t)=>Fe(s,e)-Fe(s,t)}const It=(s,e,t)=>{if(typeof s!="string")return s;let r=s;try{r=JSON.parse(s)}catch{}return t.isType(r)?r:s};function Z(s){if("fields"in s){const e={};for(const[t,r]of Object.entries(s.fields))e[t]=Z(r);return s.setFields(e)}if(s.type==="array"){const e=s.optional();return e.innerType&&(e.innerType=Z(e.innerType)),e}return s.type==="tuple"?s.optional().clone({types:s.spec.types.map(Z)}):"optional"in s?s.optional():s}const Rt=(s,e)=>{const t=[...A.normalizePath(e)];if(t.length===1)return t[0]in s;let r=t.pop(),n=A.getter(A.join(t),!0)(s);return!!(n&&r in n)};let _e=s=>Object.prototype.toString.call(s)==="[object Object]";function Mt(s,e){let t=Object.keys(s.fields);return Object.keys(e).filter(r=>t.indexOf(r)===-1)}const Pt=Ce([]);function Ne(s){return new ze(s)}class ze extends j{constructor(e){super({type:"object",check(t){return _e(t)||typeof t=="function"}}),this.fields=Object.create(null),this._sortErrors=Pt,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var r;let n=super._cast(e,t);if(n===void 0)return this.getDefault(t);if(!this._typeCheck(n))return n;let i=this.fields,a=(r=t.stripUnknown)!=null?r:this.spec.noUnknown,u=[].concat(this._nodes,Object.keys(n).filter(d=>!this._nodes.includes(d))),o={},c=Object.assign({},t,{parent:o,__validating:t.__validating||!1}),f=!1;for(const d of u){let h=i[d],m=d in n;if(h){let v,y=n[d];c.path=(t.path?`${t.path}.`:"")+d,h=h.resolve({value:y,context:t.context,parent:o});let k=h instanceof j?h.spec:void 0,V=k==null?void 0:k.strict;if(k!=null&&k.strip){f=f||d in n;continue}v=!t.__validating||!V?h.cast(n[d],c):n[d],v!==void 0&&(o[d]=v)}else m&&!a&&(o[d]=n[d]);(m!==d in o||o[d]!==n[d])&&(f=!0)}return f?o:n}_validate(e,t={},r,n){let{from:i=[],originalValue:a=e,recursive:u=this.spec.recursive}=t;t.from=[{schema:this,value:a},...i],t.__validating=!0,t.originalValue=a,super._validate(e,t,r,(o,c)=>{if(!u||!_e(c)){n(o,c);return}a=a||c;let f=[];for(let d of this._nodes){let h=this.fields[d];!h||N.isRef(h)||f.push(h.asNestedTest({options:t,key:d,parent:c,parentPath:t.path,originalParent:a}))}this.runTests({tests:f,value:c,originalValue:a,options:t},r,d=>{n(d.sort(this._sortErrors).concat(o),c)})})}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),r=t.fields;for(let[n,i]of Object.entries(this.fields)){const a=r[n];r[n]=a===void 0?i:a}return t.withMutation(n=>n.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(r=>{var n;const i=this.fields[r];let a=e;(n=a)!=null&&n.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),t[r]=i&&"getDefault"in i?i.getDefault(a):void 0}),t}setFields(e,t){let r=this.clone();return r.fields=e,r._nodes=zt(e,t),r._sortErrors=Ce(Object.keys(e)),t&&(r._excludedEdges=t),r}shape(e,t=[]){return this.clone().withMutation(r=>{let n=r._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),n=[...r._excludedEdges,...t]),r.setFields(Object.assign(r.fields,e),n)})}partial(){const e={};for(const[t,r]of Object.entries(this.fields))e[t]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Z(this)}pick(e){const t={};for(const r of e)this.fields[r]&&(t[r]=this.fields[r]);return this.setFields(t,this._excludedEdges.filter(([r,n])=>e.includes(r)&&e.includes(n)))}omit(e){const t=[];for(const r of Object.keys(this.fields))e.includes(r)||t.push(r);return this.pick(t)}from(e,t,r){let n=A.getter(e,!0);return this.transform(i=>{if(!i)return i;let a=i;return Rt(i,e)&&(a=Object.assign({},i),r||delete a[e],a[t]=n(i)),a})}json(){return this.transform(It)}noUnknown(e=!0,t=se.noUnknown){typeof e!="boolean"&&(t=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:t,test(n){if(n==null)return!0;const i=Mt(this.schema,n);return!e||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,t=se.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;const r={};for(const n of Object.keys(t))r[e(n)]=t[n];return r})}camelCase(){return this.transformKeys(J.camelCase)}snakeCase(){return this.transformKeys(J.snakeCase)}constantCase(){return this.transformKeys(e=>J.snakeCase(e).toUpperCase())}describe(e){const t=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[i,a]of Object.entries(t.fields)){var n;let u=e;(n=u)!=null&&n.value&&(u=Object.assign({},u,{parent:u.value,value:u.value[i]})),r.fields[i]=a.describe(u)}return r}}Ne.prototype=ze.prototype;const Vt=Ne().shape({name:ie().required("Name is required"),email:ie().email("Invalid email address").required("Required"),bookingDate:fe().required("Please choose date")}),Ut=b.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
`,qt=b.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 8px;
`,Zt=b.p`
  color: ${M.lightText};
  margin-bottom: 24px;
`,Q=b(Me)`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 56px;
  background-color: ${M.inputs};
  border: none;
`,ee=b.div`
  width: 160px;
  font-size: 10px;
  line-height: 1.2;
  color: ${M.btn};
`,Lt=b.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`,Bt=b.textarea`
  border-radius: 10px;
  padding: 18px;
  width: 400px;
  height: 114px;
  background-color: ${M.inputs};
  border: none;
  resize: none;
`,Gt=()=>{const s={name:"",email:"",bookingDate:"",comment:""};return l.jsx(l.Fragment,{children:l.jsxs(Ut,{children:[l.jsx(qt,{children:"Book your campervan now"}),l.jsx(Zt,{children:"Stay connected! We are always ready to help you."}),l.jsx(Pe,{initialValues:s,validationSchema:Vt,onSubmit:e=>{console.log(e)},enableReinitialize:!0,children:({errors:e,touched:t})=>l.jsxs(Ve,{children:[l.jsxs(Lt,{children:[l.jsxs("label",{children:[l.jsx(Q,{name:"name",type:"text",autoComplete:"off",placeholder:"Name"}),e.name&&t.name&&l.jsx(ee,{children:e.name})]}),l.jsxs("label",{children:[l.jsx(Q,{style:{color:" rgba(239, 237, 232, 0.6)"},name:"email",type:"text",autoComplete:"off",placeholder:"Email"}),e.email&&t.email&&l.jsx(ee,{children:e.email})]}),l.jsxs("label",{children:[l.jsx(Q,{style:{color:" rgba(239, 237, 232, 0.6)"},name:"bookingDate",type:"text",autoComplete:"off",placeholder:"Booking date"}),e.email&&t.email&&l.jsx(ee,{children:e.email})]}),l.jsx(Bt,{name:"comment",placeholder:"Comment"})]}),l.jsx("button",{type:"submit",children:"Save"})]})})]})})},Kt=()=>{const s=Re(Ue),{adults:e,engine:t,transmission:r,form:n,length:i,width:a,height:u,tank:o,consumption:c,details:f}=s;return l.jsxs(qe,{children:[l.jsxs(Ze,{children:[e&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-adults"})}),l.jsxs("p",{children:[" ",e," adults"]})]}),r&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-automatic",style:{stroke:"#101828",fill:"transparent"}})}),l.jsxs("p",{children:[" ",r]})]}),f.airConditioner>=1&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-ac",style:{fill:"#101828"}})}),l.jsx("p",{children:" AC"})]}),t&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-petrol"})}),l.jsxs("p",{children:[" ",t]})]}),f.kitchen>=1&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-kitchen",style:{stroke:"#101828",fill:"transparent"}})}),l.jsx("p",{children:" kitchen "})]}),f.beds>=1&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-beds",style:{stroke:"#101828",fill:"transparent"}})}),l.jsxs("p",{children:[" ",f.beds," beds"]})]}),f.airConditioner>=1&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-air-conditioner",style:{stroke:"#101828",fill:"transparent"}})}),l.jsxs("p",{children:[" ",f.airConditioner," air conditioner"]})]}),f.CD>=1&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-cd",style:{stroke:"#101828",fill:"transparent"}})}),l.jsx("p",{children:" CD"})]}),f.radio>=1&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-radio",style:{stroke:"#101828",fill:"transparent"}})}),l.jsx("p",{children:" Radio"})]}),f.hob>=1&&l.jsxs(_,{children:[l.jsx("svg",{children:l.jsx("use",{href:F+"#icon-hob",style:{stroke:"#101828",fill:"transparent"}})}),l.jsxs("p",{children:[f.hob," hob "]})]})]}),l.jsxs("div",{children:[l.jsx(Le,{children:"Vehicle details"}),l.jsx(Be,{children:l.jsxs("tbody",{children:[l.jsxs(z,{children:[l.jsx(w,{children:"Form"}),l.jsx(w,{children:n})]}),l.jsxs(z,{children:[l.jsx(w,{children:"Length"}),l.jsx(w,{children:i})]}),l.jsxs(z,{children:[l.jsx(w,{children:"Width"}),l.jsx(w,{children:a})]}),l.jsxs(z,{children:[l.jsx(w,{children:"Height"}),l.jsx(w,{children:u})]}),l.jsxs(z,{children:[l.jsx(w,{children:"Tank"}),l.jsx(w,{children:o})]}),l.jsxs(z,{children:[l.jsx(w,{children:"Consumption"}),l.jsx(w,{children:c})]})]})})]}),l.jsx(Gt,{})]})};export{Kt as default};
