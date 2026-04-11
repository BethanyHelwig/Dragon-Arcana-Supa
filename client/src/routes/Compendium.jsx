import { useState, useEffect } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

export default function Compendium(){

    return (
        <main className="width-100">
            <Outlet />
        </main>
    )
}