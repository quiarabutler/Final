import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate()
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
            <div class="container">
                <a class="navbar-brand" onClick={e => navigate("/")}>Customer Management</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                            <a class="nav-link" aria-current="page" onClick={e => navigate("/Login")}>Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" onClick={e => navigate("/")}>Customers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={e => navigate("/addcustomer")}>Add Customer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={e => navigate("/Pricing")}>Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={e => navigate("/About")}>About</a>
                        </li>


                    </ul>
                   
                </div>
            </div>
        </nav>
    )
}
