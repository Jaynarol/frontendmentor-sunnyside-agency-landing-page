import { FC } from 'react'
import { fontFraunces } from '@/styles/font'

type Props = {
  title: string
  desc: string
  className: string
}

const GridTextWithBG: FC<Props> = ({ title, desc, className }) => (
  <div className={`${className} flex min-h-[650px] flex-col justify-end space-y-8 bg-cover px-4 py-14 text-center `}>
    <h3 className={`${fontFraunces.className} text-3xl font-black `}>
      {title}
    </h3>
    <p>
      {desc}
    </p>
  </div>
)

export default GridTextWithBG
