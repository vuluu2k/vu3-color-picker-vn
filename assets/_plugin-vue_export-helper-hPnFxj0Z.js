const b=t=>{let e=!1,s=t.replace(/#/g,"");s.length===3?s=[...s].map(r=>r+r).join(""):s.length===8&&(e=!0);const h=parseInt(s,16);return[h>>>(e?24:16),(h&(e?16711680:65280))>>>(e?16:8),(h&(e?65280:255))>>>(e?8:0),e?h&255:255]},l=(t,e,s)=>{e/=100,s/=100;const h=n=>(n+t/60)%6,r=n=>s*(1-e*Math.max(0,Math.min(h(n),4-h(n),1))),a=Math.round(255*r(5)),i=Math.round(255*r(3)),o=Math.round(255*r(1));return[a,i,o]},g=(t,e,s)=>{t/=255,e/=255,s/=255;const h=Math.max(t,e,s),r=h-Math.min(t,e,s),a=r===0?0:r&&h===t?(e-s)/r:h===e?2+(s-t)/r:4+(t-e)/r,i=Math.round(60*(a<0?a+6:a)),o=Math.round(h&&r/h*100),n=Math.round(h*100);return[i,o,n]},u=(t,e,s)=>((t<<16)+(e<<8)+s).toString(16).padStart(6,"0"),c=t=>{const e=/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d\.]+)?\)/i,s=t.match(e);if(s){const h=parseInt(s[1]),r=parseInt(s[2]),a=parseInt(s[3]),i=s[4]?parseFloat(s[4]):1;return[h,r,a,i]}else return[0,0,0,1]},d=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D"),p={emits:["change","update:value","blur"],props:{value:{type:String,default:"#000000"},output:{type:String,default:"hex",validator(t){return["hex","rgb","hsb","rgba"].indexOf(t)!==-1}}},data(){return{hex:"#000000",hsb:{hue:0,saturation:0,brightness:0},rgb:{red:0,green:0,blue:0},alpha:100}},mounted(){this.handleRecalcColor(this.value)},computed:{alphaMark:{get(){return this.alpha},set(t){this.alpha=t}},saturationMark:{get(){return this.hsb.saturation},set(t){this.hsb.saturation=t}},brightnessMark:{get(){return this.hsb.brightness},set(t){this.hsb.brightness=t}},hueMark:{get(){return this.hsb.hue},set(t){this.hsb.hue=t}},redMark:{get(){return this.rgb.red},set(t){this.rgb.red=t}},greenMark:{get(){return this.rgb.green},set(t){this.rgb.green=t}},blueMark:{get(){return this.rgb.blue},set(t){this.rgb.blue=t}},hexMark:{get(){return this.hex},set(t){const e=d(t).replace(/#|\s/g,"");[6,8].includes(e.length)&&(this.hex=`#${e}`)}}},methods:{handleRgb(t,e,s){[this.hsb.hue,this.hsb.saturation,this.hsb.brightness]=g(t,e,s),this.hex=`#${u(t,e,s)}`},handleHex(t){const[e,s,h,r]=b(t);this.rgb={red:e,green:s,blue:h},this.alpha=Math.round(r/255*100),[this.hsb.hue,this.hsb.saturation,this.hsb.brightness]=g(e,s,h)},handleHsb(t,e,s){[this.rgb.red,this.rgb.green,this.rgb.blue]=l(t,e,s),this.hex=`#${u(this.rgb.red,this.rgb.green,this.rgb.blue)}`},handleRecalcColor(t){if(t.startsWith("#"))this.hex=t,this.handleHex(t);else if(t.startsWith("rgb")){const[e,s,h,r]=c(t);this.rgb={red:e,green:s,blue:h},this.alpha=r*100,this.handleRgb(e,s,h)}},handleColorChange(t){switch(t){case"hex":this.handleHex(this.hex);break;case"rgb":this.handleRgb(this.rgb.red,this.rgb.green,this.rgb.blue);break;case"hsb":this.handleHsb(this.hsb.hue,this.hsb.saturation,this.hsb.brightness)}},savedSelection(){if(window){const t=window.getSelection();window.MY_SEL=(t==null?void 0:t.rangeCount)!==0?t==null?void 0:t.getRangeAt(0):null}},restoreSelection(){if(window&&window.MY_SEL){const t=window.getSelection();t==null||t.removeAllRanges(),t==null||t.addRange(window.MY_SEL)}},handleExport(){this.handleExportValue(),this.handleExportChange()},handleExportChange(){this.$emit("change",{hex:this.hex,rgb:this.rgb,hsb:this.hsb,alpha:this.alpha})},handleExportValue(){const t=this[this.output==="rgba"?"rgb":this.output];this.output==="rgba"&&(t.alpha=this.alpha),this.$emit("update:value",t)}}},x=p,M=(t,e)=>{const s=t.__vccOpts||t;for(const[h,r]of e)s[h]=r;return s};export{M as _,x as c,l as h};