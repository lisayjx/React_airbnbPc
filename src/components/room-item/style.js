import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${props=>props.itemWidth};      //动态的
  padding: 8px;
  box-sizing: border-box;

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
    } 

  }  

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props=>props.verifyColor};
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
    color: ${props=>props.theme.color.textColor};
  
    .ant-rate-star {
     /* background-color: red; */
     margin-right: 2px;
 
    }
    
    .count {
      margin: 0 2px 0 4px;
      
    }
    .fd{
      
    }
  }
 
`