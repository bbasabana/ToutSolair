function RightContent(){
    return <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
            <svg  xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 24 24" fill="none" stroke="#000000"
                 className="w-40 m-auto opacity-75">
                <path  d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                <path  d="M14 3v5h5M16 13H8M16 17H8M10 9H8"></path>
            </svg>

            <div ><h5  className="text-xl text-gray-600 text-center">Devis Générés</h5>
                <div  className="mt-2 flex justify-center gap-4">
                    <h3 className="text-3xl font-bold text-gray-700">32.043</h3>
                    <div  className="flex items-end gap-1 text-green-500">
                        <svg viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="w-3">
                            <path  d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor"></path>
                        </svg>
                        <span>2%</span></div>
                </div>
            </div>
        </div>
    </div>
}
export default RightContent;
