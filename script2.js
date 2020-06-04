fetch('https://picsum.photos/v2/list?page=2&limit=10')
    .then(response => response.json())
    .then(data => console.log(data))

.catch(err => console.log(err));