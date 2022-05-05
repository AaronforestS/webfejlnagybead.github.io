function toggleTheme() {
    var link = document.getElementById('lnk');
    var szoveg = document.getElementById('nagybetusmod');
    if(szoveg.textContent == 'Nagy kontrasztú mód'){
        link.setAttribute('href', 'contrast.css');
        szoveg.textContent = 'Normál mód';
    }else{
        link.setAttribute('href', 'style.css');
        szoveg.textContent = 'Nagy kontrasztú mód';
    } 
}