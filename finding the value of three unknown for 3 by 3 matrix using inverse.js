
/**if you are a beginer the statements written in green are the ones which we call internal documentation. they help us to keep track of what each line or block of code does in a program or in this case this calculator program . They are non exequtable lines of code also known as (comments)*/



function timeDown(){
  setTimeout(()=>{
    calculateMatrix();
  },1500)
}

function calculateMatrix(){

  /**Start */
  
  /* this code is for the first column in the input area in the html */
  const  num1 =    document.querySelector('.st-row-1st-column').value;
  const  num2 =    document.querySelector('.nd-row-1st-column').value;
  const  num3 =   document.querySelector('.rd-row-1st-column').value;
  
  /* this code is for the second column of the input area in the html */
  const  num4 =   document.querySelector('.st-row-2nd-column').value;
  const  num5 =   document.querySelector('.nd-row-2nd-column').value;
  const  num6 =   document.querySelector('.rd-row-2nd-column').value;
  
  /* this code here is for the third column of the input area in the html */
  const  num7 =   document.querySelector('.st-row-3rd-column').value;
  const  num8 =   document.querySelector('.nd-row-3rd-column').value;
  const  num9 =   document.querySelector('.rd-row-3rd-column').value;
  
  /**the code below calculates the determinant of  */
   let negativeMult =  (num4 * -1);
    
   let A = num1 * ((num5  * num9) - (num8 * num6))
   let B = negativeMult * ((num2 * num9) - (num8 * num3))
   let C = num7 * ((num2 * num6) - (num5 * num3))
  
  let determinant = A + B + C;
  
  
  
  /**the code below takes the co-factors and  finds the determinant of each co-factor*/
  
  let det1 = 1 *  ((num5 * num9)  - (num8 * num6));
  let det2 = -1 * ((num2 * num9) - (num8 * num3));
  let det3 = 1 *  ((num2 * num6)  - (num5 * num3));
  let det4 = -1 * ((num4 * num9) - (num7 * num6));
  let det5 = 1 *  ((num1 * num9)  - (num7 * num3));
  let det6 = -1 * ((num1 * num6) - (num4 * num3));
  let det7 = 1 *  ((num4 * num8)  - (num7 * num5));
  let det8 = -1 * ((num1 * num8) - (num7 * num2));
  let det9 = 1 *  ((num1 * num5)  - (num4 * num2));
  
  
  
  
  document.querySelector('.js-determinant')
    .innerHTML = `1/${determinant}`;
  
  
  
  
  
  /**this is just a statement that directs us what the values typed below stand for / represents */
  document.querySelector('.statement').innerHTML = 'The determinants for the  co-factors are : '
 
 
 
  
  
  
  document.querySelector('.inverse-1').innerHTML = det1;
  document.querySelector('.inverse-2').innerHTML = det2;
  document.querySelector('.inverse-3').innerHTML = det3;
  document.querySelector('.inverse-4').innerHTML = det4;
  document.querySelector('.inverse-5').innerHTML = det5;
  document.querySelector('.inverse-6').innerHTML = det6;
  document.querySelector('.inverse-7').innerHTML = det7;
  document.querySelector('.inverse-8').innerHTML = det8;
  document.querySelector('.inverse-9').innerHTML = det9;
  
  document.querySelector('.nom-det').innerHTML= `The determinant is: ${determinant}`
  /**the code below helps to convert the determinants of the co-factors  to the inverse matrix / A raised to 
  T */
  document.querySelector('.transpose-statement').innerHTML=
  'the inverse matrix is :'
  
  document.querySelector('.transpose-1').innerHTML=det1;
  document.querySelector('.transpose-2').innerHTML=det4;
  document.querySelector('.transpose-3').innerHTML=det7;
  document.querySelector('.transpose-4').innerHTML=det2;
  document.querySelector('.transpose-5').innerHTML=det5;
  document.querySelector('.transpose-6').innerHTML=det8;
  document.querySelector('.transpose-7').innerHTML=det3;
  document.querySelector('.transpose-8').innerHTML=det6;
  document.querySelector('.transpose-9').innerHTML=det9;


let answer1 =  document.querySelector('.answer-1').value;
let answer2 = document.querySelector('.answer-2').value;
let answer3 = document.querySelector('.answer-3').value



/**the code below calculates the values of the typed unknown by multiplying the inverse matrix by the determinant and the answers given in the answer input boxes*/
let value1 = 1/determinant;
let value1MultiplicationByinverse1 = 
 ((det1 * answer1) + (det4 * answer2) + (det7 * answer3));

let  value1MultiplicationByinverse2 = 
((det2 * answer1) + (det5 * answer2) + (det8 * answer3));

let value1MultiplicationByinverse3 = 
((det3 * answer1) + (det6 * answer2) + (det9 * answer3))


 let displaydAnswer1 =  value1 * value1MultiplicationByinverse1

 let displaydAnswer2 =  value1 * value1MultiplicationByinverse2

 let displaydAnswer3 = value1 * value1MultiplicationByinverse3



let symbol1 = document.querySelector('.js-symbol-1').value;
let symbol2 = document.querySelector('.js-symbol-2').value;
let symbol3 = document.querySelector('.js-symbol-3').value;

document.querySelector('.value-of-given-unknown-1')
  .innerHTML = `${symbol1} <span class="unkown-answer"> = </span>${displaydAnswer1}`;
  
document.querySelector('.value-of-given-unknown-2')
  .innerHTML = `${symbol2} <span class="unkown-answer"> = </span>${displaydAnswer2}`;

document.querySelector('.value-of-given-unknown-3')
  .innerHTML = `${symbol3} <span class="unkown-answer"> = </span>${displaydAnswer3}`;

console.log(determinant);

if(determinant === 0){
  document.querySelector('.unknown-value-container').innerHTML='<p class="det-0-messege">the determinant is either zero or you did not fill in some areas</p>'
}

  }
  
  
  document.querySelector('.js-calculate-button').addEventListener('click',()=>{
    if( document.querySelector('.statement').innerHTML===''){
document.querySelector('.statement').innerHTML = 'Calculating....'
 }
  timeDown();
  })
  

  document.querySelector('.js-cancel-button')
  .addEventListener('click',()=>{
document.querySelector('.statement').innerHTML = '';
document.querySelector('.js-determinant').innerHTML = '';
document.querySelectorAll('.input').forEach((values)=>{
  values.value = '';
});
  });

/**stop */














































