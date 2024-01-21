import { v4 as uuidv4 } from '../node_modules/uuid/dist/esm-browser/index.js';

const refInp = document.querySelector(".all-money");
const refButSum = document.querySelector(".calc-total");
const refSpanSum = document.querySelector(".total-num");
const refSpanCost = document.querySelector(".cost-lesson");
const refSpanCostKoTr = document.querySelector(".sum-ko-tr");
const refButClean = document.querySelector(".clean");
const refRadioBtn30 = document.querySelector('input[value="30"]');
const refRadioBtn35 = document.querySelector('input[value="35"]');
const refRadioBtn4 = document.querySelector('input[value="4"]');
const refRadioBtn5 = document.querySelector('input[value="5"]');
const refSelectGroup = document.querySelector(".select-group");
const refSelectLesson = document.querySelector(".select-ko-lesson");
const refSelectMissedLesson = document.querySelector(".select-missed-lesson");
const refWrapperDates = document.querySelector(".wrapper-date");
const refBtnCreateTable = document.querySelector('.create-table');
const refWrapperTable = document.querySelector(".wrapper-table");
const refTotalIncome = document.querySelector('.total-income');

let group = "Пн 17:00";
let inpValue = "";
let sum = 0;
let percent = 0;
let koTrainer = 0;
let missedDate1 = "";
let missedDate2 = "";
let missedDate3 = "";
let costOneLes = 0;
let costAllLes = 0;
let totalIncome = 0;
const costKoTrainer = 200;
console.log(`sum - ${sum}`);

const handleChangeGroup = (event) => {
  group = event.currentTarget.value;
};

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
  refSelectMissedLesson.value = "0";
  refSpanCostKoTr.textContent = 0;
  sum = 0;
  percent = 0;
  koTrainer = 0;
  inpValue = "";
  missedDate1 = "";
  missedDate2 = "";
  missedDate3 = "";
  costOneLes = 0;
  costAllLes = 0;
  refWrapperDates.innerHTML = "";
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
    costOneLes = costOneLesson;
    refSpanCost.textContent = costOneLesson;
  }
  if (event.currentTarget.checked && event.currentTarget.value === "5") {
    const costOneLesson = Math.round(percent / 5);
    costOneLes = costOneLesson;
    refSpanCost.textContent = costOneLesson;
  }
};

const handleSelectLesson = (event) => {
  switch (event.currentTarget.value) {
    case "1":
      koTrainer = costKoTrainer * 1;
      refSpanCostKoTr.textContent = koTrainer;
      break;
    case "2":
      koTrainer = costKoTrainer * 2;
      refSpanCostKoTr.textContent = koTrainer;
      break;
    case "3":
      koTrainer = costKoTrainer * 3;
      refSpanCostKoTr.textContent = koTrainer;
      break;
    case "4":
      koTrainer = costKoTrainer * 4;
      refSpanCostKoTr.textContent = koTrainer;
      break;
    case "5":
      koTrainer = costKoTrainer * 5;
      refSpanCostKoTr.textContent = koTrainer;
      break;
    default:
      koTrainer = 0;
      refSpanCostKoTr.textContent = koTrainer;
      break;
  }
};

const handleChangeDate = (index, event) => {
  console.log(event.currentTarget.value);
  const originalDate = new Date(event.currentTarget.value);
  const day = originalDate.getDate();
  const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
  const formattedDateStr = day + "." + month;
  switch (index) {
    case 0:
      missedDate1 = formattedDateStr;
      break;
    case 1:
      missedDate2 = formattedDateStr;
      break;
    case 2:
      missedDate3 = formattedDateStr;
      break;

    default:
      break;
  }

  console.log(`missedDate1 - ${missedDate1}`);
  console.log(`missedDate2 - ${missedDate2}`);
  console.log(`missedDate3 - ${missedDate3}`);
  console.log(`index - ${index}`);
};

