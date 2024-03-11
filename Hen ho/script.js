document.getElementById('anniversaryPlanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    var breakfastOption = document.querySelector('input[name="breakfast"]:checked').value;
    var lunchOption = document.querySelector('input[name="lunch"]:checked').value;
    var otherBreakfast = document.getElementById('otherBreakfast').value;
    var otherLunch = document.getElementById('otherLunch').value;

    if(breakfastOption === 'Khác' && otherBreakfast.trim() !== '') {
        breakfastOption = otherBreakfast;
    }
    if(lunchOption === 'Khác' && otherLunch.trim() !== '') {
        lunchOption = otherLunch;
    }

    console.log(`Bữa sáng: ${breakfastOption}, Bữa trưa: ${lunchOption}`); // This line is for testing, you can remove it or use it to send data to a server

    // Display the conclusion message
    document.getElementById('conclusionMessage').style.display = 'block';
});
