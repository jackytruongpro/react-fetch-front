import { Navbar } from '../../components/navbar/navbar';

function WriteArticle() {
    return (
        <>
            <section className="w-full px-6 pb-12 antialiased">
                <div className="mx-auto max-w-7xl">
                    <Navbar />
                    <div className="container max-w-lg px-4 py-14 mx-auto text-left md:max-w-none md:text-center">
                        <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-white md:text-center sm:leading-none md:text-4xl lg:text-5xl"><span className="inline md:block">Rédiger un article</span></h1>
                        <div class="flex items-center justify-center p-12">
                            <div class="mx-auto w-full max-w-[550px]">
                                <form action="https://formbold.com/s/FORM_ID" method="POST">
                                    <div class="mb-5">
                                        <label
                                            class="text-left mb-3 block text-base font-medium text-white"
                                        >
                                            Titre de l'article
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="SCOOP ! Amber Heard est finito"
                                            class="w-full rounded-md border bg-transparent py-3 px-6 text-base font-normal text-white outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                    <div class="mb-5">
                                        <label
                                            class="text-left mb-3 block text-base font-medium text-white"
                                        >
                                            Corp de l'article
                                        </label>
                                        <textarea
                                            rows="4"
                                            name="message"
                                            id="message"
                                            placeholder="Amber Heard, cette fraude, devra verser 15 millions de dollard à Johnny Giga Chad"
                                            class="w-full resize-none rounded-md border bg-transparent py-3 px-6 text-base font-normal text-white outline-none focus:border-indigo-500"
                                        ></textarea>
                                    </div>
                                    <div class="mb-5">
                                        <label
                                            class="text-left mb-3 block text-base font-medium text-white"
                                        >
                                            Image mise en avant
                                        </label>
                                        <div class="grid grid-cols-1 space-y-2">
                                            <div class="flex items-center justify-center w-full">
                                                <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                                    <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                                        <div class="flex flex-auto flex-row justify-center">
                                                            <img class="has-mask h-28 object-center" src="https://c.tenor.com/-sL5lSwzQSkAAAAi/rolling-cute.gif" alt="freepik image" />
                                                        </div>
                                                        <p class="pointer-none text-gray-500 ">Sélectionnez la plus belle des bannières !</p>
                                                    </div>
                                                    <input type="file" class="hidden" accept="image/png, image/gif, image/jpeg, image/jpg" />
                                                </label>
                                            </div>
                                        </div>
                                        <p class="text-left mt-2 text-sm text-gray-300">
                                            <span>Types de fichier autorisés: JPG, JPEG, PNG, GIF</span>
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            class="hover:shadow-form rounded-full bg-indigo-500 hover:bg-indigo-600 py-3 px-8 text-base font-semibold text-white outline-none"
                                        >
                                            Publier l'article
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WriteArticle
