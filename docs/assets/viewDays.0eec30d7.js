import{_ as p,a as c,o as u,c as y,b as e,e as r,v as h,F as D,h as m,t as b,f as I}from"./index.7f8ff7e0.js";const _={data(){return{day:{DayID:null,WeekDay:""},days:[]}},created(){console.log(this.days);let t=this.APIBASEURL+":"+this.APIPORT+"/api/day";c.get(t).then(s=>{this.days=s.data}).catch(s=>{console.log(s)})},methods:{editBt(t){document.getElementById(`${t+1789147}`).disabled=!1,document.getElementById(`${t+3789147}`).disabled=!0,document.getElementById(`${t+4789147}`).disabled=!1},saveBt(t,s){document.getElementById(`${t+1789147}`).disabled=!0,document.getElementById(`${t+3789147}`).disabled=!1,document.getElementById(`${t+4789147}`).disabled=!0;let l=this.APIBASEURL+":"+this.APIPORT+`/api/day/${s.DayID}`;c.put(l,s).then(n=>{}).catch(n=>{console.log(n)})},async saveNew(t){if(t.WeekDay){let s=this.APIBASEURL+":"+this.APIPORT+"/api/day/";await c.post(s,t).then(l=>{this.days.push(l.data),this.day.WeekDay=""}).catch(l=>{console.log(l)})}}}},k=e("h1",{class:"mb-5 mt-5"},"Days",-1),B={class:"tablewrapper"},f={class:"table table-striped"},v=e("thead",{class:"table-dark"},[e("tr",null,[e("th",null,"Day ID"),e("th",null,"Class Days"),e("th",null,"Action")])],-1),g=e("td",null,[e("input",{class:"form-control ds-input",style:{width:"200px"},disabled:"",placeholder:"Add new Class Days: "})],-1),A=["id","onUpdate:modelValue"],E=["id","onClick"],w=["id","onClick"];function x(t,s,l,n,d,o){return u(),y(D,null,[k,e("div",B,[e("table",f,[v,e("tbody",null,[e("tr",null,[g,e("td",null,[r(e("input",{class:"form-control ds-input",style:{width:"250px"},"onUpdate:modelValue":s[0]||(s[0]=a=>d.day.WeekDay=a)},null,512),[[h,d.day.WeekDay]])]),e("td",null,[e("button",{class:"btn",onClick:s[1]||(s[1]=a=>o.saveNew(d.day))},"Save")])]),(u(!0),y(D,null,m(d.days,a=>(u(),y("tr",{key:a.DayID},[e("td",null,b(a.DayID),1),e("td",null,[r(e("input",{id:a.DayID+1789147,class:"form-control ds-input",style:{width:"200px"},"onUpdate:modelValue":i=>a.WeekDay=i,disabled:""},null,8,A),[[h,a.WeekDay]])]),e("td",null,[e("button",{id:a.DayID+3789147,class:"btn",onClick:i=>o.editBt(a.DayID)},"Edit",8,E),I(" | "),e("button",{id:a.DayID+4789147,class:"btn",onClick:i=>o.saveBt(a.DayID,a),disabled:""},"Save",8,w)])]))),128))])])])],64)}const R=p(_,[["render",x]]);export{R as default};
