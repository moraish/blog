
import AppBar from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlogs";



function Blogs() {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>loading...</div>
    }
    return (
        <div>
            <AppBar />
            <div className="flex justify-center ">
                <div className="min-w-full md:min-w-[75vw]">
                    {
                        blogs.map(blog => <BlogCard
                            authorName={blog.author.firstName || "Anonymous"}
                            publishedDate="2nd Feb 2025"
                            title={blog.title}
                            content={blog.content}
                            id={blog.id}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs;