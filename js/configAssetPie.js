(function () {
    var oBtn = document.querySelector('.detail'),
        aUl = document.querySelectorAll('.bortopright ul'),
        bool = true;
        
        oBtn.onclick = function () {
        if (bool) {
            for (let i = 0, length = aUl.length; i < length; i++) {
                aUl[i].classList.remove("active_height");
                aUl[i].classList.add("active");
                oBtn.innerHTML = '返回';
            }
        } else {
            for (let j = 0, length = aUl.length; j < length; j++) {
                aUl[j].classList.remove("active");
                aUl[j].classList.add("active_height");
                oBtn.innerHTML = '查看详情';
            }
        }
        bool = !bool;
    }
})()