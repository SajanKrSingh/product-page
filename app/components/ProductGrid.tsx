type ProductProps = {
  product: {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
  };
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="p-4 border border-gray-200">
      <img
        src={product.image}
        alt={product.title}
        className="mb-4 h-48 w-full object-contain"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-700 font-bold">${product.price}</span>
        <i className="far fa-heart text-gray-700"></i>
      </div>
    </div>
  );
};

export default ProductCard;
