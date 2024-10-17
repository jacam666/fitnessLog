import Link from "next/link";
import Logo from "../components/logo";

export default function Login() {
    return (
        <div className=" bg-white">
            <div className="flex flex-row justify-between py-2">
                <div>
                    <Logo />
                </div>
                <div className="flex justify-center items-center mx-auto">
                    <Link className="text-black font-bold" href="/">Home</Link>
                </div>
            </div>
            <div className="h-screen  flex justify-center md:items-center py-8 bg-green-100">
                <div className=" flex flex-col md:flex-row sm:justify-between ">
                    <div className=" max-w-sm text-black rounded-xl my-6 md:my-0 md:mx-6">
                        <h1 className="flex justify-center my-6 text-5xl">Login</h1>
                        <form className="flex flex-col items-center gap-2 text-2xl">
                            <label>Username</label>
                            <input type="text" name="username" />
                            <label>Password</label>
                            <input type="password" name="password" />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                    <div className=" max-w-sm text-black rounded-xl">
                        <h1 className="flex flex-col items-center p-4 text-5xl">Register</h1>
                        <form className="flex flex-col items-center gap-2 text-2xl">
                            <label>Username</label>
                            <input type="text" name="username" />
                            <label>Password</label>
                            <input type="password" name="password" />
                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>


    )
}