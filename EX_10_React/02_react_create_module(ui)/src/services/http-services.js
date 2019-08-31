import 'whatwg-fetch'; //This module is avaliable global so we need no to create a variable, just import is  sufficient

/*

This is new javascript ES6 Class, it wont avaliable in old javascript files
*/

class HttpService {
    getProduct = () => {
        fetch('http://127.0.0.1:5000/getProduct')
            .then(response => {
                console.log(response.json());
            })
    }
}

export default HttpService;
