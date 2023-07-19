import{_ as r,a as n,o as u,c as m,b as t,k as d,e as o,v as a,F as f}from"./index.c398c6c7.js";const p={name:"AddFaculty",data(){return{faculty:{FirstName:"",MiddleName:"",LastName:"",Email:"",PhoneNumber:"",CellNumber:"",Notes:""},facultyID:this.$route.params.FacultyID}},methods:{submitForm(){let i=this.APIBASEURL+":"+this.APIPORT+`/api/faculty/${this.facultyID}`;n.put(i,this.faculty).then(l=>{this.$router.push("/faculty")}).catch(l=>{console.log(l)})}},created(){let i=this.APIBASEURL+":"+this.APIPORT+`/api/faculty/${this.facultyID}`;n.get(i).then(l=>{this.faculty=l.data})}},_=t("h1",{class:"mt-5"},"Edit Faculty",-1),y={class:"wrapper"},b={class:"form-control p-3"},h={class:"row mb-3"},N={class:"col"},v=t("label",{class:"form-label"},"* First Name",-1),F={class:"col"},U=t("label",{class:"form-label"},"Middle Name",-1),x={class:"col"},P=t("label",{class:"form-label"},"* Last Name",-1),E={class:"row mb-3"},V={class:"col"},I=t("div",{class:"form-label"},"Title",-1),L={class:"col"},A=t("label",{class:"form-label"}," * Email",-1),T={class:"col"},w=t("label",{class:"form-label"},"Cell Number",-1),M={class:"col"},R=t("label",{class:"form-label"},"Phone Number",-1),B={class:"row mb-3"},D={class:"col"},q=t("label",{class:"form-label"},"Notes",-1),C=t("div",{class:"text-center m-3"},null,-1),S=t("button",{class:"btn mt-4"},"Submit",-1);function g(i,l,k,O,s,c){return u(),m(f,null,[_,t("div",y,[t("form",{onSubmit:l[8]||(l[8]=d((...e)=>c.submitForm&&c.submitForm(...e),["prevent"]))},[t("fieldset",b,[t("div",h,[t("div",N,[v,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":l[0]||(l[0]=e=>s.faculty.FirstName=e),required:""},null,512),[[a,s.faculty.FirstName]])]),t("div",F,[U,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=e=>s.faculty.MiddleName=e)},null,512),[[a,s.faculty.MiddleName]])]),t("div",x,[P,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":l[2]||(l[2]=e=>s.faculty.LastName=e),required:""},null,512),[[a,s.faculty.LastName]])])]),t("div",E,[t("div",V,[I,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":l[3]||(l[3]=e=>s.faculty.Title=e)},null,512),[[a,s.faculty.Title]])]),t("div",L,[A,o(t("input",{type:"email",class:"form-control","onUpdate:modelValue":l[4]||(l[4]=e=>s.faculty.Email=e)},null,512),[[a,s.faculty.Email]])]),t("div",T,[w,o(t("input",{type:"phone",class:"form-control",placeholder:"123-456-7890",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}","onUpdate:modelValue":l[5]||(l[5]=e=>s.faculty.CellNumber=e),required:""},null,512),[[a,s.faculty.CellNumber]])]),t("div",M,[R,o(t("input",{type:"phone",class:"form-control",placeholder:"123-456-7890",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}","onUpdate:modelValue":l[6]||(l[6]=e=>s.faculty.PhoneNumber=e),required:""},null,512),[[a,s.faculty.PhoneNumber]])])]),t("div",B,[t("div",D,[q,o(t("textarea",{name:"",id:"",class:"form-control","onUpdate:modelValue":l[7]||(l[7]=e=>s.faculty.Notes=e)},null,512),[[a,s.faculty.Notes]])])]),C]),S],32)])],64)}const z=r(p,[["render",g]]);export{z as default};