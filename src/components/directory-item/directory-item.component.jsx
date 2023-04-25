import React from 'react'
import { DirectoryContainer, DirectoryBodyContainer } from './directory-item.styles';
import { useNavigate } from 'react-router-dom'


const DirectoryItem = ({ category }) => {
    const { title, imageUrl, route } = category;

    const Navigate = useNavigate();

    const onNavigate = () => Navigate(route)
    console.log(category)



    return (



        <DirectoryContainer>

            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />


            <DirectoryBodyContainer onClick={onNavigate}>
                <h2>
                    {category.title}
                </h2>
                <p>
                    Shop now
                </p>
            </DirectoryBodyContainer>

        </DirectoryContainer>


    )
}

export default DirectoryItem;