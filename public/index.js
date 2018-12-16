/* Analytics */
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-130237896-1');

document.getElementsByClassName('down-arrow').onclick = function(){
  document.getElementById('about').scrollIntoView();
}
