
let number:number = 0;
let first_input_try:boolean = true;
let first_cal_try:boolean = true;

// num1 + num2 sum
let real_cal_list: string[] | number[] = [];

function Pad_number(x:number, y:number) {
    let pad_number:number;
    let pad_string:string;

    if(y == undefined) {
        pad_string = String(x);
    } else {
        pad_string = String(x) + String(y);
    }
    
    pad_number = Number(pad_string);

    return pad_number;
}

function Pad_string(x:number|string, y:number|string) {
    let pad_string:string;

    if(y == undefined) {
        pad_string =String(x);
    } else {
        pad_string = String(x) + String(y);
    }
    
    return pad_string;
}

function value_save(x: number | string) {

   let value = <HTMLInputElement>document.getElementById("view");

   if(typeof x === 'number') {
       if(first_input_try) {
           /* 처음숫자입력 */
           number = Pad_number(x, undefined);
           first_input_try = false;
       } else {
           number = Pad_number(number, x);
       }
   } else if(x == '=') {
       /* 해당 특수문자 이전의 특수문자를 계산함 */
       let result:number;
        if(real_cal_list[1] == '+') {
            result = <number>real_cal_list[0] + number;
        } else if(real_cal_list[1] == '-') {
            result = <number>real_cal_list[0] - number;          
        } else if(real_cal_list[1] == '*') {
            result = <number>real_cal_list[0] * number;
        } else if(real_cal_list[1] == '/') {
            result = <number>real_cal_list[0] / number;
        } 
        value.value = String(result);
   } else if(x == 'AC') {
       value.value = null;
       number = 0;
       first_input_try = true;
       first_cal_try = true;
   } else { /*문자*/
       let result:number;
       if(real_cal_list[1] == '+') {
           result = <number>real_cal_list[0] + number;
           real_cal_list[0] = result;
           real_cal_list[1] = x;
           first_input_try = true; 
       } else if(real_cal_list[1] == '-') {
           result = <number>real_cal_list[0] - number;
           real_cal_list[0] = result;
           real_cal_list[1] = x;
           first_input_try = true;
       } else if(real_cal_list[1] == '*') {
           result = <number>real_cal_list[0] * number;
           real_cal_list[0] = result;
           real_cal_list[1] = x;
           first_input_try = true;
       } else if(real_cal_list[1] == '/') {
           result = <number>real_cal_list[0] / number;
           real_cal_list[0] = result;
           real_cal_list[1] = x;
           first_input_try = true;
        }
       
       if(first_cal_try) {
           real_cal_list[0] = number;
           real_cal_list[1] = x;
           first_cal_try = false;
           first_input_try = true;
       } else {
           real_cal_list[1] = x;
       }
   }
   if(x != '=' && x != "AC") { 
       value.value = Pad_string(value.value, x);    
   }
}

