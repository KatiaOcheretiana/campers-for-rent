import{u as t,g as n,a as V,r as L,j as e,s,c as M,b as F,d as I,e as P,f as W,h as A,C as E}from"./index-CfgrrXL2.js";import O from"./ModalWindow-bsJxUA8h.js";import{s as H,F as N,a as D,b as G}from"./formik.esm-vi2fSFZ-.js";const _=t.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`,K=t.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`,U=t.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;

  width: 339px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,Y=t.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,J=t.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${n.darkText};
  stroke-width: 2.3px;
`,Q=t.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
`,X=t.div`
  display: flex;
  justify-content: space-between;
`,Z=t.svg`
  width: 16px;
  height: 16px;
`,ee=t.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,te=t.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: ${n.darkText};
`,ie=t.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,se=t.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
`,ne=t.p`
  color: ${n.lightText};
  width: 525px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`,oe=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 526px;
  margin-bottom: 24px;
`,f=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${n.blockFeatures};

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
`,re=t.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  background-color: ${n.btn};
  border-radius: 200px;
  padding: 16px 40px;
  border: none;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${n.btnHover};
  }
`,le=({camper:i})=>{const{_id:r,name:o,price:h,rating:m,location:g,adults:d,engine:x,transmission:w,description:l,details:u,gallery:v,reviews:q}=i,S=V(),[y,k]=L.useState(!1),B=()=>{k(!0),document.body.style.overflow="hidden";const R=`/catalog/${r}`;S(R)},z=()=>{k(!1),document.body.style.overflow="visible"};return e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsx(K,{src:v[0],alt:o,width:290,height:310}),e.jsxs("div",{children:[e.jsxs(X,{children:[e.jsx(U,{children:o}),e.jsxs(Q,{children:[e.jsxs(Y,{children:["€",h.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,"")]}),e.jsx(J,{children:e.jsx("use",{href:s+"#icon-like"})})]})]}),e.jsxs(se,{children:[e.jsxs(ee,{children:[e.jsx(Z,{children:e.jsx("use",{href:s+"#icon-star"})}),m," (",q.length," Reviews)"]}),e.jsxs(ie,{children:[e.jsx(te,{children:e.jsx("use",{href:s+"#icon-location"})}),g.split(", ").reverse().join(", ")]})]}),e.jsx(ne,{children:l}),e.jsxs(oe,{children:[e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:s+"#icon-adults"})}),e.jsxs("p",{children:[" ",d," adults"]})]}),e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:s+"#icon-automatic",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",w]})]}),e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:s+"#icon-petrol"})}),e.jsxs("p",{children:[" ",x]})]}),u.kitchen>=1&&e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:s+"#icon-kitchen",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:" kitchen "})]}),u.beds>=1&&e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:s+"#icon-beds",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",u.beds," beds"]})]}),u.airConditioner>=1&&e.jsxs(f,{children:[e.jsx("svg",{children:e.jsx("use",{href:s+"#icon-ac",style:{fill:"#101828"}})}),e.jsx("p",{children:" AC"})]})]}),e.jsx(re,{type:"submit",onClick:()=>B(),children:"Show more"})]})]},r),y&&e.jsx(O,{camperInfo:i,isOpen:y,onRequestClose:z})]})},ce=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  margin-bottom: 100px;
`,ae=t.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,pe=t.button`
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
    border-color: ${n.btn};
  }
`,T=i=>i.filter.location,de=i=>i.filter.equipment,xe=i=>i.filter.type,he=M([H,T,de,xe],(i,r,o,h)=>{const m=r.toLowerCase().trim().split(",").map(l=>l.trim()),[g,d]=m;let x=i;return o&&(x=x.filter(l=>l.details&&(l.details[o]||l.details[o]===void 0))),h&&(x=x.filter(l=>l.form===h)),x.filter(l=>{const[u,v]=l.location.toLowerCase().split(", ");return(!g||v.includes(g))&&(!d||u.includes(d))})}),ge=()=>{const i=F(he),[r,o]=L.useState(4),h=4,m=i.slice(0,r),g=()=>{o(r+h)};return e.jsxs(ce,{children:[e.jsx(ae,{children:m.map(d=>e.jsx(le,{camper:d},d._id))}),r<i.length&&e.jsx(pe,{onClick:g,children:"Load more"})]})},ue=t.h3`
  font-weight: 500;
  color: ${n.lightText};
  margin-bottom: 15px;
  margin-top: 30px;
`,C=t.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 48px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.1);
  }
`,$=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 360px;
`,a=t.label`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 12px;
  width: 112px;
  height: 95px;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${n.btnHover};
  }
`,j=t.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;

  fill: transparent;
  stroke: ${n.darkText};
