import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/user/User";
import * as H from "./StyleHistorico";
import { FaArrowLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { UserProps } from "../types/user";
import { Link } from "react-router-dom";

const Historico = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [usersData, setUsersData] = useState<UserProps[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await Promise.all(
        searchHistory.map(async (name) => {
          const response = await axios.get(
            `https://api.github.com/users/${name}`
          );
          return response.data;
        })
      );

      const uniqueUsers = data.filter(
        (user, index, self) =>
          index === self.findIndex((u) => u.login === user.login)
      );

      setUsersData(uniqueUsers);
    };

    if (searchHistory.length > 0) {
      fetchUserData();
    }
  }, [searchHistory]);

  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    setSearchHistory([]);
    setUsersData([]);
  };

  return (
    <div>
      <Link to="/">
        <H.StyledArrowLink>
          <FaArrowLeft />
          <h5>Home</h5>
        </H.StyledArrowLink>
      </Link>
      {usersData.length > 0 && <H.Title>Histórico de Pesquisa</H.Title>}
      {usersData.length > 0 ? (
        <div>
          <H.Excluir onClick={clearHistory}>
            <p>Limpar Histórico</p>
            <MdDelete />
          </H.Excluir>
          {usersData.map((userData) => (
            <H.Container key={userData.login}>
              <User
                avatar_url={userData.avatar_url}
                login={userData.login}
                name={userData.name}
                location={userData.location}
              />
            </H.Container>
          ))}
        </div>
      ) : (
        <H.Pos>
          <H.Title>Nenhum histórico de pesquisa disponível</H.Title>
        </H.Pos>
      )}
    </div>
  );
};

export default Historico;
