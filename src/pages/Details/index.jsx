import { Container, Links } from "./styles"
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag"
import { ButtonText } from "../../Components/ButtonText"


export function Details() {
  return (
    <Container>
      <Header />

      <ButtonText title="Excluir Nota"/>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}