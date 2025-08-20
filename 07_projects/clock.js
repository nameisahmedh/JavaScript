const clock = document.querySelector('#localTime')

setInterval(()=>{ // This setInterval is use to specify after how much time interval the inside code should as here is 1sec
    let time = new Date()
    // console.log(time.toLocaleTimeString());
    clock.innerHTML = time.toLocaleTimeString()
},1000)