import { Link } from "react-router-dom";
import { Navbar } from '../../components/navbar/navbar';

function Home() {
  return (
    <>
    <section className="w-full px-6 pb-12 antialiased">
        <div className="mx-auto max-w-7xl">
            <Navbar />
            <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
                <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-white md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">Projet</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">React Fetch</span></h1>
                <div className="mx-auto mt-5 text-white md:mt-12 md:max-w-lg md:text-center lg:text-lg">Réalisé par Jacky TRUONG</div>
                <div className="flex flex-col items-center mt-12 text-center">
                    <span className="relative flex w-full md:w-auto">
                        <Link to="/login" className="flex items-center justify-center w-full h-11 xl:ml-2 px-12 text-base font-bold leading-6 text-white bg-indigo-500 border border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Se connecter</Link>
                        <Link to="/register" className="flex items-center justify-center w-full h-11 xl:ml-2 px-12 text-base font-bold leading-6 text-white bg-indigo-500 border border-transparent rounded-full md:w-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">S'inscrire</Link>
                    </span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
