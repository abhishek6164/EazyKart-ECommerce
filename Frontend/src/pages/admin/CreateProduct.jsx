import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/actions/productActions";

const CreateProduct = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const CreateProductHandler = (product) => {
        product.id = nanoid();
        dispatch(asynccreateproduct(product));
        navigate("/products");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#EAEFEF] px-4 py-10">
            <form
                onSubmit={handleSubmit(CreateProductHandler)}
                className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-[#B8CFCE]"
            >
                <h2 className="text-3xl font-bold text-[#333446] text-center">Create New Product</h2>

                <div className="space-y-4">
                    <input
                        {...register("image")}
                        className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-xl px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        type="url"
                        placeholder="Image URL"
                    />

                    <input
                        {...register("title")}
                        className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-xl px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        type="text"
                        placeholder="Product Title"
                    />

                    <input
                        {...register("price")}
                        className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-xl px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        type="number"
                        placeholder="0.00"
                    />

                    <textarea
                        {...register("description")}
                        className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-xl px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        rows={4}
                        placeholder="Enter product description..."
                    ></textarea>

                    <input
                        {...register("category")}
                        className="w-full bg-[#F9FAFB] border border-[#B8CFCE] rounded-xl px-4 py-3 text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        type="text"
                        placeholder="Category"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#7F8CAA] text-white font-semibold py-3 rounded-xl hover:bg-[#333446] transition-all duration-300"
                >
                    🚀 Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
