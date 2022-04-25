/*
'use strict';
let phealth = 1000;
let pdam = 20;
let edam = 10;
let ehealth = 20;


let h = false
while(h == false){

 let a = Math.floor((Math.random()*3) + 1);
 console.log(a)

  if(a == 1){
    let ehealth = 100
    let edam = 20
     console.log(phealth - edam)
     console.log('lvl 10 enemy')
     let b = true
     while (b== true){
        let w = prompt('whould you like to use a (S)sword or B(bow): ')
        console.log(w)
        c = ehealth - pdam
        console.log(c)
        if(w == 's'){
            ehealth -= pdam
            console.log(ehealth)

        }

     }

 }
}
*/