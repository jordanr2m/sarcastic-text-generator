const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' 
};

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
    funky(letter) {
        // first check if there is a funky letter for this case
        let funkyLetter = funkyLetters[letter];
        if (funkyLetter) return funkyLetter;
        // if there is not, check if there is a lowercase version
        funkyLetter = funkyLetters[letter.toLowerCase()];
        if (funkyLetter) return funkyLetter;
        // if there is nothing, return the regular letter
        return letter;
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