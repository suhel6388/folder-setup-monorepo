"use client"
import React from 'react'
import {Button} from "@repo/ui"
import {formatCurrency} from "@repo/utils"
function page() {
  return (
    <div>
      <Button
      onClick={()=> {alert(formatCurrency(12345))}}
      />

      
    </div>
  )
}

export default page