import type { SVGProps } from 'react'

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M32 16c0-8.837-7.163-16-16-16S0 7.163 0 16s7.163 16 16 16 16-7.163 16-16Z"
      />
      <path
        stroke="#0070B3"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m11 16.031 3.257 3.263a1 1 0 0 0 1.413.002L22 13"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)

export const CheckWithoutCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#4687AE"
      d="M15.143 2.25h-1.248a.569.569 0 0 0-.449.218l-7.362 9.327-3.53-4.474a.571.571 0 0 0-.449-.217H.857a.142.142 0 0 0-.112.23l4.89 6.196c.23.29.668.29.899 0L15.255 2.48a.141.141 0 0 0-.112-.229Z"
    />
  </svg>
)
