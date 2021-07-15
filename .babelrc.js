module.exports = {
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components", { "ssr": true }
    ],
    [
      "prismjs",
      {
        "languages": "all",
        "plugins": ["keep-markup"],
        "css": true
      }
    ]
  ],
}
