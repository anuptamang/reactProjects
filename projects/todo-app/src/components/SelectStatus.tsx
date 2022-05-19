import { Select } from '@chakra-ui/select'
import React from 'react'
import statusOption from '../constants/statusConstant'

interface SelectStatusProps {
  status: string
  selectHandleChange: (e:any) => void
}

const SelectStatus = (props:SelectStatusProps) => {
  return (
    <>
      <Select placeholder="Select option" onChange={(e:React.ChangeEvent<HTMLSelectElement>) => props.selectHandleChange(e.target.value)} defaultValue={props.status.toLowerCase()}>
        {
          statusOption.map(status => (
            <option key={status} value={status}>{status.toUpperCase()}</option>
          ))
        }
      </Select>
    </>
  )
}

export default SelectStatus
