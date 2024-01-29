# Getting Started with AEM Headless Forms Native App Starter

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

This application is built to consume the form model definition of an adaptive form.

## System Requirements

* Latest version of GIT

* Node.js 16.13.0 or later

* To install Xcode, Android Studio, react native, and other dependencies, follow this [link](https://reactnative.dev/docs/environment-setup)


## Start your Application

### `npm install`

Install dependencies.

### For Android

```bash
npm run android
```

### For iOS

```bash
Install pod
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Mappings Object

A Mappings Object is a JavaScript map that maps the field types defined in the Specification to its respective React Component. The Adaptive Form Super Component uses this map to render the different components defined in the Form JSON.

To use that in your project use the following import, assuming you have added the project as a dependency in your project

```
import {mappings} from '@aemforms/af-react-native'
```

Once you have fetched the JSON for the form, the code would look like

```
import {mappings} from '@aemforms/af-react-native'
const json = {...}
<AdaptiveForm mappings={mappings} formJson={json} />
```

## Fetch form definition from AEM Form Server

When you fetch a form from AEM Forms Server, update the following in the `constant.ts` file.
```

//  set false to fetch form from AEM Forms Server
export const USE_LOCAL_JSON = false;

// URL of AEM Forms Server
export const AEM_URL = '';

For example,
export const AEM_URL = 'http://localhost:4502';

// Adaptive form path
export const AEM_FORM_PATH = '';

For example,
export const AEM_FORM_PATH = 'content/forms/af/demo-form';

```


# Links
1. [Story book](https://opensource.adobe.com/aem-forms-af-runtime/storybook)
2. [HTTP API Docs](https://opensource.adobe.com/aem-forms-af-runtime/api)
3. [Adaptive Form Runtime packages](https://www.npmjs.com/org/aemforms)