`,c=t.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,b=t.svg`
  width: 40px;
  height: 28px;
  margin-bottom: 8px;
`,p=t(N)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:checked + ${c} ${j} {
    stroke: ${n.btn};
  }

  &:checked + ${c} ${b} {
    stroke: ${n.btn};
  }
`,fe=t.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  background-color: ${n.btn};
  border-radius: 200px;
  border: none;
  padding: 16px 60px;
  height: 56px;

  margin-top: 64px;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:hover {
    background-color: ${n.btnHover};
  }
`,je=()=>{const i=I(),r=o=>{i(P(o.equipment)),i(W(o.type))};return e.jsxs(e.Fragment,{children:[e.jsx(ue,{children:"Filters"}),e.jsx(D,{initialValues:{equipment:[],type:""},onSubmit:r,children:e.jsxs(G,{children:[e.jsx(C,{id:"checkbox-group-equipment",children:"Vehicle equipment"}),e.jsxs($,{role:"group","aria-labelledby":"checkbox-group-equipment",children:[e.jsxs(a,{children:[e.jsx(p,{type:"checkbox",name:"equipment",value:"airConditioner"}),e.jsxs(c,{children:[e.jsx(j,{style:{fill:"#101828"},children:e.jsx("use",{href:s+"#icon-ac"})}),"AC"]})]}),e.jsxs(a,{children:[e.jsx(p,{type:"checkbox",name:"equipment",value:"automatic"}),e.jsxs(c,{children:[e.jsx(j,{children:e.jsx("use",{href:s+"#icon-automatic"})}),"Automatic"]})]}),e.jsxs(a,{children:[e.jsx(p,{type:"checkbox",name:"equipment",value:"kitchen"}),e.jsxs(c,{children:[e.jsx(j,{children:e.jsx("use",{href:s+"#icon-kitchen"})}),"Kitchen"]})]}),e.jsxs(a,{children:[e.jsx(p,{type:"checkbox",name:"equipment",value:"TV"}),e.jsxs(c,{children:[e.jsx(j,{children:e.jsx("use",{href:s+"#icon-tv"})}),"TV"]})]}),e.jsxs(a,{children:[e.jsx(p,{type:"checkbox",name:"equipment",value:"shower"}),e.jsxs(c,{children:[e.jsx(j,{children:e.jsx("use",{href:s+"#icon-shower"})}),"Shower/WC"]})]})]}),e.jsx(C,{id:"checkbox-group-type",style:{marginTop:"30px"},children:"Vehicle type"}),e.jsxs($,{role:"group","aria-labelledby":"checkbox-group-type",children:[e.jsxs(a,{children:[e.jsx(p,{type:"radio",name:"type",value:"panelTruck"}),e.jsxs(c,{children:[e.jsx(b,{children:e.jsx("use",{href:s+"#icon-van"})}),"Van"]})]}),e.jsxs(a,{children:[e.jsx(p,{type:"radio",name:"type",value:"fullyIntegrated"}),e.jsxs(c,{children:[e.jsx(b,{children:e.jsx("use",{href:s+"#icon-fully-integrated"})}),"Fully Integrated"]})]}),e.jsxs(a,{children:[e.jsx(p,{type:"radio",name:"type",value:"alcove"}),e.jsxs(c,{children:[e.jsx(b,{children:e.jsx("use",{href:s+"#icon-alcove"})}),"Alcove"]})]})]}),e.jsx(fe,{type:"submit",children:"Search"})]})})]})},me=t.div`
  width: 360px;
`,be=t.label`
  position: relative;
  font-weight: 500;
  color: ${n.lightText};
`,ve=t.input`
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 100%;
  background-color: ${n.inputs};
  border: none;
  line-height: 1.25;

  margin-top: 8px;
`,we=t.svg`
  position: absolute;
  width: 18px;
  height: 20px;
  top: 86%;
  left: 18px;
  transform: translateY(-50%);

  fill: transparent;
  stroke: ${n.darkText};
`,ye=()=>{const i=I(),r=F(T);return e.jsx(me,{children:e.jsxs(be,{htmlFor:"location",children:["Location",e.jsx(ve,{type:"text",id:"location",value:r,placeholder:"City, country",onChange:o=>i(A(o.target.value))}),e.jsx(we,{children:e.jsx("use",{href:s+"#icon-location"})})]})})},ke=t.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
`,Fe=()=>e.jsx(E,{children:e.jsxs(ke,{children:[e.jsxs("div",{children:[e.jsx(ye,{}),e.jsx(je,{})]}),e.jsx(ge,{})]})});export{Fe as default};
