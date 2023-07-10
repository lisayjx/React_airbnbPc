import styled from "styled-components";

export const BrowserWrapper = styled.div`
background-color: rgba(0,0,0,.8);
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 999;

display: flex;
flex-direction: column;
.top{
  height: 100px;
    box-sizing: border-box;
    display: flex;
   height: 100px;
    .close{
        color: #fff;
        height: 100%;
        height: 100%;
        width: 100px;
         box-sizing: border-box;
        cursor: pointer;
       display: flex;
       align-items: center;
       justify-content: flex-start;
       padding-left: 30px;
       transition: all 0.5s ease;
    &:hover{
        background-color: #fff;
        color: #000;
    }
    }
}

/* 中间 */
.slider{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    /* overflow: hidden; */

    /* 箭头 */
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
          transform: scale(1.1);
        }
      }
    }
    /* 中间图片 */
    .pictures {
      position: relative;
      height: 100%;
      overflow: hidden;
        width: 100%  ;
        max-width: 105vh ;   

        img {
          /* 绝对定位 居中，防止切换时候图片挤压 */
        position: absolute; 
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }

}
/* 底部 */
.preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${props=>props.showBottomPicList? '67px':'0px'};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }

























/* /------------------------------------------------- */
/* 动画样式 */
.pic-enter{
  transform: translateX(${props => props.isNext ? "100%" : "-100%"});
  opacity: 0;
}
.pic-enter-active{
  transform: translateX(0);
  opacity: 1;
  transition: all 200ms ease;
}
.pic-exit{
  opacity: 1;
}
.pic-exit-active{
  opacity: 0;
  transition: all 200ms ease;;
}
`