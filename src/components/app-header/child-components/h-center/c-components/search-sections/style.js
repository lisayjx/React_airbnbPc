import styled from "styled-components";

export const SearchSectionsWrapper=styled.div`

display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff;
padding: 10px 30px;
box-sizing: border-box;
border-radius: 30px;

.info{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
}
`