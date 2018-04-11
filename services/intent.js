const SpeechResponse = require("speechResponse");
const Magic8 = require("app/index");
const Utterance = require("app/utterances");

let isStopIntent = (request) => {
    return request["intent"]["name"] === "AMAZON.StopIntent";
}

let isFortuneIntent = (request) => {
   return request["intent"]["name"] === "fortuneIntent"
}

exports.handle = function(request) {
    if (isStopIntent(request)) {
        return SpeechResponse.close(Utterance.goodbye());
    }
    else if(isFortuneIntent(request)){
        return Magic8.respond(request);
    }
    else {
        return SpeechResponse.open(Utterance.ambiguous());
    }
}
