import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as U from "./Style";

const User = ({
  login,
  name,
  avatar_url,
  location,
  id,
  followers,
  public_repos,
}: UserProps) => {
  const { pathname } = useLocation();
  return (
    <U.User>
      {pathname !== `/perfil/${login}` ? (
        <Link to={`/perfil/${login}`}>
          <U.Imagem src={avatar_url} alt={login} />
        </Link>
      ) : (
        <U.Imagem src={avatar_url} alt={login} />
      )}
      <h2>{name}</h2>
      <h2>{login}</h2>
      {location && (
        <U.Location>
          <MdLocationPin />
          <U.Span>{location}</U.Span>
        </U.Location>
      )}

      {id && <h2> Id: {id}</h2>}
      <U.Container>
        {followers && (
          <U.Quantidade>
            <p>Seguidores</p>
            <U.Number> {followers} </U.Number>
          </U.Quantidade>
        )}

        {followers && public_repos && <U.Divisor />}

        {public_repos && (
          <U.Quantidade>
            <p>Repositórios Públicos</p>
            <U.Number>{public_repos}</U.Number>
          </U.Quantidade>
        )}
      </U.Container>
    </U.User>
  );
};

export default User;
