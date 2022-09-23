function receivesAFunction(spy){
    console.log(spy());
}

function returnsANamedFunction(){
    return returnsANamedFunction
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}


