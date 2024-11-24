import * as React from "react"

const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="bg-white pt-11 pb-16 w-full sm:px-10">
             <h2 className="text-primary 2xl:text-6xl text-3xl sm:text-5xl font-bold w-full text-center mb-9 mt-5">We Are Expert In</h2>
            <div className="flex items-center justify-center flex-wrap gap-x-7">
                <div className="flex flex-col items-center content-center">
                    <div className=" rounded-full hover:bg-primary transition-all group cursor-pointer border border-black p-4">
                        <svg className=" w-14 h-14 2xl:w-20 2xl:h-20 group-hover:text-white transition-all text-gray-800 dark:text-white"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" /><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" /></svg>
                    </div>
                    <span className="text-primary text-md 2xl:text-xl mt-2">Figma</span>
                </div>

                <div className="flex flex-col items-center content-center">
                    <div className="rounded-full group cursor-pointer hover:bg-primary transition-all border border-black p-4">
                        <svg className="w-14 h-14 2xl:w-20 2xl:h-20 group-hover:text-white transition-all text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2 -1.857l.867 -12.143h-16z" /><path d="M8.5 7c0 -1.653 1.5 -4 3.5 -4s3.5 2.347 3.5 4" /><path d="M9.5 17c.413 .462 1 1 2.5 1s2.5 -.897 2.5 -2s-1 -1.5 -2.5 -2s-2 -1.47 -2 -2c0 -1.104 1 -2 2 -2s1.5 0 2.5 1" /></svg>
                    </div>
                    <span className="text-primary text-md 2xl:text-xl mt-2">Shopify</span>
                </div>

                <div className="flex flex-col items-center content-center">
                    <div className="rounded-full group hover:bg-primary transition-all cursor-pointer border border-black p-4">
                    <svg className="w-14 h-14 2xl:w-20 group-hover:text-white transition-all 2xl:h-20 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12c0 -4.243 0 -6.364 1.318 -7.682s3.44 -1.318 7.682 -1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364 -1.318 7.682s-3.44 1.318 -7.682 1.318s-6.364 0 -7.682 -1.318s-1.318 -3.44 -1.318 -7.682" /><path d="M6.79 15.79v-3.79m0 0v-2.724c0 -.11 0 -.165 .004 -.211c.044 -.45 .4 -.806 .85 -.85c.046 -.004 .101 -.004 .211 -.004h1.303a1.895 1.895 0 1 1 0 3.789z" /><path d="M17.178 11.263c-.164 -.659 -.935 -1.158 -1.862 -1.158c-1.047 0 -1.895 .637 -1.895 1.421c0 .785 .848 1.421 1.895 1.421c1.046 0 1.895 .637 1.895 1.421c0 .785 -.849 1.421 -1.895 1.421c-.93 0 -1.704 -.502 -1.864 -1.165" /></svg>
                    </div>
                    <span className="text-primary text-md 2xl:text-xl mt-2">Photoshop</span>
                </div>


                <div className="flex flex-col items-center content-center">
                    <div className="rounded-full group hover:bg-primary transition-all cursor-pointer border border-black p-4">
                    <svg  className="w-14 h-14 2xl:w-20 2xl:h-20 group-hover:text-white transition-all text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12c0 -4.243 0 -6.364 1.318 -7.682s3.44 -1.318 7.682 -1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364 -1.318 7.682s-3.44 1.318 -7.682 1.318s-6.364 0 -7.682 -1.318s-1.318 -3.44 -1.318 -7.682" /><path d="M12.947 15.79l-.82 -2.653m-4.864 2.652l.82 -2.652m0 0l.687 -2.218c.558 -1.806 .838 -2.708 1.335 -2.708c.498 0 .777 .902 1.336 2.708l.686 2.218m-4.043 0h4.043" /><path d="M15.789 15.789v-4.736" /><path d="M15.789 8.684v-.473" /></svg>
                    </div>
                    <span className="text-primary text-md 2xl:text-xl mt-2">Illustrator</span>
                </div>

                <div className="flex flex-col items-center content-center">
                    <div className="rounded-full group hover:bg-primary cursor-pointer transition-all border border-black p-4">
                    <svg  className="w-14 h-14 2xl:w-20 2xl:h-20 group-hover:text-white transition-all text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" /><path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" /></svg>
                    </div>
                    <span className="text-primary text-md 2xl:text-xl mt-2">Meta</span>
                </div>

                <div className="flex flex-col items-center content-center">
                    <div className="rounded-full group hover:bg-primary cursor-pointer transition-all border border-black p-4">
                    <svg  className="w-14 h-14 2xl:w-20 2xl:h-20 group-hover:text-white transition-all text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" /><path d="M11 18v4" /><path d="M7 15.5l7 -4" /><path d="M14 7.5v4" /><path d="M14 11.5l4 2.5" /><path d="M11 13v-7.5l-4 -2.5l-4 2.5" /><path d="M7 8l4 -2.5" /><path d="M18 10l4 -2.5" /></svg>
                    </div>
                    <span className="text-primary text-md 2xl:text-xl mt-2">Laravel</span>
                </div>

                <div className="flex flex-col items-center content-center">
                    <div className="rounded-full group hover:bg-primary cursor-pointer transition-all border border-black p-4">
                    <svg  className="w-14 h-14 2xl:w-20 2xl:h-20 group-hover:text-white transition-all text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
                    </div>
                    <span className="text-primary text-md 2xl:text-xl mt-2">React</span>
                </div>

                <div className="flex flex-col items-center content-center">
                    <div className="rounded-full group hover:bg-primary cursor-pointer transition-all border border-black p-4">
                    <svg  className="w-14 h-14 2xl:w-20 2xl:h-20 group-hover:text-white transition-all text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" /></svg>
                    </div>
                    <span className="text-primary text-md 2xl:text-xl mt-2">Google</span>
                </div>

                <div className="flex flex-col items-center content-center">
                    <div className="rounded-full border group hover:bg-primary cursor-pointer transition-all border-black p-4">
                    <svg  className="w-14 h-14 2xl:w-20 2xl:h-20 group-hover:text-white transition-all text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                    </div>
                    <span className="text-primary text-md 2xl:text-xl mt-2">Instagram</span>
                </div>

            </div>
        </section>
    )
}

export default Expertise;