const handleSelectMissedDate = (event) => {
  const markup = `<label>
    Дата пропуску заняття
    <input class="missed-date" type="date" />
  </label>`;
  if(event.currentTarget.value === "0") {
    refWrapperDates.innerHTML = "";
  }

  if (event.currentTarget.value === "1") {
    refWrapperDates.insertAdjacentHTML("beforeend", markup);
    const refMissedData = document.querySelectorAll(".missed-date");
    refMissedData.forEach((input, index) => {
      input.addEventListener("input", handleChangeDate.bind(null, index));
    });
    costAllLes = costOneLes;
  }
  if (event.currentTarget.value === "2") {
    refWrapperDates.insertAdjacentHTML("beforeend", markup + markup);
    const refMissedData = document.querySelectorAll(".missed-date");
    refMissedData.forEach((input, index) => {
      input.addEventListener("input", handleChangeDate.bind(null, index));
    });
    costAllLes = costOneLes * 2;
  }
  if (event.currentTarget.value === "3") {
    refWrapperDates.insertAdjacentHTML("beforeend", markup + markup + markup);
    const refMissedData = document.querySelectorAll(".missed-date");
    refMissedData.forEach((input, index) => {
      input.addEventListener("input", handleChangeDate.bind(null, index));
    });
    costAllLes = costOneLes * 3;
  }
};

const handleClickCreateTable = () => {

    const id = uuidv4()
    const income = percent + koTrainer - costAllLes;
    console.log(`income - ${income}`);
    totalIncome += income
    refTotalIncome.textContent = totalIncome
    console.log(`totalIncome - ${totalIncome}`);
    const markup1 = `
    <div id='a${id}'>
    <table>
    <thead>
        <tr>
            <th colspan="2">${group}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Кураторські</td>
            <td>${percent}</td>
        </tr>
        <tr>
            <td>Ко-тренерські</td>
            <td>${koTrainer}</td>
        </tr>
        
    </tbody>
`
  const markup2 = `<tr>
  <td>Пропуск ${missedDate1}</td>
  <td>${costOneLes}</td>
</tr>`
const markup21 = `<tr>
  <td>Пропуск ${missedDate2}</td>
  <td>${costOneLes}</td>
</tr>`
const markup22 = `<tr>
  <td>Пропуск ${missedDate3}</td>
  <td>${costOneLes}</td>
</tr>`
const markup3 = `<tr>
<td>Всього:</td>
<td>${income}</td>
</tr>
</table>
<button class='a${id}' type="button">X</button>
</div>`
if (!missedDate1) {
    refWrapperTable.insertAdjacentHTML("beforeend", markup1 + markup3)
}
if (missedDate1 && !missedDate2 && !missedDate3) {
    refWrapperTable.insertAdjacentHTML("beforeend", markup1 + markup2 + markup3)
}
if (missedDate1 && missedDate2 && !missedDate3) {
    refWrapperTable.insertAdjacentHTML("beforeend", markup1 + markup2 + markup21 + markup3)
}
if (missedDate1 && missedDate2 && missedDate3) {
    refWrapperTable.insertAdjacentHTML("beforeend", markup1 + markup2 + markup21 + markup22 + markup3)
} 

const refBoxTable = document.querySelector(`#a${id}`);
const refBtnRemoveTable = document.querySelector(`.a${id}`);
refBtnRemoveTable.addEventListener('click', () => {
    totalIncome -= income;
    refTotalIncome.textContent = totalIncome
    refBoxTable.remove();
})
}

refButSum.addEventListener("click", handleClickSum);
refInp.addEventListener("input", handleInpSum);
refButClean.addEventListener("click", handleClickClean);
refRadioBtn30.addEventListener("change", handleChangePercent);
refRadioBtn35.addEventListener("change", handleChangePercent);
refRadioBtn4.addEventListener("change", handleChangeQuantity);
refRadioBtn5.addEventListener("change", handleChangeQuantity);
refSelectGroup.addEventListener("change", handleChangeGroup);
refSelectLesson.addEventListener("change", handleSelectLesson);
refSelectMissedLesson.addEventListener("change", handleSelectMissedDate);
refBtnCreateTable.addEventListener('click', handleClickCreateTable)
