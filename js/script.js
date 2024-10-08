document.addEventListener("DOMContentLoaded", function() {
    const quoteForm = document.getElementById("quoteForm");

    // Ensure that the form exists before adding an event listener
    if (quoteForm) {
        quoteForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Capture form data
            const companyName = document.getElementById("company-name").value;
            const email = document.getElementById("email").value;
            const phoneNumber = document.getElementById("phone-number").value;
            const country = document.getElementById("country").value;
            const details = document.getElementById("details").value;

            // Validate required fields
            if (!companyName || !email || !phoneNumber || !country) {
                alert('Please fill out all required fields.');
                return;
            }

            // Google Form Submission
            const googleFormId = "1FAIpQLSfm_Y_IhFLXXdguXpTbXfu1mVdvw1mReql0YwVDR12mwaaI7w"; // Your Google Form ID
            const formData = new URLSearchParams();
            formData.append("entry.1811141431", companyName);
            formData.append("entry.745877733", email);
            formData.append("entry.1799827779", phoneNumber);
            formData.append("entry.402324675", country);
            formData.append("entry.920130168", details);

            fetch(`https://docs.google.com/forms/d/e/${googleFormId}/formResponse`, {
                method: 'POST',
                body: formData
            }).then(response => {
                console.log('Google Form submission successful.');
            }).catch(error => {
                console.error('Google Form submission error:', error);
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const demoButton = document.getElementById('see-demo-btn');
    if (demoButton) {
        demoButton.addEventListener('click', function(event) {
            showChat();  // Trigger the function to open the chatbot
        });
    }
});

function showChat() {
    const chatBox = document.getElementById('helper-box');
    const activateButton = document.getElementById('helper-activate');

    if (chatBox && activateButton) {
        // Hide the activate button and show the chat box
        activateButton.classList.add('tw-hidden');
        chatBox.classList.remove('tw-hidden');
        chatBox.classList.add('helper-visible');
    } else {
        console.error('Chatbox or activate button not found.');
    }
}


