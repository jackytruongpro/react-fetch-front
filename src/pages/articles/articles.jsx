import { Navbar } from '../../components/navbar/navbar';
import { Article } from '../../components/article/article';

function Articles() {
    return (
        <>
            <section className="w-full px-6 pb-12 antialiased">
                <div className="mx-auto max-w-7xl">
                    <Navbar />
                    <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
                        <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-white md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">Articles</span></h1>
                        <section className="text-black body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <Article />
                                    <Article />
                                    <Article />
                                    <Article />
                                    <Article />
                                    <Article />
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Articles
