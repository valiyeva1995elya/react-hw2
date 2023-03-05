// const arrStors = [
//   {
//     name: "Twinkl baby",
//     start: "09:00",
//     finish: "18:00",
//     distance: 500,
//     special: true
//   },
//   {
//     name: "Marwin",
//     start: "10:00",
//     finish: "20:00",
//     distance: 50,
//     special: true
//   },
//   {
//     name: "Kinder Store",
//     start: "10:00",
//     finish: "17:30",
//     distance: 2500,
//     special: false
//   },
//   {
//     name: "Magic Toys",
//     start: "11:00",
//     finish: "22:00",
//     distance: 2000,
//     special: true
//   },

// ]

import {IStor} from "../type"
import { FC } from "react";
 
interface IShops {
  arrStors: IStor[]
}

const Shops :FC<IShops>  = (props) => {
  //@ts-ignor
  const stors = props.arrStors.map(item => <tr key={item.id}>
    <td>{item.name}</td>
    <td>{item.start}</td>
    <td>{item.finish}</td>
    <td>{item.distance} км</td>
    <td>{item.special ? "✓" : "-"}</td>
  </tr>)
  return (
    <div className="block-shops">
      <table>
        <tbody>

        <tr>
          <th>
            Название магазина
          </th>
          <th>
            Начало работы
          </th>
          <th>
            Окончания работы
          </th>
          <th>
            Удаленность от центра
          </th>
          <th>
            Важный для поставщика
          </th>
        </tr>

        {stors}

        </tbody>
      </table>
    </div>
  )

}

export default Shops