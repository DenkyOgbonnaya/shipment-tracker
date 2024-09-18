import {render} from '@testing-library/react-native';

import Tag from './index';

describe('Tag', () => {
  it('should render the tag component', () => {
    const {getByText} = render(<Tag variant="delivered" />);
    expect(getByText('DELIVERED')).toBeDefined();
  });
});
