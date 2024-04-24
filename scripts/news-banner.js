//array of news
const news = ["NEW EVENT: 1-4PM, WEDNESDAY 24TH APRIL, FAREHAM COLLEGE SPRING FAIR ",
"NEW EVENT: 1-4PM, WEDNESDAY 24TH APRIL, FAREHAM COLLEGE SPRING FAIR"]

//logo
const bullet = "•";
let tickerText = "";
//looping through the news array
for(let i=0; news.length; i++){
  tickerText+=news[i];
  //adds the bullet point in between news items
  if(i!=news.length-1){
    tickerText+=bullet;
  }
}


document.querySelector("#scroll").innerHTML = tickerText;