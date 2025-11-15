
const state = {
  earnings: 0,
  expense: 0,
  net: 0,
  transactions: [
    {
      id: Math.floor(Math.random() * 1000),
      text: "Example",
      amount: 10,
      type: "credit",
    },
  ],
};







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

