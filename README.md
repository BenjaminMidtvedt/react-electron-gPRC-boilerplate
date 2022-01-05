<img src=".erb/img/erb-banner.svg" width="100%" />

<br>

<p>
  Extension to the modern <a href="https://github.com/electron-react-boilerplate/electron-react-boilerplate">election-react-boilerplate</a> to allow seamless communication with a local python process. The main purpose of this is to build applications powered by some local compute engine, for example for machine learning and computer vision. The compute engine gosts a gRPC server for fast and easy communication with the node process. 
  
  If desired, any compiled language can be used in place of python, as long as it supports gRPC.
  
  The python script is "compiled" using PyInstaller, so the user does not require python on their local system.
</p>

<br>
## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/BenjaminMidtvedt/react-electron-python-boilerplate.git your-project-name
cd your-project-name
npm install
```

**Having issues installing? See our [debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## Docs

See the [docs and guides of the original boilerplate here](https://electron-react-boilerplate.js.org/docs/installation)


## License

MIT © [Electron React Boilerplate](https://github.com/electron-react-boilerplate)
