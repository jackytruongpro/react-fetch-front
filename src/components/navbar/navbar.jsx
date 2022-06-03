import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav className="relative z-50 h-24 select-none" x-data="{ showMenu: false }">
                <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
                    <div className="flex items-center justify-start w-1/4 h-full pr-4">
                        <Link to="/" className="inline-block py-4 md:py-0">
                            <span className="p-1 text-xl font-black leading-none text-white"><span>React Fetch</span><span className="text-indigo-600">.</span></span>
                        </Link>
                    </div>
                    <div className="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
                        <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                            <Link to="/" className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-white md:hidden">React Fetch<span className="text-indigo-600">.</span></Link>
                            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center text-white">
                                <Link to="/" className="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Accueil</Link>
                                <Link to="/articles" className="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Articles</Link>
                                <Link to="/writeArticle" className="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Rédiger un article</Link>
                            </div>
                            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                                <Link to="/login" className="w-full px-6 py-2 mr-0 text-white md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">Se connecter</Link>
                                <Link to="/register" className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-500 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-600 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">S'inscrire</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                        <svg className="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak="">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg className="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak="">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    )
}