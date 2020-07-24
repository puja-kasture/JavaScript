function printwlcm() {
    var x = document.getElementById("name");
    //x.value = x.value + "helo";
    document.getElementById("print").innerHTML = "\n Hello "+ x.value +"...";
  }


//clock
const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

//dark mode
const dmode = document.getElementById('dark');
const arg=document.getElementById('body')
dmode.onclick= function darkmode(){
    arg.classList.toggle('blk');
    arg.classList.toggle('white');
    
}
