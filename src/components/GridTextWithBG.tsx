import { FC } from 'react'
import { fontFraunces } from '@/styles/font'

type Props = {
  title: string
  desc: string
  className: string
}

const GridTextWithBG: FC<Props> = ({ title, desc, className }) => (
  <div className={`${className} flex h-[650px] flex-col items-center justify-end gap-6 bg-cover bg-center px-4 py-14 text-center md:h-[40vw]`}>
    <h3 className={`${fontFraunces.className} text-3xl font-black md:text-xl`}>
      {title}
    </h3>
    <p className="max-w-xs md:text-sm">
      {desc}
    </p>
  </div>
)

export default GridTextWithBG
