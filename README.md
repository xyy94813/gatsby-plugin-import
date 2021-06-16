# gatsby-plugin-import

> Gatsby plugin to add support for using `babel-plugin-import`.
> (Only support Gatsby version >= 2.0.0)

[![CircleCI branch](https://img.shields.io/circleci/project/github/xyy94813/gatsby-plugin-import/master.svg?style=flat-square)](https://circleci.com/gh/xyy94813/gatsby-plugin-import)
[![Codecov](https://img.shields.io/codecov/c/github/xyy94813/gatsby-plugin-import/master.svg?style=flat-square)](https://codecov.io/gh/xyy94813/gatsby-plugin-import/branch/master)
[![Dependencies](https://img.shields.io/david/xyy94813/gatsby-plugin-import.svg)](https://david-dm.org/xyy94813/gatsby-plugin-import)
[![DevDependencies](https://img.shields.io/david/dev/xyy94813/gatsby-plugin-import.svg)](https://david-dm.org/xyy94813/gatsby-plugin-import?type=dev)

[![npm package](https://img.shields.io/npm/v/gatsby-plugin-import.svg?style=flat-square)](https://www.npmjs.org/package/gatsby-plugin-import)
[![npm downloads](https://img.shields.io/npm/dm/gatsby-plugin-import.svg?style=flat-square)](http://npmjs.com/gatsby-plugin-import)

> **Note: this plugin isn't necessary and will no longer be maintained.**
>
> You can use custom babelrc file to configure `babel-plugin-import`.
>
> More details see: [How to use custom babelrc file in Gatsby](https://www.gatsbyjs.com/docs/how-to/custom-configuration/babel/#how-to-use-a-custom-babelrc-file)

## Usage

### Install

Use npm:

```
npm i babel-plugin-import -D
npm i gatsby-plugin-import -S
```

Or use yarn:

```
yarn add babel-plugin-import -D
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

More usage see [there](https://github.com/ant-design/babel-plugin-import)

## Contribution

DefinitelyTyped only works because of contributions by users like you!

### Git Message

[Follow the Angular git commit message specification](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)

But, you can ignore the `scope`
