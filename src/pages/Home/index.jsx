import React from "react"
import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Header } from "../../Components/Header"
import { ButtonText } from "../../Components/ButtonText"
import { Input } from "../../Components/Input"
import { Section } from "../../Components/Section"
import { Note } from "../../Components/Note"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">

        <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "React" },
                { id: "2", name: "Nodejs" },
              ],
            }}
          /> 
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
