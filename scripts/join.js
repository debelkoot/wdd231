document.addEventListener("DOMContentLoaded", () => {
    // 1. Set current date and time in the hidden timestamp input
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        const now = new Date();
        timestampField.value = now.toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "medium"
        });
    }

    // 2. Modal Open Functionality
    const infoButtons = document.querySelectorAll(".info-btn");
    infoButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.showModal();
            }
        });
    });

    // 3. Modal Close Functionality (Close button & backdrop click)
    const modals = document.querySelectorAll(".benefit-modal");
    modals.forEach(modal => {
        const closeBtn = modal.querySelector(".close-modal");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                modal.close();
            });
        }

        // Close modal when clicking outside the dialog box
        modal.addEventListener("click", (event) => {
            const rect = modal.getBoundingClientRect();
            const isInDialog = (
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width
            );
            if (!isInDialog) {
                modal.close();
            }
        });
    });
});
