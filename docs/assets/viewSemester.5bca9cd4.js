import{_ as p,a as i,o as m,c,b as e,e as u,v as h,F as S,h as b,t as I,f as _}from"./index.33ae6dcc.js";const B={data(){return{semester:{SemesterID:null,Semester:""},Semesters:[]}},created(){console.log(this.Semesters);let t=this.APIBASEURL+":"+this.APIPORT+"/api/semester";i.get(t).then(s=>{this.Semesters=s.data}).catch(s=>{console.log(s)})},methods:{editBt(t){document.getElementById(`${t+1789147}`).disabled=!1,document.getElementById(`${t+3789147}`).disabled=!0,document.getElementById(`${t+4789147}`).disabled=!1},saveBt(t,s){document.getElementById(`${t+1789147}`).disabled=!0,document.getElementById(`${t+3789147}`).disabled=!1,document.getElementById(`${t+4789147}`).disabled=!0;let n=this.APIBASEURL+":"+this.APIPORT+`/api/semester/${s.SemesterID}`;i.put(n,s).then(a=>{}).catch(a=>{console.log(a)})},async saveNew(t){if(t.Semester){let s=this.APIBASEURL+":"+this.APIPORT+"/api/semester/";await i.post(s,t).then(n=>{this.Semesters.push(n.data),this.semester.Semester=""}).catch(n=>{console.log(n)})}}}},f=e("h1",{class:"mb-5 mt-5"},"Semesters",-1),v={class:"tablewrapper"},g={class:"table table-striped"},y=e("thead",{class:"table-dark"},[e("tr",null,[e("th",null,"Semester ID"),e("th",null,"Name"),e("th",null,"Action")])],-1),D=e("td",null,[e("input",{class:"form-control ds-input",style:{},disabled:"",placeholder:"Add new Semester: "})],-1),A=["id","onUpdate:modelValue"],E=["id","onClick"],k=["id","onClick"];function w(t,s,n,a,d,o){return m(),c(S,null,[f,e("div",v,[e("table",g,[y,e("tbody",null,[e("tr",null,[D,e("td",null,[u(e("input",{class:"form-control ds-input",style:{width:"150px"},"onUpdate:modelValue":s[0]||(s[0]=l=>d.semester.Semester=l)},null,512),[[h,d.semester.Semester]])]),e("td",null,[e("button",{class:"btn",onClick:s[1]||(s[1]=l=>o.saveNew(d.semester))},"Save")])]),(m(!0),c(S,null,b(d.Semesters,l=>(m(),c("tr",{key:l.SemesterID},[e("td",null,I(l.SemesterID),1),e("td",null,[u(e("input",{id:l.SemesterID+1789147,class:"form-control ds-input",style:{width:"150px"},"onUpdate:modelValue":r=>l.Semester=r,disabled:""},null,8,A),[[h,l.Semester]])]),e("td",null,[e("button",{id:l.SemesterID+3789147,class:"btn",onClick:r=>o.editBt(l.SemesterID)},"Edit",8,E),_(" | "),e("button",{id:l.SemesterID+4789147,class:"btn",onClick:r=>o.saveBt(l.SemesterID,l),disabled:""},"Save",8,k)])]))),128))])])])],64)}const R=p(B,[["render",w]]);export{R as default};
