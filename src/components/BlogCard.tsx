import { Link } from "react-router-dom"

interface BlogCardProps {
    id: number,
    authorName: string,
    publishedDate: string,
    title: string,
    content: string
}


export const BlogCard = ({
    id, authorName, publishedDate, title, content
}: BlogCardProps) => {
    return (
        <div className="border-b border-slate-200 p-5 m-5">
            <div className="flex items-baseline ">
                <div className="pr-2">
                    <Avatar name={authorName} />
                </div>
                <div className="font-light text-sm">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="font-light  pl-3 text-gray-500 text-xs">
                    {publishedDate}
                </div>
            </div>
            <div className="font-bold pt-2">
                {title}
            </div>
            <Link to={`/blog/${id}`}>
                <div className="font-light text-gray-500">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="font-light text-gray-500 text-xs pt-2">
                    {Math.ceil(content.length / 100)} min read
                </div>
            </Link>
        </div>
    )
}

export function Avatar({ name, size = "small" }: { name: string, size?: 'small' | 'big' }) {
    return (
        <div className={`relative inline-flex items-center justify-center ${size === 'small' ? 'w-6 h-6 text-xs' : 'w-10 h-10 text-lg'} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 text-sm`}>
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>
    )
}

function Circle() {
    return <div className="rounded-full h-1 w-1 bg-black">

    </div>
}