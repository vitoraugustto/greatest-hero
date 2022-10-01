interface IText {
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  children: React.ReactNode;
}

const Text: React.FC<IText> = ({
  fontWeight,
  fontSize,
  color = '#caa5fa',
  children,
}) => {
  return (
    <p
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        textAlign: 'left',
        color: color,
      }}
    >
      {children}
    </p>
  );
};

export default Text;
