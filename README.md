# gatsby-plugin-import

> Gatsby plugin to add support for using `babel-plugin-import`.
> (Only support Gatsby version >= 2.0.0)

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

More useage see [this](https://github.com/ant-design/babel-plugin-import)

## Contruibution

DefinitelyTyped only works because of contributions by users like you!

### Git Message

[Follow the Angular git commit message specification](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
