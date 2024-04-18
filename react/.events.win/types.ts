// Definitions for Product
export interface Product {
  /**
   * Unique id of the product on the store
   */
  sku: string;
  /**
   * Name of the product on the store
   */
  name: string;
  /**
   * Link to the image shown in the store
   */
  image_src: string;
}


// Definitions for ProductClicked
export interface ProductClicked {
  product: Product;
}


// Definitions for ProductViewed
export interface ProductViewed {
  product: Product;
}
