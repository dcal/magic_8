const LaunchService = require("services/launch");
const IntentService = require("services/intent");
const DefaultService = require("services/default");

let getRequestType = (request) => {
    return request["type"]
}

exports.handler = async(alexa, context, response) => {
    let request = alexa["request"]
    switch (getRequestType(request)) {
        case "LaunchRequest":
            return LaunchService.handle(request);
        case "IntentRequest":
            return IntentService.handle(request);
        default:
            return DefaultService.handle(request);
    }
};
