function emailValidate(e_mail){
    // console.log(e_mail)
    if(e_mail == ""){
        document.getElementById("email_msg").innerHTML = "email should not be null"
        return false
    }
    var substr = e_mail.includes("@gmail.com")
    if(!substr){
        document.getElementById("email_msg").innerHTML = "email should contain @gmail.com"
        return false
    }
    return true
}
function accountvalidate(acc_no){
    if(acc_no == ""){
        document.getElementById("acc_msg").innerHTML = "account number should not be empty"
        return false
    }
    else if(acc_no.length <9 && acc_no >15){
        document.getElementById("acc_msg").innerHTML = "account number between 10 and 15 digit"
        return false
    }
    else if(isNaN(acc_no)){
        document.getElementById("acc_msg").innerHTML = "account number should contain digit only"
    }
    else 
        return true
}
function passwordValidate(pass){
    if(pass == ""){
        document.getElementById("pass_msg").innerHTML = "password should not empty"
        return false
    }
    else if(pass.length < 6){
        document.getElementById("pass_msg").innerHTML  = "password length should be > 6"
        return false
    }
    else 
        return true
}
function validate(){
    var email = document.getElementsByClassName("input-box")
    // console.log(email[0].value)
    // console.log(email[1].value)
    // console.log(email[2].value)
    if(emailValidate(email[0].value)  && accountvalidate(email[1].value)  && passwordValidate(email[2].value))
        return true
    else 
        return false
}
