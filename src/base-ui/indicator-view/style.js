import styled from "styled-components";

export const IndicatorWrapper = styled.div`

/* 指示器里的东西 不能换行 不能压缩 超出部分隐藏*/

  
    overflow: hidden;
   
    
.i-content{
    position: relative;

    display: flex;
   
    > * {//指示器里面的直接子元素 不管什么类型
    flex-shrink: 0;
    flex-wrap: nowrap;
 }

}




 
`