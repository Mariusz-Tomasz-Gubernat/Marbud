const slides = document.querySelectorAll(".slide"),
    times = document.querySelector(".fa-times"),
    arrowLeft = document.querySelector(".fa-caret-left"),
    arrowRight = document.querySelector(".fa-caret-right"),
    slideImages = document.querySelectorAll(".slide-image"),
    mainBars = document.querySelector(".main-bars"),
    secondBars = document.querySelector(".second-bars"),
    navigation = document.querySelector(".navigation");

mainBars.addEventListener("click", function () {
    navigation.classList.add('show-menu');
    navigation.classList.remove('hide-menu');
    mainBars.classList.add("bars-to-down");
    mainBars.classList.remove("bars-to-up");
    secondBars.classList.add("show-second-bars");
})


secondBars.addEventListener("click", function () {
    navigation.classList.remove('show-menu');
    navigation.classList.add('hide-menu');
    mainBars.classList.remove("bars-to-down");
    mainBars.classList.add("bars-to-up");
    secondBars.classList.remove("show-second-bars");
})

times.addEventListener("click", function () {
    for (const slide of slides) {
        slide.classList.remove("active");
    }
    document.body.classList.remove("blocking-site")
    arrowLeft.classList.remove("active");
    arrowRight.classList.remove("active");
    times.classList.remove("active");
});


for (const slide of slides) {
    slide.addEventListener("click", function () {

        slide.classList.add("active");
        document.body.classList.add("blocking-site")
        arrowRight.classList.add("active");
        times.classList.add("active");
    });
}

arrowRight.addEventListener("click", function () {
    arrowLeft.classList.add("active");
    for (let slide of slides) {
        slide = document.querySelector(".slide.active")
        let slideID = slide.getAttribute("id");
        newSlideID = Number(slideID) + 1;

        for (slide of slides) {
            const SlideID = slide.getAttribute("id");
            if (newSlideID === Number(SlideID)) {
                slide.classList.add('active')
            } else {
                slide.classList.remove('active')
            }
            if (newSlideID > slides.length) {
                newSlideID = 1
                slide.classList.add('active')
            }
        }
        break
    }

});


arrowLeft.addEventListener("click", function () {


    for (let slide of slides) {
        slide = document.querySelector(".slide.active")
        let slideID = slide.getAttribute("id");
        newSlideID = Number(slideID) - 1;

        if (newSlideID === 1) {
            arrowLeft.classList.remove("active");
        }
        for (slide of slides) {
            const SlideID = slide.getAttribute("id");
            if (newSlideID === Number(SlideID)) {
                slide.classList.add('active')
            } else {
                slide.classList.remove('active')
            }
        }
        break
    }
});