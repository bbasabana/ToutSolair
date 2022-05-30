function HeaderPage(){
    return <div className="bg-gray-900 Header-HomePage">
                <div
                    className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl">
                        <span className="block text-white">ToutSolaire.CD</span>
                        <span className="block text-yellow-600">L’énergie solaire à votre domicile.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a href="#"
                               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-gray-700"> Devis
                                gratuit</a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a href="#"
                               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-indigo-50"> Nous
                                contacter </a>
                        </div>
                    </div>
                </div>
    </div>
}

export default HeaderPage