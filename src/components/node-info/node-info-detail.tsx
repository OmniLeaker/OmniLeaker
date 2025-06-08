import React from 'react'

export interface NodeInfoDetailProps {
  label: string
  value: string
}
export const NodeInfoDetail_z: React.FC<NodeInfoDetailProps> = ({ label, value }) => {
  return (
    <p>
      <span className='aqua'>{label}: </span>
      <span style={{ overflowWrap: 'break-word' }}>{value}</span>
    </p>
  )
}
