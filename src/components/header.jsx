import styled from 'styled-components'

const StyledNav = styled.header`
    width: 100%;
    height: 150px;
    position: fixed;
    display: block;
    top: 0;
    color: white;
    backdrop-filter: blur(15px);
    z-index: 100000000;

    .container {
        width: 1055px;
        max-width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title-container {
            display: flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            font-size: 18px;
            height: 150px;
            width: 135px;
            position: relative;  

            &::after {
                content: "Comming soon";
                position: absolute; 
                top: 50%;
                left: 50%;
                width: 250px;
                transform: translateX(-50%);
                font-size: 12px;
                font-weight: 200;
                opacity: 0;
                transition: all 0.15s ease-in;
                color: rgba(255, 255, 255, 0.4)
            }

            &:hover::after {
                opacity: 1;
                top: 60%;
                transition: all 0.15s ease-out;
            }   
        }


        .logo-container h1 {
            font-size: 36px;
            font-weight: 900;
        }
    }
`


function Nav() {
  return (
      <StyledNav className="App-header">
        <div className="container">
          <div className="title-container">Our project</div>
          <div className="title-container">Pricing</div>
          <div className="logo-container"><h1>Weembl.</h1></div>
          <div className="title-container">Our collection</div>
          <div className="title-container">Contact us</div>
        </div>
      </StyledNav>
  );
}

export default Nav;
