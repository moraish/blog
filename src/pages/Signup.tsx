import Quote from "../components/Quote";
import Auth from "../components/Auth";

function Signup() {
    return (
        <div className="min-h-screen dark:bg-gray-900">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full">
                    <Auth type="signup" />
                </div>
                <div className="invisible lg:visible dark:text-gray-200">
                    <Quote />
                </div>
            </div>
        </div>
    )
}

export default Signup;