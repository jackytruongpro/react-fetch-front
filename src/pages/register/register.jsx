import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCoffee } from '@fortawesome/free-solid-svg-icons'

function Register() {
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
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')" }}
                        ></div>
                        <div className="w-full lg:w-7/12 bg-white p-5 shadow-xl border border-neutral-100 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-4xl text-black font-bold text-center">Inscription</h3>
                            <form className="text-black text-left px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold" for="firstName">
                                            Prénom
                                        </label>
                                        <input
                                            className="w-full px-3 py-3 text-sm leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
                                            id="firstName"
                                            type="text"
                                            placeholder="Jacky"
                                            required
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold" for="lastName">
                                            NOM
                                        </label>
                                        <input
                                            className="w-full px-3 py-3 text-sm leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
                                            id="lastName"
                                            type="text"
                                            placeholder="TRUONG"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold" for="email">
                                        Adresse de messagerie
                                    </label>
                                    <input
                                        className="w-full px-3 py-3 mb-3 text-sm leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
                                        id="email"
                                        type="email"
                                        placeholder="jackytruong@mail.com"
                                        required
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold" for="password">
                                            Mot de passe
                                        </label>
                                        <input
                                            className="w-full px-3 py-3 mb-3 text-sm leading-tight border border-red-500 rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
                                            id="password"
                                            type="password"
                                            placeholder="***********"
                                            required
                                        />
                                        <p className="text-xs italic text-red-500">Veuillez renseigner un mot de passe</p>
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold" for="c_password">
                                            Confirmer votre mot de passe
                                        </label>
                                        <input
                                            className="w-full px-3 py-3 mb-3 text-sm leading-tight border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
                                            id="c_password"
                                            type="password"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline focus:border-indigo-500"
                                        type="submit"
                                    >
                                        S'inscrire
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link to="/forgotPassword" className="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-800">
                                        Mot de passe oublié ?
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link to="/login" className="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-800">
                                        Vous avez déjà un compte ? Connectez-vous !
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

export default Register
