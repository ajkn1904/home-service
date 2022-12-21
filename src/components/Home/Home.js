import { faLineChart, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    useTitle('Home')            // dynamic title
    
    
    return (
        <div>

            <section className="hero min-h-[60vh]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">HOMEservice</h1>
                    <p className="mb-5">“We Love to Serve.”</p>

                </div>
            </div>
            </section>
            <section>
                <p className="text-center mt-24 text-3xl px-4 pt-4 font-bold">Our Latest Services</p>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-12 sm:mx-36 md:ml-14 lg:ml-20 my-12'>

                    {
                        services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to="/services" className='btn my-24'>SEE ALL</Link>
                </div>
            </section>

            
            <section className='text-center bg-orange-100 p-10 my-10'>
            
                <h1 className='text-center my-10 text-3xl p-4 font-bold'>New Client Discount Offer!  <div className="badge bg-red-500 border-0 p-8 text-3xl">$25 OFF!</div></h1>
                <button className='btn btn-warning font-bold'><FontAwesomeIcon icon={faMessage} className="mx-2 w-5"></FontAwesomeIcon> Email Code "HOMEsErViCe@123" </button>
                <div className="flex justify-evenly gap-5 text-center auto-cols-max sm:w-2/12 lg:w-5/12 mx-auto my-10">
                    <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-3">
                        <span className="countdown font-mono text-5xl">
                        <span style={{"--value":15}}></span>
                        </span>
                        days
                    </div> 
                    <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-3">
                        <span className="countdown font-mono text-5xl">
                        <span style={{"--value":10}}></span>
                        </span>
                        hours
                    </div> 
                    <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-3">
                        <span className="countdown font-mono text-5xl">
                        <span style={{"--value":24}}></span>
                        </span>
                        min
                    </div> 
                </div>
            </section>
            
            <section className='p-16'>
                <p className="text-center text-3xl p-4 font-bold mb-5">Insight</p>
                <div className="bg-green-50 stats shadow flex flex-col sm:flex-col md:flex-row lg:flex-row overflow-auto scrollbar-hide">
    
                    <div className="stat">
                        <div className="stat-figure text-primary  hidden sm:hidden md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <p className="stat-title">Providing services more than</p>
                        <p className="stat-value text-primary">2K</p>
                        <p className="stat-desc">services last month</p>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure text-warning  hidden sm:hidden md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <p className="stat-title">We provide</p>
                        <p className="stat-value text-warning">100%</p>
                        <p className="stat-desc">fast service</p>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure  hidden sm:hidden md:block">
                            <FontAwesomeIcon icon={faLineChart} className='inline-block w-8 h-8 stroke-current'></FontAwesomeIcon>
                        </div>
                        <p className="stat-title">Today</p>
                        <p className="stat-value">90</p>
                        <p className="stat-title">People booked services from us.</p>
                        <p className="stat-desc text-secondary">11 services on progress</p>
                    </div>
                    </div>
                
            </section>
            
            
        </div>
    );
};

export default Home;