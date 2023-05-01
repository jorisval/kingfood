import styled, {keyframes} from 'styled-components';
import theme from '../utils/Variables';

const shimmer = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const SkeletonLoader = styled.div`
    width: 14.375rem;
    height: 23.6075rem;
    border-radius: 0.625rem;
    background-color: #f0f0f0;
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: ${shimmer} 1.5s infinite;
    padding-bottom: 0.9375rem;
    margin-bottom: 2.1875rem;
    @media (max-width: ${theme.breakpoints.down.small}) {
        margin: auto;
        margin-bottom: 2.1875rem;
    }
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 20rem;
        height: 28.37rem;
        padding-bottom: 1.875rem;
    }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const BlogContainer = styled.div`
    animation: ${fadeIn} 1s ease-in;
    .blog-title {
        padding: ${theme.layout.spaceBetween90} ${theme.layout.marginLeftRight};
        padding-bottom: ${theme.layout.spaceBetween30};
        h1 {
            color: ${theme.colors.titleH1};
            font-size: 1.75rem;
            font-weight: 800;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 2.375rem;
            }
        }
    }
    .articles {
        padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
        padding-bottom: ${theme.layout.spaceBetween30};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .article {
            width: 14.375rem;
            border-radius: 0.625rem;
            text-align: left;
            font-weight: 400;
            font-size: 1rem;
            background-color: ${theme.colors.f6};
            padding-bottom: 0.9375rem;
            margin-bottom: 2.1875rem;
            @media (max-width: ${theme.breakpoints.down.small}) {
                margin: auto;
                margin-bottom: 2.1875rem;
            }
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 20rem;
                font-size: 1.125rem;
                padding-bottom: 1.875rem;
            }
            a {
                text-decoration: none;
            }
            img {
                width: 100%;
                border-radius: 0.625rem 0.625rem 0 0;
                margin-bottom: 0.9375rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-bottom: 1.25rem;
                }
            }
            h3 {
                margin: 0 0.625rem;
                margin-bottom: 0.9375rem;
                font-size: 1.25rem;
                font-weight: 500;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.375rem;
                } 
            }
            p {
                color: ${theme.colors.paragraph};
                margin: 0 0.625rem;
                margin-bottom: 0.875rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-bottom: 1rem;
                    line-height: 24px;
                }
            }
            span {
                margin: 0 0.625rem;
                color: ${theme.colors.paragraph};
                font-size: 0.75rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 0.875rem;
                }
            }
        }
    }
    .buttons-article {
        margin-bottom: ${theme.layout.spaceBetween90};
        display: flex;
        justify-content: center;
        .previous {
            font-family: ${theme.typography.primaryFontFamily};
            font-size: 0.875rem;
            font-weight: 400;
            color: ${theme.colors.white};
            width: 5.625rem;
            padding: 0.375rem 1.75rem;
            background-color: ${theme.colors.button};
            border-radius: 2rem 0 0 2rem;
            border-style: none;
            display: inline-block;
            margin-bottom: ${theme.layout.spaceBetween30};
            cursor: pointer;
            margin-right: 0.5rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1rem;
                width: 6.875rem;
                padding: 0.55rem 2.18rem;
                margin-right: 0.625rem;
            }
        }
        .next {
            font-family: ${theme.typography.primaryFontFamily};
            font-size: 0.875rem;
            font-weight: 400;
            color: ${theme.colors.white};
            width: 5.625rem;
            padding: 0.375rem 1.75rem;
            background-color: ${theme.colors.button};
            border-radius: 0 2rem 2rem 0;
            border-style: none;
            display: inline-block;
            margin-bottom: ${theme.layout.spaceBetween30};
            cursor: pointer;
            margin-right: 0.625rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1rem;
                width: 6.875rem;
                padding: 0.55rem 2.18rem;
            }
        }
    }
    
`;