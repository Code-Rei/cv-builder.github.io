document.addEventListener("DOMContentLoaded", function() {
    // Function to add a new item to a list
    function addItemToList(listId) {
        const list = document.getElementById(listId);
        const newItem = document.createElement('li');
        newItem.contentEditable = true;
        newItem.innerText = 'New Item';
        list.appendChild(newItem);
    }

    // Add event listeners to buttons
    document.getElementById('add-summary-item').addEventListener('click', function() {
        addItemToList('professional-summary');
    });

    document.getElementById('add-key-skill').addEventListener('click', function() {
        addItemToList('key-skills');
    });

    document.getElementById('add-strength').addEventListener('click', function() {
        addItemToList('strengths');
    });

    // Optional: Add Intersection Observer for fade-in effect
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    document.querySelectorAll('.content').forEach(section => {
        observer.observe(section);
    });
});
