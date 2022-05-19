import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <>
      <div className="logo text-2xl font-extrabold"><Link to="/" className="text-black dark:text-white block p-2 text-center md:text-left">DishRecipe</Link></div>
    </>
  )
}

export default Logo
