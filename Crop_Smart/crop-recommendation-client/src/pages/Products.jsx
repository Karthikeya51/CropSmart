import React, { useState } from 'react';

const cropCategories = [
  {
    category: 'Cereals',
    crops: [
      {
        id: 1,
        name: 'Rice',
        image: 'https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0?auto=format&fit=crop&w=800&q=80',
        description: 'Thrives in warm, humid environments with water-rich fields.',
        details: 'Needs high temperature, 100-200 cm rainfall, and flooded fields.'
      },
      {
        id: 2,
        name: 'Wheat',
        image: 'https://images.unsplash.com/photo-1582515073490-dabd6d48f8d0?auto=format&fit=crop&w=800&q=80',
        description: 'Grows well in cool climates with moderate rainfall.',
        details: 'Requires 10-15°C temperature and well-drained loamy soil.'
      },
      {
        id: 3,
        name: 'Maize',
        image: 'https://images.unsplash.com/photo-1601472544866-61c323fcd166?auto=format&fit=crop&w=800&q=80',
        description: 'Needs warm climate and fertile soil.',
        details: 'Requires temperature between 21°C–27°C and moderate water.'
      },
      {
        id: 4,
        name: 'Barley',
        image: 'https://images.unsplash.com/photo-1599834569208-6da4504095cb?auto=format&fit=crop&w=800&q=80',
        description: 'Tolerates dry conditions and cold weather.',
        details: 'Grows in cool dry climates with 75-100 cm rainfall.'
      },
    ]
  },
  {
    category: 'Pulses',
    crops: [
      {
        id: 5,
        name: 'Lentils',
        image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80',
        description: 'Short-season legumes suited for arid climates.',
        details: 'Grows best in loamy soil and dry regions with 50-75 cm rainfall.'
      },
      {
        id: 6,
        name: 'Chickpeas',
        image: 'https://images.unsplash.com/photo-1576785210088-40e6e0e52b1b?auto=format&fit=crop&w=800&q=80',
        description: 'Important legume crop needing less water.',
        details: 'Requires mild winter, 20–30°C, and moderate soil fertility.'
      },
      {
        id: 7,
        name: 'Black Gram',
        image: 'https://images.unsplash.com/photo-1574680096145-d0763f0d6836?auto=format&fit=crop&w=800&q=80',
        description: 'Common pulse in India, improves soil fertility.',
        details: 'Grows well in loamy soil and hot climate, 25–35°C.'
      },
      {
        id: 8,
        name: 'Green Gram',
        image: 'https://images.unsplash.com/photo-1633891733531-2c48eaaa2533?auto=format&fit=crop&w=800&q=80',
        description: 'High-protein food legume crop.',
        details: 'Needs warm and humid climate with 60–90 cm rainfall.'
      },
    ]
  },
  {
    category: 'Fruits',
    crops: [
      {
        id: 9,
        name: 'Mango',
        image: 'https://cdn.pixabay.com/photo/2018/06/18/16/05/mango-3485108_1280.jpg',
        description: 'Popular tropical fruit needing warm climate.',
        details: 'Requires 24–30°C temperature and dry weather at flowering time.'
      },
      {
        id: 10,
        name: 'Banana',
        image: 'https://images.unsplash.com/photo-1601004890651-c9b72ce3d879?auto=format&fit=crop&w=800&q=80',
        description: 'Grows in tropical climates with consistent rain.',
        details: 'Needs 26–30°C, high humidity, and rich organic soil.'
      },
      {
        id: 11,
        name: 'Papaya',
        image: 'https://images.unsplash.com/photo-1615485925763-520f9b0285ee?auto=format&fit=crop&w=800&q=80',
        description: 'Fast-growing fruit plant suited for warm zones.',
        details: 'Needs 25–30°C and moderate rainfall (100–150 cm).'
      },
      {
        id: 12,
        name: 'Guava',
        image: 'https://images.unsplash.com/photo-1621255812890-2195a0c4747a?auto=format&fit=crop&w=800&q=80',
        description: 'Hardy fruit with high vitamin C content.',
        details: 'Prefers dry, tropical climates with light rainfall.'
      },
    ]
  },
  {
    category: 'Vegetables',
    crops: [
      {
        id: 13,
        name: 'Tomato',
        image: 'https://images.unsplash.com/photo-1582510442304-4aa1a96b76e1?auto=format&fit=crop&w=800&q=80',
        description: 'Grows in warm climate, sensitive to frost.',
        details: 'Needs 20–25°C, well-drained loamy soil, and sunlight.'
      },
      {
        id: 14,
        name: 'Potato',
        image: 'https://images.unsplash.com/photo-1601004890689-d04c7e4a7d4a?auto=format&fit=crop&w=800&q=80',
        description: 'Cool-season crop requiring fertile soil.',
        details: 'Grows in 15–20°C, light soils rich in organic matter.'
      },
      {
        id: 15,
        name: 'Onion',
        image: 'https://images.unsplash.com/photo-1559563365-25dbd1e3e0cb?auto=format&fit=crop&w=800&q=80',
        description: 'Needs dry weather during bulb development.',
        details: 'Requires 12–24°C and loamy, well-drained soils.'
      },
      {
        id: 16,
        name: 'Cabbage',
        image: 'https://images.unsplash.com/photo-1612198738013-8f1233d40a41?auto=format&fit=crop&w=800&q=80',
        description: 'Thrives in cool weather and rich soil.',
        details: 'Best grown in 15–20°C with moisture-retentive soil.'
      },
    ]
  },
  {
    category: 'Cash Crops',
    crops: [
      {
        id: 17,
        name: 'Cotton',
        image: 'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?auto=format&fit=crop&w=800&q=80',
        description: 'Major fiber crop needing warm weather.',
        details: 'Needs 180–200 frost-free days and 75–100 cm rainfall.'
      },
      {
        id: 18,
        name: 'Sugarcane',
        image: 'https://images.unsplash.com/photo-1585128905174-bfb759f5b0d3?auto=format&fit=crop&w=800&q=80',
        description: 'Requires tropical climate and heavy irrigation.',
        details: 'Best in 20–35°C and alluvial soil with water supply.'
      },
      {
        id: 19,
        name: 'Tea',
        image: 'https://images.unsplash.com/photo-1514894781225-7c0743f7e6c2?auto=format&fit=crop&w=800&q=80',
        description: 'Prefers humid, tropical climate with shade.',
        details: 'Needs 20–30°C, high rainfall, and acidic soil.'
      },
      {
        id: 20,
        name: 'Coffee',
        image: 'https://images.unsplash.com/photo-1534351590666-13e03e9f1f42?auto=format&fit=crop&w=800&q=80',
        description: 'Grows in cooler tropical highlands.',
        details: 'Needs shade, 15–24°C, and rich, porous soil.'
      },
    ]
  },
];

