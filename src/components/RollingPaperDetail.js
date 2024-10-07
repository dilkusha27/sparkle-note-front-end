import { useEffect } from "react";


const RollingPaper = () =>  {
    const [className, setClassName] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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
            <h2>{className}</h2>
        </div>
    )
}