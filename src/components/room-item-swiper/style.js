import styled from "styled-components";

export const RoomItemSwiperWrapper = styled.div`
  width: ${props => props.itemWidth};      //动态的
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;

   .inner{
    width: 100%;
   }

    .cover {
    position: relative;
    box-sizing: border-box;  
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden; 
  

     img {
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     object-fit: cover; //保持原有宽高比 覆盖整个盒子
    } 

  }  

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    /* 省略 */
    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  } 

  .bottom {
    font-size: 12px;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: ${props => props.theme.color.textColor};
  
    .ant-rate-star {
     /* background-color: red; */
     margin-right: 2px;
 
    }
    
    .count {
      margin: 0 2px 0 4px;
      
    }
 
  }
 

 /* 轮播图 */
 .swiper{
  position: relative;
 
    &:hover{
     .control{
       display: flex;
     }
   }

  .control {
    
    position: absolute;
    color: #fff;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;

    height: 100%;
    width: 60px;
    background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
  }
  .leftBtn{
    left: 0;
  }
  .rightBtn{
    right: 0;
    background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
  }

  //指示器
  .indicator {
      position: absolute;
      z-index: 9;
      width: 30%;
      left: 0;
      right: 0;
      bottom: 10px;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
  
       

        .dot {
          width: 5px;
          height:5px;
          background-color: #fff;
          border-radius: 50%;
          

          &.active {
            width: 9px;
          height: 9px;
           background-color: #000;
          }

        }
      }
    }
 }
`