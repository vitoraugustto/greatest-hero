import { useTheme } from 'styled-components';

import { Box } from '../Layout/Box';
import { Button } from '../UI/Button';
import { IFloatingOptions } from './FloatingOptions.types';

// TODO: Refactor this component
export const FloatingOptions: React.FC<IFloatingOptions> = ({
  x,
  y,
  isVisible,
  options = [],
}) => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'absolute',
        left: x,
        top: y,
      }}
    >
      <Box gap={8}>
        {options.map((option, index) => (
          <Button
            key={index}
            fontSize={18}
            bgColor={theme.colors.background.notEmphasized}
            text={option.label}
            borderColor={theme.colors.border.notEmphasized}
            onClick={option.onClick}
          />
        ))}
      </Box>
    </div>
  );
};
