import { useState, useEffect } from "react";
import { UserProps } from "../types/user";
import { RepoProps } from "../types/repo";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../components/loader/Loader";
import * as P from "./StylePerfil";
import Repo from "../components/repositorio/Repo";
import User from "../components/user/User";
import axios from "axios";

const Perfil = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repos, setRepos] = useState<RepoProps[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { userName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(
          `https://api.github.com/users/${userName}`
        );
        const userData: UserProps = userResponse.data;
        const reposResponse = await axios.get(
          `https://api.github.com/users/${userName}/repos`
        );
        const reposData: RepoProps[] = reposResponse.data;
        setUser(userData);
        setRepos(reposData);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [userName]);

  const handleGoBack = () => {
    if (location.state && location.state.fromHistory) {
      navigate("/historico");
    } else {
      navigate(-1);
    }
  };

  return (
    <div>
      <Link to="/" onClick={() => handleGoBack()}>
        <P.StyledArrowLink>
          <FaArrowLeft />
        </P.StyledArrowLink>
      </Link>
      {isLoading && <Loader />}
      {user && <User {...user} />}

      {repos && repos.length > 0 && (
        <div>
          <P.Title>Repositórios de {userName}</P.Title>
          {repos.map((repo) => (
            <Link
              key={repo.name}
              to={`https://github.com/${userName}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Repo {...repo} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Perfil;
