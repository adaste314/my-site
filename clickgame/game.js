function buy(store) {
    let cost = parseInt(store.getAttribute(`cost`));
    let bank = parseInt(score.innerHTML);

    if (cost > bank) return;

    changeScore(-cost);

    let widget = document.createElement("div");
    widget.className = "widget";
    fillWidget(store, widget);

    if (widget.getAttribute("auto") == 'true') {
        harvest(widget);
        document.getElementById("auto-widget-container").appendChild(widget);
        // for (let child in document.getElementById("auto-widget-container").childNodes) {
        //     if (child.style.visibility = "visible") {

        //     }
        // }
        if (document.getElementById("auto-widget-container").childNodes.length > 10) {
            let elms = document.getElementById("auto-widget-container").childNodes;
            // for (let child in Array.from(document.getElementById("auto-widget-container"))) {
                for (let i = 0; i < Array.from(elms).length; i++) {
                    if (Array.from(elms)[i].style.display != "none") {
                    Array.from(elms)[i].style.display = "none";
                    break;
                    }
            }
        }       
    } else {
        widget.onclick = () => {
            harvest(widget);
        }
        document.getElementById("manual-widget-container").appendChild(widget);
    }

}

function harvest(widget) {
    if (widget.hasAttribute("harvesting")) return;

    widget.setAttribute("harvesting", "");

    if (widget.getAttribute("auto") != 'true') {
        changeScore(widget.getAttribute("reap"));
        showPoint(widget);
    } 

    setTimeout(() => {
        widget.removeAttribute("harvesting");
        
        if (widget.getAttribute("auto") == 'true') {
            changeScore(widget.getAttribute("reap"));
            showPoint(widget);

            harvest(widget);
        } 

    }, parseFloat(widget.getAttribute("cooldown")) * 1000);
}

function changeScore(amount) {
    let bank = parseInt(score.innerHTML);
    score.innerHTML = (bank + parseInt(amount));

    for (let store of stores) {
        if (parseInt(store.getAttribute(`cost`)) > bank + parseInt(amount)) {
            store.setAttribute("broke", "");
        } else {
            store.removeAttribute("broke");
        }
    }
}

function showPoint(widget) {
    let number = document.createElement("span");
    number.className = "point";
    number.innerHTML = "+" + widget.getAttribute("reap");
    number.style.left = "50%";
    number.style.top = "50%";
number.onanimationend = () => {
    widget.removeChild(number);
}
widget.appendChild(number);
}