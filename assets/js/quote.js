const selectOption = document.querySelector("#buildType")
const containers = document.querySelectorAll(".container-type")
const inputs = document.querySelectorAll("input")

document.body.onload = function () {
    for (i = 0; i < containers.length; i++) {
        containers[i].classList.add("hide")
    }
}

selectOption.onchange = function() {
    for (i = 0; i < containers.length; i++) {
        containers[i].classList.remove("active")
        containers[i].classList.add("hide")
    }

    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = " "
    }
    document.querySelector("#"+selectOption.value).classList.add("active")
    document.querySelector("#"+selectOption.value).classList.remove("hide")
    console.log(selectOption.value)

}