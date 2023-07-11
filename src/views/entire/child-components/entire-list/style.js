import styled from "styled-components";

export const EntireListWrapper = styled.div`
  padding: 20px; 
  position: relative;
 margin-top: 20px;
.room-list{
 
    display: flex;
    flex-wrap: wrap;
}



    /* 蒙版 */
    > .list-cover{
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(255,255,255,0.5);
/* background-color: pink; */
}

`