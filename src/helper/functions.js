const timeConverter = (time) => {
    const myDate = new Date( time * 1000);

    return myDate.toTimeString().slice(0, 5)
}

export { timeConverter };