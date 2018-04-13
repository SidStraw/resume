var tim = 3;
var zoom = 10;
var shop = ['鄉味', '馬路益', '阿根', '眷村麵食', '讚哥'];

$(document).ready(function () {
    $('#mytimeline').verticalTimeline({
        startLeft: true,
        alternate: true,
        animate: "fade",
        arrows: true
    });


    $('#ran').click(function (e) {
        e.preventDefault();
        if (tim == 0) {
            $('#output').val(shop[Math.floor(Math.random() * (shop.length))]);
            tim = 3;
        } else {
            $("#popup").popup("open");
            $('#output').addClass('active');
            $('#output').delay(10000).removeClass('active');

        }
    });
    showTime();



});

function showTime() {
    if (tim > 0) {
        tim -= 1;
        $('#t').text('冷卻時間：' + tim);
    } else {
        $('#t').text('冷卻完畢');
    }
    //每秒執行一次,showTime()
    setTimeout("showTime()", 1000);
}