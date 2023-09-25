import Image from 'next/image'
import GridText from './GridText'
import GridTextWithBG from './GridTextWithBG'

const Features = () => (
  <section className="grid grid-cols-1">
    <Image
      width={720}
      height={600}
      src="/images/desktop/image-transform.jpg"
      alt="transform"
    />
    <GridText
      title="Transform your brand"
      desc="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      classColor="decoration-highlight-yellow  hover:decoration-highlight-yellow-focus"
    />
    <Image
      width={750}
      height={624}
      src="/images//desktop/image-stand-out.jpg"
      alt="stand out"
    />
    <GridText
      title="Stand out to the right audience"
      desc=" Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
      classColor="decoration-highlight-red  hover:decoration-highlight-red-focus"
    />
    <GridTextWithBG
      title="Graphic design"
      desc="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      className="bg-[url('/images/mobile/image-graphic-design.jpg')] text-dark-desaturated"
    />
    <GridTextWithBG
      title="Photography"
      desc="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      className="bg-[url('/images/mobile/image-photography.jpg')] text-dark-blue"
    />
  </section>
)

export default Features