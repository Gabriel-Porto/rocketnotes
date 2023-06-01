import { Header } from "../../Components/Header"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { Section } from "../../Components/Section"
import { NoteItem } from "../../Components/NoteItem"
import { Button } from "../../Components/Button"
import { Link } from "react-router-dom"


import { Container, Form } from "./styles"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}
