import React from "react";
import styled from "styled-components";

const StyledSideMenu = styled.div`
    position: fixed;
    height: 100vh;
    width: 80%;
    max-width: 300px;
    min-width: 250px;
    background-color: ${props => props.background ? props.background : "#000000"};
    box-shadow: 0 0 5px 0 #000000;
    color: ${props => props.color ? props.color : "#ffffff"};
    font-size: 0;
`

const StyledTitle = styled.div`
    margin-bottom: 5px;
    width: calc(100% - 40px);
    height: 60px;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 20px;
    line-height: 60px;
    font-size: 24px;
    overflow-x: auto;
`

const StyledMenuItemList = styled.div`
    display: block;
    width: 100%;
    height: calc(100% - 210px);
    padding-bottom: 150px;
    overflow-y: auto;
`

const StyledMenuItem = styled.a`
    display: block;
    background: rgba(0, 0, 0, 0);
    width: calc(100% - 20px);
    height: 50px;
    padding-left: 20px;
    line-height: 50px;
    font-size: 20px;
    text-decoration: none;
    color: inherit;
    transition: background 400ms;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`

const StyledSeparator = styled.div`
    width: 100%;
    height: ${props => props.size};
`

export default class SideMenu extends React.Component {
    render() {
        return (
            <StyledSideMenu background={this.props.background} color={this.props.color}>
                <StyledTitle>{this.props.title}</StyledTitle>
                <StyledMenuItemList>
                    {
                        this.props.menu
                            .map((menuItem, index) => {
                                if (menuItem.separator) {
                                    return (
                                        <StyledSeparator key={index} size={menuItem.size} />
                                    )
                                }
                                return (
                                    <StyledMenuItem key={index} href={menuItem.href}>
                                        {menuItem.text}
                                    </StyledMenuItem>
                                )
                            })
                    }
                </StyledMenuItemList>
            </StyledSideMenu>
        )
    }
} 