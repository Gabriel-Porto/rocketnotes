import { Container } from "./styles"

export function ButtonText({ title, isActive, ...rest }) {
  return (
    <Container 
			type="Button" 
      isActive={isActive}
			{...rest}
		>
      {title}
    </Container>
  )
}