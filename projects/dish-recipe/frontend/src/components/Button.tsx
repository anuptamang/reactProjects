import { Link } from "react-router-dom"

const buttonClasses = 'inline-flex items-center justify-center w-32 p-2 h-14 bg-red-200 dark:text-white dark:bg-gray-600 hover:opacity-60 text-black rounded text-center mb-2'

const Button = (props:any) => {
  return (
    <>
    {
      props.variant === 'Link' ? 
        <Link to={props.to} className={`${buttonClasses} ${props.width === 'full' && 'w-full'} ${props.size === 'lg' && 'text-lg w-40'} ${props.disabled && 'pointer-events-none opacity-50'}`}>
        {props.children}
      </Link>
       :
        (props.variant === 'submit' ? <button type="submit" className={`${buttonClasses} ${props.width === 'full' && 'w-full'} ${props.size === 'lg' && 'text-lg w-40'} ${props.disabled && 'pointer-events-none opacity-50'}`}>
          {props.children}
        </button> : <button className={`${buttonClasses} ${props.width === 'full' && 'w-full'} ${props.size === 'lg' && 'text-lg w-40'} ${props.disabled && 'pointer-events-none opacity-50'}`} onClick={props.onClick ? props.onClick : {}}>
          {props.children}
        </button>)
    }
    </>
  )
}

export default Button
