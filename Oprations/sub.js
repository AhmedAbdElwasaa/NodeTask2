module.exports=(frist,...args)=>{
        return args.reduce(function(agg,val){
            return agg-=val;
        },frist);
    }
