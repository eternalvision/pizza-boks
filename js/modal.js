// MODAL
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();
//
// FORM
// (() => {
//     document
//         .querySelector('.js-speaker-form')
//         .addEventListener('submit', e => {
//             e.preventDefault();

//             new FormData(e.currentTarget).forEach((value, name) =>
//                 console.log(`${name}: ${value}`),
//             );
//         });
// })();
//
//
// ВАРИАНТ с ID
// var textArray = ['400₽', '200₽']

// function func() {
//     var value = textArray.shift();
//     textArray.push(value);
//     document.querySelectorAll('h3.zzz');
// }
//
//
//
// ВАРИАНТ С КЛАССОМ
// function func() {
//     var elems = document.querySelectorAll('h5.zzz');
//     for (var i = 0; i < elems.length; i++) {
//         elems[0].innerHTML = '400₽';
//     }
// }
// document.querySelectorAll("h5");
//
// ЕЩЕ ОДИН ВАРИАНТ
// (function() {
//     var mas = ['1', '490₽', '3', '200₽'];
//     var n = 0;
//     var lab = document.getElementsByTagName('label')[0];
//     var h5 = document.getElementsByTagName('h5')[0];
//     lab.onclick = function() {
//         h5.innerHTML = mas[n];
//         n++;
//         if (!mas[n]) {
//             n = 0;
//         }
//     };
// })();

// (function() {
//     var mas = ['1', '400₽', '3', '200₽'];
//     var n = 0;
//     var lab = document.getElementsByTagName('label')[1];
//     var h5 = document.getElementsByTagName('h5')[1];
//     lab.onclick = function() {
//         h5.innerHTML = mas[n];
//         n++;
//         if (!mas[n]) {
//             n = 0;
//         }
//     };
// })();

// (function() {
//     var mas = ['1', '400₽', '3', '200₽'];
//     var n = 0;
//     var lab = document.getElementsByTagName('label')[2];
//     var h5 = document.getElementsByTagName('h5')[2];
//     lab.onclick = function() {
//         h5.innerHTML = mas[n];
//         n++;
//         if (!mas[n]) {
//             n = 0;
//         }
//     };
// })();

// (function() {
//     var mas = ['1', '400₽', '3', '200₽'];
//     var n = 0;
//     var lab = document.getElementsByTagName('label')[3];
//     var h5 = document.getElementsByTagName('h5')[3];
//     lab.onclick = function() {
//         h5.innerHTML = mas[n];
//         n++;
//         if (!mas[n]) {
//             n = 0;
//         }
//     };
// })();
// //
// //
// //
// //
// (function() {
//     var mas = ['1', '400₽', '3', '200₽'];
//     var n = 0;
//     var lab = document.getElementsByTagName('label')[4];
//     var h5 = document.getElementsByTagName('h5')[4];
//     lab.onclick = function() {
//         h5.innerHTML = mas[n];
//         n++;
//         if (!mas[n]) {
//             n = 0;
//         }
//     };
// })();

// (function() {
//     var mas = ['1', '400₽', '3', '200₽'];
//     var n = 0;
//     var lab = document.getElementsByTagName('label')[5];
//     var h5 = document.getElementsByTagName('h5')[5];
//     lab.onclick = function() {
//         h5.innerHTML = mas[n];
//         n++;
//         if (!mas[n]) {
//             n = 0;
//         }
//     };
// })();

// (function() {
//     var mas = ['1', '400₽', '3', '200₽'];
//     var n = 0;
//     var lab = document.getElementsByTagName('label')[6];
//     var h5 = document.getElementsByTagName('h5')[6];
//     lab.onclick = function() {
//         h5.innerHTML = mas[n];
//         n++;
//         if (!mas[n]) {
//             n = 0;
//         }
//     };
// })();

// (function() {
//     var mas = ['1', '400₽', '3', '200₽'];
//     var n = 0;
//     var lab = document.getElementsByTagName('label')[7];
//     var h5 = document.getElementsByTagName('h5')[7];
//     lab.onclick = function() {
//         h5.innerHTML = mas[n];
//         n++;
//         if (!mas[n]) {
//             n = 0;
//         }
//     };
// })();