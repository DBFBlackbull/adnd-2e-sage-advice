const SYNONYMS = [
    ['elf', 'elves'],
    ['dwarf', 'dwarves'],
    ['demihuman', 'demi-human'],
    ['multiclass', 'multi-class'],
    ['dualclass', 'dual-class'],
    ['player\'s handbook', 'players handbook', 'phb', /*'ph'*/],
    ['dungeon master\'s guide', 'dungeon master guide', 'dmg'],
    ['system shock', 'system-shock'],
    ['at-will', 'at will'],
    ['saving throw', 'saving-throw'],
    ['spellbook', 'spell-book', 'spell book'],
    ['spellcasting', 'spell-casting', 'spell casting'],
    ['extradimentional','extra-dimentional'],
    ['levitate', 'levitation', 'levitating'],
    ['magic-resistance', 'magic resistance', 'magic-resistant', 'magic resistant','magic-resist','magic resist'],
    ['hit point', 'hit-point'],
    ['demiplane', 'demi-plane'],
    ['the complete psionics handbook', 'complete psionics handbook', 'the complete book of psionics', 'complete psionicist handbook', 'complete psionicist\'s handbook','tcph', 'cph', 'cphb'],
    ['complete sha\'ir\'s handbook', 'csh'],
    ['combat & tactics', 'combat and tactics', 'c&t'],
    ['skills & powers', 'skills and powers', 's&p'],
    ['antimagic', 'anti-magic'],
    ['tome of magic', 'tom'],
    ['l&l', 'legends & lore'],
    ['chainmail', 'chain mail'],
    ['morningstar', 'morning star'],
    ['smokepowder', 'smoke powder'],
    ['longbow', 'long bow'],
    ['shortbow', 'short bow'],
];

document.addEventListener("DOMContentLoaded", function() {
    let input = document.getElementById('search');
    input.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            search();
        }
    });
});

function hideForeword() {
    let main = document.getElementById('main');
    let headings = main.querySelectorAll('h2,h3');
    for (heading of headings) {
        heading.classList.toggle('hidden');
    }
}

function hideComments() {
    let comments = document.querySelectorAll('.comment');
    for (comment of comments) {
        comment.classList.toggle('hidden');
    }
}

function getSearchTerms() {
    let query = document.getElementById('search').value;
    if (query.replaceAll(/[- ]/g,'') === '')
        return null;

    let searchTerms = query
        .split('|')
        .map(s => s
            .toLowerCase()
            .trim()
            .replaceAll(/\./g,''))
        .filter(Boolean);

    let expandedSearchTerms = searchTerms.map(s => {
        let set = new Set();
        set.add(s);
        set.add(s.replaceAll(/-/g, ''))
        set.add(s.replaceAll(/ /g, ''))
        set.add(s.replaceAll(/[- ]/g, ''))

        let coreTerms = Array.from(set);
        coreTerms.forEach(t => {
            SYNONYMS.forEach(synonym => {
                if (synonym.some(s => s === t)) {
                    synonym.forEach(s => set.add(s))
                }
            })
        })

        return Array.from(set).map(s => `\\W${s}|^${s}`);
    });

    if (document.getElementById('radio-any-search-term').checked) {
        let allTerms = expandedSearchTerms.flat().join('|');
        return [new RegExp(`(${allTerms})`, 'gi')];
    }

    return expandedSearchTerms.map(array => {
        return new RegExp(`(${array.join('|')})`, 'gi')
    })
}

function getAttributes() {
    let elements = document.getElementsByClassName('attribute');
    let activeAttributes = []
    for (let item of elements) {
        if (item.checked) {
            activeAttributes.push(item.value);
        }
    }

    return activeAttributes
}

