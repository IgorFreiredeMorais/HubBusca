type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import * as S from "./Style";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      loadUser(userName);
    }
  };

  return (
    <S.Search>
      <h2>Busque por um usuário do GitHub:</h2>
      <S.Container>
        <S.Input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <S.Button onClick={() => loadUser(userName)}>
          <BsSearch />
        </S.Button>
      </S.Container>
    </S.Search>
  );
};

export default Search;
