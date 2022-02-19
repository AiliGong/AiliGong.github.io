import "./works.scss";

export default function Works() {
  const data = [
    {
      id: 1,
      name: "Book Shop Website",
      title: "React/SpringBoot",
      icon: "menu_book",
      desc: "A book shop web application based on React and Spring. ",
    },
    {
      id: 2,
      name: "Quiz Application",
      title: "Ruby on Rails",
      icon: "quiz",
      desc: "A quiz applicaiton using Ruby on Rails and deployed on Heroku. ",
      featured: true,
    },
    {
      id: 3,
      name: "Azul Board Game",
      title: "A game coded in C++",
      icon: "sports_esports",
      desc: "A console game simulating the board game Azul. ",
    },
  ];
  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>

            <div className="center">{d.desc}</div>
            <div className="buttom">
              <span class="material-icons-outlined material-icons">
                {d.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/AiliGong">Check my Github</a>
    </div>
  );
}
