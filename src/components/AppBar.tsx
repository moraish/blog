import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

function AppBar() {
    return (
        <div className="flex justify-between border-b border-slate-500 h-12 w-full">
            <div className="flex justify-center">
                <div className="flex justify-center flex-col px-6">
                    <Link to='/blogs'>
                        Blogs
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center flex-col">
                    <div>
                        <Link to='/createBlog'>
                            <button type="button" className="focus:outline-none text-white bg-green-500 hover:bg-green-600 font-small rounded-2xl text-sm px-3 py-2.5 m-1">Create</button>
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