const fs= require('fs');

let contents="hello     world    my    name   is       raman";

fs.writeFile('filetobeclean.txt',contents,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    fs.readFile('filetobeclean.txt','utf8',(err,data)=>{
        if(err) return;

        data=data.split(/\s+/g).join(" ");
        fs.writeFile('filetobeclean.txt',data,{flag:'w'},(err)=>{
            if(err)console.log(err)
        });
    });
});


