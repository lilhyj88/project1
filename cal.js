var cnt = 0;
var number = 0;
var first_input_try = true;
var first_cal_try = true;
// num1 + num2 sum
var real_cal_list = [];
function Pad_number(x, y) {
    var pad_number;
    var pad_string;
    if (y == undefined) {
        pad_string = String(x);
    }
    else {
        pad_string = String(x) + String(y);
    }
    pad_number = Number(pad_string);
    return pad_number;
}
function Pad_string(x, y) {
    var pad_string;
    if (y == undefined) {
        pad_string = String(x);
    }
    else {
        pad_string = String(x) + String(y);
    }
    return pad_string;
}
function value_save(x) {
    var value = document.getElementById("view");
    console.log(x);
    if (typeof x === 'number') {
        if (first_input_try) {
            number = Pad_number(x, undefined);
            first_input_try = false;
        }
        else {
            number = Pad_number(number, x);
        }
    }
    else if (x == '=') {
        var result = void 0;
        if (real_cal_list[1] == '+') {
            result = real_cal_list[0] + number;
        }
        else if (real_cal_list[1] == '-') {
            result = real_cal_list[0] - number;
        }
        else if (real_cal_list[1] == '*') {
            result = real_cal_list[0] * number;
        }
        else if (real_cal_list[1] == '/') {
            result = real_cal_list[0] / number;
        }
        value.value = String(result);
    }
    else if (x == 'AC') {
        value.value = null;
        number = 0;
        first_input_try = true;
        first_cal_try = true;
        console.log('aaaaaaa');
        console.log("1 :" + value.value);
    }
    else {
        var result = void 0;
        if (real_cal_list[1] == '+') {
            result = real_cal_list[0] + number;
            real_cal_list[0] = result;
            real_cal_list[1] = x;
            first_input_try = true;
        }
        else if (real_cal_list[1] == '-') {
            result = real_cal_list[0] - number;
            real_cal_list[0] = result;
            real_cal_list[1] = x;
            first_input_try = true;
        }
        else if (real_cal_list[1] == '*') {
            result = real_cal_list[0] * number;
            real_cal_list[0] = result;
            real_cal_list[1] = x;
            first_input_try = true;
        }
        else if (real_cal_list[1] == '/') {
            result = real_cal_list[0] / number;
            real_cal_list[0] = result;
            real_cal_list[1] = x;
            first_input_try = true;
        }
        if (first_cal_try) {
            real_cal_list[0] = number;
            real_cal_list[1] = x;
            first_cal_try = false;
            first_input_try = true;
        }
        else {
            real_cal_list[1] = x;
        }
    }
    if (x != '=' && x != "AC") {
        console.log("2 :" + x);
        console.log("3 :" + value.value);
        value.value = Pad_string(value.value, x);
        console.log("4 :" + value.value);
    }
    console.log('5 :  ' + value.value);
}
