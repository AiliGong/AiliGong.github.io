import { useState } from "react";
import FeaturedList from "./FeaturedList";
import LanguagesList from "./LanguagesList";
import OthersList from "./OthersList";
import SkillList from "./SkillList";
import "./skills.scss";
import ToolsList from "./ToolsList";

export default function Skills() {
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "languages",
      title: "Languages",
    },
    {
      id: "tools",
      title: "Tools",
    },
    {
      id: "others",
      title: "Others",
    },
  ];

  const [selected, setSelected] = useState("featured");

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => {
          return (
            <SkillList
              title={item.title}
              id={item.id}
              active={selected === item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      {selected === "featured" && <FeaturedList />}{" "}
      {selected === "languages" && <LanguagesList />}
      {selected === "tools" && <ToolsList />}
      {selected === "others" && <OthersList />}
    </div>
  );
}
