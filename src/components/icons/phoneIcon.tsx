import { SVGProps } from "react"

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={46}
    fill='none'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M25.938 1.125H4.063a2.734 2.734 0 0 0-2.735 2.734v38.282a2.734 2.734 0 0 0 2.734 2.734h21.875a2.734 2.734 0 0 0 2.735-2.734V3.859a2.734 2.734 0 0 0-2.735-2.734Z'
    />
  </svg>
)
export default PhoneIcon
