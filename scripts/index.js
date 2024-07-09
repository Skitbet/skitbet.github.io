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

function calculateExperience(startDate) {
    const today = new Date();
    const start = new Date(startDate);
    const diff = today - start;
    const years = diff / (1000 * 60 * 60 * 24 * 365);
    return years.toFixed(1);
}
$(document).ready(function() {
    $.getJSON('https://raw.githubusercontent.com/Skitbet/skitbet.github.io/main/languages.json', function(data) {
        const skillsGrid = $('#skills-grid');
        $.each(data, function(index, skill) {
            const skillDiv = $('<div>').addClass('skill').text(skill.skill);
            skillsGrid.append(skillDiv);
            const experienceDiv = $('<div>').addClass('experience').text(`${calculateExperience(skill.startDate)} years`);
            skillDiv.append(experienceDiv);
            const skillLevelDiv = $('<div>').addClass('skill-level').text(`Skill Level: ${skill.level}`);
            skillDiv.append(skillLevelDiv);
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("age").innerText = `Im currently ${calculateAgeWithDecimal("2006-05-13")} years old!`;
});

setInterval(() => {
    document.getElementById("age").innerText = `Im currently ${calculateAgeWithDecimal("2006-05-13")} years old!`;
}, 1000)