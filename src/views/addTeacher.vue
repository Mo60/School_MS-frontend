<template>
   
        
          <h1 class="mt-5">Add Faculty</h1>
          <div class="wrapper">
                      <form @submit.prevent="submitForm" >
             <fieldset class="form-control p-3">
                   
                 <div class="row mb-3" >
                       <div class="col">
                                <label class="form-label">* First Name</label>
                                <input type="text" class="form-control"   v-model="faculty.FirstName" required>
                       </div >
                       <div class="col">   
                                <label class="form-label">Middle Name</label>
                                <input type="text" class="form-control" v-model="faculty.MiddleName" >
                       </div >
                       <div class="col">   
                                <label class="form-label">* Last Name</label>
                                <input type="text" class="form-control" v-model="faculty.LastName" required >
                       </div >
                      
                 </div >
                    <div class="row mb-3">
                        <div class="col">
                        <div class="form-label">Position</div>
                        <input type="text" class="form-control" v-model="faculty.Title" >
                       </div>
                        <div class="col">
                            <label class="form-label">* Email</label>
                            <input type="email" class="form-control" v-model="faculty.Email" required>
                        </div>
                        <div class="col">
                            <label class="form-label">Cell Number</label>
                            <input type="phone" class="form-control"  placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="faculty.CellNumber">
                        </div> 
                        <div class="col">
                            <label class="form-label">Phone Number</label>
                            <input type="phone" class="form-control"  placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="faculty.PhoneNumber">
                        </div> 
                 </div>
                    <div class="row mb-3">    
                    <div class="col">
                        <label class="form-label">Notes</label>
                        <textarea name="" id="" class="form-control" v-model="faculty.Notes"></textarea>
                    </div>
    </div>
                    <div class="text-center m-3">
                   
                    </div>  
             </fieldset >
             <button class="btn mt-4">Submit</button>
            </form>
        </div>
 
</template>

<script>
    import axios from "axios";
    export default {
        name: "AddFaculty",
        data() {
            return {
               faculty: { 
                    
                    FirstName: "",
                    MiddleName:"",
                    LastName:"",
                    Email:"",
                    PhoneNumber: "",
                    CellNumber:"",
                    Notes: ""
                }, 
            };
        },    

        methods:{
            submitForm(){
                let apiURL = this.APIBASEURL + ":" + this.APIPORT +"/api/faculty/"
                axios.post(apiURL,this.faculty).then( (res) => { this.$router.push("/faculty")
            }).catch(error => {
        console.log(error)
      });
      
} 
     }
        }
    
</script>
