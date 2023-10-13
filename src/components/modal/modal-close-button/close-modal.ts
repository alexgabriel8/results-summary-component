export function closeModal() {
    document.querySelector('.modal-background')?.classList.remove('open');
    document.querySelector('body')!.style.overflow = 'auto';
}