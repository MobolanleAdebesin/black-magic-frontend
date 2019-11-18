import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Buttons';

storiesOf('Button', module)
.add('Link', () => <Button label="->" type="link" />)