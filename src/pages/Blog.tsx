import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlogs";
import { FullBlog } from "../components/FullBlog";

function Blog() {
    const { id } = useParams();
    const { blog, loading } = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div className="h-screen flex justify-center items-center text-gray-900 dark:text-white bg-white dark:bg-gray-900">
            loading...
        </div>
    }

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <FullBlog blog={blog} />
        </div>
    )
}

export default Blog;