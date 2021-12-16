// Write your solution in this file!

let employee = {
    name: "",
    streetAddress: ""
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const modifiedEmployee = Object.assign({}, employee);
  modifiedEmployee[key] = value;
  return modifiedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const modifiedEmployee = Object.assign({}, employee);
    delete modifiedEmployee[key];
    return modifiedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
