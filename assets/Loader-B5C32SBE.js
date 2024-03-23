import{f as S,u as s,g as x,r as u,b as T,a as B,j as e,s as h,h as F,i as M,k as N,l as R,m as b}from"./index-CnGBeGjU.js";import{b as _}from"./selectors-CbC4wo0s.js";import E from"./ModalWindow-BC2XraoX.js";const z=t=>t.favorites.favoritesCampers,O=t=>t.filter.location,P=t=>t.filter.equipment,D=t=>t.filter.type,je=S([_,O,P,D],(t,n,i,r)=>{const o=n.toLowerCase().trim().split(",").map(d=>d.trim()),[p,a]=o;let l=t;return i&&(l=l.filter(d=>d.details&&(d.details[i]||d.details[i]===void 0))),r&&(l=l.filter(d=>d.form===r)),l.filter(d=>{const[m,f]=d.location.toLowerCase().split(", ");return(!p||f.includes(p))&&(!a||m.includes(a))})}),W=s.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`,A=s.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`,U=s.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;

  width: 339px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,Y=s.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,q=s.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`,H=s.div`
  display: flex;
  justify-content: space-between;
`,J=s.svg`
  width: 16px;
  height: 16px;
  fill: ${x.rating};
`,K=s.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,V=s.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: ${x.darkText};
`,G=s.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,Q=s.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
`,X=s.p`
  color: ${x.lightText};
  width: 525px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`,Z=s.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 526px;
  margin-bottom: 24px;
`,g=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${x.blockFeatures};

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
`,ee=s.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  background-color: ${x.btn};
  border-radius: 200px;
  padding: 16px 40px;
  border: none;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${x.btnHover};
  }
`,te=s.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 28px;
  border: none;
  background: none;
  padding: 0;
