import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_CONFIG from '../../Config/apiLink';
import Footer from '../Footer';
import Navbar from '../NavBar';
import LoaderSkeleton from '../../Layout/LoaderSkeleton';
import TeacherCard from '../../Layout/TeacherCard';

const AllTutors = () => {
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const getTeachers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_CONFIG.BASE_URL}/api/get-teachers`);
      if (response.status === 200) {
        console.log(response.data['teachers']);
        const teachersData = response.data['teachers'];
        setTeachers(teachersData);
        setFilteredTeachers(teachersData);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Filter teachers based on search criteria
  useEffect(() => {
    let filtered = teachers;

    if (searchTerm) {
      filtered = filtered.filter(teacher =>
        teacher.profile && teacher.profile.length > 0 &&
        (teacher.profile[0].register_id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         teacher.profile[0].specialisation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         teacher.profile[0].preferred_subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         teacher.profile[0].highest_qualification?.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedSpecialization) {
      filtered = filtered.filter(teacher =>
        teacher.profile && teacher.profile.length > 0 &&
        teacher.profile[0].specialisation?.toLowerCase().includes(selectedSpecialization.toLowerCase())
      );
    }

    if (selectedSubject) {
      filtered = filtered.filter(teacher =>
        teacher.profile && teacher.profile.length > 0 &&
        teacher.profile[0].preferred_subject?.toLowerCase().includes(selectedSubject.toLowerCase())
      );
    }

    setFilteredTeachers(filtered);
  }, [searchTerm, selectedSpecialization, selectedSubject, teachers]);

  useEffect(() => {
    getTeachers();
  }, []);

  // Get unique specializations and subjects for filters
  const specializations = [...new Set(teachers.map(teacher =>
    teacher.profile && teacher.profile.length > 0 ? teacher.profile[0].specialisation : null
  ).filter(Boolean))];

  const subjects = [...new Set(teachers.map(teacher =>
    teacher.profile && teacher.profile.length > 0 ? teacher.profile[0].preferred_subject : null
  ).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            All Verified <span className="text-brightGreen">Tutors</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive collection of qualified and experienced tutors ready to help you achieve your learning goals.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Tutors
              </label>
              <input
                type="text"
                placeholder="Search by name, specialization, subject, or qualification..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Specialization Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization
              </label>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">All Specializations</option>
                {specializations.map((spec, index) => (
                  <option key={index} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">All Subjects</option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters Button */}
          {(searchTerm || selectedSpecialization || selectedSubject) && (
            <div className="mt-4">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSpecialization('');
                  setSelectedSubject('');
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredTeachers.length}</span> of{' '}
            <span className="font-semibold">{teachers.length}</span> tutors
          </p>
        </div>

        {/* Tutors Grid */}
        {loading ? (
          <LoaderSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {Array.isArray(filteredTeachers) && filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher, index) => (
                teacher.profile && teacher.profile.length > 0 && (
                  <div key={index} className="h-full">
                    <TeacherCard
                      img={teacher.profile[0].profile_pic ? `${API_CONFIG.BASE_URL}/${teacher.profile[0].profile_pic}` : ''}
                      title={teacher.profile[0].register_id}
                      specialisation={teacher.profile[0].specialisation}
                      preferred_subject={teacher.profile[0].preferred_subject}
                      highest_qualification={teacher.profile[0].highest_qualification}
                    />
                  </div>
                )
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                  <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">No Tutors Found</h3>
                  <p className="mt-2 text-gray-600">
                    No tutors match your current search criteria. Try adjusting your filters or search terms.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#539165] text-white rounded-full hover:bg-white hover:text-green-600 border border-transparent hover:border-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllTutors;