import styled from "styled-components";



export const SearchTabsWrapper=styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
color:${props=>props.theme.isAlpha ? '#fff' :'#000'};
.title{
 font-weight: 700;
    cursor: pointer;
    margin: 10px 16px ;
    &:hover{
        border-bottom: 2px solid #000;
    }
}
`