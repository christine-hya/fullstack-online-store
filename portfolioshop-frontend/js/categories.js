class Categories {
    constructor() {
        this.apiUrl = "http://localhost/fullstack-online-store/api-for-shop/api/v1/pages"
    }

    //display categories in nav

    getAllCategories() {
        fetch(this.apiUrl + "/categories").then(
            res => {
                res.json().then(
                    data => {
                       
                        if (data['response'].length > 0) {
                            var temp = "";

                            //start loop
                            data['response'].forEach((category) => {

                                temp += '<li class="text-center"><a class="dropwdown-item text-light links" href="/category.html?category='
                                    + encodeURIComponent(category.categories)
                                    + '">' +
                                    toTitleCase(category.categories) +
                                    '</a></li>'
                            })
                            //close the for loop
                            document.querySelector('.categories').innerHTML = temp;
                        }
                    }
                )
            }
        )
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    getSingleCategory(slug) {

        fetch(this.apiUrl + '/' + slug).then(
            res => {
                res.json().then(
                    data => {

                        var temp = "";

                        //start loop
                        data['response'].forEach((product) => {
                            temp += '<div class="col-md-6"><div class="product m-3 bg-light"><div class="image"><img src="'
                                + product.image +
                                '" class="img-fluid"></div><div class="info"><a class="fw-bold fs-4 product-links" href="product.html?product='
                                + product.slug +
                                '"><div class="title">'
                                + product.title + '<br>R'
                                + Math.round(product.price) + '</div></div></a></div></div>';
                        })
                        //close the for loop
                        document.querySelector('.products-category').innerHTML = temp;
                    }
                )
            }
        )
    }
}