function search() {
    let searchRegexes = getSearchTerms();
    let activeAttributes = getAttributes();

    console.log(searchRegexes);

    let attributeRegex;
    if (activeAttributes.length > 0) {
        attributeRegex = new RegExp(`(${activeAttributes.join('|')})`,'gi');
    }

    let results = 0;

    let sageAdvices = document.getElementsByClassName('sage-advice');
    for (let sageAdvice of sageAdvices) {
        let hiddenCounter = 0;
        let paragraphs = sageAdvice.querySelectorAll('p');
        for (let paragraph of paragraphs) {
            if (!attributeRegex && !searchRegexes) {
                paragraph.classList.remove('hidden');
                continue;
            }

            let contentAttributes = paragraph.querySelector('.content-attributes');
            if (attributeRegex && !contentAttributes.innerText.match(attributeRegex)) {
                paragraph.classList.add('hidden');
                hiddenCounter++;
                continue;
            }
            paragraph.classList.remove('hidden');
            results++;

            if (searchRegexes) {
                let searchMatch = false;

                let contentTexts = paragraph.querySelectorAll('.question,.answer');
                for (let text of contentTexts) {
                    searchMatch = searchMatch || searchRegexes.every(reg => text.innerText.match(reg));
                }

                if (searchMatch) {
                    paragraph.classList.remove('hidden');
                } else {
                    paragraph.classList.add('hidden');
                    hiddenCounter++;
                    results--;
                }
            }
        }

        if (hiddenCounter === paragraphs.length) {
            sageAdvice.classList.add('hidden');
        } else {
            sageAdvice.classList.remove('hidden');
        }
    }

    if (!attributeRegex && !searchRegexes) {
        document.getElementById('results').innerText = '';
    } else {
        document.getElementById('results').innerText = `${results} match${results === 1 ? '' : 'es'}`;
    }
}

function copyPlainText(id) {
    // Get the text field
    let element = document.getElementById(id);
    let innerHTML = element.innerHTML;
    innerHTML = innerHTML.replaceAll(/<span class="no-copy">(.|\n)*?<\/span>/g, '')
        .replaceAll(/<br>/g, '\n');

    // Get rid of the rest of the HTML tags
    let tempElement = document.createElement('div');
    tempElement.innerHTML = innerHTML;
    let text = tempElement.innerText;

    // Copy the text inside the text field
    navigator.clipboard.writeText(text);
}

function copyRichText(id) {
    // Get the text field
    let element = document.getElementById(id);
    let innerHTML = element.innerHTML;
    innerHTML = innerHTML.replaceAll(/<span class="no-copy">(.|\n)*?<\/span>/g, '');

    // Copy the text inside the text field
    const blob = new Blob([innerHTML], {type: 'text/html'});
    const clipboardItem = new window.ClipboardItem({'text/html': blob});
    navigator.clipboard.write([clipboardItem]);
}

function copyDiscordText(id) {
    // Get the text field
    let element = document.getElementById(id);
    let innerHTML = element.innerHTML;
    innerHTML = innerHTML.replaceAll(/<br>/g, '\n')
        .replaceAll(/<\/?strong>/g,'**')
        .replaceAll(/<\/?em>/g,'*');

    let tempElement = document.createElement('div');
    tempElement.innerHTML = innerHTML;

    // Get rid of the rest of the HTML tags
    let title = tempElement.getElementsByClassName('title')[0].innerText;
    let question = tempElement.getElementsByClassName('question')[0].innerText
        .replaceAll(/\*\*\*/g, '*');
    let answer = tempElement.getElementsByClassName('answer')[0].innerText;

    let formattedText = `${title}\n> ${question}\n> ${answer}`;
    // Copy the text inside the text field
    navigator.clipboard.writeText(formattedText);
}

function copyRedditText(id) {
    // Get the text field
    let element = document.getElementById(id);
    let innerHTML = element.innerHTML;
    innerHTML = innerHTML.replaceAll(/<span class="no-copy">(.|\n)*?<\/span>/g, '')
        .replaceAll(/<br>/g, '  \n')
        .replaceAll(/<\/?strong>/g, '**')
        .replaceAll(/<\/?em>/g, '*');

    // Get rid of the rest of the HTML tags
    let tempElement = document.createElement('div');
    tempElement.innerHTML = innerHTML;
    let text = tempElement.innerText;

    let index = text.indexOf('\n');
    let title = text.slice(0, index);
    let rest = text.slice(index+1);

    let finalText = `${title}\n\n>${rest}`;

    // Copy the text inside the text field
    navigator.clipboard.writeText(finalText);
}