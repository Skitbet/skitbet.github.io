function calculateAgeWithDecimal(birthDate) {
    const now = new Date();
    const birth = new Date(birthDate);

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    let hours = now.getHours() - birth.getHours();
    let minutes = now.getMinutes() - birth.getMinutes();
    let seconds = now.getSeconds() - birth.getSeconds();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        if (months < 0) {
            years--;
            months += 11;
        }
        const daysInPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += daysInPreviousMonth;
    }
    if (hours < 0) {
        days--;
        hours += 24;
    }
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }

    const decimalMonths = months / 12;
    const decimalDays = days / (365 / 12);
    const decimalHours = hours / (365 * 24 / 12);
    const decimalMinutes = minutes / (365 * 24 * 60 / 12);
    const decimalSeconds = seconds / (365 * 24 * 60 * 60 / 12);
    
    let ageWithDecimal = years + decimalMonths + decimalDays + decimalHours + decimalMinutes + decimalSeconds;

    ageWithDecimal = Math.round(ageWithDecimal * 1e10) / 1e10;

    return ageWithDecimal;
}

setInterval(() => {
    calculateAgeWithDecimal()
}, 1500)