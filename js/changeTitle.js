const originalTitle = document.title;
let interval;


document.addEventListener('visibilitychange', ()=>{

    if(document.hidden){
        let alternar= false;
        interval = setInterval(()=>{
            document.title = alternar ? 'Volvé, te extrañamos...' : originalTitle;
            alternar = !alternar;
        }, 1500);
        
    }else{
        clearInterval(interval);
        document.title = originalTitle;
    }
});

