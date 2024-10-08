import React, {useState} from "react"

const TeacherHeader = () => {

    const [teacherName, setTeacherName] = useState('');
    
    const teacherlogout = () => {
        // 소셜로그인을 로그아웃하는 로직 필요
    };

    return (
        <div>
            <h2>{teacherName} 선생님</h2>
            <button onClick={teacherlogout}>LOGOUT</button>
        </div>
    );
};

export default TeacherHeader;