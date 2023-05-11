import styled, { keyframes } from 'styled-components';
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
    height: 18rem;
    border-radius: 0.625rem;
    background-color: #f0f0f0;
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: ${shimmer} 1.5s infinite;
    margin: auto;
    margin-bottom: 2.1875rem;
    padding-bottom: 0.9375rem;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 20rem;
        height: 25.875rem;
        padding-bottom: 1.875rem;
    }
`;

export const CatalogViewContainer = styled.div`
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween30}; 
    text-align: center;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        margin-top: ${theme.layout.spaceBetween90};
    }
    .services-section__header {
        margin-bottom: 2.1875rem;
        .subtitle {
            font-family: ${theme.typography.tertiaryFontFamily};
            font-size: 1.25rem;
            color: ${theme.colors.secondary};
            margin-bottom: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.875rem;
                margin-bottom: 1.875rem;
            }
        }
        h2 {
            font-family: ${theme.typography.secondaryFontFamily};
            font-size: 1.75rem;
            margin-top: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-top: 1.875rem;
                font-size: 2.5rem;
            }
        }
        .category-buttons {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .cta-button {
                background-color: ${theme.colors.white};
                border-radius: 10px;
                box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
                color: ${theme.colors.titleH2};
                margin-right: 0.625rem;
                &.active {
                    background-color: ${theme.colors.white};
                    color: ${theme.colors.titleH2};
                }
            }
        }
    }
    .services {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .service {
            width: 14.375rem;
            border-radius: 0.625rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            background-color: ${theme.colors.white};
            padding: 0.9375rem;
            margin: auto;
            margin-bottom: 2.1875rem;
            position: relative;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 16rem;
                padding: 1.875rem 1.5625rem;
            }
            a {
                text-decoration: none;
            }
            &__content {
                text-align: left;
                position: relative;
                z-index: 2;
                margin-bottom: 0.9375rem;
                img {
                    width: 100%;
                    border-radius: 0.625rem 0.625rem 0 0;
                    margin-bottom: 0.9375rem;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        margin-bottom: 1.875rem;
                    }
                }
                .part-one {
                    display: flex;
                    justify-content: space-between;
                    p {
                        font-size: 1rem;
                        color: ${theme.colors.paragraph};
                    }
                    .star-icons {
                        display: flex;
                        span {
                            font-size: 1rem;
                            color: ${theme.colors.secondary};
                            margin: 0 0.125rem;
                        }
                    }

                }
                p {
                    font-size: 1.125rem;
                    text-align: left;
                    color: ${theme.colors.titleH2};
                    margin: 0 0 0.5rem;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        margin-bottom: 0.5rem;
                    }
                }
                span {
                    font-size: 0.9375rem;
                    text-align: left;
                    color: ${theme.colors.titleH4};
                }
                .initial-price {
                    text-decoration: line-through;
                    margin: 0 0.375rem;
                }
            }
        }
    }
    a {
        background-color: ${theme.colors.link};
        border-radius: 10px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
        color: ${theme.colors.white};
        margin-right: 0.625rem;
    }
`;