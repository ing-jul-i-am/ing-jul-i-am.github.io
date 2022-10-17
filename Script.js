var CoursesArray = ["Angular", "React", "Vue", "Javascript", "Python"]

var NextCourse = "TypeScript with wordpress";

window.onload = function ShowNextCourse () {
    document.getElementById("FutureCourses").innerHTML=NextCourse + "<br><b>Texto ingresado desde una función.</b>";
}

function ChoiceMade (Choice){
    if (Choice!="Null"){
        document.getElementById("CourseName").value = Choice;
    } else {
        alert("Choice Made " + Choice);
        document.getElementById("CourseName").value = "";
    }
}

function Validate() {
    if(Feedback.Like[0].checked == false && Feedback.Like[1].checked==false){
        //alert("You must check yes or no.");
    }
}