import { useEffect } from "react";
import { IoMdMore } from "react-icons/io";


const RollingPaperDetail = () =>  {
    const [paper, setPaper] = useState([]);

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
            <IoMdMore />
            <p>{paper[i]}</p>
        </div>
    )
}

export default RollingPaperDetail