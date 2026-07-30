// Birthday security scan

let scanText=[

"Scanning birthday person...",

"Checking beauty level...",

"Counting candles...",

"Searching age database...",

"ERROR ❌ Too amazing to calculate 😂"

];


let index=0;


let scan=setInterval(()=>{


document.getElementById("text").innerHTML=
scanText[index];


index++;


if(index==scanText.length){


clearInterval(scan);


setTimeout(()=>{


document.getElementById("scan").style.display="none";


document.getElementById("main").style.display="block";


},1500);


}


},1000);






// Gift button running prank


let tries=0;


let giftBtn=document.getElementById("gift");



giftBtn.onmouseover=function(){


tries++;


if(tries < 5){


giftBtn.style.position="absolute";


giftBtn.style.left=Math.random()*70+"%";


giftBtn.style.top=Math.random()*70+"%";


giftBtn.innerHTML="😂 Catch me!";


}


else{


giftBtn.style.position="relative";


giftBtn.innerHTML="Okay you win 😂";


}



};






// Open gift


giftBtn.onclick=function(){


giftBtn.innerHTML="Loading gift...";


setTimeout(()=>{


giftBtn.innerHTML="3";


},1000);



setTimeout(()=>{


giftBtn.innerHTML="2";


},2000);



setTimeout(()=>{


giftBtn.innerHTML="1";


},3000);



setTimeout(()=>{


alert(

" Congratulations 😂\n\nYour gift is a secret!"

);



document.getElementById("photo").style.display="block";


confetti(200);


speak();


},4000);



};








// Funny roast generator


let jokes=[


"😂 Your cake needs a calculator for candles.",


"🤣 Your knees now have Bluetooth.",


"😂 Your age is classified information.",


"🤣 Even Google cannot find your real age ",


"😂 You don't get older, you become legendary."


];




function roast(){


let random=

Math.floor(Math.random()*jokes.length);



document.getElementById("msg").innerHTML=

jokes[random];


}







// Party mode


function party(){


confetti(300);

speak();


}







// Confetti


function confetti(amount){


for(let i=0;i<amount;i++){


let c=document.createElement("div");


c.className="confetti";


c.style.left=Math.random()*100+"vw";


c.style.background="#ffd700";


document.body.appendChild(c);



setTimeout(()=>{

c.remove();

},3000);



}


}






// Floating balloons


function balloon(){


let b=document.createElement("div");


b.className="balloon";


b.innerHTML="🎈";


b.style.left=Math.random()*100+"vw";


document.body.appendChild(b);



setTimeout(()=>{

b.remove();

},8000);


}



setInterval(balloon,700);







// Voice message


function speak(){


let message=new SpeechSynthesisUtterance(

"Happy Birthday. You are amazing. Your age is a secret because even the computer cannot calculate it and sorry for the scrren shot."

);


message.pitch=1.3;

message.rate=1;


speechSynthesis.speak(message);


}