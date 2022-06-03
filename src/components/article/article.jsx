import React, { Component } from 'react';

export const Article = () => {
    return (
        <>
            <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-200 to-indigo-100 overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog" />
                    <div class="p-6">
                        <h1 class="title-font text-lg font-medium text-black mb-2">Nom de l'article</h1>
                        <h2 class="text-left tracking-widest text-xs title-font font-medium text-gray-600 mb-1">Ecrit par : Jacky TRUONG</h2>
                        <h2 class="text-left tracking-widest text-xs title-font font-medium text-gray-600 mb-3">Publié le : 03/06/2022</h2>
                        <p class="text-left leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus tortor a ligula lobortis semper. Pellentesque interdum feugiat lorem, quis semper diam vestibulum vitae.</p>
                    </div>
                </div>
            </div>
        </>
    )
}