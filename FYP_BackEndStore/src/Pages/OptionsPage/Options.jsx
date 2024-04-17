import './Options.css';

import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation';
import ProfilePictureUploader from './ProfilePictureUploader';
import UserDataForm from './UserDataForm';

export default function Options() {
   

   

    const updateProfileData= (e) => {
       e.preventDefault();
    }

    return (
        <>
            <div>
                <HeaderNavigation />
                <div className='flexLeft'>
                    <ProfilePictureUploader />
                    <UserDataForm onSave={updateProfileData} />
                </div>
            </div>
        </>
    );
}