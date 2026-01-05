async function convert(){
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const result = document.getElementById('result');

  if(!amount){
    result.innerText = 'Enter amount';
    return;
  }

  result.innerText = 'Converting...';

  try{
    const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await res.json();
    const rate = data.rates[to];
    const total = (amount * rate).toFixed(2);

    result.innerText = `${amount} ${from} = ${total} ${to}`;
  }catch{
    result.innerText = 'Conversion failed';
  }
}
