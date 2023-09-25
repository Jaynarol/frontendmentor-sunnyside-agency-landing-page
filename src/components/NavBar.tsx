import Image from 'next/image'

const NavBar = () => (
  <div className="flex justify-between px-5 pt-7">
    <Image width={124} height={24} src="/images/logo.svg" alt="sunnyside logo" />
    <nav>
      <Image width={24} height={18} src="/images/icon-hamburger.svg" alt="hamburger menu" />
    </nav>
  </div>
)

export default NavBar
