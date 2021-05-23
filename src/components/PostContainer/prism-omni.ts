import styled from 'styled-components';

export const PrismWrapper = styled.div`
  /**
 * Omni Theme by Rocketseat [@rocketseat]
 * A dark theme based on Dracula
 *
 * Ported for PrismJS by Rafael Martins [@martins-rafael]
 * https://github.com/getomni/omni
 */

  code[class*='language-'],
  pre[class*='language-'] {
    color: #e1e1e6;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Courier New', Courier,
      'Ubuntu Mono', monospace;
    font-size: 1.4rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 5px;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #191622;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 5px;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #483c67;
  }

  .token.punctuation {
    color: #e1e1e6;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property {
    color: #988bc7;
  }

  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ff79c6;
  }

  .token.boolean,
  .token.number {
    color: #78d1e1;
  }

  .token.string,
  .token.attr-value {
    color: #e7de79;
  }

  .token.attr-name,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #67e480;
  }

  .token.selector {
    color: #67e480;
  }

  .token.operator {
    color: #ff79c6;
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #e1e1e6;
  }

  .token.function {
    color: #ff79c6;
  }

  .token.parameter {
    color: #e89e64;
  }

  .token.rule {
    color: #ff79c6;
  }

  .token.atrule {
    color: #78d1e1;
  }

  .token.class-name {
    color: #988bc7;
  }

  .token.keyword {
    color: #ff79c6;
  }

  .token.regex,
  .token.important {
    color: #e89e64;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;
