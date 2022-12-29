import { Box } from '../Layout/Box';
import { Button } from '../UI/Button';
import { IFloatingOptions } from './FloatingOptions.types';

export const FloatingOptions: React.FC<IFloatingOptions> = ({
  x,
  y,
  isVisible,
  options = [],
}) => {
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
            bgColor="#332e5b"
            text={option.label}
            borderColor="#caa5fa"
            onClick={option.onClick}
          />
        ))}
      </Box>
    </div>
  );
};
