function validateUser(){

     var username=getValueById('username');
     var password= getValueById('password');
     var emailId=getValueById('emailId');
     // validation - task
     var user= {
         username:username,
         password:password,
         emailId:emailId
     }

     console.log('user',user);
     return false;

}

function getValueById(id){
    return document.getElementById(id).value;
}