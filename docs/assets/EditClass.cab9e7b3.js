import{_,a as i,o,c as a,b as e,k as S,e as m,l as I,F as d,h as p,v as y,t as h}from"./index.12e88820.js";const b={name:"AddClass",data(){return{Class:{CourseID:"",SemesterID:"",TimeblockID:"",DayID:"",ClassStatusID:"",Capacity:"",FacultyID:"",MaxCapacity:"",Lesson:"",Notes:""},courses:[],semeseters:[],timeBlocks:[],days:[],classstatuses:[],TeacherList:[],ClassID:this.$route.params.ClassID,faculty_class_id:""}},methods:{async handleSubmitForm(){let D=this.APIBASEURL+":"+this.APIPORT+`/api/class/${this.ClassID}`;await i.put(D,this.Class).then(t=>{this.Class={CourseID:"",SemesterID:"",TimeblockID:"",DayID:"",ClassStatusID:"",Capacity:"",FacultyID:"",MaxCapacity:"",Lesson:"",Notes:""}}).catch(t=>{console.log(t)}),setTimeout(()=>{this.$router.push("/classes")},500)}},async created(){let D=this.APIBASEURL+":"+this.APIPORT+"/api/faculty/";i.get(D).then(t=>{this.TeacherList=t.data}).catch(t=>{console.log(t)}).then(()=>{let t=this.APIBASEURL+":"+this.APIPORT+"/api/course/";i.get(t).then(c=>{this.courses=c.data}).catch(c=>{console.log(c)}).then(()=>{let c=this.APIBASEURL+":"+this.APIPORT+"/api/semester/";i.get(c).then(r=>{this.semeseters=r.data}).catch(r=>{console.log(r)}).then(()=>{let r=this.APIBASEURL+":"+this.APIPORT+"/api/timeblock/";i.get(r).then(l=>{this.timeBlocks=l.data}).catch(l=>{console.log(l)}).then(()=>{let l=this.APIBASEURL+":"+this.APIPORT+"/api/day/";i.get(l).then(n=>{this.days=n.data}).catch(n=>{console.log(n)}).then(()=>{let n=this.APIBASEURL+":"+this.APIPORT+"/api/classstatus/";i.get(n).then(s=>{this.classstatuses=s.data}).catch(s=>{console.log(s)}).then(()=>{let s=this.APIBASEURL+":"+this.APIPORT+`/api/reports/class_view/${this.ClassID}`;i.get(s).then(u=>{this.Class=u.data[0]}).catch(u=>{console.log(u)}).then(()=>{let u=this.APIBASEURL+":"+this.APIPORT+`/api/class/${this.ClassID}`;i.get(u).then(C=>{}).catch(C=>{console.log(C)})}).catch(u=>{console.log(u)})})})}).catch(l=>{console.log(l)})}).catch(r=>{console.log(r)})}).catch(c=>{console.log(c)})}).catch(t=>{console.log(t)})}},f=e("h1",{class:"mt-5"},"Edit Class",-1),A={class:"wrapper3"},P={class:"form-control"},R={class:"row mb-4"},v={class:"col"},g=e("label",{for:"",class:"form-label"},"Course",-1),U=["value"],L={class:"col"},T=e("label",{for:"",class:"form-label"},"Semester",-1),k=["value"],B={class:"row mb-4"},E={class:"col"},O=e("label",{for:"",class:"form-label"},"Time Block",-1),w=["value"],x={class:"col"},F=e("label",{for:"",class:"form-label"},"Day",-1),V=["value"],q={class:"row mb-4"},M={class:"col"},N=e("label",{for:"",class:"form-label"},"Class Status",-1),W=["value"],j={class:"col"},z=e("label",{for:"",class:"form-label"},"Capacity",-1),G=e("button",{class:"btn mt-3"},"Submit",-1);function H(D,t,c,r,l,n){return o(),a(d,null,[f,e("div",A,[e("form",{onSubmit:t[6]||(t[6]=S((...s)=>n.handleSubmitForm&&n.handleSubmitForm(...s),["prevent"])),class:"mb-5"},[e("fieldset",P,[e("div",R,[e("div",v,[g,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":t[0]||(t[0]=s=>l.Class.CourseID=s),required:""},[(o(!0),a(d,null,p(l.courses,s=>(o(),a("option",{value:s.CourseID,key:s.CourseID},h(s.CourseName)+" "+h(s.Status),9,U))),128))],512),[[I,l.Class.CourseID]])]),e("div",L,[T,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":t[1]||(t[1]=s=>l.Class.SemesterID=s),required:""},[(o(!0),a(d,null,p(l.semeseters,s=>(o(),a("option",{value:s.SemesterID,key:s.SemesterID},h(s.Semester),9,k))),128))],512),[[I,l.Class.SemesterID]])])]),e("div",B,[e("div",E,[O,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":t[2]||(t[2]=s=>l.Class.TimeblockID=s),required:""},[(o(!0),a(d,null,p(l.timeBlocks,s=>(o(),a("option",{value:s.TimeblockID,key:s.TimeBlockID},h(s.StartTime)+" - "+h(s.EndTime),9,w))),128))],512),[[I,l.Class.TimeblockID]])]),e("div",x,[F,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":t[3]||(t[3]=s=>l.Class.DayID=s),required:""},[(o(!0),a(d,null,p(l.days,s=>(o(),a("option",{value:s.DayID,key:s.DayID},h(s.WeekDay),9,V))),128))],512),[[I,l.Class.DayID]])])]),e("div",q,[e("div",M,[N,m(e("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":t[4]||(t[4]=s=>l.Class.ClassStatusID=s),required:""},[(o(!0),a(d,null,p(l.classstatuses,s=>(o(),a("option",{value:s.ClassStatusID,key:s.ClassStatusID},h(s.Status),9,W))),128))],512),[[I,l.Class.ClassStatusID]])]),e("div",j,[z,m(e("input",{type:"number",class:"form-control","onUpdate:modelValue":t[5]||(t[5]=s=>l.Class.Capacity=s),required:""},null,512),[[y,l.Class.Capacity]])])])]),G],32)])],64)}const K=_(b,[["render",H]]);export{K as default};
