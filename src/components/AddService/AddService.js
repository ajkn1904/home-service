import React from 'react';

const AddService = () => {
    const handleSubmit = (event) => {
        
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const description = form.description.value;
        const ratings = form.ratings.value;
        const price = form.price.value;
        
        
        const addedService = {name, description, img, ratings, price}

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedService)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))


        form.reset()


    }

    return (

        <>

        <h2 className='text-center text-3xl font-bold my-20'>Add Your Service</h2>


        <form className="card-body border w-8/12 rounded-xl mx-auto mb-20 bg-slate-100" onSubmit={handleSubmit}>
                    
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name of the Service" className="input input-bordered" name="name" required />
            </div>


            <div className="form-control">
            <label className="label">
                <span className="label-text">Image URL</span>
            </label>
            <input type="text" placeholder="Image URL of the Service" className="input input-bordered" name="img" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Description</span>
            </label>
            <input type="text" placeholder="Description of the Service" className="input input-bordered" name="description" required />
            </div>


            <div className="form-control">
            <label className="label">
                <span className="label-text">Ratings</span>
            </label>
            <input type="text" placeholder="Ratings of the Service (4.5)" className="input input-bordered" name="ratings" required />
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Price</span>
            </label>
            <input type="text" placeholder="Price of the Service (20)" className="input input-bordered" name="price" required />
            </div>


            <button className="btn btn-success my-10">Add Service</button>

            
        </form>

        </>
    );
};

export default AddService;