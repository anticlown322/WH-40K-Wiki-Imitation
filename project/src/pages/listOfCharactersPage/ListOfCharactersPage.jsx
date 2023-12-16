import data from  '../../assets/docs/all-characters.json'
import React, {useState} from 'react'
const ListOfCharactersPage = () => {
/*{data.characters[id]["name"]}*/

    let charactersArr;

const [value, setValue] = useState('')
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={event => {
                    setValue(event.target.value);
                    charactersArr = []
                    data.characters.forEach(obj =>{
                        if(obj.name.toLowerCase().includes(value.toLowerCase())) charactersArr.push(obj);
                    })
                    console.log(charactersArr);
                }
            }
            ></input>
        </div>
    );
};

export default ListOfCharactersPage;