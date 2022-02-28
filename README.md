# gatsby-remark-hard-breaks

A Gatsby Remark plugin to add break support without needing spaces for Gatsby 4

## Installation

```bash
yarn add gatsby-remark-hard-breaks
```

## Usage

Add the plugin to your Gatsby config:

```js
// gatsby-config.js
plugins: [
    {
        resolve: "gatsby-transformer-remark",
        options: {
            plugins: [
                {
                    resolve: 'gatsby-remark-hard-breaks'
                },
            ]
        }
    },
],
```
