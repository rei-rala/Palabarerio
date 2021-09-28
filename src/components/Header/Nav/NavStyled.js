import styled from "styled-components";

const NavStyled = styled.nav`
  ul {
    display:flex;
    gap:0.5rem;
    list-style:none;
    padding:0;
  }

  .navActive {
    font-weight:bold;
  }
`

export default NavStyled