import{u as r,g as s,a,j as e,s as o}from"./index-BeVFUMX-.js";import{b as x}from"./selectors-D219qwtO.js";import{B as p}from"./BookForm-BvIIpPlv.js";import"./formik.esm-DC18mWqm.js";const h=r.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`,d=r.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 60px;
  column-gap: 16px;
  row-gap: 4px;
  width: 172px;
  justify-content: center;
  margin-bottom: 16px;
`,m=r.li`
  margin-bottom: 24px;
`,f=r.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background-color: ${s.blockFeatures};
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: ${s.btn};
  display: flex;
  align-items: center;
  justify-content: center;
`,g=r.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
`,j=r.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
`,n=r.svg`
  width: 16px;
  height: 16px;
`,w=r.p`
  color: ${s.lightText};
`,R=()=>{const l=a(x),{reviews:c}=l;return e.jsxs(h,{children:[e.jsx("div",{children:e.jsx("ul",{children:c.map(i=>e.jsxs(m,{children:[e.jsxs(d,{children:[e.jsx(f,{children:i.reviewer_name.charAt(0)}),e.jsx(g,{children:i.reviewer_name}),e.jsx(j,{children:[...Array(5)].map((u,t)=>e.jsx("li",{children:t<i.reviewer_rating?e.jsx(n,{children:e.jsx("use",{href:o+"#icon-star",fill:"#FFC531"})}):e.jsx(n,{children:e.jsx("use",{href:o+"#icon-star",fill:"#F2F4F7"})})},t))})]}),e.jsx(w,{children:i.comment})]},i.reviewer_name))})}),e.jsx(p,{})]})};export{R as default};
