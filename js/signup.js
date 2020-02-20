function validateDob(d){
    if(d == ""){
        document.getElementById("dob-msg").innerHTML = "**field cannot be empty"
        return false
    }
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
function validatePhone(phno){
    if(phno == ""){
        document.getElementById("msg-ph").innerHTML = "**field can't be empty"
        return false
    }
    else if(phno.length != 10){
        document.getElementById("msg-ph").innerHTML = "**Invalid phone number"
        return false
    }
    else{
        return true
    }
}
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
function validateName(name,i){
    //var x = document.getElementsByClassName("msg-name")
    if(name == ""){
    
        document.getElementsByClassName("msg-name")[i].innerHTML = "*field can't be empty"
        return false
    }
    else if(name.length < 5){
        document.getElementsByClassName("msg-name")[i].innerHTML = "**name is too small"
        return false
    }
    else if(name.length > 10 ){
        document.getElementsByClassName("msg-name")[i].innerHTML = "**name is too big"
    }
    else{
        return true
    }
}
function validate(){
    var input = document.getElementsByClassName("input-box")
    // console.log(input[0].value)
    // console.log(input[1].value)
    // console.log(input[2].value)
    // console.log(input[3].value)
    // console.log(input[4].value)
    var dob_input = document.getElementsByClassName("dob-box")
    // console.log(dob_input[0].value)
    // console.log(dob_input[1].value)
    // console.log(dob_input[2].value)
    if(validateName(input[0].value,0) && validateName(input[1].value,1) && emailValidate(input[2].value) && validatePhone(input[3].value) && passwordValidate(input[4].value) && validateDob(dob_input[0].value) && validateDob(dob_input[1].value) && validateDob(dob_input[2].value) ){
        return true
    }

    return false
}