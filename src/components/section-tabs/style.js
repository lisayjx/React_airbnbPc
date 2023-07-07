import styled from "styled-components";

export const SectionTabsWrapper=styled.div`
  /* display: flex; */
 /* background-color: orange; */
.item{
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0; 
    padding: 6px 8px;
    margin-right: 16px;
    border-radius: 3px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    white-space: nowrap;

    ${props => props.theme.mixin.boxShadow};

    &:last-child {
      margin-right: 0;
    }
}
.item.active{
    color: #ddd;
    background-color: ${props=>props.theme.color.secondaryColor};
}

`