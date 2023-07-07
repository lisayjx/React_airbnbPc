import styled from "styled-components";

export const SectionFooterWrapper=styled.div`
display: flex;
cursor: pointer;
font-weight: 700;
margin-top: 10px;

&:hover{
    text-decoration: underline;
}
.info{
    color: ${props=>props.color};
}
`