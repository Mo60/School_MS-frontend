import{_ as m,a as o,o as r,c,b as t,e as S,v as h,F as p,h as g,t as b,f as I}from"./index.33ae6dcc.js";const _={data(){return{guardianStatus:{GuardianStatusID:null,Status:""},guardianStatuses:[]}},created(){let a=this.APIBASEURL+":"+this.APIPORT+"/api/guardianStatus";o.get(a).then(e=>{this.guardianStatuses=e.data}).catch(e=>{console.log(e)})},methods:{editBt(a){document.getElementById(`${a+1789147}`).disabled=!1,document.getElementById(`${a+3789147}`).disabled=!0,document.getElementById(`${a+4789147}`).disabled=!1},saveBt(a,e){document.getElementById(`${a+1789147}`).disabled=!0,document.getElementById(`${a+3789147}`).disabled=!1,document.getElementById(`${a+4789147}`).disabled=!0;let n=this.APIBASEURL+":"+this.APIPORT+`/api/guardianStatus/${e.GuardianStatusID}`;o.put(n,e).then(d=>{}).catch(d=>{console.log(d)})},async saveNew(a){if(a.Status){let e=this.APIBASEURL+":"+this.APIPORT+"/api/guardianStatus/";await o.post(e,a).then(n=>{this.guardianStatuses.push(n.data),this.guardianStatus.Status=""}).catch(n=>{console.log(n)})}}}},B=t("h1",{class:"mb-5 mt-5"},"Guardian Status",-1),f={class:"tablewrapper"},v={class:"table table-striped"},y=t("thead",{class:"table-dark"},[t("tr",null,[t("th",null,"GuardianID Status ID"),t("th",null,"Guardian Status"),t("th",null,"Action")])],-1),D=t("td",null,[t("input",{class:"form-control ds-input",style:{},disabled:"",placeholder:"Add new Status: "})],-1),G=["id","onUpdate:modelValue"],A=["id","onClick"],E=["id","onClick"];function k(a,e,n,d,u,l){return r(),c(p,null,[B,t("div",f,[t("table",v,[y,t("tbody",null,[t("tr",null,[D,t("td",null,[S(t("input",{class:"form-control ds-input",style:{width:"150px"},"onUpdate:modelValue":e[0]||(e[0]=s=>u.guardianStatus.Status=s)},null,512),[[h,u.guardianStatus.Status]])]),t("td",null,[t("button",{class:"btn",onClick:e[1]||(e[1]=s=>l.saveNew(u.guardianStatus))},"Save")])]),(r(!0),c(p,null,g(u.guardianStatuses,s=>(r(),c("tr",{key:s.GuardianStatusID},[t("td",null,b(s.GuardianStatusID),1),t("td",null,[S(t("input",{id:s.GuardianStatusID+1789147,class:"form-control ds-input",style:{width:"150px"},"onUpdate:modelValue":i=>s.Status=i,disabled:""},null,8,G),[[h,s.Status]])]),t("td",null,[t("button",{id:s.GuardianStatusID+3789147,class:"btn",onClick:i=>l.editBt(s.GuardianStatusID)},"Edit",8,A),I(" | "),t("button",{id:s.GuardianStatusID+4789147,class:"btn",onClick:i=>l.saveBt(s.GuardianStatusID,s),disabled:""},"Save",8,E)])]))),128))])])])],64)}const R=m(_,[["render",k]]);export{R as default};
