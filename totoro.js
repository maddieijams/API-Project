const baseURL = 'https://ghibliapi.herokuapp.com/films';


//button
const button = document.querySelector('.button');
button.addEventListener('click', fetchResults);

const div = document.querySelector('#random');

//result

function fetchResults(e) {
    e.preventDefault();
    fetch(baseURL)
        .then(function (result) {
            console.log(result);
            return result.json();
        })
        .then(function (json) {
            displayResults(json); 
        });
}
    
    
    function displayResults (json) {

        while (random.firstChild) {
            random.removeChild(random.firstChild); 
        }

        const values = Object.values(json)
        const randomValue = values[parseInt(Math.random() * values.length)]
        const movie = randomValue.title;
        const description= randomValue.description;

        // let stringToInsert = `${movie}: ${description}`;
        
        // let textNode = document.createTextNode(stringToInsert);
        // random.appendChild(textNode)

        let h2 = document.createElement('h2');
        h2.textContent = `${movie}`;
        random.appendChild(h2);

        let p = document.createElement('p');
        p.textContent = `${description}`;
        random.appendChild(p);


}

