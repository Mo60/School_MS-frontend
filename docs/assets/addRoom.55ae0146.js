import{a}from"./index.33ae6dcc.js";const s={name:"AddRoom",data(){return{room:{RoomID:"",LocationID:"",Capacity:"",RoomName:"",RoomStatusID:""}}},methods:{submitForm(){let o=this.APIBASEURL+":"+this.APIPORT+"/api/room/";a.post(o,this.room).catch(t=>{console.log(t)}),this.$router.push("/room")}}};export{s as default};
