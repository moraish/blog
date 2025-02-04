import { SignupInput } from "@moraish/medium-common";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

function Auth({ type }: { type: "signup" | "signin" }) {
    const [postInputs, setpostInputs] = useState<SignupInput>({
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    });

    const navigate = useNavigate()

    async function sendRequest() {
        const endpoint = BACKEND_URL + (type === 'signup' ? '/api/v1/user/signup' : '/api/v1/user/signin');

        try {
            const response = await axios.post(endpoint, postInputs, {
                headers: {
                    'Content-Length': '0'
                }
            });

            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate('/blogs');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="h-screen flex justify-center items-center flex-col p-10 bg-white dark:bg-gray-900">
            <div className="font-bold text-2xl text-gray-900 dark:text-white">
                {type === 'signup' ? "Create an account" : "Login to your account"}
            </div>
            <div className="font-normal text-gray-700 dark:text-gray-300">
                {type === 'signup' ? "Already have an account?" : "Don't have an account?"}
                {type === 'signup' ?
                    <Link to="/signin" className="underline pl-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Login</Link> :
                    <Link to="/signup" className="underline pl-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Signup</Link>
                }
            </div>

            {type === 'signup' ?
                <div className="pt-10 w-3/5">
                    <LabelledInput
                        label="First Name"
                        placeholder="Moraish"
                        onchange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                firstName: e.target.value
                            })
                        }}
                    />
                </div>
                : null}

            {type === 'signup' ?
                <div className="pt-6 w-3/5">
                    <LabelledInput
                        label="Last Name"
                        placeholder="Kapoor"
                        onchange={(e) => {
                            setpostInputs({
                                ...postInputs,
                                lastName: e.target.value
                            })
                        }}
                    />
                </div>
                : null}

            <div className="pt-6 w-3/5">
                <LabelledInput
                    label="Username"
                    placeholder="mkapoor"
                    onchange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }}
                />
            </div>

            <div className="pt-6 w-3/5">
                <LabelledInput
                    label="Password"
                    placeholder="********"
                    type="password"
                    onchange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }}
                />
            </div>

            <div className="pt-3 w-3/5">
                <button
                    onClick={sendRequest}
                    className="w-full h-12 px-6 text-white transition-colors duration-150 bg-black dark:bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800 dark:hover:bg-indigo-900"
                >
                    {type === 'signup' ? 'Sign up' : 'Sign in'}
                </button>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onchange: (e: any) => void,
    type?: string
}

function LabelledInput({ label, placeholder, onchange, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                type={type || "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                onChange={onchange}
                required
            />
        </div>
    )
}

export default Auth;