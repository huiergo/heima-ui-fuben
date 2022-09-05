import '@testing-library/jest-dom';
import React, { ReactEventHandler } from 'react';
// import { render, screen } from '@testing-library/react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Foo from './index';
import { Button } from '..';
Enzyme.configure({ adapter: new Adapter() });

describe('Order Button', () => {
  it('render text by ordertype', () => {
    const wrapper = shallow(<Button orderType={3}></Button>)
    console.log(wrapper.debug())
    expect(wrapper.text()).toEqual('未完成')
  })

  it('onClick disabled', () => {
    const onclick = jest.fn()
    const wrapper = shallow(<Button disabled onClick={onclick} >disabled button</Button>)
    wrapper.simulate('click')
    expect(onclick).not.toBeCalled()
  })

})