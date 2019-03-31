const yargs=require('yargs');
yargs.command('yargs','initial calculator',(yargs)=>{
yargs.option('add',{
    alias:'a',
}),
yargs.option('sub',{
    alias:'s',
})
}).argv;