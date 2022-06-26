module.exports = function (config) {

    config.addPassthroughCopy('static');
    config.addPassthroughCopy('admin');
    return {
      passthroughFileCopy: true,
      dir: {
        input: './src',
        output: './build'
      }
    }
  }
  