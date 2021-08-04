const sr = ScrollReveal({
    origin: 'left',
    distance: '150px',
    duration: 1500,
    reset: false
    
});


sr.reveal(`.info`, {
    interval: 150
})


const sr2 = ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: 1500,
    reset: false
});
if(window.innerWidth > 768){

    sr2.reveal(`.image-svg`, {
        interval: 150
    })
}