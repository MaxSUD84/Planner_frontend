import { Loader as LoaderIcon } from 'lucide-react'

const Loader = () => {
    return (
    <div className="flex items-center justify-center">
        <LoaderIcon className="w-5 h-5 animate-spin text-white" />
    </div>
  )
}
  export default Loader