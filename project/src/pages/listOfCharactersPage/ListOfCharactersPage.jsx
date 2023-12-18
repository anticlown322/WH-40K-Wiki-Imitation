import data from  '../../assets/docs/all-characters.json'
import {useState} from 'react'
import classes from './ListOfCharactersPage.module.css';
import CharactersGrid from "../../components/UI/charactersGrid/CharactersGrid.jsx";
const ListOfCharactersPage = () => {
/*{data.characters[id]["name"]}*/
    let charactersArr;
    const [value, setValue] = useState('')

    return (
        <div className={classes.divchik}>
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

            <CharactersGrid></CharactersGrid>
        </div>
    );
};

export default ListOfCharactersPage;