export const getQuote = async () => 
    fetch(process.env.REACT_APP_API)
    .then(response => response.json())