
function sendToUnity(globalUnityInstance)
{
    globalUnityInstance.SendMessage('GameManager', 'ReceiveDataFromGameBus', "Hello this is data from HTML-DOM");
    console.log("Second button is sending!");

}
