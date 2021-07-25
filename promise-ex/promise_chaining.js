const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({ p1_text :"p1 text"})
    },2000)
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject( "error error")
    },3000)
});

Promise.all([p1,p2]).then((result)=>{
    console.log("p1 = "+result[0].p1_text);
    console.log("p2 = "+result[1].p2_text);
}).catch(err=>{
    console.log(err);
})