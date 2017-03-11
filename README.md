# ReactJS Traffic Lights 

[![Build Status](https://travis-ci.org/myuwono/traffic-lights.svg?branch=master)](https://travis-ci.org/myuwono/traffic-lights)
[![Coverage Status](https://coveralls.io/repos/github/myuwono/traffic-lights/badge.svg?branch=master)](https://coveralls.io/github/myuwono/traffic-lights?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c7ce1ebd9638400698c17dfcceb16c68)](https://www.codacy.com/app/myuwono/traffic-lights?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=myuwono/traffic-lights&amp;utm_campaign=Badge_Grade)

A simple traffic light simulation using React. 

Tools: Babel(ES6), React, Webpack, Karma, Jasmine, Enzyme, Isparta (for code coverage).

Check out the [online demo](https://jsfiddle.net/myuwono/ctk77rkk/).

## Quick Start

- Install the dependencies
```bash
npm install
```

- Run the application
```bash
npm start
```

- Run tests
```bash
npm test
```

## Description

The traffic lights are designated (N, S) and (E, W) like a compass.
When switching from green to red, the yellow light is displayed for 30 seconds prior to
it switching to red. The lights will change automatically every 5 minutes (300 seconds).

