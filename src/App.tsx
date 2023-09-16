import { useState } from 'react';
import './App.css';
import { descriptions } from './descriptions'

function StepDescription(props: {
  permDesc: {
    Technology: string;
    System: string;
    People: string;
    Process: string;
    Influence: string;
  },
  tempDesc: {
    Technology?: string;
    System?: string;
    People?: string;
    Process?: string;
    Influence?: string;
  }
}) {
  return (<div style={{ color: 'darkgray', fontSize: '10pt', textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%' }}>
    <span style={{ height: '100%' }}><b>Technology</b>-{ props.tempDesc.Technology ?? props.permDesc.Technology }</span>
    <span style={{ height: '100%' }}><b>System</b>-{ props.tempDesc.System ?? props.permDesc.System }</span>
    <span style={{ height: '100%' }}><b>People</b>-{ props.tempDesc.People ?? props.permDesc.People }</span>
    <span style={{ height: '100%' }}><b>Process</b>-{ props.tempDesc.Process ?? props.permDesc.Process }</span>
    <span style={{ height: '100%' }}><b>Influence</b>-{ props.tempDesc.Influence ?? props.permDesc.Influence }</span>
  </div>)
}

function Button(props: {
  name: string;
  image: string;
  clicked: boolean;
  onClick: (image: string) => void;
  onMouseEnter: (image: string) => void;
  onMouseLeave: (image: string) => void;
}) {
  function onButtonClick() {
    props.onClick(props.image)
  }

  function onMouseEnter() {
    props.onMouseEnter(props.image)
  }

  function onMouseLeave() {
    props.onMouseLeave(props.image)
  }

  if (props.clicked) {
    return (
      <button className="block" style={{ background: "lightGray" }} onClick={onButtonClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{ props.name }</button>
    )  
  } else {
    return (
      <button className="block" onClick={onButtonClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{ props.name }</button>
    )
  }
}

function Image(props: {
  imageUrl: string;
  hoveringImageUrl: string;
}) {
  if (props.hoveringImageUrl) {
    return (
      <div style={{ width: "100%", height: "100%", position: 'relative', top: "0", left: "0" }}>
        <img src={ props.imageUrl } alt="" style={{ width: "90%", height: "auto", position: 'relative', top: "0", left: "0", opacity: "0.4" }}></img>
        <img src={ props.hoveringImageUrl } alt="" style={{ width: "90%", height: "auto", position: 'absolute', top: "0", left: "5%" }}></img>
      </div>
    )  
  } else {
    return (
      <img src={ props.imageUrl } alt="" style={{ width: "90%", height: "auto" }}></img>
    )  
  }
}

function App() {
  const [imageUrl, setImageUrl] = useState("http://www.engineeringladders.com/charts/developer-1-dark.png");

  const [hoveringImgUrl, setHoveringImageUrl] = useState("");

  const [curPermDesc, setPermCurDesc] = useState(descriptions[0]);

  const [curTempDesc, setTempCurDesc] = useState({});

  const [button1State, setButton1State] = useState(true);
  const [button2State, setButton2State] = useState(false);
  const [button3State, setButton3State] = useState(false);
  const [button4State, setButton4State] = useState(false);
  const [button5State, setButton5State] = useState(false);
  const [button6State, setButton6State] = useState(false);
  const [button7State, setButton7State] = useState(false);
  const [button8State, setButton8State] = useState(false);
  const [button9State, setButton9State] = useState(false);
  const [button10State, setButton10State] = useState(false);
  const [button11State, setButton11State] = useState(false);
  const [button12State, setButton12State] = useState(false);
  const [button13State, setButton13State] = useState(false);
  const [button14State, setButton14State] = useState(false);

  const setButtonStateArray = [
    setButton1State,
    setButton2State,
    setButton3State,
    setButton4State,
    setButton5State,
    setButton6State,
    setButton7State,
    setButton8State,
    setButton9State,
    setButton10State,
    setButton11State,
    setButton12State,
    setButton13State,
    setButton14State,
  ];

  function activateButton(buttonNumber: number) {
    const activateIndex = buttonNumber - 1;

    setButtonStateArray.forEach((set, index) => {
      if (index === activateIndex) {
        set(true)
      } else {
        set(false)
      }
    });
  }

  function getCallBackForButtonClick(buttonNumber: number) {
    return (imageUrl: string) => {
      activateButton(buttonNumber)
      setImageUrl(imageUrl)
      setPermCurDesc(descriptions[buttonNumber - 1])
    }
  }

  function getCallBackForMouseEnter(buttonNumber: number) {
    return (imageUrl: string) => {
      setHoveringImageUrl(imageUrl)
      setTempCurDesc(descriptions[buttonNumber - 1])
    }
  }

  function getCallBackForMouseLeave(buttonNumber: number) {
    return (imageUrl: string) => {
      setHoveringImageUrl("")
      setTempCurDesc({})
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', background: "inherit", width: "100%", height: "100%" }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: "100%", height: "100%", background: "inherit" }}>
              <Image imageUrl={ imageUrl } hoveringImageUrl={ hoveringImgUrl }></Image>
            </div>
          </div>
          <div style={{ flex: 0.5, display: 'flex', flexDirection: 'column', maxWidth: "32%" }}>
            <div style={{ flex: 3, background: "inherit", display: "flex", gap: '30px' }}>            
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="row-div">
                  <Button name="D1" image="http://www.engineeringladders.com/charts/developer-1-dark.png" onClick={ getCallBackForButtonClick(1) } onMouseEnter={ getCallBackForMouseEnter(1) } onMouseLeave={ getCallBackForMouseLeave(1) } clicked={ button1State }></Button>
                </div>
                <div className="row-div">
                  <Button name="D2" image="http://www.engineeringladders.com/charts/developer-2-dark.png" onClick={ getCallBackForButtonClick(2) } onMouseEnter={ getCallBackForMouseEnter(2) } onMouseLeave={ getCallBackForMouseLeave(2) } clicked={ button2State }></Button>
                </div>
                <div className="row-div">
                  <Button name="D3" image="http://www.engineeringladders.com/charts/developer-3-dark.png" onClick={ getCallBackForButtonClick(3) } onMouseEnter={ getCallBackForMouseEnter(3) } onMouseLeave={ getCallBackForMouseLeave(3) } clicked={ button3State }></Button>
                </div>                
              </div>
              <div style={{ flex: 2, maxWidth: "66%" }}>
                <StepDescription permDesc={curPermDesc} tempDesc={curTempDesc}></StepDescription>
              </div>
            </div>
            <div style={{ flex: 4, background: "inherit", display: "flex", flexDirection: "column" }}>            
              <div className="row-div">
                <Button name="D4" image="http://www.engineeringladders.com/charts/developer-4-dark.png" onClick={ getCallBackForButtonClick(4) } onMouseEnter={ getCallBackForMouseEnter(4) } onMouseLeave={ getCallBackForMouseLeave(4) } clicked={ button4State }></Button>
                <Button name="T1" image="http://www.engineeringladders.com/charts/techlead-4-dark.png" onClick={ getCallBackForButtonClick(5) } onMouseEnter={ getCallBackForMouseEnter(5) } onMouseLeave={ getCallBackForMouseLeave(5) } clicked={ button5State }></Button>
                <button className="block-other"></button>
              </div>
              <div className="row-div">
                <Button name="D5" image="http://www.engineeringladders.com/charts/developer-5-dark.png" onClick={ getCallBackForButtonClick(6) } onMouseEnter={ getCallBackForMouseEnter(6) } onMouseLeave={ getCallBackForMouseLeave(6) } clicked={ button6State }></Button>
                <Button name="T2" image="http://www.engineeringladders.com/charts/techlead-5-dark.png" onClick={ getCallBackForButtonClick(7) } onMouseEnter={ getCallBackForMouseEnter(7) } onMouseLeave={ getCallBackForMouseLeave(7) } clicked={ button7State }></Button>
                <Button name="M1" image="http://www.engineeringladders.com/charts/engineeringmanager-5-dark.png" onClick={ getCallBackForButtonClick(8) } onMouseEnter={ getCallBackForMouseEnter(8) } onMouseLeave={ getCallBackForMouseLeave(8) } clicked={ button8State }></Button>
              </div>
              <div className="row-div">
                <Button name="D6" image="http://www.engineeringladders.com/charts/developer-6-dark.png" onClick={ getCallBackForButtonClick(9) } onMouseEnter={ getCallBackForMouseEnter(9) } onMouseLeave={ getCallBackForMouseLeave(9) } clicked={ button9State }></Button>
                <Button name="T3" image="http://www.engineeringladders.com/charts/techlead-6-dark.png" onClick={ getCallBackForButtonClick(10) } onMouseEnter={ getCallBackForMouseEnter(10) } onMouseLeave={ getCallBackForMouseLeave(10) } clicked={ button10State }></Button>
                <Button name="M2" image="http://www.engineeringladders.com/charts/engineeringmanager-6-dark.png" onClick={ getCallBackForButtonClick(11) } onMouseEnter={ getCallBackForMouseEnter(11) } onMouseLeave={ getCallBackForMouseLeave(11) } clicked={ button11State }></Button>
              </div>
              <div className="row-div">
                <Button name="D7" image="http://www.engineeringladders.com/charts/developer-7-dark.png" onClick={ getCallBackForButtonClick(12) } onMouseEnter={ getCallBackForMouseEnter(12) } onMouseLeave={ getCallBackForMouseLeave(12) } clicked={ button12State }></Button>
                <Button name="T4" image="http://www.engineeringladders.com/charts/techlead-7-dark.png" onClick={ getCallBackForButtonClick(13) } onMouseEnter={ getCallBackForMouseEnter(13) } onMouseLeave={ getCallBackForMouseLeave(13) } clicked={ button13State }></Button>
                <Button name="M3" image="http://www.engineeringladders.com/charts/engineeringmanager-7-dark.png" onClick={ getCallBackForButtonClick(14) } onMouseEnter={ getCallBackForMouseEnter(14) } onMouseLeave={ getCallBackForMouseLeave(14) } clicked={ button14State }></Button>
              </div>
            </div>
          </div>
          <div style={{ flex: 0.07 }}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
