import React from "react"
import { BoxItem, BoxItemTitle, BoxItemFooter, BoxItemAmount } from "./index.styled"

const BoxItemComponent = ({ title, amount, suffix, footer }) => {
  return (
    <BoxItem>
      <BoxItemTitle>{title}</BoxItemTitle>
      <BoxItemAmount>
        {amount}
        { suffix && suffix!=='' && (<span>{suffix}</span>) }
      </BoxItemAmount>
      <BoxItemFooter>{footer}</BoxItemFooter>
    </BoxItem>
  )
}

export default BoxItemComponent