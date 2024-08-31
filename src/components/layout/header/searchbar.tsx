import { SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"

const SearchBar = () => (
  <div className='relative w-64'>
    <Input
      type='text'
      placeholder='What are you looking for?'
      className='bg-[#F5F5F5] text-sm'
    />
    <SearchIcon className='absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400' />
  </div>
)

export default SearchBar
