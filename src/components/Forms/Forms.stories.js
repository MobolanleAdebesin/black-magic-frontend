import React from 'react';
import {storiesOf} from '@storybook/react';
import Forms from './Forms';

storiesOf('Forms', module)
.add('Search', () => <input  placeholder='search' type='search' />)
.add('FirstName', () => <input placeholder='First Name' type='firstName' />)
.add('LastName', () => <input placeholder='Last Name' type='lastName' />)
.add('UserName', () => <input placeholder='User Name' type='userName'  />)
.add('Password', () => <input  placeholder='Password'  type='password' />)

