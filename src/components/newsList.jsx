import moment from "moment-jalaali";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NewsList extends Component {
  state = {
    news: [
      {
        id: 1,
        "news-name": "Earthquake",
        news_text: "Action|Drama|Thriller",
        news_date: "2018-10-30",
      },
      {
        id: 2,
        "news-name":
          "Black Magic Rites & the Secret Orgies of the 14th Century (Riti, magie nere e segrete orge nel trecento...)",
        news_text: "Horror",
        news_date: "2019-02-19",
      },
      {
        id: 3,
        "news-name": "Moonlighting",
        news_text: "Drama",
        news_date: "2020-08-10",
      },
      {
        id: 4,
        "news-name": "Monkey Business",
        news_text: "Comedy|Sci-Fi",
        news_date: "2017-11-09",
      },
      {
        id: 5,
        "news-name": "Hidalgo",
        news_text: "Adventure|Drama",
        news_date: "2017-11-23",
      },
      {
        id: 6,
        "news-name": "Little Manhattan",
        news_text: "Children|Comedy|Romance",
        news_date: "2019-04-21",
      },
      {
        id: 7,
        "news-name": "Lady from Shanghai, The",
        news_text: "Drama|Film-Noir|Mystery",
        news_date: "2019-07-19",
      },
      {
        id: 8,
        "news-name": "Fire on the Mountain",
        news_text: "Documentary",
        news_date: "2020-05-03",
      },
      {
        id: 9,
        "news-name": "Blazing Guns",
        news_text: "Adventure|Western",
        news_date: "2019-12-11",
      },
      {
        id: 10,
        "news-name": "Friday After Next",
        news_text: "Comedy",
        news_date: "2018-01-10",
      },
      {
        id: 11,
        "news-name": "Sacco and Vanzetti (Sacco e Vanzetti)",
        news_text: "Drama",
        news_date: "2018-07-07",
      },
      {
        id: 12,
        "news-name": "21",
        news_text: "Crime|Drama|Romance|Thriller",
        news_date: "2018-11-26",
      },
      {
        id: 13,
        "news-name": "If Winter Comes",
        news_text: "Drama",
        news_date: "2019-06-11",
      },
      {
        id: 14,
        "news-name": "Belles of St. Trinian's, The",
        news_text: "Comedy",
        news_date: "2021-03-18",
      },
      {
        id: 15,
        "news-name": "Teknolust",
        news_text: "Comedy|Drama|Romance|Sci-Fi",
        news_date: "2019-07-12",
      },
      {
        id: 16,
        "news-name": "Starlift",
        news_text: "(no genres listed)",
        news_date: "2019-12-29",
      },
      {
        id: 17,
        "news-name": "River, The (Joki)",
        news_text: "Drama",
        news_date: "2020-04-30",
      },
      {
        id: 18,
        "news-name": "Finisterrae",
        news_text: "(no genres listed)",
        news_date: "2017-12-06",
      },
      {
        id: 19,
        "news-name": "Battle of Britain, The (Why We Fight, 4)",
        news_text: "Documentary|War",
        news_date: "2022-05-10",
      },
      {
        id: 20,
        "news-name": "Librarian, The: The Curse of the Judas Chalice",
        news_text: "Action|Adventure|Fantasy",
        news_date: "2022-06-16",
      },
    ],
  };
  render() {
    const { news } = this.state;
    const { year, month } = this.props.match.params;

    let years = [];
    news.map((n) => {
      const nDate = new Date(n.news_date);
      const nyear = nDate.getFullYear();
      return years.push(nyear);
    });
    let uniqueYears = Array.from(new Set(years));
    console.log(uniqueYears);

    let finalNews = [];

    if (year && month) {
      finalNews = news.filter((n) => {
        const nDate = new Date(n.news_date);
        const nyear = nDate.getFullYear();
        const nmonth = nDate.getMonth() + 1;
        console.log(nyear, nmonth);
        if (year == nyear && month == nmonth) return n;
      });
      console.log("filter news");
    } else if (year) {
      finalNews = news.filter((n) => {
        const nDate = new Date(n.news_date);
        const nyear = nDate.getFullYear();
        if (nyear == year) return n;
      });
    } else {
      finalNews = [...news];
    }

    return (
      <>
        <div className="alert alert-info text-center">
          {/* <NavLink to={"/newsList/2017"} className="btn btn-warning m-2">
            2017
          </NavLink>
          <NavLink to={"/newsList/2018"} className="btn btn-warning m-2">
            2018
          </NavLink>
          <NavLink to={"/newsList/2019"} className="btn btn-warning m-2">
            2019
          </NavLink>
          <NavLink to={"/newsList/2020"} className="btn btn-warning m-2">
            2020
          </NavLink>
          <NavLink to={"/newsList/2021"} className="btn btn-warning m-2">
            2021
          </NavLink> */}
          {uniqueYears.map((year) => (
            <NavLink
              key={year}
              to={`/newsList/${year}`}
              className="btn btn-warning m-2"
            >
              {year}
            </NavLink>
          ))}

          <NavLink to={"/newsList"} className="btn btn-warning m-2">
            All
          </NavLink>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>News title</th>
                <th>News Category</th>
                <th>News Date</th>
              </tr>
            </thead>
            <tbody>
              {finalNews.map((n) => (
                <tr key={n.id}>
                  <td>{n["news-name"]}</td>
                  <td>{n.news_text}</td>
                  <td className="col-2">
                    {`${n.news_date}, ${moment(n.news_date)
                      .locale("fa")
                      .format("jYYYY-jM-jD")}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default NewsList;
