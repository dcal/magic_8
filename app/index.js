const SpeechResponse = require("speechResponse");
const Types = require("app/types");
const Utterance = require("app/utterances");

let getInterrogative = (request) => {
  return request["intent"]["slots"]["interrogative"]["value"];
}

let generateResponse = (interrogative) => {
  let type = Types.getType(interrogative);
  switch (type) {
    case Types.YES_NO_TYPE:
      return Utterance.yesNo();
    case Types.TIME_TYPE:
      return Utterance.time();
    case Types.UNHANDLED_TYPE:
      return Utterance.unhandled();
  }
}

exports.respond = (request) => {
  let interrogative = getInterrogative(request);
  let response = generateResponse(interrogative);
  return SpeechResponse.open(response);
}
