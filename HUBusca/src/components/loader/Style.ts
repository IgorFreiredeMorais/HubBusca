import styled from "styled-components";

export const Loader = styled.div`

    @keyframes rotate {
        from {
        -webkit-transform: rotate(0deg);
        }
        to {
        -webkit-transform: rotate(360deg);
        }
    }

    animation: rotate 2s linear infinite;
    position: absolute;
    left: 50%;
    margin-top: 40px;
    font-size: 50px;
    margin-left: -25px;
`;