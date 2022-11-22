let otherSpreadSheet = document.querySelector(".spreadsheet");
const showSpreadSheet = () => {
    otherSpreadSheet.classList.remove("spreadsheet");
    otherSpreadSheet.classList.add("showSpreadSheet");
    otherSpreadSheet.disabled = false;
};

const hideSpreadSheet = () => {
    otherSpreadSheet.classList.remove("showSpreadSheet");
    otherSpreadSheet.classList.add("spreadsheet");
    otherSpreadSheet.disabled = true;
};