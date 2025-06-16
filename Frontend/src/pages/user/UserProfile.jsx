import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    asyncdeleteuser,
    asynclogoutuser,
    asyncupdateuser,
} from "../../store/actions/userActions";

const UserProfile = () => {
    const { users } = useSelector((state) => state.userReducer);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: users?.username,
            email: users?.email,
            password: users?.password,
        },
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UpdateUserHandler = (user) => {
        dispatch(asyncupdateuser(users.id, user));
    };

    const LogoutUserHandler = () => {
        dispatch(asynclogoutuser());
        navigate("/login");
    };

    const DeleteHandler = () => {
        dispatch(asyncdeleteuser(users.id));
        navigate("/login");
    };

    return users ? (
        <div className="min-h-screen bg-[#EAEFEF] flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg border border-[#B8CFCE] p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-[#333446]">{users.username}</h1>
                    <p className="text-[#7F8CAA] text-sm">{users.email}</p>
                </div>

                <hr className="border-[#B8CFCE]" />

                <form
                    onSubmit={handleSubmit(UpdateUserHandler)}
                    className="space-y-4"
                >
                    <input
                        {...register("username")}
                        className="w-full px-4 py-3 border border-[#B8CFCE] rounded-md bg-[#F9FAFB] text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        type="text"
                        placeholder="John-Doe"
                    />
                    <input
                        {...register("email")}
                        className="w-full px-4 py-3 border border-[#B8CFCE] rounded-md bg-[#F9FAFB] text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        type="email"
                        placeholder="john@doe.com"
                    />
                    <input
                        {...register("password")}
                        className="w-full px-4 py-3 border border-[#B8CFCE] rounded-md bg-[#F9FAFB] text-[#333446] placeholder-[#7F8CAA] focus:outline-none focus:ring-2 focus:ring-[#7F8CAA]"
                        type="password"
                        placeholder="********"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#7F8CAA] text-white font-medium py-3 rounded-md hover:bg-[#333446] transition-all duration-300"
                    >
                        Update Profile
                    </button>
                </form>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        type="button"
                        onClick={LogoutUserHandler}
                        className="w-full bg-[#B8CFCE] text-[#333446] font-medium py-2 rounded-md hover:bg-[#7F8CAA] hover:text-white transition-all duration-300"
                    >
                        Logout
                    </button>

                    <button
                        type="button"
                        onClick={DeleteHandler}
                        className="w-full bg-red-400 text-white font-medium py-2 rounded-md hover:bg-red-500 transition-all duration-300"
                    >
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <div className="text-center py-20 text-[#333446] text-lg">Loading...</div>
    );
};

export default UserProfile;
