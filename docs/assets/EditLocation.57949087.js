import{_ as i,o as l,c as r,b as o,k as c,e as a,v as s}from"./index.12e88820.js";const d={name:"EditLocation",data(){return{Location:{LocationID:"",LocationName:"",LocationStatusID:""}}}},u={class:"row justify-content-center"},m={class:"col-md-6"},p=o("h3",{class:"text-center"},"Update Location",-1),L={class:"form-group"},f=o("label",null,"Location ID",-1),_={class:"form-group"},b=o("label",null,"Location Name",-1),v={class:"form-group"},D=o("label",null,"Location Status ID",-1),h=o("div",{class:"text-center m-3"},[o("button",{class:"btn btn-danger mt-3"},"Update")],-1);function I(t,e,U,N,S,g){return l(),r("div",u,[o("div",m,[p,o("form",{onSubmit:e[3]||(e[3]=c((...n)=>t.handleUpdateForm&&t.handleUpdateForm(...n),["prevent"])),class:"mb-5 pb-5"},[o("div",L,[f,a(o("input",{type:"number",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=n=>t.location.LocationID=n),required:""},null,512),[[s,t.location.LocationID]])]),o("div",_,[b,a(o("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=n=>t.location.LocationName=n),required:""},null,512),[[s,t.location.LocationName]])]),o("div",v,[D,a(o("input",{type:"number",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=n=>t.location.LocationStatusID=n),required:""},null,512),[[s,t.location.LocationStatusID]])]),h],32)])])}const V=i(d,[["render",I]]);export{V as default};
