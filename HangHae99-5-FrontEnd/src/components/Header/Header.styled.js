import { Link } from "react-router-dom"
import styled from "styled-components"

export const MenuToggle = styled.div`
  display: block;
  top: 3rem;
  left: 3rem;
  position: sticky;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
`
export const Checkbox = styled.input`
  display: block;
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: -1.5rem;
  left: 1.5rem;
  cursor: pointer;
  opacity: 0;
  z-index: 5;
  -webkit-touch-callout: none;
  &:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  &:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  &:checked ~ span:nth-last-child(2) {
    opacity: 1;
    transform: rotate(-45deg) translate(0, -1px);
  }
  &:checked ~ ul {
    transform: none;
  }
`
export const Bar = styled.span`
  display: block;
  width: 2.15rem;
  height: .26rem;
  margin-bottom: 0.31rem;
  margin-left: 2.5rem;
  position: relative;
  background: black;
  border-radius: .85rem;
  z-index: 1;
  transform-origin: 0.26rem 0;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
  &:first-child { transform-origin: 0% 0%; }
  &:nth-last-child(2) { transform-origin: 0% 100%; }
`

export const Menu = styled.ul`
  position: absolute;
  width: 10rem;
  height: 50rem;
  margin: -6rem 0 0 -.5rem;
  padding: 50px;
  padding-top: 125px;
  background: #bd2424;
  list-style: none;
  overflow: scroll;
  -ms-overflow-style: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  &::-webkit-scrollbar {
    display: none;
  }
`

export const MenuItem = styled.li`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 10px 0;
  font-size: 2rem;
  font-weight: 400;
  color: white;
  transition: all 0.3s;
  &:hover {
    transform: translateX(10%);
  }
`
export const MenuLink = styled(Link)`
  text-decoration: none;
  color: white;
`