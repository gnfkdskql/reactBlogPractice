import { useState } from "react";
import "./App.css";

function App() {
    let [isReverse, setIsReverse] = useState(true);
    let [postInfo, setPostInfo] = useState([
        { title: "남자 코트 추천", createAt: "2022-11-01", likes: 0 },
        { title: "여자 코트 추천", createAt: "2022-11-02", likes: 0 },
        { title: "리액트 강의 듣기", createAt: "2022-11-03", likes: 0 },
        { title: "하리보 강의에요", createAt: "2022-11-03", likes: 0 },
    ]);
    let [logo, setLogo] = useState("ReactBlog");

    function plusLikes(idx) {
        idx = 0;

        let insertInfo = [...postInfo];
        insertInfo[idx].likes = insertInfo[idx].likes + 1;

        setPostInfo(insertInfo);
    }

    function changeTitle() {
        let insertInfo = [...postInfo];
        insertInfo[0].title = "새로운 글 제목입니다.";
        setPostInfo(insertInfo);
    }

    function sortGaNaDa() {
        let sortInfo = [...postInfo];
        sortInfo.sort(function (a, b) {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();

            if (!isReverse) {
                if (x < y) return -1;
                if (x > y) return 1;
            } else if (isReverse) {
                if (x < y) return 1;
                if (x > y) return -1;
            }
            return 0;
        });
        setPostInfo(sortInfo);
        setIsReverse(!isReverse);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ color: "red", fontSize: 16 }}>{logo}</h4>
            </div>

            <button onClick={changeTitle}>글수정</button>
            <button onClick={sortGaNaDa}>가나다순정렬</button>

            <div className="list">
                <h4>
                    {postInfo[0].title} <span onClick={plusLikes}>👍</span> {postInfo[0].likes}
                </h4>
                <p>{postInfo[0].createAt} 발행</p>
            </div>
            <div className="list">
                <h4>
                    {postInfo[1].title} <span>👍</span> {postInfo[1].likes}
                </h4>
                <p>{postInfo[1].createAt} 발행</p>
            </div>
            <div className="list">
                <h4>
                    {postInfo[2].title} <span>👍</span> {postInfo[2].likes}
                </h4>
                <p>{postInfo[2].createAt} 발행</p>
            </div>
            <div className="list">
                <h4>
                    {postInfo[3].title} <span>👍</span> {postInfo[3].likes}
                </h4>
                <p>{postInfo[3].createAt} 발행</p>
            </div>
            <Modal />
        </div>
    );
}

// function Modal() {
//     return (
//         <div className="modal">
//             <h4>제목</h4>
//             <p>날짜</p>
//             <p>상세내용</p>
//         </div>
//     );
// }

const Modal = () => {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
};

export default App;
