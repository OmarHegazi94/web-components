const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
// const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Invalid Inputs';
    alert.message = 'Please enteer valid reason and amount';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
}

confirmBtn.addEventListener("click", function() {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || enteredAmount.trim().length <= 0
        ) {
            presentAlert();
            // alertCtrl.message = 'Please enteer valid reason and amount';
            // alertCtrl.header = 'Invalid Inputs';
            // alertCtrl.buttons = ['Okay'];
            // return alertCtrl.present();
            // .then(alertElement => {
            //     alertElement.present();
            // });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;

    clear();
});

cancelBtn.addEventListener('click', clear);