"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return (
    <div  className="max-w-[2520px] xl:px-2 md:px-10  sm:px-2">
      {children}
    </div>
  )
}

export default Container