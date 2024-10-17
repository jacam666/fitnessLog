import Link from "next/link";
import Logo from "./components/logo";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex flex-row justify-between py-2">
        <div>
          <Logo />
        </div>
        <div className="flex justify-center items-center mx-auto">
          <Link href="/loginPage" className="text-black text-xl font-bold">Login</Link>
        </div>
      </div>
      <div>
        <nav className="flex flex-row justify-evenly bg-slate-800 opacity-70 py-3">
          <Link href="/diaryPage" className="text-white text-xl ">Diary</Link>
          <Link href="/contact" className="text-white text-xl">Contact</Link>
        </nav>
      </div>
      
      <div className="flex-grow flex px-6 "
      style={{
        backgroundImage: 'url("/images/fitnessimagebackground.webp")',
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundRepeat: "no-repeat", // Avoid repeating the image
        backgroundPosition: "center", // Center the image
      }}>
        <main className="flex flex-col justify-evenly ">
          <div className="text-5xl font-extrabold text-black flex justify-center items-center mx-auto">
            <h1>Fitness Log</h1>
          </div>
          <p className="mx-auto text-xl text-start text-white md:text-2xl bg-slate-800 bg-opacity-70 p-6 rounded-md sm:w-11/12">
            Track your progress, set goals, and stay motivated with our fitness log app! Whether you're a seasoned athlete or just starting out, our intuitive platform allows you to log workouts and celebrate your achievements. With customizable features and insightful analytics, you’ll have all the tools you need to make every step count. Let's embark on this journey together—your best self is just a log away!
          </p>
        </main>
      </div>
    </div>
  );
}
