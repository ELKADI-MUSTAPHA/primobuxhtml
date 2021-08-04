



const sr = ScrollReveal({
    origin: 'left',
    distance: '150px',
    duration: 1500,
    reset: false
    
});


sr.reveal(`.info, .steps, .col.one, .col.three`, {
    interval: 150
})


const sr2 = ScrollReveal({
    origin: 'right',
    distance: '150px',
    duration: 1500,
    reset: false
});

sr2.reveal(`.col.two`, {
    interval: 150
})
// if(window.innerWidth > 768){

//     sr2.reveal(``, {
//         interval: 150
//     })
// }