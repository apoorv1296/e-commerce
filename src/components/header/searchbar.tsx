import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

const SearchBar = ()=>{


    return (
        // <Input
        // className="bg-[#F5F5F5] px-5 rounded text-xs"
        // placeholder="What are you looking for?"/>

        <div className='relative w-64'>
      <Input
        type='text'
        placeholder='What are you looking for?'
        className='bg-[#F5F5F5] text-sm text-red-500'
      />
      <SearchIcon className='absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400' />
    </div>
    )
  }
  
  export default SearchBar