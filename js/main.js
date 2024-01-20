const refInp = document.querySelector(".all-money");
const refButSum = document.querySelector(".calc-total");
const refSpanSum = document.querySelector(".total-num");
const refSpanCost = document.querySelector(".cost-lesson");
const refSpanCostKoTr = document.querySelector('.sum-ko-tr');
const refButClean = document.querySelector('.clean');
const refRadioBtn30 = document.querySelector('input[value="30"]');
const refRadioBtn35 = document.querySelector('input[value="35"]');
const refRadioBtn4 = document.querySelector('input[value="4"]');
const refRadioBtn5 = document.querySelector('input[value="5"]');
const refSelectLesson = document.querySelector('.select-ko-lesson');
const refMissedData = document.querySelector('.missed-date');

let inpValue = '';
let sum = 0;
let percent = 0;
let missedDate = ''
const costKoTrainer = 200;
console.log(`sum - ${sum}`);

const handleClickSum = () => {
  const array = inpValue.split(" ");
  const newArray = array.map((number) => {
    if (number.length === 0) {
      return 0;
    }
    const parseNumb = Number.parseInt(number);

    if (Number.isNaN(parseNumb)) {
      return 0;
    }
    return parseNumb;
  });

  for (const num of newArray) {
    sum += num;
  }

  console.log(`newArray- ${newArray}`);
  refSpanSum.textContent = sum;
};

const handleInpSum = (event) => {
  inpValue = event.currentTarget.value;
};

const handleClickClean = () => {
  refInp.value = "";
  refSpanSum.textContent = 0;
  refSpanCost.textContent = 0;
  refRadioBtn30.checked = false;
  refRadioBtn35.checked = false;
  refRadioBtn4.checked = false;
  refRadioBtn5.checked = false;
  refSelectLesson.value = "0";
  refSpanCostKoTr.textContent = 0;
  sum = 0;
  percent = 0;
  inpValue = "";
};

const handleChangePercent = (event) => {
  if (event.currentTarget.checked && event.currentTarget.value === "30") {
    percent = Math.ceil(sum * 0.3);
    refSpanSum.textContent = percent;
  }
  if (event.currentTarget.checked && event.currentTarget.value === "35") {
    percent = Math.ceil(sum * 0.35);
    refSpanSum.textContent = percent;
  }
};

const handleChangeQuantity = (event) => {
  if (event.currentTarget.checked && event.currentTarget.value === "4") {
    const costOneLesson = Math.round(percent / 4);
    refSpanCost.textContent = costOneLesson;
  }
  if (event.currentTarget.checked && event.currentTarget.value === "5") {
    const costOneLesson = Math.round(percent / 5);
    refSpanCost.textContent = costOneLesson;
  }
};

const handleSelectLesson = (event) => {
  switch (event.currentTarget.value) {
    case "1":
      refSpanCostKoTr.textContent = costKoTrainer * 1;
      break;
    case "2":
      refSpanCostKoTr.textContent = costKoTrainer * 2;
      break;
    case "3":
      refSpanCostKoTr.textContent = costKoTrainer * 3;
      break;
    case "4":
      refSpanCostKoTr.textContent = costKoTrainer * 4;
      break;
    case "5":
      refSpanCostKoTr.textContent = costKoTrainer * 5;
      break;
    default:
      refSpanCostKoTr.textContent = 0;
      break;
  }
};

const handleChangeDate = (event) => {
  console.log(event.currentTarget.value);
  const originalDate = new Date(event.currentTarget.value);
  const day = originalDate.getDate();
  const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
  const formattedDateStr = day + "." + month ;
  missedDate = formattedDateStr;
  console.log(`formattedDateStr - ${formattedDateStr}`);

}

refButSum.addEventListener("click", handleClickSum);
refInp.addEventListener("input", handleInpSum);
refButClean.addEventListener("click", handleClickClean);
refRadioBtn30.addEventListener("change", handleChangePercent);
refRadioBtn35.addEventListener("change", handleChangePercent);
refRadioBtn4.addEventListener("change", handleChangeQuantity);
refRadioBtn5.addEventListener("change", handleChangeQuantity);
refSelectLesson.addEventListener("change", handleSelectLesson);
refMissedData.addEventListener("change", handleChangeDate)
