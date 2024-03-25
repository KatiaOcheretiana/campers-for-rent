import{u as r,g as l,a as t,j as e,C as m,L as n}from"./index-DM2YkzTs.js";import{s as p,a as d,C as u}from"./CampersList-BG-U_-Kg.js";import{s as h}from"./selectors-CbC4wo0s.js";import"./ModalWindow-B2EjxCNI.js";const f=""+new URL("camper-CeFqq0re.jpg",import.meta.url).href,g=r.h2`
  margin-bottom: 40px;
  color: ${l.lightText};

  font-weight: 500;
  font-size: 22px;
`,x=r.img`
  border-radius: 20px;
  width: 100%;
`,b=()=>{const o=t(p),a=t(d),i=t(h),s=a.filter(c=>o.includes(c._id));return e.jsxs(m,{children:[s.length===0&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"It seems that your favorite list is currently empty. To add campers to your favorites, please visit the catalog where you can find a list of campers. From there, you can select the campers you like and add them to your favorites by clicking on the like button. Once you've added campers to your favorites, you'll be able to view them here."}),e.jsx(x,{src:f,alt:"camper"})]}),i?e.jsx(n,{}):e.jsx(u,{campers:s,pathForModal:"favorites"})]})};export{b as default};
