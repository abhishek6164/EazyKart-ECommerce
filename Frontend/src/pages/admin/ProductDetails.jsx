import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    asyncdeleteproduct,
    asyncupdateproduct,
} from "../../store/actions/productActions";

const ProductDetails = () => {
    const { id } = useParams();
    const {
        productReducer: { products },
        userReducer: { users },
    } = useSelector((state) => state);

    const product = products?.find((product) => product.id == id);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            image: product?.image,
            title: product?.title,
            price: product?.price,
            category: product?.category,
            description: product?.description,
        },
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UpdateProductHandler = (product) => {
        dispatch(asyncupdateproduct(id, product));
    };

    const DeleteHandler = () => {
        dispatch(asyncdeleteproduct(id));
        navigate("/products");
    };

    return product ? (
        <div className="min-h-screen bg-[#EAEFEF] px-6 py-12">
            {/* Product Display */}
            <div className="flex flex-col md:flex-row gap-8 bg-white shadow-xl border border-[#B8CFCE] rounded-2xl p-6">
                <img
                    className="w-full md:w-1/2 h-[400px] object-cover rounded-xl"
                    src={product.image}
                    alt={product.title}
                />
                <div className="md:w-1/2 flex flex-col justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-[#333446] mb-2">{product.title}</h1>
                        <h2 className="text-2xl font-semibold text-[#7F8CAA] mb-4">${product.price}</h2>
                        <p className="text-[#333446] leading-relaxed mb-2">{product.description}</p>
                        <p className="text-sm text-[#B8CFCE] uppercase tracking-wider">
                            Category: {product.category}
                        </p>
                    </div>
                    <button className="bg-[#7F8CAA] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#333446] transition-all duration-300 mt-6 w-fit">
                        🛒 Add to Cart
                    </button>
                </div>
            </div>

            {/* Admin Panel */}
            {users?.isAdmin && (
                <form
                    onSubmit={handleSubmit(UpdateProductHandler)}
                    className="mt-12 bg-white shadow-lg border border-[#B8CFCE] rounded-2xl p-8 space-y-6"
                >
                    <h3 className="text-2xl font-bold text-[#333446] text-center">
                        🛠 Admin Panel — Edit Product
                    </h3>

                    <div className="space-y-4">
                        <input
                            {...register("image")}
                            type="url"
                            placeholder="Image URL"
                            className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-lg px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        />

                        <input
                            {...register("title")}
                            type="text"
                            placeholder="Product Title"
                            className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-lg px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        />

                        <input
                            {...register("price")}
                            type="number"
                            placeholder="0.00"
                            className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-lg px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        />

                        <textarea
                            {...register("description")}
                            rows={4}
                            placeholder="Enter product description..."
                            className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-lg px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        />

                        <input
                            {...register("category")}
                            type="text"
                            placeholder="Category"
                            className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-lg px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-[#7F8CAA] text-white font-semibold px-6 py-2 rounded-xl hover:bg-[#333446] transition-all duration-300"
                        >
                            💾 Update
                        </button>
                        <button
                            type="button"
                            onClick={DeleteHandler}
                            className="bg-red-400 text-white font-semibold px-6 py-2 rounded-xl hover:bg-red-500 transition-all duration-300"
                        >
                            🗑 Delete
                        </button>
                    </div>
                </form>
            )}
        </div>
    ) : (
        <div className="text-center text-[#333446] py-20 text-lg font-medium">Loading...</div>
    );
};

export default ProductDetails;
