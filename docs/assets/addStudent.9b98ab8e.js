import{_ as g,a as p,o as a,c as d,b as t,k as S,e as l,v as m,l as c,F as h,h as v,t as r,m as I,n as D,p as R,q as y,f as P}from"./index.c398c6c7.js";import"./index.6f8736d1.js";const U={data(){return{student:{FirstName:"",MiddleName:"",LastName:"",DOB:"",AddressLine1:"",AddressLine2:"",City:"",State:"",Zip:"",StudentStatusID:null},value:!1,value2:!1,guardian_student:{CanPickup:"",StudentID:"",GuardianID:"",RelationshipID:null,IsEmergency:""},guardian_student2:{CanPickup:"",StudentID:"",GuardianID:"",RelationshipID:null,IsEmergency:""},relationships:[],statuses:[],guardian:"",studentID:"",states:[]}},created(){let u=this.APIBASEURL+":"+this.APIPORT+"/api/guardianRelationship/";p.get(u).then(s=>{this.relationships=s.data;let f=this.APIBASEURL+":"+this.APIPORT+"/api/guardian/";p.get(f).then(i=>{this.guardian=i.data}).catch(i=>{console.log(i)}).then(()=>{let i=this.APIBASEURL+":"+this.APIPORT+"/api/studentStatus";p.get(i).then(o=>{this.statuses=o.data}).catch(o=>{console.log(o)}).then(()=>{let o="https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-united-states-of-america-state&q=&sort=year&facet=year&facet=ste_code&facet=ste_name&facet=ste_type&refine.ste_type=state";p.get(o).then(_=>{this.states=_.data.facet_groups[2].facets,console.log(this.states)}).catch(_=>{console.log(_)})}).catch(o=>{console.log(o)})}).catch(i=>{console.log(i)})}).catch(s=>{console.log(s)})},methods:{async submitForm(){let u=this.APIBASEURL+":"+this.APIPORT+"/api/student/";p.post(u,this.student).then(s=>{if(this.studentID=s.data.StudentID,this.guardian_student.GuardianID!=""){this.guardian_student.StudentID=s.data.StudentID;let f=this.APIBASEURL+":"+this.APIPORT+"/api/guardian_student/";p.post(f,this.guardian_student).catch(i=>{console.log(i)}).then(()=>{if(this.value2&&this.guardian_student2!==""){let i=this.APIBASEURL+":"+this.APIPORT+"/api/guardian_student/";this.guardian_student2.StudentID=s.data.StudentID,p.post(i,this.guardian_student2).catch(o=>{console.log(o)})}}).catch(i=>{console.log(i)})}}).catch(s=>{console.log(s)}).then(()=>{this.$router.push(`/students/${this.studentID}`)})},register(){let u=this.APIBASEURL+":"+this.APIPORT+"/api/student/";p.post(u,this.student).then(s=>{const f=s.data.StudentID;console.log(f),this.$router.push(`/addParent/${s.data.StudentID}`)}).catch(s=>{console.log(s)})},clear(u){u==1?this.guardian_student={CanPickup:"",GuardianID:"",RelationshipID:null,IsEmergency:""}:this.guardian_student2={CanPickup:"",GuardianID:"",RelationshipID:null,IsEmergency:""}}}},n=u=>(R("data-v-c19c3d06"),u=u(),y(),u),A=n(()=>t("h1",{class:"mt-5"},"Enter Student Information",-1)),k={class:"wrapper"},L={class:"form-control"},N=n(()=>t("legend",null,"Personal Information",-1)),C={class:"row mb-4"},V={class:"col"},E=n(()=>t("label",{for:"fName",class:"form-label"},"* First Name",-1)),O={class:"col"},G=n(()=>t("label",{for:"fName",class:"form-label"},"Middle Name",-1)),x={class:"col"},B=n(()=>t("label",{for:"lName",class:"form-label"},"* Last Name",-1)),w={class:"row mb-4"},F={class:"col-md-4"},T=n(()=>t("label",{for:"lName",class:"form-label"},"* Date of Birth",-1)),M={class:"col-md-4"},q=n(()=>t("label",{for:"lName",class:"form-label"},"* Status",-1)),Y=n(()=>t("option",{selected:"",disabled:"",value:""},"Select an Option",-1)),Z=["value"],H={class:"form-control mt-5"},j=n(()=>t("legend",null,"Address",-1)),z={class:"row mb-4"},J={class:"col"},K=n(()=>t("label",{class:"form-label"},"Address Line 1",-1)),Q={class:"col"},W=n(()=>t("label",{class:"form-label"},"Address Line 2",-1)),X={class:"col"},$=n(()=>t("label",{for:"",class:"form-label"},"City",-1)),tt={class:"row mb-4"},et={class:"col-md-4"},st=n(()=>t("label",{for:"",class:"form-label"},"State",-1)),ot=n(()=>t("option",{value:""},"Select an Option",-1)),nt=["value"],lt={class:"col-sm-2"},it=n(()=>t("label",{for:"",class:"form-label"},"Zip",-1)),at={class:"form-control mt-4"},dt=n(()=>t("legend",null,[P(" Parent/Guardian "),t("span",null,'(Enter Guardian ID or Click "Register Parent" to register parent)')],-1)),ut={class:"row mt-5 mb-4"},rt={class:"col"},ct=n(()=>t("label",{for:"",class:"form-label"},"Guardian ID",-1)),_t=n(()=>t("option",{value:"",disabled:"",selected:""},"Select an Option",-1)),pt=["value"],mt={class:"col"},ht=n(()=>t("label",{for:"",class:"form-label"},"Relationship to Child",-1)),ft=n(()=>t("option",{selected:"",disabled:"",value:"null"},"Select an Option",-1)),vt=["value"],It={class:"col-sm"},bt=n(()=>t("label",{for:"",class:"form-label"},"Emergency Contact",-1)),gt=n(()=>t("option",{selected:"",disabled:"",value:""},"Select an Option",-1)),St=n(()=>t("option",{value:"true"},"Yes",-1)),Dt=n(()=>t("option",{value:"false"},"No",-1)),Rt=[gt,St,Dt],yt={class:"col-sm"},Pt=n(()=>t("label",{for:"",class:"form-label"},"Can Pick Up",-1)),Ut=n(()=>t("option",{selected:"",disabled:"",value:""},"Select an Option",-1)),At=n(()=>t("option",{value:"true"},"Yes",-1)),kt=n(()=>t("option",{value:"false"},"No",-1)),Lt=[Ut,At,kt],Nt={class:"row mb-4"},Ct={class:"col"},Vt={class:"form-check"},Et=n(()=>t("label",{class:"form-check-label",for:"defaultCheck1"}," Add Another ",-1)),Ot={class:"row mb-4"},Gt={class:"col"},xt=n(()=>t("label",{for:"",class:"form-label"},"Guardian ID",-1)),Bt=n(()=>t("option",{value:"",disabled:"",selected:""},"Select an Option",-1)),wt=["value"],Ft={class:"col"},Tt=n(()=>t("label",{for:"",class:"form-label"},"Relationship to Child",-1)),Mt=n(()=>t("option",{selected:"",disabled:"",value:"null"},"Select an Option",-1)),qt=["value"],Yt={class:"col-sm"},Zt=n(()=>t("label",{for:"",class:"form-label"},"Emergency Contact",-1)),Ht=n(()=>t("option",{selected:"",disabled:"",value:""},"Select an Option",-1)),jt=n(()=>t("option",{value:"true"},"Yes",-1)),zt=n(()=>t("option",{value:"false"},"No",-1)),Jt=[Ht,jt,zt],Kt={class:"col-sm"},Qt=n(()=>t("label",{for:"",class:"form-label"},"Can Pick Up",-1)),Wt=n(()=>t("option",{selected:"",disabled:"",value:""},"Select an Option",-1)),Xt=n(()=>t("option",{value:"true"},"Yes",-1)),$t=n(()=>t("option",{value:"false"},"No",-1)),te=[Wt,Xt,$t],ee={class:"d-flex"};function se(u,s,f,i,o,_){return a(),d(h,null,[A,t("div",k,[t("form",{onSubmit:s[22]||(s[22]=S(()=>{},["prevent"]))},[t("fieldset",L,[N,t("div",C,[t("div",V,[E,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>o.student.FirstName=e),required:""},null,512),[[m,o.student.FirstName]])]),t("div",O,[G,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>o.student.MiddleName=e)},null,512),[[m,o.student.MiddleName]])]),t("div",x,[B,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=e=>o.student.LastName=e),required:""},null,512),[[m,o.student.LastName]])])]),t("div",w,[t("div",F,[T,l(t("input",{type:"date",class:"form-control","onUpdate:modelValue":s[3]||(s[3]=e=>o.student.DOB=e),required:""},null,512),[[m,o.student.DOB]])]),t("div",M,[q,l(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s[4]||(s[4]=e=>o.student.StudentStatusID=e),required:""},[Y,(a(!0),d(h,null,v(o.statuses,e=>(a(),d("option",{value:e.StudentStatusID,key:e.StatusID},r(e.Status),9,Z))),128))],512),[[c,o.student.StudentStatusID]])])])]),t("fieldset",H,[j,t("div",z,[t("div",J,[K,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[5]||(s[5]=e=>o.student.AddressLine1=e)},null,512),[[m,o.student.AddressLine1]])]),t("div",Q,[W,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[6]||(s[6]=e=>o.student.AddressLine2=e)},null,512),[[m,o.student.AddressLine2]])]),t("div",X,[$,l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[7]||(s[7]=e=>o.student.City=e)},null,512),[[m,o.student.City]])])]),t("div",tt,[t("div",et,[st,l(t("select",{name:"","onUpdate:modelValue":s[8]||(s[8]=e=>o.student.State=e),class:"form-select"},[ot,(a(!0),d(h,null,v(o.states,(e,b)=>(a(),d("option",{value:e.name,key:b},r(e.name),9,nt))),128))],512),[[c,o.student.State]])]),t("div",lt,[it,l(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[9]||(s[9]=e=>o.student.Zip=e)},null,512),[[m,o.student.Zip]])])])]),t("span",{class:"btn mt-4",onClick:s[10]||(s[10]=e=>o.value=!o.value)},r(o.value?"Hide guardian information":"Show guardian information"),1),l(t("fieldset",at,[dt,t("div",ut,[t("div",rt,[ct,l(t("select",{name:"",class:"form-select","onUpdate:modelValue":s[11]||(s[11]=e=>o.guardian_student.GuardianID=e)},[_t,(a(!0),d(h,null,v(o.guardian,e=>(a(),d("option",{value:e.GuardianID,class:"form-select",key:e.GuardianID},r(e.FirstName)+" "+r(e.LastName)+" - "+r(e.GuardianID),9,pt))),128))],512),[[c,o.guardian_student.GuardianID]])]),t("div",mt,[ht,l(t("select",{name:"",class:"form-select","onUpdate:modelValue":s[12]||(s[12]=e=>o.guardian_student.RelationshipID=e)},[ft,(a(!0),d(h,null,v(o.relationships,e=>(a(),d("option",{value:e.RelationshipID,key:e.RelationshipID},r(e.Relationship),9,vt))),128))],512),[[c,o.guardian_student.RelationshipID]])]),t("div",It,[bt,l(t("select",{class:"form-select","onUpdate:modelValue":s[13]||(s[13]=e=>o.guardian_student.IsEmergency=e)},Rt,512),[[c,o.guardian_student.IsEmergency]])]),t("div",yt,[Pt,l(t("select",{class:"form-select","onUpdate:modelValue":s[14]||(s[14]=e=>o.guardian_student.CanPickup=e)},Lt,512),[[c,o.guardian_student.CanPickup]])])]),t("div",Nt,[t("div",Ct,[t("div",Vt,[l(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[15]||(s[15]=e=>o.value2=e),id:"defaultCheck1"},null,512),[[D,o.value2]]),Et])])]),l(t("div",Ot,[t("div",Gt,[xt,l(t("select",{name:"",class:"form-select","onUpdate:modelValue":s[16]||(s[16]=e=>o.guardian_student2.GuardianID=e)},[Bt,(a(!0),d(h,null,v(o.guardian,e=>(a(),d("option",{value:e.GuardianID,class:"form-select",key:e.GuardianID},r(e.FirstName)+" "+r(e.LastName)+" - "+r(e.GuardianID),9,wt))),128))],512),[[c,o.guardian_student2.GuardianID]])]),t("div",Ft,[Tt,l(t("select",{name:"",class:"form-select","onUpdate:modelValue":s[17]||(s[17]=e=>o.guardian_student2.RelationshipID=e)},[Mt,(a(!0),d(h,null,v(o.relationships,e=>(a(),d("option",{value:e.RelationshipID,key:e.RelationshipID},r(e.Relationship),9,qt))),128))],512),[[c,o.guardian_student2.RelationshipID]])]),t("div",Yt,[Zt,l(t("select",{class:"form-select","onUpdate:modelValue":s[18]||(s[18]=e=>o.guardian_student2.IsEmergency=e)},Jt,512),[[c,o.guardian_student2.IsEmergency]])]),t("div",Kt,[Qt,l(t("select",{class:"form-select","onUpdate:modelValue":s[19]||(s[19]=e=>o.guardian_student2.CanPickup=e)},te,512),[[c,o.guardian_student2.CanPickup]])])],512),[[I,o.value2]])],512),[[I,o.value]]),t("div",ee,[t("button",{class:"btn mt-4",onClick:s[20]||(s[20]=(...e)=>_.submitForm&&_.submitForm(...e))},"Submit"),t("button",{class:"btn mt-4 mx-3",onClick:s[21]||(s[21]=(...e)=>_.register&&_.register(...e))}," Submit and Register Parent ")])],32)])],64)}const le=g(U,[["render",se],["__scopeId","data-v-c19c3d06"]]);export{le as default};
