import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'
const SectionHeader = memo((props) => {

    const { title, subTitle } = props

    return (
        <SectionWrapper>
            <h2 className='title'>{title}</h2>
            {
                subTitle && (
                    <h2 className='subTitle'>{subTitle}</h2>
                )
            }
           {
            subTitle && <div className="more"> &gt; </div>
           }
            
        </SectionWrapper>
    )
})



//对别人传进来额数据进行验证 
SectionHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default SectionHeader