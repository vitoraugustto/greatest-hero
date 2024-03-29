import { CSSObject, ThemeProvider } from 'styled-components';
import { describe, test, vi } from 'vitest';

import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { defaultTheme } from '../../../themes/default';
import { Button } from './Button';

export const renderWithTheme = (children: React.ReactElement) => {
  return render(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>);
};

describe('Button', () => {
  test('Should be able to render the button', () => {
    const { getByTestId } = renderWithTheme(
      <Button testId={buttonTestID} text="Hello, I am a Button!" />
    );

    expect(getByTestId(buttonTestID)).toBeInTheDocument();
  });

  test('Should be able to render based on the children prop', () => {
    const { getByTestId } = renderWithTheme(
      <Button testId={buttonTestID} text="Hello, I am a Button!" />
    );
    expect(getByTestId(buttonTestID)).toHaveTextContent(
      'Hello, I am a Button!'
    );
  });

  test('Should be able to fire event', () => {
    const handleClick = vi.fn();

    const { getByTestId } = renderWithTheme(
      <Button
        onClick={handleClick}
        testId={buttonTestID}
        text="Hello, I am a Button!"
      />
    );

    fireEvent.click(getByTestId(buttonTestID));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Should be able to have default style', () => {
    const { getByTestId } = renderWithTheme(
      <Button testId={buttonTestID} text="Hello, I am a Button!" />
    );

    expect(getByTestId(buttonTestID)).toHaveStyle(defaultStyle);
  });
});

const buttonTestID = 'button';

const defaultStyle: CSSObject = {
  borderRadius: 0,
  backgroundColor: 'transparent',
  border: '2px solid #caa5fa',
  letterSpacing: '1.5px',
  cursor: 'pointer',
  height: 'auto',
  width: 'auto',
  padding: '10px',
};
