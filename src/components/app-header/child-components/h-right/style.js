import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
 

.btns{
    display: flex;
    align-items: center;
    .btn{
        /* height: 18px;
        line-height: 18px; */
        padding:10px;
        border-radius: 22px;
        cursor: pointer;
        /* color: ${props=>props.theme.isAlpha ? '#fff':'#000'}; */
        &:hover{
            background-color: #f5f5f5;
        }
    }
}
.profile{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid #ccc;
    /* background-color: #fff; */
    cursor: pointer;

    //过渡
   /* transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    }   */
    ${props => props.theme.mixin.boxShadow}

    .count{
        position: absolute;
        top: 7px;
        right: 10px;
        height: 7px;
        width: 7px;
        background-color: ${props => props.theme.color.primaryColor};
        border-radius: 50%;
   
    }

    .panel{
        position: absolute;
        top: 60px;
        right: 0;
        width: 240px;
       box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
       box-sizing: border-box;
       .top{
        border-bottom: 1px solid #ddd;
       }
       .item{
        font-size: 12px;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        &:hover{
        background-color: #d5d5d5;
       }
       }
       
    }
}
`