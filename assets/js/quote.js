const selectOption = document.querySelector("#buildType")
const containers = document.querySelectorAll(".container-type")
const inputs = document.querySelectorAll(".numInp")

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

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
    document.getElementById('elevator-amount').innerText = `Number of elevators : 0`

}

var x = 0
var feesVal = 0
var numOfElevator = 0
var numElevatorColumn = 0
var numElevatorPerColumn
var elevatorPricing = 0
var elevatorCost = 0
var interestFees = 0
var costInterestFees = 0
var totalCost = 0
var elevatorCorp = 0
const unitElevator = $('#elevator-unit-price')

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
            x = (parseInt($('#numFloor-corp').val()) + parseInt($('#numBasement-corp').val()))
            

            //Trouver le nombre d'ascencseur total nécessaire  -> ((Etage + Sous-sol)*MaxParEtage)/1000
            elevatorCorp = Math.ceil(x *parseInt($('#maxPerFloor-corp').val()) / 1000)
            console.log(elevatorCorp+" n ascenseur")
            //trouver le nombre de colonne d'ascenseur nécessaire  -> (Etage+Sous-sol)/20
            numElevatorColumn = Math.ceil(x / 20)
            console.log(numElevatorColumn+" n colonne")
            //Trouver le nombre d'ascenseur par colonne  -> Ascenseur total / Colonnes
            numElevatorPerColumn = Math.ceil(elevatorCorp / numElevatorColumn)
            console.log(numElevatorColumn+" n asc/colonne")
            numOfElevator = numElevatorPerColumn * numElevatorColumn
            break;
        case 'hybrid':
            x = (parseInt($('#numFloor-hybrid').val()) + parseInt($('#numBasement-hybrid').val()))
            //Trouver le nombre d'ascencseur total nécessaire  -> ((Etage + Sous-sol)*MaxParEtage)/1000
            elevatorCorp = Math.ceil(x *parseInt($('#maxPerFloor-hybrid').val()) / 1000)
            //trouver le nombre de colonne d'ascenseur nécessaire  -> (Etage+Sous-sol)/20
            numElevatorColumn = Math.ceil(x / 20)
            //Trouver le nombre d'ascenseur par colonne  -> Ascenseur total / Colonnes
            numElevatorPerColumn = Math.ceil(elevatorCorp / numElevatorColumn)
            numOfElevator = numElevatorPerColumn * numElevatorColumn
            break;
    }

    elevatorCost = (numOfElevator *elevatorPricing).toFixed(2)
    costInterestFees = (elevatorCost * interestFees).toFixed(2)
    totalCost = (parseFloat(elevatorCost) + parseFloat(costInterestFees)).toFixed(2)
    totalCost = numberWithCommas(totalCost)
    costInterestFees = numberWithCommas(costInterestFees)
    elevatorCost = numberWithCommas(elevatorCost)

    document.getElementById('elevator-amount').innerText = `Number of elevators : ${numOfElevator}`
    document.getElementById('elevator-unit-price').innerText = `Single unit elevator cost : ${numberWithCommas(elevatorPricing)} $`
    document.getElementById('installation-fees').innerText = `Installation fees : ${costInterestFees} $`
    document.getElementById('final-price').innerText = `Total Cost : ${totalCost} $`
    document.getElementById('elevator-total-price').innerText = `Elevator total cost : ${elevatorCost} $`

})