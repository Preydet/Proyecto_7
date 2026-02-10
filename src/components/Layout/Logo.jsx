import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <ComputerDesktopIcon className="w-7 h-7 text-white"/>
                <div className="text-white font-bold text-lg">
                    PC & Tech
                </div>                       
        </div>
    )
}

export default Logo;