var jsin = document.getElementById('js_input');
var rc = document.getElementById('runcreate');

runjs = function() {

 
    runcreate.innerHTML = '<input type="button" value="Run JS" onclick="' + js_input.value + '" class="runbtn"/>';
    console.log("INPUTED: " + js_input.value);
    

}