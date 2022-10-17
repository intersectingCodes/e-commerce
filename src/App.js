import { data as products } from "./helpers/data";

function App() {
  console.log(products);
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Bizim Store</h1>
        <div className="row justify-content-center g-3">
          {products.map((product) => {
            const { category, id, image, price, title } = product;
            return (
              <div key={id} className="col">
                <div className="card m-auto" style={{ width: "18rem" }}>
                  <img
                    src={image}
                    style={{ height: "18rem" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate" title={title}>
                      {title}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {category}
                    </h6>
                  </div>
                  <div className="card-body d-flex justify-content-between">
                    <span className="fw-bold">{price}$</span>
                    <i className="fa-solid fa-cart-plus"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
