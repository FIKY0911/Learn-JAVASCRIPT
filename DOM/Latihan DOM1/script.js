// Mengubah warna background
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
    document.body.classList.toggle('biru-muda');
}

//menambahkan button dan membuat fitur acak warna
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

//Mengubah warna ketika range digeser
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');


sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})
sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})
sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

//Mengubah warna ketika mouse digeser
document.body.addEventListener('mouseenter', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);//ketika mouse digeser horizontal
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);//ketika mouse digeser vertikal
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
})