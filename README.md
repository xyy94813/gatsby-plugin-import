# gatsby-plugin-import

> Gatsby plugin to add support for using `babel-plugin-import`.
> (Only support Gatsby version >= 2.0.0)

[![CircleCI branch](https://img.shields.io/circleci/project/github/xyy94813/gatsby-plugin-import/master.svg?style=flat-square)](https://circleci.com/gh/xyy94813/gatsby-plugin-import)
[![Codecov](https://img.shields.io/codecov/c/github/xyy94813/gatsby-plugin-import/master.svg?style=flat-square)](https://codecov.io/gh/xyy94813/gatsby-plugin-import/branch/master)
[![Dependencies](https://img.shields.io/david/xyy94813/gatsby-plugin-import.svg)](https://david-dm.org/xyy94813/gatsby-plugin-import)
[![DevDependencies](https://img.shields.io/david/dev/xyy94813/gatsby-plugin-import.svg)](https://david-dm.org/xyy94813/gatsby-plugin-import?type=dev)

[![npm package](https://img.shields.io/npm/v/gatsby-plugin-import.svg?style=flat-square)](https://www.npmjs.org/package/gatsby-plugin-import)
[![npm downloads](https://img.shields.io/npm/dm/gatsby-plugin-import.svg?style=flat-square)](http://npmjs.com/gatsby-plugin-import)

## Usage

### Install

Use npm: 
```
npm i gatsby-plugin-import -S
```

Or use yarn:
```
yarn add gatsby-plugin-import
```

### Config

in `gatsby-config.js`

```
module.exports = {
  // ...
  plugins: [
    // ...
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: "antd",
        style: true,   // or 'css'
      }
    },
  ],
}
```

More useage see [there](https://github.com/ant-design/babel-plugin-import)

## Contruibution

DefinitelyTyped only works because of contributions by users like you!

### Git Message

[Follow the Angular git commit message specification](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)

But, you can ignore the `scope`