var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("voice"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
    speak(Content);
    if (Content == "take my selfie") {
        console.log("selfie is bieng taken in 5 seconds");
        speak();
    }
}


function speak(Content){
    var synth = window.speechSynthesis;
  //write if-else code block if the content is "hello" utter- "hello! how are you?" else utter - "Didn't get you""
    
  
  
  
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
}
function take_snapshot() {
    Webcam.snap(function (data_uri) {
document.getElementById("result").innerHTML = '<img id = "selfie_image" src = "' + data_uri + '">'
    });
}
function setTimeOutButton() {

    setTimeout(
        function() {
            alert("set TimeOut Button");
        }, 3000);
    
}
function save() { link = document.getElementById("link"); image = document.getElementById("selfie_image").src ; link.href = image; link.click(); }
function take_snapshot() { Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; }); }
