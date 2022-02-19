import "./skillList.scss";

export default function SkillList({ title, id, active, setSelected }) {
  return (
    <li key={id} className={active ? "active" : null} onClick={()=>{
        setSelected(id)
    }}>
      {title}
    </li>
  );
}
