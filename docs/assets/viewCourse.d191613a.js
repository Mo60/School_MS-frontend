import v from"./classStatus.cf1720eb.js";import{_ as B,a as i,r as I,o as n,c as d,b as e,d as b,w as U,i as A,F as c,h as C,e as r,v as m,l as S,f as D,t as _}from"./index.88ae9c90.js";const x={components:{CourseStatus:v},data(){return{courses:[],courseList:[],course:{CourseID:null,CourseName:"",Description:"",CourseStatusID:""},searchByAll:"",courseStatuses:[],courseStatus:{CourseStatusID:"",Status:""}}},async created(){let t=this.APIBASEURL+":"+this.APIPORT+"/api/course";await i.get(t).then(l=>{this.courses=l.data,this.courseList=l.data}).catch(l=>{console.log(l)});let o=this.APIBASEURL+":"+this.APIPORT+"/api/courseStatus";i.get(o).then(l=>{this.courseStatuses=l.data}).catch(l=>{console.log(l)})},methods:{searchAll(){const t=this.courses.filter(o=>o.CourseName.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1||o.Status.toUpperCase().indexOf(this.searchByAll.toUpperCase()));this.courseList=t},editBt(t){document.getElementById(`${t+1789147}`).disabled=!1,document.getElementById(`${t+2789147}`).disabled=!1,document.getElementById(`${t+21789147}`).disabled=!1,document.getElementById(`${t+3789147}`).disabled=!0,document.getElementById(`${t+4789147}`).disabled=!1},saveBt(t,o){document.getElementById(`${t+1789147}`).disabled=!0,document.getElementById(`${t+2789147}`).disabled=!0,document.getElementById(`${t+21789147}`).disabled=!0,document.getElementById(`${t+3789147}`).disabled=!1,document.getElementById(`${t+4789147}`).disabled=!0;let l=this.APIBASEURL+":"+this.APIPORT+`/api/course/${o.CourseID}`;i.put(l,o).then(p=>{}).catch(p=>{console.log(p)})},async saveNew(t){if(t.CourseName){let o=this.APIBASEURL+":"+this.APIPORT+"/api/course/";await i.post(o,t).then(l=>{this.courses.push(l.data),this.course.CourseName="",this.course.Description="",this.course.CourseStatusID=""}).catch(l=>{console.log(l)})}}}},g=e("h1",{class:"mb-5 mt-5"},"Courses",-1),w={key:0,class:"flex-wrapper"},E={class:"empty-arr"},N=e("p",null,"No Courses Found",-1),k={class:"btn mt-3"},L={class:"tablewrapper"},V={class:"table table-striped"},P=e("thead",{class:"table-dark"},[e("tr",null,[e("th",null,"Course ID"),e("th",null,"Course Name"),e("th",null,"Description"),e("th",null,"Status"),e("th",null,"Action")])],-1),R=["id","onUpdate:modelValue"],O=["id","onUpdate:modelValue"],T=["id","onUpdate:modelValue"],M=["value"],$=["id","onClick"],F=["id","onClick"],j=e("td",null,[e("input",{class:"form-control ds-input",style:{width:"200px"},disabled:"",placeholder:"Add new Course: "})],-1),q=["value"],z={class:"modal fade",id:"exampleModal",tabindex:"0","aria-labelledby":"exampleModalLabel2","aria-hidden":"true"},G={class:"modal-dialog modal-xl"},H={class:"modal-content"},J=e("div",{class:"modal-header"},[e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),K={class:"modal-body"},Q=e("div",{class:"modal-footer"},null,-1);function W(t,o,l,p,a,h){const f=I("router-link"),y=I("courseStatus");return n(),d(c,null,[g,a.courses.length==0&&t.loaded?(n(),d("div",w,[e("div",E,[N,e("a",k,[b(f,{to:{name:"addcourse"}},{default:U(()=>[D("Add Course")]),_:1})])])])):A("",!0),e("div",L,[e("table",V,[P,e("tbody",null,[(n(!0),d(c,null,C(a.courseList,s=>(n(),d("tr",{key:s.CourseID},[e("td",null,_(s.CourseID),1),e("td",null,[r(e("input",{id:s.CourseID+1789147,class:"form-control ds-input",style:{width:"200px"},"onUpdate:modelValue":u=>s.CourseName=u,disabled:""},null,8,R),[[m,s.CourseName]])]),e("td",null,[r(e("input",{id:s.CourseID+2789147,class:"form-control ds-input",style:{width:"300px"},"onUpdate:modelValue":u=>s.Description=u,disabled:""},null,8,O),[[m,s.Description]])]),e("td",null,[r(e("select",{id:s.CourseID+21789147,disabled:"",name:"",class:"form-select","onUpdate:modelValue":u=>s.CourseStatusID=u},[(n(!0),d(c,null,C(a.courseStatuses,u=>(n(),d("option",{value:u.CourseStatusID,class:"form-select",key:u.CourseStatusID},_(u.Status),9,M))),128))],8,T),[[S,s.CourseStatusID]])]),e("td",null,[e("button",{id:s.CourseID+3789147,class:"btn",onClick:u=>h.editBt(s.CourseID)},"Edit",8,$),D(" | "),e("button",{id:s.CourseID+4789147,class:"btn",onClick:u=>h.saveBt(s.CourseID,s),disabled:""},"Save",8,F)])]))),128)),e("tr",null,[j,e("td",null,[r(e("input",{class:"form-control ds-input",style:{width:"150px"},"onUpdate:modelValue":o[0]||(o[0]=s=>a.course.CourseName=s)},null,512),[[m,a.course.CourseName]])]),e("td",null,[r(e("input",{class:"form-control ds-input",style:{width:"300px"},"onUpdate:modelValue":o[1]||(o[1]=s=>a.course.Description=s)},null,512),[[m,a.course.Description]])]),e("td",null,[r(e("select",{name:"",class:"form-select","onUpdate:modelValue":o[2]||(o[2]=s=>a.course.CourseStatusID=s)},[(n(!0),d(c,null,C(a.courseStatuses,s=>(n(),d("option",{value:s.CourseStatusID,class:"form-select",key:s.CourseStatusID},_(s.Status),9,q))),128))],512),[[S,a.course.CourseStatusID]])]),e("td",null,[e("button",{class:"btn",onClick:o[3]||(o[3]=s=>h.saveNew(a.course))},"Save")])])])])]),e("div",z,[e("div",G,[e("div",H,[J,e("div",K,[b(y)]),Q])])])],64)}const Z=B(x,[["render",W]]);export{Z as default};
