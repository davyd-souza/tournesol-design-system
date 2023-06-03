import{j as p}from"./jsx-runtime-6db5783a.js";import{P as R,c as B}from"./index-7098f655.js";import{R as e,r as I}from"./index-532c4ca3.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";var N=Object.defineProperty,_=Object.defineProperties,k=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,u=(a,r,t)=>r in a?N(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,T=(a,r)=>{for(var t in r||(r={}))L.call(r,t)&&u(a,t,r[t]);if(d)for(var t of d(r))W.call(r,t)&&u(a,t,r[t]);return a},q=(a,r)=>_(a,k(r));const G=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),e.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),D=I.forwardRef((a,r)=>e.createElement(R,q(T({ref:r},a),{weights:G})));D.displayName="Plus";const Y={title:"Form/Button",component:B,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{description:"Control button appearance",options:["primary","neutral"],control:{type:"inline-radio"},table:{type:{summary:'"primary" | "neutral"'},defaultValue:{summary:'"primary"'}}},size:{description:"Control button size",options:["sm","md","lg"],control:{type:"inline-radio"},table:{defaultValue:{summary:'"md"'}}},disabled:{description:"Disable button",control:{type:"boolean"},table:{defaultValue:{summary:!1}}},onClick:{action:"click"}}},n={},s={args:{children:"Cancel",variant:"neutral"}},o={args:{children:"Create",variant:"primary",outlined:!0}},l={args:{children:"Create",variant:"primary",size:"sm"}},c={args:{children:"Create",variant:"primary",size:"lg"}},i={args:{children:p.jsxs(p.Fragment,{children:["Add new",p.jsx(D,{})]})}},m={args:{disabled:!0}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,b,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    variant: 'neutral'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var V,E,H;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Create',
    variant: 'primary',
    outlined: true
  }
}`,...(H=(E=o.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var O,C,S;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Create',
    variant: 'primary',
    size: 'sm'
  }
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var j,A,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Create',
    variant: 'primary',
    size: 'lg'
  }
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var w,M,F;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <>
        Add new
        <Plus />
      </>
  }
}`,...(F=(M=i.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var Z,x,z;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(x=m.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const $=["Primary","Neutral","Outlined","Small","Large","WithIcon","Disabled"];export{m as Disabled,c as Large,s as Neutral,o as Outlined,n as Primary,l as Small,i as WithIcon,$ as __namedExportsOrder,Y as default};
//# sourceMappingURL=Button.stories-f11f207e.js.map
