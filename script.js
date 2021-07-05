const log = console.log



function huiswerkMaken(vak, callback){ 
    log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)    
    setTimeout( callback , 5000)
    
    
}

function  klaarMetHuiswerk(){
    log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}

huiswerkMaken("wiskunde", klaarMetHuiswerk())

