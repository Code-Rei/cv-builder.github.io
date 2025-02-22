document.getElementById("imageUpload").addEventListener("change", function(event) {
    let img = document.querySelector(".profile");
    let file = event.target.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateBtn").addEventListener("click", function() {
        let count = document.getElementById("experienceCount").value;
        let experienceSection = document.querySelector(".experiencetable"); // Select the experience section

        // Clear existing content before adding new ones
        experienceSection.innerHTML = "";

        for (let i = 0; i < count; i++) {
            let experienceDiv = document.createElement("div");
            experienceDiv.className = "experience-table";
            experienceDiv.contentEditable = "true";
            experienceDiv.innerHTML = `
                <div class="job">
                    <div class="company">
                        <h4 contenteditable="true">Company Name</h4>
                        <p contenteditable="true">Job Title</p>
                        <p><strong contenteditable="true">Start Date</strong> | <strong contenteditable="true">End Date</strong></p>
                    </div>
                    <div class="points">
                        <ul contenteditable="true">
                            <li contenteditable="true"><strong>Project Management:</strong> Oversee development teams...</li>
                            <li contenteditable="true"><strong>BRD & Documentation:</strong> Create Business Requirement Documents...</li>
                            <li contenteditable="true"><strong>Wireframe Building:</strong> Design wireframes to visualize user flow...</li>
                            <li contenteditable="true"><strong>UI Design:</strong> Create user-friendly interfaces...</li>
                            <li contenteditable="true"><strong>SQL:</strong> Worked with large SQL tables for data extraction...</li>
                            <li contenteditable="true"><strong>Testing:</strong> Conduct functional and cross-browser testing...</li>
                            <li contenteditable="true"><strong>Requirement Analysis:</strong> Gather and analyze business requirements...</li>
                        </ul>
                    </div>
                </div>
            `;

            // Append each generated experience inside the experience section
            experienceSection.appendChild(experienceDiv);
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateEducationBtn").addEventListener("click", function () {
        let count = document.getElementById("educationCount").value;
        let educationTable = document.getElementById("educationBody");

        educationTable.innerHTML = "";

        for (let i = 0; i < count; i++) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td contenteditable="true">Degree ${i + 1}</td>
                <td contenteditable="true">Institution ${i + 1}</td>
                <td contenteditable="true">Year</td>
            `;
            educationTable.appendChild(row);
        }
    });

    document.getElementById("generateCertificationBtn").addEventListener("click", function () {
        let count = document.getElementById("certificationCount").value;
        let certificationTable = document.getElementById("certificationBody");

        certificationTable.innerHTML = "";

        for (let i = 0; i < count; i++) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td contenteditable="true">Certification ${i + 1}</td>
                <td contenteditable="true">Institution ${i + 1}</td>
                <td contenteditable="true">Year</td>
            `;
            certificationTable.appendChild(row);
        }
    });

    document.getElementById("generateSkillsBtn").addEventListener("click", function () {
        let count = document.getElementById("skillsCount").value;
        let skillsTable = document.getElementById("skillsBody");

        skillsTable.innerHTML = "";

        for (let i = 0; i < count; i++) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td contenteditable="true">Technical Skill ${i + 1}</td>
                <td contenteditable="true">Soft Skill ${i + 1}</td>
            `;
            skillsTable.appendChild(row);
        }
    });

    document.getElementById("generateLanguagesBtn").addEventListener("click", function () {
        let count = document.getElementById("languagesCount").value;
        let languagesTable = document.getElementById("languagesBody");

        languagesTable.innerHTML = "";

        for (let i = 0; i < count; i++) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td contenteditable="true">Language ${i + 1}</td>
                <td contenteditable="true">Proficiency Level</td>
            `;
            languagesTable.appendChild(row);
        }
    });
});
