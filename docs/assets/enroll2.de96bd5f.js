import{_ as I,a as d,o,c as i,b as a,e as m,l as S,F as r,h,k as D,t as n}from"./index.d22901c2.js";const f={data(){return{student:{StudentID:this.$route.params.StudentID,FirstName:"",MiddleName:"",LastName:""},Class:{ClassID:"",CourseName:"",Status:"",WeekDay:"",StartTime:"",EndTime:""},student_class:{ClassID:"",StudentID:"",StudentClassStatusID:""},students:[],statuses:[],classes:[],studentsID:"",classID:""}},async created(){let u=this.APIBASEURL+":"+this.APIPORT+"/api/student/";await d.get(u).then(l=>{this.students=l.data}).catch(l=>{console.log(l)});let s=this.APIBASEURL+":"+this.APIPORT+"/api/reports/class_detail_list1";await d.get(s).then(l=>{this.classes=l.data.filter(e=>e.Status.includes("Open")||e.Status.includes("Waitlist")),console.log(this.classes)}).catch(l=>{console.log(l)});let p=this.APIBASEURL+":"+this.APIPORT+"/api/student_classstatus";await d.get(p).then(l=>{this.statuses=l.data})},methods:{async submitForm(){let u=this.APIBASEURL+":"+this.APIPORT+"/api/student_class/";this.student_class.ClassID=this.Class.ClassID,this.student_class.StudentID=this.student.StudentID,await d.post(u,this.student_class).catch(s=>{console.log(s)})}}},b=a("h1",{class:"mt-5 mb-5"},"Enroll",-1),C={class:"form-control p-4"},A=a("label",{for:"",class:"form-label"},"Student",-1),P=["value"],R=a("label",{for:"",class:"form-label"},"Class",-1),v=a("option",{value:"",selected:"",disabled:""},"Select an Option",-1),L=["value"],U=a("label",{for:"",class:"form-label"},"Status",-1),g=a("option",{value:"",selected:"",disabled:""},"Select an Option",-1),E=["value"],N=a("button",{class:"btn mt-3"},"Enroll Student",-1);function k(u,s,p,l,e,_){return o(),i(r,null,[b,a("form",{onSubmit:s[3]||(s[3]=D((...t)=>_.submitForm&&_.submitForm(...t),["prevent"])),class:"wrapper2"},[a("fieldset",C,[A,m(a("select",{name:"",id:"",class:"form-select mb-4","onUpdate:modelValue":s[0]||(s[0]=t=>e.student.StudentID=t),disabled:""},[(o(!0),i(r,null,h(e.students,(t,c)=>(o(),i("option",{key:c,value:t.StudentID},n(t.FirstName)+" "+n(t.MiddleName)+" "+n(t.LastName),9,P))),128))],512),[[S,e.student.StudentID]]),R,m(a("select",{name:"",id:"","onUpdate:modelValue":s[1]||(s[1]=t=>e.Class.ClassID=t),class:"form-select mb-3"},[v,(o(!0),i(r,null,h(e.classes,(t,c)=>(o(),i("option",{key:c,value:t.ClassID},n(t.CourseName)+"\xA0|\xA0 "+n(t.WeekDay)+"\xA0|\xA0 "+n(t.StartTime)+"-"+n(t.EndTime),9,L))),128))],512),[[S,e.Class.ClassID]]),U,m(a("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s[2]||(s[2]=t=>e.student_class.StudentClassStatusID=t)},[g,(o(!0),i(r,null,h(e.statuses,t=>(o(),i("option",{value:t.StudentClassStatusID,key:t.StudentClassStatusID},n(t.Status),9,E))),128))],512),[[S,e.student_class.StudentClassStatusID]])]),N],32)],64)}const T=I(f,[["render",k]]);export{T as default};
