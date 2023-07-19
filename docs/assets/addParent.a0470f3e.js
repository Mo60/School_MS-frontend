import{_ as A,a as d,o as u,c,b as t,k as I,e as n,v as i,l as m,F as p,h as _,n as v,i as L,t as g}from"./index.33ae6dcc.js";import{l as f}from"./index.6f8736d1.js";const P={data(){return{guardian:{GuardianID:void 0,FirstName:"",MiddleName:"",LastName:"",CellNumber:"",PhoneNumber:"",Email:"",AddressLine1:"",AddressLine2:"",City:"",Zip:"",State:"",Notes:"",GuardianStatusID:""},guardian_student:{CanPickup:f.boolean,StudentID:this.$route.params.studentID,GuardianID:"",guardianRelationship:"",IsEmergency:f.boolean},relationships:[],student:[],sameAddress:!1,states:[],statuses:[],guardianStudent:""}},methods:{submitForm(){let r=this.APIBASEURL+":"+this.APIPORT+"/api/guardian/";d.post(r,this.guardian).then(s=>{this.guardian_student.GuardianID=s.data.GuardianID,console.log(this.guardian_student.GuardianID),console.log(s);let h=this.APIBASEURL+":"+this.APIPORT+"/api/guardian_student/";d.post(h,this.guardian_student).catch(l=>{console.log(l)}),this.$router.push(`/parents/${this.guardian_student.GuardianID}`),console.log("success")}).catch(s=>{console.log(s)})},register(){let r=this.APIBASEURL+":"+this.APIPORT+"/api/guardian/";d.post(r,this.guardian).then(s=>{this.guardian_student.GuardianID=s.data.GuardianID,console.log(this.guardian_student.GuardianID),console.log(s);let h=this.APIBASEURL+":"+this.APIPORT+"/api/guardian_student/";d.post(h,this.guardian_student).then(()=>{this.guardian={GuardianID:void 0,FirstName:"",MiddleName:"",LastName:"",CellNumber:"",PhoneNumber:"",Email:"",AddressLine1:"",AddressLine2:"",City:"",Zip:"",Notes:""},this.guardian_student={IsEmergency:"",CanPickup:"",GuardianID:"",guardianRelationship:""}})}).catch(s=>{console.log(s)}).then(s=>{this.$router.push(`/addParent/${this.guardian_student.StudentID}`)}).catch(s=>{console.log(s)})}},watch:{sameAddress(r){r==!0?(this.guardian.AddressLine1=this.student.AddressLine1,this.guardian.AddressLine2=this.student.AddressLine2,this.guardian.City=this.student.City,this.guardian.State=this.student.State,this.guardian.Zip=this.student.Zip):(this.guardian.AddressLine1="",this.guardian.AddressLine2="",this.guardian.City="",this.guardian.Zip="")}},created(){let r=this.APIBASEURL+":"+this.APIPORT+"/api/guardianRelationship/";d.get(r).then(s=>{this.relationships=s.data}).then(s=>{let h=this.APIBASEURL+":"+this.APIPORT+`/api/student/${this.guardian_student.StudentID}`;d.get(h).then(l=>{this.student=l.data}).then(()=>{let l=this.APIBASEURL+":"+this.APIPORT+"/api/guardianstatus/";d.get(l).then(o=>{this.statuses=o.data}).catch(o=>{console.log(o)})}).catch(l=>{console.log(l)}).then(l=>{let o=this.APIBASEURL+":"+this.APIPORT+`/api/reports/guardian_student_view/studentid/${this.guardian_student.StudentID}`;d.get(o).then(a=>{this.guardianStudent=a.data.length,console.log(this.guardianStudent)}).catch(a=>{console.log(a)}).then(()=>{let a="https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-united-states-of-america-state&q=&sort=year&facet=year&facet=ste_code&facet=ste_name&facet=ste_type&refine.ste_type=state";d.get(a).then(e=>{this.states=e.data.facet_groups[2].facets,console.log(this.states)}).catch(e=>{console.log(e)})}).catch(a=>{console.log(a)})})})}},S=t("h1",{class:"mt-5"},"Enter Parent or Guardian Information",-1),U={class:"wrapper"},N={class:"form-control"},R=t("legend",null,"Contact Information",-1),y={class:"row mb-4"},D={class:"col"},C=t("label",{for:"",class:"form-label"},"* First Name",-1),k={class:"col"},E=t("label",{for:"",class:"form-label"},"Middle Name",-1),V={class:"col"},x=t("label",{for:"",class:"form-label"},"* Last Name",-1),G={class:"row mb-4"},O={class:"col"},w=t("label",{for:"",class:"form-label"},"* Email",-1),B={class:"col"},F=t("label",{for:"",class:"form-label"},"Cell Number",-1),M={class:"col"},T=t("label",{for:"",class:"form-label"},"Phone Number",-1),Z={class:"col"},q=t("label",{for:"",class:"form-label"},"Status",-1),z=t("option",{value:""},"Select an Option",-1),Y=["value"],j={class:"form-control mt-5"},H=t("legend",null,"Address",-1),J={class:"row mb-4"},K={class:"col"},Q=t("label",{class:"form-label"},"Address Line 1",-1),W={class:"col"},X=t("label",{class:"form-label"},"Address Line 2",-1),$={class:"col"},tt=t("label",{for:"",class:"form-label"},"City",-1),st={class:"row mb-4"},et={class:"col"},ot=t("label",{for:"",class:"form-label"},"State",-1),nt=t("option",{value:""},"Select an Option",-1),at=["value"],it={class:"col"},lt=t("label",{for:"",class:"form-label"},"Zip",-1),dt={class:"row"},rt={class:"col"},ut={class:"form-check"},ct=t("label",{class:"form-check-label",for:"defaultCheck1"}," Same as child's ",-1),ht={class:"form-control mt-5"},mt=t("legend",null,"Authorizations",-1),pt={class:"row mb-4"},_t={class:"col"},gt=t("label",{for:"",class:"form-label"},"Relationship to Child",-1),ft=t("option",{disabled:"",selected:"",value:""},"Select an Option",-1),bt=["value"],At={class:"col"},It=t("label",{class:"form-label"},"Authorized to Pick Up?",-1),vt=t("option",{disabled:"",selected:"",value:""},"Select an Option",-1),Lt=t("option",{value:"true"},"Yes",-1),Pt=t("option",{value:"false"},"No",-1),St=[vt,Lt,Pt],Ut={class:"col"},Nt=t("label",{class:"form-label"},"Emergency Contact",-1),Rt=t("option",{value:"",disabled:"",selected:""},"Select an Option",-1),yt=t("option",{value:"true"},"Yes",-1),Dt=t("option",{value:"false"},"No",-1),Ct=[Rt,yt,Dt],kt={class:"form-control mt-5"},Et=t("legend",null,"Additional Information",-1),Vt={class:"row mb-4"},xt={class:"col"},Gt=t("label",{class:"form-label"},"Notes",-1);function Ot(r,s,h,l,o,a){return u(),c(p,null,[S,t("div",U,[t("form",{onSubmit:s[19]||(s[19]=I(()=>{},["prevent"]))},[t("fieldset",N,[R,t("div",y,[t("div",D,[C,n(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>o.guardian.FirstName=e)},null,512),[[i,o.guardian.FirstName]])]),t("div",k,[E,n(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>o.guardian.MiddleName=e)},null,512),[[i,o.guardian.MiddleName]])]),t("div",V,[x,n(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=e=>o.guardian.LastName=e)},null,512),[[i,o.guardian.LastName]])])]),t("div",G,[t("div",O,[w,n(t("input",{type:"email",class:"form-control","onUpdate:modelValue":s[3]||(s[3]=e=>o.guardian.Email=e),required:""},null,512),[[i,o.guardian.Email]])]),t("div",B,[F,n(t("input",{type:"tel",class:"form-control",placeholder:"123-456-7890",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}","onUpdate:modelValue":s[4]||(s[4]=e=>o.guardian.CellNumber=e)},null,512),[[i,o.guardian.CellNumber]])]),t("div",M,[T,n(t("input",{type:"tel",class:"form-control",placeholder:"123-456-7890",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}","onUpdate:modelValue":s[5]||(s[5]=e=>o.guardian.PhoneNumber=e)},null,512),[[i,o.guardian.PhoneNumber]])]),t("div",Z,[q,n(t("select",{name:"",id:"","onUpdate:modelValue":s[6]||(s[6]=e=>o.guardian.GuardianStatusID=e),class:"form-select"},[z,(u(!0),c(p,null,_(o.statuses,e=>(u(),c("option",{value:e.StatusID,key:e.StatusID},g(e.Status),9,Y))),128))],512),[[m,o.guardian.GuardianStatusID]])])])]),t("fieldset",j,[H,t("div",J,[t("div",K,[Q,n(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[7]||(s[7]=e=>o.guardian.AddressLine1=e)},null,512),[[i,o.guardian.AddressLine1]])]),t("div",W,[X,n(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[8]||(s[8]=e=>o.guardian.AddressLine2=e)},null,512),[[i,o.guardian.AddressLine2]])]),t("div",$,[tt,n(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[9]||(s[9]=e=>o.guardian.City=e)},null,512),[[i,o.guardian.City]])])]),t("div",st,[t("div",et,[ot,n(t("select",{name:"","onUpdate:modelValue":s[10]||(s[10]=e=>o.guardian.State=e),class:"form-select"},[nt,(u(!0),c(p,null,_(o.states,(e,b)=>(u(),c("option",{value:e.name,key:b},g(e.name),9,at))),128))],512),[[m,o.guardian.State]])]),t("div",it,[lt,n(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[11]||(s[11]=e=>o.guardian.Zip=e)},null,512),[[i,o.guardian.Zip]])])]),t("div",dt,[t("div",rt,[t("div",ut,[n(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[12]||(s[12]=e=>o.sameAddress=e),id:"defaultCheck1"},null,512),[[v,o.sameAddress]]),ct])])])]),t("fieldset",ht,[mt,t("div",pt,[t("div",_t,[gt,n(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s[13]||(s[13]=e=>o.guardian_student.RelationshipID=e)},[ft,(u(!0),c(p,null,_(o.relationships,e=>(u(),c("option",{value:e.RelationshipID,key:e.RelationshipID},g(e.Relationship),9,bt))),128))],512),[[m,o.guardian_student.RelationshipID]])]),t("div",At,[It,n(t("select",{class:"form-select","onUpdate:modelValue":s[14]||(s[14]=e=>o.guardian_student.CanPickup=e)},St,512),[[m,o.guardian_student.CanPickup]])]),t("div",Ut,[Nt,n(t("select",{class:"form-select","onUpdate:modelValue":s[15]||(s[15]=e=>o.guardian.IsEmergency=e)},Ct,512),[[m,o.guardian.IsEmergency]])])])]),t("fieldset",kt,[Et,t("div",Vt,[t("div",xt,[Gt,n(t("textarea",{name:"",class:"form-control","onUpdate:modelValue":s[16]||(s[16]=e=>o.guardian.Notes=e)},null,512),[[i,o.guardian.Notes]])])])]),t("button",{class:"btn mt-4",onClick:s[17]||(s[17]=(...e)=>a.submitForm&&a.submitForm(...e))},"Submit"),o.guardianStudent!=1?(u(),c("button",{key:0,class:"btn mt-4 mx-3",onClick:s[18]||(s[18]=(...e)=>a.register&&a.register(...e))}," Add Another Parent ")):L("",!0)],32)])],64)}const Ft=A(P,[["render",Ot]]);export{Ft as default};