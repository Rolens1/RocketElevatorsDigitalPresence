const selectOption = document.querySelector("#buildType")
const containers = document.querySelectorAll(".container-type")
const inputs = document.querySelectorAll(".numInp")



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


var feesVal
var elevatorPricing
var interestFees
var totalCost



const unitElevator = $('#unitElevator-read')

$('input[name=fees]').click(function() {
    feesVal = ($('input[name=fees]:checked').val());

    

    switch(($('input[name=fees]:checked').val())) {
        case 'standard':
            elevatorPricing = 7565
            interestFees = 0,10
            break;
        case 'premium':
            elevatorPricing = 12345
            interestFees = 0,13
            break;
        case 'excelium':
            elevatorPricing = 15400
            interestFees = 0,16
            break;
    }

        
        
});


$('input').change(function() {

    numOfElevatorCommercial = $("#commercialInp").val()

    document.getElementById('unitElevator-read').innerText = `Single unit elevator cost : ${elevatorPricing} $`
    document.getElementById('feesElevator-read').innerText = `Installation fees : ${interestFees} $`
    document.getElementById('totalCost-read').innerText = `Total Cost : ${totalCost} $`

})