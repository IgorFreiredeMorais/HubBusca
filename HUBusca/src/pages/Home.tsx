import Search from "../components/search/Search";
import User from "../components/user/User";
import Error from "../components/error/Error";
import Loader from "../components/loader/Loader";
import * as H from "./StyleHome";
import { useState } from "react";
import { UserProps } from "../types/user";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      const data = response.data;
      const { avatar_url, login, location, name } = data;

      const userData: UserProps = {
        avatar_url,
        login,
        location,
        name,
      };
      setIsLoading(false);
      setUser(userData);
      setError(false);

      const searchHistory = JSON.parse(
        localStorage.getItem("searchHistory") || "[]"
      );
      searchHistory.push(userName);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados:", error);
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Link to="/historico">
        <H.StyledArrowLink>
          <h5>Histórico</h5>
          <FaArrowRight />
        </H.StyledArrowLink>
      </Link>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
