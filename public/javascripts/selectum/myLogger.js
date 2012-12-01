
function myLog(msg)
{
    // attempt to send a message to the console
    try
    {
        console.log(msg);
    }
    // fail gracefully if it does not exist
    catch(e){}
} 

function buildJsonObject(jsonObject, propertyName, propertyValue) {
    jsonObject[propertyName] = propertyValue;
    return jsonObject;
}