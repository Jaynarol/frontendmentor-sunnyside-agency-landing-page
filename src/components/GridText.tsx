import Link from 'next/link'
import { FC } from 'react'
import { fontFraunces } from '@/styles/font'

type Props = {
  title: string;
  desc: string;
  classColor: string;
}

const GridText: FC<Props> = ({ title, desc, classColor }) => (
  <div className="space-y-6 px-5 py-14 text-center">
    <h3 className={`${fontFraunces.className} text-3xl font-black text-very-dark-desaturated`}>{title}</h3>
    <p className="text-dark-cyan">
      {desc}
    </p>
    <div>
      <Link href="./" className={`${fontFraunces.className} ${classColor} font-extrabold text-very-dark-desaturated underline decoration-8 underline-offset-0`}>
        LEARN MORE
      </Link>
    </div>
  </div>
)

export default GridText
