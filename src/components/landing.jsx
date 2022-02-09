import styled from 'styled-components'

const StyledLanding = styled.div`
    color: white;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    h3 {
        font-size: 80px;
        margin: 0;
    }

    .cool-title {
        width: 434px;
        height: 150px;
        position: relative;

        h2 {
            margin: 0;
            font-size: 144px;
            height: 144px;
        }

        
        .red, .blue, .white {
            position: absolute;
            bottom: 50%;
        }
        
        .white {
            z-index: 10000;
            transform: translate(0%, 25%)
        }

        .red {
            color: #DA4F4F;
            transform: translate(4px, calc(25% - 4px))
        }

        .blue {
            color: #59DDAE;
            transform: translate(-4px, calc(25% + 4px))
        }

        .solid {
            opacity: 0.5;
        }

        .glow {
            filter: blur(15px);
            opacity: 0.5;
        }
    }
`

const StyledCTA = styled.div`
    width: 168px;
    height: 56px;
    margin: 125px auto 0 auto;
    position: relative;
    z-index: 1000;


    &:hover .red.glow {
        transition: all 0.25s ease-in-out;
        animation: 5s linear 1s infinite rotatered;
    }

    @keyframes rotatered {
        0% {
            opacity: 0.5;
            transform: translate(4px, -4px);
        }
        25% {
            opacity: 0.8;
            transform: translate(4px, 4px);
        }
        50% {
            opacity: 1.3;
            transform: translate(-4px, 4px);
        }
        75% {
            opacity: 0.6;
            transform: translate(-4px, -4px);
        }
    }

    &:hover .blue.glow {
        transition: all 0.25s ease-in-out;
        animation: 5s linear 1s infinite rotateblue;
    }

    @keyframes rotateblue {
        0% {
            opacity: 0.5;
            transform: translate(-4px, 4px);
        }
        25% {
            opacity: 0.4;
            transform: translate(-4px, -4px);
        }
        50% {
            opacity: 0.9;
            transform: translate(4px, -4px);
        }
        75% {
            opacity: 1;
            transform: translate(4px, 4px);
        }
    }

    &:hover .solid {
        transform: translate(0,0);
        transition: all 0.15s;
    }

    .white {
        position: relative;
        height: 56px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        text-decoration: none;
        font-weight: 500;
        background-color: white;
        box-sizing: border-box;
        z-index: 100;
    }

    .red {
        position: absolute;
        display: block;
        width: 168px;
        height: 56px;
        transform: translate(4px, -4px);
        background: #DA4F4F;
    }

    .blue {
        position: absolute;
        display: block;
        width: 168px;
        height: 56px;
        transform: translate(-4px, 4px);
        background: #59DDAE;
    }

    .solid {
        opacity: 0.5;
    }

    .glow {
        filter: blur(15px);
        opacity: 0.5;
        transition: all 0.25s;
    }

` 


function Landing() {
  return (
      <StyledLanding className="landing">
        <h3>The</h3>
        <div className="cool-title">
            <h2 className="red glow">Future</h2>
            <h2 className="red solid">Future</h2>
            <h2 className="blue glow">Future</h2>
            <h2 className="blue solid">Future</h2>
            <h2 className="white">Future</h2>
        </div>
        <h3>is Now</h3>
        <StyledCTA>
            <a href="mailto:cyrille@consultee.fr" className="red glow"></a>
            <a href="mailto:cyrille@consultee.fr" className="red solid"></a>
            <a href="mailto:cyrille@consultee.fr" className="blue glow"></a>
            <a href="mailto:cyrille@consultee.fr" className="blue solid"></a>
            <a href="mailto:cyrille@consultee.fr" className="white">Contact us</a>
        </StyledCTA>
      </StyledLanding>

  );
}

export default Landing;
