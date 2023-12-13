import "./styles/App.css";
import {useState} from "react";
import PostList from "./components/PostList.jsx";
import MyButton from "./components/UI/button/MyButton.jsx"
import MyInput from "./components/UI/input/MyInput.jsx";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascrscrscr 1', body:'тело пьяное'},
        {id: 2, title: 'Javascrscrscr 2', body:'тело пьяное'},
        {id: 3, title: 'Javascrscrscr 3', body:'тело пьяное'},
        {id: 4, title: 'Javascrscrscr 4', body:'тело пьяное'},
    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    value={body}
                    onChange={e=>setBody(e.target.value)}
                    type="text"
                    placeholder="Описание поста"
                />

                <MyButton onClick={addNewPost}>создать</MyButton>
            </form>
            <PostList posts={posts} title="Список джавкаскрскрскр"/>
        </div>
    )
}

export default App
