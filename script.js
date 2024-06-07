document.addEventListener("DOMContentLoaded", function() {
    // Пример данных о счетах пользователя (замените на реальные данные)
    var accountsData = [
        { name: "Main Account", balance: 12500000000000 },
        { name: "Savings Account", balance: 50000 }
    ];

    // Функция для отображения данных о счетах в модальном окне
    function loadAccountsModal() {
        var accountList = document.getElementById("accountList");
        accountList.innerHTML = "";

        accountsData.forEach(function(account) {
            var listItem = document.createElement("li");
            listItem.classList.add("accountItem");
            listItem.innerHTML = `<strong>${account.name}:</strong> $${account.balance.toLocaleString()}`;
            accountList.appendChild(listItem);
        });

        var modal = document.getElementById('accountModal');
        modal.style.display = "block";

        var closeButton = document.querySelector('#accountModal .close');
        closeButton.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Загрузка данных о счетах при переходе на вкладку "My Accounts"
    var myAccountsTab = document.getElementById("myAccounts");
    if (myAccountsTab) {
        myAccountsTab.addEventListener("click", function() {
            loadAccountsModal();
        });
    }

    // Функция для отображения информации о деталях аккаунта
    window.showDetails = function(button) {
        var accountInfo = button.previousElementSibling.innerText;
        alert("Account Details: " + accountInfo);
    };

    // Функция для обработки покупки автомобиля
    window.purchaseCar = function(button) {
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
    };
});
