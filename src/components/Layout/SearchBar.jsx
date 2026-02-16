import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
    return (
        <div className="relative">
            <input 
                type="text"
                placeholder="Buscar productos..."
                className="w-64 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
            />
            <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
            <MagnifyingGlassIcon className="w-5 h-5"/>
            </button>      

        </div>
    );
};

export default SearchBar;