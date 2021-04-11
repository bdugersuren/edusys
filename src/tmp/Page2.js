import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Page2() {
    const subjectTables = useSelector(state => state.subjectTable.data);

    return (
      <div>
        <ul>
             Хичээл:
           {subjectTables.map(subj => (
            <li value={subj.id}>{subj.name}</li>

          ))
          }
        
        </ul>
        </div>
    )
}

export default Page2
