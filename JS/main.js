//get Form
var form=document.querySelectorAll('.apbox')
form=this.addEventListener('change',()=>{
   var allform=document.querySelectorAll('.form1');
 
   allform.forEach(element => {
      element.style.display="block";
   });
})


//page loder
    
      var a = document.getElementById('loding');
      
      function lode(){
        setInterval(demo,300 )
      }
      function demo(){
        a.style.display = 'none'
      }

// counter
var counter1 = document.querySelector('.counter1');
      var count1=0;

      setInterval( ()=>{
        if(count1 < 1000){
          count1++
          counter1.innerText = count1;
        }
      },0.1)

// counter1
var counter0 = document.querySelector('.counter0');
var count1=0;

setInterval( ()=>{
  if(count1 < 12){
    count1++
    counter0.innerText = count1;
  }
},0.3)