// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
//console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg)// prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')

var inputbf = document.getElementById("sccbf");
inputbf.style.opacity = 0;

inputbf.addEventListener('change', updatefile);

function updatefile(){

    var curFile = inputbf.files
	
	if(curFile.length !== 0)
	{

    var fileups = document.getElementById("sizelabel");
   //console.log(curFile.length);
    fileups.textContent = returnFileSize(curFile[0].size);
	
	var fileupn = document.getElementById("lsccbf");
	fileupn.textContent = curFile[0].name;
	}
}

function returnFileSize(number) {
          if(number < 1024) {
            return number + 'bytes';
          } else if(number > 1024 && number < 1048576) {
            return (number/1024).toFixed(1) + 'KB';
          } else if(number > 1048576) {
            return (number/1048576).toFixed(1) + 'MB';
          }
}

function test1(){
  //console.log("go");

  ipcRenderer.send('open-directory-dialog','openDirectory');

  ipcRenderer.on('selectedItemp',(event, arg) => {
  //console.log(arg);// prints "pong"
  if (arg != null)
  {
    document.getElementById('ppathb').innerHTML = arg;
  }
});

}

function changespathb(){
  //console.log("go");

  ipcRenderer.send('open-directory-dialogsecond','openDirectory');

  ipcRenderer.on('selectedItems',(event, arg) => {
  //console.log(arg);// prints "pong"
  if (arg != null)
  {
    document.getElementById('spathb').innerHTML = arg;
  }
});

}

function qaddpair(){
  var x = document.getElementById("list");
  var option = document.createElement("option");
  var pp = document.getElementById("ppathb").innerHTML;
  var sp = document.getElementById("spathb").innerHTML;
  if (pp == "Click me to choose Primary Path" || sp == "Click me to choose Secondary Path")
  {
    alert("Please choose two paths.");
  }
  else if (pp == sp)
  {
    alert("Please don't add the same path.");
  }
  else
  {
    option.text = pp + "  <---->  " + sp;
    x.add(option,null);
  }
}

function deletepair(){
    var x = document.getElementById("list");
    x.remove(x.selectedIndex);
}

function deployte(){

}

function begintest(){

}

function deleteccfile(){
  
}









function getPath(e,path){

            console.log(path)

            if(path == null){

                    alert('请选择一个文件/文件夹')

            }

            else{

                        this.outpath = path   

            }
}