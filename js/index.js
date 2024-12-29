//-- +----+ --
function alertMessage() {
    //----
    const messageIco = document.querySelector('.alert').querySelector('.message-ico');
    const message = document.querySelector('.alert').querySelector('.message');
    //----
    let flag = false;
    //----
    messageIco.addEventListener('click', function() {
        if(flag) {
            message.style.display = 'none';
        } else {
            message.style.display = 'block';
        }
        flag = !flag;
    });
    //----
    // document.body.addEventListener('click', function(e) {
    //     if(!message.contains(e.target) && flag) {
    //         message.style.display = 'none';
    //         flag = false;
    //     }
    // });
    // message.addEventListener('click', function(e) {
    //     e.stopPropagation();
    // });
}
//-- +----+ --
function menuContent() {
    //----
    const menuIco = document.querySelector('.menu').querySelector('.menu-ico');
    const menuContent = document.querySelector('.menu').querySelector('.menu-content');
    //----
    let flag = false;
    //----
    menuIco.addEventListener('click', function() {
        if(flag) {
            menuContent.style.display = 'none';
        } else {
            menuContent.style.display = 'block';
        }
        flag = !flag;
    });
    //----
    // document.body.addEventListener('click', function(e) {
    //     if(!menuContent.contains(e.target) && flag) {
    //         menuContent.style.display = 'none';
    //         flag = false;
    //     }
    // });
    // menuContent.addEventListener('click', function(e) {
    //     e.stopPropagation();
    // });
}
//-- +----+ --
function today() {
    const newDate = new Date();
    //----
    let pcMonth = newDate.getMonth() + 1;
    let pcDate = newDate.getDate();
    let pcDay = newDate.getDay();
    //----
    let myDayArr = ['星期日', '星期一', '星期二' , '星期三', '星期四', '星期五', '星期六'];
    //----
    let resultMonth = pcMonth < 10 ? '0' + pcMonth : pcMonth;
    let resultDate = pcDate < 10 ? '0' + pcDate : pcDate;
    let resultDay = myDayArr[pcDay];
    //----
    const myDate = document.querySelector('.calendar-date').querySelector('span');
    myDate.innerHTML = `${resultMonth}月${resultDate}日&nbsp;${resultDay}`;
};
//-- +----+ --
function updateClock () {
    const newDate = new Date();
    //----
    let pcHours = newDate.getHours();
    let pcMinutes = newDate.getMinutes();
    let pcSeconds = newDate.getSeconds();
    //----
    let resultHours = pcHours < 10 ? '0' + pcHours : pcHours;
    let resultMinutes = pcMinutes < 10 ? '0' + pcMinutes : pcMinutes;
    let resultSeconds = pcSeconds < 10 ? '0' + pcSeconds : pcSeconds;
    //----
    const myTime = document.querySelector('.calendar-time').querySelector('span');
    myTime.innerHTML = `${resultHours}:${resultMinutes}:${resultSeconds}`;
};
//-- +----+ --
function boxTab() {
    const lis = document.querySelector('.box-title').querySelectorAll('li');
    const items = document.querySelector('.box-content').querySelectorAll('ul');
    //----
    for (let i = 0; i < lis.length; i++) {
        lis[i].dataset.index = i;
        lis[i].addEventListener('click', function() {
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'action';
            let index = this.dataset.index;
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            items[index].style.display = 'block';
        });
    }
}
//-- +----+ --
document.body.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
//-- +----+ --
document.body.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
//-- +----+ --
window.onload = function() {
    alertMessage();
    menuContent();
    boxTab();
    today();
    setInterval(today, 3600000);
    updateClock();
    setInterval(updateClock, 1000);
}

//-- +----+ --