import { useState } from "react"


const StudentSignin = () => {
    const [className, setClassName] = useState('');
    const [classCode, setClassCode] = useState('');
    const [name, setName] = useState('');
    
    const handleSignin = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <img src="\images\logo\rolling-paper-logo.webp" />
            
            <input 
                type="text" 
                value={className}
                disabled            
            />

            <form onSubmit={handleSignin}>
                <div>
                    <input 
                    type="text" 
                    placeholder="학급코드를 입력해주세요" 
                    value={classCode}
                    onChange={(e) => setClassCode(e.target.value)}
                    required />
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="이름을 입력해주세요" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                </div>
                <button type="submit">롤링페이퍼 참여</button>
            </form>
        </div>
    )
}

export default StudentSignin;