import{_ as h,a as o,o as i,c as r,b as t,e as y,v as S,F as p,h as m,t as b,f}from"./index.7f8ff7e0.js";const I={data(){return{facultyStatus:{FacultyStatusID:null,Status:""},FacultyStatuses:[]}},created(){console.log(this.FacultyStatuses);let s=this.APIBASEURL+":"+this.APIPORT+"/api/facultyStatus";o.get(s).then(e=>{this.FacultyStatuses=e.data}).catch(e=>{console.log(e)})},methods:{editBt(s){document.getElementById(`${s+1789147}`).disabled=!1,document.getElementById(`${s+3789147}`).disabled=!0,document.getElementById(`${s+4789147}`).disabled=!1},saveBt(s,e){document.getElementById(`${s+1789147}`).disabled=!0,document.getElementById(`${s+3789147}`).disabled=!1,document.getElementById(`${s+4789147}`).disabled=!0;let l=this.APIBASEURL+":"+this.APIPORT+`/api/facultyStatus/${e.FacultyStatusID}`;o.put(l,e).then(n=>{}).catch(n=>{console.log(n)})},async saveNew(s){if(s.Status){let e=this.APIBASEURL+":"+this.APIPORT+"/api/facultyStatus/";await o.post(e,s).then(l=>{this.FacultyStatuses.push(l.data),this.facultyStatus.Status=""}).catch(l=>{console.log(l)})}}}},_={class:"tablewrapper"},F=t("h1",{class:"mb-5 mt-5"},"Faculty Status",-1),B={class:"table table-striped"},g=t("thead",{class:"table-dark"},[t("tr",null,[t("th",null,"Faculty Status ID"),t("th",null,"Faculty Status"),t("th",null,"Action")])],-1),v=t("td",null,[t("input",{class:"form-control ds-input",style:{},disabled:"",placeholder:"Add new Faculty Status: "})],-1),D=["id","onUpdate:modelValue"],A=["id","onClick"],E=["id","onClick"];function k(s,e,l,n,u,c){return i(),r("div",_,[F,t("table",B,[g,t("tbody",null,[t("tr",null,[v,t("td",null,[y(t("input",{class:"form-control ds-input",style:{width:"100px"},"onUpdate:modelValue":e[0]||(e[0]=a=>u.facultyStatus.Status=a)},null,512),[[S,u.facultyStatus.Status]])]),t("td",null,[t("button",{class:"btn",onClick:e[1]||(e[1]=a=>c.saveNew(u.facultyStatus))},"Save")])]),(i(!0),r(p,null,m(u.FacultyStatuses,a=>(i(),r("tr",{key:a.FacultyStatusID},[t("td",null,b(a.FacultyStatusID),1),t("td",null,[y(t("input",{id:a.FacultyStatusID+1789147,class:"form-control ds-input",style:{width:"100px"},"onUpdate:modelValue":d=>a.Status=d,disabled:""},null,8,D),[[S,a.Status]])]),t("td",null,[t("button",{id:a.FacultyStatusID+3789147,class:"btn",onClick:d=>c.editBt(a.FacultyStatusID)},"Edit",8,A),f(" | "),t("button",{id:a.FacultyStatusID+4789147,class:"btn",onClick:d=>c.saveBt(a.FacultyStatusID,a),disabled:""},"Save",8,E)])]))),128))])])])}const R=h(I,[["render",k]]);export{R as default};
