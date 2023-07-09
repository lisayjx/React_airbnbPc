
import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'





const EntireFilter = memo((props) => {
  const [selectorItems, setSelectorItems] = useState([])

  function clickItem(name) {
    const newSelectorItems = [...selectorItems]  //装着你所点击的item 的数组

    if (newSelectorItems.includes(name)) {  //移除
      const itemIndex = newSelectorItems.findIndex(filterItem=>filterItem===name)
      newSelectorItems.splice(itemIndex, 1)
    } else {//新增
      newSelectorItems.push(name)
    }

    setSelectorItems(newSelectorItems)
  }

  return (
    <EntireFilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return(
              <div 
              className={classNames('item',{active:selectorItems.includes(item)})} 
              key={index} 
              onClick={e => clickItem(item)}>
                {item}
              </div>
            )
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})



export default EntireFilter