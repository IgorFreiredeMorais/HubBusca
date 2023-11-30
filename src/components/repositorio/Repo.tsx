import { RepoProps } from "../../types/repo";
import { CgCPlusPlus } from "react-icons/cg";
import { FaGolang } from "react-icons/fa6";
import {
  FaJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaSwift,
  FaVuejs,
} from "react-icons/fa";
import * as R from "./style";

enum Languages {
  JavaScript = "JavaScript",
  Python = "Python",
  Java = "Java",
  HTML = "HTML",
  CSS = "CSS",
  TypeScript = "TypeScript",
  Ruby = "Ruby",
  CPlus = "C++",
  PHP = "PHP",
  Swift = "Swift",
  Golang = "Golang",
  Vue = "Vue",
}

const getLanguageIcon = (language: Languages) => {
  switch (language) {
    case Languages.JavaScript:
      return <FaJs />;
    case Languages.Python:
      return <FaPython />;
    case Languages.Java:
      return <FaJava />;
    case Languages.HTML:
      return <FaHtml5 />;
    case Languages.CSS:
      return <FaCss3 />;
    case Languages.TypeScript:
      return <FaReact />;
    case Languages.Ruby:
      return <FaNodeJs />;
    case Languages.CPlus:
      return <CgCPlusPlus />;
    case Languages.PHP:
      return <FaPhp />;
    case Languages.Swift:
      return <FaSwift />;
    case Languages.Golang:
      return <FaGolang />;
    case Languages.Vue:
      return <FaVuejs />;
    default:
      return null;
  }
};

const Repo = ({
  name,
  language,
  description,
  created_at,
  pushed_at,
}: RepoProps) => {
  const languageIcon = getLanguageIcon(language as Languages);

  return (
    <R.Repo>
      <R.Title>{name}</R.Title>
      <p>
        Linguagem Utilizada: {language} {languageIcon}
      </p>
      <p>Descrição: {description || "Sem descrição"}</p>
      <p>Data de Criação: {new Date(created_at).toLocaleDateString()}</p>
      <p>Data do Último Push: {new Date(pushed_at).toLocaleDateString()}</p>
    </R.Repo>
  );
};

export default Repo;
