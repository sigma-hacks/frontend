import type { SVGProps } from 'react'

export const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#0070B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.333 1.667H6L7.333 5 5.667 6A7.334 7.334 0 0 0 9 9.333l1-1.666L13.333 9v2.667A1.333 1.333 0 0 1 12 13 10.667 10.667 0 0 1 2 3a1.333 1.333 0 0 1 1.333-1.333Z"
    />
  </svg>
)

export const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={13}
    fill="none"
    {...props}
  >
    <g
      stroke="#0070B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M13.787 1.011H1.213V11.99h12.574V1.01Z" />
      <path d="M13.787 1.697 7.5 7.187l-6.287-5.49" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h15v13H0z" />
      </clipPath>
    </defs>
  </svg>
)
