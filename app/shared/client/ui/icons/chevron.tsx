import type { SVGProps } from 'react'

export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#28AE86"
      fillOpacity={0.87}
      d="M22.098 5.166V2.578a.267.267 0 0 0-.432-.21L6.573 14.155a1.067 1.067 0 0 0 0 1.684l15.093 11.79a.267.267 0 0 0 .432-.211V24.83a.542.542 0 0 0-.204-.422L9.84 15l12.054-9.412a.542.542 0 0 0 .204-.422Z"
    />
  </svg>
)

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#28AE86"
      fillOpacity={0.87}
      d="M7.902 24.834v2.588c0 .224.258.348.432.21l15.093-11.788a1.065 1.065 0 0 0 0-1.684L8.334 2.37a.267.267 0 0 0-.432.212V5.17c0 .164.077.321.204.422L20.16 15 8.106 24.412a.541.541 0 0 0-.204.422Z"
    />
  </svg>
)
