/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "I miss you! " + person.firstName + ", " + person.lastName + "! ";
}
function onSubmit() {
    var user = new Student($('#firstname').val(), $('#middlename').val(), $('#lastname').val());
    $('#infoSection').hide(250, function () {
        $('#displaySection').html(greeter(user)).show(250);
    });
    return false;
}
//# sourceMappingURL=app.js.map