cars=[
    {
        "make": "Toyota",
        "model": "Camry",
        "year": 2022,
        "price": 250000
    },
    {
        "make": "Honda",
        "model": "Accord",
        "year": 2021,
        "price": 200000
    },
    {
        "make": "Ford",
        "model": "Mustang",
        "year": 2020,
        "price": 300000
    }
]

module.exports = async function (context, req) {

if(req.method==="GET"){
    context.res.json({arr: cars});
    
}
else if(req.method==="POST"){
    if (req.headers.what === "a") {
        if(req.body.index==cars.length-1){
            cars.pop();
            context.res.json({message:'del successfully'});
        }
        else{
            
        const index = req.body.index;
        cars.splice(index,1);
        context.res.json({message:'deleted successfully'});  
        }
        
        
    }
    else if (req.headers.what === "b") {
        context.res.json({message:'deleted successfully'});
        const index = req.query.index;
        cars.splice(index,1);
        
    }
    else if (req.headers.what === "c"){
    context.res.json({message:'added successfully'});
    const newcar=req.body;
    cars.push(newcar);
    
    }
}

}