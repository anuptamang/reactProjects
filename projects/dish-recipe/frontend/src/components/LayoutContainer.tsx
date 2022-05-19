const LayoutContainer = (props:any) => {
  return (
    <div className="container px-4 mx-auto py-12">
      {props.children}
    </div>
  )
}

export default LayoutContainer
