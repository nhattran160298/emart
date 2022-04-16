import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium odio vero dolorum, corporis nisi vitae perspiciatis dignissimos quia, quo voluptate dolor doloremque eaque molestias impedit fugit voluptatibus, ipsa autem omnis vel rem distinctio atque consequuntur? Error natus beatae alias ab quam? Ad facilis reprehenderit, nostrum amet magnam provident, est atque magni vitae ut doloremque accusamus similique voluptas sunt debitis. Dicta, voluptatem adipisci eaque debitis molestias quod minima voluptate voluptates doloribus cum asperiores facere! Vero, minus sapiente optio, aliquam asperiores suscipit repellat molestias quibusdam quis debitis corrupti doloribus nemo ad cupiditate pariatur veniam dolore ullam dolorem numquam obcaecati deserunt, sit quo.
            </p>
            <NavLink to ="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-around">
            <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About