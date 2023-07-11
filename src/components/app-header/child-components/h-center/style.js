import styled from "styled-components";


export const HeaderCenterWrapper = styled.div`
/* position: relative; */
  display: flex;
  justify-content: center;
  height: 48px;
 
.search-bar{
  position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    padding: 0 8px;
    box-sizing: border-box;

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }
    .icon{
      display: flex;
      justify-content: center;
      align-items:center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
    ${props=>props.theme.mixin.boxShadow}
}


.searchDetail{
  position: relative;
  width: 500px;
  display: flex;
  flex-direction: column;
 justify-content: center;

 transform-origin:50% 0 ;
 
 .infos{
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
 }
}
 /* 动画 */


  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }

  /* ------- */
  .detail-exit {/*离开前 */
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active { /*进入时候 */
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {/*进入前 */
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {/*进入中 */
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }
`