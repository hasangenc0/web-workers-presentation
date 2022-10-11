function heavy() {
  while(true) {

  }
}

button.addEventListener('click', () => {
  const el = document.createElement('div')
  el.style.color = 'red'
  el.innerHTML = 'Hello World!'
  document.body.appendChild(el)
  heavy();
})
