import React, {useState} from "react"

const TeacherHeader = () => {

    const [teacherName, setTeacherName] = useState('');
    
    const teacherlogout = () => {

    };

    return (
        <div>
            <h2>{teacherName} 선생님</h2>
            <button onClick={teacherlogout}>LOGOUT</button>
        </div>
    );
};

export default TeacherHeader;