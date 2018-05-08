This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Red - Ventures

## Reasoning

This project was a basic interaction thru an API using React.
Because I only have one  API endpoint and only a fixed amount of data to retrieve, my option was using REDUX with a small library for fetch the data asynchronous. 
Most of the requested layouts are in conformity with material design specs from Google, so the logic path was using the material-ui-next components.  All possible colors and font specs are provided thru a theme file.   That decision leverage the design time and obtain more to focus on all functionality. 
About the responsiveness, my major decision has hidden the filters at small screens and call than from a floating button. 
A live version: https://redventures.herokuapp.com/ I got an average of 88,4 for LightHouse.

## Install

```bash

git clone <https://github.com/jrogatis/red_ventures.git>
cd red_ventures
npm install

```

### running a local dev enviroment 
```bash
npm start
```
