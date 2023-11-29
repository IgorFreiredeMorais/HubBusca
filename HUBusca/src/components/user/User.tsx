import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import * as U from "./Style";

const User = ({ login, name, avatar_url, location }: UserProps) => {
  return (
    <U.User>
      <U.Imagem src={avatar_url} alt={login} />
      <h2>{name}</h2>
      <h2>{login}</h2>
      {location && (
        <U.Location>
          <MdLocationPin />
          <U.Span>{location}</U.Span>
        </U.Location>
      )}
    </U.User>
  );
};

export default User;
