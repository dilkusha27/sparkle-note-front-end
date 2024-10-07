import React from "react"

const SocialLogin = () => {

    const handleNaverLogin = () => {
        window.location.href = "https://nid.naver.com/oauth2.0/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
    }
    
    const handleKakaoLogin = () => {
        window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code";
    }
    
    return (
        <div>
            <div>
                <button type="button" onClick={handleNaverLogin}>
                    <img src="/images/socialLoginButtons/btnG_완성형.png" alt="네이버 로그인" />
                </button>
            </div>
            <div>
                <button type="button" onClick={handleKakaoLogin}>
                    <img src="/images/socialLoginButtons/kakao_login_large_narrow.png" alt="카카오 로그인" />
                </button>
            </div>
        </div>
    )
}

export default SocialLogin;