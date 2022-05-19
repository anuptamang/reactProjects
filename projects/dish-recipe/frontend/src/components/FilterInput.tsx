import React, { useState } from 'react'

interface FilterInputProps {
  ingType: string;
  onFilter: (value:string, add:boolean) => void
}

const FilterInput:React.FC<FilterInputProps> = ({ingType, onFilter}) => {
  const [checkboxValue, setCheckboxValue] = useState<string>('')

  const handleInputCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
    onFilter(e.target.value, checkboxValue !== e.target.value)
    setCheckboxValue(checkboxValue=> checkboxValue ? '' : e.target.value)
  }

  return (
    <>
     {
       ingType.length > 0 &&
        <li className="mb-2 pr-3 capitalize">
          <label htmlFor={`filterRecipe-${ingType}`}>
            <input onChange={handleInputCheck} type="checkbox" value={ingType} checked={checkboxValue === ingType} name="ingType" id={`filterRecipe-${ingType}`} /> {ingType}
          </label>
        </li>
     }
    </>
  )
}

export default FilterInput
