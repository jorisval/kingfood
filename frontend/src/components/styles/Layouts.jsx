import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import theme from '../utils/Variables';

const SkeletonShimmer = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const ItemSkeletonLoader = styled.div`
    width: 9.375rem;
    height: 14rem;
    border-radius: 0.625rem;
    background-color: #f0f0f0;
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: ${SkeletonShimmer} 1.5s infinite;
    margin: auto;
    margin-bottom: 2.1875rem;
    padding-bottom: 0.9375rem;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 11.25rem;
        height: 15rem;
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

const LayoutsStyle = createGlobalStyle`
    body {
        font-familly: ${theme.typography.PrimaryFontFamily};
        background-color: ${theme.colors.backgroundColor3};
    }
    p {
        font-size: 1rem;
    }
    .header {
        animation: ${fadeIn} 1s ease-in;
        display: flex;
        position: relative;
        justify-content: space-between;
        padding: 0 5%;
        margin: -0.5rem;
        margin-bottom: 0;
        font-size: ${theme.typography.navFontSize};
        .menu-md {
                display: block;

            @media (min-width: ${theme.breakpoints.up.medium}) {
                display: none;
            }

            &__icon {
                width: ${theme.layout.menuTabWidth};
                height: 40px;
                position: absolute;
                z-index: 100;
                top: 0px;
                left: calc(4% + 15px);
                padding-top: 18px;
                cursor: pointer;
                transition: all 0.6s ease-in-out;

            div {
                height: 2px;
                background-color: ${theme.colors.primary};
                display: block;
                margin: 4px;
                transition: all 0.6s ease-in-out;
            }

            &.active {
                left: calc(100vw - ${theme.layout.menuTabWidth});
                transition: all 600ms ease-in-out;
                background-color: ${theme.colors.paragraph};
                position: fixed;

                #icon-bar-one {
                transform: translateY(4px) rotate(-135deg);
                transition: all 0.6s ease-in-out;
                background-color: ${theme.colors.secondary};
                }

                #icon-bar-two {
                opacity: 0;
                transition: 0.4s ease;
                }

                #icon-bar-three {
                transform: translateY(-8px) rotate(-45deg);
                transition: all 0.6s ease-in-out;
                background-color: ${theme.colors.secondary};
                }
            }
            }

            &__hide {
            width: calc(100vw - ${theme.layout.menuTabWidth});
            left: calc(${theme.layout.menuTabWidth} - 100vw);
            height: 100vh;
            position: absolute;
            z-index: 10;
            top: 0px;
            transition: all 0.6s ease-in-out;

            li {
                height: 50px;
                list-style-type: none;
                text-align: center;
                line-height: 50px;
                transition: all 0.5s ease;

                &:hover {
                background-color: ${theme.colors.secondary};
                transition: all 0.5s ease;
                }
            }

            a {
                font-size: 1rem;
                padding: 30px 25px;
                text-decoration: none;
                color: ${theme.colors.white};
                
            }

            &.show {
                left: 0px;
                background-color: ${theme.colors.paragraph};
                transition: all 0.6s ease-in-out;
                position: fixed;
            }
            }
        }

        &__logo {
            margin-left: 8%;
            margin-right: 0%;
            padding: 20px;
            padding-right: 5px;
            text-align: center;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                padding: 20px;
                padding-left: 0;
                margin-left: 0;
                margin-right: 10%;
            }
            @media (min-width: ${theme.breakpoints.up.large}) {
                margin-right: 30%;
            }
            img {
                width: 80%;
                @media (min-width: ${theme.breakpoints.up.large}) {
                    width: 100%;
                }
            }
        }

        .nav-lg {
            font-familly: ${theme.typography.PrimaryFontFamily};
            font-weight: 700;
            display: none;
            font-size: 0.875rem;
            width: 60%;
            margin-right: 5%;

            @media (min-width: ${theme.breakpoints.up.medium}) {
                display: block;
            }
            @media (min-width: ${theme.breakpoints.up.xlarge}) {
                font-size: 1rem;
                width: 50%;
            }

            ul {
            display: flex;
            list-style-type: none;
            margin: 0px;
            padding: 0px;

            .active {
                a {
                    color: ${theme.colors.secondary};
                }
            }
            }

            li {
            padding: 20px 3%;
            }

            a {
                text-decoration: none;
                color: ${theme.colors.primary};
                padding: 0 0 0.25rem 0;

                &:hover {
                    color: ${theme.colors.secondary};
                }
            }
        }
        &__butons {
            display: flex;
            padding: 15px 0;
        }
        &__cart, &__search, &__favorite {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${theme.colors.white};
            width: 25px;
            height: 25px;
            border: 1px solid ${theme.colors.white};
            border-radius: 50%;
            box-shadow: 0 4px 4px rgba(0,0,0,0.1);
            margin-right: 0.5rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 30px;
                height: 30px;;
            }
        }

        .bi-cart3, .bi-search, .bi-heart {
            font-size: 1rem;
            color: ${theme.colors.primary};
            cursor: pointer;

            @media (min-width: ${theme.breakpoints.up.xlarge}) {
            font-size: 1.125rem;
            }
        }

        .cart {
            position: absolute;
            z-index: 100;

            .background {
                width: 100%;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.8);
                position: fixed;
                top: 0;
                right: 0;
                display: none;
            }

            &-content {
                box-sizing: border-box;
                width: 35%;
                min-width: 280px;
                height: 100vh;
                padding: 0.5rem 1rem;
                background-color: ${theme.colors.white};
                color: ${theme.colors.paragraph};
                position: fixed;
                top: 0;
                left: 100%;
                transition: left 400ms ease;

                &__header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 0.375rem;
                    border-bottom: 1px ${theme.colors.c4} solid;
                    font-size: 0.875rem;

                    @media (min-width: ${theme.breakpoints.up.large}) {
                        font-size: 1rem;
                    }
                }

                &-product {
                    font-size: 0.875rem;
                    display: flex;
                    margin-top: 0.9375rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px ${theme.colors.c4} solid;
                    width: 100%;

                    @media (min-width: ${theme.breakpoints.up.large}) {
                        font-size: 1rem;
                    }

                    &__part1 {
                        width: 30%;
                        margin-right: 0.625rem;

                        img {
                            width: 100%;
                            max-width: 6.25rem;
                            border-radius: 0.5rem;
                        }
                    }

                    &__part2 {
                        width: 70%;
                        margin-right: 0.625rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        &-title {
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 0.5rem;
                        }

                        &-option {
                            margin-bottom: 0.5rem;
                        }

                        &-quantity {
                        display: flex;
                        justify-content: space-between;

                            .quantity {
                                color: ${theme.colors.paragraph};

                                button {
                                    font-size: 0.875rem;
                                    color: ${theme.colors.paragraph};
                                    padding: 0.25rem 0.5rem;
                                    border: 1px ${theme.colors.c4} solid;
                                    background-color: ${theme.colors.white};
                                    cursor: pointer;
                                }

                                input {
                                    font-size: 0.875rem;
                                    color: ${theme.colors.paragraph};
                                    padding-top: 0.25rem;
                                    padding-bottom: 0.25rem;
                                    text-align: center;
                                    width: 30px;
                                    border: 1px ${theme.colors.c4} solid;
                                    margin: 0 -6px;

                                    &::-webkit-inner-spin-button {
                                        display: none;
                                    }

                                    &::-webkit-outer-spin-button {
                                        display: none;
                                    }

                                    &:focus {
                                        outline: none;
                                    }
                                }
                            }

                            .price {
                                padding-top: 0.625rem;
                            }
                        }
                    }
                }

                &-subtotal {
                    font-size: 0.875rem;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 1.25rem;

                    @media (min-width: ${theme.breakpoints.up.large}) {
                        font-size: 1rem;
                    }
                }

                &-payment {
                    text-align: center;
                    margin-top: 1.875rem;
                }

                .price {
                    color: ${theme.colors.secondary};
                }

                .bi-x {
                    cursor: pointer;
                }

                &.show {
                    left: calc(100% - 280px);

                    @media all and (min-width: 800px) {
                        left: calc(100% - 35%);
                    }
                }
            }
        }
        .search {
            position: absolute;
            z-index: 100;

            .background {
                width: 100%;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.8);
                position: fixed;
                top: 0;
                right: 0;
                display: none;
            }

            &-content {
                box-sizing: border-box;
                width: 35%;
                min-width: 280px;
                height: 100vh;
                padding: 0.5rem 1rem;
                background-color: ${theme.colors.white};
                color: ${theme.colors.paragraph};
                position: fixed;
                top: 0;
                left: 100%;
                transition: left 400ms ease;

                .bi-x {
                    cursor: pointer;
                }

                &.show {
                    left: calc(100% - 280px);

                    @media all and (min-width: 800px) {
                        left: calc(100% - 35%);
                    }
                }

                &__header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 0.375rem;
                    border-bottom: 1px ${theme.colors.c4} solid;
                    font-size: 0.875rem;

                    @media (min-width: ${theme.breakpoints.up.large}) {
                        font-size: 1rem;
                    }
                }
                form {
                    display: flex;
                    width: 90%;
                    margin: auto;
                    margin-top: 0.9375rem;
                    margin-bottom: 0.9375rem;
                }
    
                input[type="search"] {
                    font-size: 0.875rem;
                    color: ${theme.colors.paragraph};
                    padding: 0.25rem 0.5rem;
                    border: 1px ${theme.colors.secondary} solid;
                    border-radius: 5px 0 0 5px;
                    width: 65%;
    
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        padding: 0.5rem 1rem;
                        font-size: 1rem;
                    }
                    &:focus {
                        outline: none;
                    }
                }
    
                button[type="submit"] {;
                    background-color: ${theme.colors.secondary};
                    padding: 0.25rem 0.5rem;
                    border: 1px ${theme.colors.secondary} solid;
                    border-radius: 0 5px 5px 0;
                    margin-left: -5px;
    
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        padding: 0.5rem 1rem;
                    }
                    span {
                        font-size: 0.875rem;
                        color: ${theme.colors.white};
                        @media (min-width: ${theme.breakpoints.up.medium}) {
                            font-size: 1rem;
                        }
                    }
                }
                &__products {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    overflow-y: auto;
                    max-height: 80vh;
                    justify-content: space-between;
                    .no-result {
                        margin: auto;
                    }
                    .service {
                        font-size: 0.75rem;
                        width: 9.375rem;
                        border-radius: 0.625rem;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        background-color: ${theme.colors.white};
                        padding: 0.9375rem;
                        margin: auto;
                        margin-bottom: 2.1875rem;
                        position: relative;
                        @media (min-width: ${theme.breakpoints.up.medium}) {
                            font-size: 0.875rem;
                            width: 11.25rem;
                            padding: 1.875rem 1.5625rem;
                        }
                        .add-favorite {
                            position absolute;
                            z-index: 13;
                            right: 0.625rem;
                            top: 0.625rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: ${theme.colors.white};
                            width: 15px;
                            height: 15px;
                            border: 1px solid ${theme.colors.white};
                            border-radius: 50%;
                            box-shadow: 0 4px 4px rgba(0,0,0,0.1);
                            margin-right: 0.5rem;
                            cursor: pointer;
                            @media (min-width: ${theme.breakpoints.up.medium}) {
                                width: 20px;
                                height: 20px;
                                right: 1rem;
                                top: 1rem;
                            }

                            .bi-heart {
                                font-size: 0.75rem;
                                color: ${theme.colors.primary};
                                @media (min-width: ${theme.breakpoints.up.xlarge}) {
                                font-size: 1rem;
                                }
                            }
                            .bi-heart-fill {
                                font-size: 1rem;
                                color: ${theme.colors.secondary};
                                @media (min-width: ${theme.breakpoints.up.xlarge}) {
                                font-size: 1.125rem;
                                }
                            }
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
                                    font-size: 0.875rem;
                                    color: ${theme.colors.paragraph};
                                }
                                .star-icons {
                                    display: flex;
                                    span {
                                        font-size: 0.75rem;
                                        color: ${theme.colors.secondary};
                                        margin: 0 0.125rem;
                                    }
                                }

                            }
                            p {
                                font-size: 0.875rem;
                                text-align: left;
                                color: ${theme.colors.titleH2};
                                margin: 0 0 0.5rem;
                                @media (min-width: ${theme.breakpoints.up.medium}) {
                                    margin-bottom: 0.5rem;
                                }
                            }
                            span {
                                font-size: 0.75rem;
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
            }
        }
        .favorite {
            position: absolute;
            z-index: 100;

            .background {
                width: 100%;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.8);
                position: fixed;
                top: 0;
                right: 0;
                display: none;
            }

            &-content {
                box-sizing: border-box;
                width: 35%;
                min-width: 280px;
                height: 100vh;
                padding: 0.5rem 1rem;
                background-color: ${theme.colors.white};
                color: ${theme.colors.paragraph};
                position: fixed;
                top: 0;
                left: 100%;
                transition: left 400ms ease;

                &__header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 0.375rem;
                    border-bottom: 1px ${theme.colors.c4} solid;
                    font-size: 0.875rem;

                    @media (min-width: ${theme.breakpoints.up.large}) {
                        font-size: 1rem;
                    }
                }
                &__products {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    overflow-y: auto;
                    max-height: 90vh;
                    justify-content: space-between;
                    .service {
                        font-size: 0.75rem;
                        width: 9.375rem;
                        border-radius: 0.625rem;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        background-color: ${theme.colors.white};
                        padding: 0.9375rem;
                        margin: auto;
                        margin-bottom: 2.1875rem;
                        position: relative;
                        @media (min-width: ${theme.breakpoints.up.medium}) {
                            font-size: 0.875rem;
                            width: 11.25rem;
                            padding: 1.875rem 1.5625rem;
                        }
                        .add-favorite {
                            position absolute;
                            z-index: 13;
                            right: 0.625rem;
                            top: 0.625rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            color: ${theme.colors.white};
                            width: 15px;
                            height: 15px;
                            border: 1px solid ${theme.colors.white};
                            border-radius: 50%;
                            box-shadow: 0 4px 4px rgba(0,0,0,0.1);
                            margin-right: 0.5rem;
                            cursor: pointer;
                            @media (min-width: ${theme.breakpoints.up.medium}) {
                                width: 20px;
                                height: 20px;
                                right: 1rem;
                                top: 1rem;
                            }

                            .bi-heart {
                                font-size: 0.75rem;
                                color: ${theme.colors.primary};
                                @media (min-width: ${theme.breakpoints.up.xlarge}) {
                                font-size: 1rem;
                                }
                            }
                            .bi-heart-fill {
                                font-size: 1rem;
                                color: ${theme.colors.secondary};
                                @media (min-width: ${theme.breakpoints.up.xlarge}) {
                                font-size: 1.125rem;
                                }
                            }
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
                                    font-size: 0.875rem;
                                    color: ${theme.colors.paragraph};
                                }
                                .star-icons {
                                    display: flex;
                                    span {
                                        font-size: 0.75rem;
                                        color: ${theme.colors.secondary};
                                        margin: 0 0.125rem;
                                    }
                                }

                            }
                            p {
                                font-size: 0.875rem;
                                text-align: left;
                                color: ${theme.colors.titleH2};
                                margin: 0 0 0.5rem;
                                @media (min-width: ${theme.breakpoints.up.medium}) {
                                    margin-bottom: 0.5rem;
                                }
                            }
                            span {
                                font-size: 0.75rem;
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
                .bi-x {
                    cursor: pointer;
                }

                &.show {
                    left: calc(100% - 280px);

                    @media all and (min-width: 800px) {
                        left: calc(100% - 35%);
                    }
                }
            }
        }
    }
    
    
    
    .footer {
        animation: ${fadeIn} 1s ease-in;
        padding: 0 ${theme.layout.marginLeftRight};
        padding-top: ${theme.layout.spaceBetween30};
        padding-bottom: 1.25rem;
        margin: 0 -0.5rem;
        margin-top: ${theme.layout.spaceBetween90};
        color: ${theme.colors.white};
        border-top: 1px #1E1D23 solid;
        background-color: #1E1D23;

        .newsletter {
            margin-bottom: ${theme.layout.spaceBetween10};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            h3 {
                font-family: ${theme.typography.secondaryFontFamily};
                color: ${theme.colors.white};
            }
            form {
                display: flex;
                width: 100%;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 40%;
                    height: fit-content;
                }
            }

            input[type="email"] {
                font-family: ${theme.typography.primaryFontFamily};
                font-size: 0.875rem;
                color: ${theme.colors.white};
                padding: 0.25rem 0.5rem;
                border: 1px ${theme.colors.secondary} solid;
                border-radius: 5px 0 0 5px;
                width: 65%;
                background-color: #1E1D23;

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                }
                &:focus {
                    outline: none;
                }
            }

            input[type="submit"] {
                font-family: ${theme.typography.primaryFontFamily};
                font-size: 0.875rem;
                color: ${theme.colors.white};
                background-color: ${theme.colors.secondary};
                padding: 0.25rem 0.5rem;
                border: 1px ${theme.colors.secondary} solid;
                border-radius: 0 5px 5px 0;
                margin-left: -5px;

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                }
            }
        }

        &__part-1 {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            font-size: 1rem;
            margin-bottom: ${theme.layout.spaceBetween60};

            @media (min-width: ${theme.breakpoints.up.medium}) {
                flex-direction: row;
                flex-wrap: wrap;
                margin-bottom: ${theme.layout.spaceBetween90};
            }

            & > div {
                padding: 1rem;
                width: 10rem;
            }

            h3 {
                font-size: 1rem;
                color: ${theme.colors.white};
                font-weight: 500;
                margin-bottom: 0.625rem;
            }
            p {
                font-size: 0.875rem;
                color: ${theme.colors.backgroundColor2};
                font-weight: 200;
                line-height: 18px;
            }

            ul {
                padding-left: 0;
            }

            li {
                list-style-type: none;
                margin: 0.25rem 0;
                i {
                    font-size: 0.875rem;
                    font-weight: 300;
                    font-style: normal;
                    color: ${theme.colors.white};
                }
            }

            a {
                text-decoration: none;
                font-size: 0.875rem;
                color: ${theme.colors.backgroundColor2};
                font-weight: 200;
                &:hover {
                    color: ${theme.colors.secondary};
                }
            }
            .more {
                width: 12.5rem;
            }
            .more-two {
                display: flex;
                align-items: center;
                .calendar-div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    margin-right: 5px;
                    padding: 1rem;
                    background-color: ${theme.colors.secondary};
                    .bi-calendar2 {
                        font-size: 1.5rem;
                    }
                }
                h4 {
                    font-size: 0.875rem;
                    margin: 0;
                    margin-bottom: 5px;
                }
                p {
                    margin: 0;
                }
            }
            .recent-blog {
                width: 12.5rem;
                &__post a {
                    display: flex;
                    align-items: flex-start;
                    text-decoration: none;
                    margin-bottom: 1rem;
                    .post-image {
                        width: 4.875rem;
                        height: 4.875rem;
                        margin-right: 5px;
                        img {
                            width: 100%;
                            border-radius: 5px;
                        }
                    }
                    p {
                        font-weight: 300;
                        color: ${theme.colors.white};
                        margin: 0;
                        margin-bottom: 5px;
                    }
                    span {
                        font-size: 0.625rem;
                        color: ${theme.colors.backgroundColor2};
                        font-weight: 200;
                    }
                }
            }
        }

        &__part-2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .footer {
                &-logo {
                    margin-bottom: 1rem;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        margin-bottom: 0;
                    }
                }
                &-copyright {
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        width: 60%;
                        text-align: left;
                    }
                    p {
                        font-size: 0.875rem;
                        color: ${theme.colors.backgroundColor2};
                        font-weight: 200;
                        line-height: 18px;
                        margin: 0;
                    } 
                }
            }
        }
    }
