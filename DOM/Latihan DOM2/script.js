function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang' ;
    return 'semut';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

function putar(){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 100){
            clearInterval()
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100);

    setInterval(function(){
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 1000);
}

const options = document.querySelectorAll('li img');
options.forEach(function(option) {
    option.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = option.className;
        const results = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = results;
        }, 1000);
    });
});