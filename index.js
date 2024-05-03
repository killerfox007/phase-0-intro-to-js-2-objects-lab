// Write your solution in this file!
const employee = {
 name: "John",
 streetAdress: "123 Johns house"
}
function updateEmployeeWithKeyAndValue(newEmployee, key, value){
    const newObject = {...newEmployee}
    newObject[key] = value
    return newObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value){
    newEmployee[key] = value
    return newEmployee
}
function deleteFromEmployeeByKey(newEmployee,key){
    const newObject = {...newEmployee}
    delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(newEmployee,key){
    delete newEmployee[key]
    return newEmployee

}