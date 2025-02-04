import Quote from "../components/Quote";
import SignUpForm from "../components/Auth";

function Signin() {
    return (
        <div className="min-h-screen dark:bg-gray-900">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full">
                    <SignUpForm type="signin" />
                </div>
                <div className="invisible lg:visible dark:text-gray-200">
                    <Quote />
                </div>
            </div>
        </div>
    )
}

export default Signin;