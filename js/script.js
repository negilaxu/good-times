const header = document.querySelector('.header');
const desktopHeader = document.querySelector('.header-desktop');
desktopHeader.innerHTML = header.innerHTML;

inView('.header')
  .on('enter', el => {
    desktopHeader.classList.remove('visible');
  })
  .on('exit', el => desktopHeader.classList.add('visible'));

VanillaTilt.init(document.querySelectorAll(".image"), {
  max: 25,
  speed: 400,
});

inView(".fade")
  .on("enter", (img) => img.classList.add("visible"))
  .on("exit", (img) => img.classList.remove("visible"));

  const registerButton = document.querySelector(".register-button");
  registerButton.addEventListener("click", (event) => {
    event.preventDefault();
    const frontEl = document.querySelector(".front");
    frontEl.classList.add("slide-up");
  });
