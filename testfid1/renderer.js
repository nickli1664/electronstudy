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


