import{u as t,g as u,a as m,j as e,s as r}from"./index-CeCn-pFK.js";import{c as v}from"./selectors-CbC4wo0s.js";import{B as b}from"./BookForm-BsF56TCF.js";import"./formik.esm-u5gCkpmW.js";const k=t.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,w=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,i=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${u.blockFeatures};

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
`,y=t.h3`
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
`,C=t.table`
  width: 100%;
`,l=t.tr`
  display: flex;
  justify-content: space-between;
`,n=t.td`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  padding: 0;

  &:first-letter {
    text-transform: uppercase;
  }

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`,I=()=>{const d=m(v),{adults:c,engine:h,transmission:o,form:x,length:a,width:j,height:p,tank:f,consumption:g,details:s}=d;return e.jsxs(k,{children:[e.jsxs("div",{children:[e.jsxs(w,{children:[c&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-adults"})}),e.jsxs("p",{children:[" ",c," adults"]})]}),o&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-automatic",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",o]})]}),s.airConditioner>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-ac",style:{fill:"#101828"}})}),e.jsx("p",{children:" AC"})]}),h&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-petrol"})}),e.jsxs("p",{children:[" ",h]})]}),s.kitchen>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-kitchen",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:" kitchen "})]}),s.beds>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-beds",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",s.beds," beds"]})]}),s.airConditioner>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-air-conditioner",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",s.airConditioner," air conditioner"]})]}),s.CD>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-cd",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:" CD"})]}),s.radio>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-radio",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:" Radio"})]}),s.hob>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-hob",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[s.hob," hob "]})]}),s.toilet>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-toilet"})}),e.jsx("p",{children:"Toilet"})]}),s.shower>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-shower",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:"Shower"})]}),s.freezer>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-freezer",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:"Freezer"})]}),s.freezer>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-freezer",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:"Freezer"})]}),s.gas&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-gas",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:"Gas"})]}),s.water&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-water",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:"Water"})]}),s.microwave>=1&&e.jsxs(i,{children:[e.jsx("svg",{children:e.jsx("use",{href:r+"#icon-microwave",style:{stroke:"#101828",fill:"transparent"}})}),e.jsx("p",{children:"Microwave"})]})]}),e.jsxs("div",{children:[e.jsx(y,{children:"Vehicle details"}),e.jsx(C,{children:e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(n,{children:"Form"}),e.jsx(n,{children:x})]}),e.jsxs(l,{children:[e.jsx(n,{children:"Length"}),e.jsx(n,{children:a})]}),e.jsxs(l,{children:[e.jsx(n,{children:"Width"}),e.jsx(n,{children:j})]}),e.jsxs(l,{children:[e.jsx(n,{children:"Height"}),e.jsx(n,{children:p})]}),e.jsxs(l,{children:[e.jsx(n,{children:"Tank"}),e.jsx(n,{children:f})]}),e.jsxs(l,{children:[e.jsx(n,{children:"Consumption"}),e.jsx(n,{children:g})]})]})})]})]}),e.jsx(b,{})]})};export{I as default};
