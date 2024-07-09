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
            const skillDiv = $('<div>')
                .addClass('skill')
                .addClass("grow-on-hover")
                .text(skill.language);
            skillsGrid.append(skillDiv);

            const experienceDiv = $('<div>').addClass('experience').text(`Started: {calculateExperience(skill.startDate)} years`);
            skillDiv.append(experienceDiv);

            const skillLevelDiv = $('<div>').addClass('skill-level').text(`Skill Level: ${skill.level}`);
            skillDiv.append(skillLevelDiv);
        });
    });
});

function growDiv(element) {
    const rect = element.getBoundingClientRect();
    const originalWidth = rect.width;
    const originalHeight = rect.height;
    const scaleFactor = 1.1;

    const newWidth = originalWidth * scaleFactor;
    const newHeight = originalHeight * scaleFactor;

    const moveAwayElements = document.querySelectorAll('.move-away');
    moveAwayElements.forEach(moveAwayElement => {
        const moveAwayRect = moveAwayElement.getBoundingClientRect();
        const overlap = !(rect.right < moveAwayRect.left || 
                        rect.left > moveAwayRect.right || 
                        rect.bottom < moveAwayRect.top || 
                        rect.top > moveAwayRect.bottom);

        if (overlap) {
            const deltaX = (rect.left + newWidth / 2) - (moveAwayRect.left + moveAwayRect.width / 2);
            const deltaY = (rect.top + newHeight / 2) - (moveAwayRect.top + moveAwayRect.height / 2);

            moveAwayElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    });

    element.style.transform = `scale(${scaleFactor})`;
  }

  function resetDiv(element) {
        element.style.transform = '';
        const moveAwayElements = document.querySelectorAll('.move-away');
        moveAwayElements.forEach(moveAwayElement => {
            moveAwayElement.style.transform = '';
        });
  }

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("age").innerText = `Im currently ${calculateAgeWithDecimal("2006-05-13")} years old!`;
});

setInterval(() => {
    document.getElementById("age").innerText = `Im currently ${calculateAgeWithDecimal("2006-05-13")} years old!`;
}, 20)
