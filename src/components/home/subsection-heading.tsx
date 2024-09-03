import { cn } from "@/lib/utils"

type SubSectionHeadingProps = {
  title: string
  className?: string
}

const SubSectionHeading = (props: SubSectionHeadingProps) => {
  const { title, className } = props
  return (
    <p className={cn("my-6 inline-block text-4xl font-bold", className)}>
      {title}
    </p>
  )
}

export default SubSectionHeading
