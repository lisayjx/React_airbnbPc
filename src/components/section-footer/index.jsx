import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'
 

const SectionFooter = memo((props) => {
    const navigate=useNavigate()
    //tabs 选择那项的文字
    const {tabName} =props

    let showMessage="显示全部"
    if(tabName){
        showMessage=`显示${tabName}房源更多`
    }
    // 点击 文字
    function clickInfoHandle(){
        navigate('/entire')
    }
  return (
    <SectionFooterWrapper color={tabName?'#00848A':'#000'}>

        <div className='info' onClick={clickInfoHandle}>
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