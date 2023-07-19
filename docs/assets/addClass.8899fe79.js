import{u as C,_ as x,s as S,a as c,o as l,c as i,b as e,k as y,e as m,l as p,F as f,h as I,v as b,t as u}from"./index.c398c6c7.js";const _=t=>{if(t=C(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let a in t)return!0;return!1}return!!String(t).length};function d(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return n=>(n=C(n),!_(n)||a.every(o=>o.test(n)))}d(/^[a-zA-Z]*$/);d(/^[a-zA-Z0-9]*$/);d(/^\d*(\.\d+)?$/);const A=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;d(A);function g(t){return typeof t=="string"&&(t=t.trim()),_(t)}var h={$validator:g,$message:"Value is required",$params:{type:"required"}};const R=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;d(R);d(/(^[0-9]*$)|(^-[0-9]+$)/);d(/^[-]?\d*(\.\d+)?$/);const P={api_host:"172.26.54.21",api_port:"8082",data(){return{v$:S(),Class:{CourseID:"",SemesterID:"",TimeBlockID:"",DayID:"",ClassStatusID:"",Capacity:"",MaxCapacity:"",Lesson:"",Notes:""},Faculty_Class:{ClassID:"",FacultyID:""},courses:[],semeseters:[],timeBlocks:[],days:[],classstatuses:[],TeacherList:[],ClassID:this.$route.params.ClassID}},methods:{validations(){return{Class:{CourseID:{required:h},SemesterID:{required:h},TimeBlockID:{required:h},DayID:{required:h},ClassStatusID:{required:h},Lesson:{required:h}}}},async handleSubmitForm(){this.v$.$validate(),this.v$.$error?alert("Form failed validation"):alert("Class is successfully added");let t=this.APIBASEURL+":"+this.APIPORT+"/api/class/";await c.post(t,this.Class).then(a=>{this.$router.push("/classes"),this.Class={ClassID:"",CourseID:"",SemesterID:"",TimeBlockID:"",DayID:"",ClassStatusID:"",Capacity:"",MaxCapacity:"",Lesson:"",Notes:""}}).catch(a=>{console.log(a)}).catch(a=>{console.log(a)})}},async created(){let t=this.APIBASEURL+":"+this.APIPORT+"/api/faculty/";await c.get(t).then(s=>{this.TeacherList=s.data}).catch(s=>{console.log(s)});let a=this.APIBASEURL+":"+this.APIPORT+"/api/course/";await c.get(a).then(s=>{this.courses=s.data}).catch(s=>{console.log(s)});let r=this.APIBASEURL+":"+this.APIPORT+"/api/semester/";await c.get(r).then(s=>{this.semeseters=s.data}).catch(s=>{console.log(s)});let n=this.APIBASEURL+":"+this.APIPORT+"/api/timeblock/";await c.get(n).then(s=>{this.timeBlocks=s.data}).catch(s=>{console.log(s)});let o=this.APIBASEURL+":"+this.APIPORT+"/api/day/";await c.get(o).then(s=>{this.days=s.data}).catch(s=>{console.log(s)});let D=this.APIBASEURL+":"+this.APIPORT+"/api/classstatus/";await c.get(D).then(s=>{this.classstatuses=s.data}).catch(s=>{console.log(s)})}},T=e("h1",{class:"mt-5"},"Add Class",-1),B={class:"wrapper3"},L={class:"form-control"},U={class:"row mb-4"},k={class:"col"},v=e("label",{for:"",class:"form-label"},"* Course",-1),z=["value"],w={class:"col"},q=e("label",{for:"",class:"form-label"},"* Semester",-1),E=["value"],V={class:"row mb-4"},F={class:"col"},O=e("label",{for:"",class:"form-label"},"* Time Block",-1),N=["value"],$={class:"col"},M=e("label",{for:"",class:"form-label"},"* Day",-1),Z=["value"],j={class:"row mb-4"},W={class:"col"},G=e("label",{for:"",class:"form-label"},"* Class Status",-1),H=["value"],J={class:"col"},K=e("label",{for:"",class:"form-label"},"Capacity",-1),Q=e("button",{class:"btn mt-3"},"Submit",-1);function X(t,a,r,n,o,D){return l(),i(f,null,[T,e("div",B,[e("form",{onSubmit:a[6]||(a[6]=y((...s)=>D.handleSubmitForm&&D.handleSubmitForm(...s),["prevent"])),class:"mb-5"},[e("fieldset",L,[e("div",U,[e("div",k,[v,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a[0]||(a[0]=s=>o.Class.CourseID=s),required:""},[(l(!0),i(f,null,I(o.courses,s=>(l(),i("option",{value:s.CourseID,key:s.CourseID},u(s.CourseName)+" "+u(s.Status),9,z))),128))],512),[[p,o.Class.CourseID]])]),e("div",w,[q,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a[1]||(a[1]=s=>o.Class.SemesterID=s),required:""},[(l(!0),i(f,null,I(o.semeseters,s=>(l(),i("option",{value:s.SemesterID,key:s.SemesterID},u(s.Semester),9,E))),128))],512),[[p,o.Class.SemesterID]])])]),e("div",V,[e("div",F,[O,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a[2]||(a[2]=s=>o.Class.TimeBlockID=s),required:""},[(l(!0),i(f,null,I(o.timeBlocks,s=>(l(),i("option",{value:s.TimeblockID,key:s.TimeBlockID},u(s.StartTime)+" - "+u(s.EndTime),9,N))),128))],512),[[p,o.Class.TimeBlockID]])]),e("div",$,[M,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a[3]||(a[3]=s=>o.Class.DayID=s),required:""},[(l(!0),i(f,null,I(o.days,s=>(l(),i("option",{value:s.DayID,key:s.DayID},u(s.WeekDay),9,Z))),128))],512),[[p,o.Class.DayID]])])]),e("div",j,[e("div",W,[G,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a[4]||(a[4]=s=>o.Class.ClassStatusID=s),required:""},[(l(!0),i(f,null,I(o.classstatuses,s=>(l(),i("option",{value:s.ClassStatusID,key:s.ClassStatusID},u(s.Status),9,H))),128))],512),[[p,o.Class.ClassStatusID]])]),e("div",J,[K,m(e("input",{type:"number",class:"form-control","onUpdate:modelValue":a[5]||(a[5]=s=>o.Class.Capacity=s)},null,512),[[b,o.Class.Capacity]])])])]),Q],32)])],64)}const ss=x(P,[["render",X]]);export{ss as default};
