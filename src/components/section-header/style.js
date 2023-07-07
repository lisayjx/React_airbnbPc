import styled from "styled-components";

export const SectionWrapper =styled.div`
color: #222;
position: relative;
margin-top: 20px;
.title{
    font-style: 22px;
    font-weight: 700;
    margin-bottom: 16px;
}
.subTitle{
    font-size: 16px;
    margin-bottom: 20px;
}
.more{
    position: absolute;
    top: 25px;
    left: 180px;
    color: gray;
    opacity: 0;
    transition: all 0.8s ease;
}

&:hover .more{
 opacity: 1;
}
`