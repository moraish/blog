import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

function AppBar() {
    return (
        <div className="flex justify-between border-b border-slate-300 dark:border-slate-700 h-12 w-full bg-white dark:bg-gray-900">
            <div className="flex justify-center">
                <div className="flex justify-center flex-col px-6">
                    <Link to='/blogs' className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                        Blogs
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center flex-col">
                    <div>
                        <Link to='/createBlog'>
                            <button
                                type="button"
                                className="focus:outline-none text-white bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 font-small rounded-2xl text-sm px-3 py-2.5 m-1"
                            >
                                Create
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center flex-col px-6">
                    <Avatar name="Moraish" size="big" />
                </div>
            </div>
        </div>
    )
}

export default AppBar;