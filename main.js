function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();
  
    const ageInMilliseconds = currentDate - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.44; 
    const ageInYears = ageInMonths / 12;
  
    const age = {
      years: Math.floor(ageInYears),
      months: Math.floor(ageInMonths % 12),
      days: Math.floor(ageInDays % 30.44),
    };
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your age is: ${age.years} years, ${age.months} months, and ${age.days} days.`;
  }
  