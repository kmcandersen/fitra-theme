document.addEventListener("DOMContentLoaded", function () {

    let option = document.querySelector(".variant-select");
   
    if (option) {
        option.addEventListener('change', function (event) {
            let target = event.target.value
            // get active image (by id of selected option)
            let productImage = document.querySelector('.single-product-image[data-variant="' + target + '"]')
            // get all images
            let productImages = document.querySelectorAll('.single-product-image')
            //hide all images
            productImages.forEach(image => {
                image.style.display = "none"
            })
            // show only active image
            productImage.style.display = 'block'
        })
    }
});
