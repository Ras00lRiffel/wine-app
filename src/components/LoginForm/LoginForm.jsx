'use client'
import Input from "../Input/Input";
import { useState } from "react";

// async function getUser(email, password) {
//     const user = await prisma.user.find({
//         where: { email: email, password: password }
//     })
// }


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const user = await getUser(email, password);
    console.log(email);
    return (
        <div className="bg-gray-200 min-h-screen font-sans">
            <div className="container">
                <div className="login-form bg-white rounded-xl py-12 px-5">
                    <h1>My Wine App</h1>
                    <h4>Log In</h4>
                    <form action="POST">
                        <div className="mt-2">
                            <Input type="email" name="email" id="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mt-2">
                            <Input type="password" name="pasword" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mt-2">
                            <button type="submit" className="
                            login-btn
                            p-4
                            rounded-md
                            bg-gray-600
                            text-white
                            text-lg
                            uppercase
                            font-bold
                            text-sm
                            ">
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}