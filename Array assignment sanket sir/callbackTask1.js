const site = "360eyetechnologies.in"
const newSite = "burmanindia.in"

function downloader(site, writeFile) {
  console.log("downloading data from ",site,"...");
  let file = "productData.txt";
  setTimeout(() => {
    console.log("Downloading Done");
    writeFile(file);
  }, 4000);
}

function writeFile(file,uploadFile){
  console.log("Editing File ",file , "to data.txt...");
  setTimeout(() => {
    console.log("Editing Completed");
     uploadFile(file,newSite)
  }, 2000);
}
            
function uploadFile(file,newSite){
  console.log("Uploading File ",file , "to ",newSite,"...");
  setTimeout(() => {
    console.log("Uploaded Successfully");

  }, 5000);
}
              


downloader(site,(file)=>{
    writeFile(file,(newSite)=>{
      uploadFile(file,newSite);
    })
});



