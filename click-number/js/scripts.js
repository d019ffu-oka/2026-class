var next = 1;

document.remove = function(id) {
    if (id === next) {
        document.getElementById("main")
                .removeChild(document.getElementById(id));

        next++;

        // 全部消えたら虹色に光る
        if (next === 10) {
            document.body.classList.add("rainbow");

            const msg = document.createElement("h1");
            msg.innerHTML = "CLEAR!";
            msg.style.textAlign = "center";
            msg.style.marginTop = "200px";
            document.body.appendChild(msg);
        }
    }
};
for (var num = 9; num > 0; num--) {

    var elm = document.createElement("button");
    elm.innerHTML = num;
    elm.setAttribute("id", num);
    elm.setAttribute("class", "circle");

    var function_name = "remove(" + num + ")";
    elm.setAttribute("onclick", function_name);

    document.getElementById("main").appendChild(elm);

    // ランダムな位置
    var left_pos = 10 + Math.floor(Math.random() * 400);
    var top_pos = 100 + Math.floor(Math.random() * 600);

    document.getElementById(num).style.left = left_pos + "px";
    document.getElementById(num).style.top = top_pos + "px";

    // ランダムな大きさ（40～100px）
    var size = 40 + Math.floor(Math.random() * 61);

    document.getElementById(num).style.width = size + "px";
    document.getElementById(num).style.height = size + "px";
    document.getElementById(num).style.borderRadius = (size / 2) + "px";
    document.getElementById(num).style.lineHeight = size + "px";

    // ランダムな色
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    document.getElementById(num).style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";
}