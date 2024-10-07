import React, {useState} from "react"
import TeacherHeader from "../components/TeacherHeader";
import RollingPaperList from "../components/RollingPaperList";

const TeacherPage = () => {

    return (
        <div>
            <TeacherHeader />
            <RollingPaperList />
        </div>
    );
    
};

export default TeacherPage;