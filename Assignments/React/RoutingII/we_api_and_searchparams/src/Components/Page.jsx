import React from "react";

function Page(props) {
  console.log("page called", props);
  return (
    <table>
      <tbody>
        {props.map((elem) => {
          console.log(elem);
          return (
            <tr>
              <td>
                <img className="avatar" src={elem.avatar} />
              </td>
              <td>
                {elem.first_name} {elem.last_name}
              </td>
              <td>{elem.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Page;
