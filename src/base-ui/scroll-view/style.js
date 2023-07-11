import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
position: relative;
padding: 8px;

.slot{
    overflow: hidden;
  
}
.content{
    display: flex;
    white-space: nowrap;
    transition: transform 0.5s ease;
}
.control{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #ccc;
    border-radius: 50%;
    background-color: #fff;
    height: 22px;
    width: 22px;
    cursor: pointer;
    z-index: 9;
   
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
}
.left{
    position: absolute;
    top: 50%;
    left:  -20px;
    transform: translateY(-50%);
}
.right{
    position: absolute;
    top:50%;
    right: -20px;
    transform: translateY(-50%);
}
`