const jsonfile=require('jsonfile');

const moment=require('moment');
const simplegit=require('simple-git');
const random=require('random');

const file_path="./data.json";

const makeCommit=n=>{
    if(n===0) return simplegit.push();
    const x=random.int(0,54);
    const y=random.int(0,6);
    const DATE=moment().subtract(1,'y').add(1,'d')
               .add(x,'w').add(y,'d').format();
    const data={
        date:DATE
    }
    console.log("commit at",DATE);
    jsonfile.writeFile(file_path,data,()=>{
        simplegit.add([file_path]).commit(DATE,{'--date':DATE},
                 makeCommit.bind(this,--n));
    });
}
makeCommit(100);
