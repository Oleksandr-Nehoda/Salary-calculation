const refInp = document.querySelector(".all-money");
const refButton = document.querySelector(".calc-total");
const refSpan = document.querySelector(".total-num")
let inpValue = '';
let sum = 0;

const handleClick = () => {
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

const handleInput = (event) => {
    inpValue = event.currentTarget.value
}

refButton.addEventListener('click', handleClick)
refInp.addEventListener('input', handleInput)


