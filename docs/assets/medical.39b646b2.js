import{_ as b,a as c,o as u,c as r,b as e,e as m,v as h,F as p,h as I,t as _,f as B}from"./index.33ae6dcc.js";const C={data(){return{medical:{MedicalID:null,Condition:""},medicals:[]}},created(){console.log(this.medicals);let t=this.APIBASEURL+":"+this.APIPORT+"/api/medical";c.get(t).then(l=>{this.medicals=l.data}).catch(l=>{console.log(l)})},methods:{editBt(t){document.getElementById(`${t+1789147}`).disabled=!1,document.getElementById(`${t+3789147}`).disabled=!0,document.getElementById(`${t+4789147}`).disabled=!1},saveBt(t,l){document.getElementById(`${t+1789147}`).disabled=!0,document.getElementById(`${t+3789147}`).disabled=!1,document.getElementById(`${t+4789147}`).disabled=!0;let i=this.APIBASEURL+":"+this.APIPORT+`/api/medical/${l.MedicalID}`;c.put(i,l).then(s=>{}).catch(s=>{console.log(s)})},async saveNew(t){if(t.Condition){let l=this.APIBASEURL+":"+this.APIPORT+"/api/medical/";await c.post(l,t).then(i=>{this.medicals.push(i.data),this.medical.Condition=""}).catch(i=>{console.log(i)})}}}},f=e("h1",{class:"mb-5 mt-5"},"Medical Condition",-1),g={class:"tablewrapper"},v={class:"table table-striped"},y=e("thead",{class:"table-dark"},[e("tr",null,[e("th",null,"Medical ID"),e("th",null,"Medical Condition"),e("th",null,"Action")])],-1),M=e("td",null,[e("input",{class:"form-control ds-input",style:{width:"200px"},disabled:"",placeholder:"Add new Condition: "})],-1),D=["id","onUpdate:modelValue"],A=["id","onClick"],E=["id","onClick"];function k(t,l,i,s,n,a){return u(),r(p,null,[f,e("div",g,[e("table",v,[y,e("tbody",null,[e("tr",null,[M,e("td",null,[m(e("input",{class:"form-control ds-input",style:{width:"250px"},"onUpdate:modelValue":l[0]||(l[0]=d=>n.medical.Condition=d)},null,512),[[h,n.medical.Condition]])]),e("td",null,[e("button",{class:"btn",onClick:l[1]||(l[1]=d=>a.saveNew(n.medical))},"Save")])]),(u(!0),r(p,null,I(n.medicals,d=>(u(),r("tr",{key:d.MedicalID},[e("td",null,_(d.MedicalID),1),e("td",null,[m(e("input",{id:d.MedicalID+1789147,class:"form-control ds-input",style:{width:"200px"},"onUpdate:modelValue":o=>d.Condition=o,disabled:""},null,8,D),[[h,d.Condition]])]),e("td",null,[e("button",{id:d.MedicalID+3789147,class:"btn",onClick:o=>a.editBt(d.MedicalID)},"Edit",8,A),B(" | "),e("button",{id:d.MedicalID+4789147,class:"btn",onClick:o=>a.saveBt(d.MedicalID,d),disabled:""},"Save",8,E)])]))),128))])])])],64)}const x=b(C,[["render",k]]);export{x as default};
