import {render, userEvent} from '@testing-library/react-native';

import CheckBox from './index';

describe('Checkbox', () => {
  it('should render the checkbox component', () => {
    const {getByTestId} = render(<CheckBox testID="checkbox" />);
    expect(getByTestId('checkbox')).toBeDefined();
  });

  it('should be unchecked by default', () => {
    const {queryByTestId} = render(<CheckBox testID="checkbox" />);
    expect(queryByTestId('checkbox-mark')).toBeNull();
  });
  it('should be checked when default checked is true', () => {
    const {queryByTestId} = render(<CheckBox value={true} testID="checkbox" />);
    expect(queryByTestId('checkbox-mark')).not.toBeNull();
  });

  it('should respond to action when press', async () => {
    const user = userEvent;
    const jestFn = jest.fn();

    const {getByTestId} = render(
      <CheckBox testID="checkbox" onCheck={jestFn} />,
    );
    const checkbox = getByTestId('checkbox');

    await user.press(checkbox);

    expect(jestFn).toHaveBeenCalled();
  });
});
