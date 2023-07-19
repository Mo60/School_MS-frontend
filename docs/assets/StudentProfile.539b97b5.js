import{_ as M,a as c,r as C,o as d,c as i,b as t,d as I,w as f,t as o,f as D,F as r,h as _,i as g,k as v,e as m,l as b,v as y,g as A}from"./index.c398c6c7.js";const R={data(){return{studentID:this.$route.params.StudentID,student:[],student_guardian:[],medical:[],medicalStatus:[],student_medical:[],student_medical2:{StudentID:this.$route.params.StudentID,MedicalID:"",Description:"",StudentMedicalStatusID:""},classes:[],statuses:[],student_class:{StudentID:parseInt(this.$route.params.StudentID),ClassID:"",StudentClassStatusID:""},student_class2:[],val:"",editData:{StudentID:parseInt(this.$route.params.StudentID),ClassID:"",StudentClassStatusID:""},editHealthData:{StudentID:parseInt(this.$route.params.StudentID),MedicalID:"",Description:"",StudentMedicalStatusID:""},editID:"",editID2:""}},created(){let u=this.APIBASEURL+":"+this.APIPORT+`/api/reports/view_students/${this.studentID}`;c.get(u).then(e=>{this.student=e.data,console.log(this.student)}).catch(e=>{console.log(e)}).then(()=>{let e=this.APIBASEURL+":"+this.APIPORT+`/api/reports/student_class_view/${this.studentID}`;c.get(e).then(a=>{this.student_class2=a.data,console.log(this.student_class)}).catch(a=>{console.log(a)}).then(()=>{let a=this.APIBASEURL+":"+this.APIPORT+"/api/medical";c.get(a).then(S=>{this.medical=S.data}).then(()=>{let S=this.APIBASEURL+":"+this.APIPORT+`/api/reports/student_medical_view/${this.studentID}`;c.get(S).then(l=>{this.student_medical=l.data}).catch(l=>{console.log(l)}).then(()=>{let l=this.APIBASEURL+":"+this.APIPORT+"/api/student_classstatus";c.get(l).then(n=>{this.statuses=n.data}).catch(n=>{console.log(n)}).then(()=>{let n=this.APIBASEURL+":"+this.APIPORT+"/api/reports/class_detail_list1";c.get(n).then(p=>{this.classes=p.data.filter(h=>h.Status.includes("Open")||h.Status.includes("Waitlist")),console.log(this.classes)}).then(()=>{let p=this.APIBASEURL+":"+this.APIPORT+`/api/reports/guardian_student_view/studentid/${this.studentID}`;c.get(p).then(h=>{this.student_guardian=h.data,console.log(this.student_guardian)}).then(()=>{let h=this.APIBASEURL+":"+this.APIPORT+"/api/student_medicalstatus";c.get(h).then(s=>{this.medicalStatus=s.data}).catch(s=>{console.log(s)})}).catch(h=>{console.log(h)})}).catch(p=>{console.log(p)})}).catch(n=>{console.log(n)})}).catch(l=>{console.log(l)}).catch(l=>{console.log(l)})}).catch(S=>{console.log(S)})}).catch(a=>{console.log(a)})})},methods:{addMedicalCondition(){let u=this.APIBASEURL+":"+this.APIPORT+"/api/student_medical";c.post(u,this.student_medical2).then(()=>{let e=this.APIBASEURL+":"+this.APIPORT+`api/reports/student_medical_view/${this.studentID}`;c.get(e).then(a=>{this.student_medical=a.data,this.student_medical2={MedicalID:"",Description:"",StudentMedicalStatusID:""}}).catch(a=>{console.log(a)})}).catch(e=>{console.log(e)}).then(()=>{})},enroll(){let u=this.APIBASEURL+":"+this.APIPORT+"/api/student_class/";c.post(u,this.student_class).catch(e=>{console.log(e)}).then(()=>{let e=this.APIBASEURL+":"+this.APIPORT+`/api/reports/student_class_view/${this.studentID}`;c.get(e).then(a=>{this.student_class2=a.data,this.student_class={ClassID:"",StudentClassStatusID:""},console.log(this.student_class)}).catch(a=>{console.log(a)})}).catch(e=>{console.log(e)})},editStudentClass(){let u=this.APIBASEURL+":"+this.APIPORT+`/api/student_class/${this.editID}`;c.put(u,this.editData).catch(e=>{console.log(e)}).then(()=>{console.log(this.editData);let e=this.APIBASEURL+":"+this.APIPORT+`/api/reports/student_class_view/${this.studentID}`;c.get(e).then(a=>{this.student_class2=a.data,this.student_class={ClassID:"",StudentClassStatusID:""}}).catch(a=>{console.log(a)})}).catch(e=>{console.log(e)})},getID(u){let e=this.APIBASEURL+":"+this.APIPORT+`/api/student_class/${u}`;c.get(e).then(a=>{this.editData=a.data,this.editID=u}).catch(a=>{console.log(a)})},getID2(u){let e=this.APIBASEURL+":"+this.APIPORT+`/api/student_medical/${u}`;c.get(e).then(a=>{this.editHealthData=a.data,this.editID2=u,console.log(this.editID2)}).catch(a=>{console.log(a)})},editMedical(){let u=this.APIBASEURL+":"+this.APIPORT+`api/student_medical/${this.editID2}`;c.put(u,this.editHealthData).then(()=>{let e=this.APIBASEURL+":"+this.APIPORT+`/api/reports/student_medical_view/${this.studentID}`;c.get(e).then(a=>{this.student_medical=a.data}).catch(a=>{console.log(a)})}).catch(e=>{console.log(e)})}}},L={class:"cont2"},U={class:"box-wrapper"},w={class:"box pt-3"},k=t("h2",{class:"mb-3"},"Student Information",-1),x={class:"rows"},E=t("span",{class:"label"},"Name:",-1),O={class:"rows"},T=t("span",{class:"label"},"ID:",-1),B={class:"rows"},V=t("span",{class:"label"},"DOB:",-1),q={class:"rows"},H=t("div",{class:"label"},"Status",-1),N=t("h4",{class:"mt-4"},"Parents/Guardians",-1),W={class:"rows"},G={class:"box pt-3"},F=t("h4",{class:"mb-3"},"Address",-1),Z={class:"rows"},j=t("span",{class:"label"},"Address Line 1",-1),z={key:0,class:"rows"},J=t("span",{class:"label"},"Address Line 2",-1),K={key:1,class:"rows"},Q=t("span",{class:"label"},"State",-1),X={class:"rows"},Y=t("span",{class:"label"},"City",-1),$={class:"rows"},tt=t("span",{class:"label"},"Zip Code",-1),st={class:"profile"},et={class:"profile-body mt-5"},lt={class:"info"},ot=t("h2",null,"Health Information",-1),at={class:"rows"},dt=t("span",{class:"label"}," Medical Condition:",-1),nt={class:"rows"},it=t("span",{class:"label"},"Description:",-1),ct={class:"rows"},ut=t("span",{class:"label"},"Condition Status",-1),rt={class:"d-flex justify-content-end"},_t=["onClick"],ht={type:"button",class:"btn","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},mt=t("h2",{class:"mb-4"},"Course History",-1),pt={key:0,class:"empty-arr"},bt={key:1,class:"table-wrapper"},St={class:"table table-striped"},It=t("thead",{class:"table-dark"},[t("tr",null,[t("th",null,"Course"),t("th",null,"Day"),t("th",null,"Time"),t("th",null,"Semester"),t("th",null,"Course Status"),t("th",null,"Actions")])],-1),Dt=["onClick"],vt=t("div",{class:"d-flex mt-4"},[t("button",{type:"button",class:"btn","data-bs-toggle":"modal","data-bs-target":"#exampleModal2"}," Enroll in Class ")],-1),ft={class:"modal fade",id:"exampleModal",tabindex:"0","aria-labelledby":"exampleModalLabel2","aria-hidden":"true"},gt={class:"modal-dialog"},Ct={class:"modal-content"},yt=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel2"}," Add a Health Condition "),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),At={class:"modal-body"},Pt={class:"row mb-3"},Mt={class:"col"},Rt=t("label",{for:""},"* Condition",-1),Lt=t("option",null,"Select an Option",-1),Ut=["value"],wt={class:"row mb-3"},kt={class:"col"},xt=t("label",{for:""},"Description",-1),Et={class:"row mb-3"},Ot={class:"col"},Tt=t("label",{for:""},"*Condition Status",-1),Bt=t("option",null,"Select an Option",-1),Vt=["value"],qt={class:"modal-footer"},Ht=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Nt={class:"modal fade",id:"exampleModal2",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Wt={class:"modal-dialog"},Gt={class:"modal-content"},Ft=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"}," Enroll in a Class "),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Zt={class:"modal-body"},jt={class:"row mb-3"},zt={class:"col"},Jt=t("label",{for:"",class:"form-label"},"* Select Class",-1),Kt=t("option",{selected:"",disabled:"",value:""}," Select an Option ",-1),Qt=["value"],Xt=t("label",{for:"",class:"form-label"},"* Status",-1),Yt=t("option",{selected:"",disabled:"",value:""}," Select an Option ",-1),$t=["value"],ts={class:"modal-footer"},ss=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),es={class:"modal fade",id:"exampleModal2",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ls={class:"modal-dialog"},os={class:"modal-content"},as=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"}," Enroll in a Class "),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ds={class:"modal-body"},ns={class:"row mb-3"},is={class:"col"},cs=t("label",{for:"",class:"form-label"},"* Select Class",-1),us=t("option",{selected:"",disabled:"",value:""}," Select an Option ",-1),rs=["value"],_s=t("label",{for:"",class:"form-label"},"* Status",-1),hs=t("option",{selected:"",disabled:"",value:""}," Select an Option ",-1),ms=["value"],ps={class:"modal-footer"},bs=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Ss={class:"modal fade",id:"exampleModal3",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Is={class:"modal-dialog"},Ds={class:"modal-content"},vs=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"}," Edit Enrollment "),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),fs={class:"modal-body"},gs={class:"row mb-3"},Cs={class:"col"},ys=t("label",{for:"",class:"form-label"},"* Select Class",-1),As=["value"],Ps=t("label",{for:"",class:"form-label"},"* Status",-1),Ms=["value"],Rs={class:"modal-footer"},Ls=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Us={class:"modal fade",id:"exampleModal4",tabindex:"0","aria-labelledby":"exampleModalLabel2","aria-hidden":"true"},ws={class:"modal-dialog"},ks={class:"modal-content"},xs=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel4"}," Edit Health Condition "),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Es={class:"modal-body"},Os={class:"row mb-3"},Ts={class:"col"},Bs=t("label",{for:""},"* Condition",-1),Vs=t("option",null,"Select an Option",-1),qs=["value"],Hs={class:"row mb-3"},Ns={class:"col"},Ws=t("label",{for:""},"Description",-1),Gs={class:"row mb-3"},Fs={class:"col"},Zs=t("label",{for:""},"* Condition Status",-1),js=t("option",null,"Select an Option",-1),zs=["value"],Js={class:"modal-footer"},Ks=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1);function Qs(u,e,a,S,l,n){const p=C("font-awesome-icon"),h=C("router-link");return d(),i("div",L,[t("div",U,[t("div",w,[k,I(h,{class:"btn",to:{name:"EditStudent",params:{StudentID:l.student[0].StudentID}}},{default:f(()=>[I(p,{icon:"fa-solid fa-pen-to-square"})]),_:1},8,["to"]),t("div",x,[E,t("span",null,o(l.student[0].student_first_name)+" "+o(l.student[0].student_middle_name)+" "+o(l.student[0].student_last_name),1)]),t("div",O,[T,t("span",null,o(l.student[0].StudentID),1)]),t("div",B,[V,D(o(l.student[0].DOB),1)]),t("div",q,[H,D(o(l.student[0].Status),1)]),N,t("div",null,[t("div",W,[(d(!0),i(r,null,_(l.student_guardian,s=>(d(),A(h,{class:"mx-3",id:"router",key:s.GuardianID,to:{name:"viewParent",params:{GuardianID:s.GuardianID}}},{default:f(()=>[D(o(s.gFName)+" "+o(s.gLName),1)]),_:2},1032,["to"]))),128))]),I(h,{class:"btn",to:{name:"addParent2",params:{studentID:l.student[0].StudentID}}},{default:f(()=>[l.student_guardian.length<2?(d(),A(p,{key:0,icon:"fa-solid fa-plus",class:""})):g("",!0)]),_:1},8,["to"])])]),t("div",G,[F,t("div",Z,[j,t("span",null,o(l.student[0].AddressLine1),1)]),l.student[0].AddressLine2!=""?(d(),i("div",z,[J,t("span",null,o(l.student[0].AddressLine2),1)])):g("",!0),l.student.State!=""?(d(),i("div",K,[Q,t("span",null,o(l.student[0].State),1)])):g("",!0),t("div",X,[Y,t("span",null,o(l.student[0].City),1)]),t("div",$,[tt,t("span",null,o(l.student[0].Zip),1)])])]),t("div",st,[t("div",et,[t("div",lt,[ot,(d(!0),i(r,null,_(l.student_medical,s=>(d(),i("div",{key:s.StudentID},[t("div",null,[t("div",at,[dt,t("span",null,o(s.Condition),1)]),t("div",nt,[it,D(),t("span",null,o(s.Description),1)]),t("div",ct,[ut,D(),t("span",null,o(s.Status),1)])]),t("div",rt,[t("button",{type:"button",class:"btn mb-2",onClick:P=>n.getID2(s._id),"data-bs-toggle":"modal","data-bs-target":"#exampleModal4"},[I(p,{icon:"fa-solid fa-pen-to-square"})],8,_t)])]))),128)),t("button",ht,[I(p,{icon:"fa-solid fa-plus",class:""})])]),t("div",null,[mt,l.student_class2.length==0?(d(),i("div",pt," No class record ")):(d(),i("div",bt,[t("table",St,[It,(d(!0),i(r,null,_(l.student_class2,s=>(d(),i("tr",{key:s.StudentID},[t("td",null,o(s.CourseName),1),t("td",null,o(s.WeekDay),1),t("td",null,o(s.StartTime)+" - "+o(s.EndTime),1),t("td",null,o(s.Semester),1),t("td",null,o(s.Status),1),t("td",null,[t("button",{type:"button",class:"btn",onClick:P=>n.getID(s._id),"data-bs-toggle":"modal","data-bs-target":"#exampleModal3"},[I(p,{icon:"fa-solid fa-pen-to-square"})],8,Dt)])]))),128))])])),vt]),t("div",ft,[t("div",gt,[t("div",Ct,[yt,t("div",At,[t("form",{onSubmit:e[3]||(e[3]=v((...s)=>n.addMedicalCondition&&n.addMedicalCondition(...s),["prevent"]))},[t("fieldset",null,[t("div",Pt,[t("div",Mt,[Rt,m(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":e[0]||(e[0]=s=>l.student_medical2.MedicalID=s),required:""},[Lt,(d(!0),i(r,null,_(l.medical,s=>(d(),i("option",{value:s.MedicalID,key:s.MedicalID},o(s.Condition),9,Ut))),128))],512),[[b,l.student_medical2.MedicalID]])])]),t("div",wt,[t("div",kt,[xt,m(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>l.student_medical2.Description=s),class:"form-control"},null,512),[[y,l.student_medical2.Description]])])]),t("div",Et,[t("div",Ot,[Tt,m(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>l.student_medical2.StudentMedicalStatusID=s),class:"form-select",required:""},[Bt,(d(!0),i(r,null,_(l.medicalStatus,s=>(d(),i("option",{value:s.StudentMedicalStatusID,key:s.StudentMedicalStatusID},o(s.Status),9,Vt))),128))],512),[[b,l.student_medical2.StudentMedicalStatusID]])])])])],32)]),t("div",qt,[Ht,t("button",{type:"submit",class:"btn btn-primary",onClick:e[4]||(e[4]=(...s)=>n.addMedicalCondition&&n.addMedicalCondition(...s))}," Save changes ")])])])]),t("div",Nt,[t("div",Wt,[t("div",Gt,[Ft,t("div",Zt,[t("form",{onSubmit:e[7]||(e[7]=v((...s)=>n.enroll&&n.enroll(...s),["prevent"]))},[t("fieldset",null,[t("div",jt,[t("div",zt,[Jt,m(t("select",{name:"",id:"","onUpdate:modelValue":e[5]||(e[5]=s=>l.student_class.ClassID=s),class:"form-select mb-3",required:""},[Kt,(d(!0),i(r,null,_(l.classes,s=>(d(),i("option",{key:s.ClassID,value:s.ClassID},o(s.CourseName)+"\xA0|\xA0 "+o(s.WeekDay)+"\xA0|\xA0 "+o(s.StartTime)+"-"+o(s.EndTime),9,Qt))),128))],512),[[b,l.student_class.ClassID]]),Xt,m(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":e[6]||(e[6]=s=>l.student_class.StudentClassStatusID=s),required:""},[Yt,(d(!0),i(r,null,_(l.statuses,s=>(d(),i("option",{value:s.StudentClassStatusID,key:s.StudentClassStatusID},o(s.Status),9,$t))),128))],512),[[b,l.student_class.StudentClassStatusID]])])])])],32)]),t("div",ts,[ss,t("button",{type:"submit",class:"btn btn-primary",onClick:e[8]||(e[8]=(...s)=>n.enroll&&n.enroll(...s))}," Save changes ")])])])]),t("div",es,[t("div",ls,[t("div",os,[as,t("div",ds,[t("form",{onSubmit:e[11]||(e[11]=v((...s)=>n.enroll&&n.enroll(...s),["prevent"]))},[t("fieldset",null,[t("div",ns,[t("div",is,[cs,m(t("select",{name:"",id:"","onUpdate:modelValue":e[9]||(e[9]=s=>l.student_class.ClassID=s),class:"form-select mb-3",required:""},[us,(d(!0),i(r,null,_(l.classes,s=>(d(),i("option",{key:s.ClassID,value:s.ClassID},o(s.CourseName)+"\xA0|\xA0 "+o(s.WeekDay)+"\xA0|\xA0 "+o(s.StartTime)+"-"+o(s.EndTime),9,rs))),128))],512),[[b,l.student_class.ClassID]]),_s,m(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":e[10]||(e[10]=s=>l.student_class.StudentClassStatusID=s),required:""},[hs,(d(!0),i(r,null,_(l.statuses,s=>(d(),i("option",{value:s.StudentClassStatusID,key:s.StudentClassStatusID},o(s.Status),9,ms))),128))],512),[[b,l.student_class.StudentClassStatusID]])])])])],32)]),t("div",ps,[bs,t("button",{type:"submit",class:"btn btn-primary",onClick:e[12]||(e[12]=(...s)=>n.enroll&&n.enroll(...s))}," Add ")])])])]),t("div",Ss,[t("div",Is,[t("div",Ds,[vs,t("div",fs,[t("form",{onSubmit:e[15]||(e[15]=v((...s)=>n.editStudentClass&&n.editStudentClass(...s),["prevent"]))},[t("fieldset",null,[t("div",gs,[t("div",Cs,[ys,m(t("select",{name:"",id:"","onUpdate:modelValue":e[13]||(e[13]=s=>l.editData.ClassID=s),class:"form-select mb-3",required:""},[(d(!0),i(r,null,_(l.classes,s=>(d(),i("option",{key:s.ClassID,value:s.ClassID},o(s.CourseName)+"\xA0|\xA0 "+o(s.WeekDay)+"\xA0|\xA0 "+o(s.StartTime)+"-"+o(s.EndTime),9,As))),128))],512),[[b,l.editData.ClassID]]),Ps,m(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":e[14]||(e[14]=s=>l.editData.StudentClassStatusID=s),required:""},[(d(!0),i(r,null,_(l.statuses,s=>(d(),i("option",{value:s.StudentClassStatusID,key:s.StudentClassStatusID},o(s.Status),9,Ms))),128))],512),[[b,l.editData.StudentClassStatusID]])])])])],32)]),t("div",Rs,[Ls,t("button",{type:"submit",class:"btn btn-primary",onClick:e[16]||(e[16]=(...s)=>n.editStudentClass&&n.editStudentClass(...s))}," Save changes ")])])])]),t("div",Us,[t("div",ws,[t("div",ks,[xs,t("div",Es,[t("form",{onSubmit:e[20]||(e[20]=v((...s)=>n.editMedical&&n.editMedical(...s),["prevent"]))},[t("fieldset",null,[t("div",Os,[t("div",Ts,[Bs,m(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":e[17]||(e[17]=s=>l.editHealthData.MedicalID=s),required:""},[Vs,(d(!0),i(r,null,_(l.medical,s=>(d(),i("option",{value:s.MedicalID,key:s.MedicalID},o(s.Condition),9,qs))),128))],512),[[b,l.editHealthData.MedicalID]])])]),t("div",Hs,[t("div",Ns,[Ws,m(t("input",{type:"text","onUpdate:modelValue":e[18]||(e[18]=s=>l.editHealthData.Description=s),class:"form-control"},null,512),[[y,l.editHealthData.Description]])])]),t("div",Gs,[t("div",Fs,[Zs,m(t("select",{"onUpdate:modelValue":e[19]||(e[19]=s=>l.editHealthData.StudentMedicalStatusID=s),class:"form-select",required:""},[js,(d(!0),i(r,null,_(l.medicalStatus,s=>(d(),i("option",{value:s.StudentMedicalStatusID,key:s.StudentMedicalStatusID},o(s.Status),9,zs))),128))],512),[[b,l.editHealthData.StudentMedicalStatusID]])])])])],32)]),t("div",Js,[Ks,t("button",{type:"submit",class:"btn btn-primary",onClick:e[21]||(e[21]=(...s)=>n.editMedical&&n.editMedical(...s))}," Save changes ")])])])])])])])}const Ys=M(R,[["render",Qs]]);export{Ys as default};