//var randomNumber1 = Math.floor(Math.random() * 6)  //0 -> 5

//Math.floor(Math.random() * 6) + 1;

//console.log(randomNumber1);

var imageSource = `/images/dice${Math.floor(Math.random()*6)+1}.png`;
var imageSource2 = `/images/dice${Math.floor(Math.random()*6)+1}.png`;
document.querySelectorAll("img")[0].setAttribute("src", imageSource);
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);
// document.querySelector('h1').innerHTML = '1👟'
if(imageSource>imageSource2){
    document.querySelector('h1').innerHTML = '🏅 Play1 wins!'
}
else if(imageSource<imageSource2){
    document.querySelector("h1").innerHTML = "🏅 Play2 wins!";
}
else{
document.querySelector("h1").innerHTML = "🐻‍❄️ Draw!";
}