export default function Products() {
  const [selectedCrop, setSelectedCrop] = useState(null);

  return (
    <div className="bg-light py-5 min-vh-100">
      <div className="container-fluid">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Explore Crops by Category</h2>
          <p className="text-muted fs-5">Find crops suitable for different climate and soil types</p>
        </div>

        {cropCategories.map((category, idx) => (
          <div key={idx} className="mb-5">
            <h3 className="text-success mb-4">{category.category}</h3>
            <div className="row g-4">
              {category.crops.map((crop) => (
                <div className="col-md-6 col-lg-3" key={crop.id}>
                  <div className="card h-100 shadow-sm">
                    <img src={crop.image} className="card-img-top" alt={crop.name} style={{ height: '180px', objectFit: 'cover' }} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{crop.name}</h5>
                      <p className="card-text text-muted">{crop.description}</p>
                      <button
                        className="btn btn-outline-success mt-auto"
                        onClick={() => setSelectedCrop(crop)}
                        data-bs-toggle="modal"
                        data-bs-target="#cropModal"
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal */}
        <div className="modal fade" id="cropModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              {selectedCrop && (
                <>
                  <div className="modal-header">
                    <h5 className="modal-title">{selectedCrop.name}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setSelectedCrop(null)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="text-muted">{selectedCrop.details}</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => setSelectedCrop(null)}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
