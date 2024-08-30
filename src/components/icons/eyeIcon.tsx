import { SVGProps } from "react"

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={22}
    height={16}
    fill='none'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M20.257 6.962c.474.62.474 1.457 0 2.076C18.764 10.987 15.182 15 11 15c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C3.236 5.013 6.818 1 11 1c4.182 0 7.764 4.013 9.257 5.962v0Z'
    />
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M11 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
    />
  </svg>
)
export default EyeIcon
