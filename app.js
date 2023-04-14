const showout = document.querySelector('.showout');
const manualslide = document.querySelector('.manualslide');

function bigTravelImg(theEvent) {
    let firstIMG = theEvent.querySelectorAll('img')[0];
    let isDragging = false, drag = false, prePageX, preScrollLeft, positionDiff;

    const startDrag = (e) => {
        isDragging = true;
        prePageX = e.pageX || e.touches[0].pageX;
        preScrollLeft = theEvent.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        drag = true;
        theEvent.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prePageX;
        theEvent.scrollLeft = preScrollLeft - positionDiff;
        showHideIcon();
    }

    const endDrag = () => {
        isDragging = false;
        theEvent.classList.remove("dragging");
        if (!drag) return;
        drag = false;
        autoCenter();
    }


    const autoCenter = () => {
        if (theEvent.scrollLeft == (theEvent.scrollWidth - theEvent.clientWidth) || theEvent.scrollLeft == 0) return;
        positionDiff = Math.abs(positionDiff);
        let firstIMGWidth = firstIMG.clientWidth + 1;
        let valDiff = firstIMGWidth - positionDiff;
        if (theEvent.scrollLeft > preScrollLeft) {
            // return theEvent.scrollLeft += positionDiff > firstIMGWidth / 3 ? valDiff : - positionDiff;
            if (positionDiff > firstIMGWidth / 4) {
                return theEvent.scrollLeft += valDiff;
            }
            else {
                return theEvent.scrollLeft -= positionDiff;
            }
        }
        return theEvent.scrollLeft -= positionDiff > firstIMGWidth / 4 ? valDiff : - positionDiff;
    }

    theEvent.addEventListener('mousedown', startDrag);
    theEvent.addEventListener('touchstart', startDrag);

    theEvent.addEventListener('mousemove', dragging);
    theEvent.addEventListener('touchmove', dragging);

    theEvent.addEventListener('mouseup', endDrag);
    theEvent.addEventListener('mouseleave', endDrag);
    theEvent.addEventListener('touchend', endDrag);

    let arrowbtn = document.querySelectorAll('.arrowbtn');
    let scrollEnd = theEvent.scrollWidth - theEvent.clientWidth;
    const checkApprox = (num1, num2, epsilon = 10) => {
        return Math.abs(num1 - num2) < epsilon;
    }

    const showHideIcon = () => {
        arrowbtn[0].style.display = checkApprox(theEvent.scrollLeft, 0) ? "none" : "block";
        arrowbtn[1].style.display = checkApprox(theEvent.scrollLeft, scrollEnd) ? "none" : "block";
    }

    arrowbtn.forEach(btn => {
        btn.addEventListener('click', () => {
            let firstIMGWidth = firstIMG.clientWidth;
            theEvent.scrollLeft += btn.id === "leftbtn" ? -firstIMGWidth : firstIMGWidth;
            setTimeout(() => showHideIcon(), 100);
        })
    });
}

bigTravelImg(showout);

function smallTravelImg(theEvent) {
    let firstIMG = theEvent.querySelectorAll('img')[0];
    let isDragging = false, drag = false, prePageX, preScrollLeft, positionDiff;

    const startDrag = (e) => {
        isDragging = true;
        prePageX = e.pageX || e.touches[0].pageX;
        preScrollLeft = theEvent.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        drag = true;
        theEvent.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prePageX;
        theEvent.scrollLeft = preScrollLeft - positionDiff;
        // showHideIcon();
    }

    const endDrag = () => {
        isDragging = false;
        theEvent.classList.remove("dragging");
        if (!drag) return;
        drag = false;
        autoCenter();
    }

    const autoCenter = () => {
        if (theEvent.scrollLeft == (theEvent.scrollWidth - theEvent.clientWidth) || theEvent.scrollLeft == 0) return;
        positionDiff = Math.abs(positionDiff);
        let firstIMGWidth = firstIMG.clientWidth + 1;
        let valDiff = firstIMGWidth - positionDiff;
        if (theEvent.scrollLeft > preScrollLeft) {
            // return theEvent.scrollLeft += positionDiff > firstIMGWidth / 3 ? valDiff : - positionDiff;
            if (positionDiff > firstIMGWidth / 3) {
                return theEvent.scrollLeft += valDiff;
            }
            else {
                return theEvent.scrollLeft -= positionDiff;
            }
        }
        return theEvent.scrollLeft -= positionDiff > firstIMGWidth / 3 ? valDiff : - positionDiff;
    }

    theEvent.addEventListener('mousedown', startDrag);
    theEvent.addEventListener('touchstart', startDrag);

    theEvent.addEventListener('mousemove', dragging);
    theEvent.addEventListener('touchmove', dragging);

    theEvent.addEventListener('mouseup', endDrag);
    theEvent.addEventListener('mouseleave', endDrag);
    theEvent.addEventListener('touchend', endDrag);
}

smallTravelImg(manualslide);

const radioBtn2 = document.querySelector('#radioBtn2');
const mbtn2 = document.querySelector('#mbtn2');

mbtn2.addEventListener('click', () => {

})