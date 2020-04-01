import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';
import Paragraph from '@govuk-react/paragraph';

import SkipLink from '.';

import ReadMe from '../README.md';

const stories = storiesOf('Navigation/SkipLink', module);
stories.addDecorator(withDocsCustom(ReadMe));

class AutoFocussed extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the focusable DOM element
    this.focusableRef = React.createRef();
  }

  componentDidMount() {
    this.focusableRef.current.focus();
  }

  render() {
    return <SkipLink ref={this.focusableRef} focusable {...this.props} />;
  }
}

stories.add(
  'Component default',
  () => (
    <div>
      <Paragraph>
        The skip link component in this example should automatically focus. If it loses focus, tab to this example to
        see it.
      </Paragraph>
      <AutoFocussed href="#main-content">Skip to main content</AutoFocussed>
      <br />
      <br />
      <div id="main-content">
        <Paragraph id="main-content">
          This paragraph is within a div with an id of `main-content` to match the `href=&quot;#main-content&quot;` prop
          set on the SkipLink component in this example.
        </Paragraph>
        <Paragraph>
          NB if you are using Safari you may need to go to Preferences &gt; Advanced to enable keyboard focussing.
        </Paragraph>
      </div>
    </div>
  ),
  { chromatic: { delay: 300 } }
);
