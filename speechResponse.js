let outputSpeech = (responseText, shouldEndSession) => {
    return {
        "version": "1.0",
        "response": {
            "outputSpeech": {
                "type": "PlainText",
                "text": responseText
            },
            "shouldEndSession": shouldEndSession
        }
    }
}

exports.close = (responseText) => {
    return outputSpeech(responseText, true);
}

exports.open = (responseText) => {
  return outputSpeech(responseText, false);
}
