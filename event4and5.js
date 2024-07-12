function status(){
    var inpVal = document.getElementById("inp").value;
    var inpLen = inpVal.length;
    console.log(inpLen);
    if(inpLen==0){
        document.getElementById("status").innerHTML="";
        
        document.getElementById("lefteye").style.transform=`translate(0px,0px)`;
        document.getElementById("righteye").style.transform=`translate(0px,0px)`;
        document.getElementById("backlip").style.transform=`translate(0px, 0px)`;
        document.getElementById("frontlip").style.transform=`translate(0px, -0px)`;
    }
    else if(inpLen>0 && inpLen<=5){
        document.getElementById("status").innerHTML="Weak Password";
        document.getElementById("status").style.color="Red";

        document.getElementById("lefteye").style.transform=`translate(-15px,5px)`;
        document.getElementById("righteye").style.transform=`translate(-15px,5px)`;
        document.getElementById("lefteye").style.transition="transform 0.5s";
        document.getElementById("righteye").style.transition="transform 0.5s";
        document.getElementById("backlip").style.transform=`translate(0px, 0px)`;
        document.getElementById("frontlip").style.transform=`translate(0px, 0px)`;
        document.getElementById("backlip").style.borderRadius="100%";
        document.getElementById("frontlip").style.borderRadius="100%";
    }
    else if(inpLen>5 && inpLen<=10){
        document.getElementById("status").innerHTML="Good Password";
        document.getElementById("status").style.color="Orange";

        document.getElementById("lefteye").style.transform=`translate(0px,0px)`;
        document.getElementById("righteye").style.transform=`translate(0px,0px)`;
        document.getElementById("lefteye").style.transition="transform 0.5s";
        document.getElementById("righteye").style.transition="transform 0.5s";
        document.getElementById("backlip").style.borderRadius="0px";
        document.getElementById("frontlip").style.borderRadius="0px";
        document.getElementById("backlip").style.transform=`translate(0px, 10px)`;
        document.getElementById("frontlip").style.transform=`translate(0px, 10px)`;

        document.getElementById("button").setAttribute("disabled","true");
    }
    else{
        document.getElementById("status").innerHTML="Strong Password";
        document.getElementById("status").style.color="Green";

        document.getElementById("lefteye").style.transform=`translate(10px,5px)`;
        document.getElementById("righteye").style.transform=`translate(10px,5px)`;
        document.getElementById("lefteye").style.transition="transform 0.5s";
        document.getElementById("righteye").style.transition="transform 0.5s";
        document.getElementById("backlip").style.transform=`translate(0px, 5px)`;
        document.getElementById("frontlip").style.transform=`translate(0px, -5px)`;
        document.getElementById("backlip").style.borderRadius="100%";
        document.getElementById("frontlip").style.borderRadius="100%";

        document.getElementById("button").removeAttribute("disabled");
    }

}

function passVis(){
    document.getElementById("passvis").src="../../Assets/images/windows_logo_key-removebg-preview.png";
    document.getElementById("passvis").style.transform="rotateY(360deg)";
    document.getElementById("passvis").style.transition="transform 0.5s";
    document.getElementById("inp").type="text";
}
function passInvis(){
    document.getElementById("passvis").src="../../Assets/images/super symbol.jpg";
    document.getElementById("passvis").style.transform="rotateY(0deg)";
    document.getElementById("inp").type="password";
}