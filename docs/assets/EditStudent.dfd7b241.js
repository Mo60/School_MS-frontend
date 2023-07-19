import{_ as I,a as c,o as i,c as l,b as t,k as b,e as o,v as _,l as r,F as m,h,t as u,m as v,i as S,f as D}from"./index.88ae9c90.js";import"./index.6f8736d1.js";const R={data(){return{student:{FirstName:"",MiddleName:"",LastName:"",DOB:"",Email:"",AddressLine1:"",AddressLine2:"",City:"",State:"",Zip:"",StudentStatusID:null},value:!1,guardian_student:{_id:"",CanPickup:!1,StudentID:"",GuardianID:"",RelationshipID:null,IsEmergency:!1},guardian_student2:{_id:"",CanPickup:!1,StudentID:"",GuardianID:"",RelationshipID:"",IsEmergency:!1},relationships:[],statuses:[],guardian:[],StudentID:this.$route.params.StudentID,guardianStudent:[],guardians:[],guardianStudentID1:"",guardianStudentID2:"",states:[]}},created(){let p=this.APIBASEURL+":"+this.APIPORT+"/api/guardianRelationship/";c.get(p).then(n=>{this.relationships=n.data;let a=this.APIBASEURL+":"+this.APIPORT+"/api/guardian/";c.get(a).then(d=>{this.guardian=d.data}).catch(d=>{console.log(d)}).then(()=>{let d=this.APIBASEURL+":"+this.APIPORT+"/api/studentStatus";c.get(d).then(e=>{this.statuses=e.data}).catch(e=>{console.log(e)})}).then(()=>{let d=this.APIBASEURL+":"+this.APIPORT+`/api/student/${this.StudentID}`;c.get(d).then(e=>{this.student=e.data,this.guardians=e.data.guardians,this.guardian_student={_id:e.data.guardians[0].guardian_student._id,GuardianID:e.data.guardians[0].guardian_student.GuardianID,IsEmergency:e.data.guardians[0].guardian_student.IsEmergency,RelationshipID:e.data.guardians[0].guardian_student.RelationshipID,CanPickup:e.data.guardians[0].guardian_student.CanPickup},this.guardian_student2={_id:e.data.guardians[1].guardian_student._id,GuardianID:e.data.guardians[1].guardian_student.GuardianID,IsEmergency:e.data.guardians[1].guardian_student.IsEmergency,RelationshipID:e.data.guardians[1].guardian_student.RelationshipID,CanPickup:e.data.guardians[1].guardian_student.CanPickup},this.guardianStudentID1=e.data.guardians[0].guardian_student._id,this.guardianStudentID2=e.data.guardians[1].guardian_student._id,this.guardianStudent=e.data.guardians.length,console.log(this.guardianStudent)})}).then(()=>{let d="https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-united-states-of-america-state&q=&sort=year&facet=year&facet=ste_code&facet=ste_name&facet=ste_type&refine.ste_type=state";c.get(d).then(e=>{this.states=e.data.facet_groups[2].facets,console.log(this.states)}).catch(e=>{console.log(e)}).then(e=>{}).catch(e=>{console.log(e)})})})},methods:{submitForm(){let p=this.APIBASEURL+":"+this.APIPORT+`/api/student/${this.StudentID}`;c.put(p,this.student).then(()=>{let n=this.APIBASEURL+":"+this.APIPORT+`/api/guardian_student/${this.guardian_student._id}`;c.put(n,this.guardian_student).catch(a=>{console.log(a)}).catch(a=>{console.log(a)}).then(()=>{let a=this.APIBASEURL+":"+this.APIPORT+`/api/guardian_student/${this.guardian_student2._id}`;c.put(a,this.guardian_student2).catch(d=>{console.log(d)})}).catch(a=>{console.log(a)}).then(a=>{this.$router.push(`/students/${this.StudentID}`)}).catch(a=>{console.log(a)})})},register(){let p=this.APIBASEURL+":"+this.APIPORT+`/api/student/${this.StudentID}`;c.put(p,this.student).then(n=>{const a=n.data.StudentID;console.log(a),console.log(n.data.StudentID),this.$router.push(`/addParent/${this.StudentID}`)}).catch(n=>{console.log(n)})}}},P=t("h1",{class:"mt-5"},"Edit Student Information",-1),U={class:"wrapper"},y={class:"form-control"},A=t("legend",null,"Personal Information",-1),L={class:"row mb-4"},N={class:"col"},k=t("label",{for:"fName",class:"form-label"},"* First Name",-1),C={class:"col"},E=t("label",{for:"fName",class:"form-label"},"Middle Name",-1),O={class:"col"},V=t("label",{for:"lName",class:"form-label"},"* Last Name",-1),G={class:"row mb-4"},B={class:"col-md-4"},x=t("label",{for:"lName",class:"form-label"},"* Date of Birth",-1),w={class:"col-md-4"},F=t("label",{for:"lName",class:"form-label"},"Status",-1),T=t("option",{selected:"",disabled:"",value:""},"Select an Option",-1),M=["value"],q={class:"form-control mt-5"},Y=t("legend",null,"Address",-1),Z={class:"row mb-4"},H={class:"col"},j=t("label",{class:"form-label"},"Address Line 1",-1),z={class:"col"},J=t("label",{class:"form-label"},"Address Line 2",-1),K={class:"col"},Q=t("label",{class:"form-label"},"City",-1),W={class:"row mb-3"},X={class:"col"},$=t("label",{for:"",class:"form-label"},"State",-1),tt=t("option",{value:""},"Select an Option",-1),et=["value"],st={class:"col"},nt=t("label",{for:"",class:"form-label"},"Zip",-1),ot={class:"form-control mt-4"},at=t("legend",null,[D(" Parent/Guardian "),t("span",null,'(Enter Guardian ID or Click "Register Parent" to register parent)')],-1),it={class:"row mt-5 mb-4"},lt={class:"col"},dt=t("label",{for:"",class:"form-label"},"Guardian ID",-1),ut=t("option",{value:"",disabled:"",selected:""},"Select an Option",-1),rt=["value"],ct={class:"col"},_t=t("label",{for:"",class:"form-label"},"Relationship to Child",-1),mt=t("option",{selected:"",disabled:""},"Select an Option",-1),pt=["value"],ht={class:"col-sm"},gt=t("label",{for:"",class:"form-label"},"Emergency Contact",-1),ft=t("option",{selected:"",disabled:""},"Select an Option",-1),It=t("option",{value:"true"},"Yes",-1),bt=t("option",{value:"false"},"No",-1),vt=[ft,It,bt],St={class:"col-sm"},Dt=t("label",{for:"",class:"form-label"},"Can Pick Up",-1),Rt=t("option",{selected:"",disabled:""},"Select an Option",-1),Pt=t("option",{value:"true"},"Yes",-1),Ut=t("option",{value:"false"},"No",-1),yt=[Rt,Pt,Ut],At={class:"row mt-5 mb-4"},Lt={class:"col"},Nt=t("label",{for:"",class:"form-label"},"Guardian ID",-1),kt=t("option",{value:"",disabled:"",selected:""},"Select an Option",-1),Ct=["value"],Et={class:"col"},Ot=t("label",{for:"",class:"form-label"},"Relationship to Child",-1),Vt=t("option",{selected:"",disabled:"",value:"null"},"Select an Option",-1),Gt=["value"],Bt={class:"col-sm"},xt=t("label",{for:"",class:"form-label"},"Emergency Contact",-1),wt=t("option",{selected:"",disabled:"",value:""},"Select an Option",-1),Ft=t("option",{value:"true"},"Yes",-1),Tt=t("option",{value:"false"},"No",-1),Mt=[wt,Ft,Tt],qt={class:"col-sm"},Yt=t("label",{for:"",class:"form-label"},"Can Pick Up",-1),Zt=t("option",{selected:"",disabled:"",value:""},"Select an Option",-1),Ht=t("option",{value:"true"},"Yes",-1),jt=t("option",{value:"false"},"No",-1),zt=[Zt,Ht,jt],Jt={class:"d-flex"};function Kt(p,n,a,d,e,g){return i(),l(m,null,[P,t("div",U,[t("form",{onSubmit:n[21]||(n[21]=b(()=>{},["prevent"]))},[t("fieldset",y,[A,t("div",L,[t("div",N,[k,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=s=>e.student.FirstName=s),required:""},null,512),[[_,e.student.FirstName]])]),t("div",C,[E,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=s=>e.student.MiddleName=s)},null,512),[[_,e.student.MiddleName]])]),t("div",O,[V,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[2]||(n[2]=s=>e.student.LastName=s),required:""},null,512),[[_,e.student.LastName]])])]),t("div",G,[t("div",B,[x,o(t("input",{type:"date",class:"form-control","onUpdate:modelValue":n[3]||(n[3]=s=>e.student.DOB=s),required:""},null,512),[[_,e.student.DOB]])]),t("div",w,[F,o(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":n[4]||(n[4]=s=>e.student.StudentStatusID=s)},[T,(i(!0),l(m,null,h(e.statuses,s=>(i(),l("option",{value:s.StudentStatusID,key:s.StudentStatusID},u(s.Status),9,M))),128))],512),[[r,e.student.StudentStatusID]])])])]),t("fieldset",q,[Y,t("div",Z,[t("div",H,[j,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[5]||(n[5]=s=>e.student.AddressLine1=s)},null,512),[[_,e.student.AddressLine1]])]),t("div",z,[J,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[6]||(n[6]=s=>e.student.AddressLine2=s)},null,512),[[_,e.student.AddressLine2]])]),t("div",K,[Q,o(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[7]||(n[7]=s=>e.student.City=s)},null,512),[[_,e.student.City]])])]),t("div",W,[t("div",X,[$,o(t("select",{name:"","onUpdate:modelValue":n[8]||(n[8]=s=>e.student.State=s),class:"form-select"},[tt,(i(!0),l(m,null,h(e.states,(s,f)=>(i(),l("option",{value:s.name,key:f},u(s.name),9,et))),128))],512),[[r,e.student.State]])]),t("div",st,[nt,o(t("input",{type:"number",class:"form-control","onUpdate:modelValue":n[9]||(n[9]=s=>e.student.Zip=s)},null,512),[[_,e.student.Zip]])])])]),t("button",{class:"btn mt-4",onClick:n[10]||(n[10]=s=>e.value=!e.value)},u(e.value?"Hide guardian field":"Show guardian field"),1),o(t("fieldset",ot,[at,t("div",it,[t("div",lt,[dt,o(t("select",{name:"",class:"form-select","onUpdate:modelValue":n[11]||(n[11]=s=>e.guardian_student.GuardianID=s)},[ut,(i(!0),l(m,null,h(e.guardian,s=>(i(),l("option",{value:s.GuardianID,class:"form-select",key:s.GuardianID},u(s.FirstName)+" "+u(s.LastName)+" - "+u(s.GuardianID),9,rt))),128))],512),[[r,e.guardian_student.GuardianID]])]),t("div",ct,[_t,o(t("select",{name:"",class:"form-select","onUpdate:modelValue":n[12]||(n[12]=s=>e.guardian_student.RelationshipID=s)},[mt,(i(!0),l(m,null,h(e.relationships,s=>(i(),l("option",{value:s.RelationshipID,key:s.RelationshipID},u(s.Relationship),9,pt))),128))],512),[[r,e.guardian_student.RelationshipID]])]),t("div",ht,[gt,o(t("select",{class:"form-select","onUpdate:modelValue":n[13]||(n[13]=s=>e.guardian_student.IsEmergency=s)},vt,512),[[r,e.guardian_student.IsEmergency]])]),t("div",St,[Dt,o(t("select",{class:"form-select","onUpdate:modelValue":n[14]||(n[14]=s=>e.guardian_student.CanPickup=s)},yt,512),[[r,e.guardian_student.CanPickup]])])]),t("div",At,[t("div",Lt,[Nt,o(t("select",{name:"",class:"form-select","onUpdate:modelValue":n[15]||(n[15]=s=>e.guardian_student2.GuardianID=s)},[kt,(i(!0),l(m,null,h(e.guardian,s=>(i(),l("option",{value:s.GuardianID,class:"form-select",key:s.GuardianID},u(s.FirstName)+" "+u(s.LastName)+" - "+u(s.GuardianID),9,Ct))),128))],512),[[r,e.guardian_student2.GuardianID]])]),t("div",Et,[Ot,o(t("select",{name:"",class:"form-select","onUpdate:modelValue":n[16]||(n[16]=s=>e.guardian_student2.RelationshipID=s)},[Vt,(i(!0),l(m,null,h(e.relationships,s=>(i(),l("option",{value:s.RelationshipID,key:s.RelationshipID},u(s.Relationship),9,Gt))),128))],512),[[r,e.guardian_student2.RelationshipID]])]),t("div",Bt,[xt,o(t("select",{class:"form-select","onUpdate:modelValue":n[17]||(n[17]=s=>e.guardian_student2.IsEmergency=s)},Mt,512),[[r,e.guardian_student2.IsEmergency]])]),t("div",qt,[Yt,o(t("select",{class:"form-select","onUpdate:modelValue":n[18]||(n[18]=s=>e.guardian_student2.CanPickup=s)},zt,512),[[r,e.guardian_student2.CanPickup]])])])],512),[[v,e.value]]),t("div",Jt,[t("button",{class:"btn mt-4",onClick:n[19]||(n[19]=(...s)=>g.submitForm&&g.submitForm(...s))},"Submit"),e.guardianStudent!=2?(i(),l("button",{key:0,class:"btn mt-4 mx-3",onClick:n[20]||(n[20]=(...s)=>g.register&&g.register(...s))}," Submit and Register Parent ")):S("",!0)])],32)])],64)}const Xt=I(R,[["render",Kt]]);export{Xt as default};
