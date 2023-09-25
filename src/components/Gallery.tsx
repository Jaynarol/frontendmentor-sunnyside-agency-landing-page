import Image from 'next/image'

const Gallery = () => (
  <>
    <section className="grid grid-cols-2 md:hidden">
      <Image width={376} height={376} src="/images/mobile/image-gallery-milkbottles.jpg" alt="milkbottles" />
      <Image width={376} height={376} src="/images/mobile/image-gallery-orange.jpg" alt="orange" />
      <Image width={376} height={376} src="/images/mobile/image-gallery-cone.jpg" alt="cone" />
      <Image width={376} height={376} src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes" />
    </section>
    <section className="hidden grid-cols-4 md:grid [&_img]:w-full [&_img]:object-cover">
      <Image width={376} height={376} src="/images/desktop/image-gallery-milkbottles.jpg" alt="milkbottles" />
      <Image width={376} height={376} src="/images/desktop/image-gallery-orange.jpg" alt="orange" />
      <Image width={376} height={376} src="/images/desktop/image-gallery-cone.jpg" alt="cone" />
      <Image width={376} height={376} src="/images/desktop/image-gallery-sugarcubes.jpg" alt="sugar cubes" />
    </section>
  </>
)

export default Gallery
