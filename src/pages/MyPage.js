import React, {useState} from "react"
import TeacherHeader from "../components/TeacherHeader";
import RollingPaperList from "../components/RollingPaperList";

const MyPage = () => {

    return (
        <div>
            <TeacherHeader />
            <RollingPaperList />
        </div>
    );
    
};

export default MyPage;