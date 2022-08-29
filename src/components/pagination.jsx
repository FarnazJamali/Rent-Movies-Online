import React, { Component } from "react";
class Pagination extends Component {
  state = {};
  render() {
    const { currentPage, totalPageNumber, pageSize, onPageChange } = this.props;
    const pages = Math.ceil(totalPageNumber / pageSize);

    const newArray = Array.from({ length: pages }, (_, i) => i + 1);
    // console.log(newArray);
    // console.log(pages);
    return (
      <nav aria-label="...">
        <ul className="pagination pagination-sm justify-content-center">
          {newArray.map((a) => (
            <li className="page-item" key={a} onClick={() => onPageChange(a)}>
              <a
                className={a === currentPage ? "page-link active" : "page-link"}
                href="#"
              >
                {a}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
