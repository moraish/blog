import { Blog } from "../hooks/useBlogs"
import AppBar from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <AppBar />
            <div className="grid grid-cols-12 px-12 pt-5">
                <div className="col-span-8">
                    <div className="text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 text-sm pt-1">
                        Posted on 4th Feburary 2025
                    </div>
                    <div className="pt-4 pl-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-500 text-md">
                        Author
                    </div>
                    <div className="flex">
                        <div className="flex flex-col justify-center pr-4">
                            <Avatar size="big" name={blog.author.firstName || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-lg font-bold">
                                {blog.author.firstName} {blog.author.lastName}
                            </div>
                            <div className="text-md text-slate-500">
                                Creating a blogging website currently. Going to be asking LLMs to write blogs for me going forward.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
