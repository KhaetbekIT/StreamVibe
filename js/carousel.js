const carouselInner = document.querySelector("#carousel-inner")

const CarouselFunc = ()=>{
    carouselInner.innerHTML =""
    for (let i = videos.length - 5; i < videos.length; i++) {
        const video = videos[i]
        carouselInner.insertAdjacentHTML("beforeend", `
            <div class="carousel-item" id="slide-item">
                <div class="carousel-imageholder">
                    <img src="${video.Images[0]}" class="d-block w-100" alt="${video.Title}">
                </div>
                <div class="col-3 col-xl-7 carousel-content">
                    <h4 class="carousel-title">${video.Title}</h4>
                    <div class="carousel-text">
                        <p>
                            ${video.Plot}
                        </p>
                    </div>
                    <div class="stars-icon">
                        <time class="carousel-time" id="carousel-time-js">${video.Year}</time>
                        <img src="./image/star-filled-icon.svg" alt="Error">
                        <span class="stars-level">${video.imdbRating}</span>
                    </div>
                </div>
            </div>
        `)
    }

    const slide = carouselInner.querySelectorAll("#slide-item")
    
    slide.forEach((slider, index)=>{
        if (index === 0) {
            slider.classList.add("active")
        }
    })
}

console.clear()

CarouselFunc()