import { ChangeEvent, useState } from "react";
import AppBar from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen dark:bg-gray-900">
            <AppBar />
            <div className="px-20">
                <textarea
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setTitle(e.target.value)
                    }}
                    id="Title"
                    value={title}
                    className="mt-10 p-2 block w-full text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600"
                    placeholder="Title"
                    required
                />

                <textarea
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setContent(e.target.value)
                    }}
                    id="Content"
                    value={content}
                    className="my-2 p-2 h-80 block w-full text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600"
                    placeholder="Write your Blog..."
                    required
                />

                <button
                    onClick={async () => {
                        const response = await axios.post(BACKEND_URL + '/api/v1/blog',
                            { title, content },
                            {
                                headers: {
                                    'Authorization': localStorage.getItem('token'),
                                    'Content-Length': '0'
                                }
                            }
                        );
                        navigate('/blog/' + response.data.id);
                    }}
                    type="submit"
                    className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-500 dark:bg-green-600 rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition-colors"
                >
                    Publish
                </button>
            </div>
        </div>
    )
}