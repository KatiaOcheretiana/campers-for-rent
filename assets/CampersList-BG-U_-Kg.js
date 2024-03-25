import{f as I,u as s,g as x,r as g,b as $,a as F,j as e,s as c,h as S,i as _,k as B,l as R}from"./index-DM2YkzTs.js";import{b as E}from"./selectors-CbC4wo0s.js";import M from"./ModalWindow-B2EjxCNI.js";const O=t=>t.favorites.favoritesCampers,P=t=>t.filter.location,z=t=>t.filter.equipment,N=t=>t.filter.type,de=I([E,P,z,N],(t,n,i,l)=>{const a=n.toLowerCase().trim().split(",").map(r=>r.trim()),[d,p]=a;let o=t;return i&&(o=o.filter(r=>r.details&&(r.details[i]||r.details[i]===void 0))),l&&(o=o.filter(r=>r.form===l)),o.filter(r=>{const[u,h]=r.location.toLowerCase().split(", ");return(!d||h.includes(d))&&(!p||u.includes(p))})}),T=s.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`,W=s.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`,D=s.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;

  width: 339px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,U=s.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,q=s.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`,A=s.div`
  display: flex;
  justify-content: space-between;
`,H=s.svg`
  width: 16px;
  height: 16px;
  fill: ${x.rating};
`,J=s.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,K=s.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: ${x.darkText};
`,V=s.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,Y=s.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
`,G=s.p`
  color: ${x.lightText};
  width: 525px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`,Q=s.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 526px;
  margin-bottom: 24px;
`,f=s.div`
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
`,X=s.button`
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
`,Z=s.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 28px;
  border: none;
  background: none;
  padding: 0;
`,ee=s.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke-width: 2.3px;
  transform: translateY(-50%);
  top: 50%;
  left: 11%;
`,te=s.use`
  width: 24px;
  height: 24px;
`,se=({item:t})=>{const[n,i]=g.useState(!1),l=$(),a=F(O);g.useEffect(()=>{i(a.includes(t._id))},[t._id,a]);const d=()=>{const p=n?a.filter(o=>o!==t._id):[...new Set([...a,t._id])];localStorage.setItem(S,JSON.stringify(p)),l(n?_(t._id):B(t._id)),i(!n)};return e.jsx(Z,{onClick:d,children:e.jsx(ee,{children:e.jsx(te,{href:c+"#icon-like",style:{fill:n?"#E44848":"transparent",stroke:n?"#E44848":"#101828"}})})})},ie=({camper:t,pathForModal:n})=>{const{_id:i,name:l,price:a,rating:d,location:p,adults:o,engine:j,transmission:r,description:u,details:h,gallery:w,reviews:v}=t,k=R(),[m,b]=g.useState(!1),y=()=>{b(!0),document.body.style.overflow="hidden";const L=`/${n}/${i}`;k(L)},C=()=>{b(!1),document.body.style.overflow="visible"};return e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[e.jsx(W,{src:w[0],alt:l,width:290,height:310}),e.jsxs("div",{children:[e.jsxs(A,{children:[e.jsx(D,{children:l}),e.jsxs(q,{children:[e.jsxs(U,{children:["€",a.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,"")]}),e.jsx(se,{item:t})]})]}),e.jsxs(Y,{children:[e.jsxs(J,{children:[e.jsx(H,{children:e.jsx("use",{href:c+"#icon-star"})}),d," (",v.length," Reviews)"]}),e.jsxs(V,{children:[e.jsx(K,{children:e.jsx("use",{href:c+"#icon-location"})}),p.split(", ").reverse().join(", ")]})]}),e.jsx(G,{children:u}),e.jsxs(Q,{children:[e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:c+"#icon-adults"})}),e.jsxs("p",{children:[" ",o," adults"]})]}),e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:c+"#icon-automatic",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",r]})]}),e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:c+"#icon-petrol"})}),e.jsxs("p",{children:[" ",j]})]}),h.kitchen>=1&&e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:c+"#icon-kitchen",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:" kitchen "})]}),h.beds>=1&&e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:c+"#icon-beds",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",h.beds," beds"]})]}),h.airConditioner>=1&&e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:c+"#icon-ac",style:{fill:"#101828"}})}),e.jsx("p",{children:" AC"})]})]}),e.jsx(X,{type:"submit",onClick:()=>y(),children:"Show more"})]})]},i),m&&e.jsx(M,{camperInfo:t,isOpen:m,onRequestClose:C,pathForModal:n})]})},ne=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  margin-bottom: 100px;
`,oe=s.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,re=s.button`
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
`,pe=({campers:t,pathForModal:n})=>{const[i,l]=g.useState(4),a=4,d=t.slice(0,i),p=()=>{l(i+a)};return e.jsxs(ne,{children:[e.jsx(oe,{children:d.map(o=>e.jsx(ie,{camper:o,pathForModal:n},o._id))}),i<t.length&&e.jsx(re,{onClick:p,children:"Load more"})]})};export{pe as C,de as a,P as b,O as s};
