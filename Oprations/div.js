module.exports=(...args)=>
    {
       
        if(args.includes(0))return "can't div";
        return args.reduce(function(agg,val){
            return agg/val;
        },
        1)
    }
