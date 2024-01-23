const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

// Object to store filter functions
const filters = {
    // sarcastic can take all the arguments map can
    sarcastic(letter, index) {
        // console.log(letter, index);

        // if it is odd, it will return 1 & this runs
        if (index % 2) {
            return letter.toUpperCase();
        }
        // if it is even, it will return 0 and we will lowercase it
        return letter.toLowerCase();
    },
    funky() {

    },
    unable() {

    },
};

// Event handler
function transformText(text) {
    // grab the value atr of the filter that is checked
    // const filter = document.querySelector('[name="filter"]:checked').value; OR
    const filter = filterInputs.find(input => input.checked).value;
        // console.log(filter);

        // console.log(text);
    // Take the text and loop over each letter. Apply the filter that is selected. Must use bracket notation to access cooresponding object property
    const mod = Array.from(text).map(filters[filter]); 
    /* mod stands for modified variable. Turn the text into an array we can work with */
        // console.log(mod);
    result.textContent = mod.join(''); // set text to what user types
}


// Event listener - grab the text of the event target using value
textarea.addEventListener('input', e => transformText(e.target.value));