const wait1seconds = new Promise((resolve, reject)=>{
        reject('에러')
});

wait1seconds.then((result)=>{
    console.log("프라미스 이행완료");
}).catch((err)=>{
    console.log(err)
})