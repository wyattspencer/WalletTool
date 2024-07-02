fetch('https://api.solscan.io/v1/cluster/nodes')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('API Response:', data);
    document.getElementById('response').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('response').textContent = 'Error: ' + error;
  });
