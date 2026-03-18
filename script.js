const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Do something today that your future self will thank you for.",
  "Happiness depends upon ourselves.",
  "Turn your wounds into wisdom.",
  "The best way to predict the future is to create it.",
  "Everything you can imagine is real.",
  "Stay hungry, stay foolish.",
  "Small steps every day lead to big results.",
  "Your only limit is your mind.",
  "Doubt kills more dreams than failure ever will.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Opportunities don't happen, you create them.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The secret of getting ahead is getting started.",
  "It always seems impossible until it's done."
];

const usedIndex = new Set()
const quotesElement = document.getElementById("Quote")

function generateQuote(){
  if (usedIndex.size >= quotes.length){
    usedIndex.clear()
  }
  
  while(true){
   const randomIdx = Math.floor(Math.random() * quotes.length)

   if (usedIndex.has[randomIdx]) continue

   const quote = quotes[randomIdx]
   quotesElement.innerHTML = quote;
   usedIndex.add(randomIdx)
   break
  }
}