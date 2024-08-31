type SectionHeadingProps = {
  title: string
}

const SectionHeading = (props: SectionHeadingProps) => {
  const { title } = props
  return (
    <div className='flex items-center'>
      <div className='mr-3 h-10 w-5 rounded bg-[#DB4444]' />
      <p className='font-medium tracking-wide text-[#DB4444]'>{title}</p>
    </div>
  )
}

export default SectionHeading
