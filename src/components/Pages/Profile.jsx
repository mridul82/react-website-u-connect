
import React, { useEffect, useState } from 'react';

import Footer from '../Footer';
import Navbar from '../NavBar';

import StudentProfileForm from '../Forms/StudentProfileForm';
import TeacherProfileForm from '../Forms/TeacherProfileForm';

const Profile = () => {
  const [userType, setUserType] = useState('');

 



  useEffect(() => {
    const userTypeFromStorage = localStorage.getItem("userType");
    console.log(userTypeFromStorage);
    if (userTypeFromStorage) {
      setUserType(userTypeFromStorage);
    }
  }, [])


  return (
    <>
    <Navbar />
    {userType === 'teachers' && <TeacherProfileForm />}
      {userType === 'students' && <StudentProfileForm />}

      

  <Footer />
    </>
  )
}

export default Profile