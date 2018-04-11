const SpeechResponse = require("speechResponse");
const Utterance = require("app/utterances")
;
exports.handle = function(request) {
    return SpeechResponse.open(Utterance.welcome());
}
