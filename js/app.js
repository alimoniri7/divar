// var imageBlock = document.querySelector(".commercial-box img")
// var headBox = document.querySelector(".commercial-box h2")
// var priceBox = document.querySelector(".commercial-box p")

var commercialList = document.getElementById("main-commercials")


function connect() {
    fetch("../data/content.json").then(res => {
        return res.json()
    }).then(data => {
        data.forEach(item => {

            let commercialBlock = document.createElement("div")
            let contentSection = document.createElement("div")
            let imageSection = document.createElement("img")
            let headBox = document.createElement("div")
            let contentBox = document.createElement("div")
            let headTag = document.createElement("h2")
            let priceTag = document.createElement("p")
            let locationTag = document.createElement("p")
            let kmTag = document.createElement("p")


            commercialList.append(commercialBlock)
            commercialBlock.classList.add("commercial-box")

            commercialBlock.append(contentSection)
            commercialBlock.append(imageSection)

            contentSection.append(headBox)
            contentSection.append(contentBox)

            headBox.append(headTag)

            contentBox.append(kmTag)
            contentBox.append(priceTag)
            contentBox.append(locationTag)

            console.log("hello")
            headBox.innerHTML = item.name


            imageSection.setAttribute("src", "images/null.png")
            imageSection.setAttribute("width", "150px")

            if (item.image) {
                imageSection.setAttribute("src", item.image)
                imageSection.setAttribute("width", "150px")
                imageSection.setAttribute("onerror", "this.src='images/null.png'")
            }


            if (item.offers) {

                if (item.offers.price == "0") {
                    priceTag.innerHTML = "توافقی"
                } else {
                    priceTag.innerHTML = item.offers.price + " " + "تومان"
                }
            } else {
                priceTag.innerHTML = "رهن / اجاره"
            }

            if (item.mileageFromOdometer) {
                kmTag.innerHTML = item.mileageFromOdometer.value + " " + "کیلومتر"
            }

            if (item.geo) {
                locationTag.innerHTML = item.geo.address
            }
        });
    })
}





// dropdown ----------------------------

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var items = this.el.find('.item');
        items.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.subItems').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});