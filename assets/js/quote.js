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
    document.getElementById('numElevator-read').innerText = `Number of elevators : 0`

}


var feesVal = 0
var numOfElevator = 0
var elevatorPricing = 0
var elevatorCost = 0
var interestFees = 0
var costInterestFees = 0
var totalCost = 0



const unitElevator = $('#unitElevator-read')

$('input[name=fees]').click(function() {
    feesVal = ($('input[name=fees]:checked').val());

    

    switch(($('input[name=fees]:checked').val())) {
        case 'standard':
            elevatorPricing = 7565
            interestFees = 0.10
            break;
        case 'premium':
            elevatorPricing = 12345
            interestFees = 0.13
            break;
        case 'excelium':
            elevatorPricing = 15400
            interestFees = 0.16
            break;
    }

    alert(interestFees)
        
});


$('input').change(function() {

    switch(selectOption.value) {
        case 'residential':
            if($("#numfloor-resi").val() <= 20) {
                numOfElevator = Math.ceil($("#numApp-resi").val() / 6) 
            }
                
            if($('#numfloor-resi').val() > 20){
                numOfElevator = (Math.ceil($("#numApp-resi").val() / 6)) * (Math.ceil($('#numfloor-resi').val() / 20))   
            }
                     
            break;

        case 'commercial':
            numOfElevator = $("#commercialInp").val()
            break;

        case 'corporate':
            alert("corporate")
            break;

        case 'hybrid':
            alert("hybrid")
            break;
    }

    elevatorCost = (numOfElevator *elevatorPricing).toFixed(2)
    costInterestFees = (elevatorCost * interestFees).toFixed(2)
    totalCost = (parseFloat(elevatorCost) + parseFloat(costInterestFees)).toFixed(2)
    

    document.getElementById('numElevator-read').innerText = `Number of elevators : ${numOfElevator}`
    document.getElementById('unitElevator-read').innerText = `Single unit elevator cost : ${elevatorPricing} $`
    document.getElementById('feesElevator-read').innerText = `Installation fees : ${costInterestFees} $`
    document.getElementById('totalCost-read').innerText = `Total Cost : ${totalCost} $`
    document.getElementById('totalElevator-read').innerText = `Elevator total cost : ${elevatorCost} $`

    

})