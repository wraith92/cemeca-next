// pages/add-societe.jsx
"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AddInterlocuteur from '../components/interlocuteur/add';
import RecentInterlocuteur from '../components/interlocuteur/recent-interlocuteur';
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button";
import Link from 'next/link';
import Submit from "../../components/loading";
const Interlocuteur = () => {
  const [formData, setFormData] = useState({

  });
  const [updateCount, setUpdateCount] = useState(0);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };
  const handleSuccess = () => {
    setUpdateCount(prev => prev + 1);
  };

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight my-4">Interlocuteur</h2>


      <div className="flex-1 space-y-4">
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Ajouter un Interlocuteur</CardTitle>
            </CardHeader>
            <CardContent>
               <AddInterlocuteur formData={formData} onSubmitSuccess={handleSuccess} />
            </CardContent>
          </Card>
          <Card className="lg:col-span-4">
          <CardHeader className="flex justify-between flex-row w-full">
                {/* Flex container for title and description */}
                <div className="flex-grow">
                    <CardTitle>Interlocuteurs récents</CardTitle>
                    <CardDescription>Voici les Interlocuteurs récemment ajoutés.</CardDescription>
                </div>
                {/* Flex item for the button, aligned to the right */}
                <Link href="/interlocuteur/liste" passHref>
                    <Button className="btn btn-primary flex items-center mt-0">
                        <i className="fas fa-building mr-2"></i>
                        Voir toutes les interlocuteurs
                    </Button>
                </Link>
            </CardHeader>

            <CardContent>
              <RecentInterlocuteur updateTrigger={updateCount} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Interlocuteur;
