import React from "react";

function Product() {
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.escuelajs.co/api/v1/products?offset=0&limit=8"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            renderProducts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const renderProducts = (products) => {
        const container = document.querySelector(".shop_section .container .row");
        if (container) {
            container.innerHTML = products
                .map(
                    (product) => `
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="box">
              <a href="/">
                <div class="img-box">
                  <img src="${product.images}" alt="" />
                </div>
                <div class="detail-box">
                  <h6>${product.title}</h6>
                  <h6>Price <span>$ ${product.price}</span></h6>
                </div>
                <div class="new">
                  <span>New</span>
                </div>
              </a>
            </div>
          </div>
        `
                )
                .join("");
        }
    };

    fetchData();

    return (
        <>
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>Latest Products</h2>
                    </div>
                    <div className="row"></div>
                    <div className="btn-box">
                        <a href="/">View All Products</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;
