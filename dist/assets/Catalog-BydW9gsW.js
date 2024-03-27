import{u as t,g as o,b as g,j as e,s as n,c as j,d as m,a as x,e as b,C as f,L as y}from"./index-D6udNNH2.js";import{b as v,a as k,C as w}from"./CampersList-KmrK_1ke.js";import{F as $,a as C,b as F}from"./formik.esm-B2Z6MZTV.js";import{a as L,s as q}from"./selectors-CbC4wo0s.js";const T=t.h3`
  font-weight: 500;
  color: ${o.lightText};
  margin-bottom: 15px;
  margin-top: 30px;
`,d=t.div`
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
`,u=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 360px;
`,s=t.label`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 12px;
  width: 112px;
  height: 95px;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${o.btnHover};
  }
`,c=t.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;

  fill: transparent;
  stroke: ${o.darkText};
`,i=t.span`
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
`,h=t.svg`
  width: 40px;
  height: 28px;
  margin-bottom: 8px;
`,r=t($)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:checked + ${i} ${c} {
    stroke: ${o.btn};
  }

  &:checked + ${i} ${h} {
    stroke: ${o.btn};
  }
`,I=t.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  background-color: ${o.btn};
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
    background-color: ${o.btnHover};
  }
`,S=()=>{const a=g(),l=p=>{a(j(p.equipment)),a(m(p.type))};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"Filters"}),e.jsx(C,{initialValues:{equipment:[],type:""},onSubmit:l,children:e.jsxs(F,{children:[e.jsx(d,{id:"checkbox-group-equipment",children:"Vehicle equipment"}),e.jsxs(u,{role:"group","aria-labelledby":"checkbox-group-equipment",children:[e.jsxs(s,{children:[e.jsx(r,{type:"checkbox",name:"equipment",value:"airConditioner"}),e.jsxs(i,{children:[e.jsx(c,{style:{fill:"#101828"},children:e.jsx("use",{href:n+"#icon-ac"})}),"AC"]})]}),e.jsxs(s,{children:[e.jsx(r,{type:"checkbox",name:"equipment",value:"automatic"}),e.jsxs(i,{children:[e.jsx(c,{children:e.jsx("use",{href:n+"#icon-automatic"})}),"Automatic"]})]}),e.jsxs(s,{children:[e.jsx(r,{type:"checkbox",name:"equipment",value:"kitchen"}),e.jsxs(i,{children:[e.jsx(c,{children:e.jsx("use",{href:n+"#icon-kitchen"})}),"Kitchen"]})]}),e.jsxs(s,{children:[e.jsx(r,{type:"checkbox",name:"equipment",value:"TV"}),e.jsxs(i,{children:[e.jsx(c,{children:e.jsx("use",{href:n+"#icon-tv"})}),"TV"]})]}),e.jsxs(s,{children:[e.jsx(r,{type:"checkbox",name:"equipment",value:"shower"}),e.jsxs(i,{children:[e.jsx(c,{children:e.jsx("use",{href:n+"#icon-shower"})}),"Shower/WC"]})]})]}),e.jsx(d,{id:"checkbox-group-type",style:{marginTop:"30px"},children:"Vehicle type"}),e.jsxs(u,{role:"group","aria-labelledby":"checkbox-group-type",children:[e.jsxs(s,{children:[e.jsx(r,{type:"radio",name:"type",value:"panelTruck"}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:n+"#icon-van"})}),"Van"]})]}),e.jsxs(s,{children:[e.jsx(r,{type:"radio",name:"type",value:"fullyIntegrated"}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:n+"#icon-fully-integrated"})}),"Fully Integrated"]})]}),e.jsxs(s,{children:[e.jsx(r,{type:"radio",name:"type",value:"alcove"}),e.jsxs(i,{children:[e.jsx(h,{children:e.jsx("use",{href:n+"#icon-alcove"})}),"Alcove"]})]})]}),e.jsx(I,{type:"submit",children:"Search"})]})})]})},V=t.div`
  width: 360px;
`,z=t.label`
  position: relative;
  font-weight: 500;
  color: ${o.lightText};
`,A=t.input`
  border-radius: 10px;
  padding: 18px 18px 18px 44px;
  width: 100%;
  background-color: ${o.inputs};
  border: none;
  line-height: 1.25;

  margin-top: 8px;
`,B=t.svg`
  position: absolute;
  width: 18px;
  height: 20px;
  top: 86%;
  left: 18px;
  transform: translateY(-50%);

  fill: transparent;
  stroke: ${o.darkText};
`,E=()=>{const a=g(),l=x(v);return e.jsx(V,{children:e.jsxs(z,{htmlFor:"location",children:["Location",e.jsx(A,{type:"text",id:"location",value:l,placeholder:"City, country",onChange:p=>a(b(p.target.value))}),e.jsx(B,{children:e.jsx("use",{href:n+"#icon-location"})})]})})},W=t.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
`,M=()=>{const a=x(k);x(L);const l=x(q);return e.jsx(f,{children:e.jsxs(W,{children:[e.jsxs("div",{children:[e.jsx(E,{}),e.jsx(S,{})]}),l?e.jsx(y,{}):e.jsx(w,{campers:a,pathForModal:"catalog"})]})})};export{M as default};
