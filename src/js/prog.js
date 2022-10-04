let headerF = document.querySelector('.header-fixed')
window.onscroll = function() {
    if(window.pageYOffset >= 300){
        headerF.style.top = 0
    } else {
        headerF.style.top = ''
    }
}