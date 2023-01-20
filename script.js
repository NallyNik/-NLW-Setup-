const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form) //inicia a biblioteca NLW
const button = document.querySelector("header button")

button.addEventListener("click", addHabits)
form.addEventListener("change", saveHabits)

function addHabits() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já adicionado!")
    return
  }

  nlwSetup.addDay(today)
}

function saveHabits() {
  //transforma objeto em string
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//transforma string em objeto
const dataHabits = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(dataHabits)
nlwSetup.load()
