module.exports = {
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]],
  "env": {
    "development": {
      "plugins": [
        [
          "prismjs",
          {
            "languages": "all",
            "plugins": ["keep-markup"],
            "css": true
          }
        ]
      ]
    }
  }
}
