// select all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');

// Button click and selected player update
function addPlayer(playerName){
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for(const button of buttons){
    button.addEventListener('click' , (e)=>{
        if(selectedPlayer.children.length <= 4){
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        }
        else{
            button.classList.remove('disabled');
            alert('5 Played already Selected');
        }
    })
} 


// A common function for getInput value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    document.getElementById(inputId).value = '';
    return inputFieldValue
};

function getValueOfElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function(){

    const playerBudget = document.getElementById('per_player_budget');

    if(playerBudget.value == '' || playerBudget.value < 0){
        alert('Please enter valid amount');
        return 0;
    }

    else{

        const perPlayerBudget = getInputValue('per_player_budget');

        let totalPlayerExpense =  perPlayerBudget * 5;

        console.log(totalPlayerExpense);

        getValueOfElement( 'player_expense', totalPlayerExpense) 
        
    }
})
document.getElementById('calculate_total_budget').addEventListener('click', function(){
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)

    const managerBudget = document.getElementById('manager_budget');
    const coachBudget = document.getElementById('coach_budget');
    
    if(managerBudget.value == '' || managerBudget.value < 0 || coachBudget.value == '' || coachBudget.value < 0){
        alert('Please enter valid amount for manager or coach');
        return 0;
    }

    else{
        
        const managerBudget = parseInt(getInputValue('manager_budget'));
        const coachBudget = parseInt(getInputValue('coach_budget'));
        let totalExpense = playerTotalBudget + managerBudget + coachBudget;
            getValueOfElement( 'player_total_expense', totalExpense)
    }
})