const MainSection = () => {
    return (
      <main className="main-section py-10">
        <div className="container mx-auto px-4">
          {/* Divide into two parts: part-1 for the image, part-2 for the text */}
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Product Image Section */}
            <div className="image-wrapper relative w-full md:w-1/2 h-80 md:h-auto">
              <img
                src="../images/image-1.jpg"
                alt="Product"
                className="w-full h-full object-cover"
              />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
  
            {/* Product Description Section */}
      
            <div className="flex flex-col gap-6 md:w-1/2">
              <h1 className="text-3xl font-bold">Men&#39;s T-Shirt</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
                voluptate.
              </p>
              <div className="flex gap-4">
                <button className="btn-primary px-6 py-2">Add to cart</button>
                <button className="btn-secondary px-6 py-2">Add to wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default MainSection;
  