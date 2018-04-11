const SpeechResponse = require("speechResponse");
const Magic8 = require("app/index");

let isStopIntent = (request) => {
    return request["intent"]["name"] === "AMAZON.StopIntent";
}

let isFortuneIntent = (request) => {
   return request["intent"]["name"] === "fortuneIntent"
}

exports.handle = function(request) {
    if (isStopIntent(request)) {
        return SpeechResponse.close("Whatevs.");
    }
    else if(isFortuneIntent(request)){
        return Magic8.respond(request);
    }
    else {
        return SpeechResponse.fallback();
    }
}