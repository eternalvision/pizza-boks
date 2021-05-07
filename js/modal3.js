// MODAL
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-open-basket]'),
        closeModalBtn: document.querySelector('[data-close-basket]'),
        modal: document.querySelector('[data-basket]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-basket');
    }
})();
//