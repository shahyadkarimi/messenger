const timeConverter = (time) => {
    const myDate = new Date( time * 1000);

    return myDate.toTimeString().slice(0, 5)
}

// limit message character in sidebar frineds section
const limitMsgLength = (msg) => {
    let message;

    if(msg?.length > 20) {
        message = msg.substring(0, 25)
        return message + "..."
    } else {
        message = msg;
        return msg
    }
    
}

export { timeConverter, limitMsgLength };