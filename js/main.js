const refInp = document.querySelector('.all-money');
const refButSum = document.querySelector('.calc-total');
const refSpan = document.querySelector('.total-num');
const refButClean = document.querySelector('.clean');
const refRadioBtn30 = document.querySelector('input[value="30"]')
const refRadioBtn35 = document.querySelector('input[value="35"]')
let inpValue = '';
let sum = 0;
let percent = 0;
console.log(`sum - ${sum}`)


const handleClickSum = () => {
    const array = inpValue.split(" ");
    const newArray = array.map((number) => {
        if(number.length === 0) {
            return 0
        }
        const parseNumb = Number.parseInt(number)
        
        if(Number.isNaN(parseNumb)) {
            return 0
        }
        return parseNumb
    })

   for (const num of newArray) { 
    sum += num;
   }

    console.log(`newArray- ${newArray}`)
    refSpan.textContent = sum;
}

const handleInpSum = (event) => {
    inpValue = event.currentTarget.value
}

const handleClickClean = () => {
    refInp.value = "";
    refSpan.textContent = 0;
    refRadioBtn30.checked = false;
    refRadioBtn35.checked = false;
    sum = 0;
    inpValue = '';
    
}

const handleChangePercent = (event) => {

    if (event.currentTarget.checked && event.currentTarget.value === '30') {
        percent = Math.ceil(sum * 0.3);
        refSpan.textContent = percent;
    }
    if (event.currentTarget.checked && event.currentTarget.value === '35') {
        percent = Math.ceil(sum * 0.35);
        refSpan.textContent = percent;
    }
}

refButSum.addEventListener('click', handleClickSum)
refInp.addEventListener('input', handleInpSum)
refButClean.addEventListener('click', handleClickClean)
refRadioBtn30.addEventListener('change', handleChangePercent)
refRadioBtn35.addEventListener('change', handleChangePercent)


