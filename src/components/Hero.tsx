import Image from 'next/image'
import { fontFraunces } from '@/styles/font'

const Hero = () => (
  <div className="flex h-full flex-col items-center justify-center gap-14 pb-28">
    <h1 className={`${fontFraunces.className} text-center text-4xl font-black tracking-widest `}>WE ARE CREATIVES</h1>
    <Image width={36} height={114} src="/images/icon-arrow-down.svg" alt="arrow down" />
  </div>
)

export default Hero
