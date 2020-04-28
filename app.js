const paragraph = document.querySelector('.result');
const checkButton = document.querySelector('button');
const yearInput = document.querySelector('input');

function checkIfLeap(year)  {
    if (year % 4 === 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else {
        return false;
    }

}

checkButton.addEventListener('click', () => {
    if (isNaN(+(yearInput.value)))    {
        paragraph.innerText = 'Year error. Please provide correct year.';
        paragraph.style.color = 'red';
    } else {
        if (checkIfLeap(yearInput.value))   {
            paragraph.innerText = 'This year is leap!';
            paragraph.style.color = 'green';
            paragraph.style.fontSize = '18px';
        } else {
            paragraph.innerText = 'This year is NOT leap!';
        }
    }
})