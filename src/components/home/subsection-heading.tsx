type SubSectionHeadingProps = {
  title: string
}

const SubSectionHeading = (props: SubSectionHeadingProps) => {
  const { title } = props
  return <h1 className='my-6 inline-block text-4xl font-bold'>{title}</h1>
}

export default SubSectionHeading
