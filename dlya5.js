function insert (num) {
    var olol = document.getElementById('lol');
    olol.value += num;
}
function mnog () {
    var olol = document.getElementById('lol');
    if (olol.value!='' && olol.value.indexOf('*') == -1 && olol.value.indexOf('+') == -1 && olol.value.indexOf('-') == -1 && olol.value.indexOf('/') == -1) olol.value += '*';}
function min () {
    var olol = document.getElementById('lol');
    if (olol.value!='' && olol.value.indexOf('*') == -1 && olol.value.indexOf('+') == -1 && olol.value.indexOf('-') == -1 && olol.value.indexOf('/') == -1) olol.value += '-';}
function pls () {
    var olol = document.getElementById('lol');
    if (olol.value!='' && olol.value.indexOf('*') == -1 && olol.value.indexOf('+') == -1 && olol.value.indexOf('-') == -1 && olol.value.indexOf('/') == -1) olol.value += '+';}
function del () {
    var olol = document.getElementById('lol');
    if (olol.value!='' && olol.value.indexOf('*') == -1 && olol.value.indexOf('+') == -1 && olol.value.indexOf('-') == -1 && olol.value.indexOf('/') == -1) olol.value += '/';}
function clean () {
    document.form.textview.value = "";
}
function equal () {
   var a = document.form.textview.value;
   var b = eval(a)
   if (b != Infinity){
       if (a) document.form.textview.value = eval(a);
   }
   else {alert('Нельзя делить на ноль');
   document.form.textview.value = "";}
}