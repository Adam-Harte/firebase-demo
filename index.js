document.getElementById('postData').addEventListener('click', postData);
document.getElementById('getData').addEventListener('click', getData);

function postData(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    fetch('https://fir-demo-8cc6c.firebaseio.com/user.json', {
        method: 'POST',
        headers: new Headers({}),
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
        .then(function (data) {
            console.log('Request success: ', data);
        })
        .catch(function (error) {
            console.log('Request failure: ', error);
        });
}

function getData() {
    fetch('https://fir-demo-8cc6c.firebaseio.com/user.json')
        .then(function(data){

        })
        .catch(function(error){

        });
}