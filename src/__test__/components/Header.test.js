/* eslint-disable comma-dangle */
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });
  test('Render del Titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Comprobar SnapShot de Header', () => {
  test('Render del SnapShot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
