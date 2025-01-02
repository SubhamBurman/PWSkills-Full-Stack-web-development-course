const site = "google.com"

const response = new Promise((res,rej)=>{
    console.log('downloading');
    setTimeout(() => {
            res(console.log('downloading done'));
    }, 5000);
})

response.then((res)={
    
})


