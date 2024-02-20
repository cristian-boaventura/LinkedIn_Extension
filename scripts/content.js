const divElement = document.querySelector('div.pv-top-card-v2-ctas')

if (divElement) {
  const button = document.createElement('button')
  button.textContent = 'Click Me'
  button.classList.add('cta-button')
  divElement.appendChild(button)

  const drawer = document.createElement('div')
  drawer.classList.add('drawer')
  // drawer contains a form to submite the current linkedin profile info
  const name = document.querySelector('h1.text-heading-xlarge').innerText

  drawer.innerHTML = `
    <form class="drawer_form">
      <input type="text" name="name" placeholder="Nombre" value="${name}" required>
      <input type="email" name="email" placeholder="Email" required>
      <input type="text" name="linkedin" value="${window.location.href}" disabled required>
      <button class="submit_form" type="submit">Submit</button>
    </form>
  `

  const body = window.top.document.body
  body.appendChild(drawer)

  button.addEventListener('click', () => {
    body.classList.toggle('open')
    drawer.classList.toggle('open')
  })
}
