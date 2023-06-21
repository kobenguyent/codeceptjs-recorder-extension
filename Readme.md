# CodeceptJS Recorder Extension

CodeceptJS Recorder extension allows you to export tests directly from the Chrome DevTools [Recorder panel](https://goo.gle/devtools-recorder).

<img width="768" alt="export-as-codeceptjs" src="https://user-images.githubusercontent.com/7845001/204847686-3b5dd197-922a-4470-858c-268ac33543dc.PNG">
## Installalation
Via the Chrome webstore: https://chrome.google.com/webstore/detail/codeceptjs-chrome-recorde/jgdcobhagdbipacidhfnoaccgjooebam

## Usage

1. [Create a new recording](https://goo.gle/devtools-recorder#record) via the Recorder panel
2. Hover over the [export](https://goo.gle/devtools-recorder-eference/#export-flows) icon
3. Click "Export as a CodeceptJS Test"
4. Save file as {testName}.{ts.js}

## Testing

1. Clone the repo
2. Run `npm i` to install the dependencies
3. Build the extension `npm run build`
4. Visit chrome://extensions
5. Enable "Developer mode" via toggle switch in upper right corner
6. Click "Load unpacked" button in upper left corner
7. Select the `dist` folder that you built at step 3
