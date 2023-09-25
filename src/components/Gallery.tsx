import Image from 'next/image'

const Gallery = () => (
  <section className="grid grid-cols-2">
    <Image width={376} height={376} src="/images/mobile/image-gallery-milkbottles.jpg" alt="milkbottles" />
    <Image width={376} height={376} src="/images/mobile/image-gallery-orange.jpg" alt="orange" />
    <Image width={376} height={376} src="/images/mobile/image-gallery-cone.jpg" alt="cone" />
    <Image width={376} height={376} src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes" />
  </section>
)

export default Gallery
