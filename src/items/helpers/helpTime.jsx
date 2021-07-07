const parsetTime = (secs) => {
    const sec = secs % 60;
    const minst = (secs - sec) / 60;
    const hour = Math.trunc(secs / 3600);
    let min
    if (minst >= 60) {

        min = minst - (hour * 60)
    } else {
        min = minst
    }

    
    return `${hour > 9 ? '' : '0' + hour} : ${min > 9 ? min : '0' + min} : ${sec > 9 ? sec : '0' + sec}`
}

export default parsetTime;