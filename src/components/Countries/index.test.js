import React        from 'react';
import ReactDOM     from 'react-dom';

import Countries    from './index';

describe('Countries', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    

    ReactDOM.render(
      <Provider store={store}>
        <Countries />
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
