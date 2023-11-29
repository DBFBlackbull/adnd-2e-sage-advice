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
    ['polearm', 'pole arm'],
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
    let headings = main.querySelectorAll('h1,h2,h3,h4');
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

function getSearchRegexes() {
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

function getAttributeRegexes() {
    let sources = document.querySelectorAll('.source');
    let gameSystems = document.querySelectorAll('.game-system');
    let attributes = document.querySelectorAll('.attribute');

    let filterRegexes = [getRegex(sources), getRegex(gameSystems), getRegex(attributes)].filter(Boolean)

    return filterRegexes.length > 0 ? filterRegexes : null
}

function getRegex(nodeList) {
    let strings = []
    for (let element of nodeList) {
        if (element.checked) {
            strings.push(element.value);
        }
    }

    if (strings.length === 0) {
        return null
    }

    return new RegExp(`(${strings.join('|')})`, 'g');
}

function search() {
    let searchRegexes = getSearchRegexes();
    let attributeRegexes = getAttributeRegexes();

    let results = 0;

    let wrappers = document.getElementsByClassName('wrapper');
    for (let wrapper of wrappers) {
        let hiddenWrapperCounter = 0;

        let contentElements = wrapper.getElementsByClassName('content');
        for (let content of contentElements) {
            let hiddenContentCounter = 0;
            let paragraphs = content.querySelectorAll('p');
            for (let paragraph of paragraphs) {
                let contentAttributesElement = paragraph.querySelector('.content-attributes');
                let contentAttributes = contentAttributesElement.innerText + ' ' + contentAttributesElement.children[0].innerText
                if (attributeRegexes && !attributeRegexes.every(reg => contentAttributes.match(reg))) {
                    paragraph.classList.add('hidden');
                    hiddenContentCounter++;
                    continue;
                }
                paragraph.classList.remove('hidden');
                results++;

                if (searchRegexes) {
                    let searchMatch = false;

                    let contentTexts = paragraph.querySelectorAll('.question,.answer,.entry,.optional');
                    for (let text of contentTexts) {
                        searchMatch = searchMatch || searchRegexes.every(reg => text.innerText.match(reg));
                    }

                    if (searchMatch) {
                        paragraph.classList.remove('hidden');
                    } else {
                        paragraph.classList.add('hidden');
                        hiddenContentCounter++;
                        results--;
                    }
                }
            }

            if (hiddenContentCounter === paragraphs.length) {
                content.classList.add('hidden');
                hiddenWrapperCounter++;
            } else {
                content.classList.remove('hidden');
                hiddenWrapperCounter--;
            }
        }

        if (hiddenWrapperCounter === contentElements.length) {
            wrapper.classList.add('hidden');
        } else {
            wrapper.classList.remove('hidden');
        }
    }

    document.getElementById('results').innerText = `${results} match${results === 1 ? '' : 'es'}`;
}

function copyPlainText(id) {
    let element = document.getElementById(id);
    // Get rid of the rest of the HTML tags
    let title = element.querySelectorAll('.title')[0].innerText;
    let question = element.querySelectorAll('.question,.entry')[0].innerText;
    let answer = '';
    let answerElements = element.querySelectorAll('.answer,.optional');
    if (answerElements.length > 0)
        answer = answerElements[0].innerText;

    let strings = [title, question, answer].filter(Boolean);
    console.log(strings);
    let formattedText = strings.join('\n');

    // Copy the text inside the text field
    navigator.clipboard.writeText(formattedText);
}

function copyRichText(id) {
    let element = document.getElementById(id);

    let title = element.querySelectorAll('.title')[0].innerHTML;
    let question = element.querySelectorAll('.question,.entry')[0].innerHTML;
    let answer = '';
    let answerElements = element.querySelectorAll('.answer,.optional');
    if (answerElements.length > 0)
        answer = answerElements[0].innerHTML;

    let strings = [title, question, answer].filter(Boolean);
    console.log(strings);
    let formattedText = strings.join('<br>');

    // Copy the text inside the text field
    const blob = new Blob([formattedText], {type: 'text/html'});
    const clipboardItem = new window.ClipboardItem({'text/html': blob});
    navigator.clipboard.write([clipboardItem]);
}

function getMarkdownStrings(element) {
    // Get rid of the rest of the HTML tags
    let strings = [];
    let title = element.querySelectorAll('.title')[0].innerText;
    strings.push(title);

    let questionElements = element.querySelectorAll('.question,.entry');
    let question = questionElements[0].innerHTML
        .replaceAll(/<\/?strong>/g, '**')
        .replaceAll(/<\/?em>/g,'*')
    if (questionElements[0].className.includes('question')) {
        question = question.replaceAll(/\*{3}/g, '*'); // Remove double bold
    }
    question.split('<br>')
        .map(q => {
            strings.push('');
            strings.push(q);
        });

    let answerElements = element.querySelectorAll('.answer,.optional');
    if (answerElements.length > 0) {
        let answer = answerElements[0].innerHTML
            .replaceAll(/<\/?strong>/g, '**')
            .replaceAll(/<\/?em>/g, '*');
        let answers = answer.split('<br>')
            .map(a => {
                strings.push('');
                strings.push(a);
            });
        strings = strings.concat(answers);
    }

    return strings
}

function copyDiscordText(id) {
    let element = document.getElementById(id);

    let strings = getMarkdownStrings(element);

    strings = strings.filter(Boolean);
    console.log(strings);
    let formattedText = strings.join('\n> ');

    // Copy the text inside the text field
    navigator.clipboard.writeText(formattedText);
}

function copyRedditText(id) {
    let element = document.getElementById(id);

    let strings = getMarkdownStrings(element)

    strings = strings.filter(s => s !== undefined);
    console.log(strings);
    let formattedText = strings.join('\n>');

    // Copy the text inside the text field
    navigator.clipboard.writeText(formattedText);
}