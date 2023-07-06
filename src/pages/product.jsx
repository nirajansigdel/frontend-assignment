import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setproducts] = useState([]);
  //   const products = [];
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setproducts(json));
  });
  return (
    <div>
      <Header />
      <div className="container my-4">
        <h5 className="fw-600">OnlineShop</h5>
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="button" className="btn btn-outline-primary">
            Search
          </button>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="row">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="col-md-3 mb-4"
              style={{
                height: "50vh",
                width: "400px",
              }}
            >
              <Link to={"/product"} className="">
                <div className="product-img">
                  <img
                    className="rounded"
                    src={product.image}
                    alt=""
                    style={{
                      height: "300px",
                      width: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="my-2 d-flex">
                  <div className="my-1 flex-grow-1">
                    <div className="d-flex flex-column">
                      <p className="text-dark fw-500 text-s m-0 fw-bold ">
                        {product.title}
                      </p>
                      <p className="text-sm m-0 text-secondary fw-500">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="my-1">
                    <div className="text-dark text-sm fw-bold bg-muted px-3 py-2 rounded">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
