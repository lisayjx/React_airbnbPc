import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
    //tabs 选择那项的文字
    const {tabName} =props

    let showMessage="显示全部"
    if(tabName){
        showMessage=`显示${tabName}房源更多`
    }
  return (
    <SectionFooterWrapper color={tabName?'#00848A':'#000'}>

        <div className='info'>
            <span>{showMessage}</span>
            <IconMoreArrow></IconMoreArrow>
        </div>

    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
    tabName:PropTypes.string
}

export default SectionFooter