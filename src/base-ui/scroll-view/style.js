import styled from "styled-components";

export const ScrollViewWrapper = styled.div`

position: relative;

.slot{
    overflow: hidden;
}
.content{
    display: flex;
    white-space: nowrap;
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
    z-index: 999;
    top: 5px;
}
.left{
    position: absolute;
    left: -10px;
}
.right{
    position: absolute;
    right:-10px;
}
`