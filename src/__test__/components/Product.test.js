/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

configure({ adapter: new Adapter() });

describe('<Product/>', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <Product product={ProductMock} handleAddToCart={handleAddToCart} />
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
