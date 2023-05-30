"use client"
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar"
import { useCallback, useState } from "react"

const Usermenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) = !value)
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div 
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-fuull hover:bg-neutral-100 transition cursor-pointer"
          >
          Airbnb your home
        </div>
        <div 
          onClick={toggleOpen}
          className="p-4 md:py-1 px-2 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="rounded-xl absolute shadow-md w[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          
        </div>
      )}
    </div>
  )
}

export default Usermenu