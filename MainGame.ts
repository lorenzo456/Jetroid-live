import { ActivityForm, ChallengeRuleScheme, FrameData, GameProperty, PropertyInstance } from './Interfaces/GameBus';


//Onmessage JS!! 
const socket = new WebSocket('ws://localhost:8081');
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

function GetFrameData(gameData:string)
{
    let frameData :FrameData;
    // let activityForm: ActivityForm;
    let propertyInstances: PropertyInstance[];
    let propertyInstance: PropertyInstance;

    propertyInstance.propertyTK = "MINIGAME_DATA";
    propertyInstance.value = gameData;
    propertyInstances.push(propertyInstance);
    
    frameData.gameData = propertyInstances;
    return frameData;
}

function sendToParent(gameData) {
    let frameData= GetFrameData(gameData);
    if (this.trustParent && frameData && frameData.gameData) 
    {  
        const message = JSON.stringify(
            frameData
        );      
        window.parent.postMessage(message, '*');
    } else {
        console.log("Not posting result to parent (due to untrusted source or due to lacking frame data)");
    }
  }