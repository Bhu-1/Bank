function insertRow(expen, amount, baln){
    var table = document.getElementById("table")
    var row = table.insertRow()
    row.insertCell(0).innerHTML = expen
    row.insertCell(1).innerHTML = amount
    row.insertCell(2).innerHTML = baln
    row.insertCell(3).innerHTML = new Date()
}
function calculate(){
    var input = document.getElementsByClassName("input-box")
    if((input[1].value)== "" || (input[2].value)== ""){
        // document.getElementById("amt-msg").innerHTML = "**field cannot be empty"
        return
    }
    var bal= (Number(input[0].value) - Number(input[2].value))
    document.getElementsByClassName("input-box")[0].value = (Number(input[0].value) - Number(input[2].value))
    insertRow(input[1].value,input[2].value, bal)
    document.getElementsByClassName("input-box")[1].value = ""
    document.getElementsByClassName("input-box")[2].value =  ""
}