module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static')
    return {
      passthroughFileCopy: true
    }
  }