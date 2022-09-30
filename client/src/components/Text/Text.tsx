interface IText {
  fontSize?: number;
  fontWeight?: string;
  children: React.ReactNode;
}

const Text: React.FC<IText> = ({ fontWeight, fontSize, children }) => {
  return (
    <p
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        textAlign: 'left',
        color: '#caa5fa',
      }}
    >
      {children}
    </p>
  );
};

export default Text;
