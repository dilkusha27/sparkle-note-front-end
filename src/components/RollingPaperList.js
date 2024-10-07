import React, {useState} from "react"

const RollingPaperList = () => {

    const [rollingPager, setRollingPager] = useState([]);
    const [classCode, setClassCode] = useState([]);
    
    const updateRollingPaperName = () => {

    };

    const deleteRollingPaper = () => {

    };

    const createRollingPaper = () => {

    };

    return (
        <div>
            <h3>만들어진 롤링페이퍼</h3>
            <div>
                <p>{rollingPager}</p>
                <br />
                <div>
                    <p>학급코드 : {classCode}</p>
                    <button onClick={updateRollingPaperName}>수정</button>
                    <button onClick={deleteRollingPaper}>삭제</button>
                </div>
            </div>
            <div>
                <p onClick={createRollingPaper}>롤링페이퍼 생성</p>    
            </div>
        </div>
    );
};

export default RollingPaperList;