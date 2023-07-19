import{_ as b,a as m,r as g,o,c as a,b as s,d,w as u,f as c,t,i as l,e as v,m as w,F as f,h as N}from"./index.7f8ff7e0.js";const y={data(){return{guardianID:this.$route.params.GuardianID,guardian:[],students:[]}},created(){let h=this.APIBASEURL+":"+this.APIPORT+`/api/guardian/${this.guardianID}`;m.get(h).then(n=>{this.guardian=n.data,console.log(this.guardian)}).catch(n=>{console.log(n)}).then(()=>{let n=this.APIBASEURL+":"+this.APIPORT+`/api/reports/guardian_student_view/${this.guardianID}`;m.get(n).then(r=>{this.students=r.data}).catch(r=>{console.log(r)})}).catch(n=>{console.log(n)}),this.loaded=!0}},I={class:"cont2"},k={class:"box-wrapper"},S={class:"box"},D=s("h2",{class:"mb-3"},"Contact Information",-1),x={class:"body"},A={class:"rows"},P=s("span",{class:"label"},"Name:",-1),C={class:"rows"},L=s("span",{class:"label"},"ID:",-1),E={key:0,class:"rows"},R=s("span",{class:"label"},"Phone Number",-1),B={key:1,class:"rows"},G=s("span",{class:"label"},"Cell Number",-1),F={key:2,class:"rows"},U=s("span",{class:"label"},"Email",-1),V=["href"],T={key:3,class:"rows"},O=s("span",{class:"label"},"Status",-1),Y={class:"box"},Z=s("h2",{class:"mb-3"},"Address",-1),j={class:"body"},q={class:"rows"},z=s("span",{class:"label"},"Address Line 1",-1),M={key:0,class:"rows"},H=s("span",{class:"label"},"Address Line 2",-1),J={key:1,class:"rows"},K=s("span",{class:"label"},"State",-1),Q={class:"rows"},W=s("span",{class:"label"},"City",-1),X={class:"rows"},$=s("span",{class:"label"},"Zip Code",-1),ss={class:"box pt-4"},es=s("h2",null,"Notes",-1),ts={class:"rows"},os={class:"profile"},as=s("h1",{class:"mt-3 mb-5"},"Students",-1),ns={class:"grid"},is={class:"mb-4"},cs={class:"rows"},ls={class:"rows"},ds=s("span",{class:"label"},"Relationship",-1),rs={class:"rows"},_s=s("span",{class:"label"},"Authorized to Pick up",-1),us={key:0},hs={key:1},ps={class:"rows"},ms=s("span",{class:"label"},"Emergency Contact",-1),gs={key:0},bs={key:1},vs={class:"d-flex justify-content-center align-items-center"};function ws(h,n,r,fs,e,Ns){const p=g("font-awesome-icon"),_=g("router-link");return o(),a("div",I,[s("div",k,[s("div",S,[D,d(_,{class:"btn",to:{name:"EditParent",params:{GuardianID:e.guardian.GuardianID}}},{default:u(()=>[d(p,{icon:"fa-solid fa-pen-to-square"})]),_:1},8,["to"]),s("div",x,[s("div",A,[P,c(t(e.guardian.FirstName)+" "+t(e.guardian.MiddleName)+" "+t(e.guardian.LastName),1)]),s("div",C,[L,s("span",null,t(e.guardian.GuardianID),1)]),e.guardian.PhoneNumber!=""?(o(),a("div",E,[R,c(),s("span",null,t(e.guardian.PhoneNumber),1)])):l("",!0),e.guardian.CellNumber!=""?(o(),a("div",B,[G,c(t(e.guardian.CellNumber),1)])):l("",!0),e.guardian.Email!=""?(o(),a("div",F,[U,c(),s("a",{href:`mailto:${e.guardian.Email}`},t(e.guardian.Email),9,V)])):l("",!0),e.students.Status!=""?(o(),a("div",T,[O,s("span",null,t(e.students[0].Status),1)])):l("",!0)])]),s("div",Y,[Z,s("div",j,[s("div",q,[z,s("span",null,t(e.guardian.AddressLine1),1)]),e.guardian.AddressLine2!=""?(o(),a("div",M,[H,s("span",null,t(e.guardian.AddressLine2),1)])):l("",!0),e.guardian.State!=""?(o(),a("div",J,[K,s("span",null,t(e.guardian.State),1)])):l("",!0),s("div",Q,[W,s("span",null,t(e.guardian.City),1)]),s("div",X,[$,s("span",null,t(e.guardian.Zip),1)])])]),v(s("div",ss,[es,s("div",ts,t(e.guardian.Notes),1)],512),[[w,e.guardian.Notes!==""||e.guardian.Notes!==null]])]),s("div",os,[as,s("div",ns,[(o(!0),a(f,null,N(e.students,i=>(o(),a("div",{class:"box",key:i.StudentID},[s("div",is,[s("div",cs,[d(_,{class:"label name",to:{name:"viewStudent",params:{StudentID:i.StudentID}}},{default:u(()=>[c(t(i.FirstName)+" "+t(i.LastName),1)]),_:2},1032,["to"])]),s("div",ls,[ds,c(),s("span",null,t(i.Relationship),1)]),s("div",rs,[_s,c(),i.CanPickup?(o(),a("span",us,"Yes")):(o(),a("span",hs,"No"))]),s("div",ps,[ms,i.IsEmergency?(o(),a("span",gs,"Yes")):(o(),a("span",bs,"No"))])])]))),128)),s("div",vs,[d(_,{class:"btn mx-3",to:{name:"addStudent2",params:{GuardianID:e.guardianID}}},{default:u(()=>[d(p,{icon:"fa-solid fa-plus"})]),_:1},8,["to"])])])])])}const Is=b(y,[["render",ws]]);export{Is as default};
