export default function (ev){
    const button = ev.currentTarget
    if (button.innerText === 'copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(document.querySelector('#result').value)
    } else {
        button.innerText = 'copy'
        button.classList.remove('success')
    }
}