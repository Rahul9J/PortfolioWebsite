document.addEventListener("DOMContentLoaded", function () {
    let contentArea = document.getElementById("content-area");

    // Function to display the selected content with fade-in animation
    function showContent(section) {
        let content = "";

        if (section === "home") {
            content = `
                <h1>Welcome to My Portfolio</h1>
                <p>I'm studying <strong>BCA</strong> and building web projects with creativity & passion.</p>
            `;
        } else if (section === "projects") {
            content = `
                <h2>My Projects</h2>
                <button id="toggleProjects">Show Projects</button>
                <ul class="project-list hidden">
                    <li>📌 Project Exercise 1: Blog Website</li>
                    <li>📌 Project Exercise 2: Contact Us Form</li>
                    <li>📌 Project Exercise 3: Styling The Page</li>
                </ul>
            `;
        } else if (section === "about") {
            content = `
                <h2>About Me</h2>
                <p>I'm a BCA student passionate about web development and AI-driven applications.</p>
            `;
        } else if (section === "contact") {
            content = `
                <h2>Contact</h2>
                <p>📧 Email: rahulj9@gmail.com</p>
                <p>📍 Location: India</p>
            `;
        }

        // Insert new content and apply fade-in effect
        contentArea.innerHTML = content;
        contentArea.classList.remove("fade-in"); // Remove animation class if already applied
        void contentArea.offsetWidth; // Trick to force reflow (restart animation)
        contentArea.classList.add("fade-in"); // Apply fade-in effect

        // Attach event listener to toggle projects list
        if (section === "projects") {
            let toggleButton = document.getElementById("toggleProjects");
            let projectList = document.querySelector(".project-list");

            toggleButton.addEventListener("click", function () {
                projectList.classList.toggle("hidden");
                toggleButton.textContent = projectList.classList.contains("hidden") ? "Show Projects" : "Hide Projects";
            });
        }
    }

    // Initially, keep the content area empty
    contentArea.innerHTML = "";

    // Expose showContent function globally so it can be used in HTML
    window.showContent = showContent;

    document.getElementById("githubBtn").addEventListener("click", function() {
        window.open("https://github.com/Rahul9J", "_blank");
    });
    
});
