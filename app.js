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

yearInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13)   {
        checkButton.click();
        yearInput.value = '';
    }
})

checkButton.addEventListener('click', () => {
    if (isNaN(+(yearInput.value)))    {
        paragraph.innerText = 'Year error. Please provide correct year.';
        paragraph.style.color = 'red';
        yearInput.value = '';
    } else {
        if (checkIfLeap(yearInput.value))   {
            paragraph.innerText = `Year ${yearInput.value} is leap!`;
            paragraph.style.color = 'green';
            paragraph.style.fontSize = '18px';
            yearInput.value = '';

        } else {
            paragraph.innerText = `Year ${yearInput.value} is NOT leap!`;
            yearInput.value = '';

        }
    }
})