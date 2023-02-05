var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult= function (event) {
 console.log(event);
 var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML= Content;
speak();
}
function speak(){
  var synth = window.speechSynthesis;
  speak_data ="taking your selfie in 3 seconds"
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function(){
    takesnapshot()
    save()
  },3000)
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
camera = document.getElementById("camera")

function takesnapshot(){
  Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML = '<img id="selfie_image"src="'+data_url+'">'

  })

}

  link=document.getElementById("link")
  image=document.getElementById("selfie_image").src;
  link.href= image
  link.click()
function save(){
  link=document.getElementById("link")
  image=document.getElementById("selfie_image").src;
  link.href= image
  link.click()
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
   document.getElementById("textbox").innerHTML = ""; 
   recognition.start();
} 
recognition.onresult = function(event) {
console.log(event); 
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
 
 if(Content =="take my selfie")
    {
      console.log("taking selfie --- ");
      speak();
    }
 }
