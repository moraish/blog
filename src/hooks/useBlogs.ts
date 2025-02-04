import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";


export interface Blog {
    "title": string,
    "content": string,
    "id": number,
    "author": {
        "firstName": string,
        "lastName": string
    }
}

export function useBlog({ id }: { id: string }) {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(BACKEND_URL + `/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(response => {
                setBlog(response.data.blog)
                setLoading(false)
                console.log(response.data)
            })
    }, [])

    return {
        loading, blog
    }
}


export function useBlogs() {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(BACKEND_URL + '/api/v1/blog/bulk', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(response => {
                setBlogs(response.data.blogs)
                setLoading(false)
                console.log(response.data)
            })
    }, [])

    return {
        loading, blogs
    }

}


