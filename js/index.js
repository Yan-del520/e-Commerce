// 大于7
$(".navigationbar a:eq(7)").css({
        "float": "left"
    })
    // 小于7
$(".navigationbar a:lt(7)").css({
    "float": "right"
})

function show1() {
    var e = document.getElementById("a");
    e.style.display = "block";
}

function out1() {
    var e = document.getElementById("a");
    e.style.display = "none"
}

function show2() {
    var e = document.getElementById("b")
    e.style.display = "block";
}

function out2() {
    var e = document.getElementById("b");
    e.style.display = "none";
}

function show3() {
    var e = document.getElementById("c");
    e.style.display = "block";
}

function out3() {
    var e = document.getElementById("c");
    e.style.display = "none"
}

function show4() {
    var e = document.getElementById("d");
    e.style.display = "block";
}

function out4() {
    var e = document.getElementById("d");
    e.style.display = "none"
}

function show5() {
    var e = document.getElementById("f");
    e.style.display = "block";
}

function out5() {
    var e = document.getElementById("f");
    e.style.display = "none"
}
var l = document.getElementById("lb");
var num = 1;
setInterval(function() {
    num++;
    if (num == 5) {
        num = 1;
    }
    if (num == 3) {
        $("#gg>img").css(
            "display", "none"
        )
    } else {
        $("#gg>img").css(
            "display", "block"
        )
    }
    l.src = "./img/" + num + ".jpg"
}, 3000)


$("#dj1").click(function() {
    $("#lb").attr("src", "img/1.jpg");
})
$("#dj2").click(function() {
    $("#lb").attr("src", "img/2.jpg");
})
$("#dj3").click(function() {
    $("#lb").attr("src", "img/3.jpg");
})
$("#dj4").click(function() {
    $("#lb").attr("src", "img/4.jpg");
})
$("#dj5").click(function() {
    $("#lb").attr("src", "img/5.jpg");
})

function dh() {
    if ($(window).scrollTop() > 150) {
        $(".dhk>li").css(
            "display", "block"
        )
    } else {
        $(".dhk>li").css(
            "display", "none"
        )
    }
}
setInterval(dh);

function gddh() {
    if ($(window).scrollTop() > 150) {
        $(".gddh").css(
            "display", "block"
        )
    } else {
        $(".gddh").css(
            "display", "none"
        )
    }
}
setInterval(gddh);