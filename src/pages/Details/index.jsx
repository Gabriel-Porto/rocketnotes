import React from "react"
import { Container, Links, Content } from "./styles"
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag"
import { ButtonText } from "../../Components/ButtonText"


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            incidunt sequi temporibus neque voluptatum impedit fugit
            dignissimos. Aperiam libero, consectetur ea iste voluptatem
            delectus! Quasi voluptatum facilis unde quos porro.
          </p>

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
        </Content>
      </main>
    </Container>
  )
}
