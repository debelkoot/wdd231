document.addEventListener("DOMContentLoaded", () => {
    const resultsContainer = document.getElementById("results-container");
    if (!resultsContainer) return;

    const urlParams = new URLSearchParams(window.location.search);

    // Map the required form field names to human-readable labels
    const requiredFields = [
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "email", label: "Email Address" },
        { key: "phone", label: "Mobile Phone Number" },
        { key: "organization", label: "Business / Organization Name" },
        { key: "timestamp", label: "Application Date & Time" }
    ];

    requiredFields.forEach(field => {
        const value = urlParams.get(field.key) || "Not provided";
        
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("result-item");

        const labelSpan = document.createElement("span");
        labelSpan.classList.add("result-label");
        labelSpan.textContent = field.label;

        const valueSpan = document.createElement("span");
        valueSpan.classList.add("result-value");
        valueSpan.textContent = value;

        itemDiv.appendChild(labelSpan);
        itemDiv.appendChild(valueSpan);
        resultsContainer.appendChild(itemDiv);
    });
});
