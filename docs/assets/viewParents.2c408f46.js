import{_ as B,a as L,r as f,o as a,c as h,b as e,e as C,v as F,f as y,g as m,F as _,h as b,t as c,d as p,w as N}from"./index.36d5dce3.js";const A={data(){return{parent:[],parentList:[],loaded:!1,sortedByFName:!1,sortedByLName:!1,searchByAll:"",searchLastName:""}},created(){let r=this.APIBASEURL+":"+this.APIPORT+"/api/guardian";L.get(r).then(t=>{this.parent=t.data,this.parentList=t.data}).catch(t=>{console.log(t)}),this.loaded=!0},methods:{sortByFName(){this.sortedByLName=!1,this.sortedByFName?(this.parentList.sort().reverse(),this.sortedByFName=!this.sortedByFName):(this.parentList.sort((r,t)=>{const n=r.FirstName.toUpperCase(),l=t.FirstName.toUpperCase();if(n<l)return-1;if(n>l)return 1}),this.sortedByFName=!this.sortedByFName)},sortByLName(){this.sortedByFName=!1,this.sortedByLName?(this.parentList.sort().reverse(),this.sortedByLName=!this.sortedByLName):(this.parentList.sort((r,t)=>{const n=r.LastName.toUpperCase(),l=t.LastName.toUpperCase();if(n<l)return-1;if(n>l)return 1}),this.sortedByLName=!this.sortedByLName)},searchAll(){const r=this.parent.filter(t=>t.FirstName.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1||t.LastName.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1||t.CellNumber.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1||t.Email.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1||t.PhoneNumber.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1);this.parentList=r}}},U=e("h1",{class:"mt-5 mb-5"},"Parents and Guardians",-1),x={key:0,class:"flex-wrapper"},k=e("div",{class:"empty-arr"},[e("p",null,"No Parents or Guardians Found")],-1),v=[k],g={key:1,class:"tablewrapper"},w={class:"d-flex mb-4 justify-content-center"},P={class:"col-md-4 mx-4"},I={class:"table table-striped"},D={class:"table-dark"},G={class:"text-center"},E=e("th",null,"ID",-1),O=e("th",null,"Phone",-1),S=e("th",null,"Cell",-1),V=e("th",null,"Email",-1),R=e("th",{colspan:"2",class:""},"Actions",-1),T=["href"];function j(r,t,n,l,o,i){const d=f("font-awesome-icon"),u=f("router-link");return a(),h(_,null,[U,o.parent.length==0&&o.loaded?(a(),h("div",x,v)):(a(),h("div",g,[e("div",w,[e("div",P,[C(e("input",{type:"search","onUpdate:modelValue":t[0]||(t[0]=s=>o.searchByAll=s),class:"form-control",onInput:t[1]||(t[1]=(...s)=>i.searchAll&&i.searchAll(...s)),placeholder:"Search Here...","aria-label":"Search","aria-describedby":"search-addon"},null,544),[[F,o.searchByAll]])])]),e("table",I,[e("thead",D,[e("tr",G,[E,e("th",{onClick:t[2]||(t[2]=(...s)=>i.sortByFName&&i.sortByFName(...s))},[y("First Name \xA0 "),o.sortedByFName?(a(),m(d,{key:0,icon:"fa-solid fa-angle-down"})):(a(),m(d,{key:1,icon:"fa-solid fa-angle-up"}))]),e("th",{onClick:t[3]||(t[3]=(...s)=>i.sortByLName&&i.sortByLName(...s))},[y("Last Name \xA0 "),o.sortedByLName?(a(),m(d,{key:0,icon:"fa-solid fa-angle-down"})):(a(),m(d,{key:1,icon:"fa-solid fa-angle-up"}))]),O,S,V,R])]),(a(!0),h(_,null,b(o.parentList,s=>(a(),h("tbody",{key:s.GuardianID},[e("tr",null,[e("td",null,c(s.GuardianID),1),e("td",null,c(s.FirstName),1),e("td",null,c(s.LastName),1),e("td",null,c(s.PhoneNumber),1),e("td",null,c(s.CellNumber),1),e("td",null,[e("a",{href:`mailto:${s.Email}`},c(s.Email),9,T)]),e("td",null,[p(u,{class:"btn",to:{name:"viewParent",params:{GuardianID:s.GuardianID}}},{default:N(()=>[p(d,{icon:"fa-solid fa-eye"})]),_:2},1032,["to"])]),e("td",null,[p(u,{class:"btn",to:{name:"EditParent",params:{GuardianID:s.GuardianID}}},{default:N(()=>[p(d,{icon:"fa-solid fa-pen-to-square"})]),_:2},1032,["to"])])])]))),128))])]))],64)}const H=B(A,[["render",j]]);export{H as default};
