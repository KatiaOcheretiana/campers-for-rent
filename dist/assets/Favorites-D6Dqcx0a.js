import{u as r,g as l,a as s,j as e,C as n,L as m}from"./index-BeVFUMX-.js";import{s as p,a as d,C as u}from"./CampersList-B_l9TlNN.js";import{s as h}from"./selectors-D219qwtO.js";const f="/campers-for-rent/assets/camper-CeFqq0re.jpg",g=r.h2`
  margin-bottom: 40px;
  color: ${l.lightText};

  font-weight: 500;
  font-size: 22px;
`,x=r.img`
  border-radius: 20px;
  width: 100%;
`,j=()=>{const a=s(p),o=s(d),i=s(h),t=o.filter(c=>a.includes(c._id));return e.jsxs(n,{children:[t.length===0&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"It seems that your favorite list is currently empty. To add campers to your favorites, please visit the catalog where you can find a list of campers. From there, you can select the campers you like and add them to your favorites by clicking on the like button. Once you've added campers to your favorites, you'll be able to view them here."}),e.jsx(x,{src:f,alt:"camper"})]}),i?e.jsx(m,{}):e.jsx(u,{campers:t,pathForModal:"favorites"})]})};export{j as default};
