import {
  codeceptjsStringifyChromeRecording,
  stringifyParsedStep
} from "codeceptjs-chrome-recorder";

export class RecorderPlugin {
  async stringify(recording) {
    return codeceptjsStringifyChromeRecording(JSON.stringify(recording));
  }
  async stringifyStep(step) {
    return stringifyParsedStep(step);
  }
}

/* eslint-disable no-undef */
chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new RecorderPlugin(),
  /* name=*/
  'CodeceptJS Test',
  /* mediaType=*/
  'text/javascript'
);
