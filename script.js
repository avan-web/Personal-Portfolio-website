document.getElementById("contactForm").addEventListener("submit",async function (event) {
    event.preventDefault(); // prevent page refresh

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // validate input fields
    if (!name || !email || !message) {
        alert("All fields are required");
        return;
    }

    try {
        const response = await fetch("/contact", {
            method:"POST",
            headers: {
                "content-Type" : "application/json"
            },
            body: JSON.stringify({ name,email,message})
        });
         
        const result = await response.json();
        if (response.ok) {
            alert ("message sent successfully!");
        } else {
            alert(`Error: ${result.message}`);
        }   
    } catch (error) {
        console.error("Request failed:",error);
        alert("Something went wrong.Please try again later.");
    }
});
