// MODAL
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open-basket]'),
        closeModalBtn: document.querySelector('[data-modal-close-basket]'),
        modal: document.querySelector('[data-modal-basket]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden-basket');
    }
})();
//