/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "I miss you! " + person.firstName + ", " + person.lastName + "! ";
}

function onSubmit() {
    var user = new Student($('#firstname').val(), $('#middlename').val(), $('#lastname').val());
    $('#infoSection').hide(250, function () {
        $('#displaySection').html(greeter(user)).show(250);
    });
    return false;
}
