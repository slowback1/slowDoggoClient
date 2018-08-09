import fetch from 'node-fetch';

class DoggoService {
    sendData(data) {
        fetch('https://immense-headland-57711.herokuapp.com/doggo', { 
        method: 'POST',
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: {item: data}
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
}

export default DoggoService;