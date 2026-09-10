const weekButtons = document.querySelectorAll(".week-button");


weekButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const weekItem = this.parentElement;

        weekItem.classList.toggle("active");

    });

});

