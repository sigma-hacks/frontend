import { Link } from '@remix-run/react'
import useEmblaCarousel from 'embla-carousel-react'
import { PropsWithChildren } from 'react'
import { ChevronLeft, ChevronRight } from '~/shared/client/ui/icons/chevron'

export const PartnersCarousel = ({ children }: PropsWithChildren) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 'auto',
  })

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">{children}</div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 -translate-y-1/2 -left-4 -translate-x-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 -translate-y-1/2 -right-4 translate-x-full"
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export type PartnerSlideProps = {
  logo: string
  name: string
  servicesCount: number
  link: string
}

export const PartnerSlide = ({
  logo,
  name,
  servicesCount,
  link,
}: PartnerSlideProps) => {
  return (
    <div className="flex-[0_0_150px] min-w-0 bg-white shadow-sm rounded-2xl overflow-hidden mr-5">
      <img src={logo} alt={name} />
      <div className="p-2">
        <p className="text-center text-muted-main">{servicesCount} услуг</p>
        <Link
          to={link}
          className="block text-center text-primary-main underline"
        >
          Подробнее
        </Link>
      </div>
    </div>
  )
}
