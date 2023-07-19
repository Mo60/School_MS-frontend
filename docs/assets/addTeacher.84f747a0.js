import{_ as r,a as c,o as m,c as u,b as l,k as d,e as o,v as a,F as f}from"./index.7f8ff7e0.js";const p={name:"AddFaculty",data(){return{faculty:{FirstName:"",MiddleName:"",LastName:"",Email:"",PhoneNumber:"",CellNumber:"",Notes:""}}},methods:{submitForm(){let i=this.APIBASEURL+":"+this.APIPORT+"/api/faculty/";c.post(i,this.faculty).then(t=>{this.$router.push("/faculty")}).catch(t=>{console.log(t)})}}},_=l("h1",{class:"mt-5"},"Add Faculty",-1),b={class:"wrapper"},y={class:"form-control p-3"},h={class:"row mb-3"},N={class:"col"},v=l("label",{class:"form-label"},"* First Name",-1),x={class:"col"},F=l("label",{class:"form-label"},"Middle Name",-1),U={class:"col"},V=l("label",{class:"form-label"},"* Last Name",-1),P={class:"row mb-3"},w={class:"col"},E=l("div",{class:"form-label"},"Position",-1),L={class:"col"},M=l("label",{class:"form-label"},"* Email",-1),A={class:"col"},T=l("label",{class:"form-label"},"Cell Number",-1),B={class:"col"},C=l("label",{class:"form-label"},"Phone Number",-1),k={class:"row mb-3"},q={class:"col"},R=l("label",{class:"form-label"},"Notes",-1),S=l("div",{class:"text-center m-3"},null,-1),g=l("button",{class:"btn mt-4"},"Submit",-1);function I(i,t,D,O,e,n){return m(),u(f,null,[_,l("div",b,[l("form",{onSubmit:t[8]||(t[8]=d((...s)=>n.submitForm&&n.submitForm(...s),["prevent"]))},[l("fieldset",y,[l("div",h,[l("div",N,[v,o(l("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>e.faculty.FirstName=s),required:""},null,512),[[a,e.faculty.FirstName]])]),l("div",x,[F,o(l("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>e.faculty.MiddleName=s)},null,512),[[a,e.faculty.MiddleName]])]),l("div",U,[V,o(l("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=s=>e.faculty.LastName=s),required:""},null,512),[[a,e.faculty.LastName]])])]),l("div",P,[l("div",w,[E,o(l("input",{type:"text",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=s=>e.faculty.Title=s)},null,512),[[a,e.faculty.Title]])]),l("div",L,[M,o(l("input",{type:"email",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=s=>e.faculty.Email=s),required:""},null,512),[[a,e.faculty.Email]])]),l("div",A,[T,o(l("input",{type:"phone",class:"form-control",placeholder:"123-456-7890",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}","onUpdate:modelValue":t[5]||(t[5]=s=>e.faculty.CellNumber=s)},null,512),[[a,e.faculty.CellNumber]])]),l("div",B,[C,o(l("input",{type:"phone",class:"form-control",placeholder:"123-456-7890",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}","onUpdate:modelValue":t[6]||(t[6]=s=>e.faculty.PhoneNumber=s)},null,512),[[a,e.faculty.PhoneNumber]])])]),l("div",k,[l("div",q,[R,o(l("textarea",{name:"",id:"",class:"form-control","onUpdate:modelValue":t[7]||(t[7]=s=>e.faculty.Notes=s)},null,512),[[a,e.faculty.Notes]])])]),S]),g],32)])],64)}const z=r(p,[["render",I]]);export{z as default};
