//menambahkan list item baru ketika paragraf 4 diklik

const p4 = document.querySelector('section#b p');

p4.onmouseover = function() {
    p4.style.backgroundColor = 'gray';
    p4.style.color = 'white';
}
p4.onmouseleave = function() {
    p4.style.backgroundColor = 'white';
    p4.style.color = 'black';
}

p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru)
    p4.style.backgroundColor = 'lightblue';
    liBaru.style.backgroundColor = 'tomato';
    liBaru.style.color = 'white';
});