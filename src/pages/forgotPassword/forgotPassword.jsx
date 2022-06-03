import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCoffee } from '@fortawesome/free-solid-svg-icons'

function ForgotPassword() {
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
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80')" }}
                        ></div>
                        <div className="w-full lg:w-7/12 bg-white p-5 shadow-xl border border-neutral-100 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-4xl text-black font-bold text-center">Mot de passe oublié</h3>
                            <p className="px-12 mb-4 text-sm text-gray-700">
                                Vous avez oublié votre mot de passe ? Ce sont des choses qui arrivent. Renseignez votre adresse de messagerie, nous vous enverrons un lien pour réinitialiser votre mot de passe !
                            </p>
                            <form className="text-left px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-8">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Adresse de messagerie
                                    </label>
                                    <input
                                        className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline  focus:border-indigo-500"
                                        id="email"
                                        type="email"
                                        required
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Réinitialiser mon mot de passe
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link to="/register" className="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-800">
                                        Pas de compte ? Inscrivez-vous !
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link to="/login" className="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-800">
                                        La mémoire vous est revenue ? Connectez-vous !
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

export default ForgotPassword