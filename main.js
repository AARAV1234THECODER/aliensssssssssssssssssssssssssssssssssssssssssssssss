//https://teachablemachine.withgoogle.com/models/LQLs5lHX8/model.json 
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LQLs5lHX8/model.json",modelready);
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error)
        
    }
    else {
        
        console.log(results)
    document.getElementById("lalala").innerHTML="i can hear-"+results[0].label;
    document.getElementById("sound_accuracy").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2) + " %";
 var soundname=results[0].label ;

 var img1=document.getElementById("alien1")
 var img2=document.getElementById("alien2")
 var img3=document.getElementById("alien3")
 var img4=document.getElementById("alien4")
 if(soundname=="clap"){
     img1.src="aliens-01.gif"
     img2.src="aliens-02.png"
     img3.src="aliens-03.png"
     img4.src="aliens-04.png"
 }
else if(soundname=="snap"){
    img2.src="aliens-02.gif"
    img1.src="aliens-01.png"
    img3.src="aliens-03.png"
    img4.src="aliens-04.png"
    }
else if(soundname=="shout"){
    img3.src="aliens-03.gif"
    img2.src="aliens-02.png"
    img1.src="aliens-01.png"
    img4.src="aliens-04.png"
}
else {
    img4.src="aliens-04.gif"
    img3.src="aliens-03.png"
    img2.src="aliens-02.png"
    img1.src="aliens-01.png"
   
}

}
}
