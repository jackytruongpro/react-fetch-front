import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCoffee } from '@fortawesome/free-solid-svg-icons'

function Login() {
    return (
        <>
            <Link to="/" className="flex flex-row items-center justify-start mt-4 ml-4 text-white">
                <FontAwesomeIcon icon={faCircleChevronLeft} className="text-2xl" />
                <span className="ml-2 text-lg">Accueil</span>
            </Link>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')" }}
                        ></div>
                        <div className="w-full lg:w-7/12 bg-white p-5 shadow-xl border border-neutral-100 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-4xl text-black font-bold text-center">Connexion</h3>
                            <form className="text-left text-black px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold" for="username">
                                        Adresse de messagerie
                                    </label>
                                    <input
                                        className="w-full px-3 py-3 text-sm leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
                                        id="email"
                                        type="email"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold" for="password">
                                        Mot de passe
                                    </label>
                                    <input
                                        className="w-full px-3 py-3 mb-3 text-sm leading-tight border border-red-500 rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
                                        id="password"
                                        type="password"
                                        required
                                    />
                                    <p className="text-xs italic text-red-500">Choisissez un mot de passe valide</p>
                                </div>
                                <div className="mb-4">
                                    <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                    <label className="text-sm" for="checkbox_id">
                                        Se souvenir de moi
                                    </label>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Se connecter
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link to="/forgotPassword" className="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-800">
                                        Mot de passe oublié ?
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link to="/register" className="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-800">
                                        Vous n'avez pas de compte ? Inscrivez-vous !
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
