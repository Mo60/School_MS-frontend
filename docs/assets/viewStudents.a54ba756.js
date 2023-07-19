import{_,a as L,r as N,o as d,c as h,b as t,d as B,w as f,e as D,v as C,f as c,g as m,F as p,h as O,i as k,t as y}from"./index.88ae9c90.js";const F={data(){return{students:[],studentList:[],searchLastName:"",searchByAll:"",searchFirstName:"",sortedByFName:!1,sortedByLName:!1,sortedByMName:!1,sortedByDOB:!1}},created(){let a=this.APIBASEURL+":"+this.APIPORT+"/api/student/";L.get(a).then(e=>{this.students=e.data,this.studentList=this.students}).catch(e=>{console.log(e)}),this.loaded=!0},methods:{sortByFName(){this.sortedByLName=!1,this.sortedByMName=!1,this.sortedByDOB=!1,this.sortedByFName?(this.studentList.sort().reverse(),this.sortedByFName=!this.sortedByFName):(this.studentList.sort((a,e)=>{const o=a.FirstName.toUpperCase(),r=e.FirstName.toUpperCase();if(o<r)return-1;if(o>r)return 1}),this.sortedByFName=!this.sortedByFName)},sortByMName(){this.sortedByLName=!1,this.sortedByFName=!1,this.sortedByDOB=!1,this.sortedByMName?(this.studentList.sort().reverse(),this.sortedByMName=!this.sortedByMName):(this.studentList.sort((a,e)=>{let o=a.MiddleName,r=e.MiddleName;if(o!=null&&(o=a.MiddleName.toUpperCase()),r!=null&&(r=e.MiddleName.toUpperCase()),o<r)return-1;if(o>r)return 1}),this.sortedByMName=!this.sortedByMName)},sortByLName(){this.sortedByFName=!1,this.sortedByMName=!1,this.sortedByDOB=!1,this.sortedByLName?(this.studentList.sort().reverse(),this.sortedByLName=!this.sortedByLName):(this.studentList.sort((a,e)=>{const o=a.LastName.toUpperCase(),r=e.LastName.toUpperCase();if(o<r)return-1;if(o>r)return 1}),this.sortedByLName=!this.sortedByLName)},sortByDOB(){this.sortedByLName=!1,this.sortedByMName=!1,this.sortedByFName=!1,this.sortedByDOB?(this.studentList.sort().reverse(),this.sortedByDOB=!this.sortedByDOB):(this.studentList.sort((a,e)=>{const o=a.DOB.toUpperCase(),r=e.DOB.toUpperCase();if(o<r)return-1;if(o>r)return 1}),this.sortedByDOB=!this.sortedByDOB)},searchAll(){const a=this.students.filter(e=>e.FirstName.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1||e.LastName.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1||e.DOB.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1||e.MiddleName.toUpperCase().indexOf(this.searchByAll.toUpperCase())!==-1);this.studentList=a}}},M=t("h1",{class:"mt-5 mb-5"},"Students",-1),A={key:0,class:"flex-wrapper"},U={class:"empty-arr"},S=t("p",null,"No Students Found",-1),v={class:"btn mt-3"},b={key:1,class:"tablewrapper"},g={class:"d-flex mb-4 justify-content-center"},x={class:"col-md-4 mx-4"},w={class:"table table-striped"},I={class:"table-dark"},V={class:"thead"},E=t("th",null,"ID",-1),P=t("th",{colspan:"2",class:""},"Actions",-1),R={key:2,class:"d-flex justify-content-center mt-3"};function T(a,e,o,r,l,n){const u=N("router-link"),i=N("font-awesome-icon");return d(),h(p,null,[M,l.students.length==0&&a.loaded?(d(),h("div",A,[t("div",U,[S,t("a",v,[B(u,{to:{name:"addstudent"}},{default:f(()=>[c("Add Student")]),_:1})])])])):(d(),h("div",b,[t("div",g,[t("div",x,[D(t("input",{type:"search","onUpdate:modelValue":e[0]||(e[0]=s=>l.searchByAll=s),class:"form-control",onInput:e[1]||(e[1]=(...s)=>n.searchAll&&n.searchAll(...s)),placeholder:"Search Here...","aria-label":"Search","aria-describedby":"search-addon"},null,544),[[C,l.searchByAll]])])]),t("table",w,[t("thead",I,[t("tr",V,[E,t("th",{onClick:e[2]||(e[2]=(...s)=>n.sortByFName&&n.sortByFName(...s))},[c("First Name \xA0 "),l.sortedByFName?(d(),m(i,{key:0,icon:"fa-solid fa-angle-down"})):(d(),m(i,{key:1,icon:"fa-solid fa-angle-up"}))]),t("th",{onClick:e[3]||(e[3]=(...s)=>n.sortByMName&&n.sortByMName(...s))},[c("Middle Name \xA0 "),l.sortedByMName?(d(),m(i,{key:0,icon:"fa-solid fa-angle-down"})):(d(),m(i,{key:1,icon:"fa-solid fa-angle-up"}))]),t("th",{onClick:e[4]||(e[4]=(...s)=>n.sortByLName&&n.sortByLName(...s))},[c("Last Name \xA0 "),l.sortedByLName?(d(),m(i,{key:0,icon:"fa-solid fa-angle-down"})):(d(),m(i,{key:1,icon:"fa-solid fa-angle-up"}))]),t("th",{onClick:e[5]||(e[5]=(...s)=>n.sortByDOB&&n.sortByDOB(...s))},[c("DOB \xA0 "),l.sortedByDOB?(d(),m(i,{key:0,icon:"fa-solid fa-angle-down"})):(d(),m(i,{key:1,icon:"fa-solid fa-angle-up"}))]),P])]),(d(!0),h(p,null,O(l.studentList,s=>(d(),h("tbody",{key:s.StudentID},[t("tr",null,[t("td",null,y(s.StudentID),1),t("td",null,y(s.FirstName),1),t("td",null,y(s.MiddleName),1),t("td",null,y(s.LastName),1),t("td",null,y(s.DOB),1),t("td",null,[B(u,{class:"btn",to:{name:"viewStudent",params:{StudentID:s.StudentID}}},{default:f(()=>[B(i,{icon:"fa-solid fa-eye"})]),_:2},1032,["to"])]),t("td",null,[B(u,{class:"btn",to:{name:"EditStudent",params:{StudentID:s.StudentID}}},{default:f(()=>[B(i,{icon:"fa-solid fa-pen-to-square"})]),_:2},1032,["to"])])])]))),128))])])),l.students.length!==0?(d(),h("div",R,[B(u,{class:"btn",to:{name:"addstudent"}},{default:f(()=>[c("Add Student ")]),_:1})])):k("",!0)],64)}const q=_(F,[["render",T]]);export{q as default};
