import styled, { keyframes } from 'styled-components';
import theme from '../utils/Variables';
import HeroBackground from "../../assets/images/hero-background-image.png";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
animation: ${fadeIn} 1s ease-in;
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url(${HeroBackground}) center center / cover;
    
    margin: 0 -0.5rem;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 -8px;
    }
    &__text {  
        padding: 0.5rem;
        z-index: 2;
        width: 80%;
        margin: auto;
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            margin: 0 0 0 ${theme.layout.marginLeftRight};
            width: 40%;
            max-width: 33rem;
            text-align: unset;
        }
        h1 {
            font-family: ${theme.typography.secondaryFontFamily};
            color: ${theme.colors.white};
            font-size: 2rem;
            line-height: 2rem;
            margin-bottom: ${theme.layout.spaceBetween10};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 3.125rem;
                line-height: 3.2rem;
                text-align: left;
            }
        }
        .subtitle {
            color: ${theme.colors.white};
            font-size: 1rem;
            line-height: 1.625rem;
            font-weight: 700;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                text-align: left;
                margin-bottom: 0;
            }
            span {
                color: ${theme.colors.secondary};
            }
        }
    }
    &__image {
        margin: auto;
        margin-bottom: -4px;
        max-width: 90%;
        @media (min-width: ${theme.breakpoints.up.medium}) {

            max-width: 50%;
            margin: none;
        }
        img {
            width: 100%;
        }
    }

}
.benefits-one {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row-reverse;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 35%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 60%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
        }
        .four-benefits {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            div {
                width: 48%;
                margin-top: 1rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 40%;
                }
                span {
                    font-size: 1.5rem;
                }
                p {
                    margin-top: 0;
                }
                h4 {
                    font-weight: 400;
                    margin: 0.5rem 0;
                }
            }
        }
    }
}
.benefits-two {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 60%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 35%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
        }
        .four-benefits {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            div {
                display: flex;
                width: 48%;
                margin: 1.25rem 0;
                span {
                    font-size: 1rem;
                    margin-top: 0.25rem;
                }
                p {
                    margin: 0;
                    margin-left: 0.5rem;
                }
            }
        }
    }
}
.blog {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    &__posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__post {
        display: flex;
        width: 80%;
        min-width: 18.75rem;
        margin: 0 1rem ${theme.layout.spaceBetween30} 0;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 30%;
        }
        .image {
            width: 100%;
            min-width: 6.25rem;
            img {
                width: 100%;
            }
        }
        h4 {
            font-weight: 400;
            margin: 0;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.5rem;
            margin: 0.5rem 0;
        }
        a {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            text-decoration: none;
            :hover {
                color: ${theme.colors.secondary};
            }
        }
    }
}
`;