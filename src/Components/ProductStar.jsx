import { FaStar } from "react-icons/fa";

const ProductStar = () => {
  return (
    <>
        <div className="flex items-center space-x-2 mb-4 text-2xl">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
    </>
  )
}

export default ProductStar