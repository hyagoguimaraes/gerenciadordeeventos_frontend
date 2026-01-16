import { Container, IconBox, TextBox } from "./style";

export function CardResumo({ icon: Icon, title, value }) {
  return (
    <Container>
      <IconBox className="icon-box">
        <Icon size={24} />
      </IconBox>
      <TextBox>
        <h4>{title}</h4>
        <strong>{value}</strong>
      </TextBox>
    </Container>
  );
}