import { useState, useEffect } from "react";
import { IoMdMore } from "react-icons/io";


const RollingPaperDetail = () =>  {
    const [author, setAuthor] = useState('');
    const [paper, setPaper] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        
        const fetchMessage = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/rollingPapers/${studentId}') 
            } catch { 
                
            }
        };
    })

    return (
        <div>
            {/* 롤링페이퍼 안 선생님 및 학생들이 남긴 글이 보이게끔 해줘야 함. */}
            {/* 반복문으로 데이터를 가져와서 보여줘야함. */}
            <div>
                <p>From. {paper}</p>
                <IoMdMore />
                <p>{paper}</p>
            </div>
            <div>
                <h1>+</h1>
            </div>
        </div>
    )
}

export default RollingPaperDetail;