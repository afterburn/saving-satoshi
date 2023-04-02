import Topbar from 'components/Topbar'
import Footer from 'components/Footer'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="bg-gradient-to-b from-[#00000060] via-[#00000020] to-transparent pb-28">
        <Topbar />
      </div>

      <Image
        src="/assets/images/404-image.png"
        alt="page not found"
        fill
        className="-z-10 object-cover"
      />
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <h1 className=" font-cbrush text-6xl text-white">Hmm...</h1>
      </div>
    </div>
  )
}
