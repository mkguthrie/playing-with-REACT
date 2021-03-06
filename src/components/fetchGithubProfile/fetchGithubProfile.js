import './fetchGithubProfile.css';
import { useState, useEffect } from 'react';

const githubUrl = 'https://api.github.com/users/mkguthrie'

function GithubProfile() {

    

    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetchGithubUser()
    }, [])

    const fetchGithubUser = async () => {
        const response = await fetch(githubUrl)
        const jsonData = await response.json()
        setUserData(jsonData)
    }
    

    return (
        <div className='GithubProfile'>
            <h3>Fetch Github Profile Component</h3>
            <div className="githubContents">
                <h4><span>name:</span> {userData.name}</h4>
                <h4><span>website:</span> {userData.blog}</h4>
                <h4><span>location:</span> {userData.location}</h4>
                
                <div className="github-link">
                    <img src='/images/github.svg' className="Github-logo" alt="gihub-logo" />
                    {/* <a href={userData.html_url} rel="noreferrer" target="_blank"></a> */}
                </div>
            </div>
        </div>
    )
}

export default GithubProfile