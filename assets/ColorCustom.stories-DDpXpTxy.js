import{_,c as w}from"./_plugin-vue_export-helper-hPnFxj0Z.js";import{o as d,b as c,d as a,t as r,F as m,e as x,w as b,n as v,f as h}from"./vue.esm-bundler-Bv3a8yGg.js";const C={name:"VuColorCustom",emits:["change","add","update:value"],mixins:[w],props:{themes:{type:Array,default(){return[["#ffffff","#e3e3e3","#979797","#4f4f4f","#000000"],["#e8eaed","#959ee5","#384ad3","#25318d","#131946"],["#f2decc","#c2b2a3","#917a7a","#615952","#30243f"],["#d1dbc3","#abb899","#7f9463","#556342","#2a3121"],["#c7d3d5","#9aa9ac","#677e82","#45575a","#222a2b"]]}},colors:{type:Array,default(){return["#000000","#ffffff","#8b0000","#bada55","#323232","#a2a3e9","#8b8cd6","#e43292","#ed45a0","#aeebc5","#38c68b","#1d2cf3","#b45ad3","#8e3aaa"]}},addText:{type:String,default:"+ Add"},editText:{type:String,default:"Edit"},themeText:{type:String,default:"Theme colors"},colorText:{type:String,default:"My colors"},class:{type:String,default:""}},mounted(){this.previewColor=this.value},data(){return{previewColor:"#000000"}},methods:{onMouseOverColor(l){this.previewColor=l.target.getAttribute("data-color")},onMouseLeaveColor(){this.previewColor=this.value},onAdd(){this.$emit("add")},onSelectColor(l){this.hex=l,this.handleColorChange("hex"),this.handleExport()}}},V={class:"color-custom-container"},A={class:"color-custom-add"},S={class:"color-custom-add-title"},k={class:"color-custom-add-action"},E={class:"color-custom-themes"},L=["onMousedown","data-color"],O={class:"color-custom-add"},B={class:"color-custom-add-title"},D={class:"color-custom-colors"},F=["onMousedown","data-color"],N={class:"color-custom-display"};function z(l,o,n,j,T,e){return d(),c("div",{class:v(["color-custom",n.class])},[a("div",V,[a("div",A,[a("div",S,r(n.themeText),1),a("div",k,r(n.editText),1)]),a("div",E,[(d(!0),c(m,null,x(n.themes,(t,u)=>(d(),c("div",{class:"color-custom-theme",key:u},[(d(!0),c(m,null,x(t,(s,g)=>(d(),c("div",{class:"color-custom-theme-color",onMouseover:o[0]||(o[0]=(...i)=>e.onMouseOverColor&&e.onMouseOverColor(...i)),onMouseleave:o[1]||(o[1]=(...i)=>e.onMouseLeaveColor&&e.onMouseLeaveColor(...i)),onMousedown:b(i=>e.onSelectColor(s),["stop","prevent"]),"data-color":s,key:g,style:h({background:s})},null,44,L))),128))]))),128))]),a("div",O,[a("div",B,r(n.colorText),1),a("div",{class:"color-custom-add-action",onMousedown:o[2]||(o[2]=b((...t)=>e.onAdd&&e.onAdd(...t),["prevent"]))},r(n.addText),33)]),a("div",D,[(d(!0),c(m,null,x(n.colors,(t,u)=>(d(),c("div",{class:"color-custom-item",key:u},[a("div",{onMouseover:o[3]||(o[3]=(...s)=>e.onMouseOverColor&&e.onMouseOverColor(...s)),onMouseleave:o[4]||(o[4]=(...s)=>e.onMouseLeaveColor&&e.onMouseLeaveColor(...s)),onMousedown:b(s=>e.onSelectColor(t),["stop","prevent"]),"data-color":t,class:v(["color-custom-item-inner",{active:t===l.value}]),style:h({background:t})},null,46,F)]))),128))]),a("div",N,r(T.previewColor),1)])],2)}const I=_(C,[["render",z]]);C.__docgenInfo={displayName:"VuColorCustom",exportName:"default",description:"",tags:{},props:[{name:"themes",mixin:{name:"-",path:"../../mixins/colorMixin.ts"},type:{name:"array"},defaultValue:{func:!1,value:`[
  ["#ffffff", "#e3e3e3", "#979797", "#4f4f4f", "#000000"],
  ["#e8eaed", "#959ee5", "#384ad3", "#25318d", "#131946"],
  ["#f2decc", "#c2b2a3", "#917a7a", "#615952", "#30243f"],
  ["#d1dbc3", "#abb899", "#7f9463", "#556342", "#2a3121"],
  ["#c7d3d5", "#9aa9ac", "#677e82", "#45575a", "#222a2b"]
]`}},{name:"colors",mixin:{name:"-",path:"../../mixins/colorMixin.ts"},type:{name:"array"},defaultValue:{func:!1,value:`[
  "#000000",
  "#ffffff",
  "#8b0000",
  "#bada55",
  "#323232",
  "#a2a3e9",
  "#8b8cd6",
  "#e43292",
  "#ed45a0",
  "#aeebc5",
  "#38c68b",
  "#1d2cf3",
  "#b45ad3",
  "#8e3aaa"
]`}},{name:"addText",mixin:{name:"-",path:"../../mixins/colorMixin.ts"},type:{name:"string"},defaultValue:{func:!1,value:'"+ Add"'}},{name:"editText",mixin:{name:"-",path:"../../mixins/colorMixin.ts"},type:{name:"string"},defaultValue:{func:!1,value:'"Edit"'}},{name:"themeText",mixin:{name:"-",path:"../../mixins/colorMixin.ts"},type:{name:"string"},defaultValue:{func:!1,value:'"Theme colors"'}},{name:"colorText",mixin:{name:"-",path:"../../mixins/colorMixin.ts"},type:{name:"string"},defaultValue:{func:!1,value:'"My colors"'}},{name:"class",mixin:{name:"-",path:"../../mixins/colorMixin.ts"},type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"change",mixin:{name:"-",path:"../../mixins/colorMixin.ts"}},{name:"add",mixin:{name:"-",path:"../../mixins/colorMixin.ts"}},{name:"update:value",mixin:{name:"-",path:"../../mixins/colorMixin.ts"}}],sourceFiles:["/home/runner/work/v3-colorpicker-vn/v3-colorpicker-vn/src/components/colorcustom/ColorCustom.vue"]};const H={title:"Example/VuColorCustom",component:I,tags:["autodocs"],argTypes:{value:{control:"color"},output:{control:"select",options:["hex","rgb","rgba","hsb"]}},args:{value:"#000000",themes:[["#ffffff","#e3e3e3","#979797","#4f4f4f","#000000"],["#e8eaed","#959ee5","#384ad3","#25318d","#131946"],["#f2decc","#c2b2a3","#917a7a","#615952","#30243f"],["#d1dbc3","#abb899","#7f9463","#556342","#2a3121"],["#c7d3d5","#9aa9ac","#677e82","#45575a","#222a2b"]],colors:["#000000","#ffffff","#8b0000","#bada55","#323232","#a2a3e9","#8b8cd6","#e43292","#ed45a0","#aeebc5","#38c68b","#1d2cf3","#b45ad3","#8e3aaa"],class:"",output:"hex",addText:"+ Add",editText:"Edit",themeText:"Theme colors",colorText:"My colors"}},f={args:{value:"#000000",output:"hex",themes:[["#ffffff","#e3e3e3","#979797","#4f4f4f","#000000"],["#e8eaed","#959ee5","#384ad3","#25318d","#131946"],["#f2decc","#c2b2a3","#917a7a","#615952","#30243f"],["#d1dbc3","#abb899","#7f9463","#556342","#2a3121"],["#c7d3d5","#9aa9ac","#677e82","#45575a","#222a2b"]],colors:["#000000","#ffffff","#8b0000","#bada55","#323232","#a2a3e9","#8b8cd6","#e43292","#ed45a0","#aeebc5","#38c68b","#1d2cf3","#b45ad3","#8e3aaa"],class:"",addText:"+ Add",editText:"Edit",themeText:"Theme colors",colorText:"My colors"}};var p,M,y;f.parameters={...f.parameters,docs:{...(p=f.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: "#000000",
    output: "hex",
    themes: [["#ffffff", "#e3e3e3", "#979797", "#4f4f4f", "#000000"], ["#e8eaed", "#959ee5", "#384ad3", "#25318d", "#131946"], ["#f2decc", "#c2b2a3", "#917a7a", "#615952", "#30243f"], ["#d1dbc3", "#abb899", "#7f9463", "#556342", "#2a3121"], ["#c7d3d5", "#9aa9ac", "#677e82", "#45575a", "#222a2b"]],
    colors: ["#000000", "#ffffff", "#8b0000", "#bada55", "#323232", "#a2a3e9", "#8b8cd6", "#e43292", "#ed45a0", "#aeebc5", "#38c68b", "#1d2cf3", "#b45ad3", "#8e3aaa"],
    class: "",
    addText: "+ Add",
    editText: "Edit",
    themeText: "Theme colors",
    colorText: "My colors"
  }
}`,...(y=(M=f.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};const J=["Demo"];export{f as Demo,J as __namedExportsOrder,H as default};