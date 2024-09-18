import {render, userEvent} from '@testing-library/react-native';

import Button from './index';

describe('Button', () => {
  it('should render the button component', () => {
    const {getByText} = render(<Button>Hello World</Button>);
    expect(getByText('Hello World')).toBeDefined();
  });
  it('should respond to action when pressed', async () => {
    const user = userEvent;
    const onPress = jest.fn();
    const {getByText} = render(<Button onPress={onPress}>Hello World</Button>);

    const btn = getByText('Hello World');

    await user.press(btn);

    expect(onPress).toHaveBeenCalled();
  });
  it('should not respond to action on pressed when disabled', async () => {
    const user = userEvent;
    const onPress = jest.fn();
    const {getByText} = render(
      <Button disabled={true} onPress={onPress}>
        Hello World
      </Button>,
    );

    const btn = getByText('Hello World');

    await user.press(btn);

    expect(onPress).not.toHaveBeenCalled();
  });

  it('should show a loading spinner when on loading state', async () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button isLoading={true} onPress={onPress}>
        Hello World
      </Button>,
    );

    const spinningLoader = getByTestId('btn-loader');

    expect(spinningLoader).toBeDefined();
  });
});
