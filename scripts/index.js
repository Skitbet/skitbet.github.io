function calculateAgeWithDecimal(date) {
    const birthDate = new Date(date);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const millisecondsInASecond = 1000;
    const secondsInAYear = 60 * 60 * 24 * 365.25; 
    const ageInSeconds = ageInMilliseconds / millisecondsInASecond;
    const ageInYears = ageInSeconds / secondsInAYear;
    return ageInYears.toFixed(10);
}

$(document).ready(function() {
    $.getJSON('https://raw.githubusercontent.com/Skitbet/skitbet.github.io/main/skills.json', function(data) {
        const skillsGrid = $('#skills-grid');
        $.each(data, function(index, skill) {
            const skillDiv = $('<div>').addClass('skill').text(skill.skill);
            const experienceDiv = $('<div>').addClass('experience').text(skill.experience);
            skillsGrid.append(skillDiv, experienceDiv);
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("age").innerText = `Im currently ${calculateAgeWithDecimal("2006-05-13")} years old!`;
});

setInterval(() => {
    document.getElementById("age").innerText = `Im currently ${calculateAgeWithDecimal("2006-05-13")} years old!`;
}, 1000)