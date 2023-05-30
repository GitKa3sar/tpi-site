//DOM
const form = document.querySelector("form")
const submit = document.querySelector("#btn_sub")


form.addEventListener("submit" , (e) => {
    e.preventDefault()
    const d1 = document.querySelector("input[name='domanda_1']")
    console.log(d1.value);
})

/**
 * PUZZI!!!
 */