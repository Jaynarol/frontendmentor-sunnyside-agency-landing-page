import Image from 'next/image'
import { fontFraunces } from '@/styles/font'

const clients = [
  {
    image: '/images/image-emily.jpg',
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    position: 'Marketing Director',
  },
  {
    image: '/images/image-thomas.jpg',
    text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    name: 'Thomas S.',
    position: 'Chief Operating Officer',
  },
  {
    image: '/images/image-jennie.jpg',
    text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    position: 'Business Owner',
  },
]

const Clients = () => (
  <section className="py-12 text-center">
    <h2 className={`${fontFraunces.className} py-5 text-lg uppercase tracking-widest text-grayish`}>Client testimonials</h2>
    {
      clients.map(({ image, text, name, position }) => (
        <div key={name}>
          <div className="flex flex-col items-center space-y-10 px-5 py-10">
            <Image className="rounded-full" width={74} height={74} src={image} alt="emily photo" />
            <p className="text-lg text-dark-grayish">
              {text}
            </p>
            <div>
              <p className={`${fontFraunces.className} text-lg font-black`}>{name}</p>
              <small className="font-normal text-grayish">{position}</small>
            </div>
          </div>
        </div>
      ))
    }

  </section>
)

export default Clients
