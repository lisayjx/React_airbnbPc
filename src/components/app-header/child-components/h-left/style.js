import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
flex:1;
display: flex;
align-items: center;
/* color: var(--primary-color); */
color:${props=>props.theme.color.primaryColor};
.logo{
    cursor: pointer;
}
 
`