import { get, post } from 'axios';

// GET request
get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// POST request
post('https://api.example.com/data', {
    name: 'John',
    email: 'john@example.com'
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });