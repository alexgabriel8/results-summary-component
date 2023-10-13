export function openModal() {
    document.querySelector('.modal-background')?.classList.add('open')
    document.querySelector('body')!.style.overflow = 'hidden'
    window.scrollTo(0, 0)
}