const students = []; //empty array
const maxAttempt = 4; // Max attemp submit

const form = document.getElementById('peopleInformation');
const resultsButton = document.getElementById('showResults');
const resultsDisplay = document.getElementById('results');

// Add even lister for form
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const grade = parseFloat(document.getElementById('grade').value);

    // Add information for array
    if (students.length < maxAttempt) { // Cheack atemp
        students.push({ name, grade });
        // clear form
        form.reset();

        // If max attemp show button result
        if (students.length === maxAttempt) {
            resultsButton.style.display = 'block';
        }
    } else {
        alert("Maximum for 4 people.");
    }
});

// Button result add event
resultsButton.addEventListener('click', function() {
    if (students.length === maxEntries) {
        // find min and max grade
        const highestGrade = Math.max(...students.map(s => s.grade));
        const lowestGrade = Math.min(...students.map(s => s.grade));

        const highestStudent = students.find(s => s.grade === highestGrade);
        const lowestStudent = students.find(s => s.grade === lowestGrade);

        // Show result
        resultsDisplay.innerHTML = `Highest grade: ${highestStudent.name} (${highestStudent.grade})<br>
                                    Lowest grade: ${lowestStudent.name} (${lowestStudent.grade})`;
    }
});
