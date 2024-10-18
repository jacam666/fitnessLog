import Link from "next/link";
import Logo from "../components/logo";

export default function Login() {
    return (
        <div className=" bg-white">
            <div className="flex flex-row py-2">
                <div>
                    <Logo />
                </div>
                <div className="flex justify-center items-center mx-auto">
                    <Link className="text-black font-bold" href="/">Home</Link>
                </div>
            </div>
            <div className="h-screen  flex justify-center md:items-center py-8 bg-slate-800">
                <div className=" flex flex-col md:flex-row sm:justify-between ">
                    <div className=" max-w-sm text-white rounded-xl my-6 md:my-0 md:mx-6">
                        <h1 className="flex justify-center p-4 text-3xl">Login</h1>
                        <form className="flex flex-col items-center gap-2 text-2xl">
                            <label>Username</label>
                            <input type="text" name="username" />
                            <label>Password</label>
                            <input type="password" name="password" />
                            <button className="bg-green-300 p-1 px-3 rounded text-black text-sm" type="submit">Login</button>
                        </form>
                    </div>
                    <div className=" max-w-sm text-white rounded-xl">
                        <h1 className="flex flex-col items-center p-4 text-3xl">Register</h1>
                        <form className="flex flex-col items-center gap-2 text-2xl">
                            <label>Username</label>
                            <input type="text" name="username" />
                            <label>Password</label>
                            <input type="password" name="password" />
                            <button className="bg-green-300 p-1 px-3 rounded text-black text-sm" type="submit">Register</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>


    )
}