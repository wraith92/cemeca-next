// pages/add-societe.jsx
"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AddTodo from '../components/add';
import RecentSocietes from '../components/recent-societe';
import { Input } from "../../components/ui/input"
import Submit from "../../components/loading";
const AddSociete = () => {
  const [formData, setFormData] = useState(null);
  const [updateCount, setUpdateCount] = useState(0);

  const getInfo = async (siret) => {
    const API_INSEE_SIRET = 'https://api.pappers.fr/v2/entreprise/?siret=';
    const API = API_INSEE_SIRET + siret;

    const response = await fetch(API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 0d8966099937f4d67b63e5ae5266c5f2922aca4fb595b62f'
      },
    });
    const data = await response.json();
    setFormData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const siret = formData.get('siret');
    await getInfo(siret);
  };
  const handleSuccess = () => {
    setUpdateCount(prev => prev + 1);
  };

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight my-4">Société</h2>


      <div className="flex-1 space-y-4">
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Ajouter une société</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col  ">
                <form onSubmit={handleSubmit}>
                  <Input name='siret' type="text" placeholder="SIRET" className="input input-bordered" required />
                  <div className="flex justify-center mt-4">
                    <Submit title="Recherche"  />
                  </div>
                </form>
              </div>
              {formData && <AddTodo formData={formData} onSubmitSuccess={handleSuccess} />}
            </CardContent>
          </Card>
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Sociétés récentes</CardTitle>
              <CardDescription>Voici les sociétés récemment ajoutées.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSocietes updateTrigger={updateCount} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddSociete;
