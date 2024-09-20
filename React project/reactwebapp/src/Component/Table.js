import React, { useState } from 'react'
import Data from './Data.json'

function Table(){
    const [data, setData] = useState(Data)
    return(
        <div>
            <table>
            {
                data.map((current) =>(
                    <tr>
                        <td>{current.name}</td>
                        <td>{current.email}</td>
                        <td>{current.phone}</td>
                    </tr>

                ))
            }
            </table>

        </div>
    )
}

export default Table; 