document.addEventListener("DOMContentLoaded", function() {
    // Здесь можно выполнять инициализацию или другие действия после загрузки DOM

    // Пример данных о счетах пользователя (замените на реальные данные)
    var accountsData = [
        { name: "Main Account", balance: 12,500,000,000,000 },
        { name: "Savings Account", balance: 50000.00 }
    ];

    // Функция для загрузки данных о счетах и отображения в модальном окне
    function loadAccountsModal() {
        var accountList = document.getElementById("accountList");
        accountList.innerHTML = "";

        accountsData.forEach(function(account) {
            var listItem = document.createElement("li");
            listItem.classList.add("accountItem");
            listItem.innerHTML = `<strong>${account.name}:</strong> $${account.balance.toFixed(2)}`;
            accountList.appendChild(listItem);
        });

        // Отображаем модальное окно с данными о счетах
        var modal = document.getElementById('accountModal');
        modal.style.display = "block";

        // Настройка закрытия модального окна
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
});
