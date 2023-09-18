import { SVGProps } from 'react'

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#0D4CD3"
        fillRule="evenodd"
        d="M10.333 5.667a4.667 4.667 0 1 1-9.333 0 4.667 4.667 0 0 1 9.333 0Zm-1.028 4.345a5.667 5.667 0 1 1 .707-.707l3.675 3.675a.5.5 0 0 1-.707.707l-3.675-3.675Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
)
