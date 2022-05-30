import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import loader from '../assets/loader.gif'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { setAvatarRoute } from '../utils/APIRoutes'

function SetAvatar() {
    const api = 'http://api.multiavatar.com/45678945';
    const navigate = useNavigate()
    const [avatar, setAvatar] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedAvatar, setSelectedAvatar] = useState(undefined)

    const toastOptions = {
        position: 'bottom-right',
        autoClose: 3000,
        pauseOnHover: false,
        draggable: true,
        theme: 'dark',
    }

    const setProfilePicture = async () => {

    }
    useEffect(() => {
        if (localStorage.getItem('chat-app-user')) {
            navigate('/')
        }
    }, [])

    return (
        <>
            <Container>
                <div className="title-container">
                    <h1>Pick an avatar as your profile picture</h1>
                </div>
                <div className="avatars">
                    {

                    }
                </div>
            </Container>
            <ToastContainer />
        </>
    )
}

const Container = styled.div`
    
`

export default SetAvatar