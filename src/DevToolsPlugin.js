import {
  codeceptjsStringifyChromeRecording,
  stringifyParsedStep
} from "codeceptjs-chrome-recorder";

export class RecorderPlugin {
  async stringify(recording) {
    return await codeceptjsStringifyChromeRecording(JSON.stringify(recording));
  }
  async stringifyStep(step) {
    return await stringifyParsedStep(step);
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
