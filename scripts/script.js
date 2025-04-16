document.addEventListener("DOMContentLoaded", function () {
        const orderButtons = document.querySelectorAll(".order-button");
        const productNameInput = document.getElementById("productName");
        const orderModal = new bootstrap.Modal(document.getElementById("orderModal"));
        
        orderButtons.forEach(button => {
            button.addEventListener("click", function () {
                const productName = this.getAttribute("data-product");
                productNameInput.value = productName;
                orderModal.show();
            });
        });

        document.getElementById("orderForm").addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Siparişiniz başarıyla alındı!");
            orderModal.hide();
            this.reset();
        });
    });

function handleFormSubmission() {
    // Получаем все формы на странице
    const forms = document.querySelectorAll("form");

    // Для каждой формы добавляем событие отправки
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Отменяем стандартное поведение отправки формы
            window.location.href = "/thankyou.html"; // Перенаправляем на страницу «Спасибо»
        });
    });
}

// Запускаем функцию после загрузки страницы
document.addEventListener("DOMContentLoaded", handleFormSubmission);
