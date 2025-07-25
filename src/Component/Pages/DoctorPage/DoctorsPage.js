import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './doctorpage.scss';

const doctorData = [
  {
    id: 1,
    name: "Dr. Jacob Jones",
    specialization: "Cardiologist",
    rating: 4.5,
    reviews: 100,
    hospital: "Example Hospital, New York",
    experience: "10 years experience",
    languages: "English, Spanish",
    image: "/Image/doctor1.jpg",
  },
  {
    id: 2,
    name: "Dr. Sarah Smith",
    specialization: "Neurologist",
    rating: 4.7,
    reviews: 120,
    hospital: "HealthCare Center, LA",
    experience: "8 years experience",
    languages: "English, French",
    image: "/Image/doctor2.jpg",
  },
  {
    id: 3,
    name: "Dr. Alex Brown",
    specialization: "Dermatologist",
    rating: 4.6,
    reviews: 95,
    hospital: "City Clinic, Chicago",
    experience: "9 years experience",
    languages: "English",
    image: "/Image/doctor3.jpg",
  },
  {
    id: 4,
    name: "Dr. Emily White",
    specialization: "Pediatrician",
    rating: 4.8,
    reviews: 150,
    hospital: "Children's Hospital, Boston",
    experience: "11 years experience",
    languages: "English, Spanish",
    image: "/Image/doctor4.jpg",
  },
  {
    id: 5,
    name: "Dr. John Lee",
    specialization: "Orthopedic Surgeon",
    rating: 4.3,
    reviews: 80,
    hospital: "OrthoCare, Miami",
    experience: "12 years experience",
    languages: "English, Korean",
    image: "/Image/doctor2.jpg",
  },
  {
    id: 6,
    name: "Dr. Olivia Green",
    specialization: "Gynecologist",
    rating: 4.4,
    reviews: 90,
    hospital: "Women's Health Center, Seattle",
    experience: "7 years experience",
    languages: "English",
    image: "/Image/doctor4.jpg",
  },
  {
    id: 7,
    name: "Dr. Michael Scott",
    specialization: "Psychiatrist",
    rating: 4.9,
    reviews: 130,
    hospital: "Mind Wellness, Denver",
    experience: "13 years experience",
    languages: "English",
    image: "/Image/doctor2.jpg",
  },
  {
    id: 8,
    name: "Dr. Lisa Ray",
    specialization: "Oncologist",
    rating: 4.2,
    reviews: 70,
    hospital: "Cancer Care, Houston",
    experience: "6 years experience",
    languages: "English, Spanish",
    image: "/Image/doctor3.jpg",
  },
  {
    id: 9,
    name: "Dr. Kevin Young",
    specialization: "Urologist",
    rating: 4.5,
    reviews: 110,
    hospital: "UroCare Center, Dallas",
    experience: "10 years experience",
    languages: "English, German",
    image: "/Image/doctor4.jpg",
  },
];

const DoctorCards = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);
    const handleRefresh = () => {
    setSearch("");
    setFilter("");
    setSort("");
  };

  // Filter + Sort Logic
  const filteredDoctors = doctorData
    .filter((doc) => {
      const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter ? doc.specialization === filter : true;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sort === 'rating') {
        return b.rating - a.rating;
      } else if (sort === 'experience') {
        const getYears = (exp) => parseInt(exp.split(' ')[0]);
        return getYears(b.experience) - getYears(a.experience);
      }
      return 0;
    });

  return (
    <>
      {/* Top Banner */}
      <div className="appointment-image-container">
        <img
          src="./Image/doc_backpic1.jpg"
          alt="Appointment"
          className="appointment-image"
        />
        <div className="appointment-text">Doctors</div>
      </div>

      {/* Search, Filter, Sort Section */}
   <div className="container py-4">
  <h2 className="mb-4 text-center">Find a Doctor</h2>

  <div className="row gy-2 gx-3 align-items-center">
    <div className="col-12 col-md-6 col-lg-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search doctors..."
        value={search}
        onChange={handleSearchChange}
      />
    </div>

    <div className="col-12 col-md-3 col-lg-3">
      <select
        className="form-select"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="">Filter by Specialization</option>
        {[...new Set(doctorData.map((d) => d.specialization))].map((spec) => (
          <option key={spec} value={spec}>{spec}</option>
        ))}
      </select>
    </div>

    <div className="col-10 col-md-2 col-lg-3">
      <select
        className="form-select"
        value={sort}
        onChange={handleSortChange}
      >
        <option value="">Sort by</option>
        <option value="rating">Rating</option>
        <option value="experience">Experience</option>
      </select>
    </div>

                <div className="col-md-2 text-md-end">
          <button className="btn btn-outline-secondary w-100 mt-2" onClick={handleRefresh}>
            <i className="bi bi-arrow-clockwise me-2"></i>Refresh
          </button>
        </div>
  </div>
</div>


      {/* Doctor Cards */}
      <div className="container doc_main py-4">
        <h1 className="text-center mb-4">Our Doctors</h1>
        <div className="row mt-4">
          {filteredDoctors.map((doc) => (
            <div className="col-lg-6 col-md-12 mb-4" key={doc.id}>
              <div className="card shadow-sm h-100 p-3 d-flex flex-column flex-md-row" style={{ borderRadius: '16px' }}>
                <div className="d-flex flex-column align-items-center align-items-md-start me-md-4 mb-3 mb-md-0" style={{ minWidth: '150px' }}>
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="img-fluid rounded"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                  <button className="btn btn-outline-dark w-100 mt-3">View Profile</button>
                </div>
                <div className="flex-grow-1 text-center text-md-start">
                  <h5 className="fw-bold fs-5">{doc.name}</h5>
                  <p className="text-muted mb-2 fs-6">{doc.specialization}</p>
                  <div className="mb-2 d-flex justify-content-center justify-content-md-start align-items-center">
                    <span className="text-warning me-2">★★★★★</span>
                    <span className="text-muted">{doc.rating} ({doc.reviews})</span>
                  </div>
                  <p className="mb-1 fs-6">
                    <i className="bi bi-geo-alt-fill me-2"></i>{doc.hospital}
                  </p>
                  <p className="mb-1 fs-6">
                    <i className="bi bi-calendar-event me-2"></i>{doc.experience}
                  </p>
                  <p className="mb-0 fs-6">
                    <i className="bi bi-chat-dots me-2"></i>{doc.languages}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {filteredDoctors.length === 0 && (
            <div className="text-center py-5">
              <h5>No doctors found matching your criteria.</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorCards;
