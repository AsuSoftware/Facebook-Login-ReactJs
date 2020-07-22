import React from 'react';
import { shallow, render, mount } from 'enzyme';
import LoginFacebook from './LoginFacebook';

describe('LoginFacebook', () => {
  let props;
  let shallowLoginFacebook;
  let renderedLoginFacebook;
  let mountedLoginFacebook;

  const shallowTestComponent = () => {
    if (!shallowLoginFacebook) {
      shallowLoginFacebook = shallow(<LoginFacebook {...props} />);
    }
    return shallowLoginFacebook;
  };

  const renderTestComponent = () => {
    if (!renderedLoginFacebook) {
      renderedLoginFacebook = render(<LoginFacebook {...props} />);
    }
    return renderedLoginFacebook;
  };

  const mountTestComponent = () => {
    if (!mountedLoginFacebook) {
      mountedLoginFacebook = mount(<LoginFacebook {...props} />);
    }
    return mountedLoginFacebook;
  };  

  beforeEach(() => {
    props = {};
    shallowLoginFacebook = undefined;
    renderedLoginFacebook = undefined;
    mountedLoginFacebook = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
