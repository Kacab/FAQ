// let add = document.querySelector('#plus')
// let minus = document.querySelector("#minus")
// let show = document.querySelector('#show')

// add.addEventListener('click', function () {
//     show.classList.remove('hidden')
//     minus.classList.remove('hidden')
//     add.classList.add('hidden')
// })

// minus.addEventListener('click', function () {
//     show.classList.add('hidden')
//     add.classList.remove('hidden')
//     minus.classList.add('hidden')
// })


// let add2 = document.querySelector('#plus2')
// let minus2 = document.querySelector("#minus2")
// let show2 = document.querySelector('#show2')

// add2.addEventListener('click', function () {
//     show2.classList.remove('hidden')
//     minus2.classList.remove('hidden')
//     add2.classList.add('hidden')
// })

// minus2.addEventListener('click', function () {
//     show2.classList.add('hidden')
//     add2.classList.remove('hidden')
//     minus2.classList.add('hidden')
// })

// let add3 = document.querySelector('#plus3')
// let minus3 = document.querySelector("#minus3")
// let show3 = document.querySelector('#show3')

// add3.addEventListener('click', function () {
//     show3.classList.remove('hidden')
//     minus3.classList.remove('hidden')
//     add3.classList.add('hidden')
// })

// minus3.addEventListener('click', function () {
//     show3.classList.add('hidden')
//     add3.classList.remove('hidden')
//     minus3.classList.add('hidden')
// })




// let add4 = document.querySelector('#plus4')
// let minus4 = document.querySelector("#minus4")
// let show4 = document.querySelector('#show4')
// let display = document.querySelector('#white')

// add4.addEventListener('click', function () {
//     show4.classList.remove('hidden')
//     minus4.classList.remove('hidden')
//     add4.classList.add('hidden')

// })

// minus4.addEventListener('click', function () {
//     show4.classList.add('hidden')
//     minus4.classList.add('hidden')
//     add4.classList.remove('hidden')
//     display.document.remove('white')
// })


// // Function to calculate and set the FAQ container's height
// function adjustContainerHeight() {
//     // Get all visible question-answer pairs
//     const visibleQA = document.querySelectorAll('.QA > .show:not(.hidden)');

//     let totalHeight = 0;
//     // Calculate total height of visible question-answer pairs
//     visibleQA.forEach(function (qa) {
//         totalHeight += qa.scrollHeight;
//     });

//     // Set the height of the FAQ container to the calculated total height
//     const faqContainer = document.querySelector('.faq');
//     faqContainer.style.height = totalHeight + 'px';
// }

// // Add event listeners to toggle buttons to recalculate container height when clicked
// document.querySelectorAll('[id^="plus"]').forEach(function (button) {
//     button.addEventListener('click', function () {
//         // Toggle visibility of answer and recalculate container height
//         const targetId = button.id.replace('plus', 'show');
//         const answer = document.getElementById(targetId);
//         answer.classList.toggle('hidden');
//         button.nextElementSibling.classList.toggle('hidden');
//         adjustContainerHeight();
//     });
// });
let add = document.querySelector('#plus')
let minus = document.querySelector("#minus")
let show = document.querySelector('#show')

add.addEventListener('click', function () {
    show.classList.remove('hidden')
    minus.classList.remove('hidden')
    add.classList.add('hidden')
})

minus.addEventListener('click', function () {
    show.classList.add('hidden')
    add.classList.remove('hidden')
    minus.classList.add('hidden')
})


let add2 = document.querySelector('#plus2')
let minus2 = document.querySelector("#minus2")
let show2 = document.querySelector('#show2')

add2.addEventListener('click', function () {
    show2.classList.remove('hidden')
    minus2.classList.remove('hidden')
    add2.classList.add('hidden')
})

minus2.addEventListener('click', function () {
    show2.classList.add('hidden')
    add2.classList.remove('hidden')
    minus2.classList.add('hidden')
})

let add3 = document.querySelector('#plus3')
let minus3 = document.querySelector("#minus3")
let show3 = document.querySelector('#show3')

add3.addEventListener('click', function () {
    show3.classList.remove('hidden')
    minus3.classList.remove('hidden')
    add3.classList.add('hidden')
})

minus3.addEventListener('click', function () {
    show3.classList.add('hidden')
    add3.classList.remove('hidden')
    minus3.classList.add('hidden')
})

let add4 = document.querySelector('#plus4')
let minus4 = document.querySelector("#minus4")
let show4 = document.querySelector('#show4')

add4.addEventListener('click', function () {
    show4.classList.remove('hidden')
    minus4.classList.remove('hidden')
    add4.classList.add('hidden')
})

minus4.addEventListener('click', function () {
    show4.classList.add('hidden')
    minus4.classList.add('hidden')
    add4.classList.remove('hidden')
})




