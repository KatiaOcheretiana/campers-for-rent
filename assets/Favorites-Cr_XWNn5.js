import{u as c,g as l,a as s,j as e,C as m}from"./index-CnGBeGjU.js";import{s as n,a as p,L as d,C as u}from"./Loader-B5C32SBE.js";import{s as h}from"./selectors-CbC4wo0s.js";import"./ModalWindow-BC2XraoX.js";const f="/campers-for-rent/assets/camper-CeFqq0re.jpg",g=c.h2`
  margin-bottom: 40px;
  color: ${l.lightText};

  font-weight: 500;
  font-size: 22px;
`,j=()=>{const r=s(n),a=s(p),o=s(h),t=a.filter(i=>r.includes(i._id));return e.jsxs(m,{children:[t.length===0&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"It seems that your favorite list is currently empty. To add campers to your favorites, please visit the catalog where you can find a list of campers. From there, you can select the campers you like and add them to your favorites by clicking on the like button. Once you've added campers to your favorites, you'll be able to view them here."}),e.jsx("img",{src:f,alt:"camper"})]}),o?e.jsx(d,{}):e.jsx(u,{campers:t,pathForModal:"favorites"})]})};export{j as default};
