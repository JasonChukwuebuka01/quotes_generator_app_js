window.onload=()=>{

 let button= document.querySelector("#btn");
 let quoteBox = document.querySelector("#quote");
 let quoteBoxCont = document.querySelector(".quote_box");
 let authorBox = document.querySelector("#author");
 
 // JAVASCRIPT COURSES COVERED
 // 1. OBJECTS.
 // 2. SWITCH STATEMENT.
 // 3. FUNCTIONS.
    
    
//CASE 1:(button event to generate quotes);
  let count =0;
 button.addEventListener("click",()=>{
  count+=1;
     
 let quotes={ // objects that holds all quotes.
  "- Albert Einstein" : '“We cannot solve problems with the kind of thinking we employed when we came up with them.”',
  
  "- Mahatma Gandhi": '“Learn as if you will live forever, live like you will die tomorrow.”',
  
   "- Mark Twain" : '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”',
  
  "- Eleanor Roosevelt" : '“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.',
  
  "- Norman Vincent Peale" : '“When you change your thoughts, remember to also change your world.”',
  
  "- Jason Chukwuebuka(me)" : '"Have a good mind but think like a criminal"',
  
  "- Winston S. Churchill":'"Success is not final; failure is not fatal: It is the courage to continue that counts."',
  
  "-Jim Rohn":'“Either you run the day or the day runs you.” ',
  "-Paulo Coelho":'“When we strive to become better than we are, everything around us becomes better too.”',
  
  "-Thomas Edison":'"Opportunity is missed by most people because it is dressed in overalls and looks like work.”',
  
 "-Steve Jobs" :'“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you havent found it yet, keep looking. Dont settle. As with all matters of the heart, youll know when you find it.” ',
 
 "-Arlan Hamilton":'We don’t just sit around and wait for other people. We just make, and we do.”',
 
 "-Jason chukwuebuka (Me)": '"Try and help yourself to a certain degree before seeking help. no one is ever going to help you from 0%.Even God cant help everyone"'
           
 }// End of object 
 
 
             
 let quoteKeys = Object.keys(quotes);
 
 let randomQuoteKeys= quoteKeys[Math.floor(Math.random()* quoteKeys.length)];
 
 
 quoteBox.innerHTML= quotes[randomQuoteKeys];
 authorBox.innerHTML= randomQuoteKeys;
 
 

// Case 1.1 (switch statement to alter background color);
    switch (count) {
  case 1:
     quoteBoxCont.style.background="#fffb85";

    break;
  case 2:
     quoteBoxCont.style.background="#abcdff";
    
    break;
  case 2:
     quoteBoxCont.style.background="#e8baff";
    
    break;
  case 3:
     quoteBoxCont.style.background="#f4ffba";
    
    break;
  case 4:
     quoteBoxCont.style.background="#f7c8fa";
    
    break;
  case 5:
     quoteBoxCont.style.background="tomato";

    break;
  case 6:
     quoteBoxCont.style.background="#fabed3";
    
   case 7:
     quoteBoxCont.style.background="#f2a98f";
    
    
    default:
    quoteBoxCont.style.background="#"+generateHex();
    count=0;

}// End of Case 1.1 switch statement.
                
});//End of CASE 1.
    
   
   
   
    

//CASE 2:(A function that generate 6 random HexColor codes);

  function generateHex(){
 let hexColors="";
 let colors ="123456789abcdefg".split("");
 
    for(let i=0; i < 6; i++){
hexColors += colors[Math.floor(Math.random()* colors.length)];
    }
 
  return hexColors ;
      
}// End of function 
     
    
}//End of General Function()✅
