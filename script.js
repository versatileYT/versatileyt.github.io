function showDetails(button) {
    var accountInfo = button.previousElementSibling.innerText;
    alert("Account Details: " + accountInfo);
}

function purchaseCar(button) {
    var modal = document.getElementById('purchaseModal');
    modal.style.display = "block";

    var closeButton = document.querySelector('.close');
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    button.disabled = true;
    button.innerText = "Purchased";
}

window.onclick = function(event) {
    var modal = document.getElementById('purchaseModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