`;

function StyledLayouts() {
    return <LayoutsStyle />
}

const shimmer = keyframes`
    0% {
        background-position: -40rem 0;
    }
    100% {
        background-position: 40rem 0;
    }
`;

const skeletonBackground = css`
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 40rem 100%;
    animation: ${shimmer} 2s infinite;
`;

export const SkeletonImage = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 0.625rem;
    ${skeletonBackground}
`;

export const SkeletonText = styled.div`
    height: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 3px;
    ${skeletonBackground}
`;

export const SkeletonButton = styled.div`
    width: 100%;
    height: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 3px;
    ${skeletonBackground}
`;

export const SkeletonOption = styled.div`
    width: 100%;
    height: 1rem;
    margin-left: 0.625rem;
    margin-bottom: 0.375rem;
    border-radius: 3px;
    ${skeletonBackground}
`;

export const SkeletonQuantity = styled.div`
    display: flex;
    align-items: center;

    & > div {
        height: 1.5rem;
        border-radius: 3px;
        ${skeletonBackground}

        &:first-child {
            width: 2.5rem;
            margin-right: 0.625rem;
        }

        &:nth-child(2) {
            width: 1rem;
            margin-right: 0.625rem;
        }

        &:last-child {
            width: 2.5rem;
        }
    }
`;

  
export default StyledLayouts;