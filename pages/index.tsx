import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MessageForm from './components/MessageForm'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>SyntropicA - Community Food Forests in Aruba</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <section className="bg-white dark:bg-gray-900">
                <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="place-self-center mr-auto md:col-span-6">
                        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white text-gray-800">Community Food Forests in Aruba</h1>
                        <p className="mb-6 max-w-2xl font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Our mission is to grow food and restore nature, based on permaculture and syntropic agroforestry principles.
                        </p>
                    </div>
                    <div className="lg:mt-0 md:col-span-6 md:flex">
                        <Image src="/LandingPageImage.jpg" width="800" height="600" className="w-full rounded-lg" />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mb-8 max-w-screen-md lg:mb-16 font-light text-gray-600 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white text-gray-800">How to Plant a Food Forest</h2>
                        <p className="mb-4">Anyone can create a food forest in their own garden following a few basic principles, explained in our manual!</p>
                        <p className="mb-4">Eventually an ecosystem will emerge without the need of fertilisation or pesticides. Once the food forest is established it has it's own micro climate, and need little or no watering.</p>
                        <p className="mb-4"> By carefully selecting fruits and vegetables, it's possible to plant in multiple layers, optimising photosynthesis and harvest, even on a small patch of land!</p>
                        <a href="/documentation" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                            Read manual
                            <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </section>

            <section id="education" className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-600 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white text-gray-800">Education in Schools</h2>
                        <p className="mb-4">
                            Planting a school garden is the perfect way to teach about nature, healthy food, and growing your own fruits and vegetables.
                        </p>
                        <p className="mb-4">
                            Reach out to us for guidance and help on setting up a school garden.
                        </p>
                        <a href="#contact" className="no-underline inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900">Get a school garden</a>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <span>
                            <Image src="/Amalia02.jpg" className="w-full rounded-lg" width="400" height="533" />

                        </span>
                        <span className="mt-4 lg:mt-10">
                            <Image src="/Amalia01.jpg" className="w-full rounded-lg" width="400" height="533" />
                        </span>                    </div>
                </div>
            </section>
            <section id="join" className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div>
                        <Image src="/Community.jpeg" width="600" height="450" className="w-full rounded-lg" />
                    </div>
                    <div className="font-light text-gray-600 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 mt-1 text-4xl font-extrabold text-gray-900 dark:text-white text-gray-800">Join our Community</h2>
                        <p className="mb-4">
                            Joining our work sessions is the best way to learn more about this innovative technique. We set up new food forests all the time, so contact us and come help out!
                        </p>
                        <a href="#contact" className="no-underline inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900">Join Us</a>
                    </div>
                </div>
            </section>
            <MessageForm email={"syntropica@protonmail.com"} />
            <Footer />
        </div>
    )
}

export default Home
