import Input from "../Input"

export default function LoginForm() {
    return (
        <div className="bg-gray-200 min-h-screen font-sans">
            <div className="container">
                <div className="login-form bg-white rounded-xl py-12 px-5">
                    <h1>My Wine App</h1>
                    <h4>Log In</h4>
                    <form action="POST">
                        <div className="mt-2">
                            <Input type="email" name="email" id="email" placeholder="Email Address" />
                        </div>
                        <div className="mt-2">
                            <Input type="password" name="pasword" id="password" placeholder="Password" />
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