`,se=s.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${x.darkText};
  stroke-width: 2.3px;
  transform: translateY(-50%);
  top: 50%;
  left: 11%;
`,ie=s.use`
  width: 24px;
  height: 24px;
`,ne=({item:t})=>{const[n,i]=u.useState(!1),r=T(),o=B(z);u.useEffect(()=>{i(o.includes(t._id))},[t._id,o]);const p=()=>{const a=n?o.filter(l=>l!==t._id):[...new Set([...o,t._id])];localStorage.setItem(F,JSON.stringify(a)),r(n?M(t._id):N(t._id)),i(!n)};return e.jsx(te,{onClick:p,children:e.jsx(se,{children:e.jsx(ie,{href:h+"#icon-like",style:{fill:n?"#E44848":"transparent",stroke:n?"#E44848":"#101828"}})})})},re=({camper:t,pathForModal:n})=>{const{_id:i,name:r,price:o,rating:p,location:a,adults:l,engine:j,transmission:d,description:m,details:f,gallery:v,reviews:w}=t,$=R(),[k,y]=u.useState(!1),C=()=>{y(!0),document.body.style.overflow="hidden";const I=`/${n}/${i}`;$(I)},L=()=>{y(!1),document.body.style.overflow="visible"};return e.jsxs(e.Fragment,{children:[e.jsxs(W,{children:[e.jsx(A,{src:v[0],alt:r,width:290,height:310}),e.jsxs("div",{children:[e.jsxs(H,{children:[e.jsx(U,{children:r}),e.jsxs(q,{children:[e.jsxs(Y,{children:["€",o.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,"")]}),e.jsx(ne,{item:t})]})]}),e.jsxs(Q,{children:[e.jsxs(K,{children:[e.jsx(J,{children:e.jsx("use",{href:h+"#icon-star"})}),p," (",w.length," Reviews)"]}),e.jsxs(G,{children:[e.jsx(V,{children:e.jsx("use",{href:h+"#icon-location"})}),a.split(", ").reverse().join(", ")]})]}),e.jsx(X,{children:m}),e.jsxs(Z,{children:[e.jsxs(g,{children:[e.jsx("svg",{children:e.jsx("use",{href:h+"#icon-adults"})}),e.jsxs("p",{children:[" ",l," adults"]})]}),e.jsxs(g,{children:[e.jsx("svg",{children:e.jsx("use",{href:h+"#icon-automatic",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",d]})]}),e.jsxs(g,{children:[e.jsx("svg",{children:e.jsx("use",{href:h+"#icon-petrol"})}),e.jsxs("p",{children:[" ",j]})]}),f.kitchen>=1&&e.jsxs(g,{children:[e.jsx("svg",{children:e.jsx("use",{href:h+"#icon-kitchen",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:" kitchen "})]}),f.beds>=1&&e.jsxs(g,{children:[e.jsx("svg",{children:e.jsx("use",{href:h+"#icon-beds",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",f.beds," beds"]})]}),f.airConditioner>=1&&e.jsxs(g,{children:[e.jsx("svg",{children:e.jsx("use",{href:h+"#icon-ac",style:{fill:"#101828"}})}),e.jsx("p",{children:" AC"})]})]}),e.jsx(ee,{type:"submit",onClick:()=>C(),children:"Show more"})]})]},i),k&&e.jsx(E,{camperInfo:t,isOpen:k,onRequestClose:L,pathForModal:n})]})},oe=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  margin-bottom: 100px;
`,ae=s.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,le=s.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  height: 56px;
  background-color: transparent;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  transition: border-color 0.5s ease;

  &:hover {
    border-color: ${x.btn};
  }
`,ke=({campers:t,pathForModal:n})=>{const[i,r]=u.useState(4),o=4,p=t.slice(0,i),a=()=>{r(i+o)};return e.jsxs(oe,{children:[e.jsx(ae,{children:p.map(l=>e.jsx(re,{camper:l,pathForModal:n},l._id))}),i<t.length&&e.jsx(le,{onClick:a,children:"Load more"})]})},de={"aria-busy":!0,role:"progressbar"};s.div`
  display: ${t=>t.$visible?"flex":"none"};
`;const ce="http://www.w3.org/2000/svg",c=242.776657104492,pe=1.6,he=b`
12.5% {
  stroke-dasharray: ${c*.14}px, ${c}px;
  stroke-dashoffset: -${c*.11}px;
}
43.75% {
  stroke-dasharray: ${c*.35}px, ${c}px;
  stroke-dashoffset: -${c*.35}px;
}
100% {
  stroke-dasharray: ${c*.01}px, ${c}px;
  stroke-dashoffset: -${c*.99}px;
}
`;s.path`
  stroke-dasharray: ${c*.01}px, ${c};
  stroke-dashoffset: 0;
  animation: ${he} ${pe}s linear infinite;
`;const xe=b`
to {
   transform: rotate(360deg);
 }
`;s.svg`
  animation: ${xe} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;s.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const fe=b`
to {
   stroke-dashoffset: 136;
 }
`;s.polygon`
  stroke-dasharray: 17;
  animation: ${fe} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;s.svg`
  transform-origin: 50% 65%;
`;const ge=({visible:t=!0,height:n="80",width:i="80",wrapperClass:r="",wrapperStyle:o={},ariaLabel:p="rotating-triangle-loading",colors:a=["#1B5299","#EF8354","#DB5461"]})=>t?e.jsx("svg",{width:i,height:n,xmlns:ce,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:r,style:o,"aria-label":p,"data-testid":"rotating-triangle-svg",...de,children:e.jsx("g",{transform:"translate(50,42)",children:e.jsx("g",{transform:"scale(0.8)",children:e.jsxs("g",{transform:"translate(-50,-50)",children:[e.jsx("polygon",{points:"72.5,50 50,11 27.5,50 50,50",fill:a[0],transform:"rotate(186 50 38.5)",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 38.5;360 50 38.5",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})}),e.jsx("polygon",{points:"5,89 50,89 27.5,50",fill:a[1],transform:"rotate(186 27.5 77.5)",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 27.5 77.5;360 27.5 77.5",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})}),e.jsx("polygon",{points:"72.5,50 50,89 95,89",fill:a[2],transform:"rotate(186 72.2417 77.5)",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 72.5 77.5;360 72 77.5",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})]})})})}):null,ye=()=>e.jsx(ge,{visible:!0,height:"60",width:"60",color:"#4fa94d",ariaLabel:"rotating-triangles-loading",wrapperStyle:{},wrapperClass:""});export{ke as C,ye as L,je as a,O as b,z as s};
