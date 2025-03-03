// Theme change

document.getElementById('theme-btn').addEventListener('click',
    function () {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }
);

// Dynamic Day and Date 

function updateDateTime() {
    const now = new Date();

    const day = now.toLocaleString('default', { weekday: 'short' });
    const month = now.toLocaleString('default', { month: 'short' });
    const date = now.getDate();
    const year = now.getFullYear();

    document.getElementById('dayLive').innerHTML = `${day}`;
    document.getElementById('dateLive').innerHTML = `${month} ${date} ${year}`;
}

setInterval(updateDateTime, 1000);

//Going to 'Blog' page
document.getElementById('discoverDiv').addEventListener('click',
    function () {
        window.location.href = "blog.html";
    }
);

//Button Disable
const button1 = document.getElementById("btn1");
button1.addEventListener('click', function (event) {
    buttonDisable("btn1", true, "title1");
});
const button2 = document.getElementById("btn2");
button2.addEventListener('click', function (event) {
    buttonDisable("btn2", true, "title2");
});
const button3 = document.getElementById("btn3");
button3.addEventListener('click', function (event) {
    buttonDisable("btn3", true, "title3");
});
const button4 = document.getElementById("btn4");
button4.addEventListener('click', function (event) {
    buttonDisable("btn4", true, "title4");
});
const button5 = document.getElementById("btn5");
button5.addEventListener('click', function (event) {
    buttonDisable("btn5", true, "title5");
});
const button6 = document.getElementById("btn6");
button6.addEventListener('click', function (event) {
    buttonDisable("btn6", true, "title6");
})

