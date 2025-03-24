import React from 'react'
import { Sidebar } from 'flowbite-react'
import { HiUser, HiArrowSmRight } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DashSidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [tab, setTab] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);

    const handleProfileClick = () => {
        navigate('/dashboard?tab=profile');
        setTab('profile');
    };

    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        active={tab === 'profile'}
                        icon={HiUser}
                        label={'User'}
                        labelColor='dark'
                        onClick={handleProfileClick}
                    >
                        Profile
                    </Sidebar.Item>
                    <Sidebar.Item active icon={HiArrowSmRight} className='cursor-pointer'>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
