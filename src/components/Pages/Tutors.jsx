import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import API_CONFIG from "../../Config/apiLink";
import Loader from "../../Layout/Loader";
import Navbar from "../NavBar";

const Tutors = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [coupons, setCoupons] = useState([]);
  const [couponsLoading, setCouponsLoading] = useState(true);
  const [couponsError, setCouponsError] = useState(null);
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(100);
  const [issuingCoupon, setIssuingCoupon] = useState(false);
  // New state for dashboard enhancements
  const [dashboardStats, setDashboardStats] = useState(null);
  const [subscriptionHistory, setSubscriptionHistory] = useState([]);
  const [statsLoading, setStatsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle coupon issuance
  const handleIssueCoupon = async (e) => {
    e.preventDefault();
    if (!selectedStudent || discountPercentage < 1 || discountPercentage > 100) {
      alert('Please select a student and provide a valid discount percentage (1-100)');
      return;
    }

    setIssuingCoupon(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/api/teacher/issue-coupon`,
        {
          student_id: selectedStudent,
          discount_percentage: discountPercentage
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {        alert('Coupon issued successfully!');
        setSelectedStudent('');
        setDiscountPercentage(100);
        
        // Refresh coupons list
        const couponsResponse = await axios.get(
          `${API_CONFIG.BASE_URL}/api/teacher/coupons`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (couponsResponse.status === 200) {
          setCoupons(couponsResponse.data.coupons);
        }

        // Refresh dashboard stats
        try {
          const statsResponse = await axios.get(
            `${API_CONFIG.BASE_URL}/api/teacher/dashboard-stats`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );
          if (statsResponse.status === 200) {
            setDashboardStats(statsResponse.data);
          }
        } catch (statsError) {
          console.error("Error refreshing dashboard statistics:", statsError);
        }
      }
    } catch (error) {
      console.error('Error issuing coupon:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to issue coupon';
      alert(`Error: ${errorMessage}`);
    } finally {
      setIssuingCoupon(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setCouponsLoading(true);
      setStatsLoading(true);
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          navigate('/login');
          return;
        }

        // Fetch Profile Data
        const profileResponse = await axios.get(
          `${API_CONFIG.BASE_URL}/api/teacher-profile`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (profileResponse.status === 200) {
          setProfileData(profileResponse.data);

          // Fetch subscription data
          try {
            const subscriptionResponse = await axios.get(
              `${API_CONFIG.BASE_URL}/api/teacher/subscription`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  "Content-Type": "application/json",
                },
              }
            );
            if (subscriptionResponse.status === 200) {
              setSubscriptionData(subscriptionResponse.data);
            }
          } catch (subscriptionError) {
            console.error("Error fetching subscription:", subscriptionError);
          }

          if (profileResponse.data && profileResponse.data.profile !== null) {
            try {
              const couponsResponse = await axios.get(
                `${API_CONFIG.BASE_URL}/api/teacher/coupons`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                  },
                }
              );
              if (couponsResponse.status === 200) {
                setCoupons(couponsResponse.data.coupons);
              }            } catch (couponError) {
              console.error("Error fetching coupons:", couponError);
              setCouponsError(couponError);
            }

            // Fetch students for coupon issuance
            try {
              const studentsResponse = await axios.get(
                `${API_CONFIG.BASE_URL}/api/students`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                  },
                }
              );
              if (studentsResponse.status === 200) {
                setStudents(studentsResponse.data.students || []);
              }
            } catch (studentsError) {
              console.error("Error fetching students:", studentsError);
            }

            // Fetch dashboard statistics
            try {
              const statsResponse = await axios.get(
                `${API_CONFIG.BASE_URL}/api/teacher/dashboard-stats`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                  },
                }
              );
              if (statsResponse.status === 200) {
                setDashboardStats(statsResponse.data);
              }
            } catch (statsError) {
              console.error("Error fetching dashboard statistics:", statsError);
            }

            // Fetch subscription history
            try {
              const historyResponse = await axios.get(
                `${API_CONFIG.BASE_URL}/api/teacher/subscription-history`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                  },
                }
              );              if (historyResponse.status === 200) {
                setSubscriptionHistory(historyResponse.data.subscription_history);
              }
            } catch (historyError) {
              console.error("Error fetching subscription history:", historyError);
            }
          }
        } else if (profileResponse.status === 404) {
          navigate('/add-tutor-profile');
          return;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        setCouponsLoading(false);
        setStatsLoading(false);
      }
    };    fetchData();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />

      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto px-4 py-8">
          {profileData && profileData.profile !== null ? (
            <>
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                  <div className="flex items-center space-x-6">
                    <img
                      src={profileData.imageUrl}
                      alt="Profile"
                      className="rounded-full h-32 w-32 object-cover border-4 border-white shadow-lg"
                    />
                    <div className="text-white">
                      <h2 className="text-3xl font-bold mb-2">
                        {profileData.profile.teacher["name"]}
                      </h2>
                      <div className="text-lg opacity-90">
                        <p><span className="font-semibold">ID:</span> {profileData.profile.register_id}</p>
                        <p><span className="font-semibold">Phone:</span> {profileData.profile.whatapp_no}</p>
                        <p><span className="font-semibold">Location:</span> {profileData.profile.area_locality}, {profileData.profile.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">Students</h3>
                  <p className="text-3xl font-bold text-blue-600">{profileData.profile.student_count}</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">Exams Conducted</h3>
                  <p className="text-3xl font-bold text-green-600">0</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">Remuneration</h3>
                  <p className="text-3xl font-bold text-purple-600">₹0</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">Subscription</h3>
                  <p className="text-3xl font-bold text-yellow-600">
                    {subscriptionData ? `₹${subscriptionData.amount}` : 'N/A'}
                  </p>
                </div>

                {/* New Coupons Available Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">Available Coupons</h3>
                  <p className="text-3xl font-bold text-red-600">
                    {dashboardStats ? dashboardStats.coupon_stats.available_coupons : '-'}
                  </p>
                </div>
              </div>

              {/* Issue Coupon Section */}
              <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
                  <h3 className="text-2xl font-bold text-white">Issue Coupon to Student</h3>
                </div>                <div className="p-6">
                  {dashboardStats && dashboardStats.coupon_stats.available_coupons === 0 && (
                    <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-yellow-800">No Coupons Available</h3>
                          <p className="mt-1 text-sm text-yellow-700">You don't have any available coupons to issue. Please make a subscription payment to generate new coupons.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <form onSubmit={handleIssueCoupon} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="student-select" className="block text-sm font-medium text-gray-700 mb-2">
                          Select Student
                        </label>
                        <select
                          id="student-select"
                          value={selectedStudent}
                          onChange={(e) => setSelectedStudent(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Choose a student...</option>
                          {students.map(student => (
                            <option key={student.id} value={student.id}>
                              {student.name} - {student.email}
                            </option>
                          ))}
                        </select>
                        {students.length === 0 && (
                          <p className="mt-1 text-sm text-gray-500">No students available</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="discount-percentage" className="block text-sm font-medium text-gray-700 mb-2">
                          Discount Percentage (1-100%)
                        </label>
                        <input
                          type="number"
                          id="discount-percentage"
                          min="1"
                          max="100"
                          value={discountPercentage}
                          onChange={(e) => setDiscountPercentage(parseInt(e.target.value) || 100)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={issuingCoupon || !selectedStudent || (dashboardStats && dashboardStats.coupon_stats.available_coupons === 0)}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        {issuingCoupon ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Issuing Coupon...
                          </>
                        ) : dashboardStats && dashboardStats.coupon_stats.available_coupons === 0 ? (
                          <>
                            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                            </svg>
                            No Coupons Available
                          </>
                        ) : (
                          <>
                            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Issue Coupon
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Coupons Section */}
              <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                  <h3 className="text-2xl font-bold text-white">Your Coupons</h3>
                </div>
                <div className="p-6">
                  {couponsLoading ? (
                    <div className="flex justify-center items-center h-32">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  ) : couponsError ? (
                    <div className="text-red-500 text-center p-4">Error loading coupons: {couponsError.message}</div>
                  ) : coupons.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coupon Code</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issued To</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {coupons.map(coupon => (
                            <tr key={coupon.id} className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{coupon.code}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{coupon.discount_percentage}%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {coupon.student_name || 'N/A'}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  coupon.is_used 
                                    ? 'bg-red-100 text-red-800' 
                                    : 'bg-green-100 text-green-800'
                                }`}>
                                  {coupon.is_used ? 'Used' : 'Active'}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(coupon.created_at).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <p className="mt-2">No coupons available yet.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Dashboard Statistics Section */}
              <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                  <h3 className="text-2xl font-bold text-white">Dashboard Statistics</h3>
                </div>
                <div className="p-6">
                  {statsLoading ? (
                    <div className="flex justify-center items-center h-32">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                    </div>                  ) : dashboardStats ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold text-gray-800">Total Coupons</h4>
                        <p className="text-2xl font-bold text-blue-600">{dashboardStats.coupon_stats.total_coupons}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold text-gray-800">Available Coupons</h4>
                        <p className="text-2xl font-bold text-green-600">{dashboardStats.coupon_stats.available_coupons}</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold text-gray-800">Used Coupons</h4>
                        <p className="text-2xl font-bold text-red-600">{dashboardStats.coupon_stats.used_coupons}</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold text-gray-800">Total Payments</h4>
                        <p className="text-2xl font-bold text-yellow-600">{dashboardStats.subscription_stats.total_payments}</p>
                        <p className="text-sm text-gray-600">₹{dashboardStats.subscription_stats.total_amount_paid}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No statistics available yet.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Subscription History Section */}
              <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
                  <h3 className="text-2xl font-bold text-white">Subscription History</h3>
                </div>
                <div className="p-6">
                  {statsLoading ? (
                    <div className="flex justify-center items-center h-32">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                    </div>
                  ) : subscriptionHistory.length > 0 ? (
                    <div className="overflow-x-auto">                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coupon Generated</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {subscriptionHistory.map((payment) => (
                            <tr key={payment.id} className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{payment.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{payment.amount}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(payment.payment_date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  payment.coupon 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {payment.coupon ? `Yes (${payment.coupon.code})` : 'No'}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {payment.payment_method || 'Manual'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No subscription history available.</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                <svg className="mx-auto h-16 w-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Profile Incomplete</h3>
                <p className="mt-2 text-gray-600">Please complete your profile to access all features.</p>
                <Link 
                  to="/add-tutor-profile" 
                  className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Complete Profile
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tutors;
