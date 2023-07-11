import styled from "styled-components";


export const HeaderWrapper = styled.div`
 
   
 
   &.fixed{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
    
   }
 
 .content{
  position: relative;
    z-index: 999;
    transition: all 250ms ease;
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha && props.isSearch ? "rgba(238,238,238,0)": "rgba(238,238,238,1)"};
    background-color: ${props => props.theme.isAlpha  && props.isSearch ? "rgba(255,255,255,0)": "rgba(255,255,255,1)"}; 
 
  .top{
   display: flex;
   align-items: center;
   height: 80px;
 
  }

   .block-area{
   height: ${props => props.isSearch ? '100px' : '0px'};
   transition: height 200ms ease;
 }
 }
 .cover{
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 9;
   background-color: rgba(0,0,0,.2);
 }

`