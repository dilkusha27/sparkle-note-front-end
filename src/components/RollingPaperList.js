import React, {useState} from "react"

const RollingPaperList = () => {

    const [rollingPager, setRollingPager] = useState([]);
    const [classCode, setClassCode] = useState([]);
    
    const 롤링페이퍼입장 = () => {
        // /pages/RollingPagerDetail로 들어가야 함
    }

    const updateRollingPaperName = () => {

    };

    const deleteRollingPaper = () => {
        // rollingPaper 
    };

    const createRollingPaper = () => {
        // rollingPaper 배열 안에 요소 추가
    };

    return (
        // 선생님이 만든 여러 롤링페이퍼가 나타날 수 있게 하는 기능 필요
        <div>
            <div>
                <p onClick={롤링페이퍼입장}>{rollingPager}</p>
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