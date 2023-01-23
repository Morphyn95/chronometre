var sp, btn_start, btn_stop, btn_reset, t, ms, s, min, h;

window.onload = function () {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    btn_reset = document.getElementById('reset');
    t;
    ms = 0, s=0, min=0, h=0;
}

function update_chrono() {
    ms+=1;
    if(ms==10){
        ms=1;
        s+=1;
    }
    if(s==60){
        s=0;
        mn+=1
    }
    if(min==60){
        min=0;
        h+=1
    }

    // sp[0] = 1er span   sp[1] = 2eme span ...ECT....

    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = min + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;
}

function start() {
    t= setInterval(update_chrono,100) ;
    btn_start.disabled = true

}

function stop() {
    clearInterval(t);
    btn_start.disabled = false
}

function reset() {
    clearInterval(t);
    btn_start.disabled = false;
    ms=0, s=0, min=0, h=0;
    sp[0].innerHTML = h + "h" ;
    sp[1].innerHTML = min + "min" ;
    sp[2].innerHTML = s + "s" ;
    sp[3].innerHTML = ms + "ms" ;
}