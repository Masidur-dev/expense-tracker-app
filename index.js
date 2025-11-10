
const transactionFormEl = document.getElementById("transactionForm");

const addTransaction = (e) =>{
    e.preventDefault();
    const isEarn = e.submitter.id === "earnBtn" ? : false;
    console.log(e.submitter.id);
    
    const formData = new FormData(transactionFormEl);
    const tData = {};
    
    formData.forEach((value, key ) =>{
        tData[key] = value;

    })

    console.log({ tData });
    
}

transactionFormEl.addEventListener("submit", addTransaction)